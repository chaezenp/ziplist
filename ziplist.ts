function zipList(list1: string[], list2: number[]): (string | number)[] {
  const zippedList = [];
  for (let i = 0; i < list1.length; i++) {
    zippedList.push(list1[i], list2[i]);
  }
  return zippedList;
}

function zipListTheFunctionalWay(list1: string[], list2: number[]): (string | number)[] {
  const zippedList: (string | number)[] = [];
  list1.forEach((element, index) => {
    zippedList.push(element, list2[index]);
  });
  return zippedList;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
