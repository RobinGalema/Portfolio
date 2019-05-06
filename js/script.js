let currentPage;
let currentPoc;

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
          if (localStorage.getItem("currentPageNumber") == null){
            getContent(0);
          }
          else
          {
          getContent(localStorage.getItem("currentPageNumber")); }

          // debug
          console.log("Current Page: " + currentPage);

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
          // Scroll to the top of the page
          window.scrollTo(0,0)
          // Store the index of the page which can be loaded after reloading the page
          currentPage = 1;
          localStorage.setItem("currentPageNumber", currentPage)
        }
        else if (pageIndex == 2)
        {
          console.log(data.contentUEX);
          document.getElementById('content').innerHTML = data.contentUEX;
          document.getElementById('pageHead').innerHTML = data.uexHead;
          // Scroll to the top of the page
          window.scrollTo(0,0)
          // Store the index of the page which can be loaded after reloading the page
          currentPage = 2;
          localStorage.setItem("currentPageNumber", currentPage)
        }
        else if (pageIndex == 3)
        {
          console.log(data.contentDEV);
          document.getElementById('content').innerHTML = data.contentDEV;
          document.getElementById('pageHead').innerHTML = data.devHead;
          // Scroll to the top of the page
          window.scrollTo(0,0);
          // Store the index of the page which can be loaded after reloading the page
          currentPage = 3;
          localStorage.setItem("currentPageNumber", currentPage);

          // Create thumbnails for all pocs in the json file
          fetchJSONFile('content/pocs.json', function(poc) {
            console.table(poc.POCS);
            for(i=0; i < poc.POCS.length; i++)
            {
              // Create the container div and give it the correct background image
              console.table(poc.POCS[i].title);
              var pocContainer = document.createElement('div');
              pocContainer.setAttribute('class', 'poc');
              pocContainer.style.backgroundImage = "url('"+poc.POCS[i].image+"')";

              // Create the content div and give it the right onclick to go to the poc page
              var pocContent = document.createElement('div');
              pocContent.setAttribute('class', 'pocContent');
              pocContent.setAttribute('onclick', 'loadPOC('+i+')');

              // Create and append the title to an h2 element
              var pocH2 = document.createElement('h2');
              var h2Text = document.createTextNode(poc.POCS[i].title);
              pocH2.appendChild(h2Text);

              // Create and append the subtitle to an p element
              var pocP = document.createElement('p');
              var pText = document.createTextNode(poc.POCS[i].subtitle);
              pocP.appendChild(pText);

              // Append all the content for the thumbnail to the container
              pocContent.appendChild(pocH2);
              pocContent.appendChild(pocP);
              pocContainer.appendChild(pocContent);

              // Append the container with thumbnail to the page
              document.getElementById("poccontainer").appendChild(pocContainer);

            }
          });

        }
        else if (pageIndex == 4)
        {
          console.log(data.contentSCO);
          document.getElementById('content').innerHTML = data.contentSCO;
          document.getElementById('pageHead').innerHTML = data.scoHead;
          // Scroll to the top of the page
          window.scrollTo(0,0)
          // Store the index of the page which can be loaded after reloading the page
          currentPage = 4
          localStorage.setItem("currentPageNumber", currentPage)

          fetchJSONFile('content/opdrachten.json', function(data) {
            console.table(data.vakken[2]);
            for(i=0; i < data.vakken[2].opdrachten.length; i++)
            {
              console.log("hey");
              // Create the container div and give it the correct background image
              console.table(data.vakken[2].opdrachten[i].title);
              var pocContainer = document.createElement('div');
              pocContainer.setAttribute('class', 'poc');
              pocContainer.style.backgroundImage = "url('"+data.vakken[2].opdrachten[i].image+"')";

              // Create the content div and give it the right onclick to go to the poc page
              var pocContent = document.createElement('div');
              pocContent.setAttribute('class', 'pocContent');
              pocContent.setAttribute('onclick', 'loadOpdracht('+i+')');

              // Create and append the title to an h2 element
              var pocH2 = document.createElement('h2');
              var h2Text = document.createTextNode(data.vakken[2].opdrachten[i].title);
              pocH2.appendChild(h2Text);

              // Create and append the subtitle to an p element
              var pocP = document.createElement('p');
              var pText = document.createTextNode(data.vakken[2].opdrachten[i].subtitle);
              pocP.appendChild(pText);

              // Append all the content for the thumbnail to the container
              pocContent.appendChild(pocH2);
              pocContent.appendChild(pocP);
              pocContainer.appendChild(pocContent);

              // Append the container with thumbnail to the page
              document.getElementById("opdrachtenContainer").appendChild(pocContainer);

            }
          });
        }
        else if (pageIndex == 5)
        {
          console.log(data.contentPOCS)
          document.getElementById('content').innerHTML = data.contentPOCS
          document.getElementById('pageHead').innerHTML = data.POCShead;
          // Scroll to the top of the page
          window.scrollTo(0,0)
          // Store the index of the page which can be loaded after reloading the page
        }
        else // Display page not found (404) if no index matched the input
        {
          console.log('Error 404');
          document.getElementById('content').innerHTML = "<h2> 404 : page not found </h2>";
        }
      });
    };


// Function to load the content of a poc and display it on the poc page
function loadPOC(id)
    {
      console.log("POC ID: " + id);
      getContent(5);

      window.onload = fetchJSONFile('content/pocs.json', function(POCdata){
        console.table(POCdata.POCS);
        console.log(POCdata.POCS[id].title);

        const title = document.getElementById('title');
        const subtitle = document.getElementById('subtitle');
        const image = document.getElementById('headImage');
        const description = document.getElementById('description');

        title.innerHTML = POCdata.POCS[id].title;
        subtitle.innerHTML = POCdata.POCS[id].subtitle;
        image.src = POCdata.POCS[id].image;
        description.innerHTML = POCdata.POCS[id].description;
      });

      // Scroll to the top of the page
      window.scrollTo(0,0)
    }

    function loadOpdracht(id)
        {
          console.log("Opdracht ID: " + id);
          getContent(5);

          window.onload = fetchJSONFile('content/opdrachten.json', function(data){
            var page = localStorage.getItem("currentPageNumber");
            let vak;
            if (page == 1)
            {
              vak = 0;
            }
            else if (page == 2)
            {
              vak = 1;
            }
            else if(page == 4)
            {
              vak = 2;
            }

            console.table(data.vakken[vak].opdrachten);
            console.log(data.vakken[vak].opdrachten[id].title);

            const title = document.getElementById('title');
            const subtitle = document.getElementById('subtitle');
            const image = document.getElementById('headImage');
            const description = document.getElementById('description');

            title.innerHTML = data.vakken[vak].opdrachten[id].title;
            subtitle.innerHTML = data.vakken[vak].opdrachten[id].subtitle;
            image.src = data.vakken[vak].opdrachten[id].image;
            description.innerHTML = data.vakken[vak].opdrachten[id].description;
          });

          // Scroll to the top of the page
          window.scrollTo(0,0)
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
