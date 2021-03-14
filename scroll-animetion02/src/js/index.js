window.onload=()=>{

  let box=document.getElementById("box");
  let boxh = box.clientHeight;
  let c=[]

//   console.log(boxh)
   for(let i=1;i<=20;i++){
      let div=document.createElement("div");
      div.classList.add("innerbox");
      box.appendChild(div);
      // div.className("innerbox");
   }
   let inner=document.getElementsByClassName("innerbox");
   // console.log(inner.length)
   for(let k=0;k<=inner.length-1;k++){
      let  clientRect = inner[k].getBoundingClientRect();
      let y = clientRect.top;
      c.push(y)
      // console.log(c[k])

   }

   box.onscroll=function(){
      for(let j=0;j<=c.length-1;j++){
         // console.log(box.scrollTop);
         // console.log(c[j]);
         // console.log(box.scrollTop)
         if(c[j]>=box.scrollTop && c[j]-boxh<=box.scrollTop){
            // console.log(c[0]+boxh);
            // e.pageYOffset
            inner[j].style.opacity="1";
            inner[j].style.transform="scale(1)"
            // console.log(box.scrollBttom);
         }else{
            inner[j].style.opacity="0";
            inner[j].style.transform="scale(0.6)"
         }
         // if(c[j]<=box.scrollTop+boxh){
         //    inner[j].style.opacity="1";
         //    inner[j].style.transform="scale(1)"
         // }else{
         //    inner[j].style.opacity="0";
         //    inner[j].style.transform="scale(0)"
         // }
         
      }
      // console.log(box.scrollTop-boxh);
   }
  

}