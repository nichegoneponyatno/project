"use strict"

if (4 == 9) {
    console.log('ok');
} else {
    console.log('error')
};

const num = 101;
if (num < 49) {
    console.log('error')
} else if (num > 100) {
    console.log('mnogo')
} else {
    console.log('ok')
};


(num === 50) ? console.log('ok') : console.log('error');

const NUM = 55;

switch (NUM) {
    case 49:
        console.log('neverno');
        break;
        case 100:
            console.log('neverno');
            break;
            case 50:
                console.log('v tochku');
                break;
                default:
                    console.log('ne v etot raz');
                break;
}