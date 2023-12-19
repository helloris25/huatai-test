import { test, expect, describe } from 'vitest';
import BrightnessMeter from './BrightnessMeter.svelte';
import { tick } from 'svelte'
import { maxLevel, minLevel } from '$lib/BrightnessMeter/convertValueToBars.js';

function makeBrightnessMeter() {
	const target = document.createElement('div');

	document.body.appendChild(target);

	const instance = new BrightnessMeter({ target, props: { min: minLevel, max: maxLevel, value: 1, optimum: 3 } });

	return {
		instance,
		target,
	}
}


describe('BrightnessMeter', () => {
	test('Component renders correctly', () => {
		const {target, instance} = makeBrightnessMeter();

		expect(instance).toBeTruthy();
		expect(target.querySelector('.brightnessMeter')).toBeTruthy();
		expect(target.querySelector('.bar')).toBeTruthy();
		expect(target.querySelectorAll('.line').length).equal(maxLevel);
		expect(target.querySelectorAll('.currentLevel').length).toBeTruthy();
		expect(target.querySelectorAll('.fillLevel').length).toBeTruthy();
		expect(target.querySelectorAll('.nearLevel').length).toBeTruthy();
		expect(target.querySelectorAll('svg').length).equal(2);
	});

	test('Change level correctly', async () => {
		const {target, instance} = makeBrightnessMeter();

		for(let index = minLevel; index <= maxLevel; index++) {
			instance.$set({value: index});
			await tick();
			const lines = target.querySelector(`.line:nth-child(${index})`);

			 expect(lines?.className.includes('currentLevel')).toBeTruthy();
		}
	});

	test('value < optimum - the left icon of the component should be highlighted, and the right icon should be dimmed', async () => {
		const {target, instance} = makeBrightnessMeter();


		instance.$set({value: 0.5, max: 1, optimum:0.65, min: 0});
		await tick();
		expect(target.querySelectorAll('.brightnessMeter svg')[0]?.innerHTML).includes('fill-opacity="1"')
		expect(target.querySelectorAll('.brightnessMeter svg')[1]?.innerHTML).includes('fill-opacity="0.4"')
	});

	test('value ≥ optimum - the left icon of the component should be dimmed, and the right one highlighted.', async () => {
		const {target, instance} = makeBrightnessMeter();


		instance.$set({value: 0.65, max: 1, optimum:0.65, min: 0});
		await tick();
		expect(target.querySelectorAll('.brightnessMeter svg')[0]?.innerHTML).includes('fill-opacity="0.4"');
		expect(target.querySelectorAll('.brightnessMeter svg')[1]?.innerHTML).includes('fill-opacity="1"');
	});
})
