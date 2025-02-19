import React, { StyleSheet, View } from 'react-native';
import { Line, CartesianChart } from "victory-native";


const LineChartComponent = ({ data, color }) => {

    return (
        <View style={{ height: 300 }}>
            <CartesianChart data={data} xKey="day" yKeys={["highTmp"]}>
                {({ points, chartBounds }) => (
                    //👇 pass a PointsArray to the Line component, as well as options.
                    <Line
                        points={points.highTmp}
                        chartBounds={chartBounds}
                        color={color[0]}
                        roundedCorners={{ topLeft: 10, topRight: 10 }}
                        labels={{ "position": "top", "color": color[0] }}
                        strokeWidth={4}
                    />
                )}
            </CartesianChart>
        </View>
    );
};


export default LineChartComponent;
