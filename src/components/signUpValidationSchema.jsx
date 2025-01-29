import * as Yup from "yup";

export const signupValidationSchema = Yup.object({
    name:Yup.string()
        .min(2,"Name must be atleast 2 character ")
        .max(50,"Name must be less than 50 char")
        .required("Name is required"),

    email:Yup.string()
        .email("Invalid Email")
        .required("Email is required"),

    password:Yup.string()
    .min(6,"Password must be atleast 6 character ")
    .matches(/[A-Z]/,"Password Must contain atleast one uppercase letter")
    .matches(/[a-z]/,"Password Must contain atleast one lowercase letter")
    .matches(/[1-9]/,"Password Must contain atleast one number")
    .matches(/[!@#$%^&*()_-]/,"Password Must contain atleast one special Char.")
    .required("Password is required")
    
})