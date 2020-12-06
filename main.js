require('./test.css')

var echarts = require('echarts');

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption({
  backgroundColor: '#2c343c',
  series: [
    {
      name: '访问来源',
      // 图表类型
      type: 'pie',
      radius: '55%',
      // 南丁格尔图
      roseType: 'angle',
      // 数据
      data: [
        { value: 235, name: '视频广告' },
        { value: 274, name: '联盟广告' },
        { value: 310, name: '邮件营销' },
        { value: 335, name: '直接访问' },
        { value: 400, name: '搜索引擎' }
      ],
      // 图形样式
      itemStyle: {
        normal: {
          shadowBlur: 200,
          shadowColor: 'rgba(0,0,0,0.5)'
        }
      },// 标签
      label: {
        normal: {
          textStyle: {
            color: 'rgba(255,255,255,0.3)'
          }
        }
      },
      // 标签线
      labelLine: {
        normal: {
          lineStyle: 'rgba(255,255,255,0.3)'
        }
      }
    }
  ]
});

var bar1 = echarts.init(document.querySelector('#bar1'))
bar1.setOption({
  backgroundColor: '#ccc',
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
})