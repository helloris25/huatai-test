<script lang="ts" context="module">
    import type { ComponentType } from 'svelte';
    import Moon from '$lib/common/icons/Moon.svelte';
    import Sun from '$lib/common/icons/Sun.svelte';
    import type {Icon} from './types.js';

    const icons: Record<Icon, ComponentType> = {
        Sun,
        Moon,
    };
</script>

<script lang="ts">
    export let icon: Icon;
</script>

<svelte:component this={icons[icon]} {...$$restProps} />

<style>
    @import '../common/vars.css';

    path {
        transition: var(--transition-time);
    }
</style>
