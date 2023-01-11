const pi = 3.14;

const calculateArea = (choice,side,length,breadth,radius) =>{   
    let area = 0.0; 
    // write logic here
    // note that you check the values passed are not null before performing any operation on them
    switch(choice){
        case "square":{
            if(isNaN(side)){
                area = -1;
            }
            else
            area = side**2;
            break;
        }
        case "rectangle":{
            if(isNaN(side)){
                area = -1;
            }
            else
            area = length * breadth;
            break;
        }
        case "circle":{
            if(isNaN(side)){
                area = -1;
            }
            else
            area = pi*(radius**2);
            break;
        }
        default:
            area = -1;
    }
    return area
}
module.exports = {calculateArea}
