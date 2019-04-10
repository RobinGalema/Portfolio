var currentPage;

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

          // Load the index page or the last page visited before reloading the page
          getContent(localStorage.getItem("currentPageNumber"));
          // debug
          console.log(currentPage);

          //console.log(data.contentIndex);
          //document.getElementById('content').innerHTML = data.contentIndex;
          //document.getElementById('pageHead').innerHTML = data.indexHead;

      });
    };

    // Function to set the content of the page based on the pageIndex
    // 0 = index / 1 = ptm / 2 = uex / 3 = dev / 4 = sco
    function getContent(pageIndex) {

      fetchJSONFile('content/content.json', function(data) {
        // do something with your data
        if (pageIndex == 0)
        {
          console.log(data.contentIndex);
          document.getElementById('content').innerHTML = data.contentIndex;
          document.getElementById('pageHead').innerHTML = data.indexHead;
          // Store the index of the page which can be loaded after reloading the page
          currentPage = 0;
          localStorage.setItem("currentPageNumber", currentPage)
        }
        else if (pageIndex == 1)
        {
          console.log(data.contentPTM);
          document.getElementById('content').innerHTML = data.contentPTM;
          document.getElementById('pageHead').innerHTML = data.ptmHead;
          // Store the index of the page which can be loaded after reloading the page
          currentPage = 1;
          localStorage.setItem("currentPageNumber", currentPage)
        }
        else if (pageIndex == 2)
        {
          console.log(data.contentUEX);
          document.getElementById('content').innerHTML = data.contentUEX;
          document.getElementById('pageHead').innerHTML = data.uexHead;
          // Store the index of the page which can be loaded after reloading the page
          currentPage = 2;
          localStorage.setItem("currentPageNumber", currentPage)
        }
        else if (pageIndex == 3)
        {
          console.log(data.contentDEV);
          document.getElementById('content').innerHTML = data.contentDEV;
          document.getElementById('pageHead').innerHTML = data.devHead;
          // Store the index of the page which can be loaded after reloading the page
          currentPage = 3;
          localStorage.setItem("currentPageNumber", currentPage);
        }
        else if (pageIndex == 4)
        {
          console.log(data.contentSCO);
          document.getElementById('content').innerHTML = data.contentSCO;
          document.getElementById('pageHead').innerHTML = data.scoHead;
          // Store the index of the page which can be loaded after reloading the page
          currentPage = 4
          localStorage.setItem("currentPageNumber", currentPage)
        }
        else if (pageIndex == 5)
        {
          console.log(data.contentPOCS)
          document.getElementById('content').innerHTML = data.contentPOCS
          document.getElementById('pageHead').innerHTML = data.POCShead;
          // Store the index of the page which can be loaded after reloading the page
          currentPage = 5;
          localStorage.setItem("currentPageNumber", currentPage);
        }
        else // Display page not found (404) if no index matched the input
        {
          console.log('Error 404');
          document.getElementById('content').innerHTML = "<h2> 404 : page not found </h2>";
        }
      });
    };

function loadPOC(id)
    {
      console.log("POC ID: " + id);
      getContent(5);

      window.onload = fetchJSONFile('content/pocs.json', function(POCdata){
        console.table(POCdata.POCS);
        console.log(POCdata.POCS[id].title);

        let title = document.getElementById('title');
        let subtitle = document.getElementById('subtitle');
        let image = document.getElementById('headImage');
        let description = document.getElementById('description');

        title.innerHTML = POCdata.POCS[id].title;
        subtitle.innerHTML = POCdata.POCS[id].subtitle;
        image.src = POCdata.POCS[id].image;
        description.innerHTML = POCdata.POCS[id].description;
      });
    }


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
