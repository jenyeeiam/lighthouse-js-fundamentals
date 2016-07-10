function loopyLighthouse(range, multiples, words) {

  var i = range[0];
  while (i >= range[0] && i <= range[1]){

    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(words[0] + words[1]);
      i++;
    }

    else if (i % multiples[0] === 0) {
      console.log(words[0]);
      i++;
    }

    else if (i % multiples[1] === 0) {
      console.log(words[1]);
      i++;
    }

    else {
      console.log(i);
      i++;
    }

  }


}


console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));


// while (i >= 100 && i <= 200) {

//     //if (i % 3 === 0){
//     if (i % 3 === 0 && i % 4 === 0) {
//       console.log("LoopyLighthouse");
//       i++;
//     }

//     else if (i % 4 === 0){
//       console.log("Lighthouse");
//       i++;
//     }

//     else if (i % 3 === 0){
//       console.log("Loopy");
//       i++;
//     }

//     else {
//       console.log(i);
//       i++;
//     }


//   }