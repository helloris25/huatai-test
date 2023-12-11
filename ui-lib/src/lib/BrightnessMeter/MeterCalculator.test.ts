import { test, assert } from 'vitest';
import { MeterCalculator } from './MeterCalculator';

test('MeterCalculator - toLevelFromMinMax', () => {
    const meterCalculator = new MeterCalculator(0, 100, 10);

    assert.equal(meterCalculator.toLevelFromMinMax(25), 2);
    assert.equal(meterCalculator.toLevelFromMinMax(75), 7);
    assert.equal(meterCalculator.toLevelFromMinMax(110), 10);
    assert.equal(meterCalculator.toLevelFromMinMax(150), 10); // Всегда должен вернуться maxLevel при значении больше max
});

test('MeterCalculator - toMinMaxFromLevel', () => {
    const meterCalculator = new MeterCalculator(0, 100, 10);

    assert.equal(meterCalculator.toMinMaxFromLevel(2), 20);
    assert.equal(meterCalculator.toMinMaxFromLevel(7), 70);
    assert.equal(meterCalculator.toMinMaxFromLevel(11), 100); // Всегда должно быть в пределах от min до max
    assert.equal(meterCalculator.toMinMaxFromLevel(0), 0); // Должно быть не меньше min
    assert.equal(meterCalculator.toMinMaxFromLevel(12), 100); // Должно быть не больше max
});
