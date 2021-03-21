// import Link from 'next/link'
import Layout from "../../components/Layout";
// import { withRouter } from "next/router";
import React, { useEffect, useState } from "react";
import "@/static/css/font-awesome.css";
import { watch } from "fs";
import "./topboxnav.css";
import { Menu, Dropdown, Button } from 'antd';
// import fetch from "isomorphic-unfetch";
// import Fromdemo from "./components/from"
// 声明的全局数据

const IndexPage = (props: any) => {
  let [usename, setname] = useState("未登录");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    //    console.log(sessionStorage.name)
    if (sessionStorage.name) {
      setname((usename = sessionStorage.name));
      console.log(usename);
    }
  };

  const dotuichu = ()=>{
    // sessionStorage.removeItem("name", name);
    // sessionStorage.setItem("pwd", pwd);
    // sessionStorage.setItem("imgurl", item.imgtouxiang);
    // sessionStorage.setItem("id", item.userid);
  }


  const menu = (
    <Menu>
      <Menu.Item>
        <a >
         个人主页
        </a>
      </Menu.Item>
      <Menu.Item>
        <a >
         我的订单
        </a>
      </Menu.Item>
      <Menu.Item>
        <a >
        我的钱包
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="/">
        退出
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div id="db-global-nav" className="global-nav">
      <div className="bd">
        <div className="top-nav-info">
        <Dropdown overlay={menu} placement="topRight">
          <div className="nav-login" >
            {/* {sessionStorage.name} */}
            用户{" "}
            <a
              style={{ color: "red", textDecoration: "none", fontSize: "14px" }}
            >
              {usename}
            </a>{" "}
            的账号
          </div>
          </Dropdown>
        </div>

        <div className="top-nav-doubanapp">
          <a className="lnk-doubanapp" onClick={dotuichu}>下载客户端APP</a>
        </div>

        <div className="global-nav-items">
          <ul>
            <li className="">
              <a target="_blank">孔网</a>
            </li>
            <li className="on">
              <a target="_blank" href="/newbook" >新书资讯</a>
            </li>
            <li className="">
              <a target="_blank" href="/novel">小说</a>
            </li>
            <li className="">
              <a target="_blank" href="/essay" >散文</a>
            </li>
            <li className="">
              <a target="_blank" href="/jotting" >随笔</a>
            </li>
            <li className="">
              <a target="_blank" href="/literature" >文学</a>
            </li>
            <li className="">
              <a target="_blank">古籍墨迹</a>
            </li>
            <li className="">
              <a target="_blank" href="/newbook">回到书籍详情页</a>
            </li>
            <li className="">
              <a target="_blank" href="/home">返回首页</a>
            </li>
            <li className="">
              <a target="_blank" href="/carshop">已在购物车</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// export default class Child extends React.Component{

//   render(){
//     return  <div>{this.props.params.msg}</div>
//   }
// }

//getInitialProps 方法既可以在服务器运行，又可以在客户端运行(组件创建之前执行的)
//当刷新页面(初次载入页面)，该方法会在服务器执行
//当通过<Link>跳转路由的时候，该方法会在客户端执行
// IndexPage.getInitialProps = async () => {
//   const res = await fetch("http://localhost:3001/api/users");
//   const data = await res.json();
//   //这边返回的数据会被挂载到组件的props中
//   return { show: data };
// };

export default IndexPage;
