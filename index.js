//1.2
let x = 0.5;
let y = 0.2;
let result = (Math.abs(x) <= 1) || (Math.abs(x / y) > 3);

console.log(`Результат логічного виразу:`, result);

//2.1
let a = 10;
let b = 1; 
let y2 = Math.cbrt(Math.log(a + 1)) + Math.pow(Math.abs(Math.cos(b) - 2), 1 / 5);
let x2 = Math.sqrt(8.67 + Math.exp(y2) + Math.abs(y2));
let t = (Math.pow(x2, 2) - Math.pow(y2, 3)) / Math.exp(-(x2 + y2));

console.log(`Вхідні дані:`);
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`\nРезультати обчислень:`);
console.log(`x2 = ${x2.toFixed(5)}`);
console.log(`y2 = ${y2.toFixed(5)}`);
console.log(`t = ${t.toFixed(5)}`);

//3.1
function calculateY3(x3) 
{
    let y3;
    
    if (x3 > 1 && x3 <= 12.5) 
    {
        y3 = 3 * Math.pow(x3, -3);
    } 
     else if (x3 > 12.5) 
    {
        y3 = 13.44;
    }
     else if (x3 >= -15.4 && x3 <= 1) 
    {
        y3 = Math.atan(Math.abs(x3 + 1));
    }
     else if (x3 < -15.4) 
    {
        y3 = 1;
    }
     else 
    {
        y3 = `Невизначено`;
    }
    return y3;
}
let x3 = 5; 
let result3 = calculateY3(x3);

console.log(`При X3 = ${x3}, Y3 = ${result3}`);

//4.1
const x4_start_a = 4.8, x4_end_a = 7.9, dx4_a = 0.4; 
const x4_start_b = 0.2, dx4_b = 0.7, n = 6;         

function calculateY4(x4) 
{
    return Math.pow(3 * x4 + 2, 2) / (Math.sin(x4) + 3);
}


console.log(`Табулювання (а):`);
console.log(`x4\t\t y4`);
for (let x4 = x4_start_a; x4 <= x4_end_a; x4 += dx4_a) 
{
    let y4 = calculateY4(x4);
    console.log(`${x4.toFixed(2)}\t ${y4.toFixed(5)}`);
}

console.log(`\nТабулювання (б):`);
console.log(`x4\t\t y4`);
for (let i = 0, x4 = x4_start_b; i < n; i++, x4 += dx4_b) 
{
    let y4 = calculateY4(x4);
    console.log(`${x4.toFixed(2)}\t ${y4.toFixed(5)}`);
}

//5.1
const n1 = 2, l = 11; 
const kStart = 3, kEnd = 9;

let s = 0;
for (let m = n; m <= l; m++) 
{
    s += (Math.pow(m, 3) + 2 * m + 1) / (m - 1);
}

let p = 1;
for (let k = kStart; k <= kEnd; k++) 
{
    p *= ((k + 2) * (3 * k + 1)) / (k + 6);
}

console.log(`Сума S = ${s.toFixed(5)}`);
console.log(`Добуток P = ${p.toFixed(5)}`);