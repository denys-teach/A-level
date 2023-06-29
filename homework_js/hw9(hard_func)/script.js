// ДЗ: Функции

//createPerson

/* {
    function createPerson(name, surname){
        return{
            name,
            surname,
            getFullName(){
                return this.name + ' ' + this.surname + ' ' + this.fatherName;
            },
            fatherName: '',
        }
    }
    const a = createPerson("Вася", "Пупкин")
    const b = createPerson("Анна", "Иванова")
    const c = createPerson("Елизавета", "Петрова")

    console.log(a.getFullName()) //Вася Пупкин
    a.fatherName = 'Иванович'    //Вася Иванович Пупкин

    console.log(b.getFullName()) //Анна Иванова
} */

//createPersonClosure

/* {
    function createPersonClosure(name, surname){
        let age,fatherName;
        function setName(newName){
            if(newName[0].toUpperCase() === newName[0] && typeof(newName) === 'string'){
                return(name = newName);
            }
            else{
                return name;
            }
        };
        function setSurname(newSurname){
            if(newSurname[0].toUpperCase() === newSurname[0] && typeof(newSurname) === 'string'){
                return(surname = newSurname);
            }
            else{
                return surname;
            }
        }
        function setFutherName(newFatherName){
            if(newFatherName[0].toUpperCase() === newFatherName[0] && typeof(newFatherName) === 'string'){
                return(fatherName = newFatherName);
            }
            else{
                return fatherName;
            }
        }
        function setAge(newAge){
            if(newAge>0&&newAge<100){
                return(age = newAge);
            }
            else{
                return age;
            }
        }
        function setFullName(newSurname,newName,newFatherName){
            if(newName[0].toUpperCase() === newName[0] && typeof(newName) === 'string'){
                if(newSurname[0].toUpperCase() === newSurname[0] && typeof(newSurname) === 'string'){
                    if(newFatherName[0].toUpperCase() === newFatherName[0] && typeof(newFatherName) === 'string'){
                        return(
                            name = newName,
                            surname = newSurname,
                            fatherName = newFatherName);
                    }
                    else{
                        return (
                            name = newName,
                            surname = newSurname,
                            fatherName);
                    }
                }
                else{
                    return (name = newName,
                            surname);
                }
            }
            else{
                return name;
            }
        }
        let getName = ()=>name;
        let getSurname= ()=>surname;
        let getFatherName = ()=>fatherName;
        let getAge = ()=>age;
        let getFullName = ()=>name+' '+surname+' '+fatherName;

        return {
            setName,
            setSurname,
            setFutherName,
            setFullName,
            setAge,
            getName,
            getSurname,
            getFatherName,
            getAge,
            getFullName}
    }
    
    const a = createPersonClosure("Вася", "Пупкин")
    const b = createPersonClosure("Анна", "Иванова")
    console.log(a.getName())
    a.setAge(15)
    a.setAge(150) //не работает

    b.setFullName("Петрова", "Анна", "Николаевна")
    console.log(b.getFatherName()) //Николаевна
} */ 

//createPersonClosureDestruct

/* {
    function createPerson(name, surname){
        return{
            name,
            surname,
            getFullName(){
                return this.name + ' ' + this.surname + ' ' + this.fatherName;
            },
            fatherName: '',
        }
    }
    const a = createPerson("Вася", "Пупкин")
    const b = createPerson("Анна", "Иванова")
    const c = createPerson("Елизавета", "Петрова")

    console.log(a.getFullName()) //Вася Пупкин
    a.fatherName = 'Иванович'    //Вася Иванович Пупкин

    console.log(b.getFullName()) //Анна Иванова
    function createPersonClosureDestruct({name="Анон", surname="Анонов", fatherName='Анонович', age ='00'}={}){
        console.log(name);
        return `${name} ${fatherName} ${surname} ${age}`
        
    }
    const m = createPersonClosureDestruct(createPerson("Вася", "Пупкин"))
    const f = createPersonClosureDestruct({name: 'Николай', age: 75})
} */

//isSorted

/* {
    function isSorted(...params){
        let value = true;
        for (const iterator of params) {
            if(iterator === +iterator){
                value = true;
                continue;
            }
            else{
                console.log('value false!!!');
                value = false;
                break;
            }
        }
        params.sort(function(a,b){return a-b;})
        return console.log(value);
    }
    isSorted(55,22,115);
} */

//Test isSorted

/* {
    
    let arr = [];
    let value0;
    let newValue;
    let enter = ()=>{
        newValue = prompt('Введіть нове значення массиву');
        if(newValue!==null){
            newValue = +newValue;
            arr.push(newValue);
            return newValue
        }
        return value0 = null;
    }
    while(value0 !== null){
        value0 = enter();
    }
    function isSorted([...params]){
        let value = true;
        for (const iterator of params) {
            if(iterator === +iterator){
                value = true;
                continue;
            }
            else{
                console.log('value false!!!');
                value = false;
                break;
            }
        }
        params.sort(function(a,b){return a-b;})
        return console.log(value);
    }
    isSorted(arr);
} */

//personForm

/* {
    function createPersonClosure(name, surname){
        let age,futherName;
        function setName(newName){
            if(newName[0].toUpperCase() === newName[0] && typeof(newName) === 'string'){
                return(name = newName);
            }
            else{
                return name;
            }
        };
        function setSurname(newSurname){
            if(newSurname[0].toUpperCase() === newSurname[0] && typeof(newSurname) === 'string'){
                return(surname = newSurname);
            }
            else{
                return surname;
            }
        }
        function setFutherName(newFutherName){
            if(newFutherName[0].toUpperCase() === newFutherName[0] && typeof(newFutherName) === 'string'){
                return(futherName = newFutherName);
            }
            else{
                return futherName;
            }
        }
        function setAge(newAge){
            if(newAge>0&&newAge<100){
                return(age = newAge);
            }
            else{
                return age;
            }
        }
        function setFullName(newSurname,newName,newFutherName){
            if(newName[0].toUpperCase() === newName[0] && typeof(newName) === 'string'){
                if(newSurname[0].toUpperCase() === newSurname[0] && typeof(newSurname) === 'string'){
                    if(newFutherName[0].toUpperCase() === newFutherName[0] && typeof(newFutherName) === 'string'){
                        return(
                            name = newName,
                            surname = newSurname,
                            futherName = newFutherName);
                    }
                    else{
                        return (
                            name = newName,
                            surname = newSurname,
                            futherName);
                    }
                }
                else{
                    return (name = newName,
                            surname);
                }
            }
            else{
                return name;
            }
        }
        let getName = ()=>name;
        let getSurname= ()=>surname;
        let getFutherName = ()=>futherName;
        let getAge = ()=>age;
        let getFullName = ()=>`${name} ${surname} ${futherName}`;

        return {
            setName,
            setSurname,
            setFutherName,
            setFullName,
            setAge,
            getName,
            getSurname,
            getFutherName,
            getAge,
            getFullName}
    }
    
    function createPersonClosureDestruct({name="Анон", surname="Анонов", futherName='Анонович', age ='00'}={}){
        return `${name} ${futherName} ${surname} ${age}` 
    }
    const Anya = createPersonClosure("Анна", "Иванова")
    Anya.setAge(15)
    Anya.setFullName("Петрова", "Анна", "Николаевна");
    function personForm(parent, person){
        //насоздавать инпутов (5 штук)
        div0 = document.createElement('div');
        {
            let inputName = document.createElement('input');
            inputName.style.margin = '10px';
            inputName.value = person.getName();
            inputName.oninput = ()=>{
                person.setName(inputName.value);
            }
            div0.append(inputName);
            let br = document.createElement('br');
            div0.append(br);
        }
        {
            let inputSurname = document.createElement('input');
            inputSurname.style.margin = '10px';
            inputSurname.value = person.getSurname();
            inputSurname.oninput = ()=>{
                person.setSurname(inputSurname.value);
            }
            div0.append(inputSurname);
            let br = document.createElement('br');
            div0.append(br);
        }
        {
            let inputFutherName = document.createElement('input');
            inputFutherName.style.margin = '10px';
            inputFutherName.value = person.getFutherName();
            inputFutherName.oninput = ()=>{
                person.setFutherName(inputFutherName.value);
            }
            div0.append(inputFutherName);
            let br = document.createElement('br');
            div0.append(br);
        }
        {
            let inputAge = document.createElement('input');
            inputAge.style.margin = '10px';
            inputAge.value = person.getAge();
            inputAge.oninput = ()=>{
                person.setAge(inputAge.value);
            }
            div0.append(inputAge);
            let br = document.createElement('br');
            div0.append(br);
        }
        {
            let inputFullName = document.createElement('input');
            inputFullName.style.margin = '10px';
            inputFullName.value = person.getFullName();
            inputFullName.oninput = ()=>{
                person.setFullName(inputFullName.value);
            }
            div0.append(inputFullName);
            let br = document.createElement('br');
            div0.append(br);
        }
        parent.append(div0);
        //надобавлять их в parent
        //навесить каждому из них обработчик события типа nameInput.oninput = () => {
        //тут пытаемся менять person используя person.setName. Текст в инпуте должен стать таким, который вернет setName
    }
    personForm(document.body,Anya);
} */

//getSetForm                                              не виконав 

/* {
    let car;
{
    let brand = 'BMW', model = 'X5', volume = 2.4
    car = {
        getBrand(){
            return brand
        },
        setBrand(newBrand){
            if (newBrand && typeof newBrand === 'string'){
                brand = newBrand
            }
            return brand
        },
        
        getModel(){
            return model
        },
        setModel(newModel){
            if (newModel && typeof newModel === 'string'){
                model = newModel
            }
            return model
        },
        
        getVolume(){
            return volume
        },
        setVolume(newVolume){
            newVolume = +newVolume
            if (newVolume && newVolume > 0 && newVolume < 20){
                volume = newVolume
            }
            return volume
        },
        
        getTax(){
            return volume * 100
        }
    }
}

function getSetForm(parent, getSet){
    const inputs = {} //реестр
    
    const updateInputs = () => { //функция обновления полей ввода согласно всяким get....
        //тут должен быть перебор
    }
    
    for (const getSetName in getSet){
        const getOrSet = //первые три буквы переменной getSetName. Так же можно использовать флаг isGet, который будет равен true или false
        const fieldName = //остальные буквы getSetName - типа "Name" или "FullName"
        const setKey    = `set` + fieldName
        const getKey    = `get` + fieldName
        
        //допишите тут все шо надо, и не только тут
    }
    updateInputs()
}

getSetForm(document.body, car)
getSetForm(document.body, createPersonClosure('Анон', "Анонов"))
} */