/*
    -switch statements execute a block of code depending on different cases
    -switch statemnts are often used together withbreak on default keywords
        -break keyword breaks out of the switch block alltogether
        -default keywords specifies code to run if there is not case match
*/

// let officeCharacter = 'Michael';

// switch (officeCharacter) {
//     case 'Michael':
//         console.log('My mind is going a mile an hour');
//         break;
//     case 'Dwight':
//         console.log('I am fast. To give you a reference point, Im somewhere between a snake anda mongoose...And a panther');
//         break;
//     case 'Jim':
//         console.log('Bears, Beetws, Battlestar Galatica');
//     default:
//         console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
// }

let desert = 'Planatains';

switch (desert) {
    case 'pie':
        console.log('Pie, pie, me oh my!');
        break;
    case 'cake':
        console.log('Cake is great!');
        break;
    case 'ice cream':
        console.log('I scream for ice cream!');
    default:
        console.log(` Not on the menu`);
}//switch statement with multiple conditions

let num = -40;

switch (true) {
    case (num <0 && number > -10):s
        console.log('case 1 ran');
        break;
    case (num > 0):
        console.log('case 2 ran');
        break;
    default:
        console.log('did not work')
}