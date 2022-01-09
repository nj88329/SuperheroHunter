var url="https://www.superheroapi.com/api.php/2101410510009367/";


//accessing the elements from the html
var card=document.getElementsByClassName('card1')[0];
var cards=document.getElementById('name');
var inputBox=document.getElementById('formGroupExampleInput');
var cardouter=document.getElementById('cardp');
var combat=document.getElementById('combat');
var durability=document.getElementById('durability');
var intelligence=document.getElementById('intelligence');
var power=document.getElementById('power');
var speed=document.getElementById('speed');
var strength=document.getElementById('strength');
var table=document.getElementById('table');
var heart=document.getElementById('dil');
var hair=document.getElementById('hair-color');
var height=document.getElementById('height');
var gender=document.getElementById('gender');
var race=document.getElementById('race');
var eye=document.getElementById('eye-color');
var values=[]
let count=-1;





document.getElementById('added').style.display="none"

cardouter.style.display="none";
card.style.display="none";

//input value in the search box to search for the superhero
inputBox.addEventListener('keypress', handleKeyPress);

    function handleKeyPress(e) {
        if (e.keyCode === 13){
             return fetchData();
        }
    }
   
//click on the red heart to add the hero to the fav list
heart.style.display="block"

async function fetchData(){
        const inputValue = inputBox.value;

        if (inputValue.trim().length === 0 ) {
          //displaying alert if only space or nothing is entered
          return alert('Please enter valid name');
        }

        //fetch the data from the given url
    let response = await fetch(`${url}search/${inputValue}`);

try{
var data=await response.json();
console.log(data);
console.log(data.results.length)


//map over the first element and show details 
data.results.map((item)=>{
    cardouter.style.display="block";
    card.style.display="block";
    table.style.display="block";
  card.src=data.results[0].image.url;
  cards.innerHTML=data.results[0].name;
  

combat.innerHTML=`Combat : ${item.powerstats.combat}`;
strength.innerHTML=`Strength : ${item.powerstats.strength}`;
intelligence.innerHTML=`Intelligence : ${item.powerstats.intelligence}`;
durability.innerHTML=`Durability : ${item.powerstats.durability}`;
power.innerHTML=`Power : ${item.powerstats.power}`;
speed.innerHTML=`Speed : ${item.powerstats.speed}`;
gender.innerHTML=`Gender : ${item.appearance.gender}`;
race.innerHTML=`Race : ${item.appearance.race}`;
document.getElementById('eye-color').innerHTML=`Eye Color : ${item.appearance['eye-color']}`
document.getElementById('weight').innerHTML = `Weight : ${item.appearance.weight[1]}`
document.getElementById('height').innerHTML = `Height : ${item.appearance.height[1]}`
document.getElementById('hair-color').innerHTML=`Hair Color : ${item.appearance['hair-color']}`
var id=data.results[0].id;
if(id!=-1){
    heart.addEventListener('click',function(){
    storeData(data);
    });
}
})
return data;
}

catch(err){
  //show the alert if data is missing or no match found.
    console.log(err); 
  
 }

}


//function to store the data of the favourite hero in local storage
   function storeData(data){
       var flag=false;
       store=data.results[0];
      var obj={
        name:store.name,
        image:store.image.url,
        id:store.id
      }
      values = JSON.parse(localStorage.getItem('favsuper')); 
      if(values === null){
          values=[];
      }
      values.forEach((hero)=>{
        if(obj.id == hero.id){
            flag=true;
            return;
        }
      })
    
     if(flag == false){
      values.push(obj);
         window.localStorage.setItem('favsuper',JSON.stringify(values));
         alert('Added to your favourite list');
         console.log('yes')
        //  heart.style.display="none";
         document.getElementById('added').style.display="block";
         return;
      }
      else{
       console.log( 'false')
       
      } 
    }

    