// import Link from 'next/link'
import Layout from "../../components/Layout";
// import { withRouter } from "next/router";
import React from "react";
import "@/static/css/font-awesome.css";
import { watch } from "fs";
import "./aside.css";
// import "./css/index.css";
// import fetch from "isomorphic-unfetch";
// import Fromdemo from "./components/from"
// 声明的全局数据

let IndexPage: React.FC = (props) => {
  return (
    <div className="aside">
      <div id="dale_book_subject_top_right">
        <div className="asidebox">
          <div id="dale_book_subject_top_right_frame">
            <img
              src="../../static/images/测试test.jpg"
              style={{ width: "271", height: "226" }}
            />
          </div>
          <div className="guge">由谷歌提供的广告</div>
        </div>
        <div id="buyinfo" className="gray_ad buyinfo">
          <div id="buyinfo-printed" className="buyinfo-printed">
            <h2>
              <span>当前版本有售</span>
              &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
            </h2>
            <ul className="bs current-version-list">
              <li>
                <div className="cell price-btn-wrapper">
                  <div className="vendor-name">
                    <a>
                      <span>京东商城</span>
                    </a>
                  </div>
                  <div className="cell impression_track_mod_buyinfo">
                    <div className="cell price-wrapper">
                      <a href="">
                        <span className="buylink-price">276.00元</span>
                      </a>
                    </div>
                    <div className="cell">
                      <a href="" className="buy-book-btn paper-book-btn">
                        <span style={{ color: "#EB9108" }}>购买纸质书</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <h2 style={{ marginTop: "15px" }}>
              <span>现货二手书</span>
              &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
            </h2>
            <ul className="bs current-version-list">
              <li>
                <div className="cell price-btn-wrapper">
                  <div className="vendor-name">
                    <a>
                      <span>多抓鱼</span>
                    </a>
                  </div>
                  <div className="cell impression_track_mod_buyinfo">
                    {/* <div className="cell price-wrapper">
                      <a href="">
                        <span className="buylink-price">276.00元</span>
                      </a>
                    </div> */}
                    <div className="cell">
                      <a href="" className="buy-book-btn paper-book-btn">
                        <span className="buylink-price">去逛逛 &gt;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="bs current-version-list">
              <li>
                <div className="cell price-btn-wrapper">
                  <div className="vendor-name">
                    <a>
                      <span>孔网</span>
                    </a>
                  </div>
                  <div className="cell impression_track_mod_buyinfo">
                    <div className="cell price-wrapper">
                      <a href="">
                        <span className="buylink-price">276.00元</span>
                      </a>
                    </div>
                    <div className="cell">
                      <a href="" className="buy-book-btn paper-book-btn">
                        <span style={{ color: "#EB9108" }}>直接购买</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="add2cartContainer no-border">
            <span className="add2cartWidget ll">
              <a className="j  add2cart a_show_login" rel="nofollow">
                <span>+ 加入购书单</span>
              </a>
            </span>
          </div>
        </div>

        {/* ------------------------------------ */}
        <div className="gray_ad version_works">
          <h2>
            <span>这本书的其他版本</span>
            &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;· ( 全部 )
          </h2>
          <ul>
            <li className="mb8 pl">
              <div className="meta">
                <a href="https://book.douban.com/subject/34927707/">
                  Bloomsbury Publishing （2019）
                </a>
                <div className="count">
                  <span>暂无评分</span> 3人读过
                </div>
              </div>
            </li>
            {/* --- */}
            <li className="mb8 pl">
              <div className="meta">
                <a href="https://book.douban.com/subject/34927707/">
                  皇冠出版社 （1976）
                </a>
                <div className="count">
                  <span>9.0分</span> 261120人读过
                </div>
              </div>
            </li>
            {/* ---- */}
            <li className="mb8 pl">
              <div className="meta">
                <a href="https://book.douban.com/subject/34927707/">
                  北京十月文艺出版社 （2011）
                </a>
                <div className="count">
                  <span>9.3分</span> 67911人读过
                </div>
              </div>
            </li>
            {/* ------ */}
            <li className="mb8 pl">
              <div className="meta">
                <a href="https://book.douban.com/subject/34927707/">
                  北京十月文艺出版社 （2009）
                </a>
                <div className="count">
                  <span>9.3分</span> 19438人读过
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* ------------------------------------ */}
        <div className="gray_ad" id="borrowinfo">
          <h2>
            <span>在哪儿借这本书</span>
            &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
          </h2>

          <ul className="bs more-after">
            <li style={{ border: "none" }}>
              <a target="_blank">北京市公共图书馆(5)</a>
            </li>

            <li style={{ border: "none" }}>
              <a target="_blank">上海市中心图书馆(23)</a>
            </li>

            <li style={{ border: "none" }}>
              <a target="_blank">广州其他馆藏(1)</a>
            </li>

            <li style={{ border: "none" }}>
              <a target="_blank">吉林省图书馆</a>
            </li>

            <li style={{ border: "none" }}>
              <a target="_blank">江阴市图书馆</a>
            </li>

            <li style={{ border: "none" }}>
              <a target="_blank">重庆图书馆</a>
            </li>
          </ul>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

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
