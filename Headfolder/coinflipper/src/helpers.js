function choice(arr){
  let radndomIndex= Math.floor(Math.random() * arr.length)
  return arr[radndomIndex]
}

export {choice};
