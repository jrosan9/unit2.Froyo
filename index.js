// const user_input = prompt("Enter a list of comma-separated froyo flavors:");
// const flavors_list = user_input.split();

// console.log(flavors_list, "flavors");

// let flavors_obj = {};

// for (let i = 0; i < flavors_list.length; i++) {
//   let flavor = flavors_list[i];
//   flavors_obj.push(flavor);
// }
// // console.log(flavors_obj);
const user_input = prompt("Enter a list of comma-separated froyo flavors:");
const flavors_list = user_input.split(",");
const flavors_obj = {};
let count = 0;
for (let i = 0; i < flavors_list.length; i++) {
  let flavor = flavors_list[i].trim();
  //   count += 1;
  if (Object.values(flavors_obj).indexOf(flavor)) {
    flavors_obj[flavor] = count;
    // flavors_obj[flavor] = count;
  }
  count += 1;
  //    count = 0;
  //   flavors_obj[flavor] = count;
  //   count = 0;
}
console.log(flavors_obj);

//  I cant get the property value to stop increment the property value correctly
