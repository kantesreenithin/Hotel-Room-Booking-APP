import React ,{useState,useEffect} from "react";

// import { Link } from 'react-router-dom'
import Loader from "../display/Loader";
import Error from "../display/Error";
import Success from "../display/Success";
import "./Auth.css";
import axios from "axios";
const Register = () => {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const [success, setsuccess] = useState('');
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [cpassword,setcpassword]=useState('')
  async function  register(){
    if(password===cpassword){
      const user={
        name,
        email,
        password,
        cpassword
      }
      console.log(user)
      try{
        setloading(true)
        const result=await axios.post('/api/users/register',user).data
        setloading(false)
        setsuccess(true)

        setname('')
        setemail('')
        setpassword('')
        setcpassword('')
      }catch(error){
        console.log(error)
        setloading(false)
        seterror(true)
      }
    }
    else{
      alert("password not matched")
    }
 
  }
  return (
    <div>
    {loading && (<Loader/>)}
    {error &&  <Error/>}
    
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
        {success && <Success message='Registration sucess'/>}
          <div className="bs">
            <h1>Register</h1>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              value={name}
              onChange={(e)=>{setname(e.target.value)}}
            ></input>
            <input
              type="text"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e)=>{setemail(e.target.value)}}
            ></input>
            <input
              type="text"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e)=>{setpassword(e.target.value)}}
            ></input><input
            type="text"
            className="form-control"
            placeholder="confirm password"
            value={cpassword}
              onChange={(e)=>{setcpassword(e.target.value)}}
          ></input>
          <button className="btn btn-primary" onClick={register}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

// const {
//   register,
//   handleSubmit,
//   formState: { errors },
// } = useForm();
// const formSubmit = (data) => {
//   console.log(data);
//   try{
//     const result=axios.post('/api/users/register',data).data;
//   }
//   catch(error){
//     console.log(error)
//   }

// };

// return (
//   <div className="sign-up">
//     <h1>Sign Up</h1>

//     <form onSubmit={handleSubmit(formSubmit)}>
//       <div className="input-group">
//       <label>Username</label>
//       <input
//       type="text"
//       name="username"
//       placeholder="Username"
//       {...register("username", {
//         required: true,
//         validate: {
//           matchPattern: (value) =>
//             /[A-Za-z]+/.test(
//               value
//             ),
//         },

//       })}
//     />
//     {errors.username?.type === "required" && (
//       <p className="errorMsg">username is required.</p>
//     )}
//     {errors.username?.type === "matchPattern" && (
//       <p className="errorMsg">
//         uusername should start with only alphabetic characters
//       </p>
//     )}
//         <label>PhoneNumber</label>
//         <input
//           type="number"
//           name="phoneNumber"
//           placeholder="phone number"
//           {...register("phoneNumber")}
//         />
//         <label>Email</label>
//         <input
//           name="email"
//           placeholder="Email"
//           {...register("email", {
//             required: "Email is required.",
//             pattern: {
//               value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
//               message: "Email is not valid.",
//             },
//           })}
//         />
//         {errors.email && <p className="errorMsg">{errors.email.message}</p>}
//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           {...register("password", {
//             required: true,
//             validate: {
//                 checkLength: (value) => value.length >= 6,
//                 matchPattern: (value) =>
//                 /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
//                     value
//                 )
//             }
//         })}
//         />
//         {errors.password?.type === "required" && (
//           <p className="errorMsg">Password is required.</p>
//       )}
//       {errors.password?.type === "checkLength" && (
//           <p className="errorMsg">
//             Password should be at-least 6 characters.
//           </p>
//       )}
//       {errors.password?.type === "matchPattern" && (
//           <p className="errorMsg">
//             Password should contain at least one uppercase letter, lowercase
//       letter, digit, and special symbol.
//           </p>
//       )}
//         <button type="submit">Register Now</button>
//       </div>
//     </form>
//   </div>
// );
