//ДЗ: Циклы

//while confirm

/* {
    let func=()=> {
        let con = confirm('');
        return con;
    }
    do{}
    while(func()==false)
} */

//array fill

/* {
    let arr = [];
    let func =()=>{
        let con = prompt('Введіть щось!:');
        if(con === null){
            return false
        }
        arr.push(con);
        return Boolean(con);
        
    }
    do{}
    while(func()==true)
} */

//array fill nopush

/* {
    let arr = [];
    let i = 0;
    let func =()=>{
        let con = prompt('Введіть щось!:');
        if(con === null){
            i++;
            return false
        }
        arr[i] = con;
        i++;
        return Boolean(con);
    }
    do{}
    while(func()==true)
    console.log(arr);
} */

//infinite probability

/* {
    let i = 0;
    Rand = Math.random();
    while(1){
        if(Rand>0.9){
            i++
            alert(i);
            break;
        }
        Rand = Math.random();
        i++;
    }
} */

//empty loop

/* {
    while(prompt()==null){}
} */

//progression sum

/* {
    let N = +prompt('number');
    let summ = 0;
    for(let i = 1; i<N; i = i+3){
        summ +=i;
    }
    console.log(summ);
} */

//chess one line

/* {
    let str = '';
    for(let i = 0 ;i<5;i++){
        str += ' #'
    }
    let empt = prompt('Четный рядок "ОК", Нечетный "Отмена"');
    if(empt == null){
        str+= ' '
    }
    console.log(str);
} */

//numbers

/* {
    let str = '';
    for(let i = 0;i<10;i++){
        for(let j = 0; j<10;j++){
            str+= j;
        }
        str+='\n';
    }
    console.log(str);
} */

//chess

/* {
    let str='';
    for(let i = 0; i<5; i++){
        for(let j = 0; j<6;j++){
            str+='.#';
            
        }
        str+='\n'
        for(let k = 0; k<6;k++){
            str+='#.';
        }
        str+= '\n'
    }
    console.log(str);
} */

//cubes

/* {
    let arr = [];
    let N = +prompt('numbers');
    for(let i = 0;i<N;i++){
        arr.push(i**3);
    }
    console.log(arr);
} */

//multiply table                               

/* {
    let arr = [];
    for(let i = 0; i<=10; i++){
        arr[i] = [];
        for(let j = 0; j<=10; j++){
            arr[i][j]=i*j;
        }
    }
    console.log(arr[2][7]);
}  */

//read array of objects

/* {
    let arr = [];
    function readArrayOfObjects(){
        while (confirm('Продовжим?')){
            let obj = {};
            let key,value;
            while (key !== false || value !== false){
                key = prompt('key');
                if(key == null){
                    break;
                }
                value = prompt('value');
                if(value == null){
                    break;
                }
                obj[key] = value;
            }
            arr.push(obj);
        }
        console.log(arr);
    }
    readArrayOfObjects();
} */

//ромбик

/* {
    function rhombus(width){
        let i1;
        let lattice = '#';
        let i2;
        let str = 
    }
    rhombus(11);
} */