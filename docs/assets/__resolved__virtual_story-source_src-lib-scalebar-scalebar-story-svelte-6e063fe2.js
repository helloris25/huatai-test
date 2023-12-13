const __resolved__virtual_storySource_srcLibScalebarScalebarStorySvelte = `<script>\r
    import {logEvent} from 'histoire/client'\r
    import ScaleBar from './ScaleBar.svelte'\r
\r
    export let Hst\r
\r
    let countBars = 7;\r
    let selectedLevel = 3;\r
<\/script>\r
\r
<Hst.Story title="ScaleBar" responsiveDisabled>\r
    <ScaleBar\r
            {countBars}\r
            {selectedLevel}\r
            on:changeValue={event => {\r
                    selectedLevel = event.detail;\r
                    logEvent('changeValue', event)\r
                }}/>\r
\r
\r
    <div style="color: rgb(244, 244, 244)">\r
        <br>\r
        <strong>ScaleBar</strong> - интерактивная шкала\r
        <br>\r
        <p><strong>Props:</strong></p>\r
        <ul>\r
            <li><strong>countBars: number</strong> - количество делений</li>\r
            <li><strong>selectedLevel: number</strong> - выбранные деления</li>\r
        </ul>\r
        <br>\r
        <p><strong>Events:</strong></p>\r
        <ul>\r
            <li><strong>changeValue(value: number): void</strong> - происходит когда изменяется значение. В него передаётся\r
                новое количество выбранных делений</li>\r
        </ul>\r
\r
        <br>\r
        <p><strong>Особености</strong></p>\r
        <ul>\r
            <li>\r
                <strong>Компонент адаптивен</strong> - breakpoint 320\r
            </li>\r
            <li>\r
                <strong>Адаптирован для touch-устройств</strong> - обрабаываем касания, шкала изменяется при свайпе\r
            </li>\r
            <li>\r
                <strong>Accessibility</strong> - доступен для людей с ограниченными возможностями, проставлены все\r
                необхадимые теги.\r
                <i>Теги Button используются с целью повышения доступности, т.к. они нативно фокусируются при нажатии на\r
                    клавишу Tab и "кликаются" при нажатии на пробел</i>\r
            </li>\r
        </ul>\r
    </div>\r
\r
    <svelte:fragment slot="controls">\r
        <Hst.Number\r
                bind:value={countBars}\r
                title="CountBars"\r
        />\r
        <Hst.Number\r
                bind:value={selectedLevel}\r
                title="selectedLevel"\r
        />\r
    </svelte:fragment>\r
</Hst.Story>\r
`;
export {
  __resolved__virtual_storySource_srcLibScalebarScalebarStorySvelte as default
};
