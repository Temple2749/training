// let list;
//  const savedList = JSON.parse(localStorage.getItem ('mySavedList'));
//  Array.isArray(savedList) ? (list = savedList) : (
//  list = 
// [
//     {
//         id: '1',
//         item: 'Notebook',
//     },
//     {
//         id: '2',
//         item: 'Ewa',
//     },
//     {
//         id: '3',
//         item: 'Garri',
//     },
//     {
//         id: '4',
//         item: 'Cassava',
//     },
//     {
//         id: '5',
//         item: 'Agbado',
//     }
// ]
// )
// let button = document.getElementById('enter');
// let input = document.getElementById('user-input'); 
// let ul = document.querySelector('ul');

// listRendering();

// function listRendering() {
//     ul.innerHTML = '';
//     for(let i=0; i < list.length; i++){
//         const currentIteration = list[i];
//         const li = document.createElement('li')
//         li.style = 'margin-bottom: 5px; list-style: none;';
//         li.appendChild(document.createTextNode(currentIteration.item));

// // create a Delete button

//         const deleteButton = document.createElement('button');
//         deleteButton.id = currentIteration.id;
//         deleteButton.innerText = 'remove'; 
//         deleteButton.style = 'margin-left: 20px;';
//         deleteButton.addEventListener('click', deleteItem);
//         // deleteButton.onClick = deleteItem;
//         li.appendChild(deleteButton);
//         ul.appendChild(li);
//     }
// }

// function inputLength() {
//     return input.value.length >2
// }

// function createListElement() {
//         let id = '' + Math.floor(Math.random() * 10000) + 1;
//         // let id = new Date().getTime();
//         const newItem = {id: id,item: input.value}
//         list.push(newItem)
//         listRendering();
//         input.value = '';
//         saveList();
       
//     } 
//     function addListAfterkeypress(event) {
//         if (inputLength() && event.keyCode === 13) {
//             createListElement();
//         }   
//     }

//     function addListAfterClick() {
//         if (inputLength()) {
//          createListElement();
//         } 
//     }

//  input.addEventListener('keypress', addListAfterkeypress);

//  button.addEventListener('click', addListAfterClick);
//  function deleteItem(e){
//     // console.log(e.target);
//     const deleteButton = e.target;
//     const iDToDelete= deleteButton.id
 
//  list = list.filter(function (task) {
//     return task.id==iDToDelete ? false : true;
//  });
//  listRendering();
//  saveList();
// }
// function saveList(){
//     localStorage.setItem('mySavedList', JSON.stringify(list));
// }


// Scope

// Scope simply means variable access. That is, what variable do you have access to when a code is running?
// By default in JS, you are in the ROOT or PARENT/Global  scope which is the window object
// function yy() {
//     console.log('checking');
// }
// If you check this in the console(using window.yy();), you'll see that it's been added as part of the window properties.
// A variable defined inside a function lives only within that function. This means the scope of such variables is  inside the function
// function hh() {
//     let n = 'pringles'; 
// }
// The only way to log that to the console is to add console.log()
// function hh () {
//     let n = 'pringles 
//     console.log(n);
// }

// The amazing thing is that functions have access to any variable in the root scope
//     let c = 'Can I access this?';
//     function hh () {
//     let n = 'pringles' 
//     console.log(c);
// }

// Function hh has access to the variable c because window.hh exists and variable c lives on the window object so they both have the same parent
// *paste the code in the console for a clearer understanding
// The value of a variable in the window object can be reassigned in a function but can only be executed if and only if the function is called. 

let smile = 5;

function smileFunction () {
    // child scope
     smile ='hello';
    console.log('1', smile);
}
// smileFunction();

function smilerFunction () {
    // child scope
     smile ='Bye'
   console.log('2', smile);
}
// smilerFunction();
function smilestFunction () {
    // child scope
    smile ='Wetin'
   console.log('3', smile);
}

// smilestFunction();
const test = 'not working';

function lilExample() {
  const test = 'working';
    return test;
}



// console.log('window', smile);
// console.log('1', smile);
// console.log('2', smile);
// console.log('3', smile);
// console.log(smile);
// The last 'smile' would be 'Wetin' because once we called the functions, the value of smile has been modified
// Make sure you don't give variables in a function name as that in the root scope in order not have something called a "NAMING CONFLICT" By doing so, you won't have access to the root scope

// The last check to access a variable is always the root scope

// let bro = 'code';

// function checking() {
//     console.log(bro)
// }

// checking();



// function from() {
//     // let bro = 'happy';
//     function mine() {
//         // let bro = 'sad';
//         console.log(bro)  
//     } 
//     mine();
// }

// from();
//  To log that to the console, the function would check first to see if it recognises the variable. if not, it passes it to the root scope. If it doesn't exist in the root scope, it returns an error. 

// Exercises
// For all of these, what is the value of 'a' when the function gets called with the alert()
// // #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }
// q1();

// //#2
// var a = 0;
// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a);
// }



// //#3
// function q3() {
//     window.a = "hello";
// }


// function q32() {
//     alert(a);
// }

// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }

// //#5
// let a = 2;
// if (true) {
//      let a = 5;
//      alert(a);
// }
// alert(a);


//Solution
// For all of these, what is the value of a when the function gets called with the alert()
// #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a); //3
// }

// //#2
// // you must first run q2() in your console to add the new value. then run q22()
// var a = 0;
// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a); //5
// }

// // run in the console:
// // q22() -- 0
// // q2() -- undefined
// // q22() -- 5

// //#3
// function q3() {
//     window.a = "hello";
// }

// // you must first run q3() in your console to add the a property to the window. then run q32()
// function q32() {
//     alert(a); //"hello"
// }

// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a); //"test"
// }

// //#5 with var keyword, if statements do not create a new scope
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a); // 5
// }
// alert(a); // 5

//Advanced Control Flow

// // let boy = 'Semilore';
// // let age = 12;
// // let man = age || 'Boy is a kid';
// console.log(man);

// Ternary operator
// function isUserValid(bool) {
//     return bool;
// }


//  let answer = isUserValid(true) ? 'You may enter' : 'Access Denied';
//  console.log(answer);

//  let automatedAnswer = 'Your account # is ' + (isUserValid(false) ? '1234' : 'not available.');
//  console.log(automatedAnswer);
// //  //Toggle between true and false to see the difference

 //Switch Statements
//  function moveCommand(direction) {
//     let whatHappens;
//     // if (direction === 'forward') {
    //     whatHappens = 'Na you biko';
    // } else if (direction === 'south') {
    //     whatHappens = 'No be you go tell me wetin I go do'
    // } else
//     switch(direction) {
//         case 'forward':
//             whatHappens = 'Na you biko';
//             break;
//             case 'south':
//             whatHappens = 'No be you go tell me wetin I go do';
//             break;
//             case 'backward':
//             whatHappens = 'Carry your wahala and go';
//             break;
//             case 'left':
//             whatHappens = 'No dey do pass yourself';
//             break;
//             case 'right':
//             whatHappens = 'you sabi comrade';
//             break;
//             default:
//                 whatHappens = 'You dey carry me dey go where I no know o';
//     }
//     return whatHappens;
//  }


// ES5 and ES6
// ECMAScript === JavaScript
// ES6 means ECMAScript version 6
//There's from version 1 all the way to version 13 which is the current one
// Don't worry. All versions are supported by browsers with the use of BABEL
//babeljs.io

//let & const
 // with let, anytime it's wrapped around curly braces, it creates a new scope
 // var only create new scope(s) inside a function 
 //Note that for const, you can change or reassign the property of an object but not the parent.
 
//  const john = {
//     male: 'John'
//  }
//  john.male = 'Patrick';
 
 //john = 'brodaly';

 //Destructuring
//  const obj = {
//     player:'Bella',
//     experience: 'veteran',
//     school: 'Harvard',
//     club: 'Newcastle'
//  }

//  const player = obj.player;
//  const experience = obj.experience;
//  const school = obj.school;
// const club = obj.club

 //destructure
//  const { player, experience, school, club } = obj;
//  let { club } = obj;



//  //object properties
//  const name1 = 'john snow';
//  const obj = {
//     [name1] : 'hello',
//     [1 + 2] : 'Great'
//  }

//  const a = 'toni';
//  const b = true;
//  const c = {};

//  //Before, we would have had to do 
//  const obj1 = {
//     a : a,
//     b : b,
//     c : c // Since they have the same value
//  }

// //With ES6 upward
// const obj1 = {
//     a,
//     b,
//     c // Perfectly works
// }

// //Template Strings
// //Before 
// const name3 = 'Bola';
// const name4 = 'Seyi';
// const age = 45;
// const pet = 'dog';
// const condition = 'great'
//  const greeting = 'Hello' + name3 + '. You seem to be doing ' + condition + '. What a lovely ' + pet + ' you have';

// const greeting1 = `Hello ${name3}. You seem to be doing ${condition}. What a lovely ${pet} you have. You look ${age - 10} though. Bye for now ${name3}. Greet ${name4} for me please. Also, your brother's sister's friend is so pretty😍`


// // //Default Arguments
// function greeting2(name='', age=30, pet='cat', condition='weird') {
//     return `Hello ${name}. You seem to be doing ${condition}. What a lovely ${pet} you have. you look ${age - 10} though. Bye for now ${name}`
// }
// console.log(greeting2());
// greeting2('Ade', 25, 'dog', 'happy');

// const experiment = document.getElementById('experiment');
// const input = document.getElementById('input');
// const button = document.getElementById('button');
// button.addEventListener('click', putSomething);
// // putSomething();
// function putSomething() {
//     if(input.value.length < 3) {
//         return;
//     } else {
//     return experiment.innerHTML = `
//         <h1>${input.value}</h1>
//         <h1>${input.value.length}</h1>
//         <h1>${input.value.length - 1}</h1>
//         `;
//     }
// }

//If argument(s) is provided, it executes the function based on it, else it executes based on the default argument(s)

//Symbol Datatype
// let sym1 = Symbol();
// let sym2 = Symbol('bowl');
// let sym3 = Symbol('bowl');
// // //Symbols are used to make sure objects datatypes are not the same
// console.log(sym2 === sym3);
// //This would return false because they are both unique under symbol, whereas if it were to be 'let', they'll be true 

// //ARROW FUNCTIONS
// function squaredFunc(a) {
//     return a * a;
// }

// const squaredFunc = (a) => {
//     return a * a;
// }

// const squaredFunc = a => a * a;


// const squaredFunc = a => a * a;



// function multiply(a, b) {
//     return a * b;
// }


// //With arrow functions

// let multiply = (a, b) => {
//     return a * b;
// }

//If you're returning just one thing like the example above, there's no no need to write the "return"

// let multiply = (a, b) => a * b
 
//Putting it works too though, but ideally, you only want to put it ('return') and the curly braces if you have multiple things to put inside the function


//Advanced Functions
//This is quite advanced. IT takes some time to really grasp and fully understand, so it's okay if you don't really understand it well at first. The best way though, is to try to do it yourself. You can use this lecture notes and code as reference to come back to incase you come across it in the future

// function first() {
//     var greet = 'Hi';
//     function second() {
//         alert(greet);
//     }
//     return second;
// }

// var newFunc = first();
// newFunc();

//First, let's convert the code above to the new way of doing things.

// const first = () => {
//     const greet = 'Hi';
//     const second = () => alert(greet);
//     return second;
// }
// const newFunc = first();
// newFunc();
// first()();

//Remember when we learned scope that the variables created inside a function are local to them and that includes their parameters.
//Everytime we run the function above, the code gets executed and by so doing, the greet variable gets created everytime and this is good because, ordinarily, a const can't be reassigned, but because, it's always a clean slate whenever we run the function, the variable gets created afresh. This helps prevent accidental interference between functions. This is really good because as a developer, you want to minimize the number of bugs or errors in your code. If all variables were shared by the whole program, it takes a lot of effort to make sure no name is ever used for 2 different purposes.
//This makes it easy to read and understand functions as small universes, where whatever happens in that universe only matters to itself.

//There is another interesting concept in javaScript called "CLOSURES"
//Think of it has a "A function runs, gets executed and is never going to execute again"

// const newFunc = second = () => {
//     alert(greet);
// }
// newFunc();

//As a rule in JS, the child scope always has access to the variables of the parent scope (The second function inside the first function would always have access to the variables in the first function which is its parent function). Also, know that you identify these scopes when you see curly braces {}
// const first = () => {
//     const greet = 'Hi';
//     // alert(seun);
//     const second = () => {
//         alert(greet);
//         let seun = 'great guy';
//     }
//     return second; 
// }

// const newFunc = first();
// newFunc();
//RUn the above code in the console

//Don't get it twisted ooo 🤨 Children would always have access to their parent scope but parents DON'T have access to their children's scope

//CURRYING
//It is the process of converting a function that takes multiple arguments(parameters) to a function that takes one at a time
// const multiply = (a, b) => a * b;
// //With currying, we have:
// const curriedMultiply = (a) => (b) => a * b; 
// curriedMultiply(5);
// //If we run the above called function in the browser, it returns the function model
// //In order to make this work, we do: 
// curriedMultiply(5)(9);
// //This returns 45
// //This is good because it's extensible. We can do something like this
// const multiplyByFive = curriedMultiply(5);
// multiplyByFive(12);
// curriedMultiply(5)(12);
// const multiplyByTen = curriedMultiply(10);
// multiplyByTen(7);


//COMPOSE
//Compose is the act of putting two functions together that forms a third function where the output of one function is the input of the other 🤦🏼‍♂ 
// const compose = (f, g) => (a) => f(g(a));
//It takes a lot of time for most people to get this because I must say it's really really advanced. But if you're able to understand the inner workings of the above, you can pretty much do anything 
//f is a function as you can see it's highlighted as well as g 
// const compose = (f, g, h) => (a) => f(g(h(a)));
// const sum = (num) => num + 2;
// // const multiply = (num) => num * 2;
// // const simpleInterest = (p=200,r=3,t=2) => (p * r * t)/100;
// compose(sum, sum)(6); //sum(sum(6))
// sum(sum(6)) // sum(6 + 2) // sum(8) // 10
//If both f & g are sum and a is 6, f(g(a)) gets replaced with sum(sum(6)). Since we know that sum adds 2 to the number, the inner sum(6) gets executed first and that gives 8, then we have sum(8) which gives 10 😁
//Take note of Closures, Currying and Compose as they are very important in advanced JS and you'll find tools and libraries that use these a whole lot
//You don't need to know the definition. Just be able to read a piece of code and understand what's going on

//As a web developer, you should aim for FUNCTIONAL PURITY and avoiding SIDE EFFECTS
//side effects are actions that takes place inside a function that we dont know anything about eg console.log() and the likes or external variables

// var a = 1;
// const b = () => {
//     a = 2 
// };
//The above is a side effect because the function is doing it to affect the outside world(Parent scope). It is always GOOD PRACTICE to avoid side effects and by avoiding side effects we have Functional Purity where the function is void of side effects and always returns something. By doing this, we create something called DETERMINISTIC function(This means if the input (arguments)goes through the function, the return value would always be the same at all times). Even if it's ran a thousand times, the values remain the same(DETERMINISM).
//It is a key concept because if the function always does the same thing, we know exactly what it does and it won't return random errors or bugs popping out here and there. To be a top performing developer, you must have this in mind. Create functions that minimize side effects and have functional purity

//EXERCISE

// //#1 Create a one line function that adds adds two parameters

// //Closure: What does the last line return?
// const addTo = x => y => x + y
// var addToTen = addTo(10)
// addToTen(3)

// //Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1)


// //Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12)

// //Composing: What does the last line return?
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10)

//What are the two elements of a pure function?



//Advanced Arrays (Array Methods)

// forEach method
//  const array = [1,3,5,6];
//  const quadruple = []
//  const newArray = array.forEach((num) =>  quadruple.push(num * 4))

//Basically, the forEach method loops through the array and performs an action but it doesn't actually change the original array. In order to have the result from the action, we create a new array and PUSH the result of the forEach into it as demonstrated above. Also, note that if your function is just returning one action, you don't necessarily have to put the curly braces or use the Return word. Arrow functions work perfectly regardless

//MAP, REDUCE and FILTER. You're most likely to do one of this 3 anytime you want to do a loop.

//MAP
// const array = [1,3,5,6];
// const mapArray = array.map((num) =>  num * 3);
// let johnsonArray = array.map((num) => num + (5 / 2));
//It solves that huge forEach problem in which you have to push your action into another empty array. It instantly creates a new array and the new array has the new values. Map transforms the array while forEach just loops over the array and performs a bunch of actions. So, make it a habit to use Map instead of forEach. Notice that with forEach, you have a lot of side effects, but with Map, there are no side effects. The map method allows us to write pure and simple functions. It's even more important when you consider that the original array is not changed.
//Note that with arrow functions, if you have just one parameter, you can do without the bracket and if you're just returning a single action, you can do without the curly braces and the return word. This makes your code even cleaner

// const array = [2, 3, 5, 6, 12, 44];
// const mapArray = array.map(num => num * 3);

// //Filter
// // Filter loops through an array and return only  the data(s) that meets a given condition
// const filterArray = mapArray.filter(num => num > 10);

// //Reduce
// //With reduce, you can do a combination of filtering and mapping. It takes 2 parameters: The accumulator(this can be any name, eg, acc) and the main parameter(num). Accumulator is something we can use to store the information that happens in the body of the function. The accumulator must always have a default or starting value. In this case, we used 0
// const reduceArray = array.reduce((acc, num) => {
//     return acc + num;
//     //0 + 2//2 +3//5 + 5//10 + 6// 16 +12//28 + 44// 72
// }, 0)

// const averageTip = (tips) => {
//     let sum = 0;
//     for(i=0; i < tips.length; i ++) {
//         sum = sum + tips[i];
//     }
//     return sum /tips.length;
// }

// averageTip(array);



// const johnReduceToAverage = array.reduce((acc, num) => acc + num, 0) /array.length;

// let testArray = [2, 5 , 7]
// function calcAverage(tips) {
//     let sum = 0;
//     for (i = 0; i < tips.length; i++) {
//         sum = sum + tips[i]; //0 + 2 // 2 + 5 // 7 + 7 // 14
//     }
//     return sum / tips.length;
// }

// const calcAverage = array.reduce((acc, num) => {
//     return acc + num; 
// }, 0) / array.length;




//Exercises

// Complete the below questions using this array:
//  const array = [
//      {
//       username: "john",
//        team: "red",
//       score: 5,
//       items: ["ball", "book", "pen"]
//      },
//      {
//        username: "becky",
//       team: "blue",
//       score: 10,
//       items: ["tape", "backpack", "pen"]
//     },
//     {
//        username: "susy",
//        team: "red",
//        score: 55,
//        items: ["ball", "eraser", "pen"]
//     },
//      {
//        username: "tyson",
//       team: "green",
//      score: 1,
//       items: ["book", "pen"]
//     },
  
//   ];
  
// Create an array using forEach that has all the usernames with a "!" to each of the usernames
  
  
// Create an array using map that has all the usernames with a "? to each of the usernames
  
  
// Filter the array to only include users who are on team: red
  
  
// Find out the total score of all users using reduce
  
//    (1), what is the value of i?
//     (2), Make this map function pure:
//    const arrayNum = [1, 2, 4, 5, 8, 9];
//    const newArray = arrayNum.map((num, i) => {
//       console.log(num, i);
//        alert(num);
//       return num * 2;
//    })
  
// BONUS: create a new list with all user information, but add "!" to the end of each items they own.









//solution

const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  ];
  
  const usernamesWithExclamation = [];
  array.forEach((user) => {
    const username = user.username + "!";
    usernamesWithExclamation.push(username);
  });
  
  console.log(usernamesWithExclamation);


//To create an array using map with ? add to each username


const usernamesWithQuestion = array.map((user) => {
    return user.username + "?";
  });
  
  console.log(usernamesWithQuestion);
  


//To filter the array to only include users who are on team: red

const redTeamUsers = array.filter((user) => {
  return user.team === "red";
});

console.log(redTeamUsers);





//To find out the total score of all users using reduce
  

const totalScore = array.reduce((accumulator, user) => {
    return accumulator + user.score;
  }, 0);
  
  console.log(totalScore);
  

  //The value of i in the map function is the index of the current element being processed.
//To make the map function pure and remove the console.log and alert, you can modify it as follows:


const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num) => {
  return num * 2;
});

console.log(newArray);


//BONUS: To create a new list with all user information, but add "!" to the end of each item they own


const newList = array.map((user) => {
    const modifiedItems = user.items.map((item) => {
      return item + "!";
    });
  
    return { ...user, items: modifiedItems };
  });
  
  console.log(newList);
  