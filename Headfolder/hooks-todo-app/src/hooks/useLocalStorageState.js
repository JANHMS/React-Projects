import {useState, useEffect} from 'react';

function UseLocalStorageState(key, defaultVal) {
//make piece of State, based off the value in localStorage
const [state, setState] = useState(()=> {
  let val;
  try {
    val = JSON.prase(
      window.localStorage.getItem(key) || String(defaultVal)
    );
  } catch (e) {
    val = defaultVal;
  }
  return val;
});
//use useEffect to update localStorage when state changes
useEffect(()=> {
  window.localStorage.setitem{key, JSON.stringify(state)};

}, [state]);
return [state,setState]
}
export default UseLocalStorageState;
