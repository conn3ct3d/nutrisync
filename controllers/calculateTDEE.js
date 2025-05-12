// Mifflin-St Jeor Equation
function calculateTDEE_MifflinStJeor({ weightKg, heightCm, age, sex, activityLevel }) {
    let bmr;
  
    if (sex === 'male') {
      bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5;
    } else if (sex === 'female') {
      bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
    } else {
      throw new Error("Sex must be 'male' or 'female'");
    }
  
    return bmr * activityLevel;
  }
  
  // Katch-McArdle Equation (requires lean mass)
  function calculateTDEE_KatchMcArdle({ weightKg, bodyFatPercent, activityLevel }) {
    const leanMassKg = weightKg * (1 - bodyFatPercent / 100);
    const bmr = 370 + (21.6 * leanMassKg);
  
    return bmr * activityLevel;
  }
  
  // Example usage:
//   const mifflinTDEE = calculateTDEE_MifflinStJeor({
//     weightKg: 70,
//     heightCm: 175,
//     age: 25,
//     sex: 'male',
//     activityLevel: 1.55  // Moderately active
//   });
  
//   const katchTDEE = calculateTDEE_KatchMcArdle({
//     weightKg: 70,
//     bodyFatPercent: 15,
//     activityLevel: 1.55
//   });
  
//   console.log("TDEE (Mifflin-St Jeor):", mifflinTDEE.toFixed(2), "kcal/day");
//   console.log("TDEE (Katch-McArdle):", katchTDEE.toFixed(2), "kcal/day");
  