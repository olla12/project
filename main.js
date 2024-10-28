/*fetch("data.json").then((res) => res.json()).then((json) => console.log(json))*/



let searchBox =document.querySelector("input");
let btn=document.querySelector("button");
fetch('data.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });

   function appendData(data) {
    let newDiv=document.createElement("div");
    
    let content=document.querySelector(".content")
         
         
      btn.addEventListener("click",()=>{
        
        content.innerHTML="";   
      
         for(i=0;i<data.length;i++){
            let newDiv=document.createElement("div");
         if(searchBox.value==data[i].name){
            newDiv.innerHTML=
            `<h3><span>product name:</span><span>${data[i].name}<span><h3>
            <h3><span>product price:</span><span>${data[i].price}<span><h3>
            <h3>product image:</h3><img src="images/${data[i].image}"/>`;
           content.appendChild(newDiv);
                     


         }
                     else{let newDiv=document.createElement("div");
                                 newDiv.innerHTML="not found";}
         
      }

      });
   }        

 
 
