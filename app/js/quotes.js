
//enum for quote tags

const tags = {
  SPORTS:'sports',
  BUSINESS:'buisness',
  HUMER:'humor',
  LIFE:'life'
};


//array of quotes
var quotes = [];

//quotes adapted from https://gist.github.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/
quotes = [
{
  quote: 'Strive not to be a success, but rather to be of value.',
  source: 'Albert Einstein',
  citation: '',
  year: '',
  tag:tags.BUSINESS
},
{
  quote: 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
  source: 'Robert Frost',
  citation: 'The Road Not Taken',
  year: '1916',
  tag:tags.LIFE
  
},
{
  quote: 'I attribute my success to this: I never gave or took any excuse.',
  source: 'Florence Nightingale',
  citation: '',
  year: '',
  tag:tags.LIFE
},
{
  quote: 'You miss 100% of the shots you don\’t take.',
  source: 'Wayne Gretzky',
  citation: 'Hockey News',
  year: 'January 16, 1983',
  tag:tags.SPORTS
},
{
  quote: 'I\’ve missed more than 9000 shots in my career. I\’ve lost almost 300 games. 26 times I\’ve been trusted to take the game winning shot and missed. I\’ve failed over and over and over again in my life. And that is why I succeed.',
  source: 'Michael Jordan',
  citation: 'Nike Culture : The Sign of the Swoosh p. 49',
  year: '1998',
  tag:tags.SPORTS
},
{
  quote: 'The only way to do great work is to love what you do.',
  source: 'Steve Jobs',
  citation: '',
  year: '',
  tag:tags.BUSINESS
}
];

console.log(quotes);