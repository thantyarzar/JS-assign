function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  return Math.round(bmi * 10) / 10;
}

const weight1 = 70;
const height1 = 1.75;

const weight2 = 85;
const height2 = 1.82;

const bmi1 = calculateBMI(weight1, height1);
const bmi2 = calculateBMI(weight2, height2);

console.log(
  `For a weight of ${weight1} kg and height of ${height1} m, the BMI is: ${bmi1}`
);
console.log(
  `For a weight of ${weight2} kg and height of ${height2} m, the BMI is: ${bmi2}`
);
