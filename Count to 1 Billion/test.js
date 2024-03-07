// Function to count to one billion
function countToBillion() {
    return new Promise((resolve, reject) => {
      let count = 0;
      const startTime = Date.now(); // Record the start time
      const interval = setInterval(() => {
        count++;
        if (count === 1000000000) {
          clearInterval(interval);
          const endTime = Date.now(); // Record the end time
          const elapsedTime = endTime - startTime; // Calculate elapsed time
          resolve(elapsedTime); // Resolve the promise with the elapsed time
        }
      }, 1); // Adjust the interval as needed for performance
    });
  }
  
  // Call the function and print 'Completed' with the elapsed time when done
  countToBillion().then((elapsedTime) => {
    console.log('Completed in', elapsedTime / 1000, 'seconds');
  }).catch((error) => {
    console.error('An error occurred:', error);
  });
  