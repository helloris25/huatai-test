const __resolved__virtual_storySource_srcLibBrightnessmeterBrightnessmeterStorySvelte = `<script>\r
	import { logEvent } from 'histoire/client';\r
	import BrightnessMeter from './BrightnessMeter.svelte';\r
\r
	export let Hst;\r
\r
	let min = 0;\r
	let max = 1;\r
	let value = 0.5;\r
	let optimum = 0.65;\r
<\/script>\r
\r
<Hst.Story title="BrightnessMeter" responsiveDisabled>\r
	<div style="background: #333; padding: 25px">\r
		<BrightnessMeter\r
			{min}\r
			{max}\r
			{value}\r
			{optimum}\r
			on:changeValue={event => {\r
                    value = event.detail;\r
                    logEvent('changeValue', event);\r
                }} />\r
	</div>\r
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
