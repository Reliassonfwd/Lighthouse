// import React, { useState } from "react";
// import "../styles/Register.css";
// import logoImg from "../images/lighthouse_logo.png";
// import axios from "axios";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Contraseña no coincide");
//       return;
//     }

//     const newUser = {
//       name,
//       email,
//       password,
//     };

//     try {
//       await axios.post("http://localhost:3001/signup", newUser);
//       setName("");
//       setEmail("");
//       setPassword("");
//       setConfirmPassword("");
//       alert("Usuario creado exitosamente");
//     } catch (err) {
//       console.error(err);
//       alert("Error al crear el usuario");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <img className="Logoimg" src={logoImg} alt="Logo" />
//       <br />
//       <br />
//       <label>
//         Name:
//         <br />
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br />
//       </label>
//       <br />
//       <label>
//         Email:
//         <br />
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//       </label>
//       <br />
//       <label>
//         Password:
//         <br />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//       </label>
//       <br />
//       <label>
//         Confirm Password:
//         <br />
//         <input
//           type="password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//         <br />
//       </label>
//       <br />
//       <br />
//       <button type="submit">Create User</button>
//       <br />
//       <br />
//     </form>
//   );
// };

// export default Register;

import { useRef } from "react"
import "../styles/Register.css";

const Register=({setCurrUser, setShow})=>{
    const formRef = useRef()
    const Register=async (userInfo, setCurrUser)=>{
        const url="http://localhost:3001/signup"
        try{
            const response=await fetch(url, {
                method: 'post',
                headers: {
                    "content-type": 'application/json',
                    "accept": "application/json"
                },
                body: JSON.stringify(userInfo)
            }) 
            const data=await response.json()
            if(!response.ok) throw data.error
            localStorage.setItem('token', response.headers.get("Authorization"))
            setCurrUser(data)
        } catch (error){
            console.log("error", error)
        }
    }
    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData(formRef.current)
        const data=Object.fromEntries(formData)
        const userInfo={
            "user":{ email: data.email, password: data.password }
        }
        Register(userInfo, setCurrUser)
        e.target.reset()
    }
    const handleClick=e=>{
        e.preventDefault()
        setShow(true)
    }
    return(
        <div>
        <form ref={formRef} onSubmit={handleSubmit}>
            Email: <input type="email" name='email' placeholder="email" />
            <br/>
            Password: <input type="password" name='password' placeholder="password" />
            <br/>
            <input type='submit' value="Submit" />
        </form>
        <br />
        <div>Already registered, <a href="#login" onClick={handleClick} >Login</a> here.</div>
    </div>
    )
}
export default Register
