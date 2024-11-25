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

const AdditionalDashboard = () => {
    const barChartHtmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Average Revenue Per User</title>
    <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
      }
      #chartdiv7 {
        width: 100%;
        height: 400px;
        margin-bottom: 20px;
      }
    </style>
  </head>
  <body>
    <div id="chartdiv7"></div>
    <script>
      am5.ready(function() {
        // Data for bar chart
        var avgRevPerUser = ${JSON.stringify([
          { "minutes": "1200", "revenue": 1200 },
          { "minutes": "Unlimited", "revenue": 1200 },
          { "minutes": "999", "revenue": 900 },
          { "minutes": "900", "revenue": 900 },
          { "minutes": "750", "revenue": 750 },
          { "minutes": "700", "revenue": 750 },
          { "minutes": "550", "revenue": 500 },
          { "minutes": "500", "revenue": 500 },
          { "minutes": "400", "revenue": 400 }
        ])};

        // Color scheme
        var colors = ["#595894", "#D77619", "#9A7A3E", "#E88D2D", "#FF6363"];

        // Create root and chart
        var root7 = am5.Root.new("chartdiv7");
        root7.setThemes([am5themes_Animated.new(root7)]);

        var chart7 = root7.container.children.push(
          am5xy.XYChart.new(root7, {
            layout: root7.verticalLayout
          })
        );

        // Create axes
        var xAxis7 = chart7.xAxes.push(
          am5xy.CategoryAxis.new(root7, {
            categoryField: "minutes",
            renderer: am5xy.AxisRendererX.new(root7, { minGridDistance: 20 })
          })
        );
        xAxis7.data.setAll(avgRevPerUser);

        var yAxis7 = chart7.yAxes.push(
          am5xy.ValueAxis.new(root7, {
            renderer: am5xy.AxisRendererY.new(root7, {})
          })
        );

        // Create bar series
        var barSeries7 = chart7.series.push(
          am5xy.ColumnSeries.new(root7, {
            name: "Revenue",
            xAxis: xAxis7,
            yAxis: yAxis7,
            valueYField: "revenue",
            categoryXField: "minutes",
            tooltip: am5.Tooltip.new(root7, { labelText: "{categoryX}: {valueY}" })
          })
        );
        barSeries7.data.setAll(avgRevPerUser);

        // Apply the color scheme to bars
        barSeries7.columns.template.adapters.add("fill", function(fill, target) {
          const index = avgRevPerUser.indexOf(target.dataItem.dataContext);
          return am5.color(colors[index % colors.length]);
        });

        barSeries7.columns.template.adapters.add("stroke", function(stroke, target) {
          const index = avgRevPerUser.indexOf(target.dataItem.dataContext);
          return am5.color(colors[index % colors.length]);
        });

        // Add legend
        var legend = chart7.children.push(
          am5.Legend.new(root7, {
            centerX: am5.percent(50),
            x: am5.percent(50),
            layout: root7.horizontalLayout
          })
        );

        legend.data.setAll(chart7.series.values);

        // Animate chart appearance
        chart7.appear(1000, 100);
      }); // End of am5.ready
    </script>
  </body>
  </html>
`;

const areaChartHtmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Network Utilization Per Subscription Plan</title>
    <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: #ffffff; /* White background for the chart */
      }
      #chartdiv8 {
        width: 100%;
        height: 500px;
        margin-bottom: 20px;
      }
    </style>
  </head>
  <body>
    <div id="chartdiv8"></div>
    <script>
      am5.ready(function() {
        // Data for area chart
        var networkUtilPerSubPlan = ${JSON.stringify([
          { "date": new Date(2024, 4, 1).getTime(), "5GB": 28.69, "500MB": 24.51, "2GB": 22.01, "5GB_tethering": 24.79 },
          { "date": new Date(2024, 5, 1).getTime(), "5GB": 22.54, "500MB": 24.14, "2GB": 37.29, "5GB_tethering": 30.79 },
          { "date": new Date(2024, 6, 1).getTime(), "5GB": 24.1, "500MB": 21.43, "2GB": 35.88, "5GB_tethering": 30.44 },
          { "date": new Date(2024, 7, 1).getTime(), "5GB": 22.43, "500MB": 22.93, "2GB": 35.69, "5GB_tethering": 29.75 },
          { "date": new Date(2024, 8, 1).getTime(), "5GB": 22.93, "500MB": 22.93, "2GB": 35.23, "5GB_tethering": 29.62 },
          { "date": new Date(2024, 9, 1).getTime(), "5GB": 23.9, "500MB": 23.9, "2GB": 35.53, "5GB_tethering": 30.12 }
        ])};

        // Color scheme
        var colors = ["#595894", "#D77619", "#9A7A3E", "#E88D2D", "#FF6363"];

        // Create root and chart
        var root8 = am5.Root.new("chartdiv8");
        root8.setThemes([am5themes_Animated.new(root8)]);

        var chart8 = root8.container.children.push(
          am5xy.XYChart.new(root8, {
            layout: root8.verticalLayout,
            background: am5.Rectangle.new(root8, {
              fill: am5.color(0xffffff),
              fillOpacity: 1
            })
          })
        );

        // Create axes
        var xAxis8 = chart8.xAxes.push(
          am5xy.DateAxis.new(root8, {
            baseInterval: { timeUnit: "month", count: 1 },
            renderer: am5xy.AxisRendererX.new(root8, {
              minGridDistance: 50
            }),
            tooltip: am5.Tooltip.new(root8, {})
          })
        );

        var yAxis8 = chart8.yAxes.push(
          am5xy.ValueAxis.new(root8, {
            renderer: am5xy.AxisRendererY.new(root8, {
              minGridDistance: 20
            })
          })
        );

        // Create series for each subscription plan
        ["5GB", "500MB", "2GB", "5GB_tethering"].forEach(function(plan, index) {
          var series = chart8.series.push(
            am5xy.SmoothedXLineSeries.new(root8, {
              name: plan,
              xAxis: xAxis8,
              yAxis: yAxis8,
              valueYField: plan,
              valueXField: "date",
              tooltip: am5.Tooltip.new(root8, { labelText: "{name}: {valueY}%" }),
              stacked: true, // Enable stacking for area chart
              strokeWidth: 2, // Set the line thickness
              fill: am5.color(colors[index]),
              stroke: am5.color(colors[index])
            })
          );
          series.data.setAll(networkUtilPerSubPlan);

          // Configure fill for the area under the line
          series.fills.template.setAll({
            fill: am5.color(colors[index]),
            fillOpacity: 0.2,
            visible: true
          });

          // Add bullets to the series
          series.bullets.push(function() {
            return am5.Bullet.new(root8, {
              sprite: am5.Circle.new(root8, {
                radius: 4,
                fill: series.get("fill"),
                stroke: am5.color(0xffffff),
                strokeWidth: 2
              })
            });
          });
        });

        // Add legend
        var legend = chart8.children.push(
          am5.Legend.new(root8, {
            centerX: am5.percent(50),
            x: am5.percent(50),
            layout: root8.horizontalLayout
          })
        );

        legend.data.setAll(chart8.series.values);

        // Animate chart appearance
        chart8.appear(1000, 100);
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
            source={{ html: barChartHtmlContent }} 
        />
        <Text>Total Subscriber Per Service Type</Text>
        <WebView 
            originWhitelist={['*']}
            source={{ html: areaChartHtmlContent }} 
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

export default AdditionalDashboard;





