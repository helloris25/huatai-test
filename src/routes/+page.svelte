<script context="module">
    import BrightnessMeter from '../lib/BrightnessMeter/BrightnessMeter.svelte';
</script>

<script>
    let value = 50;

</script>

    <BrightnessMeter
            min={0}
            max={100}
            {value}
            optimum={60}
            on:changeValue={event => {value = event.detail}}
    />


