function bonAppetit(bill, k, b) {
  let totalBill = 0;

  for (let i = 0; i < bill.length; i++) {
    if (i !== k) {
      totalBill += bill[i];
    }
  }

  if (totalBill / 2 === b) {
    console.log("Bon Appetit");
    return;
  }

  console.log(b - totalBill / 2);
}

// bonAppetit([3, 10, 2, 9], 1, 12);

const breakRecords = (scores) => {
  let curentMax = scores[0];
  let curentMin = scores[0];

  const startFirstGames = scores.slice(1);
  let recordMinMax = { maxScore: 0, minScore: 0 };
  let result = [];

  startFirstGames.forEach((score) => {
    if (score < curentMin) {
      recordMinMax.minScore += 1;
      curentMin = score;
    }
    if (score > curentMax) {
      recordMinMax.maxScore += 1;
      curentMax = score;
    }
  });

  result.push(recordMinMax.maxScore);
  result.push(recordMinMax.minScore);

  return result;
};

console.log(breakRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
