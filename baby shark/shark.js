function babyShark(){
    let doo = ' doo';
    const family = ['baby,', 'mommy,', 'daddy,', 'grandma,', 'grandpa,', 'lets go hunt,']
    family.forEach(member => console.log((member + doo.repeat(6) + '\n').repeat(3)))

} 

let name = 'Omri'
let email = 'omrinir12@gmail.com'
let age = 20

var user = {

    name: name,
    email: email,
    age: age
}

console.log(user);

let userButBetter = { name, email, age}

console.log(userButBetter)