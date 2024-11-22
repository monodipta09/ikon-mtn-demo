import react, { userState } from 'react-native';
import ChartsContainer from "../components/ChartsContainer";
import BarChartComponent from "../components/BarChart";
import ChartCardComponent from "../components/CardComponent";
import LineChartComponent from "../components/LineChart";

const OverallDashboard = ({ associatedTabName }) => {

    const getData = () => {
        const data = Array.from({ length: 31 }, (_, i) => ({
            day: i,
            highTmp: 40 + 30 * Math.random(),
        }));

        return data;
    }

    const pieData = [
        { value: 12, label: 'test-1', color: '#50429b' },
        { value: 25, label: 'test-2', color: '#FFCB05' },
    ]

    const data = getData(10);

    const colorScheme = ['#50429b', '#FFCB05'];

    return (
        <>
            <ChartsContainer >
                <ChartCardComponent header={"Name"} backgroundColor={"#fff"}>
                    <BarChartComponent data={data} color={colorScheme}></BarChartComponent>
                </ChartCardComponent>
                <ChartCardComponent header={"Name"} backgroundColor={"#fff"}>
                    <LineChartComponent data={data} color={colorScheme}></LineChartComponent>
                </ChartCardComponent>
                <ChartCardComponent header={"Name"} backgroundColor={"#fff"}>
                    <DonutChartComponent data={pieData}></DonutChartComponent>
                </ChartCardComponent>
            </ChartsContainer>
        </>
    )
}

export default OverallDashboard;