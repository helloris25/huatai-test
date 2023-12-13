<script lang="ts" context="module">
    import {createEventDispatcher} from 'svelte';
</script>

<script lang="ts">
    const dispatch = createEventDispatcher();

    export let countBars: number = 7;
    export let selectedLevel: number;

    let hoveredLevel: number;
    let isHovered: boolean = false;
    let isMouseDown: boolean = false;
    let isTouchMove: boolean = false;

    $: currentLevel = isHovered && !isTouchMove ? hoveredLevel : selectedLevel;
    $: barsArray = Array.from({length: countBars}, (_, index) => index + 1);

    function changeLevel(newLevel: number): void {
        if (newLevel >= 1 && newLevel <= countBars && newLevel !== selectedLevel) {
            dispatch('changeValue', newLevel);
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

<div class="scaleBar"
     on:touchmove={onTouchMove}
     on:touchstart={onTouchStart}
     on:touchend={onTouchEnd}
     >

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
                aria-label="Переключить на уровень {levelNumber}">
        </button>
    {/each}
</div>

<style>
    @import '../common/vars.css';
    @import '../common/styles.css';

    .scaleBar {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
    }

    .wrapperLevelLine {
        padding: 0 5px;
        cursor: pointer;
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
    }

    @media (hover: none) and (pointer: coarse) {
        .scaleBar {
            height: 100%;
            padding: 0;
        }

        .wrapperLevelLine {
            height: 42px;
        }
    }
</style>
