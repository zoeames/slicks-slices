import { useState } from 'react';

export default function OrderPages(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValue(e) {
    // check if its a number and convert
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = e.target.value * 1;
    }
    setValues({
      // copy the existing values into it
      ...values,
      // update the new value that changed
      [e.target.name]: value,
    });
  }
  return { values, updateValue };
}
