const Counter = document.getElementById("Counter");
const resultP = document.getElementById("resultP");
let count = 0;

function addCount() {
  count++;
  Counter.textContent = `Counter: ${count}`;
  resultP.textContent = count;
}

function resetBtn() {
  Counter.textContent = `Counter: 0`;
  resultP.textContent = 0;
}
function deleteBtn() {
  if (0 < count) {
    count--;
    Counter.textContent = `Counter: ${count}`;
    resultP.textContent = count;
  } else {
    resultP.textContent = "Number must be big a zero!";
  }
}
