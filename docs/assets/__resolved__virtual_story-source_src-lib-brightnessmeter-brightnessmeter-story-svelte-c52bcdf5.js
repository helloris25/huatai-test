const __resolved__virtual_storySource_srcLibBrightnessmeterBrightnessmeterStorySvelte = `<script>\r
    import {logEvent} from 'histoire/client'\r
    import BrightnessMeter from './BrightnessMeter.svelte'\r
\r
    export let Hst\r
\r
    let min = 0;\r
    let max = 100;\r
    let value = 50;\r
    let optimum = 50;\r
<\/script>\r
\r
<Hst.Story title="BrightnessMeter" responsiveDisabled>\r
\r
    <BrightnessMeter\r
            {min}\r
            {max}\r
            {value}\r
            {optimum}\r
            on:changeValue={event => {\r
                    value = event.detail;\r
                    logEvent('changeValue', event);\r
                }}/>\r
\r
    <div style="color: rgb(244, 244, 244)">\r
        <br>\r
        <strong>BrightnessMeter</strong> - компонент для изменения яркости.\r
\r
        <p><strong>Props:</strong></p>\r
        <ul>\r
        <li><strong>min: number = 0</strong> - минимальное значение шкалы</li>\r
        <li><strong>max: number = 1</strong> - мфксимальное значение шкалы</li>\r
        <li><strong>value: number = 0</strong> - текущее значение</li>\r
        <li><strong>optimum: number = 0.65</strong> - значение при котором будет изменяться цвет кнопок</li>\r
        </ul>\r
        <br>\r
        <p><strong>Events:</strong></p>\r
        <ul><li><strong>changeValue(value: number): void</strong> - происходит когда изменяется значение. В него передаётся\r
        новое значение в рамках min и max</li>\r
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
\r
    <svelte:fragment slot="controls">\r
        <Hst.Number\r
                bind:value={min}\r
                title="Min"\r
        />\r
        <Hst.Number\r
                bind:value={max}\r
                title="Max"\r
        />\r
        <Hst.Number\r
                bind:value={value}\r
                title="Value"\r
        />\r
        <Hst.Number\r
                bind:value={optimum}\r
                title="Optimum"\r
        />\r
    </svelte:fragment>\r
</Hst.Story>\r
`;
export {
  __resolved__virtual_storySource_srcLibBrightnessmeterBrightnessmeterStorySvelte as default
};
