const Counter = document.getElementById("Counter");
let count = 0;

function addCount() {
  count++;
  Counter.textContent = `Counter: ${count}`;
}

function resetBtn() {
  Counter.textContent = `Counter: ${count = 0}`;
}
function deleteBtn() {
  if (0 < count) {
    count--;
    Counter.textContent = `Counter: ${count}`;
  } else {
    resultP.textContent = "Number must be big a zero!";
  }
}
