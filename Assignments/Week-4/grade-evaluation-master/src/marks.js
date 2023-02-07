// Define a function to calculate the total marks and return a promise
const calculateTotalMarks = (math, english, science, social, language) => {
  return new Promise((resolve, reject) => {
    if (
      math === undefined ||
      english === undefined ||
      science === undefined ||
      social === undefined ||
      language === undefined
    )
      reject("Null values for marks");
    resolve(math + english + science + social + language);
  });
};
// Define a function to calculate average marks and return a promise
const calculateAverageMarks = (totalMarks) => {
  return new Promise((resolve, reject) => {
    resolve(totalMarks / 5);
  });
};
// Define a function to calculate grade and return a promise
const calculateGrade = (averageMarks) => {
  return new Promise((resolve, reject) => {
    let obtainedGrade = "";
    if (averageMarks >= 90) {
      obtainedGrade = "A+";
    } else if (averageMarks >= 80 && averageMarks <= 89) {
      obtainedGrade = "A";
    } else if (averageMarks >= 70 && averageMarks <= 79) {
      obtainedGrade = "B";
    } else if (averageMarks >= 60 && averageMarks <= 69) {
      obtainedGrade = "C";
    } else if (averageMarks >= 50 && averageMarks <= 59) {
      obtainedGrade = "E";
    } else if (averageMarks < 50) {
      obtainedGrade = "F";
    }
    resolve(obtainedGrade);
  });
};

module.exports = {
  calculateAverageMarks,
  calculateGrade,
  calculateTotalMarks,
};
