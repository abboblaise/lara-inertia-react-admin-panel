import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Inject, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';
import { LinePrimaryXAxis, lineCustomSeries, LinePrimaryYAxis } from '../../data/dymmy1';
import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {
    const {currentMode} = useStateContext
    return (
        <ChartComponent
            id='line-chart'
            height='420px'
            primaryXAxis={LinePrimaryXAxis}
            primaryYAxis={LinePrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            background={currentMode=== 'Dark' ? '#33373E' : '#fff'}
        >
            <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
            <SeriesCollectionDirective>
                {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
            </SeriesCollectionDirective>
        </ChartComponent>
    );
};

export default LineChart;
