"use strict";
function zipList(list1, list2) {
    const zippedList = [];
    for (let i = 0; i < list1.length; i++) {
        zippedList.push(list1[i], list2[i]);
    }
    return zippedList;
}
function zipListTheFunctionalWay(list1, list2) {
    const zippedList = [];
    list1.forEach((element, index) => {
        zippedList.push(element, list2[index]);
    });
    return zippedList;
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
