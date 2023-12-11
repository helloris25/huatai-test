import { test, expect, vi } from 'vitest';
import { tick } from 'svelte'
import BrightnessMeter from './BrightnessMeter.svelte';

let host: HTMLElement

test('MyComponent renders correctly', () => {
    const target = document.createElement('div');

    document.body.appendChild(target);

    const app = new BrightnessMeter({ target });

    expect(app).toBeTruthy();

    expect(target.innerHTML).toContain("Регулятор яркости");
    expect(target.innerHTML).toContain("сделать темнее");
    expect(target.innerHTML).toContain("сделать ярче");
});



test('MyComponent change value', async () => {
    host = document.createElement('div')
    host.setAttribute('id', 'host')
    document.body.appendChild(host)
    const instance = new BrightnessMeter({ target: host, props: { min: 0, max: 5, value: 0, optimum: 2 } })


    const addBrightButton = host.getElementsByTagName('button')[1]
    await tick()
    await addBrightButton.click()
    await tick()
    expect(host.querySelector('.currentLevel')).toBeTruthy()
})

test('MyComponent call event after change value', async () => {
    const changeValueFn = (event: {detail: number}) => {expect(event.detail).toEqual(1)}

    host = document.createElement('div')
    host.setAttribute('id', 'host')
    document.body.appendChild(host)

    const instance = new BrightnessMeter({ target: host, props: { min: 0, max: 7, value: 0, optimum: 2 } })
    instance.$on('changeValue',changeValueFn)

    const addBrightButton = host.getElementsByTagName('button')[1]
    await tick()
    await addBrightButton.click()

})
