import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';
import { useNavigate } from "react-router-dom";

export default function(SpecificComponent, option, adminRoute = null) {

  function AuthenticationCheck() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(auth()).then(response => {
        console.log(response);

        // 로그인 하지 않은 상태
        if(!response.payload.isAuth) {
          if(option) {
            // 로그인해야(true) 들어갈 수 있는 페이지에 접속 시도
            navigate('/login');
          }
        } else {
        // 로그인 한 상태
          if(adminRoute && !response.payload.isAdmin) {
            // admin 페이지에 admin이 아닌 유저가 접속 시도
            navigate('/');
          } else {
            if(option === false) {
              // 로그인한 유저가 들어갈 수 없는 페이지(예-로그인, 회원가입) 접속 시도
              navigate('/');
            }
          }
        }
      });

    }, []);

    return(<SpecificComponent />);
  };

  return AuthenticationCheck;
}