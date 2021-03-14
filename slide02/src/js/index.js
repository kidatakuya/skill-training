window.onload=()=>{

   const item = document.getElementById("box")
   let move = 0;
   // let count = 0
   let animation=function(){
      move = move + 20;
      item.style.transition="0.5s"
      item.style.transform="translateX(-" + move + "%)"
      // count = count + 1;
      if(move>=80){
         move=0
         item.ontransitionend=()=>{
            item.style.transition="none"
            item.style.transform="translateX(-" + move + "%)"
            // item.style.transform="none"
         }
      }
   }

   setInterval(animation, 2000);
  
}