 function fetchJSONFile(path, callback) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function() {
          if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
              var data = JSON.parse(httpRequest.responseText);
              if (callback) callback(data);
            }
          }
        };
        httpRequest.open('GET', path);
        httpRequest.send();
      }

      // this requests the file and executes a callback with the parsed result once
      //   it is available
      window.onload = function getData() {
        fetchJSONFile('content/index.json', function(data) {
          // do something with your data
          console.log(data.contentIndex);
          document.getElementById('content').innerHTML = data.contentIndex;
      });
    };

    function getContent(pageIndex) {
      if (pageIndex == 0)
      {
      fetchJSONFile('content/index.json', function(data) {
        // do something with your data
        console.log(data.contentIndex);
        document.getElementById('content').innerHTML = data.contentIndex;
          });
        };
      };


// Fucntion to make the navbar sticky, activated when the users scrolls on the page
window.onscroll = function() {scrollbar()};

// Get the navbar from the html page
var navbar = document.getElementById("navbar");

// Get the location of the top of the navbar
var sticky = navbar.offsetTop;

// Function to add the sticky class to the navbar if the user scrolls down
function scrollbar() {
  // Check the distance between the top of the page and the top of the navbar to check if
  // there was scrolled
  if (window.pageYOffset >= sticky+20) {
    // if the distance is more then 20 pixels, add the sticky class to the navbar
    navbar.classList.add("sticky");
  }
  else {
    // Else remove the sticky class from the navbar
    navbar.classList.remove("sticky");
  }
}