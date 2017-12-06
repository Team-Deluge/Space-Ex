import { requestLogin, receiveLogin, loginError } from './actions';

const loginUser = (creds) => {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=${creds.username}&password=${creds.password}`,
  };

  return (dispatch) => {
    dispatch(requestLogin(creds));

    return fetch('http://localhost:3000/user/find', config)
      .then((response) => {
        response.json().then(user => ({ user, response }))
          .then(({ user, res }) => {
            if (!res.ok) {
              dispatch(loginError(user.message));
              return Promise.reject(user);
            }

            localStorage.setItem('id_token', user.id_token);
            localStorage.setItem('id_token', user.access_token);

            dispatch(receiveLogin(user));
          }).catch(err => console.log(err));
      });
  };
};

export default loginUser;
