let count = 0;
const start = performance.now();
while (count < 1000000000) {
  count++;
}
const end = performance.now();
console.log("Time taken: " + (end - start) + " milliseconds");
