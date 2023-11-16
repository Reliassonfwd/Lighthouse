// import React, { useState } from "react";
// import "../styles/Login.css";
// import logoImg from "../images/lighthouse_logo.png";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "email") {
//       setEmail(value);
//     } else if (name === "password") {
//       setPassword(value);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch("http:localhost:3000/v1/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     if (response.ok) {
//       // Inicio de sesión exitoso, redirigir al usuario a otra página
//       window.location.href = "/Tour";
//     } else {
//       // Error en el inicio de sesión, mostrar una alerta
//       alert("Usuario o contraseña incorrectos");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <img className="Logoimg" src={logoImg} alt="Logo" />
//       <br />
//       <br />
//       <label>
//         Email:
//         <br />
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <br />
//       <br />
//       <label>
//         Password:
//         <br />
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <br />
//       <br />
//       <br />
//       <button type="submit">Login</button>
//       <br />
//       <br />
//     </form>
//   );
// };

// export default Login;

import React, { useRef } from "react";
import { connect } from "react-redux";
import { loginSuccess } from "../actions/auth";
import { fetchDataSuccess } from "../actions/data";
import "../styles/Login.css";

const Login = ({ loginSuccess, fetchDataSuccess }) => {
  const formRef = useRef();

  const login = async (userInfo) => {
    try {
      // Realizar la lógica de autenticación con tu API
      const response = await fetch("http://localhost:3001/login", {
        method: "post",
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify(userInfo)
      });

      const data = await response.json();

      if (!response.ok) {
        throw data.error;
      }

      // Almacenar el token y actualizar el estado de autenticación
      localStorage.setItem("token", response.headers.get("Authorization"));
      loginSuccess(data);

      // Ejemplo de cómo cargar datos después de la autenticación
      const fetchDataResponse = await fetch("http://localhost:3001/v1", {
        method: "get",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const fetchData = await fetchDataResponse.json();

      if (!fetchDataResponse.ok) {
        throw fetchData.error;
      }

      // Actualizar el estado con los datos obtenidos
      fetchDataSuccess(fetchData);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      "user": { email: data.email, password: data.password }
    };
    login(userInfo);
    e.target.reset();
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name='email' placeholder="email" />
        <br />
        Password: <input type="password" name='password' placeholder="password" />
        <br />
        <input type='submit' value="Login" />
      </form>
      <br />
      <div>Not registered yet, <a href="#signup">Signup</a> </div>
    </div>
  );
}

export default connect(null, { loginSuccess, fetchDataSuccess })(Login);
