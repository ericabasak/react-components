// practice javascript higher order array methods

const companies = [
  { name: "Company One", category: "Finance", start: 1982, end: 1990 },
  { name: "Company Two", category: "Business", start: 1995, end: 1999 },
  { name: "Company Three", category: "Hospitality", start: 1966, end: 1976 },
  { name: "Company Four", category: "Food", start: 1999, end: 2019 },
  { name: "Company Five", category: "Auto", start: 1984, end: 2016 },
  { name: "Company Six", category: "Tech", start: 1987, end: 2004 },
  { name: "Company Seven", category: "Security", start: 1973, end: 2000 },
  { name: "Company Eight", category: "Government", start: 1991, end: 1998 },
  { name: "Company Nine", category: "Fashion", start: 1980, end: 2009 },
  { name: "Company Ten", category: "Auto", start: 1989, end: 2004 }
];

const ages = [33, 55, 1, 854, 8, 41, 7, 19, 33, 62];

// reduce

// reduce with for loop
// let ageSum = 0;

// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }
// console.log(ageSum);



// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

// console.log(ageSum);



// use of reduce with arrow functions
// const ageSum2 = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum2);


// get total years for all companies
// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);
// console.log(totalYears);

// reduce with arrow function
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);