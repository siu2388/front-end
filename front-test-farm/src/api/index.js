import axios from 'axios';
//  http://localhost:8090
const backendPort = '8090';
const serverUrl = 'http://' + window.location.hostname + ':' + backendPort;
const imgUrl =
  'http://' + window.location.hostname + ':' + backendPort + '/uploads/';

async function get(endpoint) {
  return axios.get(serverUrl + endpoint, {
    headers: {
      Authorization: `${localStorage.getItem('token')}`,
    },
  });
}

async function post(endpoint, data) {
  const bodyData = JSON.stringify(data);

  return axios.post(serverUrl + endpoint, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(bodyData),
  });
}

async function formPost(endpoint, data) {
  return axios.post(serverUrl + endpoint, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `${localStorage.getItem('token')}`,
    },
  });
}

async function put(endpoint, data) {
  const bodyData = JSON.stringify(data);

  return axios.put(serverUrl + endpoint, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${localStorage.getItem('token')}`,
    },
  });
}

async function del(endpoint, params = '') {
  return axios.delete(serverUrl + endpoint + '/' + params, {
    headers: {
      Authorization: `${localStorage.getItem('token')}`,
    },
  });
}

export { serverUrl, imgUrl, get, post, formPost, put, del as delete };