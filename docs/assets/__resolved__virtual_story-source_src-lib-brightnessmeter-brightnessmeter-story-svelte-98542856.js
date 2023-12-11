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
<Hst.Story title="BrightnessMeter">\r
    <div style="background: #404040">\r
        <BrightnessMeter\r
                {min}\r
                {max}\r
                {value}\r
                {optimum}\r
                on:changeValue={event => logEvent('changeValue', event)}/>\r
    </div>\r
\r
    <br>\r
    <strong>BrightnessMeter</strong> - компонент для изменения яркости.\r
\r
    <strong>Props:</strong>\r
    <strong>min: number = 0</strong> - минимальное значение шкалы\r
    <strong>max: number = 1</strong> - мфксимальное значение шкалы\r
    <strong>value: number = 0</strong> - текущее значение\r
    <strong>optimum: number = 0.65</strong> - значение при котором будет изменяться цвет кнопок\r
    <br>\r
    <strong>Events:</strong>\r
    <strong>changeValue(value: number): void</strong> - происходит когда изменяется значение. В него передаётся новое\r
    значение в рамках min и max\r
    <br>\r
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
