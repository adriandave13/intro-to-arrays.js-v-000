'use strict';

function createArray() {
  return ['snickers', 'hundred grand', 'kitkat', 'skittles'];
}

function addElementToArray(array) {
  array.push('A Christmas Story');
  return array;
}

function accessElementFromArray(array) {
  return array[2];
}

function replaceElementInArray(array) {
  array[2] = 'Carter';
  return array[2];
}

function removeElementFromArray(array) {
  array.splice(2, 2, 'Roast Chicken');
  return array;
}

function iterateArray(array) {
  var newNums = [];
  array.forEach(function(number) {
    newNums.push(number + 5);
  });
  return newNums;
}