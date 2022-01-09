
var image=document.getElementById('cardsuperhero');

var table=document.getElementById('table');

var superheroname=document.getElementById('cardaccess');

var btn=document.getElementById('click');

var local=JSON.parse(window.localStorage.getItem('favsuper')||'[]');

//Click event to show favlist
btn.addEventListener('click',function(){
    if(local==null){
       local=[];
       alert('List is empty')      
   }
    else{
        btn.style.display="none";
       showHeroes(local);
    }
})

//funtion for showing heroes
function showHeroes(data){
    
    for(let i=0;undefined !==data && i<data.length;i++){

    var card = document.createElement('div');
    
    card.classList.add('card');
    var cardImage = document.createElement('img');
    

    var cardName = document.createElement('h1');
 
     var detailButton = document.createElement('button');
        detailButton.innerHTML=`Click next button<i class="far fa-hand-point-down"></i> to know me.`;

    var favouriteButton=document.createElement('button');
    favouriteButton.innerHTML=`To remove me, click here <i class="far fa-hand-point-right"></i>.`;
    var delButton=document.createElement('button');
        var detailsButton = document.createElement('button');

        detailsButton.innerHTML=`${data[i].name}`;
        
    delButton.innerHTML=`${i}`;
    delButton.style.backgroundColor="black"
    delButton.onclick=function(e){
        e.target.parentNode.parentNode.style.display="none";
        removeImage(e.target.innerText);
    }
    detailsButton.onclick=function(e){
        showDetails(e.target.innerText);
    }
    card.appendChild(cardImage);
    card.appendChild(cardName);
    card.appendChild(detailButton);
    card.appendChild(detailsButton);
    card.appendChild(favouriteButton);
    favouriteButton.appendChild(delButton);
    
    cardImage.src = data[i].image;
    
    cardName.innerHTML = data[i].name;
   
    image.appendChild(card);
    }   
 
}


//funtion to remove any particular fav hero
function removeImage(index){
    local=JSON.parse(window.localStorage.getItem('favsuper')||'[]');
    
   local.splice(index,1);

   localStorage.setItem('favsuper',JSON.stringify(local));
   alert('Removed from favourite list')     
 }

function showDetails(value){
    console.log(value);
    window.open('Details.html?id='+ value, '_self');
}


