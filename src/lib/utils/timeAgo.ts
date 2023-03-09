function calculateTimeAgo(date: string) {
  const oneSecond = 1000;
  const oneMinute = oneSecond * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneMonth = oneDay * 30;
  const oneYear = oneDay * 365;

  let leftTime = new Date().getTime() - new Date(date).getTime();

  const 年 = Math.floor(leftTime / oneYear);
  leftTime = leftTime % oneYear;

  const 月 = Math.floor(leftTime / oneMonth);
  leftTime = leftTime % oneMonth;

  const 天 = Math.floor(leftTime / oneDay);
  leftTime = leftTime % oneDay;

  const 小时 = Math.floor(leftTime / oneHour);
  leftTime = leftTime % oneHour;

  const 分钟 = Math.floor(leftTime / oneMinute);
  leftTime = leftTime % oneMinute;

  const 秒 = Math.floor(leftTime / oneSecond);

  return { 年, 月, 天, 小时, 分钟, 秒 };
}
function findFirstNoneZero(data: { 年: number; 月: number; 天: number; 小时: number; 分钟: number; 秒: number }) {
  let result = { key: "秒", value: data.秒 };

  Object.keys(data).every((key) => {
    let typeChangedKey = key as "年" | "月" | "天" | "小时" | "分钟" | "秒";
    const firstNoneZero = data[typeChangedKey];
    if (firstNoneZero !== 0) {
      result = { key, value: firstNoneZero };
      return false;
    }
    return true;
  });

  return result;
}

export default function timeAgo(date: string) {
  const result = calculateTimeAgo(date);
  const ago = findFirstNoneZero(result);
  return `${ago.value}${ago.key}前`;
}
