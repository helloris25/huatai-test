<script lang="ts" context="module">
    import {createEventDispatcher} from 'svelte';
    import Moon from './icons/Moon.svelte';
    import Sun from './icons/Sun.svelte';
    import {MeterCalculator} from './MeterCalculator';

    const maxLevel = 7;
    const barsArray = Array.from({length: maxLevel}, (_, index) => index + 1);
</script>

<script lang="ts">
    const dispatch = createEventDispatcher();
    export let value: number = 0;
    export let min: number = 0;
    export let max: number = 1;
    export let optimum: number = 0.65;



    let isHovered: boolean = false;
    let hoveredLevel: number;

    let meterCalculator = new MeterCalculator(min, max, maxLevel);

    $: selectedLevel = meterCalculator.toLevelFromMinMax(value);
    $: optimumLevel = meterCalculator.toLevelFromMinMax(optimum);
    $: currentLevel = isHovered ? hoveredLevel : selectedLevel;
    $: isReachedOptimum = currentLevel > optimumLevel;

    function changeLevel(newLevel: number): void {
        if (newLevel >= 1 && newLevel <= maxLevel) {
            selectedLevel = newLevel;
            dispatch('changeValue', meterCalculator.toMinMaxFromLevel(newLevel));
        }
    }

    function handleMouseOverBar(levelNumber: number): void {
        isHovered = true;
        hoveredLevel = levelNumber;
    }

    function handleMouseOutBar(): void {
        isHovered = false;
    }

    function getStyleControlByActive(isActiveControl: boolean):string  {
        return isActiveControl ? '1' : '0.4';
    }
</script>

<div class="brightnessMeter"
     role="slider"
     aria-label="Регулятор яркости"
     aria-valuemin="{0}"
     aria-valuemax="{maxLevel}"
     aria-valuenow="{selectedLevel}"
     aria-valuetext="Уровень яркости {selectedLevel}">

    <button
            class="brightControl"
            on:click={() => changeLevel(currentLevel - 1)}
            aria-label="сделать темнее">
        <Moon fill-opacity={getStyleControlByActive(!isReachedOptimum)} />
    </button>

    <div class="bar">
        {#each barsArray as levelNumber (levelNumber + 1)}
            <button
                    class="wrapperLevelLine"
                    on:click={() => changeLevel(levelNumber)}
                    on:mouseover={() => handleMouseOverBar(levelNumber)}
                    on:focus={() => handleMouseOverBar(levelNumber)}
                    on:mouseout={handleMouseOutBar}
                    on:blur={handleMouseOutBar}
                    aria-label="Сделать яркость с уровнем {levelNumber}">
                <div
                        class="levelLine"
                        class:fillLevel={currentLevel >= levelNumber}
                        class:currentLevel={currentLevel === levelNumber}
                        class:previousLevel={currentLevel - 1 === levelNumber && currentLevel !== levelNumber}
                        class:nextLevel={currentLevel + 1 === levelNumber && currentLevel !== levelNumber}
                />
            </button>
        {/each}
    </div>

    <button class="brightControl"
            on:click={() => changeLevel(currentLevel + 1)}
            aria-label="сделать ярче">
        <Sun fill-opacity={getStyleControlByActive(isReachedOptimum)}/>
    </button>
</div>

<style>
    @import '../common/vars.css';

    .brightnessMeter {
        height: 58px;
        display: inline-flex;
        padding: 8px;
        justify-content: center;
        align-items: center;
        gap: 28px;
    }

    button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: none;
        margin: 0;
        padding: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        cursor: pointer;
        background: transparent;
        outline: none;
    }

    button.brightControl:focus-visible {
        outline: 2px var(--white-100) solid;
    }

    .bar {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .wrapperLevelLine {
        padding: 0 5px;
        cursor: pointer;
    }

    .wrapperLevelLine:first-child {
        padding-left: 0;
    }

    .wrapperLevelLine:last-child {
        padding-right: 0;
    }

    .levelLine {
        width: 8px;
        height: 24px;
        border-radius: 3px;
        background: var(--white-40);
        transition: var(--transition-time);
    }

    .currentLevel,
    .levelLine:hover {
        transform: scaleY(1.5) scaleX(1.25);
        box-shadow: 0 0 24px -2px var(--white-100), 0 0 6px -1px var(--white-100);
    }

    .fillLevel {
        background: var(--white-100);
    }

    .previousLevel,
    .nextLevel {
        transform: scaleY(1.16);
    }

    .nextLevel {
        background: var(--white-60);
    }

    @media (max-width: 320px) {
        .levelLine {
            width: 6px;
            height: 20px;
        }

        .brightnessMeter {
            gap: 24px;
        }
    }
</style>
