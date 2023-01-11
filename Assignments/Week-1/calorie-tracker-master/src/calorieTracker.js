const calculateWeightLostInAMonth = (cycling, running, swimming, extraCalorieInTake) => {
   if (cycling <= 0 || running <= 0 || swimming <= 0 || extraCalorieInTake <= 0)
   return -1;
   else {
      let weightLostInAMonth = 0.0;
      
      // write logic here 
      let duration = 60;
      let totalcalorieBurnInAWeek = ((((cycling / 30) * duration) + ((running / 30) * duration) + ((swimming / 30) * duration)));
      let totalcalorieBurnInMonth =  totalcalorieBurnInAWeek*4 - 30 *(extraCalorieInTake);
      weightLostInAMonth = totalcalorieBurnInMonth / 1000;
      console.log(weightLostInAMonth)
      return weightLostInAMonth;
   }
}

calculateWeightLostInAMonth(process.argv[2], process.argv[3], process.argv[4], process.argv[5])
module.exports = calculateWeightLostInAMonth

