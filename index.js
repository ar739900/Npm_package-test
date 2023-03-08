// const qrcode = require ("qrcode");

// qrcode.toString('amit',{type:'terminal'},function(err,url){
//     console.log(url);
// })
// const { Command } = require('commander');
// const program = new Command();

// program
//   .option('-d, --debug', 'output extra debugging')
//   .option('-s, --small', 'small pizza size')
//   .option('-p, --pizza-type <type>', 'flavour of pizza');

// program.parse(process.argv);

// const options = program.opts();
// if (options.debug) console.log(options);
// console.log('pizza details:');
// if (options.small) console.log('- small pizza size');
// if (options.pizzaType) console.log(`- ${options.pizzaType}`);

// program.argument(name,"name of the user")
// .argument (number,"number of times name should be printed")
// .action (function(name,number){
//     number = Number(number)
//     for(var i = 0;i<number;i++){
//         console.log(name);
//     }
// })
// const inquirer = require('enquirer');

// inquirer
//     .prompt([
//         {
//             type: "input",
//             message:'enter your username',
//             name: "name"
//         },
//         {
//             type:"password",
//             message:'Enter the password',
//             validate:(value)=>{
//                 var pass = value.length>=8
//                 if(pass){
//                     return true
//                 }
//                 else{
//                     console.log('The password size should be more than 8');
//                 }
//             }
//         }
//     ])
//     .then((answers) => {
//         console.log('Welcome back '||answers)
//         inquirer
//         .prompt([
//             {
//                 type:"confirm",
//                 message:'Do you want your pizza delivered',
//                 name:"forDelivery"
//             },
//             {
//                 type:'input',
//                 message:'enter your phone number',
//                 name:'phone number',
//                 validate:(value)=>{
//                 var pass = value.length===10
//                 if(pass){
//                     return true
//                     }
//                 else{
//                     return 'Enter a valid Phone number'
//                     }
//                 }
//             },
//             {
//                 type:'input',
//                 name:"quantity",
//                 message:"How many do you need",
//                 validate(value){
//                     var pass = !isNaN(parseInt(value));
//                     return pass || "Enter a number"
//                 },
//                 filter(value){
//                     return parseInt(value);
//                 }
//             },
//             {
//                 type:'choices',
//                 name:'toppings',
//                 message:"choose the topping for your pizza",
//                 choices:[
//                     "paneer",
//                     "chicken",
//                     "corn and cheese"
//                 ]
//             },
//             {
//                 type:'choices',
//                 name:'size',
//                 message:"choose the size of your pizza",
//                 choices:[
//                     "l",
//                     "m",
//                     "s"
//                 ]
//             }
//         ])
//         .then((answers)=>{
//             console.log(answers);
//         })
//     })
//     .catch((error)=>{
//         if(error.isTtyError){
//         }
//         else{
//         }
//     });
module.exports.Sum = function sum(a,b){
    return a+b
}