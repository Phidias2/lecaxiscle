import React from "react"
import { Text } from "react-native"
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
const StatisticScreen = () => {
    const data = [
        {
            name: "Gagne",
            population: 21500000,
            color: "#008000",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Perdu",
            population: 2800000,
            color: "#ff0000",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }
    ];
    return (
        <>
            <Text>Bilan des coupons</Text>
            <PieChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[10, 50]}
                absolute
            />
        </>

    )
}
export default StatisticScreen