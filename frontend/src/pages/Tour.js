import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchDataSuccess } from "../actions/data";
import "../styles/Home.css"

const Tour = ({ fetchDataSuccess, data }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realizar la lógica para obtener datos desde tu API
        const response = await fetch("http://localhost:3001/tourData", {
          method: "get",
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const responseData = await response.json();

        if (!response.ok) {
          throw responseData.error;
        }

        // Actualizar el estado con los datos obtenidos
        fetchDataSuccess(responseData);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [fetchDataSuccess]);

  return (
    <div>
      {/* Renderiza los datos obtenidos según tu lógica */}
      {data.map((item) => (
        <div key={item.id}>{item.content}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data.data,
});

export default connect(mapStateToProps, { fetchDataSuccess })(Tour);
