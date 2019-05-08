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


    function setContent(index){
      if (index == 0)
      {
        currentPage = 0;
        localStorage.setItem("currentPageNumber", currentPage)
        document.location.href = "uex.html";
      }
      else if (index == 1)
      {
        currentPage = 1;
        localStorage.setItem("currentPageNumber", currentPage)
        document.location.href = "dev.html";
      }
      else if (index == 2)
      {
        currentPage = 2;
        localStorage.setItem("currentPageNumber", currentPage)
        document.location.href = "sco.html";
      }
      else if (index == 3)
      {
        currentPage = 3;
        localStorage.setItem("currentPageNumber", currentPage)
        document.location.href = "ptm.html";
      }
      else if (index == 4)
      {
        currentPage = 4;
        localStorage.setItem("currentPageNumber", currentPage)
        document.location.href = "index.html";
      }
    }
    // Function to set the content of the page based on the pageIndex
    // 0 = index / 1 = ptm / 2 = uex / 3 = dev / 4 = sco
    window.onload = function getContent(pageIndex) {

      fetchJSONFile('content/content.json', function(data) {
        // do something with your data
        if (localStorage.getItem("currentPageNumber") == 0)
        {
          fetchJSONFile('content/opdrachten.json', function(data) {
            console.table(data.vakken[1]);
            for(i=0; i < data.vakken[1].opdrachten.length; i++)
            {
              console.log("hey");
              // Create the container div and give it the correct background image
              console.table(data.vakken[1].opdrachten[i].title);
              var pocContainer = document.createElement('div');
              pocContainer.setAttribute('class', 'poc');
              pocContainer.style.backgroundImage = "url('"+data.vakken[1].opdrachten[i].image+"')";

              // Create the content div and give it the right onclick to go to the poc page
              var pocContent = document.createElement('div');
              pocContent.setAttribute('class', 'pocContent');
              pocContent.setAttribute('onclick', 'loadOpdrachtUex('+i+')');

              // Create and append the title to an h2 element
              var pocH2 = document.createElement('h2');
              var h2Text = document.createTextNode(data.vakken[1].opdrachten[i].title);
              pocH2.appendChild(h2Text);

              // Create and append the subtitle to an p element
              var pocP = document.createElement('p');
              var pText = document.createTextNode(data.vakken[1].opdrachten[i].subtitle);
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
        else if (localStorage.getItem("currentPageNumber") == 1)
        {
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
        else if (localStorage.getItem("currentPageNumber", currentPage) == 2)
        {
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
              pocContent.setAttribute('onclick', 'loadOpdrachtSco('+i+')');

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
        else if (localStorage.getItem("currentPageNumber", currentPage) == 5){
          window.onload = fetchJSONFile('content/pocs.json', function(POCdata){
          id = localStorage.getItem("thisPOC");
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

        // Scroll to the top of the page
        window.scrollTo(0,0)
      });
        }
      else if (localStorage.getItem("currentPageNumber") == 6)
      {
        id = localStorage.getItem("thisPOC");
        console.log("Opdracht ID: " + id);

        fetchJSONFile('content/opdrachten.json', function(data){

          const vak = 2;
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
      }
      else if (localStorage.getItem("currentPageNumber", currentPage) == 7)
      {
        id = localStorage.getItem("thisPOC");
        console.log("Opdracht ID: " + id);

        window.onload = fetchJSONFile('content/opdrachten.json', function(data){

          const vak = 1;
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
      }
      });
    };


// Function to load the content of a poc and display it on the poc page
function loadPOC(id)
    {
      console.log("POC ID: " + id);
      currentPage = 5;
      localStorage.setItem("currentPageNumber", currentPage);
      thispoc = id;
      localStorage.setItem("thisPOC", thispoc);
      document.location.href = "pocs.html";
    }

    function loadOpdrachtSco(id) {
      currentPage = 6;
      localStorage.setItem("currentPageNumber", currentPage);
      thispoc = id;
      localStorage.setItem("thisPOC", thispoc);
      document.location.href = "pocs.html";
    }

    function loadOpdrachtUex(id) {
      currentPage = 7;
      localStorage.setItem("currentPageNumber", currentPage);
      document.location.href = "pocs.html";
      thispoc = id;
      localStorage.setItem("thisPOC", thispoc);
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
