const changeStatement = () => {
  document.getElementById("fit").innerHTML = "Welcome to my first task";
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numFe = document.getElementById("numbers"); // Get the element with id "numbers"
numFe.innerHTML = nums;

const returnState = () => {
  numFe.innerHTML = nums;

  mapStatement = document.getElementById("mapStatement");
  mapStatement.innerHTML = ""

  filterStatement = document.getElementById("filterStatement");
  filterStatement.innerHTML = ""

  reduceStatement = document.getElementById("reduceStatement");
  reduceStatement.innerHTML = ""

  forEachStatement = document.getElementById("forEachStatement");
  forEachStatement.innerHTML = ""

  spliceStatement = document.getElementById("spliceStatement");
  spliceStatement.innerHTML = ""
};

const mapArray = () => {
  const doubleNums = nums.map((num) => {
    return num * 2;
  });
  numFe.innerHTML = doubleNums;

  mapStatement = document.getElementById("mapStatement");
  mapStatement.innerHTML = "This is the map method, it takes an array and returns a new array with the same number of elements but with each element transformed by the function you provide. Click on the 'Return to original state' button and try another array method";
};

const filterArray = () => {
  const filteredNums = nums.filter((num) => num % 2 === 0);
  numFe.innerHTML = filteredNums

  filterStatement = document.getElementById("filterStatement");
  filterStatement.innerHTML = "This is the filter method, it takes an array and returns a new array with only the elements that pass the test/condition you provide. Click on the 'Return to original state' button and try another array method";
};


const reduceArray = () => {
    const reducedNums = nums.reduce((acc, num) => acc + num, 0)
    numFe.innerHTML = reducedNums

    reduceStatement = document.getElementById("reduceStatement");
    reduceStatement.innerHTML = "This is the reduce method, it takes an array and reduces it to a single value by applying the function you provide to each element in the array. Click on the 'Return to original state' button and try another array method";
}

const useForEach = () => {
const numbers = nums.forEach(num => console.log(num * num))

forEachStatement = document.getElementById("forEachStatement");
forEachStatement.innerHTML = "This is the forEach method, it takes an array and applies the function you provide to each element in the array, you can view the result in the console. Click on the 'Return to original state' button and try another array method";
}

const spliceArray = () => {
    const splicedNums = nums.splice(2, 3)
    numFe.innerHTML = splicedNums

    spliceStatement = document.getElementById("spliceStatement");
    spliceStatement.innerHTML = "This is the splice method, it takes an array and removes the elements you specify from the array. Click on the 'Return to original state' button and try another array method";
}