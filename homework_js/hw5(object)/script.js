//Literals

/*{
    const cat = {
        name: 'Bars',
        weight: '100 кг',
        color: "orange",
    }
    const Vasya = {
        name: 'Vasya',
        nationality: 'Ukrainian',
        age: 23,
    }
}*/

//Literals expand

/*{
    const cat = {
        name: 'Bars',
        weight: '100 кг',
        color: "orange",
        [prompt("Введіть ключ:")]: prompt('Введіть значення до цього ключа'),
        [prompt("Введіть ключ:")]: prompt('Введіть значення до цього ключа'),
    }
    console.log(cat);
}*/

//Literals copy

/*{
    let keyForCat = prompt('Введіть змінну-ключ');
    let valueForCat;
    const cat = {
        name: 'Bars',
        weight: '100 кг',
        color: "orange",
        [prompt("Введіть ключ:")]: prompt('Введіть значення до цього ключа'),
        [prompt("Введіть ключ:")]: prompt('Введіть значення до цього ключа'),
    }
    const Cat = {
        [keyForCat]:valueForCat,
        ...cat,
    }
    console.log(cat,'fg',Cat);
}*/

//Html tree

/*{
    let body = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'span',
                        children: ['Enter a data please'],
                    },
                    {
                        tagName: 'br'
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'name',
                        }
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'surname',
                        },
                    }
                ]
            },
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        attrs: {
                            id: 'ok'
                        },
                        children: ['OK'],
                    },
                    {
                        tagName: 'button',
                        attrs: {
                            id: 'cancel'
                        },
                        children: ['Cancel']
                    }
                ]
            }
        ]
    }
    console.log(body.children[1].children[1].children[0]);
    console.log(body.children[0].children[3].attrs.id);
}*/

//Parent

/*{
    let body = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'span',
                        children: ['Enter a data please'],
                    },
                    {
                        tagName: 'br'
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'name',
                        }
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'surname',
                        },
                    }
                ]
            },
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        attrs: {
                            id: 'ok'
                        },
                        children: ['OK'],
                    },
                    {
                        tagName: 'button',
                        attrs: {
                            id: 'cancel'
                        },
                        children: ['Cancel']
                    }
                ]
            }
        ]
    }
    body.children[0].parent = body;
    body.children[1].parent = body;
    body.children[0].children[0].parent = body.children;
    body.children[0].children[1].parent = body.children;
    body.children[0].children[2].parent = body.children;
    body.children[0].children[3].parent = body.children;
    body.children[1].children[0].parent = body.children;
    body.children[1].children[1].parent = body.children;
    console.log(body);
}*/

//Change OK

/*{
    {
        let body = {
            tagName: 'body',
            children: [
                {
                    tagName: 'div',
                    children: [
                        {
                            tagName: 'span',
                            children: ['Enter a data please'],
                        },
                        {
                            tagName: 'br'
                        },
                        {
                            tagName: 'input',
                            attrs: {
                                type: 'text',
                                id: 'name',
                            }
                        },
                        {
                            tagName: 'input',
                            attrs: {
                                type: 'text',
                                id: 'surname',
                            },
                        }
                    ]
                },
                {
                    tagName: 'div',
                    children: [
                        {
                            tagName: 'button',
                            attrs: {
                                id: 'ok'
                            },
                            children: ['OK'],
                        },
                        {
                            tagName: 'button',
                            attrs: {
                                id: 'cancel'
                            },
                            children: ['Cancel']
                        }
                    ]
                }
            ]
        }
        body.children[1].children[0].attrs[prompt('Введіть новий атрибут тега "<button id=\'ok\'>"')] = prompt('також, додайте значення для цього атрибуту:')
        console.log(body);
    }
}*/

//Destructure

/*{
    let body = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'span',
                        children: ['Enter a data please'],
                    },
                    {
                        tagName: 'br'
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'name',
                        }
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'surname',
                        },
                    }
                ]
            },
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        attrs: {
                            id: 'ok'
                        },
                        children: ['OK'],
                    },
                    {
                        tagName: 'button',
                        attrs: {
                            id: 'cancel'
                        },
                        children: ['Cancel']
                    }
                ]
            }
        ]
    }
    const {children} = body;
    console.log(children[0].children[0].children[0]);
    console.log(children[1].children[1].children[0]);
    console.log(children[0].children[3].attrs.id);
}*/

//Destruct array

/*{
    let arr = [1,2,3,4,5, "a", "b", "c"]
    const [odd1,even1,odd2,even2,odd3, ...arrLetters] = arr
    console.log(odd1,even1,odd2,even2,odd3,arrLetters);
}*/

//Destruct string

/*{
    let arr = [1, "abc"]
    const [number, [s1,s2,s3]] = arr;
    console.log(number,s1,s2,s3);
}*/

//Destruct 2

/*{
    let obj = {name: 'Ivan',
    surname: 'Petrov',
    children: [{name: 'Maria'}, {name: 'Nikolay'}]}
    let {children:name1, children:name2} = obj
    name1 = name1[0].name;
    name2 = name2[1].name;
    console.log(name1,name2);
}*/

//Destruct 3

/*{
    let arr = [1,2,3,4,5,6,7,10];
    const [a,b] = arr
    const length = arr.length;
    console.log(a,b,length);
}*/

//Copy delete

/*{
    const cat = {
        name: 'Bars',
        weight: '100 кг',
        color: "orange",
        [prompt("Введіть ключ:")]: prompt('Введіть значення до цього ключа'),
    }   
    const {name,weight,color, ...restKey} = cat
    let copyCat = {
        name,
        weight,
        color
    };
    console.log(copyCat);
}*/

//Currency real rate

/*{
    let yourCurrency = prompt('Введіть вашу валюту').toUpperCase();
    fetch(`https://open.er-api.com/v6/latest/${yourCurrency}`).then(res => res.json())
     .then(data => {
            let currencyForRate = prompt('Введіть валюту, в яку хочете конвертувати:').toUpperCase();
            let yourSumm = +prompt('Введіть сумму для обміну:');
            console.log(`Ваша валюта: ${yourCurrency},\nВалюта для обміну: ${currencyForRate}(курс для обміну ${data.rates[currencyForRate]}),\nЗа ${yourSumm} ${currencyForRate} потрібно заплатити ${Math.ceil((yourSumm/data.rates[currencyForRate]))} ${yourCurrency}!`);
        })
}*/

//Currency drop down

/*{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {
        let str = '<select>'
            for (const key in data.rates) {
                if (Object.hasOwnProperty.call(data.rates, key)) {
                    str += `<option>${key}</option>`
                }
            }
        str+= `</select>`
        document.write(str)
         })
}*/

//Currency table                                                             взагалі не знаю, як виконувати...

/*{
    fetch(`https://open.er-api.com/v6/latest/USD`).then(res => res.json())
     .then(data => {
            console.log(data.rates);
        })
}*/

//Form

/*{
    const Vasya = {
        name: 'Vasya',
        nationality: 'Ukrainian',
        age: 23,
    }
    let str = '<form>'
    for(let i = 0; i<Object.keys(Vasya).length;i++){
        let value = Object.values(Vasya)[i];
        let type = Object.values(Vasya)[i];
        if(typeof type === typeof 5){
            type = 'number';
        }
        else if(typeof type === typeof ''){
            type = 'text';
        }
        else if(typeof type === typeof !''){
            type = 'checkbox';
        }
        else{console.log('error with type!');}
        str += `<label>${Object.keys(Vasya)[i]}: <input type='${type}' value ='${value}'></label></br>`
    }
    str += `</form>`
    document.write(str)
}*/

//Table

{
    const persons = [
        {
            name: 'Марія',
            fatherName: 'Іванівна',
            surname: 'Іванова',
            sex: 'female'
        },
        {
            name: 'Миколай',
            fatherName: 'Іванович',
            surname: 'Іванов',
            age: 15
        },
        {
            name: 'Петро',
            fatherName: 'Іванович',
            surname: 'Іванов',
            married: true
        },
    ]
    
}