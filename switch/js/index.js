window.onload=()=>{

    const btnBox = document.getElementsByClassName("btnBox");
    const btn = document.getElementsByClassName("btn");
    let count = [];

    for(let i=0;i<=btnBox.length-1;i++){
        count.push(0);
    };
    for(let i=0;i<=btn.length-1;i++){
        btnBox[i].onclick=()=>{
            if( count[i] === 0 ){
                let w = btnBox[i].clientWidth - btn[i].clientWidth -10;
                btn[i].style.transform="translateX(" + w + "px)";
                count[i]=1;
            }else{
                let w = btnBox[i].clientWidth - btn[i].clientWidth -10;
                btn[i].style.transform="translateX( 0 )";
                count[i]=0;
            }
            
        }
    }
}