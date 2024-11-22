import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const Chart3 = ({ data }) => {
  const chartData = JSON.stringify(
    data.map((item) => ({
      company: item.company,
      "Budget (in millions)": item.budget,
      "Actual (in millions)": item.actual,
    }))
  );

  const chartHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
      <script src="https://cdn.amcharts.com/lib/5/percent.js"></script>
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
            am5percent.PieChart.new(root, {})
          );

          var series = chart.series.push(
            am5percent.PieSeries.new(root, {
              valueField: "value",
              categoryField: "category"
            })
          );

          var legend = chart.children.push(am5.Legend.new(root, {}));

          var data = ${chartData};

          // Transform the data for comparison between Budget and Actual
          var pieData = [];
          data.forEach(item => {
            pieData.push({ category: item.company + " - Budget", value: item["Budget (in millions)"] });
            pieData.push({ category: item.company + " - Actual", value: item["Actual (in millions)"] });
          });

          series.data.setAll(pieData);

          series.labels.template.setAll({
            text: "{category}: {value}M",
            oversizedBehavior: "truncate"
          });

          legend.data.setAll(series.dataItems);
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

export default Chart3;
