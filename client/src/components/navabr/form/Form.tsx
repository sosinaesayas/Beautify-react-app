import React from 'react'
// import {useForm} from "react-hook-form"
// import * as yup from "yup"
// import {yupResolver} from "@hookform/resolvers/yup"
import "./Form.css"


const Form = () => {
 

// const schema = yup.object().shape({
//      fullName : yup.string().required(),
//      phoneNumber: yup.number().integer().positive().min(9).max(17).required(),
//      email: yup.string().email().required(),
//      subject: yup.string(),
//      message: yup.string().required(),
//     })
//     const {register, handleSubmit} = useForm({
//         resolver: yupResolver(schema),
//     });
//     const onSubmit = (data: any) => {
//         console.log(data);
//     }
  return (
    <div>
        
        <form 
        // onSubmit={handleSubmit(onSubmit)}
        >
  <div className="mb-3">
  <input placeholder='Name' type="text" className="form-control" id="name"
  //  {...register('fullName')}
   ></input>
  </div>

  <div className="mb-3">
    <input type="number" className="form-control" id="phone-number" placeholder='Phone Number' 
    // {...register('phoneNumber')}
    ></input>
  </div>

  <div className="mb-3">
    <input type="email" className="form-control" id="email" placeholder='Email'
    //  {...register('email')}
     >

     </input>
  </div>

  <div className="mb-3">
    <input type="text" className="form-control" id="subject" placeholder='Subject' 
    // {...register('subject')}
    ></input>
  </div>
  
  <div className="mb-3">
    <textarea rows={4} className="form-control" id="message" placeholder='Message' 
    // {...register('message')}
     ></textarea>
  </div>

  <button id='button' type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )


 }


export default Form;
