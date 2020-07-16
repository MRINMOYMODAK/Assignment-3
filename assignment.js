//assignment No - 01 , feet to mile conversion. 

function feetToMile(feet){
    let mile = feet/5280;                                                         // 1 mile = 5280 feet
    return mile;
}
let outputInMile = feetToMile(1);
console.log (outputInMile , "mile");





//assignment No - 02 , Wood calculator

function woodCalculator(numbersOfChairs, numberOfTables, numberOfBeds){
    requiredWoodForChairs = numbersOfChairs*1;                                       // 1 amount of wood/ chair 
    requiredWoodForTables = numberOfTables*3;                                        // 3 amount of wood / chair 
    requiredWoodForBeds = numberOfBeds*5;                                            // 5 amount of wood / bed 
    requiredWood = requiredWoodForChairs + requiredWoodForTables + requiredWoodForBeds;
    return [requiredWood,requiredWoodForChairs, requiredWoodForTables, requiredWoodForBeds] ;
}
let totalAmountOfWood = woodCalculator(5,6,8);
console.log(['total amount of wood', 'required wood for chairs','required wood for tables', 'required wood for beds'], '=', totalAmountOfWood);







//assignment No - 03 , Brick Calculator

function brickCalculator(numberOffloor){
    if (numberOffloor<=0){
        return 'error input';                                                             //if we give negetive input it will show us error.
    }
    else if (numberOffloor<=10){
        requiredBrick = numberOffloor*15*1000;                                           //1st to 10th floor are 15 feet in height.
        return requiredBrick; 
    }
    else if (numberOffloor<=20){
        requiredBrick = 10*15*1000 + (numberOffloor-10)*12*1000;                        // 11th to 20th floor are 12 feeet in height.
        return requiredBrick
    }
    else{
        requiredBrick = 10*15*1000 + 10*12*1000 + (numberOffloor-20)*10*1000;          // after 20th floor each floor is 10 feet in height.
        return requiredBrick;
    }
}
totalAmountOfBrick = brickCalculator(36);
console.log(totalAmountOfBrick);






//assignment No - 04 , find the tiny name from an array

function tinyFriend(names){
    let tinyWord = names[0];
    for (var i=0; i<names.length; i++){
        if (names[i].length < tinyWord.length){
            tinyWord = names[i];
        }
    }
          return tinyWord;
    
}

tinyName = tinyFriend(['Rahim', 'Karim', 'Ikra', 'Rohima']);
console.log(tinyName);