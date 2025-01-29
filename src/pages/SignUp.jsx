import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { signupValidationSchema } from '../components/signUpValidationSchema'

const SignUp = () => {
    const handleSubmit=()=>{
        alert("Form Submitted Successfully!")
    }
  return (
    <div className='container' style={{display:'flex',justifyContent:"center",flexDirection:'column', width:'33%', minHeight:'80vh'}}>
        <h1 style={{padding:'10px', textAlign:'center', background:'blue', borderRadius:"5px",fontFamily:'georgia',fontWeight:500}}>Sign UP Form</h1>
        <Formik
            initialValues={{name:'',email:'',password:''}}
            validationSchema={signupValidationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <div className="form-group mt-2">
                    <label>Name:</label>
                    <Field 
                        className='form-control' 
                        type="text" 
                        name="name"
                    />
                    <ErrorMessage name='name' component="div" style={{color:'red'}} />
                </div>
                <div className="form-group mt-2">
                    <label>Email:</label>
                    <Field 
                        className='form-control' 
                        type="text" 
                        name="email"
                    />
                    <ErrorMessage name='email' component="div" style={{color:'red'}} />
                </div>
                <div className="form-group mt-2">
                    <label>Password:</label>
                    <Field 
                        className='form-control' 
                        type="text" 
                        name="password"
                    />
                    <ErrorMessage name='password' component="div" style={{color:'red'}} />
                </div>
                <div className="d-grid mt-4">
                    <button 
                        className='btn btn-primary'
                    >
                        Sign UP
                    </button>
                </div>
            </Form>
        </Formik>
    </div>
  )
}

export default SignUp

