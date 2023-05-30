//assign: evaluation
// {
//     var a = 5;  
//     var b, c;
//     b = (a * 5);  //підставляється значення "а", потім виконується множення та заноситься до вже інуючої змінної "b"
//     b = (c = b/2); //вноситься результат виразу до змінної с, потім, в b кладеться те, що і в с
// }

//Number: age

// {
//     let age = +prompt("Скільки Вам років?")
//     alert('Ви, народились в ' + (2023-age) + 'році');
// }

//Number: temperature

// {
//     let grad = prompt('Введіть температуру в градусах по Целсію:')
//     alert(`В градусах по Фаренгейту це ${grad*1.8+32.00}`)
//     let Farad = prompt('Введіть температуру в градусах по Фаренгейту:')
//     alert(`В градусах по Целсію це ${(Farad-32)/1.8}`)
// }

//Number: divide

// {
//     let a = +prompt('Введіть ділене');
//     let b = +prompt('Введіть дільник');
//     alert(`Частка від ${a} та ${b} дорівнює ${Math.floor(a/b)}`)
// }

// Number: currency

// {
//     const rate = 37.65;
//     const UAH = +prompt('Введіть сумму(в гривнах) для обміну!');
//     alert(`Отримайте, ваші долари: ${(UAH/37.65).toFixed(2)}$`)
// }

// Number:RGB

// {
//     let red = prompt('Введіть червоний колір від 0 до 255!');
//     let green = prompt('Введіть зелений колір від 0 до 255!');
//     let blue = prompt('Введіть синій колір від 0 до 255!');
//     alert(`Ви ввели такий колір: #${red+green+blue}`)
// }

// Number: flats

// {
//     let floors = prompt('Введіть кількість поверхів!');
//     let apartmants = prompt('Введіть кількість квартир на поверсі!');
//     let numberOfFloor = prompt('Введіть номер квартири!');
//     let apartmantsPerEntrance = apartmants*floors;
//     alert(`Ви ввели квартиру під №${numberOfFloor}, вона знаходиться на ${Math.ceil((numberOfFloor%apartmantsPerEntrance)/apartmants)} поверсі, ${Math.ceil(Math.ceil(numberOfFloor/apartmants)/floors)} під'їзду`)
// }