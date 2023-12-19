export const maxLevel = 7;
export const minLevel = 1;

export function convertValueToBars(value: number, min: number, max: number): number {
	if (value >= max) {
		return maxLevel;
	}

	if (value <= min) {
		return minLevel;
	}

	const normalizedValue = (value - min) / (max - min);
	return Math.ceil(normalizedValue * maxLevel);
}
