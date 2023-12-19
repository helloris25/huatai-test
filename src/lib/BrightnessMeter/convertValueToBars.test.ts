import {test, describe, expect} from 'vitest';
import { convertValueToBars, maxLevel, minLevel } from './convertValueToBars.js';

const testVariants = (variants: {value: number; min: number; max: number; resultLevel: number}[]) => {
	variants.forEach((variant) => expect(convertValueToBars(variant.value, variant.min, variant.max)).toEqual(variant.resultLevel))
}

describe('convertValueToBars', () => {
	test('should return maxLevel when value is greater than or equal to max', () => {
		testVariants([
			{value: 10, min: 0, max: 10, resultLevel: maxLevel},
			{value: 2, min: 0, max: 1, resultLevel: maxLevel},
		]);
	});

	test('should return minLevel when value is less than or equal to min', () => {
		testVariants([
			{value: -1, min: 0, max: 1, resultLevel: minLevel},
			{value: 0, min: 0, max: 10, resultLevel: minLevel},
		]);
	});

	test('should calculate the correct value in between min and max', () => {
		testVariants([
			{value: 5, min: 0, max: 10, resultLevel: 4},
			{value: -5, min: -10, max: 0, resultLevel: 4},
			{value: 0.3, min: 0, max: 1, resultLevel: 3},
		]);
	});

	test('should return maxLevel when equal min and max values', () => {
		expect(convertValueToBars(5, 5, 5)).toEqual(maxLevel);
		testVariants([
			{value: 5, min: 5, max: 5, resultLevel: maxLevel},
		]);
	});
});
