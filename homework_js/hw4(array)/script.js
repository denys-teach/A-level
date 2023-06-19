//Confirms

/*{
    let arr = [confirm('Яка сьогодні погода?', confirm('чим збираєшся займатись?'), confirm("відпустка?"))]
}*/

//Prompts

/*{
    let arr;
    arr[0] = prompt('Як тебе звуть?');
    arr[1] = prompt('Скільки тобі років?');
}*/

//Item access

/*{
    let arr = [1,5,9,12,55]
    alert(arr[prompt('Введіть індекс масива')])
}*/

//Item change

/*{
    let arr = [];
    arr[prompt('введіть індекс, в яеий хочете занести дані')] = prompt('Введіть значення для внесення');
}*/

//Multiply table

/*{
    const arr = [[0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]]
}*/

//Multiply table slice

/*{
    const arr = [[0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]]
    let result = arr.slice(1)
    result = [result[0].slice(1),result[1].slice(1),result[2].slice(1),result[3].slice(1),result[4].slice(1)]
    console.log(result);
}*/

//IndexOf Word

/*{
    let str = prompt('Введіть речення:');
    alert(`це слово за рахунком є: ${str.split(' ').indexOf('слово')}`)
}*/

//Reverse

/*{
    let str = [];
    let result = [];
    for(let i = 1; i <=5; i++){
        str.push(prompt(`Введіть ${i} елемент`))
    }
    for(let i = 1; i<=5; i++){
        result.push(str.pop());
    }
    console.log(str, result);
}*/

//Reverse 2

/*{
    let str = [];
    let result = [];
    for(let i = 1; i <=5; i++){
        str.push(prompt(`Введіть ${i} елемент`))
    }
    for(let i = 1; i<=5; i++){
        result.push(str.pop());
    }
    console.log(str, result);
    for(let i = 1; i<=5; i++){
        str.unshift(result.shift());
    }
    console.log(str, result);
}*/

//Copy

/*{
    const arr = [[0,0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]]
    const arr2 = [...arr];
}*/

//Deep Copy

/*{
    const arr = [[0,0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]]
    const deepCopyArr = [arr[0],arr[1],arr[2],arr[3],arr[4],arr[5]]
    console.log(deepCopyArr);
}*/

//Array Equals

/*{
    const arr = [1,2,3,4]
    const arr2 = arr;
}*/

//Flat

/*{
    const arr = [[0,0,0,0,0],[1,2,3,4,5],[2,4,6,8,10],[3,6,9,12,15],[4,8,12,16,20],[5,10,15,20,25]]
    let fullArr = [...arr[1],...arr[2],...arr[3],...arr[4],...arr[5],]
    console.log(fullArr.length);
}*/

//Destruct

/*{
    let str = prompt('Введіть речення:').split(' ').join('');
    str = [...str]
    let [first,,,,five,,,,nine] = str;
    console.log(first,five,nine);
}*/

//Destruct default

/*{
    let str = prompt('Введіть речення:').split(' ').join('');
    str = [...str]
    let [,second = '!',,four = '!',five = '!',,,,] = str;
    console.log(second,four,five);
}*/

//Multiply table rest

/*{
    const arr = [[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]]
    const [[,...none0],[,...none1],[,...none2],[,...none3],[,...none4]] = arr
    let result = [none0,none1,none2,none3,none4]
    console.log(result);
}*/

//For Alert

/*{
    let arr = ["John", "Paul", "George", "Ringo"]
    for (const iterator of arr) {
        alert(iterator);
    }
}*/

//For Select Option

/*{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let   str = "<select>"
    for (const currency of currencies){
        str+= `<option>${currency}</option>`;
    }
    str+= "</select>"
    document.write(str) //document.write відобразить ваш HTML на сторінці
}*/

//For Table Horizontal

/*{
    const names = ["John", "Paul", "George", "Ringo"]
    let   str = "<table>"
    for (const name of names){
        str+=`<tr>${name} </tr>`
    }
    str+= "</table>"
    document.write(str) //document.write отобразит ваш HTML на странице
}*/

//For Table Vertical

/*{
    const names = ["John", "Paul", "George", "Ringo"]
    let   str = "<table>"
    for (const name of names){
        str+= `<tr><td>${name}</td></tr>`
    }
    str+= "</table>"
    document.write(str) //document.write відобразить ваш HTML на сторінці
}*/

//For Table Letters

/*{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let   str = "<table>"
    for (const currency of currencies){ //цикл створює рядки
        str+=`<tr>`
        for (const letter of currency){ //цикл створює осередки в одному рядку
            str+=`<td>${letter}</td>`
        }
        str+=`</tr>`
    }
    str+= "</table>"
    document.write(str) //document.write відобразить ваш HTML на сторінці
}*/

//For Multiply Table

{

}

//Function Capitalize

/*{
    const capitalize = str => {
        let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
        return result //саме цей код забезпечить повернення результату функції
   }
   console.log(capitalize("cANBerRa")) //Canberra
}*/

//Map Capitalize

/*{
    const capitalize = str => {
        let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
        return result
    }
    let str = prompt('Введіть рядок:').split(' ');
    let strResult='', result;
    for (const iterator of str) {
        result = capitalize(iterator);
        strResult += `${result} `
    }
    console.log(strResult);
}*/

//Filter Lexics

{
       
}
