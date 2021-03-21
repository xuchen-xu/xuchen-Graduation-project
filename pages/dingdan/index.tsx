// import Link from 'next/link'
import Layout from "../../components/Layout";
import { withRouter } from "next/router";
import React, { useState, useEffect } from "react";
import "@/static/css/font-awesome.css";
// import "./css/index.css";
// import fetch from "isomorphic-unfetch";
import { fetchget } from "../../utils/zgfetch";
// import { Button, notification } from "antd";
import Router from "next/router";
// import Fromdemo from "./components/from"
import Topboxnav from "../components/topboxnavyidenglu";
import "./dingdan.css";
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
    list.forEach((v: any) => {
      if (v.count) {
        s += parseInt(v.count);
      }
    });
    return s;
  };

  const tioahuzan = ()=>{
    Router.push("/pay");
  }

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
          <div className="hd">确认订单信息</div>

          <div className="section" style={{ height: "231.833px" }}>
            <div className="titledingdan">收货人信息</div>
            <div className="address-platform">
              <div className="address-content">
                <div className="address-list">
                  <div className="address-list-content">
                    <div className="address-col">
                      <div className="address-card selecteddi">
                        <p className="address-name">收货人：{name}</p>
                        {/* -------------------- */}
                        <div className="address-detail">
                          <p className="address-area">
                            安徽省 / 合肥市 / 蜀山区 /
                            小庙镇建邦之家小区3409栋2301室
                          </p>
                        </div>
                        <p className="address-phone">19975466493</p>
                        <p className="address-action">
                          <a className="">设为默认</a>
                          <a>修改地址</a>
                          <a>删除</a>
                        </p>
                        {/* --------------------- */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* --------------------- */}
                <div className="address-creator">
                  <div className="address-creator-btn">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </div>
                </div>
                {/* --------------------- */}
              </div>
            </div>
          </div>

          {/* ---------------------- */}
          <div
            className="section"
            style={{ position: "relative", paddingBottom: "300px" }}
          >
            {/* ------------ */}
            <div className="shop-card">
              <div className="shop-card-header">
                <a className="shop-name" style={{ position: "absolute" }}>
                  豆瓣书店
                </a>
              </div>
              <div className="shop-card-content">
                <table className="mui-table shop-card-table">
                  <colgroup>
                    <col className="item" />
                    <col className="price" />
                    <col className="quantity" />
                    <col className="amount" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th style={{ width: "597.85px" }}>商品信息</th>
                      <th style={{ width: "133.333px" }}>单价（元）</th>
                      <th style={{ width: "70.933px" }}>数量</th>
                      <th style={{ width: "136.217px" }}>小计（元）</th>
                    </tr>
                  </thead>
                  <tbody>
                    {show.map((item: any) => {
                      return (
                        <tr className="item-card">
                          <td className="item-info">
                            <div className="item-detail">
                              <a className="sku-pic">
                                <img
                                  src={`../../static/images/image/${item.imgurl}`}
                                  // alt=""
                                />
                              </a>
                              <div className="sku-info">
                                <p>
                                  <a className="sku-name">{item.bookname}</a>
                                </p>
                                <div className="sku-sale-props">
                                  {item.author}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="item-price">
                            <p>
                              <span className="market-price-font">
                                ¥ {item.bookprice}
                              </span>
                            </p>
                          </td>
                          <td className="item-number">
                            <p className="pcenter">
                              <span>{item.count}</span>
                            </p>
                          </td>
                          <td className="item-amount">
                            <p className="pcenter">
                              <span
                                className="amount market-price-font"
                                style={{ fontSize: "14px" }}
                              >
                                <i>¥</i> {item.xiaojiprice}
                              </span>
                            </p>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {/* --------------- */}
              <div className="shop-coupons">
                <div className="mui-accordion shop-card-section">
                  <span className="mui-accordion-title">优惠券</span>
                  <span className="mui-accordion-subtitle">暂无可用优惠券</span>
                </div>
                <div className="mui-accordion-title">兑换优惠券</div>
                <div className="accordion shop-card-section">
                  <span>
                    <span className="simulate-checkbox">
                      <input type="checkbox" />
                    </span>
                    <em className="accordion-title invoice-title">
                      我要开发票
                    </em>
                  </span>
                </div>
                <div className="shop-card-footer">
                  <div className="shop-message">
                    <p className="receipt">
                      如有问题，可联系客服：400-835-3331。
                    </p>
                  </div>
                </div>
              </div>
              {/* --------------- */}
            </div>
          </div>
          {/* ---------------------- */}
          <div className="deal-footer">
            <div className="wrapper">
              <div style={{ float: "left" }}>
                <span className="footer-label1">
                  商品总价<em>¥{sumprice}</em>
                </span>
                <span className="footer-label">
                  优惠券<em className="no-offset">暂无可用</em>
                </span>
                <span className="footer-label">
                  运费
                  <i className="icon-warning"></i>
                  <em className="no-offset">已包邮</em>
                </span>
              </div>
              <div style={{ float: "right" }}>
                <span className="result">
                  <em>
                    共计<b className="quantity">{jisuancount()}</b>件商品
                  </em>
                  <em>
                    应付总额: <b className="amount-real">¥{sumprice}</b>
                  </em>
                </span>
                {/* <button className="mui-button red l default" type="button">提交订单</button> */}
                <div className="mui-button red l default" onClick={tioahuzan}>提交订单</div>
              </div>
            </div>
          </div>

          {/* ---------------------- */}
        </div>
      </div>
      {/* 第三层结束了 */}
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
