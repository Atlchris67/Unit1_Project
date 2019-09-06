var searchRequest = null;
var myHtmlString = '';
var searchresultCount = 0;


function writestuff(myHTML) {
  document.getElementById("output").innerHTML = myHTML;
}

writestuff('<h1>Students</h1>');
while (true) {

  searchRequest = prompt('Enter a student name to search for');

  if (searchRequest === null || searchRequest.toLowerCase() === 'quit') {
    break;
  } else {


    searchresultCount = 0;
    myString = '';
    for (i = 0; i < students.length; i++) {

      if (students[i].name.toLowerCase() === searchRequest.toLowerCase()) {
        myString = '<h2>Student: ' + students[i].name + '</h2>';
        myString += '<ul><li>Track: ' + students[i].track + '</li>';
        myString += '<li>Achievements: ' + students[i].achievements + '</li>';
        myString += '<li>Points: ' + students[i].points + '</li></ul>';
        searchresultCount++;
        myHtmlString += myString;
      }

    }
    if (searchresultCount === 0) {
      myHtmlString += '<h2>No students found with the name = ' + searchRequest + '</h2>';
    }

  }
}

writestuff(myHtmlString);