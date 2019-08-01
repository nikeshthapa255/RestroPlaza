import { loginUrl, restaurantUrl, createUserUrl, restaurantByToken, dishPostUrl } from './baseUrl'
import axios from 'axios';

export const postRestaurant = (data, token, saveRestro) => {
    axios.post(restaurantUrl, data,
        {
            headers: {
                "content-type": "application/json",
                "authorization": "Token " + token,
            }
        }
    )
        .then(response => {
            alert("Resturant Enrolled" + JSON.stringify(response))
            getRestaurants(saveRestro)
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        })
}

export const postDish = (Rpk, data, token, setMainRestro) => {
    console.log("ID-" + Rpk)
    console.log("dish url " + dishPostUrl(Rpk))
    axios.post(dishPostUrl(Rpk), data,
        {
            headers: {
                "content-type": "application/json",
                "authorization": "Token " + token,
            }
        }
    )
        .then(response => {
            console.log("Dish got it" + JSON.stringify(response))
            getOwnerRestaurant(token, setMainRestro)
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        })
}

export const postUser = (username, password, email, setId, login, isLogin, token, saveRestro) => {
    axios.post(createUserUrl, {
        username: username,
        password: password,
        email: email
    },
        {
            headers: {
                "content-type": "application/json",
            }
        }
    )
        .then(response => {
            if (isLogin)
                postRestaurant(setId(response.data.id), token, saveRestro)
            else
                login(setId(response.data.id));
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        })
}

export const fetchLogin1 = (username, password, setCookie, setToken, data) => {

    console.log(username + "," + password)
    axios.post(loginUrl, {
        username: username,
        password: password
    },
        {
            headers: {
                "content-type": "application/json",
            }
        }
    )
        .then(response => {
            setCookie("token", response.data.token, 10);
            setToken(response.data.token);
            postRestaurant(data, response.data.token)
            console.log(response.data.token);
            return response.data
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        })

}

export const fetchLogin = (username, password, setCookie, setToken, saveRestros, setMainRestro) => {
    console.log(username + "," + password)
    axios.post(loginUrl, {
        username: username,
        password: password
    },
        {
            headers: {
                "content-type": "application/json",
            }
        }
    )
        .then(response => {
            setCookie("token", response.data.token, 10);
            setToken(response.data.token);
            getRestaurants(saveRestros);
            getOwnerRestaurant(response.data.token, setMainRestro);
            console.log(response.data.token);
            return response.data
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        })

}

export const getOwnerRestaurant = (token, setItems, isLoading ) => {
    console.log("Token " + token)
    axios.get(restaurantByToken,
        {
            headers: {
                "content-type": "application/json",
                "authorization": "Token " + token,
            }
        }
    )
        .then(response => {
            console.log(response.data);
            setItems(response.data);
            isLoading();
            return response.data
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        })
}

export const getRestaurants = (saveRestro, isLoading) => {


    axios({
        method: 'get',
        url: restaurantUrl,
        headers: {
            "content-type": "application/json",
        }
    }).then(response => {
        console.log(response.data)
        saveRestro(response.data)
        isLoading()
        return response.data;
    })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        })

}