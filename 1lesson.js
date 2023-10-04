// let isOlderDrink = old <= 14 || old <= 17 || old <= 20 || old <= 90;
let old = prompt("How old are you?");

if (old <= 14) {
  console.log("Toddy");
  document.write(`Вам наданно напій Toddy 
  Ваш рік  ${old}`);
}
// ------------------------------------------------
else if (old <= 17) {
  console.log(`coke ${old}`);
  console.log("coke");
  document.write(`Вам наданно напій Сoke
  Ваш рік ${old}`);

  // ------------------------------------------------
} else if (old <= 20) {
  console.log(`beer ${old}`);
  console.log("beer");
  document.write(`Вам наданно напій Beer
  Ваш рік ${old}`);

  // ------------------------------------------------
} else {
  console.log(`Whisky ${old}`);
  console.log("Whisky");
  document.write(`Вам наданно напій  whisky
  Ваш рік ${old}`);
}

// if (old < 18) {
//   console.log("coke");
//   if (old < )

// else {
//     document.write(`welkome ${old}`);
//     console.log(`welkome ${old}`);
//   }
// const Old = prompt("How old are you?");

// if (Old.length >13) {
//   alert("Not vaild name");
// }
// if (Old.length < 6) {
//   alert("Not vaild password");
//   // } else {
//   //   console.log(`Welcome  ${AName}`);
// } else {
//   document.write(`welkome ${Old}`);
//   console.log(`welkome ${Old}`);
// }
