import axios from "axios";

const BASE_URL = (window.location.protocol === 'https' ? 'https' : 'http') + '://'+window.location.hostname + ':' + window.location.port + '/api/';
const SCHOOLS_API = BASE_URL + 'schools/';
const SUBSCRIPTIONS_API = BASE_URL + 'subscriptions/';
const NOTIFICATIONS_API = BASE_URL + 'notifications/';
const FEEDBACKS_API = BASE_URL + 'feedbacks/';
const USER_API = BASE_URL + 'users/';
const LOGIN_API = BASE_URL + 'login/';
const SIGNUP_API = BASE_URL + 'signup/';
const IMAGE_UPLOADS_API = BASE_URL + 'images/';
const AMENITIES_API = BASE_URL + 'amenities/';



axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

class APIClient{

    static fetch = (url, params, headers = {}) => APIClient.request(url, params, 'get');
    static post = (url, params, headers = {}) => APIClient.request(url, params, 'post');
    static request = (url, params, headers, method) => {
        return axios({
            method: method,
            url: url,
            data: params,
            CORS: true,
        });
    };

    static getSchools = (params) => {
        return APIClient.fetch(SCHOOLS_API, params);
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

    static uploadImage = (imageFile) => {
        return APIClient.post(IMAGE_UPLOADS_API, {file: imageFile}, {'Content-Type': 'multipart/form-data'});
    };

    static getAmenities = (params) => {
        return APIClient.fetch(AMENITIES_API, params)
    };

    static addFeedback = (feedback) => {
        return APIClient.post(FEEDBACKS_API, {}, {'Content-Type': 'application/json'});
    };

}

export default APIClient;