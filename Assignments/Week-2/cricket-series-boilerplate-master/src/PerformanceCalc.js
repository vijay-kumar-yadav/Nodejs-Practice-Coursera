const PerformanceCalculator = (runs, balls) => {
  // Write the Logic here
  let average = parseInt(runs) / parseInt(balls);
  if (runs > 30 && balls < 15) {
    average += average * 0.01;
  } else if (runs > 40 && balls < 20) {
    average += average * 0.1;
  } else if (runs > 100 && balls < 50) {
    average += average * 0.2;
  }

  return average;
};

module.exports = { PerformanceCalculator };
