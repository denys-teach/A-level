// String: greeting
// 
// {
//     let name = prompt('Як вас звати?');
//     alert(`Hello, ${name}!`);
// }
// 
// String: gopni4ek
// 
// {
//     let str = prompt(`Введіть рядок!`)
//     alert(str.split(',').join(',блін'));
// }
// 
// String: capitalize
// 
// {
//     let str = "cANBerRa"
//     let result
//     result = str[0].toUpperCase() + str.slice(1).toLowerCase(); 
//     console.log(result) //Canberra
// }
// 
// String: word count

// {
//     let str = prompt('Введіть рядок для рахунку слів!')
//     alert(str.split(' ').length)
// }

//String: credentials

// {
//     let surName= prompt('Введіть ваше прізвище!').trim();
//     let firstName = prompt('Як Вас звати?').trim();
//     let fatherName = prompt('Введіть ваше по-батькові').trim();
//     surName = surName[0].toUpperCase() + surName.slice(1).toLowerCase();
//     firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
//     fatherName = fatherName[0].toUpperCase() + fatherName.slice(1).toLowerCase();
//     let fullName =`${surName} ${firstName} ${fatherName}`;
//     console.log(fullName);
// }

//String: beer

// {
//     let str = "Було жарко. Василь пив пиво вприкуску з креветками"
//     let result;
//     result = str.split('пиво').join('чай');
//     console.log(result) //"Було жарко. Василь пив чай уприкуску з креветками"
// }

//String: no tag

// {
//     let str = "якийсь текст, в якому є один тег <br /> і всяке інше"
//     let result
//     result = str.slice(0,str.indexOf('<'))+str.slice((str.indexOf('>'))+2);
//     console.log(result) //якийсь текст, в якому є один тег і всяке інше
// }

//String: big tag

// {
//     let str = "якийсь текст у якому є один тег <br /> і всяке інше"
//     let result
//     result = str.slice(0,str.indexOf('<'))+str.slice(str.indexOf('<'),(str.indexOf('>'))+1).toUpperCase() + str.slice(str.indexOf('>')+1);
//     console.log(result) //якийсь текст, в якому є один тег <BR /> і всяке інше
// }

//String: new line

// {
//     var myString = "Перший рядок\nДругий рядок";
//     console.log(myString);
//     let str = prompt('Введіть рядок: ');
//     str = str.split('\\n').join('\n');
//     alert(str);
// }

//String: youtube

{
    let regex = /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:watch|embed)(?:(?:(?=\/[-a-zA-Z0-9_]{11,}(?!\S))\/)|(?:\S*v=|v\/)))([-a-zA-Z0-9_]{11,})/;

	let text = prompt("Посилання на відео з ютубу");
	let match = text.match(regex);

	if (match) {
		let videoId = match[1];

		let Code = `<iframe width="800" height="500" 
		src="https://www.youtube.com/embed/${videoId}" </iframe>`

		document.write(Code);
	}
}