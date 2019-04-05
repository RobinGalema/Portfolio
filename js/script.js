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
      // it is available
      // When the page is loaded, load the index page as the defautt
      window.onload = function getData() {
        fetchJSONFile('content/content.json', function(data) {
          // do something with your data
          console.log(data.contentIndex);
          document.getElementById('content').innerHTML = data.contentIndex;
          document.getElementById('pageHead').innerHTML = data.indexHead;
      });
    };

    // Function to set the content of the page based on the ID of the pageIndex
    // 0 = index / 1 = ptm / 2 = uex / 3 = dev / 4 = sco
    function getContent(pageIndex) {

      fetchJSONFile('content/content.json', function(data) {
        // do something with your data
        if (pageIndex == 0)
        {
          console.log(data.contentIndex);
          document.getElementById('content').innerHTML = data.contentIndex;
          document.getElementById('pageHead').innerHTML = data.indexHead;
        }
        else if (pageIndex == 1)
        {
          console.log(data.contentPTM);
          document.getElementById('content').innerHTML = data.contentPTM;
          document.getElementById('pageHead').innerHTML = data.ptmHead;
        }
        else if (pageIndex == 2)
        {
          console.log(data.contentUEX);
          document.getElementById('content').innerHTML = data.contentUEX;
          document.getElementById('pageHead').innerHTML = data.uexHead;
        }
        else if (pageIndex == 3)
        {
          console.log(data.contentDEV);
          document.getElementById('content').innerHTML = data.contentDEV;
          document.getElementById('pageHead').innerHTML = data.devHead;
        }
        else if (pageIndex == 4)
        {
          console.log(data.contentSCO);
          document.getElementById('content').innerHTML = data.contentSCO;
          document.getElementById('pageHead').innerHTML = data.scoHead;
        }
        else // Display page not found (404) if no index matched the input
        {
          console.log('Error 404');
          document.getElementById('content').innerHTML = "<h2> 404 : page not found </h2>";
        }
      });
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
