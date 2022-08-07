import ChartBar from './ChartBar';
import "./Chart.css"

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(data => data.value);   // Array full on numbers
    const totalMaximum = Math.max(...dataPointValues);  // Getting maximum value of array to use in MaxValue in chartBar

    return (
        <div className="chart">
            {
                props.dataPoints.map(data =>
                    <ChartBar key={data.label}
                              value={data.value}
                              maxValue={totalMaximum}
                              label={data.label}
                    />
                )
            }
        </div>
    );
};

export default Chart;