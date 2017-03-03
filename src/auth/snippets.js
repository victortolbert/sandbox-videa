// How to prevent intecepted messages from resolving as error

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {

  const originalRequest = error.config;

  if (error.response.status === 401 && !originalRequest._retry) {

    originalRequest._retry = true;

    const refreshToken = window.localStorage.getItem('refreshToken');
    return axios.post('http://localhost:8000/auth/refresh', { refreshToken })
      .then(({data}) => {
        window.localStorage.setItem('token', data.token);
        window.localStorage.setItem('refreshToken', data.refreshToken);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
        originalRequest.headers['Authorization'] = 'Bearer ' + data.token;
        return axios(originalRequest);
      });
  }

  return Promise.reject(error);
});


//
Vue.axios.interceptors.request.use((config) => {
    if (store.state.auth) {
      config.headers.common['Authorization'] = 'Bearer ' + store.state.token
    }
    return config
  }, function (error) {
    // Do something with request error
    return Promise.reject(error)
  })
Vue.axios.interceptors.response.use((response) => {
    return response
  }, function (error) {
    let originalRequest = error.config
    console.log(originalRequest)
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      Vue.axios.post('/users/token', null).then((data) => {
        store.dispatch('authfalse')
        store.dispatch('authtruth', data.data)
        originalRequest.headers['Authorization'] = 'Bearer ' + store.state.token
        return Vue.axios(originalRequest)
      })
    }
    // Do something with response error
    return Promise.reject(error)
  })
