import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const D1Chart1 = ({ data }) => {
  const chartData = JSON.stringify(
    data.map((item) => ({
      minutes: item.minutes,
      revenue: item.revenue,
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

          // Create XY chart
          var chart = root.container.children.push(
            am5xy.XYChart.new(root, {
              panX: true,
              panY: false,
              wheelX: "panX",
              wheelY: "zoomX"
            })
          );

          // Create Y-axis (categories)
          var yAxis = chart.yAxes.push(
            am5xy.CategoryAxis.new(root, {
              categoryField: "minutes",
              renderer: am5xy.AxisRendererY.new(root, {
                minGridDistance: 20
              })
            })
          );

          // Create X-axis (values)
          var xAxis = chart.xAxes.push(
            am5xy.ValueAxis.new(root, {
              renderer: am5xy.AxisRendererX.new(root, {}),
              extraMin: 0.1,
              extraMax: 0.1,
            })
          );

          // Create series
          var series = chart.series.push(
            am5xy.ColumnSeries.new(root, {
              xAxis: xAxis,
              yAxis: yAxis,
              valueXField: "revenue",
              categoryYField: "minutes",
              tooltip: am5.Tooltip.new(root, {
                labelText: "{categoryY}: {valueX}"
              })
            })
          );

          // Set data
          var data = ${chartData};
          series.data.setAll(data);
          yAxis.data.setAll(data);
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

export default D1Chart1;
