import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const ChartComponent = ({ chartHtmlTemplate, chartData, chartColors }) => {
  // Generate dynamic HTML by injecting the data and colors
  const dynamicHtml = chartHtmlTemplate
    .replace('{{CHART_DATA}}', JSON.stringify(chartData))
    .replace('{{CHART_COLORS}}', JSON.stringify(chartColors));

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ html: dynamicHtml }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default ChartComponent;
