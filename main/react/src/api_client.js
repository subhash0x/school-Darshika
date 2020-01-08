import axios from "axios";

const BASE_URL = (window.location.protocol === 'https' ? 'https' : 'http') + '://'+window.location.hostname + ':' + window.location.port + '/api/';
const SCHOOLS_API = BASE_URL + 'schools/';
const SUBSCRIPTIONS_API = BASE_URL + 'subscriptions/';
const NOTIFICATIONS_API = BASE_URL + 'notifications/';
const USER_API = BASE_URL + 'users/';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

class APIClient{

    static getSchools = (params) => {

        return axios({
            method: 'get',
            url: SCHOOLS_API,
            params: params,
            CORS: true,
        });

        let geolocationCallback = (position) => {
            params['lat'] = position.coords.latitude;
            params['lng'] = position.coords.longitude;

        };

        if (navigator.geolocation) {
            let d = navigator.geolocation.getCurrentPosition((position) => {
                return geolocationCallback(position);
            });
            console.log(d);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }

    }
}

export default APIClient;