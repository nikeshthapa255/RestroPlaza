export const baseUrl = "https://restroplaza.herokuapp.com";

export const base = "https://restroplaza.herokuapp.com/"

export const restaurantUrl = base + "restaurant/";

export const loginUrl = base + "login/";

export const createUserUrl = base + "user/";

export const restaurantByToken = base + "restaurantByToken/"

export const dishPostUrl = (pk) => {
    return restaurantUrl + pk.toString() + "/dish/";
}

export const dishEditUrl = (Rpk, pk) => {
    return restaurantUrl + Rpk.toString() + "/dish/" + pk.toString() + '/';
}
