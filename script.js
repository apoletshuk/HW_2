//task_1

let name = prompt('Ваше имя'),
    age = prompt('Ваш возраст'),
    city = prompt('Ваш город проживания'),
    phone = prompt('Ваш номер телефона'),
    email = prompt('Ваш email'),
    company = prompt('Компания в котрой вы работаете');


document.write('Меня зовут ', name, 'Мой возраст ', age, 'Я проживаю в городе ', city, 'и работаю в компании ', company,  'Мои контактные данные: ', phone, 'и ', email) ;  
//task_2

let year = 2021 - age;

let hb = confirm('У вас уже был день рождения?');

if (hb == true) {
    document.write(` Год рождения ${year}.`);
} else { 
    document.write(`Год рождения ${year - 1}.`);
}
 

//task_4

let a = 1;

(a > 0) ? console.log('Верно') : console.log('Неверно');

    a = 0;

 (a > 0) ? console.log('Верно') : console.log('Неверно');

    a = -3;

 (a > 0) ? console.log('Верно') : console.log('Неверно');


//task_5

    a = 10;
    b = 2;

let sum = a + b,
    raz = a - b,
    pr = a * b,
    ch = a / b;

 console.log('Сумма-', sum,'Разность-', raz,'Произведение-', pr,'Частное-', ch);

 if( sum > 1) {
     console.log(sum ** 2);
 }

 //task_6


if(a > 5 && a < 11){

    console.log('Верно');

} else{

    console.log('Неверно');
}

if (b >= 6 && b < 14){

    console.log('Верно');

} else{

    console.log('Неверно');
}

//task_7

let n = 45;

if( n >= 0 && n <= 15) {

    console.log( n, 'В певрой четверти часа');

} else if( n >= 15 && n <= 30){

    console.log( n, 'Во второй четверти часа');
    
} else if( n >= 30 && n <= 45){

    console.log( n, 'В третей четверти часа');

} else if( n >= 45 && n <= 60){

    console.log( n, 'В четвертой четверти часа');
}

//task_8

let day = 20;

 if (day >= 1 && day <= 10){

     console.log( day, 'Попадает в первую декаду');

 } else if (day >= 10 && day <= 20){

    console.log( day, 'Попадает во вторую декаду');

 } else if (day >= 20 && day <= 31){

    console.log( day, 'Попадает в третью декаду');    
 } 
 
 
 //task_9

    day = 800;
    year = day / 365;

if( year < 1){

    console.log('Меньше года')

} else {

    console.log(year);
}


let  month = day / 31;

if( month < 1){

console.log('Меньше месяца')

} else {

console.log(month)

}

let week = day / 7;

if( week < 1){

console.log('Меньше недели')
} else {

console.log(week)

}

let hour = day * 24;

if( hour < 1){

console.log('Меньше дня')
} else {

console.log(hour);

}

let min = hour * 60;

if( min < 1){

console.log('Меньше минуты')
} else {

console.log(min);

}

let sec = min * 60;

if( sec < 1){

console.log('Меньше секунды')

} else {

console.log(sec);

}








