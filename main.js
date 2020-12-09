require('./test.scss')
var echarts = require('echarts')
require('./src/js/flexible')
require('./src/js/jquery')
// require('./src/js/echarts-item') 
//时间显示
let t = null
t = setTimeout(getTime, 1000);
function getTime () {
  clearTimeout()
  let cur = new Date()
  let y = cur.getFullYear()
  let mt = cur.getMonth() + 1
  let day = cur.getDate()
  let h = cur.getHours()
  let m = cur.getMinutes()
  let s = cur.getSeconds()
  document.querySelector('.showTime').innerHTML = `
  当前时间：${y}年${mt > 9 ? mt : '0' + mt}月${day > 9 ? day : '0' + day}-${h > 9 ? h : '0' + h}时${m > 9 ? m : '0' + m}分${s > 9 ? s : '0' + s}秒`
  t = setTimeout(getTime, 1000);
}

//柱状图1
; (
  function () {
    let mychart = echarts.init(document.querySelector(' .bar .chart'))
    let option = {
      color: ["#2f89cf"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      // 修改图表的大小
      grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "4%",
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: [
          "旅游行业",
          "教育培训",
          "游戏行业",
          "医疗行业",
          "电商行业",
          "社交行业",
          "金融行业"
        ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          color: "rgba(255,255,255,.6) ",
          fontSize: "10"
        },
        // 不显示x坐标轴的样式
        axisLine: {
          show: false
        }
      }],
      yAxis: [{
        type: 'value',
        // 修改刻度标签 相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6) ",
          fontSize: 12
        },
        // y轴的线条改为了 2像素
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 2
          }
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }],
      series: [{
        name: "直接访问",
        type: "bar",
        barWidth: "35%",
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
      }]
    }
    mychart.setOption(option)
  }
)()
  //折线图1

  ; (
    function () {
      var yearData = [
        {
          year: "2020", // 年份
          data: [
            // 两个数组是因为有两条线
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
          ]
        },
        {
          year: "2021", // 年份
          data: [
            // 两个数组是因为有两条线
            [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
            [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
          ]
        }
      ];
      let mychart = echarts.init(document.querySelector('.line .chart'))
      let option = {
        tooltip: { trigger: 'axis' },
        grid: {
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          show: true, // 显示边框
          borderColor: "#012f4a", // 边框颜色
          containLabel: true // 包含刻度文字在内
        },
        xAxis: {
          type: 'category',
          boundarygap: false,
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: "新增粉丝",
            type: "line",
            // true 可以让我们的折线显示带有弧度
            smooth: true,
            data: yearData[0].data[0]
          },
          {
            name: "新增游客",
            type: "line",
            smooth: true,
            data: yearData[0].data[1]
          }

        ]
      }
      mychart.setOption(option)
    }
  )()

  // //饼图1
  // (
  //   function () {

  //   }
  // )()
  // //柱状图2
  // (
  //   function () {

  //   }
  // )()
  // //折线图2
  // (
  //   function () {

  //   }
  // )()
  // //饼图2
  // (
  //   function () {

  //   }
  // )()