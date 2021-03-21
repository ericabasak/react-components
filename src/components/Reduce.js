// practicing reduce and higer order function


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



total = 0;

for(let i = 0; i < users.length; i++) {
  total += users[i].age;
}

console.log(total);

// reduce with higher order function

totalAge = users.reduce((total, user) => user.age + total, 0);
console.log(totalAge);
