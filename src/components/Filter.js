// practicing with higher order function and filter

users = [
  {
    name: "erica",
    age: 55
  },
  {
    name: "adelyn",
    age: 4
  },
  {
    name: "shaan",
    age: 33
  }
]

startsWithA = string => string.toLowerCase().startsWith('a');
namesStartWithA = [];

for (let i = 0; i < users.length; i++) {
  if(startsWithA(users[i].name)) {
    namesStartWithA.push(users[i]);
  }
}

console.log(namesStartWithA);

// OR by using FILTER with higher order functions you can do this ---

namesStartWithA = users.filter((user) => startsWithA(user.name));
console.log(namesStartWithA);
