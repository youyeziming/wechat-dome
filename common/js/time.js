// 传入时间戳 时间转换
export default function getLocalTime(nS) {     
  return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
}