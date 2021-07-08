window.onload=()=>{

    // app.js(円ゲージのみの描画)
    (function() {
        var blue = 'rgb(54, 162, 235)';
        var gray = 'rgb(99, 99, 99)';
      
        var data = {
          datasets: [{
            data: [87, 13],
            backgroundColor: [blue, gray],
          }],
        };
      
        // グラフオプション
        var options = {
          // グラフの太さ（中央部分を何％切り取るか）
          cutoutPercentage: 65,
          // 凡例を表示しない
          legend: { display: false },
          // 自動サイズ変更をしない
          responsive: false,
          // マウスオーバー時に情報を表示しない
          tooltips: { enabled: false },
        };
      
        // グラフ描画
        var ctx = document.getElementById('chart-area').getContext('2d');
        new Chart(ctx, {
          type: 'doughnut',
          data: data,
          options: options
        });
      })();


    //   plugin.js（円ゲージの中の値、タイトル描画）
    var chartJsPluginCenterLabel = {
        labelShown: false,
      
        afterRender: function (chart) {
          // afterRender は何度も実行されるので、２回目以降は処理しない
          if (this.labelShown) {
            return;
          }
          this.labelShown = true;
          // ラベルの HTML
          var value = chart.data.datasets[0].data[0];
          var labelBox = document.createElement('div');
          labelBox.classList.add('label-box');
          labelBox.innerHTML = '<div class="label">'
            + '<div class="title">Progress</div>'
            + '<div class="value">'
            + value
            + '<span class="per">%</span>'
            + '</div>';
            + '</div>';
          // ラベル描画
          var canvas = chart.ctx.canvas;
          canvas.parentNode.insertBefore(labelBox, canvas.nextElementSibling);
        },
      };
      
      // 上記プラグインの有効化
      Chart.plugins.register(chartJsPluginCenterLabel);

}