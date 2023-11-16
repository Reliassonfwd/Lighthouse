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

import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { registerSuccess, registerFailure } from '../actions/auth';
import '../styles/Register.css';

const Register = ({ setCurrUser, setShow, registerSuccess, registerFailure }) => {
    const formRef = useRef();

    const handleRegister = async (userInfo) => {
        const url = 'http://localhost:3001/signup';
        try {
            const response = await fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(userInfo),
            });

            const data = await response.json();

            if (!response.ok) {
                throw data.error;
            }

            // Actualiza el estado de Redux con el usuario registrado
            registerSuccess(data);
            localStorage.setItem('token', response.headers.get('Authorization'));
            setCurrUser(data);
        } catch (error) {
            console.log('error', error);

            // Maneja el error registrando el fallo en Redux
            registerFailure(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData);
        const userInfo = {
            user: { email: data.email, password: data.password },
        };
        handleRegister(userInfo);
        e.target.reset();
    };

    const handleClick = (e) => {
        e.preventDefault();
        setShow(true);
    };

    return (
        <div>
            <form ref={formRef} onSubmit={handleSubmit}>
                {/* Resto del formulario */}
            </form>
            <br />
            <div>
                Already registered, <a href="#login" onClick={handleClick}>Login</a> here.
            </div>
        </div>
    );
};

export default connect(null, { registerSuccess, registerFailure })(Register);
