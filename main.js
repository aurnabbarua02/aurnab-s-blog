function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", "main.xml", true);
    xmlhttp.send();
  }
  
  function myFunction(xml) {
    var i, xmlDoc, txt, title_temp, description, image;
    xmlDoc = xml.responseXML;
    txt = "";    
    title_temp = xmlDoc.getElementsByTagName("title");
    description = xmlDoc.getElementsByTagName("description");
    image = xmlDoc.getElementsByTagName("image");
    for (i = 0; i< title_temp.length; i++) {
      txt += '<div class="border border-primary border-2 rounded mt-2 "><p class="fs-2 text-center fw-bold">' + title_temp[i].childNodes[0].nodeValue + '</p> <br>'
       + '<div class="row"><div class="col col-12 col-lg-6 col-sm-12"><img src="Image/'+ image[i].childNodes[0].nodeValue+ '" class="img-fluid rounded"></div>' + 
       '<div class="col col-12 col-lg-6 col-sm-12"><p class="fs-3" >' + description[i].childNodes[0].nodeValue + '</p></div></div><br></div>';
    }
    document.getElementById("main_part").innerHTML = txt;
  
  }
  loadXMLDoc();
