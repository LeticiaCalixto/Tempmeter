// import React from "react";
// import ApexCharts from "apexcharts";
// import { ApexOptions } from "apexcharts";
// import Chart from 'react-apexcharts';

// const RadialChart = () => {

//   const options: ApexOptions = {
//     chart: {
//       height: 280,
//       type: "radialBar",
//     },
//     series: [67],
//     colors: ["#42BFDD"],
//     plotOptions: {
//       radialBar: {
//         startAngle: -90,
//         endAngle: 90,
//         track: {
//           background: "#333",
//           startAngle: -90,
//           endAngle: 90,
//         },
//         dataLabels: {
//           name: {
//             show: false,
//           },
//           value: {
//             fontSize: "30px",
//             show: true,
//           },
//         },
//       },
//     },
//     fill: {
//       type: "gradient",
//       gradient: {
//         shade: "dark",
//         type: "horizontal",
//         gradientToColors: ["#87D4F9"],
//         stops: [0, 100],
//       },
//     },
//     stroke: {
//       lineCap: "butt",
//     },
//     labels: ["Progress"],
//   };

//   // new ApexCharts(document.querySelector("#chart"), options).render();

//   return (
//     <Chart 
//       options={options}
//       series={options.series}
//       type="radialBar"
//       className="radial-chart"
//       height={280} 
//     />
//   )

// }

// export default RadialChart;