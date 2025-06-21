console.log("Begin");
setTimeout(() => {
  console.log("Timeout Task");
}, 0);
Promise.resolve().then(() => {
  console.log("Promise Task");
});
console.log("End");
// line 1 will print 
// line2 settimeout will send to the web API and will be send to macrotask queue
// line 5 promise will be sent to the microtask queue 
// event loop will check call stack empty and will check microtask queue first and macro task queue later
// so line 5 will print first and then line 2 will print
// line 8 will print