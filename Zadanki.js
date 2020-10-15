const name = prompt('Введите свое ФИО');

alert('Тебя зовут ' + name);

const hb = prompt('Введите год своего рождения');

const year = 2020;

let age = year - hb;

alert('Тебе ' + age + ' лет');

const primer1 = prompt('Введите длину стороны квадрата');

let p = primer1*4;

let s = primer1*primer1;

alert('Периметр квадрата будет ' + p);
alert('Площадь квадрата будет ' + s);

const radius = prompt('Введите радиус окружности');

let area = 3.14*(radius*radius);

alert('Площадь окружности будет равна ' + area);

let range = prompt('Введите расстояние между городами в км');
let time = prompt('Введите рассчетное время в часах');

let answer = range/time;

alert('Ваша точная скорость, чтобы добраться до места назначения будет равна ' + answer.toFixed(1) + ' км/ч');

const dollars = prompt('Введите сколько у вас долларов');

const euro = 0.85;
const hrivna = 28.21;

let convert1 = dollarseuro;
let convert2 = dollarshrivna;

alert('Вот столько у вас в евро ' + convert1.toFixed(2)  + '\nВот столько у вас в гривнах ' + convert2.toFixed(2))

const storage = prompt('Укажите объем вашей флешки в гб');

let storagemb = storage1000;
let file = 820;
let sumfiles = storagemb/file;

alert('На вашу флешку помсетится столько файлов: ' + sumfiles.toFixed(0));

let money = prompt('Введите сколько у вас денег');
let chocolate = prompt('Введите сколько шоколадок вы хотите');

let sum = money/chocolate;
let delivery = money-Math.floor(sum);

alert('Вот столько шоколадок вы можете себе позволить: ' + sum.toFixed(0) + '\nВот ваша сдача: ' + delivery.toFixed(2));


var a = prompt("Введите трехзначное число");

var b, sum = 0;
while(a > 0)
{
    b = a % 10;
    sum = sum * 10 + b;
    a = parseInt(a / 10);
}
alert(sum);