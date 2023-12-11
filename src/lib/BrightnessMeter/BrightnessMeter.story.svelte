<script>
    import {logEvent} from 'histoire/client'
    import BrightnessMeter from './BrightnessMeter.svelte'

    export let Hst

    let min = 0;
    let max = 100;
    let value = 50;
    let optimum = 50;
</script>

<Hst.Story title="BrightnessMeter">
    <div style="background: #404040">
        <BrightnessMeter
                {min}
                {max}
                {value}
                {optimum}
                on:changeValue={event => logEvent('changeValue', event)}/>
    </div>

    <br>
    <strong>BrightnessMeter</strong> - компонент для изменения яркости.

    <strong>Props:</strong>
    <strong>min: number = 0</strong> - минимальное значение шкалы
    <strong>max: number = 1</strong> - мфксимальное значение шкалы
    <strong>value: number = 0</strong> - текущее значение
    <strong>optimum: number = 0.65</strong> - значение при котором будет изменяться цвет кнопок
    <br>
    <strong>Events:</strong>
    <strong>changeValue(value: number): void</strong> - происходит когда изменяется значение. В него передаётся новое
    значение в рамках min и max
    <br>
    <ul>
        <li>
            <strong>Компонент адаптивен</strong> - breakpoint 320
        </li>
        <li>
            <strong>Адаптирован для touch-устройств</strong> - обрабаываем касания, шкала изменяется при свайпе
        </li>
        <li>
            <strong>Accessibility</strong> - доступен для людей с ограниченными возможностями, проставлены все
            необхадимые теги.
            <i>Теги Button используются с целью повышения доступности, т.к. они нативно фокусируются при нажатии на
                клавишу Tab и "кликаются" при нажатии на пробел</i>
        </li>
    </ul>


    <svelte:fragment slot="controls">
        <Hst.Number
                bind:value={min}
                title="Min"
        />
        <Hst.Number
                bind:value={max}
                title="Max"
        />
        <Hst.Number
                bind:value={value}
                title="Value"
        />
        <Hst.Number
                bind:value={optimum}
                title="Optimum"
        />
    </svelte:fragment>
</Hst.Story>
