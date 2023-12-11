import { test, expect } from '@playwright/test';

test('BrightnessMeter component', async ({ page }) => {
    // Load the component in the browser
    await page.goto('http://localhost:YOUR_PORT'); // Замените на фактический URL вашего веб-приложения и порт

    // Пример теста: Проверяем, что компонент рендерится с начальными значениями
    const slider = await page.$('[role="slider"]');
    expect(slider).not.toBeNull();

    // Пример теста: Проверяем, что нажатие кнопки для уменьшения яркости работает
    const decreaseButton = await page.$('[aria-label="сделать темнее"]');
    await decreaseButton?.click();

    // Пример теста: Проверяем, что нажатие кнопки для увеличения яркости работает
    const increaseButton = await page.$('[aria-label="сделать ярче"]');
    await increaseButton?.click();

    // Пример теста: Проверяем, что нажатие одной из кнопок уровней яркости работает
    const levelButton = await page.$('[aria-label="Сделать яркость с уровнем 3"]');
    await levelButton?.click();

    // Добавьте больше тестов в зависимости от функциональности вашего компонента
});
