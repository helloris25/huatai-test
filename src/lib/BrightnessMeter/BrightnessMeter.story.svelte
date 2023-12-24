<script>
	import BrightnessMeter from './BrightnessMeter.svelte';

	export let Hst;

	let min = 0;
	let max = 1;
	let value = 0.5;
	let optimum = 0.65;
</script>

<Hst.Story title="BrightnessMeter" responsiveDisabled>
	<div style="background: #333; padding: 25px">
		<BrightnessMeter
			{min}
			{max}
			{value}
			{optimum}/>
	</div>

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
