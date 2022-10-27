import React from 'react';
import { GridComponent, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItems, ordersGrid } from '../data/dymmy1';
import { Header } from '../components';

const Orders = () => {
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category='Page' title='Orders' />
            <GridComponent>
                <ColumnDirective>
                    
                </ColumnDirective>
            </GridComponent>
        </div>
    );
};

export default Orders;
