import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const Chart = ({ data }) => {
  const chartData = JSON.stringify(data);

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
              categoryField: "label",
              renderer: am5xy.AxisRendererX.new(root, {})
            })
          );

          var yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
              renderer: am5xy.AxisRendererY.new(root, {})
            })
          );

          var series = chart.series.push(
            am5xy.ColumnSeries.new(root, {
              xAxis: xAxis,
              yAxis: yAxis,
              valueYField: "value",
              categoryXField: "label"
            })
          );

          series.data.setAll(${chartData});

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
  container: { flex: 1, height: 300, marginVertical: 20 },
  webview: { flex: 1 },
});

export default Chart;

