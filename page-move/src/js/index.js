window.onload=()=>{

   const box = document.getElementById("box");
   const btn = document.getElementsByClassName("btn");
   const top = document.getElementsByClassName("top");
   const topLeft = document.getElementsByClassName("top_left");
   const left = document.getElementsByClassName("left");
   const leftBottom = document.getElementsByClassName("left_bottom");
   const bottom = document.getElementsByClassName("bottom");
   const rightBottom = document.getElementsByClassName("right_bottom");
   const right = document.getElementsByClassName("right");
   const topRight = document.getElementsByClassName("top_right");
   const center = document.getElementsByClassName("center");
   const innerbox = document.getElementsByClassName("innerbox");
   const navbox = document.getElementsByClassName("navbox");
   const nav = document.getElementsByClassName("nav");
   let boxW = [
      0,-100,-200,0,-100,-200,0,-100,-200
   ];
   let boxH = [
      0,0,0,-100,-100,-100,-200,-200,-200
   ];
   let w = -100;
   let h = -100;

   // let div = document.createElement("div");
   // div.className="wall";
   // let i = 0;

   for(let i=0;i<=top.length-1;i++){
      top[i].onclick=()=>{
         h = h + 100;
         box.style.transform=" translate(" + w + "vw," + h + "vh)";
         console.log(w);
         console.log(h);
      }
   }
   for(let a=0;a<=topLeft.length-1;a++){
      topLeft[a].onclick=()=>{
         w = w + 100;
         h = h + 100;
         box.style.transform=" translate(" + w + "vw," + h + "vh)";
         console.log(w);
         console.log(h);

      }
   }
   for(let c=0;c<=left.length-1;c++){
      left[c].onclick=()=>{
         w = w + 100;
         // h = h + 100;
         box.style.transform=" translate(" + w + "vw," + h + "vh)";
         console.log(w);
         console.log(h);
         
      }
   }
   for(let d=0;d<=leftBottom.length-1;d++){
      leftBottom[d].onclick=()=>{
         w = w + 100;
         h = h - 100;
         box.style.transform=" translate(" + w + "vw," + h + "vh)";
         console.log(w);
         console.log(h);
         
      }
   }
   for(let r=0;r<=bottom.length-1;r++){
      bottom[r].onclick=()=>{
         // w = w + 100;
         h = h - 100;
         box.style.transform=" translate(" + w + "vw," + h + "vh)";
         console.log(w);
         console.log(h);
      }
   }
   for(let g=0;g<=rightBottom.length-1;g++){
      rightBottom[g].onclick=()=>{
         w = w - 100;
         h = h - 100;
         box.style.transform=" translate(" + w + "vw," + h + "vh)";
         console.log(w);
         console.log(h);
      }
   }
   for(let k=0;k<=right.length-1;k++){
      right[k].onclick=()=>{
         w = w-100;
         // h = h + 100;
         box.style.transform=" translate(" + w + "vw," + h + "vh)";
         console.log(w);
         console.log(h);
      }
   }
   for(let p=0;p<=topRight.length-1;p++){
      topRight[p].onclick=()=>{
         w = w - 100;
         h = h + 100;
         box.style.transform=" translate(" + w + "vw," + h + "vh)";
         console.log(w);
         console.log(h);
      }
   }
   

   let count = 0;
// Click=(count, n)=>{
//    switch(count){
//       case 0:
//          w = boxW[t];
//          h = boxH[t];
//          console.log(w)
//          box.style.transform=" scale3d(1,1,1) rotateY(0deg) translate(" + w + "vw," + h + "vh)"
//          navbox[0].classList.remove("animation");
//          // count=0;
//          console.log(count);
//       break;
//       case 1:
//          w = -100;
//          h = -100;
//          box.style.transform=" translate(" + w + "vw," + h + "vh) scale3d(0.2,0.2,0.5) rotateY(40deg)";
//          navbox[0].classList.add("animation");

//          // count=1; 
//       break;

//    }
// }


// function startTimer(){
   // testTimer=

   for(let u=0;u<=center.length-1;u++){
      center[u].onclick=()=>{
         w = -100;
         h = -100;
         box.style.transform=" translate(" + w + "vw," + h + "vh) scale3d(0.2,0.2,0.5) rotateY(40deg)";
         navbox[0].classList.add("animation");
         // count=1;
         // Click(count)
         // w = -100;
         // h = -100;
         // box.style.transform=" translate(" + w + "vw," + h + "vh) scale3d(0.2,0.2,0.5) rotateY(40deg)";
         
         // for(let y=0;y<=innerbox.length-1;y++){
         //   innerbox[y].appendChild(div);
         //    }
         //    let anima = document.getElementsByClassName("wall");

         }
      }
   


   // promise.then(() =>{
      // return new Promise((event) =>{
         for(let t=0;t<=nav.length-1;t++){
            nav[t].onclick=()=>{
               w = boxW[t];
               h = boxH[t];
               console.log(w)
               // box.style.transform=" scale3d(1,1,1) rotateY(0deg) translate(" + w + "vw," + h + "vh)"
               box.style.transform=" translate(" + w + "vw," + h + "vh)"
               navbox[0].classList.remove("animation");
               // Click(count)
              
            }
         }
      // })
               
               
   // });
      
      
   
   
  

   
     
   



      }