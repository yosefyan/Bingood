let history = [];

const getRandomNumber = () => {
  const res = Math.floor(Math.random() * 100);
  history.push(res);
  history.length % 8 === 0 ? history.length = 0 : '';
  return res;
};

export { getRandomNumber, history };
