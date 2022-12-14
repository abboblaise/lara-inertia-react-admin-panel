import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Tooltip, HiloSeries, Zoom, Logarithmic, Crosshair } from '@syncfusion/ej2-react-charts';
import { FinancialPrimaryXAxis, FinancialPrimaryYAxis, financialChartData } from '../../data/dymmy1';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';

const date1 = new Date("2017, 1, 1")

const filterValue = (value) => {
    if (value.x >= date1) { return value.x, value.high, value.low}
}

const returnValue = financialChartData.filter(filterValue)

const Financial = () => {
    const {currentMode} = useStateContext()
    return (
        <div className='m-4 md:m-10 p-5 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
            <ChartsHeader category='Financial' title='AAPLE Historical' />
            <div className='w-full'>
                <ChartComponent
                    id='charts'
                    primaryXAxis={FinancialPrimaryXAxis}
                    primaryYAxis={FinancialPrimaryYAxis}
                    chartArea={{ border: { width: 0 } }}
                    tooltip={{ enable: true, shared: true }}
                    crosshair={{enable: true, lineType: 'Vertical', line:{width:0}}}
                    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                >
                    <Inject services={[HiloSeries, Tooltip, Logarithmic, Crosshair, Zoom, DateTime]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective
                            dataSource={returnValue}
                            xName='x'
                            yAxisName='y'
                            name='Apple Inc'
                            type='Hilo'
                            low='low'
                            high='high'
                        />
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    );
};

export default Financial;
