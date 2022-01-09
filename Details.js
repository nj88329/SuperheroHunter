//accessing the params from the opened window page
var buttonText=document.getElementById('id');
let urlString=window.location.href;
let paramString = urlString.split('?')[1];
let queryString = new URLSearchParams(paramString);
var val=queryString.get('id');

//accessing the different HTML elements
var card=document.getElementById('card-img');
var details=document.getElementById('card-header');
var detail=document.getElementById('card-headers2');
var spin = document.getElementsByClassName('spin')[0];
var det=document.getElementById('det');
var det1=document.getElementById('det1');
var det2=document.getElementById('det2');
var cardheader1 = document.getElementById('card-header1');
var cardbody1 = document.getElementById('card-body1');
var cardtex1 = document.getElementById('card-text1');
var cardtex11 = document.getElementById('card-text11');
var cardtex12 = document.getElementById('card-text12');
var cardtex13 = document.getElementById('card-text13');
var cardheader2 = document.getElementById('card-header2');
var cardbody2 = document.getElementById('card-body2');
var cardtex2 = document.getElementById('card-text2');
var cardtex21 = document.getElementById('card-text21');
var cardtex22 = document.getElementById('card-text22');
var cardtex23 = document.getElementById('card-text23');
var cardheader3 = document.getElementById('card-headers3');
var cardbody3 = document.getElementById('card-body3');
var cardtex3 = document.getElementById('card-text3');
var cardtex31 = document.getElementById('card-text31');
var cardtex32 = document.getElementById('card-text32');
var cardtex33 = document.getElementById('card-text33');
var cardtex34 = document.getElementById('card-text34');

card.style.display="none";
spin.style.display="block";
det.style.display="none";
det1.style.display="none";
det2.style.display="none";

buttonText.innerHTML=`${val}`;


var url=`https://www.superheroapi.com/api.php/2101410510009367/search/${val}`;
buttonText.style.display="none"


//this function will be called itself when we ge to the page without any event listeners
    showDetails();


    // function to show the datails of the clicked superhero in favourite page
async function showDetails(){
    let response = await fetch(url);
    //fetching the data of the clicked superhero
    try{

        //access html elements of the details page and show the details in three diffeernt cards
        var data=await response.json();
        console.log(data); 
        card.src=data.results[0].image.url;
        spin.style.display="none";
        card.style.display="block";
        det.style.display="block";
        det1.style.display="block";
        det2.style.display="block";
        details.innerHTML=data.results[0].name;
        detail.innerHTML=data.results[0].name;
        cardheader1.innerHTML=`Eye-Color : ${data.results[0].appearance['eye-color']}`;        
        cardtex1.innerHTML=`Gender : ${data.results[0].appearance.gender}`;
        cardtex11.innerHTML=`Hair-color : ${data.results[0].appearance['hair-color']}`
        cardtex12.innerHTML=`Weight : ${data.results[0].appearance.weight[1]}`
        cardtex13.innerHTML=`Weight : ${data.results[0].appearance.height[0]}`
        cardheader2.innerHTML=`Full-Name : ${data.results[0].biography['full-name']}`;        
        cardtex2.innerHTML=`Birth-Place : ${data.results[0].biography['place-of-birth']}`;
        cardtex21.innerHTML=`Publisher : ${data.results[0].biography.publisher}`
        cardtex22.innerHTML=`Alter-Egos : ${data.results[0].biography['alter-egos']}`
        cardheader3.innerHTML=`Work : ${data.results[0].work.occupation}`;       
        cardtex23.innerHTML=`First-Appearnace : ${data.results[0].biography['first-appearance']}`       
        cardtex3.innerHTML=`Combat : ${data.results[0].powerstats.combat}`;
        cardtex31.innerHTML=`Durablity : ${data.results[0].powerstats.durability}`
        cardtex32.innerHTML=`Intelligence : ${data.results[0].powerstats.intelligence}`
        cardtex33.innerHTML=`Speed : ${data.results[0].powerstats.speed}`
        cardtex34.innerHTML=`Power : ${data.results[0].powerstats.power}`
        return data;
    }
    catch(error){
        console.log(error);
    }
}