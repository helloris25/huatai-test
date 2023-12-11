<script context="module">
    import BrightnessMeter from '../lib/BrightnessMeter/BrightnessMeter.svelte';
</script>
    <BrightnessMeter
            min={0}
            max={100}
            value={50}
            optimum={60}
            on:changeValue={event => console.log(event.detail)}
    />


