require('./test.scss')
require('./src/js/flexible')
require('./src/js/jquery')
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