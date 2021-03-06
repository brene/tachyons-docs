/*
 * Common utility functions to be used throughout app
 */

// See how long it takes to run a function.
// ie. helpful to see if you should use filter vs find for an array or stuff like that.
const checkPerformance = (myFunction) => {
  const t0 = window.performance.now();
  const result = myFunction();
  const t1 = window.performance.now();
  console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate:', result);
}

const roundTwoDecimal = (num) => {
  return num % 1 !== 0 ? num.toFixed(2) : num;
}

const formatNickname = (moduleName) => {
  return moduleName.replace('tachyons-', '')
}

const formatLabel = (moduleName) => {
  const nickName = formatNickname(moduleName);
  const words = nickName.split('-');
  return words.map( word => {
    return word.charAt(0).toUpperCase() + word.slice(1) + " ";
  })
}

export {
  checkPerformance,
  roundTwoDecimal,
  formatNickname,
  formatLabel
}
