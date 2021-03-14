window.onload=()=>{

    const nav = document.getElementsByClassName("nav");
    const text = document.getElementsByClassName("text");
    let count = 0;

    nav[0].style.background="rebeccapurple";
    nav[0].style.transform="translateY(-8px)";
    text[0].style.display="block";

    for(let i=0;i<=nav.length-1;i++){
        nav[i].onclick=()=>{
            nav[count].style.background="rgb(162, 73, 252)";
            nav[count].style.transform="translateY(0px)";
            text[count].style.display="none";
            nav[i].style.background="rebeccapurple";
            nav[i].style.transform="translateY(-8px)";
            text[i].style.display="block";
            count=i;
        }
    }

}