import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Login from './LoginComponent';
import Header from './NavComponent';
import AboutUs from './AboutUsComponent';
import Home from "./HomeComponent";
import CreateUser from './CreateUser';
import { getRestaurants, fetchLogin, fetchLogin1, getOwnerRestaurant } from '../api/fetchWork';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: this.getCookie("token"),
            restaurants: [],
            isLogin: false,
            MainRestro: null
        }
        this.setCookie = this.setCookie.bind(this);
        this.getCookie = this.getCookie.bind(this);
        this.saveRestros = this.saveRestros.bind(this);
        this.logOut = this.logOut.bind(this);
        this.logIn = this.logIn.bind(this);
        this.logInFor1 = this.logInFor1.bind(this);
        this.setToken = this.setToken.bind(this);
        this.setMainRestro = this.setMainRestro.bind(this);


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
        this.setState({
            restaurants: [...restro]
        })
    }

    logIn(username, password) {
        fetchLogin(username, password, this.setCookie, this.setToken, this.saveRestros, this.setMainRestro)
    }

    logInFor1(username, password, data) {
        fetchLogin1(username, password, this.setCookie, this.setToken, data)
    }

    setToken(data) {
        this.setState({ token: data })
    }


    logOut() {
        this.setCookie("token", "", 0.1)

        this.setState({
            isLogin: false,
            token: "",
            MainRestro: null
        })

    }

    setMainRestro = (restro) => {
        this.setState({
            MainRestro: restro,
            isLogin: true
        })
    }
    componentDidMount() {
        getRestaurants(this.saveRestros)
        if (!this.state.isLogin && this.state.token)
            getOwnerRestaurant(this.state.token, this.setMainRestro)
    }


    render() {
        return (
            <>
                <Header logout={this.logOut} isLogin={this.state.isLogin} />
                <Switch>
                    <Route exact path='/home' component={
                        () => <Home
                            MainRestro={this.state.MainRestro}
                            saveRestros={this.saveRestros}
                            restaurants={this.state.restaurants}
                            token={this.state.token}
                            isLogin={this.state.isLogin} />} />
                    <Route exact path="/login" component={() => <Login login={this.logIn} />} />
                    <Route exact path="/aboutus" component={AboutUs} />
                    <Route exact path="/createUser" component={
                        () => <CreateUser login={this.logInFor1} token={this.state.token} isLogin={this.state.isLogin} saveRestros={this.saveRestros} />}
                    />
                    <Redirect to="/home" />
                </Switch>
            </>
        );
    }
}

export default Main;