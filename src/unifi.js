const nodeFetch = require('node-fetch');
const fetch = require('fetch-cookie')(nodeFetch);

const postData = async (url = ``, data = {}, passedHeaders = {}) => {
  return fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...passedHeaders },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .catch(error => console.error(`Fetch Error =\n`, error));
};

const login = async (endpoint = process.env.URI, username = process.env.USERNAME, password = process.env.PASSWORD) => {
  return postData(`${endpoint}/api/login`, {
    username,
    password,
  });
};

const authorizeGuest = async (mac, sitename = process.env.SITENAME, endpoint = process.env.URI) => {
  return postData(`${endpoint}/api/s/${encodeURIComponent(sitename)}/cmd/stamgr`, {
    cmd: 'authorize-guest',
    mac,
  });
};

const logout = async (endpoint = process.env.URI) => {
  return postData(`${process.env.URI}/api/logout`);
};

module.exports = {
  login,
  authorizeGuest,
  logout,
};
