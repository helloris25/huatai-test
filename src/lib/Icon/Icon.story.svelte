<script lang="ts">
    import Icon from './Icon.svelte'
    import type {Icon as IconType} from './types'

    export let Hst

    let icon: IconType = 'Sun';
    const iconOptions: Record<IconType, IconType> = {
        Moon: 'Moon',
        Sun: 'Sun',
    };
</script>

<Hst.Story title="Icon" responsiveDisabled>

        <Icon {icon}/>
    <div style="color: rgb(244, 244, 244)">
    <br>
    <strong>Icon</strong> - компонент для отображения доступных иконок.

    <p><strong>Props:</strong></p>
        <ul>
            <li><strong>icon: IconType</strong> - Имя иконки из списка доступных иконок IconType</li>
        </ul>

    </div>
    <svelte:fragment slot="controls">
        <Hst.Select
                bind:value={icon}
                options={iconOptions}
        />
    </svelte:fragment>
</Hst.Story>
