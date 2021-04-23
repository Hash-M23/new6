'use strict';

// Массив товаров
const cars = [
    { id: '1', name: 'Polo Gti', price: 40000, pict: './img/polo.jpg' },
    { id: '2', name: 'Bmw 7-series', price: 70000, pict: './img/bmw.jpg' },
    { id: '3', name: 'Honda Sr-v', price: 40000, pict: './img/honda.jpg' },
    { id: '4', name: 'Mereseles cls', price: 80000, pict: './img/mersedes.jpg' },
    { id: '5', name: 'Geely SUV', price: 304995, pict: './img/geely.jpg' },
    { id: '6', name: 'Mclaren', price: 800000, pict: './img/mclaren.jpg' }
];

const showCase = document.getElementById('showcase');

// Заполнение витрины магазина
for (const car of cars) {
    const box = document.createElement('div');
    const img = document.createElement('img');
    const btn = document.createElement('button');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    p.textContent = `${car.price.toLocaleString('ru-RU', { style: 'currency', currency: 'USD' })}`;
    h3.textContent = `${car.name}`;
    btn.id = car.id;
    img.src = `${car.pict}`;
    img.alt = `${car.name}`;
    box.classList.add('box');

    box.appendChild(img);
    box.appendChild(btn);
    box.appendChild(h3);
    box.appendChild(p);
    showCase.appendChild(box);
}