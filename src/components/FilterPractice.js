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

// filter - filter things out from an array
// get 21 and older

// get all the ages that are 21 and older

// const olderAge = [];
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21) {
//     olderAge.push(ages[i]);
//   }
// }
// console.log(olderAge);

// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// })
// console.log(canDrink);

// filter with only one line of code :)
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// filter through the retail companies
// const retailCompanies = companies.filter(function(company) {
//   if(company.category === 'Retail') {
//     return true;
//   }
// })
// console.log(retailCompanies);

// filter with only one line of code :) 
// const retailCompanies = companies.filter(company => company.category === "Auto");
// console.log(retailCompanies);

// get 80s companies

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
// console.log(eightiesCompanies);

// get 90s companies

// const ninetiesCompanies = companies.filter(company => (company.start >= 1990 && company.start < 2000));
// console.log(ninetiesCompanies);

// get 70s companies

// const seventiesCompany = companies.filter(company => (company.start >= 1970 && company.start < 1980));
// console.log(seventiesCompany);

// companies that last 10 years

const solidCompanies = companies.filter(company => (company.end - company.start >= 10));
console.log(solidCompanies);

// companies that lasted longer than 20 years

const solidCompanies1 = companies.filter(company => (company.end - company.start >= 20));
console.log(solidCompanies1);

// companies that lasted greater than 30 years

const solidCompanies3 = companies.filter(company => (company.end - company.start >= 30));
console.log(solidCompanies3);