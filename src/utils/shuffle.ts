export const randomShuffle = (dataList: Array<unknown>): Array<unknown> => {
  let currentIdx = dataList.length;

  while (currentIdx !== 0) {
    const randomIdx = Math.floor(Math.random() * currentIdx);
    currentIdx -= 1;
    const temp = dataList[currentIdx];
    dataList[currentIdx] = dataList[randomIdx];
    dataList[randomIdx] = temp;
  }

  return dataList;
};
