import React from 'react';
import {BrowserRouter, Link,Route,Switch} from 'react-router-dom'
import Login from '../pages/Login/Login';
import SinhVien from '../pages/SinhVien/SinhVien';
 

export default function AppRouter() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/sinhvien">
                <SinhVien/>
            </Route>
            <Route path="/">
                <Login/>
            </Route>
        </Switch>

    </BrowserRouter>
    )
}
