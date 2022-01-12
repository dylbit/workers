const first = document.querySelector("#number1");
const last = document.querySelector("#number2");

const success = document.querySelector(".success");
const result = document.querySelector("#result");

if (window.Worker) {
  const myWorker = new Worker("worker.js");

  first.onchange = function(e) {
    myWorker.postMessage([ first.value, last.value ]);
  }

  last.onchange = function(e) {
    myWorker.postMessage([ first.value, last.value ]);
  }

  myWorker.onmessage = function(e) {
    success.style.display = "block";
    result.textContent = e.data;
  }
}
