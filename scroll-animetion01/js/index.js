window.onload=()=>{
    let box = document.getElementsByClassName("box");
    let hAray = [];
 
        for(let i=0;i<=box.length-1;i++){
            let clientRect = box[i].getBoundingClientRect();//クラスの座標
            let h = clientRect.top; // 現在位置から
            hAray.push(h);
            // console.log(hAray);
        }
        window.onscroll=()=>{
            let wh = window.innerHeight;//ウィンドウの高さ
            let s = window.pageYOffset;//スクロール量
            // let y = h + s; // box位置 
            for(let i=0;i<=hAray.length-1;i++){  
                let y=hAray[i] + s + 200; 
                if(hAray[i]< s + 300){
                box[i].classList.add("animation");
            }
            
            }
        
    }
}