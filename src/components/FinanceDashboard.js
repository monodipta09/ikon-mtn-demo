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

const FinanceDashboard = () => {
    const columnLineChartHtmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Gross vs Net Users</title>
    <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
      }
      #chartdiv4 {
        width: 100%;
        height: 400px;
        margin-bottom: 20px;
      }
    </style>
  </head>
  <body>
    <div id="chartdiv4"></div>
    <script>
      am5.ready(function() {
        // Data for chart
        var grossVsNetUsers = ${JSON.stringify([
          { 'month': 'Jan 2024', 'gross': 20, 'net': 15 },
          { 'month': 'Feb 2024', 'gross': 50, 'net': 45 },
          { 'month': 'Mar 2024', 'gross': 120, 'net': 100 },
          { 'month': 'Apr 2024', 'gross': 300, 'net': 280 },
          { 'month': 'May 2024', 'gross': 400, 'net': 350 },
          { 'month': 'Jun 2024', 'gross': 630, 'net': 630 },
          { 'month': 'Jul 2024', 'gross': 1310, 'net': 1310 },
          { 'month': 'Aug 2024', 'gross': 1190, 'net': 1190 },
          { 'month': 'Sep 2024', 'gross': 1510, 'net': 1510 },
          { 'month': 'Oct 2024', 'gross': 1260, 'net': 1260 },
          { 'month': 'Nov 2024', 'gross': 1780, 'net': 1510 },
          { 'month': 'Dec 2024', 'gross': 1660, 'net': 156 }
        ])};

        // Create root and chart
        var root4 = am5.Root.new("chartdiv4");
        root4.setThemes([am5themes_Animated.new(root4)]);

        var chart4 = root4.container.children.push(
          am5xy.XYChart.new(root4, {
            layout: root4.verticalLayout
          })
        );

        // Create axes
        var xAxis4 = chart4.xAxes.push(
          am5xy.CategoryAxis.new(root4, {
            categoryField: "month",
            renderer: am5xy.AxisRendererX.new(root4, { minGridDistance: 30 })
          })
        );
        xAxis4.data.setAll(grossVsNetUsers);

        var yAxis4 = chart4.yAxes.push(
          am5xy.ValueAxis.new(root4, {
            renderer: am5xy.AxisRendererY.new(root4, {})
          })
        );

        // Add Gross column series
        var columnSeries = chart4.series.push(
          am5xy.ColumnSeries.new(root4, {
            name: "Gross",
            xAxis: xAxis4,
            yAxis: yAxis4,
            valueYField: "gross",
            categoryXField: "month",
            tooltip: am5.Tooltip.new(root4, { labelText: "{name}: {valueY}" })
          })
        );
        columnSeries.data.setAll(grossVsNetUsers);

        // Add Net line series
        var lineSeries = chart4.series.push(
          am5xy.LineSeries.new(root4, {
            name: "Net",
            xAxis: xAxis4,
            yAxis: yAxis4,
            valueYField: "net",
            categoryXField: "month",
            tooltip: am5.Tooltip.new(root4, { labelText: "{name}: {valueY}" }),
            stroke: am5.color(0xff0000),
            fill: am5.color(0xff0000)
          })
        );
        lineSeries.data.setAll(grossVsNetUsers);

        // Add bullets to the line series
        lineSeries.bullets.push(function() {
          return am5.Bullet.new(root4, {
            sprite: am5.Circle.new(root4, {
              radius: 5,
              fill: lineSeries.get("fill")
            })
          });
        });

        // Add legend
        var legend = chart4.children.push(
          am5.Legend.new(root4, {
            centerX: am5.percent(50),
            x: am5.percent(50),
            layout: root4.horizontalLayout
          })
        );

        legend.data.setAll(chart4.series.values);

        // Animate series appearance
        chart4.appear(1000, 100);
      }); // End of am5.ready
    </script>
  </body>
  </html>
`;


const rowChartHtmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Actual vs Budget</title>
  <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
  <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
  <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }
    #chartdiv5 {
      width: 100%;
      height: 500px;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <div id="chartdiv5"></div>
  <script>
    am5.ready(function() {
      // Data for row chart
      var actualVsBudget = ${JSON.stringify([
        { "company": "Company 1", "budget": 3.0, "actual": 2.5 },
        { "company": "Company 2", "budget": 3.5, "actual": 2.7 },
        { "company": "Company 3", "budget": 3.0, "actual": 2.8 },
        { "company": "Company 4", "budget": 3.7, "actual": 3.5 },
        { "company": "Company 5", "budget": 2.8, "actual": 2.2 },
        { "company": "Company 6", "budget": 2.9, "actual": 2.7 },
        { "company": "Company 7", "budget": 2.3, "actual": 2.9 },
        { "company": "Company 8", "budget": 2.7, "actual": 2.6 },
        { "company": "Company 9", "budget": 2.8, "actual": 2.1 },
        { "company": "Company 10", "budget": 2.9, "actual": 2.7 },
        { "company": "Company 11", "budget": 2.7, "actual": 2.2 }
      ])};

      // Create root and chart
      var root5 = am5.Root.new("chartdiv5");
      root5.setThemes([am5themes_Animated.new(root5)]);

      var chart5 = root5.container.children.push(
        am5xy.XYChart.new(root5, {
          panX: true,
          panY: false,
          layout: root5.verticalLayout
        })
      );

      // Create axes
      var yAxis5 = chart5.yAxes.push(
        am5xy.CategoryAxis.new(root5, {
          categoryField: "company",
          renderer: am5xy.AxisRendererY.new(root5, {
            inversed: true,
            minGridDistance: 20
          })
        })
      );
      yAxis5.data.setAll(actualVsBudget);

      var xAxis5 = chart5.xAxes.push(
        am5xy.ValueAxis.new(root5, {
          renderer: am5xy.AxisRendererX.new(root5, {})
        })
      );

      // Add Budget series
      var budgetSeries = chart5.series.push(
        am5xy.ColumnSeries.new(root5, {
          name: "Budget",
          xAxis: xAxis5,
          yAxis: yAxis5,
          valueXField: "budget",
          categoryYField: "company",
          tooltip: am5.Tooltip.new(root5, { labelText: "{name}: {valueX}" })
        })
      );
      budgetSeries.data.setAll(actualVsBudget);

      // Add Actual series
      var actualSeries = chart5.series.push(
        am5xy.ColumnSeries.new(root5, {
          name: "Actual",
          xAxis: xAxis5,
          yAxis: yAxis5,
          valueXField: "actual",
          categoryYField: "company",
          tooltip: am5.Tooltip.new(root5, { labelText: "{name}: {valueX}" }),
          fill: am5.color(0xff0000),
          stroke: am5.color(0xff0000)
        })
      );
      actualSeries.data.setAll(actualVsBudget);

      // Add legend
      var legend = chart5.children.push(
        am5.Legend.new(root5, {
          centerX: am5.percent(50),
          x: am5.percent(50),
          layout: root5.horizontalLayout
        })
      );

      legend.data.setAll(chart5.series.values);

      // Animate chart
      chart5.appear(1000, 100);
    }); // End of am5.ready
  </script>
</body>
</html>
`;


const lineChartHtmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>CAPEX to Sales Ratio</title>
    <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
      }
      #chartdiv6 {
        width: 100%;
        height: 400px;
        margin-bottom: 20px;
      }
    </style>
  </head>
  <body>
    <div id="chartdiv6"></div>
    <script>
      am5.ready(function() {
        // Data for line chart
        var capexToSales = ${JSON.stringify([
          { 'month': 'May 2024', 'CAPEXToSalesRatio': 5.00 },
          { 'month': 'Jun 2024', 'CAPEXToSalesRatio': 24.46 },
          { 'month': 'Jul 2024', 'CAPEXToSalesRatio': 15.18 },
          { 'month': 'Aug 2024', 'CAPEXToSalesRatio': 19.52 },
          { 'month': 'Sep 2024', 'CAPEXToSalesRatio': 17.70 },
          { 'month': 'Oct 2024', 'CAPEXToSalesRatio': 15.03 }
        ])};

        // Create root and chart
        var root6 = am5.Root.new("chartdiv6");
        root6.setThemes([am5themes_Animated.new(root6)]);

        var chart6 = root6.container.children.push(
          am5xy.XYChart.new(root6, {
            layout: root6.verticalLayout
          })
        );

        // Create axes
        var xAxis6 = chart6.xAxes.push(
          am5xy.CategoryAxis.new(root6, {
            categoryField: "month",
            renderer: am5xy.AxisRendererX.new(root6, { minGridDistance: 30 })
          })
        );
        xAxis6.data.setAll(capexToSales);

        var yAxis6 = chart6.yAxes.push(
          am5xy.ValueAxis.new(root6, {
            renderer: am5xy.AxisRendererY.new(root6, {})
          })
        );

        // Create line series
        var lineSeries6 = chart6.series.push(
          am5xy.LineSeries.new(root6, {
            name: "CAPEX to Sales Ratio",
            xAxis: xAxis6,
            yAxis: yAxis6,
            valueYField: "CAPEXToSalesRatio",
            categoryXField: "month",
            tooltip: am5.Tooltip.new(root6, { labelText: "{name}: {valueY}%" })
          })
        );
        lineSeries6.data.setAll(capexToSales);

        // Add bullets to line series
        lineSeries6.bullets.push(function() {
          return am5.Bullet.new(root6, {
            sprite: am5.Circle.new(root6, {
              radius: 5,
              fill: lineSeries6.get("fill")
            })
          });
        });

        // Add legend
        var legend = chart6.children.push(
          am5.Legend.new(root6, {
            centerX: am5.percent(50),
            x: am5.percent(50),
            layout: root6.horizontalLayout
          })
        );

        legend.data.setAll(chart6.series.values);

        // Animate chart appearance
        chart6.appear(1000, 100);
      }); // End of am5.ready
    </script>
  </body>
  </html>
`;




  return (
    <ScrollView>
        <SafeAreaView style={styles.container}>
        <Text>Gross vs Net Subscriber Addition</Text>
        <WebView 
            originWhitelist={['*']}
            source={{ html: columnLineChartHtmlContent }} 
        />
        <Text>Actual vs Budget For The Current Year</Text>
        <WebView 
            originWhitelist={['*']}
            source={{ html: rowChartHtmlContent }} 
        />
        <Text>Capex To Sales Ratio</Text>
        <WebView 
            originWhitelist={['*']}
            source={{ html: lineChartHtmlContent }} 
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

export default FinanceDashboard;





