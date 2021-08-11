var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash");
var calculateButton = document.querySelector("#button");
var errorHandler = document.querySelector("#error");
var output = document.querySelectorAll(".outputTable");

const notes = [2000, 500, 100, 20, 10, 5, 1];

calculateButton.addEventListener("click", clickHandler);

function clickHandler() {
  errorHandler.style.display = "none";
  if (billAmount.value && cashGiven.value == "number") {
    if (billAmount.value > 0) {
      if (billAmount.value < cashGiven.value) {
        const amountToBeReturned = cashGiven.value - billAmount.value;
        calculateChange(amountToBeReturned);
      } else {
        errorHandler.style.display = "block";
        errorHandler.innerHTML = "Bill amount should be less than cash amount";
      }
    } else {
      errorHandler.style.display = "block";
      errorHandler.innerHTML = "Bill amount should be greater than 0";
    }
  } else {
    errorHandler.style.display = "block";
    errorHandler.innerHTML = "Enter a valid Number";
  }
}

function calculateChange(amountToBeReturned) {
  for (var i = 0; i < notes.length; i++) {
    const numberofNotes = Math.trunc(amountToBeReturned / notes[i]);
    amountToBeReturned = amountToBeReturned % notes[i];
    output[i].innerText = numberofNotes;
  }
}
