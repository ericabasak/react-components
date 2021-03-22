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

// sort companies by start year

// const sortedCompanies = companies.sort(function(c1, c2) {
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// })
// console.log(sortedCompanies);


// same as above but only one line of code
// const sortedCompanies1 = companies.sort((a,b) => a.start > b.start ? 1 : -1);
// console.log(sortedCompanies1);

// sort lowest to highest for ages array
const sortedAges = ages.sort();
console.log(sortedAges);

// ascending order
const sortAge = ages.sort((a,b) => a - b);
console.log(sortAge);

// descending order
const sortAge1 = ages.sort((a,b) => b - a);
console.log(sortAge1);