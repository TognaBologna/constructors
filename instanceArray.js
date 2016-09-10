/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

var users = [];

//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

// var user1 = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
// users.push(user1);
users.push(new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS'), new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags'), new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup'));

console.log('Tyler\'s information is ');
//Console.log all of Tylers information

console.log(users[0].name + ' ' + users[0].email + ' ' + users[0].pw);

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

console.log(users[2].name + ' ' + users[2].email + ' ' + users[2].pw);

//Now create another instance of User using your own information and then add that to your users array.

users.push(new User('Tony', 'hello@TonyVReid.com', 'P@$$W0RD!'))
console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 

for(var i = 0; i < users.length; i++) {
  console.log(users[i].name);
  console.log(users[i].email);
  console.log(users[i].pw);
}