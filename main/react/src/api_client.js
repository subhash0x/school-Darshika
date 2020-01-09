import axios from "axios";

const BASE_URL = (window.location.protocol === 'https' ? 'https' : 'http') + '://'+window.location.hostname + ':' + window.location.port + '/api/';
const SCHOOLS_API = BASE_URL + 'schools/';
const SUBSCRIPTIONS_API = BASE_URL + 'subscriptions/';
const NOTIFICATIONS_API = BASE_URL + 'notifications/';
const FEEDBACKS_API = BASE_URL + 'feedbacks/';
const USER_API = BASE_URL + 'users/';
const LOGIN_API = BASE_URL + 'login/';
const SIGNUP_API = BASE_URL + 'signup/';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

class APIClient{

    static fetch = (url, params) => APIClient.request(url, params, 'get');
    static post = (url, params) => APIClient.request(url, params, 'post');
    static request = (url, params, method) => {
        return axios({
            method: method,
            url: url,
            data: params,
            CORS: true,
        });
    };

    static getSchools = (params) => {
        return APIClient.fetch(SCHOOLS_API. params);
    };

    static getSubscriptions = (schoolId) => {
        return APIClient.fetch(SUBSCRIPTIONS_API, {school: schoolId});
    };

    static addSubscription = (schoolId) => {
        return APIClient.post(SUBSCRIPTIONS_API, {school: schoolId});
    };

    static getNotifications = () => {
        return APIClient.fetch(NOTIFICATIONS_API, {});
    };

    static getFeedbacksForSchool = (schoolId) => {
        return APIClient.fetch(FEEDBACKS_API, {school: schoolId});
    };

    static getUser = (userId) => {
        return APIClient.fetch(USER_API + userId, {});
    };

    static login = (email, password) => {
        return APIClient.post(LOGIN_API, {email: email, password: password})
    };

    static signup = (params) => {
        return APIClient.post(SIGNUP_API, params);
    };

}

export default APIClient;