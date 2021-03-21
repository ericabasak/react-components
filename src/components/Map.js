// practicing higher order functions with map

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

getName = user => user.name;
usernames = [];

for (let i = 0; i < users.length; i++) {
  const name = getName(users[i]);
  usernames.push(name);
}

console.log(usernames);

// OR by using MAP with higher order functions you can do this ---

usernames = users.map(getName);
console.log(usernames);