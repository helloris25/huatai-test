<script>
    import {logEvent} from 'histoire/client'
    import ScaleBar from './ScaleBar.svelte'

    export let Hst

    let countBars = 7;
    let selectedLevel = 3;
</script>

<Hst.Story title="ScaleBar" responsiveDisabled>
    <ScaleBar
            {countBars}
            {selectedLevel}
            on:changeValue={event => {
                    selectedLevel = event.detail;
                    logEvent('changeValue', event)
                }}/>


    <div style="color: rgb(244, 244, 244)">
        <br>
        <strong>ScaleBar</strong> - интерактивная шкала
        <br>
        <p><strong>Props:</strong></p>
        <ul>
            <li><strong>countBars: number</strong> - количество делений</li>
            <li><strong>selectedLevel: number</strong> - выбранные деления</li>
        </ul>
        <br>
        <p><strong>Events:</strong></p>
        <ul>
            <li><strong>changeValue(value: number): void</strong> - происходит когда изменяется значение. В него передаётся
                новое количество выбранных делений</li>
        </ul>

        <br>
        <p><strong>Особености</strong></p>
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
    </div>

    <svelte:fragment slot="controls">
        <Hst.Number
                bind:value={countBars}
                title="CountBars"
        />
        <Hst.Number
                bind:value={selectedLevel}
                title="selectedLevel"
        />
    </svelte:fragment>
</Hst.Story>
