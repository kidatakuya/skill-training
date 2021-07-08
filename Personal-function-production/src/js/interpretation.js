window.onload=()=>{
   const langSelect = document.getElementsByClassName("lang-select")
   const glot = new Glottologist();

   

   for(let i=0;i<=langSelect.length-1;i++){
    langSelect[i].onclick=()=>{
        glot.assign('text', {
            ja: '私はこのテキストをさまざまな言語に翻訳します。'
        
        })
        glot.render();
    }
   }
const btn = document.getElementById("btn")
btn.onclick=()=>{
    console.log(window.location)
}
  

}