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

{
    
}