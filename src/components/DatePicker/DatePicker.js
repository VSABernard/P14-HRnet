// import React from 'react'
// import DatePicker from 'react-datepicker'
// import { format, isValid, toDate } from 'date-fns'
// import "react-datepicker/dist/react-datepicker.css"
// import '../DatePicker/DatePicker.css'


// const RenderDatePicker = ({ input, input: { value, onChange } }) => {

//     return (
//       <DatePicker
//         dateFormat="dd/MM/yyyy"
//         selected={value && isValid(value) ? toDate(value) : null} // needs to be checked if it is valid date
       
//         onChange={(date) => {
//           // On Change, you should use final-form Field Input prop to change the value
//           if (isValid(date)) {
//             input.onChange(format(new Date(date), "dd-MM-yyyy"))
//           } else {
//             input.onChange(null)
//           }
//         }}
//       />
//     )
//   }
  
// export default RenderDatePicker


