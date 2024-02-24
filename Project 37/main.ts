/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */

function make_shirt2(size: string = 'Large', message: string = 'I love Progarmmming'): void {
    console.log(`The shirt size is ${size} and it says "${message}".`);
  }
  make_shirt2(); // Large shirt with default message
  make_shirt2('Medium'); // Medium shirt with default message
  make_shirt2('Small', 'Hello! Governor Sindh Kamran Tessori'); // Small shirt with custom message
  