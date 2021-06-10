'use strict';

const array = () => {
  const result = [];
  function wrapper(value) {
    let typeValue = typeof value;
    if (typeValue !== 'number') {
     let error = new Error('Only numbers are allowed')
      return error;
    }
    return result[value];
  }
  wrapper.push = (value) => {
    result.push(value);
  }
  wrapper.pop = (value) => {
    result.pop(value);
  }
  return wrapper;
};

module.exports = { array };



const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');
console.log(arr(0)); // Выводит: first
console.log(arr(1)); // Выводит: second
console.log(arr(2)); // Выводит: third
console.log(arr('test')); // Выводит: ошибку
