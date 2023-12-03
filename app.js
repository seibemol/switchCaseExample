
let newLine = "\r\n";
let text = 
"1-Monday" + newLine
+ "2-Tuesday" + newLine
+ "3-Wednesday" + newLine
+ "4-Thursday" + newLine
+ "5-Friday" + newLine
+ "6-Saturday" + newLine
+ "7-Sunday" + newLine
+ "Please select a day";

let number = Number(prompt(text));

switch(number) 
{
    case 1:
        alert("Selected Day: Monday");
    break; 

    case 2:
        alert("Selected Day: Tuesday");
    break; 

    case 3:
        alert("Selected Day: Wednesday");
    break; 

    case 4:
        alert("Selected Day: Thursday");
    break; 

    case 5:
        alert("Selected Day: Friday");
    break; 

    case 6:
        alert("Selected Day: Saturday");
    break; 

    case 7:
        alert("Selected Day: Sunday");
    break; 

    default:
        alert("Please enter a valid value.");
    break;
}