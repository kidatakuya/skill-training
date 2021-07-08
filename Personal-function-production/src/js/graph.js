window.onload=()=>{
    // let myChart = new Chart(ctx, {
    //   type: タイプ,
    //   data: データ,
    //   options: オプション
    // });

    // 折れ線グラフ
    let ctx = document.getElementById("Line");
    let myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['8月1日', '8月2日', '8月3日', '8月4日', '8月5日', '8月6日', '8月7日'],
          datasets: [
            {
              label: '最高気温(度）',
              data: [35, 34, 37, 35, 34, 35, 34, 25],
              borderColor: "rgba(255,0,0,1)",
              backgroundColor: "rgba(0,0,0,0)"
            },
            {
              label: '最低気温(度）',
              data: [25, 27, 27, 25, 26, 27, 25, 21],
              borderColor: "rgba(0,0,255,1)",
              backgroundColor: "rgba(0,0,0,0)"
            }
          ],
        },
        options: {
          title: {
            display: true,
            text: '気温（8月1日~8月7日）'
          },
          scales: {
            yAxes: [{
              ticks: {
                suggestedMax: 40,
                suggestedMin: 0,
                stepSize: 10,
                callback: function(value, index, values){
                  return  value +  '度'
                }
              }
            }]
          },
        }
      });

    //   棒グラフ
    let bar = document.getElementById("bar");
    let myBarChart = new Chart(bar, {
        type: 'bar',
        data: {
          labels: ['8月1日', '8月2日', '8月3日', '8月4日', '8月5日', '8月6日', '8月7日'],
          datasets: [
            {
              label: 'A店 来客数',
              data: [62, 65, 93, 85, 51, 66, 47],
              backgroundColor: "rgba(219,39,91,0.5)"
            },{
              label: 'B店 来客数',
              data: [55, 45, 73, 75, 41, 45, 58],
              backgroundColor: "rgba(130,201,169,0.5)"
            },{
              label: 'C店 来客数',
              data: [33, 45, 62, 55, 31, 45, 38],
              backgroundColor: "rgba(255,183,76,0.5)"
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: '支店別 来客数'
          },
          scales: {
            yAxes: [{
              ticks: {
                suggestedMax: 100,
                suggestedMin: 0,
                stepSize: 10,
                callback: function(value, index, values){
                  return  value +  '人'
                }
              }
            }]
          },
        }
      });


    //   円グラフ
    let pie = document.getElementById("pie");
    let bloodData = []
    let myPieChart = new Chart(pie, {
    type: 'pie',
    data: {
      labels: ["A型", "O型", "B型", "AB型"],
      datasets: [{
          backgroundColor: [
              "#BB5179",
              "#FAFF67",
              "#58A27C",
              "#3C00FF"
          ],
          data: bloodData
      }]
    },
    options: {
      title: {
        display: true,
        text: '血液型 割合'
      }
    }
  });
  
  btn.onclick=()=>{

    bloodData =[]
    let blood = document.getElementsByClassName("blood")
    for(let i=0;i<=blood.length-1;i++){
        bloodData.push(blood[i].value)
        
    }


    new Chart(pie, {
        type: 'pie',
        data: {
          labels: ["A型", "O型", "B型", "AB型"],
          datasets: [{
              backgroundColor: [
                  "#BB5179",
                  "#FAFF67",
                  "#58A27C",
                  "#3C00FF"
              ],
              data: bloodData
          }]
        },
        options: {
          title: {
            display: true,
            text: '血液型 割合'
          }
        }
      });
      for(let i=0;i<=blood.length-1;i++){
        blood[i].value=""
    }
  }

  console.log(myPieChart.data.datasets[0].data)

}