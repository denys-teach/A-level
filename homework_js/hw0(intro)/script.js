//Calc

// {
//     let name = prompt('Введіть ваше ім\'я');
//     alert(`Hello, ${name}`);
//     let age = prompt('Введіть ваш вік!');
//     alert(`Через 100 років, Вам виповниться ${age+100}`)
// }

//Завдання на синій пояс

/*{
    const credentials = {
        login: 'admin',
        password: 'qwerty',
    }
    const div = document.createElement('div');
    const input = document.createElement('input');
    //не знаю, як з'єднати форму з перевіркою в js... 
}*/
{
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