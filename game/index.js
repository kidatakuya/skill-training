window.onload=function(){

    var btn=document.getElementById("btn");
    var swd=document.getElementById("sword");
    var g=document.getElementById("g");
    
    btn.onclick=function(e){
        g=document.getElementById("g");
        swd.classList.add("swordanimation");

        swd.onanimationend=function(){
            swd=document.getElementById("sword");
            swd.classList.remove("swordanimation")
        }
        if(g.clientWidth===40){
            g.style.width="20px";
            e.stopPropagation();
        }
        if(g.clientWidth===60){
            g.style.background="#ef6660";
            g.style.width="40px";
            e.stopPropagation();
        }
        if(g.clientWidth===80){
            g.style.width="60px";
            e.stopPropagation();
        }
       
        if(g.clientWidth===100){
            g.style.width="80px";
            e.stopPropagation();
        }
        if(g.clientWidth===120){
            g.style.background="#efcc60";
            g.style.width="100px";
            gw=g.clientWidth;
            
        }
        
        if(g.clientWidth===140){
            g.style.width="120px";
            gw=g.clientWidth;
            
        }
        if(g.clientWidth===160){
            g.style.width="140px";
            gw=g.clientWidth;
            
        }
        if(g.clientWidth===180){
           
            g.style.width="160px";
            gw=g.clientWidth;
            
        }
        if(g.clientWidth===200){
            g=document.getElementById("g");
            var gw=g.clientWidth;
            g.style.width="180px";
            }

        console.log(gw)
        if(g.clientWidth===20){
            g.style.background="#ef6660";
            g.style.width="0px";
            // gw=g.clientWidth;
            g.addEventListener("webkitTransitionEnd",function(){

                document.getElementById("m").style.display="block";
              
            })
        }
              
    }
    document.getElementById("btn1").onclick=function(){
        g.style.width="200px";
        g.style.background="chartreuse";

        g.addEventListener("webkitTransitionEnd",function(){

             document.getElementById("m").style.display="none";
          
        })
    }

}