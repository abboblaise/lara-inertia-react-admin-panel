import React from 'react';
import { Header, LineChart } from '../../components';

const Line = () => {
    return (
        <div className='m-4 md:m-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
            <Header category='Chart' title='Inflation rate' />
        </div>
    );
};

export default Line;
