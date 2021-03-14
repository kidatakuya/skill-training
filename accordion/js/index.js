window.onload=()=>{

    const nav = document.getElementsByClassName("nav");
    const text = document.getElementsByClassName("text");
    const inner = document.getElementsByClassName("inner");
    const btn = document.getElementsByClassName("a");
    let count = [0,0,0,0];



    for(let i=0;i<=nav.length-1;i++){
        nav[i].onclick=()=>{
            // text[i].style.display="blocl";
            let h = inner[i].clientHeight;
                if(count[i]===0){
                // text[i].style.transition="0.2s";
                text[i].style.height= h +  20 + "px";
                text[i].style.padding="10px";
                btn[i].style.transform="rotate(315deg)"
                text[i].ontransitionend=()=>{
                    inner[i].style.transition="0.1s";
                    inner[i].style.opacity="1";
                    count[i]=1;
                }
                }else{
                    inner[i].style.transition="0.1s";
                    inner[i].style.opacity="0";
                    text[i].ontransitionend=()=>{
                        // text[i].style.transition="0.2s";
                        btn[i].style.transform="rotate(0deg)"
                        text[i].style.padding="0";
                        text[i].style.height="0";   
                        count[i]=0;
                }
            }
        }        
    }

}