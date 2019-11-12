/** returns a random item from a lost */

function choice(arr){
  let radndomIndex= Math.floor(Math.random() * arr.length)
  return arr[radndomIndex]
}

export {choice};
