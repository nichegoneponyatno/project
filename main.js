"use strict";

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// // let result = '';
// // const length = 8;

// // for (let i = 1; i < length; i++) {
// //     for (let j = 0; j < i; j++) {
// //         result += "*";
// //     }


// //     result += '\n';
// // }





// // console.log(result);

// let result = '';
// const length = 7;
// for (let i =  1; i < 7; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += '\n';
// }

// console.log(result);


// let result = ' ';
// const length = 7;

// for (let i = 1; i < 7; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);


const numberOfFilms = +prompt('Сколько  фильмов вы уже посмотрели?', ' ');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



     for (let i = 0; i <2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ' '),
              b = prompt('На сколько оцените его?', ' ');

              if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
              }  else {
                 console.log('error');
                 i--;
              }

     }

     if (personalMovieDB.count < 10) {
        console.log('Просмотренно довольно мало фильмов');
     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
console.log("вы классический зритель");
     } else if (personalMovieDB.count >= 30) {
        console.log("вы киноман");
     } else {
        console.log('произошла ошибка');
     }

     console.log(personalMovieDB);