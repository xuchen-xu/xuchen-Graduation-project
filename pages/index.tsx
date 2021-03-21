// import Link from 'next/link'
import Layout from "../components/Layout";
import { withRouter } from "next/router";
import React, { FC, useState, useEffect } from "react";
import "@/static/css/font-awesome.css";
import "./css/index.css";
import fetch from "isomorphic-unfetch";
import { fetchpost, fetchget } from "../utils/zgfetch";
// import { Button, notification } from "antd";
import { message, Button } from "antd";

import Router from "next/router";
// import Fromdemo from "./components/from"
type State = {
  userName: string; //用户名
  passWord: string; //密码
  name: string;
  pwd: string;
};

type IProps = {
  show: [{}];
  history: any;
};

const error = () => {
  message.error(
    "输入的账号信息有问题,可能是账号或者密码错误，可以选择微信或者QQ授权登录"
  );
};

const IndexPage = (props: any) => {
  let [name, setName] = useState("");
  let [pwd, setPwd] = useState("");
  let [flag, setflag] = useState<boolean>(true);

  const handleName = (e: any) => {
    setName((name = e.target.value));
    // console.log(name);
  };

  const handlePwd = (e: any) => {
    setPwd((pwd = e.target.value));
    // console.log(pwd);
  };

  // const openNotification = () => {
  //   notification.open({
  //     message: "输入的账号信息有问题",
  //     description:
  //       "可能是账号或者密码错误，可以选择微信或者QQ授权登录",
  //     onClick: () => {
  //       console.log("Notification Clicked!");
  //     },
  //   });
  // };

  const doLogin = () => {
    let number = 0;
    props.show.forEach((item: any) => {
      if (item.userName == name && item.password == pwd) {
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("pwd", pwd);
        sessionStorage.setItem("imgurl", item.imgtouxiang);
        sessionStorage.setItem("id", item.userid);
        console.log(sessionStorage, "xxxxxxx");
        Router.push("/home");
        console.log(number);
        ++number;
        setflag((flag = false));
      } else {
        number++;
        console.log(number, "xxxxxxxxxxxxx");
        if (number == 4 && flag) {
          error();
        }
      }
    });
  };

  return (
    <Layout title="登录页">
      <div className="container clear">
        <div className="tbl">
          <div></div>
        </div>
        <div className="denglubox">
          <div className="ph clear">
            {/* <%--显示手机图--%> */}
            {/* <div className="o"></div> */}
          </div>
          <div className="m clear">
            <div>密码登录</div>
            <div>
              <form className="loginBox" action="/home" method="post">
                <input
                  type="text"
                  value={name}
                  placeholder="请输入用户名"
                  onChange={handleName}
                />
                <br></br>
                <input
                  type="password"
                  value={pwd}
                  placeholder="请输入密码"
                  onChange={handlePwd}
                />
                <br></br>
                <input type="button" value="登录孔网读书" onClick={doLogin} />
              </form>
              {/* <Fromdemo></Fromdemo> */}
              {/* <div></div> */}
            </div>
            {/* <%--二维码标识--%> */}
            <div></div>
            <div className="tx clear">---换一种登录方式---</div>
            <div className="wx"></div>
            <div className="xl clear"></div>
          </div>

          <div className="sew">
            <div></div>
            <div>登录孔子旧书APP</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

IndexPage.getInitialProps = async (context: any) => {
  const res = await fetch("http://localhost:3001/users");
  const show = await res.json();
  //这边返回的数据会被挂载到组件的props中
  return { show };
};

export default withRouter(IndexPage);
