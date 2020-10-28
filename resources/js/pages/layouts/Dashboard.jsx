import React from 'react'
import { NavLink } from 'react-router-dom'
import './dashboard.css'

export const Dashboard = (props) => {
    return (
        <div className="dashboard-layout">
            <div className="left-panel">
                <div className="avatar-area">
                    <img src="https://avatars2.githubusercontent.com/u/18083362?s=460&u=7ad69066b9162f41be2df3c43b10fc6a69e75391&v=4"
                            alt="avatar"/>
                    <p>Ricardo Canul</p>
                </div>
                <div className="panel-links">
                    <NavLink to='/' exact activeClassName="active">
                        Analytics
                    </NavLink>
                    <NavLink to='/sales' activeClassName="active">
                        Sales
                    </NavLink>
                </div>
            </div>

            <div className="main-content">
                {props.children}
            </div>
        </div>
    )
}
