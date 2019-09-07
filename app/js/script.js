


// adopted from https://www.w3schools.com/js/js_timing.asp
var myInterval = 5000;
var mySetInterval = setInterval(printQuote, myInterval);



//getRandomRGB adapted from https://stackoverflow.com/questions/154059/how-to-check-empty-undefined-null-string-in-javascript
function updateColors(){
  var r = Math.floor(Math.random()*256);          // Random between 0-255
  var g = Math.floor(Math.random()*256);          // Random between 0-255
  var b = Math.floor(Math.random()*256);          // Random between 0-255
  var rgb = 'rgb(' + r + ',' + g + ',' + b + ')'; // Collect all to a string

  var myBody = document.querySelector("body");
  var myButton = document.querySelector("#loadQuote");
  myBody.style.backgroundColor = rgb;
  myButton.style.backgroundColor= rgb;
};

/*printQuote
1) properly display the random quote in the DOM
*/
function printQuote() {

    //Step 1. Get the `getRandomQuote` function and assign it to a variable.
    var quote = getRandomQuote();
    
    //Step 2.  Declare for the HTML string and set it equal to an empty string.
    var myHTML = "";
   
    //Step 3. Build HTML 

    if (quote.tag) {  
      myHTML = '<p class="tag">(quote on ' + quote.tag + ')</p>';
    }

    myHTML += '<p class="quote">' + quote.quote + '</p>';
    myHTML += '<p class="source">' + quote.author;

    if (quote.citation) {  
      myHTML += '<span class="citation">' + quote.citation + '</span>';
    }

    if (quote.year) {  
      myHTML += '<span class="year">' + quote.year + '</span>';
    }
      
    myHTML +=  '</p>';
    
    //Step 4. change color 
    updateColors();

    //Step 5. Set the `innerHTML` of the `quote-box` div to the HTML string. 
    document.getElementById("quote-box").innerHTML = myHTML;

    //Step 6. Reset invertval 
    clearInterval(mySetInterval);
    mySetInterval = setInterval(printQuote, myInterval);
};

//generates a random number, then uses that randmon number to get quotes from array of quote objects defined in quotes.js
function getRandomQuote(){
    //Step 1. get random number 
    var quoteIndex =  Math.floor((Math.random() * quotes.length) );
    //Step 2. Use random number to get random quote from array of objects
    //Step 3. return the quote object
    return quotes[quoteIndex];
  };


//create an event listener for the onclick event of the printQuote button;
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
