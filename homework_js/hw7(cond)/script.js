// ДЗ: Умови

//blocks
/* {
    let a = 10
{
    let b = 20
    {
        let c = 30
        //какие тут будут значения переменных a,b,c,d // a = 10, b = 20, c = 30, d - не оголошення(буде помилка при викликі)
        
        b++ 
        a *= 10
    }
    {
        let c = 50
        //какие тут будут значения переменных a,b,c,d a = 100, b = 21, c = 50, d = не оголошена 
        b += 500
    }
    {
        const a = 100500
        const d = "value"
        //какие тут будут значения переменных a,b,c,d a = 100500, b = 520, c = 50, d = 'value'
        {
            let a = -50
            b     = 1000
            //какие тут будут значения переменных a,b,c,d a = -50, b = 20, c = 50, d = "value"
        }
        //какие тут будут значения переменных a,b,c,d // a = 50, b = 20, c = не оголошена, d = "value"
    }
    //какие тут будут значения переменных a,b,c,d a = 10, b = 20, c,d - не оголошені
}
//какие тут будут значения переменных a,b,c,d a = 10, b,c,d - не оголошені
} */

//comparison if

/* {
    var age = +prompt("Сколько вам лет?","");
    if (age < 18 && age >0){
        alert("школьник");
    }
    else {if (age > 18 && age < 30){
        alert("молодеж");
    }
    else {if (age > 30 && age < 45){
        alert("зрелость");
    }
    else {if (age > 45 && age < 60){
        alert("закат");
    }
    else {if (age > 60){
        alert("как пенсия?");
    }
    else {if(age<0){
        alert('Іди назад в своє майбутнє');
    }
    else {
        alert("то ли киборг, то ли KERNESS"); 
    }
}}}}}} */

//switch: sizes

/* {
    let key = +prompt('Введіть ваш розмір("42,44,46,48,50,52,54,56,58"), а ми переведомо в американську систему:')
    switch (key) {
        case 42:
            alert("Ваш розмір XXS")
            break;
        case 44:
            alert("Ваш розмір XS")
            break;
        case 46:
            alert("Ваш розмір S")
            break;
        case 48:
            alert("Ваш розмір M")
            break;
        case 50:
            alert("Ваш розмір L")
            break;
        case 52:
            alert("Ваш розмір XL")
            break;
        case 54:
            alert("Ваш розмір XXL")
            break;
        case 56:
            alert("Ваш розмір 2XL")
            break;
        case 58:
            alert("Ваш розмір 3XL")
            break;
        default:
            alert('Ви невірно ввели розмір')
            break;
    }
} */

//switch: if

/* {
    let color = prompt("Введите цвет","");
    if(color==='red'){
        document.write("<div style='background-color: red;'>красный</div>");
        document.write("<div style='background-color: black; color: white;'>черный</div>");
    }
    else if(color === 'black'){
        document.write("<div style='background-color: black; color: white;'>черный</div>");
    }
    else if(color === 'blue'){
        document.write("<div style='background-color: blue;'>синий</div>");
        document.write("<div style='background-color: green;'>зеленый</div>");
    }
    else if(color === 'green'){
        document.write("<div style='background-color: green;'>зеленый</div>");
    }
    else{
        document.write("<div style='background-color: gray;'>Я не понял</div>");
    }
} */

//noswitch

/* {
    const noSwitch = (key, cases, defaultKey='default') => {
        if(key in cases){  
            cases[key]();
        }
        else{
            cases[defaultKey]();
        }
    }
    const drink = prompt("Что вы любите пить")
    noSwitch(drink, {
        воду: () =>  console.log('Самый здоровый выбор!'),
        чай(){ 
            console.log('Вкусная и полезная штука. Не переусердствуйте с сахаром')
        },
        "пиво": () => console.log('Хорошо летом, да в меру'),
        виски: function(){
            console.log('Да вы, батенька, эстет! Не забудьте лед и сигару')
        },
        default(){
            console.log('шото я не понял')
        }
    })
} */

//closure calc

/* {
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {
            const div = document.createElement('div');
            for (const rate in data.rates) {
                const btn = document.createElement('button');
                btn.onclick = () => {
                    let sum = prompt('Введите сумму!:');
                    alert(`Возьмите ${Math.round(sum*data.rates[rate])}`);
                }
                div.append(btn);
                btn.innerHTML = rate;
                console.log(data.rates[rate]);
            }
            document.body.append(div);
            console.log(data) //изучите структуру, получаемую с сервера в консоли
        })
} */

//closure calc 2 Знаю, что наговнокодил. Домашек навалилось куча. Сделаю следующие, вернусь сюда. Может потом пойму, как доставать значения из селектов и помещать их в rate... 
    /* { fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
                const div = document.createElement('div');
                document.body.append(div);

                const selectFrom = document.createElement('select');
                selectFrom.id = 'from';
                div.append(selectFrom);
                for (const rate in data.rates) {
                    const option = document.createElement('option');
                    selectFrom.append(option);
                    option.innerHTML = rate;
                }
                from.onchange = () => {
                    rate.innerHTML = from.value;
                }
                const divRate = document.createElement('div');
                divRate.id = 'rate';
                divRate.innerText = 'rate'
                div.append(divRate);

                const selectTo = document.createElement('select');
                selectTo.id = 'to';
                div.append(selectTo);
                for (const rate in data.rates) {
                    const option = document.createElement('option');
                    selectTo.append(option);
                    option.innerHTML = rate;
                } 
                from.onchange = () => {
                    rate.innerHTML = to.value;
                }

                const input = document.createElement('input');
                input.type = 'number';
                input.id = 'amount';
                div.append(input);
                const divResult = document.createElement('div');
                divResult.id = 'result';
                div.append(divResult);
                console.log(data) //изучите структуру, получаемую с сервера в консоли
            })
    } */

    // countries and cities

    /* {
        fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json').then(res => res.json())
     .then(data => {
            const div = document.createElement('div');
            document.body.append(div);
            const select = document.createElement('select');
            select.id = 'countries';

            div.append(select);
            const selectCities = document.createElement('select');
            selectCities.id = 'cities';
            div.append(selectCities);
            countries.onchange = ()=>{
                countries.innerText = '';
                             //незрозуміло, як виконати цей пункт(добавляет в select#cities элементы option с городами из выбранной только что страны.)
            }
            for (const country in data) {
                    const arrCountry = data[country];
                    const option = document.createElement('option');
                    option.innerText = country;
                    countries.append(option);
                    console.log(arrCountry);
                    for (const cities in arrCountry) {
                            const arrCities = arrCountry[cities];
                            const optionCity = document.createElement('option');
                            optionCity.innerText = arrCities;
                            cities.append(optionCity);
                            console.log(arrCities);
                        }
                    }
            console.log(data) //изучите структуру, получаемую с сервера в консоли
        })
    }
 */

//DOM: multiply table

    /* {
        const table = document.createElement('table');
        table.border = `1`;
        table.style.width = `250px`;
        document.body.append(table);
        //let str ='';
        const tr0 = document.createElement('tr');
        table.append(tr0);
        for(let k = 0;k<10;k++){
            const td = document.createElement('td');
            td.innerText = `${k}`;
            tr0.append(td);
            //str+=k;
        }
        //str+='\n';
        
        for(let x = 1; x<10;x++){
            const tr1 = document.createElement('tr'); 
            const td = document.createElement('td');
            td.innerText = `${x}`;
            tr1.append(td);
            //str+=x;
            for(let i =1;i<10;i++){
                const td = document.createElement('td');
                td.innerText = `${i*x}`;
                tr1.append(td);
                //str+=i*x;
            }
            const br = document.createElement('br'); 
            tr1.append(br);
            //str+='\n';
            table.append(tr1);
        }
        //console.log(str);
    } */
//DOM: highlight cell

/* {
    const table = document.createElement('table');
        table.border = `1`;
        table.style.width = `250px`;
        document.body.append(table);
        //let str ='';
        const tr0 = document.createElement('tr');
        table.append(tr0);
        for(let k = 0;k<10;k++){
            const td = document.createElement('td');
            td.innerText = `${k}`;
            tr0.append(td);
            //str+=k;
        }
        //str+='\n';
        
        for(let x = 1; x<10;x++){
            const tr1 = document.createElement('tr'); 
            const td = document.createElement('td');
            td.innerText = `${x}`;
            tr1.append(td);
            //str+=x;
            for(let i =1;i<10;i++){
                const td = document.createElement('td');
                td.innerText = `${i*x}`;
                tr1.append(td);
                td.onmouseover = ()=>{
                    td.style.background = `lightblue`;
                }
                td.onmouseout = ()=>{
                    td.style.background = ``;
                }
                //str+=i*x;
            }
            const br = document.createElement('br'); 
            tr1.append(br);
            //str+='\n';
            table.append(tr1);
        }
} */

//DOM: Highlight cross
/* {
    const table = document.createElement('table');
        table.border = `1`;
        table.style.width = `250px`;
        document.body.append(table);
        //let str ='';
        const tr0 = document.createElement('tr');
        table.append(tr0);
        for(let k = 0;k<10;k++){
            const td = document.createElement('td');
            td.innerText = `${k}`;
            tr0.append(td);
            //str+=k;
        }
        //str+='\n';
        
        for(let x = 1; x<10;x++){
            const tr1 = document.createElement('tr'); 
            const td = document.createElement('td');
            td.innerText = `${x}`;
            tr1.append(td);
            //str+=x;
            for(let i =1;i<10;i++){
                const td = document.createElement('td');
                td.innerText = `${i*x}`;
                tr1.append(td);
                td.onmouseover = ()=>{
                    td.style.background = `lightblue`;
                    tr1.style.background = `lightblue`;
                }
                td.onmouseout = ()=>{
                    td.style.background = ``;
                    tr1.style.background = ``;
                }
                //str+=i*x;
            }
            const br = document.createElement('br'); 
            tr1.append(br);
            //str+='\n';
            table.append(tr1);
        }
} */