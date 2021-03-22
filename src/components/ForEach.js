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

// forEach - loop through data

// basic for loop
for(let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

// forEach

companies.forEach(function(company) {
  console.log(company);
});

companies.forEach(function(company) {
  console.log(company.name);
});

companies.forEach(function(company) {
  console.log(company.category);
});


