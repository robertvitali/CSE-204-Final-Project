
let scienceIndex = 0; //start point
let scienceImages = []; //array of images
let scienceText = []; //array of text

//defining the array of images
scienceImages[0] = "Graphics/science_1.jpg";
scienceImages[1] = "Graphics/science_2.jpg";
scienceImages[2] = "Graphics/science_3.jpg";

//defining the text for the slides
scienceText[0] = "A cover crop is grown for the soil instead of consumption. Cover crops add organic matter to the soil and add nitrogen in a slow-release way that plants can handle. Cover crops can also act as mulches if managed correctly, improve soil physical properties in just one growing season and attract beneficial insects and pollinators to your garden.";
scienceText[1] = "Cover crops are planted by farmers during an offseason of their cash crops. The goal of these cover crops is to capture nitrogen from the air and replenish the soil with nutrients. After a period of time, these cover crops are also used as an additional fertilizer, where they are buried or plowed into the existing soil adding nutrients to the soil. The effects may not be instant however over time higher yields of cash crops will occur.";
scienceText[2] = "Soil replenishment, overlooked by many, will become extremely important in the years to come. Some scientists predict that we may have as few as 60 harvests left before we deplete the soil of all nutrients. Unlike artificial fertilizer, cover crops allow for deep soil penetration where nutrients are less likely to be washed away by erosion. The build-up of these nutrients deeper in the soil will be vital to keeping healthy soil long term.";

//this function is changing the picture and text in view for the science portion of the website
function changeSlide(){
  document.scienceIMG.src = scienceImages[scienceIndex];
  document.getElementById("scienceTEXT").innerHTML = scienceText[scienceIndex];

}

window.onload = changeSlide();

function clickTracker(e) {
  var id = e.getAttribute("id");
  if(id === "leftButtonScience"){
    if(scienceIndex <= 0){
      scienceIndex = 2;
    }else{
      scienceIndex--;
    }
    console.log(scienceIndex);
    changeSlide();
  }else if(id === "rightButtonScience"){
    if(scienceIndex < scienceImages.length - 1){
      scienceIndex++;
    }else{
      scienceIndex = 0;
    }
    changeSlide();
  }
  console.log(`ID:${id}`);
}

//this below was taken from stack overflow in order to find what element is being clicked
document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
        clickTracker(target);
}, false);

//this function returns a number with appropriate commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//this function is handling the math for the calculator
function calculateEcon(value){
  if (value.length > 10) {
        value = value.slice(0,10);
        document.getElementById("inputField").value = value;
    }
  var pounds = Math.round((value/3) *10)/10; //this is the number of pounds of crimson clover ~ $3/lb
  var acres = Math.round((pounds/20)*10)/10;
  var dryMatterLower = numberWithCommas(Math.round((3500 * acres)*10)/10);
  var dryMatterUpper = numberWithCommas(Math.round((5500 * acres)*10)/10);
  var nitrogenLower = numberWithCommas(Math.round((70 * acres)*10)/10);
  var nitrogenUpper = numberWithCommas(Math.round((150 * acres)*10)/10);
  var text1 = `With ${numberWithCommas(value)} dollars, you can buy approximately ${numberWithCommas(pounds)} pounds of crimson clover <br> <br>`;
  var text2 = `This allows you to plant approximately ${numberWithCommas(acres)} acres of crimson clover clover <br> <br>`;
  var text3 = `Over time, the crimson clover planted will produce between ${dryMatterLower} and ${dryMatterUpper} lbs of dry matter <br> <br>`;
  var text4 = `More importantly, the crimson clover that was planted will produce around ${nitrogenLower} to ${nitrogenUpper} lbs of fixed nitrogen in the soil`;
  var concat = text1 + text2 + text3 + text4;
  document.getElementById("econOutput").innerHTML = concat;
}


function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

var json_obj = JSON.parse(Get('https://dog.ceo/api/breeds/image/random'));
document.getElementById("dogeMedia").setAttribute("src", json_obj.message);
console.log(json_obj.message);
