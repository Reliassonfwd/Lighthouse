import React from "react";
import { connect } from "react-redux";
import { logoutSuccess } from "../actions/auth";


const Logout = ({ logoutSuccess }) => {
    const logout = async () => {
        try {
            // Realizar la lógica de cierre de sesión con tu API
            const response = await fetch("http://localhost:3001/logout", {
                method: "delete",
                headers: {
                    "content-type": "application/json",
                    "authorization": localStorage.getItem("token"),
                },
            });

            const data = await response.json();

            if (!response.ok) {
                throw data.error;
            }

            // Eliminar el token y actualizar el estado de autenticación
            localStorage.removeItem("token");
            logoutSuccess();
        } catch (error) {
            console.log("error", error);
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        logout();
    };

    return (
        <div>
            <button onClick={handleClick}>Logout</button>
        </div>
    );
};

export default connect(null, { logoutSuccess })(Logout);
