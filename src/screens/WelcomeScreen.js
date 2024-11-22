// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const WelcomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to the Dashboard!</Text>
//       <Text style={styles.subtitle}>
//         Explore insights and analyze key metrics by navigating to the dashboards below.
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f9f9f9',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#555',
//     textAlign: 'center',
//     paddingHorizontal: 20,
//   },
// });

// export default WelcomeScreen;



import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
// import { SvgUri } from 'react-native-svg';

// Get the screen width and height
const { width, height } = Dimensions.get('window');

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>Welcome to IKON Orchestration Platform</Text>

      {/* Description */}
      <Text style={styles.description}>
        The only true OpenAI-enabled Orchestration Platform that will solve all your challenges and successfully implement your functional and technical roadmap.
      </Text>

      {/* Pie Chart with SVG Image */}
      {/* <View style={styles.pieChartContainer}>
        <SvgUri
          uri='../../assets/landingPageChart.jpg' // Replace with your SVG file URI or local asset path
          width={width * 0.4} // 40% of the screen width
          height={width * 0.4} // 40% of the screen width
        />
      </View> */}

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subscribeButton}>
          <Text style={styles.subscribeButtonText}>Subscribe the Apps</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.05, // 5% of the screen width
  },
  headerText: {
    fontSize: width * 0.06, // 6% of the screen width
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  description: {
    fontSize: width * 0.04, // 4% of the screen width
    color: '#555',
    textAlign: 'center',
    marginBottom: height * 0.03, // 3% of the screen height
    lineHeight: width * 0.05, // 5% of the screen width
  },
  pieChartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.05, // 5% of the screen height
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: width * 0.05, // 5% of the screen width
  },
  settingsButton: {
    flex: 1,
    backgroundColor: '#F4F9FD',
    paddingVertical: height * 0.02, // 2% of the screen height
    borderRadius: 60,
    alignItems: 'center',
    marginRight: width * 0.02, // 2% of the screen width
  },
  settingsButtonText: {
    color: '#000',
    fontSize: width * 0.04, // 4% of the screen width
    fontWeight: '500',
  },
  subscribeButton: {
    flex: 2,
    backgroundColor: '#FFCB05',
    paddingVertical: height * 0.02, // 2% of the screen height
    borderRadius: 60,
    alignItems: 'center',
  },
  subscribeButtonText: {
    color: 'black',
    fontSize: width * 0.04, // 4% of the screen width
    fontWeight: '500',
  },
});

export default WelcomeScreen;
