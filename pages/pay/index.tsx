// import Link from 'next/link'
import Layout from "../../components/Layout";
import { withRouter } from "next/router";
import React, { useState, useEffect } from "react";
import "@/static/css/font-awesome.css";
// import "./css/index.css";
// import fetch from "isomorphic-unfetch";
import { fetchget } from "../../utils/zgfetch";
// import { Button, notification } from "antd";
// import Router from "next/router";
// import Fromdemo from "./components/from"
import Topboxnav from "../components/topboxnavyidenglu";
import "./pay.css";
// import { Menu, Dropdown } from "antd";
// import Item from "antd/lib/list/Item";
// import { relative } from "path";

const IndexPage = () => {
  let url =
    "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1123237291,2005820395&fm=26&gp=0.jpg";

  useEffect(() => {
    getUser();
    getdata();
  }, []);

  let [imgurl, setimg] = useState(url);
  let [name, setname] = useState("未登录");
  let [show, setshow] = useState<any>([]);
  let [sumprice, setsumprice] = useState(0);

  const getUser = () => {
    //    console.log(sessionStorage.name)
    if (sessionStorage.imgurl && sessionStorage.name) {
      setimg((imgurl = sessionStorage.imgurl));
      // console.log(imgurl);
      setname((name = sessionStorage.name));
      // console.log(imgurl);
    }
  };

  const getdata = async () => {
    // console.log(name, "123456");
    if (name != "未登录") {
      let datas = await fetchget("http://localhost:3001/dingdan");
      if (datas) {
        console.log(datas);
        if (datas[0]) {
          var sump = datas[0].sumprice;
        }

        setshow(datas);
        setsumprice(sump);
      }
    }
    //  console.log(datas,'xxxxxxx')
  };

  const jisuancount = () => {
    var list = show;
    var s = 0;
    list.forEach((v: any, i: any) => {
      if (v.count) {
        s += parseInt(v.count);
      }
    });
    return s;
  };

  return (
    <Layout title="订单页面">
      <Topboxnav></Topboxnav>
      {/* 第二层头部开始 */}
      <div className="market-header">
        <div className="header-inner">
          <div className="dingdanlogo">
            <a className="adingdan">孔网 | 书本</a>
          </div>
          <div className="market-user">
            <div className="user-people">
              <div className="user-pic">
                <img src={imgurl} className="imgdingdan" />
                <span className="spandingdan">个人中心</span>
              </div>
            </div>

            <a className="user-cart">
              <i className="fa fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
      {/* 第二层头部结束 */}

      {/* 第三层开始了 */}
      <div className="market-wrapper">
        <div className="deal-body">
          <div className="hd">收银台</div>
          {/* ----------------------- */}
          <div className="pay-content">
            <div className="title">请选择付款方式</div>
            <div className="pay-info">
              <span>订单号：3852581999</span>
              <span className="amount">
                <em>实付金额：</em>
                <em className="real_amount">{sumprice}</em>
              </span>
            </div>
          </div>
          {/* ---------------------- */}
          <div className="pay-box">
            <div className="alipay-box">
              <div className="aliImg">
                <img
                  src="../../static/images/apiapy.jpg"
                  width="145"
                  height="145"
                  className="imgrongqi"
                ></img>
              </div>
              <div className="pay-describe">使用支付宝扫描此二维码进行支付</div>
              <div className="pay-title">支付宝支付</div>
            </div>
            <div className="divide-line"></div>
            <div className="wechat-box">
              <div className="aliImg">
                <img
                  src="../../static/images/weixinpay.jpg"
                  width="145"
                  height="145"
                  className="imgrongqi"
                ></img>
              </div>
              <div className="pay-describe">使用微信扫描此二维码进行支付</div>
              <div className="pay-title">微信支付</div>
            </div>
          </div>
          {/* ---------------------- */}
        </div>
      </div>
      {/* 第三层结束了 */}

      <div id="footer">
        <div className="footer-wrapper">

          <div className="footer-left">
            <span className="logo">孔网 | 书本</span>
            <div className="info">
              <p>
                © 2021 market.douban.com, all rights reserved
                北京孔子旧书网文化有限公司
              </p>
              <p>
                <a>营业执照</a> |<a>食品经营许可证: JY11105111524423</a>
              </p>
              <p>
                <a>出版物经营许可证：新出发京批字第直170330号</a>
              </p>
            </div>
          </div>

          <div className="footer-right">
             <div className="footer-kits">
               <a className="item">
                <img src="../../static/images/底部问号.jpg" alt=""/>
               <span>&nbsp;购物说明</span>
               </a>
               <a className="item">
                <img src="../../static/images/书写笔.jpg" alt=""/>
               <span>&nbsp;意见反馈</span>
               </a>
               <a className="item">
                <img src="../../static/images/商务合作.jpg" alt=""/>
               <span>&nbsp;商务合作</span>
               </a>
             </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

// IndexPage.getInitialProps = async (context: any) => {
//   const res = await fetch(`http://localhost:3001/carshop/${name}`);
//   const show = await res.json();
//   //这边返回的数据会被挂载到组件的props中
//   return { show };
// };

export default withRouter(IndexPage);
