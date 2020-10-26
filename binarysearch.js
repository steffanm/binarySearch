const dummyList = [
  "aa",
  "ab",
  "bc",
  "ca",
  "da",
  "ec",
  "fc",
  "gc",
  "hc",
  "ic",
  "zc",
];
function search(list, query) {
  for (let index = 0; index < list.length; index++) {
    // const  element= list[index];
    console.log(`im looking at ${index}`);
    if (query == list[index]) {
      return `i found it at ${index}`;
    }
  }
}
function bSearch(list, query) {
  let index = list.length / 2;
  let topIndex = 0;
  let bottomIndex = list.length;
  let counter = 0;
  console.log(`===im looking for ${query}`);
  while (true) {
    index = Math.floor((bottomIndex - topIndex) / 2 + topIndex);
    console.log(`im looking at ${index}, and it = ${list[index]}`);
    if (counter > 4) {
      console.log("im breaking");
      break;
    }
    counter++;
    if (query == list[index]) {
      return `i found it at ${index}`;
    } else if (query < list[index]) {
      console.log("less then");
      bottomIndex = index;
    } else if (query > list[index]) {
      console.log("greater then");
      topIndex = index;
    }
    if (topIndex >= bottomIndex - 1) {
      console.log("no luck");
      break;
    }

    // console.log(
    //   `newIndex = ${index} = (${bottomIndex} - ${topIndex}) / 2 + ${topIndex}`
    // );
  }
}
const test1 = bSearch(dummyList, "bc");
console.log(test1);

console.log(bSearch(dummyList, "ww"));
