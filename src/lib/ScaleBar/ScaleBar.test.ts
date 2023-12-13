import { test, expect, vi } from 'vitest';
import { tick } from 'svelte'
import ScaleBar from './ScaleBar.svelte';

let host: HTMLElement

test('MyComponent renders correctly', () => {
    const target = document.createElement('div');

    document.body.appendChild(target);

    const app = new ScaleBar({ target });

    expect(app).toBeTruthy();

    expect(target.innerHTML).toContain("Переключить на уровень");
});


test('MyComponent change value', async () => {
    host = document.createElement('div')
    host.setAttribute('id', 'host')
    document.body.appendChild(host)
    const instance = new ScaleBar({ target: host, props: { countBars: 3, selectedLevel: 0, } })


    const addBrightButton = host.getElementsByTagName('button')[1]
    await tick()
    await addBrightButton.click()
    await tick()
    expect(host.querySelector('.currentLevel')).toBeTruthy()
})

test('ScaleBar call event after change level', async () => {
    const changeValueFn = (event: {detail: number}) => {expect(event.detail).toEqual(1)}

    host = document.createElement('div')
    host.setAttribute('id', 'host')
    document.body.appendChild(host)

    const instance = new ScaleBar({ target: host, props: { countBars: 3, selectedLevel: 0, } })
    instance.$on('changeValue', changeValueFn)

    const addBrightButton = host.getElementsByTagName('button')[1]
    await tick()
    await addBrightButton.click()

})
