//--------Javascript Data Types---------//

/*
Javascript data types 8 type:
1.String
2.Number
3.Boolean
4.Bigint
5.Underfinered
6.Null
7.Symbol
8.Object
*/

//----String-----//
let firstName = "Alok";
console.log(typeof firstName);
let fullName = "MY Name is 'Alok'"; //let fullName = 'MY Name Is \'Alok\'';//
console.log(fullName);
firstName = "Alok Barman";
let finalName = `My Name is ${firstName}`;
console.log(finalName);

//-----Number------//
let age = 30;
console.log(typeof age);
let age1 = 30;
let age2 = 40;
console.log(age1 + age2);
let total = age1 + age2 + firstName;
console.log(total);
console.log(typeof total);
let numberBig = 888888888888888888;
let numberBig1 = 8888888888888888888;
console.log(numberBig * numberBig1);

//-----Bigint-----//
let numberBig2 = 888888888888888888n;
let numberBig3 = 888888888888888888n;
console.log(numberBig2 * numberBig3);
console.log(typeof numberBig2);
let numberBig4 = 8n;    // Bigint to Bigint(+,-,*,/) recommendation//
let numberBig5 = 5n;   //let numberBig = bigint(5); Or let numberBig = bigint(age);//
console.log(numberBig4 / numberBig5);

//------Boolean------//
let if18Year = true;
console.log(if18Year);
console.log(typeof if18Year);
 
//------Undefined-------//
let table;
console.log( typeof table);

//------Null------//
let apple = null;
console.log(apple);
let table1;
console.log(table1== null);
console.log(table1===null);

//-----Arry-----//
let town = ["Naogaon"," Rajshahi","Dhaka"]
console.log(town);
console.log(typeof town);
let town1 = ["Naogaon"," Rajshahi","Dhaka"]
console.log(town[1]);
let town2 = ["Naogaon"," Rajshahi","Dhaka"]
town2[0] = "Mohadevpur";
console.log(town2);
let town3 = ["Naogaon"," Rajshahi","Dhaka"]
town3[3] = "Bangladesh";
console.log(town3);

//-------Object------//
let studentInfo = {
    Fastname:"Alok",
    Lastnmae:"Barman",
    Age:21,
    Dateofbirth:2003
    };
    console.log(studentInfo);
    console.log(typeof studentInfo);