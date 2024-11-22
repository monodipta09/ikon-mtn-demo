import React, { StyleSheet, View } from 'react-native';
import { Bar, CartesianChart } from "victory-native";


const BarChartComponent = ({ data, color }) => {

    return (
        <View style={{ height: 300 }}>
            <CartesianChart data={data} xKey="day" yKeys={["highTmp"]}>
                {({ points, chartBounds }) => (
                    //👇 pass a PointsArray to the Line component, as well as options.
                    <Bar
                        points={points.highTmp}
                        chartBounds={chartBounds}
                        color={color[0]}
                        roundedCorners={{ topLeft: 10, topRight: 10 }}
                        labels={{ "position": "top", "color": color[0] }}
                    />
                )}
            </CartesianChart>
        </View>
    );
};


export default BarChartComponent;
