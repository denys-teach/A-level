//Temperature

/*{
    let Farad;
    let temperature = (grad) => Farad = grad*1.8+32.00;
    temperature(55); 
}*/

//RGB

/*{
    let RGB = (r,g,b) => `#${r}${g}${b}`
    console.log(RGB(55,2,15));
}*/

//Flats

/*{
    let flats = (floors, apartmants, numberOfFloor) => {
        let apartmantsPerEntrance = apartmants*floors;
        let entrance = Math.ceil(Math.ceil(numberOfFloor/apartmants)/floors);
        let floor = Math.ceil((numberOfFloor%apartmantsPerEntrance)/apartmants)
        return {entrance,floor}
    }
    console.log(flats(10,4,99)); 
}*/

//Credentials

/*{
    const capitalize = str => {
        let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
        return result
    }
    const Credentials = () => {
        let surName= prompt('Введіть ваше прізвище!').trim();
        let name = prompt('Як Вас звати?').trim();
        let fatherName = prompt('Введіть ваше по-батькові').trim();
        name = capitalize(name);
        surName = capitalize(surName);
        fatherName = capitalize(fatherName);
        let fullName =`${surName} ${name} ${fatherName}`;
        return {name, surName, fatherName, fullName}
    }
    console.log(Credentials());
}*/

//New line

/*{
    let newLine = (str)=>{
        str = str.split('\\n').join('\n');
        return str
    }
    console.log(newLine(prompt('Введіть рядок: ')))
}*/

//Prompt OR

/*{
    let age = (age=0)=>{alert('Ви, народились в ' + (2023-age) + 'році');}
    age(5);
}*/

//Login And Password

/*{
    let loginAndPassword = (rightLogin, rightPassword)=>{
        let login = prompt('Введіть ваш логін:');
        let password;
        if(login == rightLogin){
            alert('Вітаю, admin!');
            password = prompt('Введіть пароль: ')
            if(password == rightPassword){
                alert('Ви увійшли до системи:')
                return true
            }
            else{
                alert('Пароль невірний, доступ заблоковано. Спробуйте зайти через 60 хвилин!')
                return false
            }
        }
        else{
            alert('Логін або пароль невірні!');
        }
    }
    console.log(loginAndPassword('admin','123'));
}*/

//For Table

/*{
    let forTable = (arr)=>{
        let table = '<table border="1">';
        let i = 0;
        for (const tr of arr) {
            const rowColor = (i%2===0)?"grey":"yellow"
            table += `<tr onmouseover ="style.backgroundColor = '${rowColor}'" onmouseout = "style.backgroundColor = ''">`
            for (const td of tr) {
                table += `<td width="15">${td}</td>`
            }
            table += '</tr>'
            i++;
        }
        table += '</table>'
        document.write(table)
    }
    forTable([[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]]);
}*/

//Filter Lexics                                                                   не вийшло, потрібно перероблювати. Поки, не знаю як...

{
    /*let filterLexics = (str, badWords) => {
        str = str.split(' ')
        newStr = str.filter((element)=>badWords.includes(element))
        return newStr
    } 
    console.log(filterLexics('бляха, сьогодні ж вівторок',['бляха', 'муха', "пляшка", "шабля"]));
    
    
    //console.log(str.join(' '), `\n"${newStr}" - були використанні в реченні!`);*/
                                                                                    // const badWords = ['бяка', "блін", "капець"] 
                                                                                    // let str = prompt('Введіть рядок: ').split(' ')
                                                                                    // let newStr = str.filter((element)=>badWords.includes(element))
                                                                                    // console.log(str.join(' '), `\n"${newStr}" - були використанні в реченні!`);
}

//Currency Table                                                                в об'єктах це завдання ще не виконав...

{

}

//Form

/*{
    let form = (obj)=>{
        let str = '<form>'
        for(let i = 0; i<Object.keys(obj).length;i++){
            let value = Object.values(obj)[i];
            let type = Object.values(obj)[i];
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
            str += `<label>${Object.keys(obj)[i]}: <input type='${type}' value ='${value}'></label></br>`
        }
        str += `</form>`
        document.write(str)
    }
    form({map:'nnn', hab:5})
}*/

//Array of objects sort                                                       потім повернусь до цього завдання

/*{
    var persons = [
        {name: "Іван", age: 17},
        {name: "Марія", age: 35},
        {name: "Олексій", age: 73},
        {name: "Яків", age: 12},
    ]

    let arrayObjSort = (obj, valueObj) => {
        ...//
    }
    
    sort(persons, "age"); //сортує за віком за зростанням
    sort(persons, "name", false); //сортує на ім'я за спаданням

}*/

//Table                                                                            в об'єктах не виконав це завдання

{

}

//Divide

{
    
}