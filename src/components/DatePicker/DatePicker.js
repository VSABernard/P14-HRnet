import React from 'react'
import DatePicker from 'react-date-picker'
import { format, isValid, toDate } from 'date-fns'
import '../DatePicker/DatePicker.css'


const RenderDatePicker = ({ name, input, input: { value, onChange } }) => {
    return (
      <DatePicker
        dateFormat="P"
        selected={value && isValid(value) ? toDate(value) : null} // needs to be checked if it is valid date
        name={name}
        onChange={(date) => {
          // On Change, you should use final-form Field Input prop to change the value
          if (isValid(date)) {
            input.onChange(format(new Date(date), "dd-MM-yyyy"));
          } else {
            input.onChange(null);
          }
        }}
      />
    )
  }
  
export default RenderDatePicker

