<script lang="ts" context="module">
    import {createEventDispatcher} from 'svelte';
    import ScaleBar from '$lib/ScaleBar/ScaleBar.svelte';
    import Icon from '$lib/Icon/Icon.svelte';
    import {MeterCalculator} from './MeterCalculator';

    const countBars = 7;

    const controlStyleVariant = {
        active: '1',
        passive: '0.4',
    } as const;

    function getStyleControlByActive(isActiveControl: boolean): Record<string, string> {
        return {
            'fill-opacity': isActiveControl ? controlStyleVariant.active : controlStyleVariant.passive,
        };
    }
</script>

<script lang="ts">
    const dispatch = createEventDispatcher();
    export let value: number = 0;
    export let min: number = 0;
    export let max: number = 1;
    export let optimum: number = 0.65;

    $: meterCalculator = new MeterCalculator(min, max, countBars);
    $: ininLevel = meterCalculator.toLevelFromMinMax(value);
    $: optimumLevel = meterCalculator.toLevelFromMinMax(optimum);
    $: currentLevel = ininLevel;
    $: isReachedOptimum = currentLevel > optimumLevel;

    function changeLevel(newLevel: number): void {
        if (newLevel >= 1 && newLevel <= countBars && newLevel !== currentLevel) {
            emitChangeLevel(newLevel);
        }
    }

    function emitChangeLevel(level: number): void {
        dispatch('changeValue', meterCalculator.toMinMaxFromLevel(level));
    }
</script>

<div
        class="brightnessMeter"
        role="slider"
        aria-label="Регулятор яркости"
        aria-valuemin={0}
        aria-valuemax={countBars}
        aria-valuenow={currentLevel}
        aria-valuetext="Уровень яркости {currentLevel}"
>
    <button
            class="resetButtonStyle"
            on:click={() => changeLevel(currentLevel - 1)}
            aria-label="сделать темнее">
        <Icon icon={'Moon'} {...getStyleControlByActive(!isReachedOptimum)} />
    </button>

    <ScaleBar
        {countBars}
        selectedLevel={currentLevel}
        on:changeValue={({detail}) => changeLevel(detail)}
    />

    <button
            class="resetButtonStyle"
            on:click={() => changeLevel(currentLevel + 1)}
            aria-label="сделать ярче">
        <Icon icon={'Sun'} {...getStyleControlByActive(isReachedOptimum)} />
    </button>
</div>

<style>
    @import '../common/vars.css';
    @import '../common/styles.css';

    .brightnessMeter {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 17px;
    }

    @media (max-width: 320px) {
        .brightnessMeter {
            gap: 13px;
        }
    }
</style>
