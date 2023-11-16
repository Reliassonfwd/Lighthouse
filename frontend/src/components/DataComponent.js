// import React, { useState, useEffect } from "react";

// const DataComponent = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:3001/api/v1");
//         if (!response.ok) {
//           throw new Error("Error fetching data");
//         }

//         const data = await response.json();
//         setData(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       {data.map((item) => (
//         <div key={item.id}>{item.name}</div>
//       ))}
//     </div>
//   );
// };

// export default DataComponent;
