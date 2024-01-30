const getSleepHours = day => {
    switch(day){
      case 'monday':
      return 8
      break;
      case 'tuesday':
      return 6;
      break;
      case 'wednsday':
      return 7;
      break;
      case 'thursday':
      return 5
      break;
      case 'friday':
      return 6;
      break;
      case 'saturday':
      return 8;
      break;
      case 'sunday':
      return 7;
      break;
     
      default:
      return "Error"
       }
    }; 
    const getActualSleepHours = () => 
    getSleepHours('monday') +
     getSleepHours('tuesday') +
     getSleepHours('wednsday') +
     getSleepHours('thursday') +
     getSleepHours('friday') +
     getSleepHours('saturday') +
     getSleepHours('sunday');
    
    
    console.log(getSleepHours('monday'));
    console.log(getActualSleepHours());
    
    
    const getIdealSleepHours = () => {
      let idealHours = 8;
      return idealHours * 7;
    };
    const calculateSleepDebt = () => {
        const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours(8);
    
    if(actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep.');
    } 
    
    else if(actualSleepHours > idealSleepHours){
      console.log("You got" + (idealSleepHours - actualSleepHours) + "more hours of sleep this week.");
    }
    
     else if(actualSleepHours < idealSleepHours){
      console.log("you got " + (idealSleepHours - actualSleepHours) + "hour(s) less sleep than you needed this week. Get som rest.");
       }
    
       else{
         console.log('Error! something must be wrong check your code.')
       }
    };
    calculateSleepDebt();