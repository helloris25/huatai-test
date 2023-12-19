<script lang="ts" context="module">
    import { convertValueToBars, maxLevel } from './convertValueToBars';
    import Moon from './Moon.svelte';
    import Sun from './Sun.svelte';

		const barsArray = Array.from({length: maxLevel}, (_, index) => index + 1);

    function getStyleIconByActive(isActiveIcon: boolean): Record<string, string> {
        return {
            'fill-opacity': isActiveIcon ? '1' : '0.4',
        };
    }
</script>

<script lang="ts">
    export let value: number = 0;
    export let min: number = 0;
    export let max: number = 1;
    export let optimum: number = 0.65;

    $: level = convertValueToBars(value, min, max);
</script>

<div class="brightnessMeter">
    <Moon {...getStyleIconByActive(value < optimum)} />

    <div class="bar">
        {#each barsArray as levelNumber (levelNumber + 1)}
            <div    class="line"
                    class:fillLevel={level >= levelNumber}
                    class:currentLevel={level === levelNumber}
                    class:nearLevel={Math.abs(level - levelNumber) === 1}>
            </div>
        {/each}
    </div>

    <Sun {...getStyleIconByActive(value >= optimum)} />
</div>

<style>
    :root {
        --white-40: rgba(255, 255, 255, 0.4);
        --white-60: rgba(255, 255, 255, 0.6);
        --white-100: rgba(255, 255, 255, 1);
        --transition-time: 0.3s;
    }

    .brightnessMeter > :global(path) {
        transition: var(--transition-time);
    }

    .brightnessMeter {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 17px;
    }

    .bar {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 8px;
    }

    .line {
        width: 8px;
        height: 24px;
        border-radius: 3px;
        background: var(--white-40);
        transition: var(--transition-time);
    }

    .currentLevel {
        transform: scaleY(1.5) scaleX(1.25);
        box-shadow: 0 0 24px -2px var(--white-100),  0 0 6px -1px var(--white-100);
    }

    .fillLevel {
        background: var(--white-100);
    }

    .nearLevel {
        transform: scaleY(1.16);
    }

    .currentLevel + .nearLevel {
        background: var(--white-60);
    }

    @media (max-width: 320px) {
        .brightnessMeter {
            gap: 13px;
        }

        .line {
            width: 6px;
            height: 20px;
        }
    }
</style>
