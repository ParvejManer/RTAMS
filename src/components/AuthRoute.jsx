// import React from 'react'
// import { Navigate } from 'react-router-dom'

// const AuthRoute = ({children, roles}) => {
//     const token = localStorage.getItem("token");
//     const userRole = localStorage.getItem("role");

//     if(!token){
//         return <Navigate to='/signin' />;
//     }

//     if(roles && roles.indexOf(userRole) === -1){
//         return <Navigate to='/' />;
//     }

//     return children;
// }

// export default AuthRoute;