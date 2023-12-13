const __resolved__virtual_storySource_srcLibIconIconStorySvelte = `<script lang="ts">\r
    import Icon from './Icon.svelte'\r
    import type {Icon as IconType} from './types'\r
\r
    export let Hst\r
\r
    let icon: IconType = 'Sun';\r
    const iconOptions: Record<IconType, IconType> = {\r
        Moon: 'Moon',\r
        Sun: 'Sun',\r
    };\r
<\/script>\r
\r
<Hst.Story title="Icon" responsiveDisabled>\r
    <div style="background: #333; padding: 25px">\r
        <Icon {icon}/>\r
        <div style="color: rgb(244, 244, 244)">\r
            <br>\r
            <strong>Icon</strong> - компонент для отображения доступных иконок.\r
\r
            <p><strong>Props:</strong></p>\r
            <ul>\r
                <li><strong>icon: IconType</strong> - Имя иконки из списка доступных иконок IconType</li>\r
            </ul>\r
\r
        </div>\r
    </div>\r
    <svelte:fragment slot="controls">\r
        <Hst.Select\r
                bind:value={icon}\r
                options={iconOptions}\r
        />\r
    </svelte:fragment>\r
</Hst.Story>\r
`;
export {
  __resolved__virtual_storySource_srcLibIconIconStorySvelte as default
};
