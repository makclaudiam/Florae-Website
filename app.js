const select = document.querySelector('#quantity-select')
console.log(select)


select.addEventListener ('change', (event) => {
let value = select.value
console.log(value)
const quantOne = document.getElementById('dynamic-recipe-1');
console.log(quantOne)
const quantTwo = document.getElementById('dynamic-recipe-2');
console.log(quantTwo)
const quantThree = document.getElementById('dynamic-recipe-3');
console.log(quantThree)


if (value == "1") {
  quantOne.style.display = "block";
  quantTwo.style.display = "none";
  quantThree.style.display = "none";
} else if (value == "2") {
  quantOne.style.display = "none";
  quantTwo.style.display = "block";
  quantThree.style.display = "none";
} else if (value == "3"){
  quantOne.style.display = "none";
  quantTwo.style.display = "none";
  quantThree.style.display = "block";
}
});
