window.onmessage = function(e) {
  console.log("Hello from your Worker script!");

  const [ first, last ] = e.data;

  console.log("Returning full name to main thread");
  window.postMessage(`Full name: ${first} ${last}`);
}