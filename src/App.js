import React, { useState, useEffect } from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import routes from './routes';
import LoginStore from './store/LoginStore';

// --------

import { Route } from 'react-router-dom';

const App = () => {
  const content = useRoutes(routes);
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState([])
  const loginstore = LoginStore;
  let [isAuthenticated, setisAuthenticated] = useState(localStorage.getItem('token') ? true : false);


  useEffect(() => {
    if (loginstore.isAuthenticated) {
      fetch('http://localhost:8000/validate', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => {
          fetch('http://localhost:8000/user/current/', {
            headers: {
              Authorization: `JWT ${localStorage.getItem('token')}`
            }
          })
            .then(res => res.json())
            .then(json => {
              // 현재 유저 정보 받아왔다면, 로그인 상태로 state 업데이트 하고
              if (json.username) {
                console.log(json.username);
                loginstore.setUser(json.username);
              } else {
                //유저가 undefined라면 로그인버튼이 나오도록 modal을 false로 항상 맞춰줌
                setModal(false);
                loginstore.setIsAuthenticated(false);
              }
              // Refresh Token 발급 받아 token의 만료 시간 연장
              fetch('http://localhost:8000/refresh/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  token: localStorage.getItem('token')
                })
              })
                .then(res => res.json())
                .then((json) => {
                  console.log(json);
                  loginstore.setToken(json.token);
                  loginstore.userHasAuthenticated(true);
                })
                .catch((e) => {
                  console.log(e);
                });
            })
            .catch((e) => {
              loginstore.handleLogout();
              console.log(e);
            });
        })
        .catch((e) => {
          loginstore.handleLogout();
          console.log(e);
        });
    }
  }, [loginstore.isAuthenticated]);

  useEffect(() => {
    if (loginstore.isAuthenticated) {
      setModal(true);
    } else {
      setModal(false);
    }
  }, [loginstore.isAuthenticated]);

  return (
    
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {content}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
