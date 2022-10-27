import React from 'react';
import { SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip, ChartComponent } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dymmy1';

const Stacked = (width, height) => {
    return (
        <ChartComponent
            width={width}
            height={height}
        >
            <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
        </ChartComponent>
    );
};

export default Stacked;
