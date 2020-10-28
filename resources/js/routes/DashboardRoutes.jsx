import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Dashboard } from '../pages/layouts/Dashboard'
import { Analitics } from '../pages/Analytics.jsx'
import { Sales } from '../pages/Sales.jsx'

export const DashboardRoutes = () => {
    return (
        <Dashboard>
            <Switch>
                <Route path="/" exact component={ Analitics }/>
                <Route path="/sales" component={ Sales }/>
            </Switch>
        </Dashboard>
    )
}
