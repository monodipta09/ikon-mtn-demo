// import react, { userState } from 'react-native';
// import ChartsContainer from "../components/ChartsContainer";
// import BarChartComponent from "../components/BarChart";
// import ChartCardComponent from "../components/CardComponent";
// import LineChartComponent from "../components/LineChart";

// const OverallDashboard = ({ associatedTabName }) => {

//     const getData = () => {
//         const data = Array.from({ length: 31 }, (_, i) => ({
//             day: i,
//             highTmp: 40 + 30 * Math.random(),
//         }));

//         return data;
//     }

//     const pieData = [
//         { value: 12, label: 'test-1', color: '#50429b' },
//         { value: 25, label: 'test-2', color: '#FFCB05' },
//     ]

//     const data = getData(10);

//     const colorScheme = ['#50429b', '#FFCB05'];

//     return (
//         <>
//             <ChartsContainer >
//                 <ChartCardComponent header={"Name"} backgroundColor={"#fff"}>
//                     <BarChartComponent data={data} color={colorScheme}></BarChartComponent>
//                 </ChartCardComponent>
//                 <ChartCardComponent header={"Name"} backgroundColor={"#fff"}>
//                     <LineChartComponent data={data} color={colorScheme}></LineChartComponent>
//                 </ChartCardComponent>
//             </ChartsContainer>
//         </>
//     )
// }

// export default OverallDashboard;


















// import React from 'react'; // Corrected the import
// import ChartsContainer from "../components/ChartsContainer";
// import BarChartComponent from "../components/BarChart";
// import ChartCardComponent from "../components/CardComponent";
// import LineChartComponent from "../components/LineChart";
// import AppHeader from "../components/appHeader";
// import { useNavigation } from '@react-navigation/native'; // Import navigation
// import ChartComponent from './ChartComponent';

// const OverallDashboard = ({ associatedTabName }) => {
//     const navigation = useNavigation(); // Initialize navigation

//     // Function to handle app navigation
//     const navgigateToApp = (appName) => {
//         if (appName === 'MTN') {
//             navigation.navigate('chartdashboards', { appName: appName }); // Navigate to chartdashboards with appName
//         } else {
//             alert(`Feature for ${appName} is not yet implemented.`);
//         }
//     };

//     const getData = () => {
//         const data = Array.from({ length: 31 }, (_, i) => ({
//             day: i,
//             highTmp: 40 + 30 * Math.random(),
//         }));

//         return data;
//     };

//     const pieData = [
//         { value: 12, label: 'test-1', color: '#50429b' },
//         { value: 25, label: 'test-2', color: '#FFCB05' },
//     ];

//     const data = getData(10);

//     const colorScheme = ['#50429b', '#FFCB05'];

//     return (
//         <>
//             {/* Integrate AppHeader */}
//             {/* <ChartsContainer>
//                 <ChartCardComponent header={"Name"} backgroundColor={"#fff"}>
//                     <BarChartComponent data={data} color={colorScheme}></BarChartComponent>
//                 </ChartCardComponent>
//                 <ChartCardComponent header={"Name"} backgroundColor={"#fff"}>
//                     <LineChartComponent data={data} color={colorScheme}></LineChartComponent>
//                 </ChartCardComponent>
//             </ChartsContainer> */}

            
//         </>
//     );
// };

// export default OverallDashboard;





















// import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import ChartComponent from './ChartComponent';
// import { serviceUtilization } from '../utils/chartData';
// import {subscribersPerServiceType} from '../utils/chartData';

// const OverallDashboard = () => {
//   // Static HTML content
//   const chartHtmlContent = `<!DOCTYPE html>
// <html>
// <head>
//   <title>Service Utilization</title>
//   <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
//   <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
//   <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
//   <style>
//     #chartdiv {
//       width: 100%;
//       height: 400px;
//     }
//     body {
//       margin: 0;
//       padding: 0;
//     }
//   </style>
// </head>
// <body>
//   <div id="chartdiv1">
  
//   </div>
//   <div id="chartdiv2">

//     </div>
//   <script>
//     // First chart
//     am5.ready(function() {
//       // Create root element
//       var root = am5.Root.new("chartdiv1");

//       // Set themes
//       root.setThemes([
//         am5themes_Animated.new(root)
//       ]);

//       // Create chart
//       var chart = root.container.children.push(am5xy.XYChart.new(root, {
//         layout: root.verticalLayout
//       }));

//       // Create X-Axis
//       var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
//         categoryField: "month",
//         renderer: am5xy.AxisRendererX.new(root, {
//           minGridDistance: 30
//         })
//       }));

//       // Create Y-Axis
//       var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
//         renderer: am5xy.AxisRendererY.new(root, {})
//       }));

//       // Add data
//       chart.data = {{CHART_DATA}};

//       // Define colors for each line
//       var colors = ["#E74C3C", "#3498DB", "#2ECC71"]; // Red, Blue, Green

//       // Add line series
//       var types = ["text", "voice", "data"];
//       types.forEach((type, index) => {
//         var series = chart.series.push(am5xy.LineSeries.new(root, {
//           name: type,
//           xAxis: xAxis,
//           yAxis: yAxis,
//           valueYField: type,
//           categoryXField: "month",
//           stroke: am5.color(colors[index]),
//           tooltip: am5.Tooltip.new(root, {
//             labelText: "{name}: {valueY}"
//           })
//         }));

//         series.strokes.template.setAll({
//           strokeWidth: 2,
//           stroke: am5.color(colors[index])
//         });

//         series.bullets.push(() => {
//           return am5.Bullet.new(root, {
//             sprite: am5.Circle.new(root, {
//               radius: 5,
//               fill: am5.color(colors[index])
//             })
//           });
//         });

//         series.data.setAll(chart.data);
//       });

//       // Add legend
//       var legend = chart.children.push(am5.Legend.new(root, {
//         centerX: am5.p50,
//         x: am5.p50
//       }));
//       legend.data.setAll(chart.series.values);

//       // Add cursor
//       chart.set("cursor", am5xy.XYCursor.new(root, {}));
//     });



//     // Second chart
//     am5.ready(function () {
//     var root = am5.Root.new("chartdiv2");

//     root.setThemes([
//         am5themes_Animated.new(root)
//     ]);

//     // Add chart heading with left alignment and bottom margin
//     var title = root.container.children.push(am5.Label.new(root, {
//         text: "Total Subscribers Per Service Type", // Chart heading text
//         fontSize: 12, // Adjust font size
//         fontWeight: "bold", // Make it bold
//         textAlign: "left", // Align text to the left
//         x: 0, // Position at the left
//         centerX: 0, // Ensure alignment does not center
//         paddingBottom: 10 // Add margin below the title
//     }));

//     var chart = root.container.children.push(am5xy.XYChart.new(root, {
//         panX: false,
//         panY: false,
//         wheelX: "panX",
//         wheelY: "zoomX",
//         paddingBottom: 50, // Add extra bottom padding to prevent overlap
//         paddingLeft: 10,
//         paddingRight: 10,
//         layout: root.verticalLayout
//     }));

//     // Add scrollbar above the bottom padding
//     chart.set("scrollbarX", am5.Scrollbar.new(root, {
//         orientation: "horizontal",
//         marginBottom: 15 // Add margin between scrollbar and labels
//     }));

//     var xRenderer = am5xy.AxisRendererX.new(root, {
//         minorGridEnabled: true
//     });

//     var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
//         categoryField: "month",
//         renderer: xRenderer,
//         tooltip: am5.Tooltip.new(root, {})
//     }));

//     xRenderer.grid.template.setAll({
//         location: 1
//     });

//     xAxis.data.setAll(data);

//     var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
//         min: 0,
//         renderer: am5xy.AxisRendererY.new(root, {
//             strokeOpacity: 0.1
//         })
//     }));

//     var legend = chart.children.push(am5.Legend.new(root, {
//         centerX: am5.p50,
//         x: am5.p50
//     }));

//     function makeSeries(name, fieldName) {
//         var series = chart.series.push(am5xy.ColumnSeries.new(root, {
//             name: name,
//             stacked: true,
//             xAxis: xAxis,
//             yAxis: yAxis,
//             valueYField: fieldName,
//             categoryXField: "month"
//         }));

//         series.columns.template.setAll({
//             tooltipText: "{name}, {categoryX}: {valueY}",
//             tooltipY: am5.percent(10)
//         });
//         series.data.setAll(data);

//         series.appear();

//         series.bullets.push(function () {
//             return am5.Bullet.new(root, {
//                 sprite: am5.Label.new(root, {
//                     text: "{valueY}",
//                     fill: root.interfaceColors.get("alternativeText"),
//                     centerY: am5.p50,
//                     centerX: am5.p50,
//                     populateText: true
//                 })
//             });
//         });

//         legend.data.push(series);
//     }

//     makeSeries("Fixed", "fixed");
//     makeSeries("Prepaid", "prepaid");
//     makeSeries("Postpaid", "postpaid");

//     chart.appear(1000, 100);
// });
//   </script>
// </body>
// </html>
// `;




//   // Color scheme
//   const colorScheme = ["#E74C3C", "#3498DB", "#2ECC71"]; // Red, Blue, Green

//   return (
//     <SafeAreaView style={styles.container}>
//       <ChartComponent
//         chartHtmlTemplate={chartHtmlContent}
//         chartData={serviceUtilization}
//         chartColors={colorScheme}
//       />
//       {/* <ChartComponent
//       chartHtmlTemplate={secondChart}
//       chartData={subscribersPerServiceType}
//       chartColors={colorScheme}
//       ></ChartComponent> */}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         height: 500, // Set a fixed height in pixels
//         padding: 10, // Optional padding for spacing
//     },
    
// });

// export default OverallDashboard;
































import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const OverallDashboard = () => {
    const chartHtmlContent1 = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Service Utilization</title>
      <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
      <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
      <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }
        #chartdiv1 {
          width: 100%;
          height: 200px;
        }
      </style>
    </head>
    <body>
      <div id="chartdiv1"></div>
      <script>
        am5.ready(function() {
          // Data for first chart
          var serviceUtilization = ${JSON.stringify([
            { 'month': 'Jan', 'text': 0.38, 'voice': 0.33, 'data': 0.29 },
            { 'month': 'Feb', 'text': 0.37, 'voice': 0.32, 'data': 0.30 },
            { 'month': 'Mar', 'text': 0.39, 'voice': 0.34, 'data': 0.31 },
            { 'month': 'Apr', 'text': 0.36, 'voice': 0.32, 'data': 0.28 },
            { 'month': 'May', 'text': 0.38, 'voice': 0.35, 'data': 0.30 },
            { 'month': 'Jun', 'text': 0.39, 'voice': 0.34, 'data': 0.29 },
            { 'month': 'Jul', 'text': 0.37, 'voice': 0.33, 'data': 0.28 },
            { 'month': 'Aug', 'text': 0.36, 'voice': 0.35, 'data': 0.30 },
            { 'month': 'Sep', 'text': 0.38, 'voice': 0.33, 'data': 0.31 },
            { 'month': 'Oct', 'text': 0.39, 'voice': 0.34, 'data': 0.30 },
            { 'month': 'Nov', 'text': 0.37, 'voice': 0.32, 'data': 0.29 },
            { 'month': 'Dec', 'text': 0.36, 'voice': 0.33, 'data': 0.28 }
          ])};

          // First chart logic
          var root1 = am5.Root.new("chartdiv1");
          root1.setThemes([am5themes_Animated.new(root1)]);

          var chart1 = root1.container.children.push(am5xy.XYChart.new(root1, {
            layout: root1.verticalLayout
          }));

          var xAxis1 = chart1.xAxes.push(am5xy.CategoryAxis.new(root1, {
            categoryField: "month",
            renderer: am5xy.AxisRendererX.new(root1, { minGridDistance: 30 })
          }));
          xAxis1.data.setAll(serviceUtilization);

          var yAxis1 = chart1.yAxes.push(am5xy.ValueAxis.new(root1, {
            renderer: am5xy.AxisRendererY.new(root1, {})
          }));

          ["text", "voice", "data"].forEach(type => {
            var series1 = chart1.series.push(am5xy.LineSeries.new(root1, {
              name: type,
              xAxis: xAxis1,
              yAxis: yAxis1,
              valueYField: type,
              categoryXField: "month",
              tooltip: am5.Tooltip.new(root1, { labelText: "{name}: {valueY}" })
            }));
            series1.data.setAll(serviceUtilization);
          });
        }); // End of am5.ready
      </script>
    </body>
    </html>
  `;
  const chartHtmlContent2 = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Service Utilization</title>
    <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: #FFFFFF; /* White background */
      }
      #chartdiv2 {
        width: 100%;
        height: 400px;
        margin-bottom: 20px;
      }
    </style>
  </head>
  <body>
    <div id="chartdiv2"></div>
    <script>
      am5.ready(function() {
        // Data for chart
        var subscribersPerServiceType = ${JSON.stringify([
          { 'month': 'Jan', 'fixed': 570, 'postpaid': 710, 'prepaid': 390 },
          { 'month': 'Feb', 'fixed': 450, 'postpaid': 610, 'prepaid': 610 },
          { 'month': 'Mar', 'fixed': 510, 'postpaid': 670, 'prepaid': 570 },
          { 'month': 'Apr', 'fixed': 590, 'postpaid': 480, 'prepaid': 520 },
          { 'month': 'May', 'fixed': 530, 'postpaid': 530, 'prepaid': 530 },
          { 'month': 'Jun', 'fixed': 540, 'postpaid': 630, 'prepaid': 620 },
          { 'month': 'Jul', 'fixed': 670, 'postpaid': 480, 'prepaid': 470 },
          { 'month': 'Aug', 'fixed': 240, 'postpaid': 240, 'prepaid': 0 },
          { 'month': 'Sep', 'fixed': 240, 'postpaid': 240, 'prepaid': 0 },
          { 'month': 'Oct', 'fixed': 170, 'postpaid': 300, 'prepaid': 0 },
          { 'month': 'Nov', 'fixed': 300, 'postpaid': 300, 'prepaid': 0 },
          { 'month': 'Dec', 'fixed': 340, 'postpaid': 340, 'prepaid': 0 }
        ])};

        // Color scheme
        var colors = ["#3914C0", "#9A26C1", "#FF6363"];

        // Create root and chart
        var root2 = am5.Root.new("chartdiv2");
        root2.setThemes([am5themes_Animated.new(root2)]);

        var chart2 = root2.container.children.push(
          am5xy.XYChart.new(root2, {
            layout: root2.verticalLayout
          })
        );

        // Create axes
        var xAxis2 = chart2.xAxes.push(
          am5xy.CategoryAxis.new(root2, {
            categoryField: "month",
            renderer: am5xy.AxisRendererX.new(root2, { minGridDistance: 30 })
          })
        );
        xAxis2.data.setAll(subscribersPerServiceType);

        var yAxis2 = chart2.yAxes.push(
          am5xy.ValueAxis.new(root2, {
            renderer: am5xy.AxisRendererY.new(root2, {})
          })
        );

        // Create stacked column series for each data type
        ["fixed", "prepaid", "postpaid"].forEach((type, index) => {
          var series2 = chart2.series.push(
            am5xy.ColumnSeries.new(root2, {
              name: type,
              stacked: true, // Stacked column series
              xAxis: xAxis2,
              yAxis: yAxis2,
              valueYField: type,
              categoryXField: "month",
              tooltip: am5.Tooltip.new(root2, { labelText: "{name}: {valueY}" })
            })
          );
          series2.data.setAll(subscribersPerServiceType);

          // Apply color scheme
          series2.columns.template.setAll({
            fill: am5.color(colors[index % colors.length]),
            stroke: am5.color(colors[index % colors.length])
          });
        });

        // Add legend
        var legend = chart2.children.push(
          am5.Legend.new(root2, {
            centerX: am5.percent(50),
            x: am5.percent(50),
            layout: root2.horizontalLayout
          })
        );

        legend.data.setAll(chart2.series.values);

        // Animate chart appearance
        chart2.appear(1000, 100);
      });
    </script>
  </body>
  </html>
`;



const pieChartHtmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Pie Chart - Data Plan Purchased</title>
  <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
  <script src="https://cdn.amcharts.com/lib/5/percent.js"></script>
  <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }
    #chartdiv3 {
      width: 100%;
      height: 300px; /* Adjusted height for better visuals */
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <div id="chartdiv3"></div>
  <script>
    am5.ready(function() {
      // Data for pie chart
      var dataPlanPurchased = ${JSON.stringify([
        { 'plan': '5 GB', 'percentage': 42.37 },
        { 'plan': '5 GB with tethering', 'percentage': 32.63 },
        { 'plan': '2 GB', 'percentage': 21.46 },
        { 'plan': '500 MB', 'percentage': 3.53 }
      ])};

      // Color scheme
      var colors = ["#FF6363", "#9A26C1", "#3914C0", "#FFFFFF"];

      // Create root and chart
      var root3 = am5.Root.new("chartdiv3");
      root3.setThemes([am5themes_Animated.new(root3)]);

      var chart3 = root3.container.children.push(
        am5percent.PieChart.new(root3, {
          layout: root3.verticalLayout
        })
      );

      // Create series
      var series3 = chart3.series.push(
        am5percent.PieSeries.new(root3, {
          valueField: "percentage",
          categoryField: "plan",
          tooltip: am5.Tooltip.new(root3, { labelText: "{category}: {value}%" })
        })
      );

      series3.data.setAll(dataPlanPurchased);

      // Apply color scheme
      series3.slices.template.adapters.add("fill", function (fill, target) {
        return am5.color(colors[target.dataItem.index % colors.length]);
      });

      series3.slices.template.adapters.add("stroke", function (stroke, target) {
        return am5.color("#FFFFFF"); // Add white stroke for contrast
      });

      series3.slices.template.setAll({
        strokeWidth: 2
      });

      // Animate chart
      series3.appear(1000, 100);
    }); // End of am5.ready
  </script>
</body>
</html>
`;





  return (
    <ScrollView>
        <SafeAreaView style={styles.container}>
        <Text>Service Utilization</Text>
        <WebView 
            originWhitelist={['*']}
            source={{ html: chartHtmlContent1 }} 
        />
        <Text>Total Subscriber Per Service Type</Text>
        <WebView 
            originWhitelist={['*']}
            source={{ html: chartHtmlContent2 }} 
        />
        <Text>Data Plan Purchased</Text>
        <WebView 
            originWhitelist={['*']}
            source={{ html: pieChartHtmlContent }} 
        />
        </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: 500,
    padding: 10
  },
});

export default OverallDashboard;





