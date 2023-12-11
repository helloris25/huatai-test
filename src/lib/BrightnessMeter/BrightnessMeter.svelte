<script lang="ts" context="module">
    import {createEventDispatcher} from 'svelte';
    import Moon from './icons/Moon.svelte';
    import Sun from './icons/Sun.svelte';
    import {MeterCalculator} from './MeterCalculator';

    const maxLevel = 7;
    // Для вывода шкалы формируем массив в размере количества делений.
    const barsArray: number[] = Array.from({length: maxLevel}, (_, index) => index + 1);

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

    let selectedLevel: number;
    let hoveredLevel: number;
    let isHovered: boolean = false;
    let isMouseDown: boolean = false;
    let isTouchMove: boolean = false;

    $: meterCalculator = new MeterCalculator(min, max, maxLevel);
    $: ininLevel = meterCalculator.toLevelFromMinMax(value);
    $: optimumLevel = meterCalculator.toLevelFromMinMax(optimum);
    $: currentLevel = isHovered && !isTouchMove ? hoveredLevel : selectedLevel ?? ininLevel;
    $: isReachedOptimum = currentLevel > optimumLevel;

    function changeLevel(newLevel: number): void {
        if (newLevel >= 1 && newLevel <= maxLevel && newLevel !== selectedLevel) {
            selectedLevel = newLevel;
            dispatch('changeValue', meterCalculator.toMinMaxFromLevel(newLevel));
        }
    }

    function onInteractionBar(levelNumber: number): void {
        isHovered = true;
        hoveredLevel = levelNumber;
    }

    function stopInteractionBar(): void {
        isHovered = false;
    }

    function onTouchMove(event: Event): void {
        for (const touch of event.touches) {
            const touchedElement = document.elementFromPoint(touch.clientX, touch.clientY);
            const levelNumber = touchedElement.dataset.levelNumber;

            if (levelNumber) {
                changeLevel(Number(levelNumber))
            }
        }
    }

    function onTouchStart(): void {
        isTouchMove = true;
    }

    function onTouchEnd(): void {
        isTouchMove = false;
    }

    function onMouseDown(): void {
        isMouseDown = true;
    }

    function onMouseUp(): void {
        isMouseDown = false;
    }

    function onMouseMove(levelNumber): void {
        if (isMouseDown && !isTouchMove) {
            changeLevel(Number(levelNumber))
        }
    }
</script>

<div
        class="brightnessMeter"
        role="slider"
        aria-label="Регулятор яркости"
        aria-valuemin={0}
        aria-valuemax={maxLevel}
        aria-valuenow={selectedLevel}
        aria-valuetext="Уровень яркости {selectedLevel}"
>
    <button
            class="brightControl resetButtonStyle"
            on:click={() => changeLevel(currentLevel - 1)}
            aria-label="сделать темнее">
        <Moon {...getStyleControlByActive(!isReachedOptimum)}/>
    </button>

    <div class="bar"
         on:touchmove={onTouchMove}
         on:touchstart={onTouchStart}
         on:touchend={onTouchEnd}>
        {#each barsArray as levelNumber (levelNumber + 1)}
            <button
                    data-level-number={levelNumber}
                    class="wrapperLevelLine resetButtonStyle"
                    class:fillLevel={currentLevel >= levelNumber}
                    class:currentLevel={currentLevel === levelNumber}
                    class:nearLevel={Math.abs(currentLevel - levelNumber) === 1}
                    on:mousedown={onMouseDown}
                    on:mouseup={onMouseUp}
                    on:mousemove={() => onMouseMove(levelNumber)}
                    on:click={() => changeLevel(levelNumber)}
                    on:touchend={stopInteractionBar}
                    on:mouseover={() => onInteractionBar(levelNumber)}
                    on:focus={() => onInteractionBar(levelNumber)}
                    on:mouseout={stopInteractionBar}
                    on:blur={stopInteractionBar}
                    aria-label="Сделать яркость с уровнем {levelNumber}">
            </button>
        {/each}
    </div>

    <button
            class="brightControl resetButtonStyle"
            on:click={() => changeLevel(currentLevel + 1)}
            aria-label="сделать ярче">
        <Sun {...getStyleControlByActive(isReachedOptimum)}/>
    </button>
</div>

<style>
    @import '../common/vars.css';
    @import '../common/styles.css';

    .brightnessMeter {
        height: 58px;
        display: inline-flex;
        padding: 8px;
        justify-content: center;
        align-items: center;
        gap: 28px;
    }

    .brightControl:focus-visible {
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

    .wrapperLevelLine:after {
        content: '';
        display: block;
        width: 8px;
        height: 24px;
        border-radius: 3px;
        background: var(--white-40);
        transition: var(--transition-time);
    }

    .currentLevel:after {
        transform: scaleY(1.5) scaleX(1.25);
        box-shadow: 0 0 24px -2px var(--white-100),
        0 0 6px -1px var(--white-100);
    }

    .fillLevel:after {
        background: var(--white-100);
    }

    .nearLevel:after {
        transform: scaleY(1.16);
    }

    .currentLevel + .nearLevel:after {
        background: var(--white-60);
    }

    @media (max-width: 320px) {
        .wrapperLevelLine:after {
            width: 6px;
            height: 20px;
        }

        .brightnessMeter {
            gap: 24px;
        }
    }

    @media (hover: none) and (pointer: coarse) {
        .bar {
            height: 100%;
        }

        .wrapperLevelLine {
            height: 100%;
        }
    }
</style>
