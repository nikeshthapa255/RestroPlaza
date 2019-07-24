import React, { Component } from 'react';
import { Switch, Redirect, Route, Link } from 'react-router-dom';
import Login from './LoginComponent';
import Header from './NavComponent';
import AboutUs from './AboutUsComponent';
import Home from "./HomeComponent";
import CreateUser from './CreateUser';
import { getRestaurants, fetchLogin, fetchLogin1 } from '../api/fetchWork';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: this.getCookie("token"),
            restaurants: [],
            isLogin: false
        }
        this.setCookie = this.setCookie.bind(this);
        this.getCookie = this.getCookie.bind(this);
        this.saveRestros = this.saveRestros.bind(this);
        this.logOut = this.logOut.bind(this);
        this.logIn = this.logIn.bind(this);
        this.logInFor1 = this.logInFor1.bind(this);
        this.setToken = this.setToken.bind(this);

    }

    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }


    saveRestros(restro) {
        this.setState({ restaurants: [...restro], isLogin: true })
    }

    logIn(username, password) {
        fetchLogin(username, password, this.setCookie, this.setToken, this.saveRestros)
    }

    logInFor1(username, password, data, token) {
        fetchLogin1(username, password, this.setCookie, this.setToken, this.saveRestros, data)
    }


    setToken(data) {
        this.setState({ token: data })
    }


    logOut() {
        this.setCookie("token", "", 0.1)

        this.setState({
            isLogin: false,
            restaurants: [],
            token: ""
        })

    }
    componentDidMount() {
        if (!this.state.isLogin)
            getRestaurants(this.state.token, this.saveRestros)
    }


    render() {
        return (
            <>


                <div>
                </div>
                <Header logout={this.logOut} isLogin={this.state.isLogin} />
                <Switch>
                    <Route exact path='/home' component={
                        () => <Home
                            saveRestros={this.saveRestros}
                            restaurants={this.state.restaurants}
                            token={this.state.token} isLogin={this.state.isLogin} />} />
                    <Route exact path="/login" component={() => <Login login={this.logIn} />} />
                    <Route exact path="/aboutus" component={AboutUs} />
                    <Route exact path="/createUser" component={
                        () => <CreateUser login={this.logInFor1} token={this.state.token} isLogin={this.state.isLogin} />} 
                        />
                    <Redirect to="/home" />
                </Switch>
            </>
        );
    }
}

export default Main;