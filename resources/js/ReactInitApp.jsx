import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { DashboardRoutes } from './routes/DashboardRoutes';

function ReactInitApp() {
    return (
        <BrowserRouter basename={'/admin/'}>
            <DashboardRoutes />
        </BrowserRouter>
    );
}

export default ReactInitApp;

if (document.getElementById('react-dashboard')) {
    ReactDOM.render(
        <ReactInitApp />,
        document.getElementById('react-dashboard')
    );
}
