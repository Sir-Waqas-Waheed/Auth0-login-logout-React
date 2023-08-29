// import React from 'react';
// import './Navbar.css'; // Import your CSS file for styling
// import { BarChart, Bar, LineChart, Line, PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// function Navbar() {
//   const barChartData = [
//     { name: 'A', value: 10 },
//     { name: 'B', value: 15 },
//     { name: 'C', value: 8 },
//     // Add more data points
//   ];

//   const lineChartData = [
//     { name: 'Jan', value: 20 },
//     { name: 'Feb', value: 30 },
//     { name: 'Mar', value: 25 },
//     // Add more data points
//   ];

//   const pieChartData = [
//     { name: 'Category A', value: 40 },
//     { name: 'Category B', value: 25 },
//     { name: 'Category C', value: 35 },
//   ];

//   const areaChartData = [
//     { x: 'Jan', y: 15 },
//     { x: 'Feb', y: 25 },
//     { x: 'Mar', y: 20 },
//     // Add more data points
//   ];

//   return (
//     <div>
//       <nav className="navbar">
//         {/* ... Navbar content ... */}
//       </nav>

//       <div className="chart-grids">
//         <div className="chart-grid">
//           <h2>Bar Chart</h2>
//           <BarChart width={300} height={200} data={barChartData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="value" fill="#8884d8" />
//           </BarChart>
//         </div>

//         <div className="chart-grid">
//           <h2>Line Chart</h2>
//           <LineChart width={300} height={200} data={lineChartData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="value" stroke="#8884d8" />
//           </LineChart>
//         </div>

//         <div className="chart-grid">
//           <h2>Pie Chart</h2>
//           <PieChart width={300} height={200}>
//             <Pie dataKey="value" data={pieChartData} fill="#8884d8" label />
//             <Legend />
//           </PieChart>
//         </div>

//         <div className="chart-grid">
//           <h2>Area Chart</h2>
//           <AreaChart width={300} height={200} data={areaChartData}>
//             <XAxis dataKey="x" />
//             <YAxis />
//             <CartesianGrid strokeDasharray="3 3" />
//             <Tooltip />
//             <Legend />
//             <Area type="monotone" dataKey="y" fill="#8884d8" />
//           </AreaChart>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React from 'react';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const { logout } = useAuth0();
  return (
    <div className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>


      <li>
        {isAuthenticated && <p className='text-bold color-white'>{user.name}</p>}
      </li>
      {isAuthenticated ? (
        <li>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
        </li>
      ) : (
        <li>
          <button onClick={() => loginWithRedirect()}>Log In</button>;
        </li>
      )} </div>
  )
}


export default Navbar;
