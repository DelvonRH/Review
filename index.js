let number = 10;

console.log("Number Before Adding Five Times: " + number);

number = number + 1;
number = number + 1;
number = number + 1;
number = number + 1;
number = number + 1;


console.log("Number After Adding Five Times: " + number); g


function addOneFiveTimes(){
    let number = 10;

    console.log("\n" + number);

    for (let i = 0; i < 5; i++) {
      number = number + 1;
      console.log(number);
    }
}

// const addOneFiveTimes = () => {
//      let number = 10;

//      console.log("\n" + number);

//      for(let i = 0; i < 5; i++) {
			
// 			number = number + 1;
// 			console.log(number);
// 		}
// }

addOneFiveTimes();

