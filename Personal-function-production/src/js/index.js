window.onload=()=>{
    const monthMoney = document.getElementById("month-money")
    const dayMoney = document.getElementById("day-money")
    const icon = document.getElementById("icon")
    let moneyWindow = document.getElementById("money-window")
    const btn = document.getElementById("btn")
    const randomBtn = document.getElementById("random")
    
    
    let money = []


    let date = new Date();
    let dateMonth = date.getMonth()+1
    console.log(date.getDate())
    console.log(dateMonth)
    

    // function useMoneyCreate() {
    //     for(let i=0;i<=money.length-1;i++){
    //         let useMoneyWarp = document.getElementById("use-money-warp")
    //         let newElement = document.createElement("p");
    //         newElement.className = 'use'
    //         newElement.textContent=money[i];
    //         useMoneyWarp.appendChild(newElement);
    //         dayMoney.innerText=dayMoney.innerText - money[i]
    //         if( dayMoney.innerText<0){
    //             dayMoney.style.color="red"
    //         }
    //     }
    // }

    // useMoneyCreate()
   
    // リスト追加
    btn.onclick=()=>{
        let n = document.getElementById("name")
        if(n.value.length>0){
            console.log(n.value)
            money.push(n.value)
            console.log(money)
            useMoneyWarp = document.getElementById("use-money-warp")
            newElement = document.createElement("p");
            newElement.className = 'use'
            newElement.textContent=money[money.length-1];
            useMoneyWarp.appendChild(newElement);
            // dayMoney.innerText=dayMoney.innerText - money[money.length-1]
            n.value=""
        }
    }


    randomBtn.onclick=()=>{
        const Decision = document.getElementById("Decision")
        if(money.length>=2){
            let a = Math.floor( Math.random() * ((money.length-1) + 1 - 0) ) + 0 ;
            Decision.innerText=money[a]
        }
    }
}