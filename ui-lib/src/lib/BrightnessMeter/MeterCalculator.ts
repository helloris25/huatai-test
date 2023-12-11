export class MeterCalculator {
    constructor(
        private min: number,
        private max: number,
        private maxLevel: number,
    ) {}

    toLevelFromMinMax(valueInMinMax: number): number {
        if (valueInMinMax >= this.max) {
            return this.maxLevel;
        }

        const normalizedValue = (valueInMinMax - this.min) / (this.max - this.min);
        return Math.floor(normalizedValue * this.maxLevel);
    }

    toMinMaxFromLevel(level: number): number {
        const normalizedValue = level / this.maxLevel;
        const rawValue = normalizedValue * (this.max - this.min) + this.min;
        return this.clampValue(rawValue);
    }

    private clampValue(value: number): number {
        return Math.min(Math.max(value, this.min), this.max);
    }
}
