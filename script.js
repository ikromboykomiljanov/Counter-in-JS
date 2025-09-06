const Counter = document.getElementById("Counter");
const resultP = document.getElementById('resultP')
let count = 0;

function addCount() {
  count++;
  Counter.textContent = `Counter: ${count}`;
  resultP.textContent = ""

}

function resetBtn() {
  Counter.textContent = `Counter: ${count = 0}`;
  resultP.textContent = ""

}
function deleteBtn() {
  if (0 < count) {
    count--;
    Counter.textContent = `Counter: ${count}`;
  } else {
    resultP.textContent = "Number must be big a zero!";
  }
}
