let nameTask = prompt('Введіть назву завдання:(так як в дз):');
if(nameTask=== 'Number: odd'){
    let number = +prompt('Введіть число:');
    if(number === Number(number)){
        console.log('Число перетворено коректно!');
        if(number%2===0){
            console.log("Число парне!");
        }
        else if(number%2!==0){
            console.log('Число непарне!');
        }
    }
    else{
        console.log('Число перетворене некоректно!');
    }
}
else if(nameTask==='String: lexics'){
    let str = prompt('Введіть речення(без слова "капець"):').includes('капець');
    if(str){
        console.log('Похвально');
    }
    else{
        console.log('Раджу відмовитись від слова паразит, який ви постійно вживаєте');
    }
}
else if(nameTask==='Boolean'){
    let question1 = confirm('Сьогодні субота?:')
    let question2 = confirm('Зробив дз-шки?:')
    let question3 = confirm('Хочеш на море?:')
    alert(question1, question2, question3)
}
else if(nameTask==='Boolean: if'){
    let question1 = confirm('Сьогодні субота?:')
    if(question1){
        alert('Вітаю, сьогодні в тебе вихідний')
    }
    else{
        alert('нічого, субота шидко настане')
    }
    let question2 = confirm('Зробив дз-шки?:')
    if(question2){
        alert('супер!')
    }
    else{
        alert('потрібно зробити')
    }
    let question3 = confirm('Хочеш на море?:')
    if(question3){
        alert('Скоро поїдемо')
    }
    else{
        alert('на алкоголь сильно не налягай.')
    }
}
else if(nameTask==='Boolean: if'){
    let question1 = confirm('Сьогодні субота?:')
    if(question1){
        alert('Вітаю, сьогодні в тебе вихідний')
    }
    else{
        alert('нічого, субота шидко настане')
    }
    let question2 = confirm('Зробив дз-шки?:')
    if(question2){
        alert('супер!')
    }
    else{
        alert('потрібно зробити')
    }
    let question3 = confirm('Хочеш на море?:')
    if(question3){
        alert('Скоро поїдемо')
    }
    else{
        alert('на алкоголь сильно не налягай.')
    }
}
else if(nameTask==='Comparison: sizes'){
    let size = prompt('Введіть розмір верхнього одягу для переводу в англійську систему розмірів:');
    if(size==40){
        alert('Ваш розмір "S"');
    }
    if(size==42||size==44){
        alert('Ваш розмір "M"');
    }
    if(size==46||size==48){
        alert('Ваш розмір "L"');
    }
    if(size==50||size==52){
        alert('Ваш розмір "XL"');
    }
    if(size==54){
        alert('Ваш розмір "XXL"');
    }
    else{
        alert('Такого розміру в нас немає!Або, ви ввели некоректний розмір')
    }
}
else if(nameTask==='Ternary'){
    confirm('Виберіть стать. "Ок"-чоловік, "Відміна"-жінка')?alert("Ви чоловік"):alert("Ви жінка");
}
else if(nameTask==='Training'){
    // // bool type cast
    // !!2
    // !!0
    // !!1
    // // or
    // 2 || 1
    // 2 || 0
    // //and
    // 2 && 1
    // 1 && 2
    // 0 && 2
    // // or and and difference
    // 0 || 1 || 2
    // 0 && 1 && 2
    // 2 || 1 || 0
    // 2 && 1 && 0
    // confirm('left') || confirm('right')
    // confirm('left') && confirm('right')
    // //null, undefined, so on
    // null || 2
    // undefined && 1
    // alert("Hello") && confirm('Are you sexy?');
    // alert("Hello") || confirm('Are you drunk?');
    // //brackets and complex expressions
    // (undefined || 2) && (3 || 0)
    // (2 && 1) || (null && 0)
    // (2 > 1) && "greater"
    // (2 < 1) && null
    // null && (2 < 1)
    // // ternary operator
    // 1 ? "one" : "not one"
    // 0 ? "zero" : "not zero"
    // "0" ? "\"zero\"" : "not `zero`"
    // parseInt("0") ? 'true' : 'false'
    // ("" || 2) && (3 || "3.5") || (4 && 5)
    // (-1 + 1) && "zero"
    // "-1" + 1 && "oups"
    // (typeof null === 'object') ? "null is object" : "null is null"
    // // ternary && ||
    // Math.random() < 0.5 && 'less' || 'more'
    // (a = Math.random()) < 0.5 && 'less: '+a || 'more: '+a
    // //in for array
    // [2,3,5,7,11].indexOf(7) > -1 ? 'prime' : 'not found'
}
else if(nameTask==='Prompt: or'){
    let age = +prompt("Скільки Вам років?")
    if(age==null||age==false){
        alert('Error')
    }
    else{
        alert('Ви, народились в ' + (2023-age) + 'році');
    }
}
else if(nameTask==='Confirm: or this days'){
    confirm('шопінг?')||alert('ти-бяка')
}
else if(nameTask==='Confirm: if this days'){
    let question0 = confirm('шопінг?');
    if(question0){}
    else{
        alert('ти-бяка')
    }
}
else if(nameTask==='Default: or'){
    let firstName = prompt('Введіть ваше ім\'я:')||'Іван';
    let surName = prompt('Введіть ваше по-батькові:')||'Іванович';
    let lastName = prompt('Введіть ваше прізвище:')||'Іванов';
    alert(`Привіт, ${firstName} ${surName} ${lastName}`);
}
else if(nameTask==='Default: if'){
    let firstName = prompt('Введіть ваше ім\'я:')
    if(firstName){}
    else{firstName='Іван'}
    let surName = prompt('Введіть ваше по-батькові:')
    if(surName){}
    else{surName='Іванович'}
    let lastName = prompt('Введіть ваше прізвище:')
    if(lastName){}
    else{lastName='Іванов'}
    alert(`Привіт, ${firstName} ${surName} ${lastName}`);
}
else if(nameTask==='Login and password'){
    let login = prompt('Введіть ваш логін:');
    let password;
    if(login == 'admin'){
        alert('Вітаю, admin!');
        password = prompt('Введіть пароль: ')
        if(password=='qwerty'){
            alert('Ви увійшли до системи:')
        }
        else{
            alert('Пароль невірний, доступ заблоковано. Спробуйте зайти через 60 хвилин!')
        }
    }
    else{
        alert('Логін або пароль невірні!');
    }
}
else if(nameTask==='Currency exchange'){
    let rate;
    let currency = prompt('Введіть валюту:(usd, eur...)').toLowerCase();
    let purchaseOrSell = confirm('Бажаєте придбати валюту?(ок-придбати, відміна - продати)');
    let exchangeAmount = prompt('Введіть сумму для обміну:');
    if(purchaseOrSell){
        if(currency=='usd'){
            rate = exchangeAmount*36.9;
            alert(`З вас ${Math.ceil(rate)} гривень`);
        }
        else if(currency=='eur'){
            rate = exchangeAmount*40.42;
            alert(`З вас ${Math.ceil(rate)} гривень`);
        }
        else{
            alert('Такої валюти для обміну немає')
        }
    }
    else{
        if(currency=='usd'){
            rate = exchangeAmount*36.9;
            alert(`Отримайте ${Math.ceil(rate)} гривень`);
        }
        else if(currency=='eur'){
            rate = exchangeAmount*40.42;
            alert(`Отримайте ${Math.ceil(rate)} гривень`);
        }
        else{
            alert('Такої валюти для обміну немає')
        }
    }
}
else if(nameTask==='Scissors'){
    let yourChoice = prompt('Введіть свій варіант(камінь,ножиці,папір):').toLowerCase();
    let computerChoice = Math.ceil(Math.random()*3);
    if(computerChoice===1){
        computerChoice = 'камінь'
    }
    else if(computerChoice===2){
        computerChoice = 'ножиці'
    }
    else if(computerChoice===3){
        computerChoice = 'папір'
    }
    else{alert('у комп\'ютера стався збій')}
    alert(`Ваш вибір - ${yourChoice}, вибір комп'ютера - ${computerChoice}`)
    if(yourChoice===computerChoice){
        alert('нічья')
    }
    else if (((yourChoice =='камінь')&&(computerChoice == 'ножиці'))||((yourChoice =='ножиці')&&(computerChoice == 'папір'))||((yourChoice =='папір')&&(computerChoice == 'камінь'))) {
        alert('Вітаю, ти переміг!!!')
    }
    else if (((yourChoice =='ножиці')&&(computerChoice == 'камінь'))||((yourChoice =='папір')&&(computerChoice == 'ножиці'))||((yourChoice =='камінь')&&(computerChoice == 'папір'))) {
        alert('Ти програв!')
    }
    else{
        alert('error')
    }
}
else if(nameTask==='Завдання на чорний пояс'){
    let yourChoice = prompt('Введіть свій варіант (камінь, ножиці, папір):').toLowerCase();
    let computerChoice = ['камінь', 'ножиці', 'папір'][Math.floor(Math.random() * 3)];
    let result = (yourChoice === computerChoice) ? 'нічья' :
             ((yourChoice === 'камінь' && computerChoice === 'ножиці') ||
              (yourChoice === 'ножиці' && computerChoice === 'папір') ||
              (yourChoice === 'папір' && computerChoice === 'камінь')) ? 'Вітаю, ти переміг!!!' :
             ((yourChoice === 'ножиці' && computerChoice === 'камінь') ||
              (yourChoice === 'папір' && computerChoice === 'ножиці') ||
              (yourChoice === 'камінь' && computerChoice === 'папір')) ? 'Ти програв!' :
             'error';
alert(`Ваш вибір - ${yourChoice}, вибір комп'ютера - ${computerChoice}`);
alert(result);
}
else{
    alert('невірна назва завдання.')
}