import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const Chart2 = ({ data }) => {
  const chartData = JSON.stringify(
    data.map((item) => ({
      date: item.date.toISOString().slice(0, 10), // Convert date to string
      "5GB": item["5GB"],
      "500MB": item["500MB"],
      "2GB": item["2GB"],
      "5GB_tethering": item["5GB_tethering"],
    }))
  );

  const chartHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
      <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
      <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
      <style>
        html, body {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }
        #chartdiv {
          width: 100%;
          height: 100%;
        }
      </style>
    </head>
    <body>
      <div id="chartdiv"></div>
      <script>
        am5.ready(function() {
          var root = am5.Root.new("chartdiv");
          root.setThemes([am5themes_Animated.new(root)]);

          var chart = root.container.children.push(
            am5xy.XYChart.new(root, {
              panX: true,
              panY: true,
              wheelX: "panX",
              wheelY: "zoomX",
              pinchZoomX: true
            })
          );

          var xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
              categoryField: "date",
              renderer: am5xy.AxisRendererX.new(root, {})
            })
          );

          var yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
              renderer: am5xy.AxisRendererY.new(root, {})
            })
          );

          ["5GB", "500MB", "2GB", "5GB_tethering"].forEach(plan => {
            var series = chart.series.push(
              am5xy.ColumnSeries.new(root, {
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: plan,
                categoryXField: "date",
                name: plan,
                tooltip: am5.Tooltip.new(root, {
                  labelText: "{name}: {valueY}"
                })
              })
            );
            series.data.setAll(${chartData});
          });

          xAxis.data.setAll(${chartData});
        });
      </script>
    </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ html: chartHtml }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, height: 400, marginVertical: 20 },
  webview: { flex: 1 },
});

export default Chart2;
