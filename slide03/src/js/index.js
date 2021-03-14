window.onload=()=>{

   const rightbtn = document.getElementById("right");
   const leftbtn = document.getElementById("left");
   const innerBox = document.getElementsByClassName("boxinner");
   let first = 0;
   let last = innerBox.length - 1;
   let flag = true;
   let secondFlag = true;
   let move = [];
       for(let c=0; c<=innerBox.length-1;c++){
         move.push(0);
      }

      function rightProcessing(){
         // if(secondFlag){
            
            first = first + 1;
            last = last + 1;
            if(first === innerBox.length){
               first = 0;
            };
            if(last === innerBox.length){
               last = 0;
            };
            // first = first + 1;
            // last = last + 1;
            flag = true;
            console.log(first)
            // console.log(last)
         // }
        
      }
      function leftProcessing(){
         // if(secondFlag){
            
            first = first - 1;
            last = last - 1;
            if(first === -1){
               first = innerBox.length-1;
            };
            if(last === -1){
               last = innerBox.length-1;
            };
            // first = first + 1;
            // last = last + 1;
            flag = true;
            console.log(first)
            // console.log(last)
         // }
        
      }
      

      // console.log(flag)
   rightbtn.addEventListener("click",()=>{
      if(flag){
         flag = false;
         for(let i=0; i<=innerBox.length-1;i++){
            // innerBox[i].style.transitionProperty ="xIndex none";
            if(i === first){
               move[i] = move[i]+ (100 *(innerBox.length-1));

               // innerBox[first].style.transition ="";
               innerBox[first].style.zIndex =1;
               // innerBox[first].style.transition ="0.3";
               innerBox[first].style.transform ="translateX(" + move[i] + "%)";
            }else{
               // innerBox[first].style.transition ="none";
               innerBox[i].style.zIndex ="10";
               // innerBox[first].style.transition ="0.3";
               move[i] = move[i]-100;
               // console.log(move[i])
               innerBox[i].style.transform ="translateX(" + move[i] + "%)";
            }
         }
         if(secondFlag){
            secondFlag = false;
            // innerBox[first].addEventListener("transitionend",()=>{
               setTimeout(rightProcessing,500);
               secondFlag = true;
            // });
         }
        
      }
   });

   leftbtn.addEventListener("click",()=>{
      if(flag){
         flag = false;
         for(let i=0; i<=innerBox.length-1;i++){
            // innerBox[i].style.transitionProperty ="xIndex none";
            if(i === last){
               move[i] = move[i] - (100 *(innerBox.length-1));

               // innerBox[first].style.transition ="";
               innerBox[last].style.zIndex =1;
               // innerBox[first].style.transition ="0.3";
               innerBox[last].style.transform ="translateX(" + move[i] + "%)";
            }else{
               // innerBox[first].style.transition ="none";
               innerBox[i].style.zIndex ="10";
               // innerBox[first].style.transition ="0.3";
               move[i] = move[i]+100;
               // console.log(move[i])
               innerBox[i].style.transform ="translateX(" + move[i] + "%)";
            }
         }
         if(secondFlag){
            secondFlag = false;
            // innerBox[first].addEventListener("transitionend",()=>{
               setTimeout(leftProcessing,500);
               secondFlag = true;
            // });
         }
        
      }
   });

   // setInterval(,4000);
   
     

  
}