


 //Ukrywanie tekstuw BOXach
document.addEventListener("DOMContentLoaded", function(){
    var boxContainers = document.querySelectorAll(".box-container > div"); 
    
    for(var i=0; i<boxContainers.length -1; i++) {
    	boxContainers[i].addEventListener("mouseover", function(event) {
    		var selector = "." + this.className + " > div"; 
    		var div = document.querySelector(selector);
    		div.style.display = "none";
    	});
    	boxContainers[i].addEventListener("mouseout", function(event) {
    		var selector = "." + this.className + " > div"; 
    		var div = document.querySelector(selector);
    		div.style.display = "block";
    	});

    }
 //Slider
    var nextPicture = document.querySelector(".next-Slider");
    var prevPicture = document.querySelector(".previous-Slider");
    var listElements = document.querySelectorAll(".slider li");
    var imgIndex = 0;
    
    listElements[imgIndex].classList.add("visible");
    
    nextPicture.addEventListener("click", function(event) {
        if (imgIndex < listElements.length -1) {
            listElements[imgIndex].classList.remove("visible");
            imgIndex = imgIndex + 1;
            listElements[imgIndex].classList.add("visible");
        }

    });
    prevPicture.addEventListener("click", function(event) {
        listElements[imgIndex].classList.remove("visible");
        imgIndex = imgIndex - 1;
        if (imgIndex < 0) {
            imgIndex = 0;    
        }
        listElements[imgIndex].classList.add("visible");
    });

//Order-summary
    // var order = document.getElementById("select-type");
    // var orderValue = order.options[order.selectedIndex].value;
    // switch(orderValue) {
    //     case "0": 
    //         document.querySelector(".chair-price").innerText ="200"; 
    //         console.log ("dziala");
    //         break;   
    //     case "1": 
    //         document.querySelector(".chair-price").innerText ="300"; 
    //         console.log ("dziala teraz");
    //         break; 

    //         default: 
    //         console.log ("dziala - 2");
    // };


    document.getElementById("select-type").onchange=function() { 
        switchType(this); 
    }  
    var overalPrice = 0;
    var chairSummary = document.querySelector(".chair-summary")
    var chairName = document.querySelector(".chair-name")
    var chairSummary = document.querySelector(".chair-summary")
    function switchType(typeSelected) { 
        var ind = typeSelected.selectedIndex; 
        var chairPrice = document.querySelector(".chair-price"); 
        switch (ind) { 
            case 1: // car purchase 
            chairPrice.innerText = "100"; 
            overalPrice = 100;
            chairSummary.innerText = overalPrice;
            chairName.innerText = "Chair Clair";
            break; 
            case 2: // other purchase 
            chairPrice.innerText = "200";
            overalPrice = 200;  
            chairSummary.innerText = overalPrice;
            chairName.innerText = "Chair Margarita";
            break; 
            case 3: // other purchase 
            chairPrice.innerText = "300";
            overalPrice = 300; 
            chairSummary.innerText = overalPrice;
            chairName.innerText = "Chair Selena";
            break; 
            default: 
            chairPrice.innerText = "";
            break; 
        } 
    } 

    document.getElementById("select-material").onchange=function() { 
        switchMaterial(this); 
    }  
    function switchMaterial(materialSelected) { 
        var chairMaterial = document.querySelector(".chair-material")
        var ind = materialSelected.selectedIndex; 
        var chairMaterialPrice = document.querySelector(".chair-material-price"); 
        switch (ind) { 
            case 1: // car purchase 
            chairMaterialPrice.innerText = "0"; 
            overalPrice = overalPrice;
            chairSummary.innerText = overalPrice;
            chairMaterial.innerText = "tkanina";
            break; 
            case 2: // other purchase 
            chairMaterialPrice.innerText = "50"; 
            overalPrice = overalPrice + 50;
            chairSummary.innerText = overalPrice;
            chairMaterial.innerText = "skóra";
            break; 
            default: 
            chairMaterialPrice.innerText = ''; 
            break; 
        } 
    } 
    var chairTransport = document.querySelector(".chair-transport")
    var chairTransportPrice = document.querySelector(".chair-transport-price")

    // assign function to onclick property of checkbox
    document.getElementById("transport-checkbox").onclick = function() {
    // access properties using this keyword
        if ( this.checked ) {
            chairTransport.innerText = "transport";
            chairTransportPrice.innerText = "80";
            overalPrice = overalPrice + 80;
            chairSummary.innerText = overalPrice;
        } 
        else {
            chairTransport.innerText = "";
            chairTransportPrice.innerText = "";
        }
    };





    // if(document.getElementById('transport-checkbox').checked) {
    //     chairTransport.innerText = "transport";
    //     chairTransportPrice.innerText = "80";
    //     overalPrice = overalPrice + 80;
    // } 
    // else {
    //     chairTransport.innerText = "";
    //     chairTransportPrice.innerText = "";
    //     overalPrice = overalPrice;
    // }

});

    











        // b.addEventListener("click", function(event) {  //dodajemy eventListener na zdarzenie click
        // var selector = "#" + this.id + " + p span";   // szukamy najblizszego sasiada i w jego środku span  "this.id" = id aktualnego elementu, + daje nam sąsiada
        // var p = document.querySelector(selector);     //wyciagamy element
        // //console.log(p);
        // var actualCounter = parseInt(p.innerText);    //parsujemy string z tekstu 
        // //console.log(actualCounter);
        // p.innerText = actualCounter + 1;              // zamieniamy tekst wewnętrzy w spanie
        // });