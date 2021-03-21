import Layout from "../../components/Layout";
import { withRouter } from "next/router";
// import { useRouter } from "next/router";
import React, { useState } from "react";
// import { Button } from 'antd';
// import { useEffect } from 'react'
import "../css/newbookdetail.css";
// import cssobj from "../css/newbookdetail2.less";
import Footer from "../components/footerbook";
import Aside from "../components/aside";
import Topboxnav from "../components/topboxnav";
import { fetchpost, fetchget } from "../../utils/zgfetch";
import { message, Button } from "antd";

// let bookidtest = 0;
const IndexPage = (props: any) => {
  // let sessionvalue =  sessionStorage.getItem.name
  let [username, setUser] = useState("");
  let [bookname, setname] = useState(props.show[0].bookName);
  let [bookprice, setprice] = useState(props.show[0].bookPrice);
  let [chuban, setchuban] = useState(props.show[0].publishHouse);
  let [imgurl, setimg] = useState(props.show[0].imgPath);
  let [year, setyear] = useState(props.show[0].publicationYear);
  let [author, setauthor] = useState(props.show[0].author);
  let [number,setnumber] = useState(0);
  let [count , setcount] = useState(1);
  let [checked , setchecked] = useState<any>(1);
  let [xiaojiprice,setxiaoji] = useState(props.show[0].bookPrice);

  let sendobj = {
    username: username,
    bookname: bookname,
    bookprice: bookprice,
    chuban: chuban,
    imgurl: imgurl,
    year: year,
    author: author,
    count:count,
    checked:checked,
    xiaojiprice:xiaojiprice,
  };

  const success = () => {
    message.success("加入购物车成功");
  };

  const warning = () => {
    message.warning("您已经加入过购物车，不能重复添加");
  };

  const error = () => {
    message.error('您未登录，请登录');
  };

  const shopHandle = () => {
    // let number: any = 0;
    setnumber(++number);
    // console.log(number, );
    console.log(sessionStorage.name,"xxxxxxxxxxxxxxxxxxxxxxxxxxx");

    if (number == 1) {
      if (sessionStorage.name != undefined) {
        console.log(
          sessionStorage.name,
          sessionStorage.imgurl,
          sessionStorage.id
        );
        sendobj.username = sessionStorage.name;
        fetchpost("http://localhost:3001/car", sendobj);
        success();
      }
     
    }
    if (number != 1 && sessionStorage.name != undefined) {
      warning();
    }
    if (sessionStorage.name == undefined ) {
      error();
    }

  };

  return (
    <Layout title="详情页">
      <div className="body-newbookbox">
        {/*----------头部导航栏开始--------------------*/}
        <Topboxnav></Topboxnav>
        {/* ----------头部导航栏结束---------------------*/}
        {/*------书本详情框开始-------------------------- */}
        <div className="bookdetail-ershou">
          <div className="bookdetailbox">
            <div className="detailbook">书本详情</div>
          </div>
        </div>
        {/*------书本详情框结束--------------------------   */}
        {/* --------------主体部分-------------------------- */}
        {props.show.map((item: any) => {
          return (
            <div className="detailbox-jiuwang" key={item.bookName}>
              <div id="wrapper">
                <h1>
                  <span>{item.bookName}</span>
                  <div className="clear"></div>
                </h1>
                {/* --------------------*/}
                <div id="content">
                  <div className="grid-16-8 clearfix">
                    <div className="article">
                      <div className="indent">
                        <div className="subjectwrap clearfix">
                          <div className="subject clearfix">
                            <div id="mainpic">
                              <a>
                                <img
                                  src={`../static/images/image/${item.imgPath}`}
                                  className="mainpicimg"
                                />
                              </a>
                            </div>

                            {/* ---- */}
                            <div id="info">
                              <span className="pl">作者:</span>&nbsp;
                              <a href="https://book.douban.com/author/4530739/">
                                {item.author}
                              </a>
                              <br></br>
                              <span className="pl">出版社:</span>
                              {item.publishHouse}
                              <br></br>
                              <span className="pl">出品方:</span>&nbsp;
                              <a href="https://book.douban.com/series/41996?brand=1">
                                华文天下
                              </a>
                              <br></br>
                              <span className="pl">出版年:</span>{" "}
                              {item.publicationYear}
                              <br></br>
                              <span className="pl">页数:</span> 217<br></br>
                              <span className="pl">定价:</span> {item.bookPrice}
                              元<br></br>
                              <span className="pl">装帧:</span> 平装<br></br>
                              <span className="pl">丛书:</span>&nbsp;
                              <a href="https://book.douban.com/series/744">
                                华文天下2003版
                              </a>
                              <br></br>
                              <span className="pl">
                                ISBN:
                              </span> 9787806398791 <br></br>
                            </div>
                          </div>
                          {/* ---- */}
                          <div id="interest_sectl">
                            <div className="rating_wrap clearbox">
                              <div className="rating_logo">书籍评分</div>
                              <div className="rating_self clearfix">
                                <div
                                  className="novelgrade"
                                  style={{ float: "left", lineHeight: "30px" }}
                                >
                                  {item.grade}
                                </div>
                                <div>
                                  <img
                                    src="../../static/images/image/star1.png"
                                    width="20"
                                    height="20"
                                  />
                                  <img
                                    src="../../static/images/image/star1.png"
                                    width="20"
                                    height="20"
                                  />
                                  <img
                                    src="../../static/images/image/star1.png"
                                    width="20"
                                    height="20"
                                  />
                                  <img
                                    src="../../static/images/image/star1.png"
                                    width="20"
                                    height="20"
                                  />
                                  <img
                                    src="../../static/images/image/star.png"
                                    width="20"
                                    height="20"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="interest_sect_level">
                          <a className="j a_show_login colbutt ll">
                            <span>
                              <div className="minisubmit j">新书</div>
                            </span>
                          </a>
                          <a className="j a_show_login colbutt ll">
                            <span>
                              <div className="minisubmit j">想读</div>
                            </span>
                          </a>
                          <a className="j a_show_login colbutt ll">
                            <span>
                              <div className="minisubmit j">推荐</div>
                            </span>
                          </a>
                        </div>
                        {/* ------------------- */}
                        <div className="gtleft">
                          <ul className="ul_subject_menu bicelink color_gray pt6 clearfix">
                            <li>
                              <img src="https://img3.doubanio.com/f/shire/5bbf02b7b5ec12b23e214a580b6f9e481108488c/pics/add-review.gif" />
                              &nbsp;
                              <a
                                className="j a_show_login"
                                href="https://book.douban.com/annotation/write?sid=1060068"
                                rel="nofollow"
                              >
                                写笔记
                              </a>
                            </li>

                            <li>
                              <img src="https://img3.doubanio.com/f/shire/5bbf02b7b5ec12b23e214a580b6f9e481108488c/pics/add-review.gif" />
                              &nbsp;
                              <a
                                className="j a_show_login"
                                href="https://book.douban.com/subject/1060068/new_review"
                                rel="nofollow"
                              >
                                写书评
                              </a>
                            </li>

                            <li>
                              <span className="rr">
                                <img src="https://img3.doubanio.com/pics/add-cart.gif" />
                                <a
                                  className="j a_show_login shoppingnewbook"
                                  onClick={shopHandle}
                                >
                                  加入购物车
                                </a>
                              </span>
                              <br></br>
                            </li>

                            <li className="rec" id="C-1060068">
                              <a
                                href="#"
                                data-url="https://book.douban.com/subject/1060068/"
                                data-desc=""
                                data-title="书籍《撒哈拉的故事》 (来自豆瓣) "
                                data-pic="https://img3.doubanio.com/view/subject/l/public/s1066570.jpg"
                                className="bn-sharing"
                              >
                                分享到
                              </a>{" "}
                              &nbsp;&nbsp;
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* --------------------内容简介部分-------------- */}
                      <br></br>
                      <div className="related_info">
                        <h2 className="h231">
                          <span>内容简介</span>
                          &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
                        </h2>
                        <div id="link-report" className="indent2">
                          <div>
                            <div className="intro" style={{ color: "#111" }}>
                              {item.contentValidity}
                            </div>
                          </div>
                        </div>
                        {/* ----------作者简介--------------------- */}
                        <h2 className="h233">
                          <span>作者简介</span>
                          &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
                        </h2>
                        <div className="intro" style={{ color: "#111" }}>
                          {item.authorContent}
                        </div>
                        {/* ----------原文摘录--------------------- */}
                        <h2 className="h233">
                          <span>原文摘录</span>
                          &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·(全部)
                        </h2>
                        {/* <div className="intro" style={{color: "#111"}}></div> */}
                        <ul className="blockquote-list">
                          <li>
                            <figure>
                              <div className="tubiao-newbook"></div>
                              {item.yuanwen}
                              <a style={{ color: "#3377aa" }}> ( 查看原文 )</a>
                            </figure>
                          </li>
                          <li>
                            <figure>
                              <div className="tubiao-newbook"></div>
                              {item.zhailu}
                              <a style={{ color: "#3377aa" }}> ( 查看原文 )</a>
                            </figure>
                          </li>
                        </ul>
                        {/* -----------喜欢推荐 */}
                        <h2 className="h233">
                          <span>喜欢读《{item.bookName}》的人也喜欢</span>
                          &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
                        </h2>
                        <div className="sahalao-content clearfix">
                          <dl className="dl1">
                            <dt>
                              <a>
                                <img src={item.tuijian1}></img>
                              </a>
                            </dt>
                            <dd>{item.ren1}</dd>
                          </dl>
                          {/* 1 */}
                          <dl className="dl1">
                            <dt>
                              <a>
                                <img src={item.tuijian2}></img>
                              </a>
                            </dt>
                            <dd>{item.ren2}</dd>
                          </dl>
                          {/* 2 */}
                          <dl className="dl1">
                            <dt>
                              <a>
                                <img src={item.tuijian3}></img>
                              </a>
                            </dt>
                            <dd>{item.ren3}</dd>
                          </dl>
                          {/* 3 */}
                          <dl className="dl2">
                            <dt>
                              <a>
                                <img src={item.tuijian4}></img>
                              </a>
                            </dt>
                            <dd>{item.ren4}</dd>
                          </dl>
                          {/* 4 */}
                          <dl className="dltest">
                            <dt>
                              <a>
                                <img src={item.tuijian5}></img>
                              </a>
                            </dt>
                            <dd>{item.ren5}</dd>
                          </dl>
                          {/* 5 */}
                        </div>
                        {/* 评论开始 */}
                        <h2 className="h233">
                          <span>短评</span>
                          &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·(全部)
                        </h2>
                        <div className="nav-tab-new">
                          <div className="tabs-wrapper  line">
                            <a
                              className="short-comment-tabs on-tab"
                              style={{
                                color: "#111",
                                fontSize: "14px",
                                fontWeight: "bolder",
                              }}
                            >
                              热门
                            </a>
                            <span> / </span>
                            <a
                              className="short-comment-tabs "
                              style={{ color: "#3377aa" }}
                            >
                              最新
                            </a>
                            <span> / </span>
                            <a
                              className="j a_show_login "
                              style={{ color: "#3377aa" }}
                            >
                              好友
                            </a>
                          </div>
                        </div>
                        {/* ------评论主体开始了 */}
                        <div id="comment-list-wrapper" className="indent">
                          <div
                            id="new_score"
                            className="comment-list new_score show"
                          >
                            <ul>
                              <li className="comment-item">
                                <div className="comment">
                                  <h3>
                                    <span className="comment-info">
                                      <a style={{ color: "#3377aa" }}>
                                        {item.pinglunauthor1}
                                      </a>

                                      <span
                                        className="user-stars allstar50 rating"
                                        title="力荐"
                                        style={{
                                          marginLeft: "5px",
                                          marginRight: "5px",
                                          lineHeight: "14px",
                                        }}
                                      >
                                        <img
                                          src="../../static/images/image/star1.png"
                                          width="15"
                                          height="15"
                                        />
                                        <img
                                          src="../../static/images/image/star1.png"
                                          width="15"
                                          height="15"
                                        />
                                        <img
                                          src="../../static/images/image/star1.png"
                                          width="15"
                                          height="15"
                                        />
                                        <img
                                          src="../../static/images/image/star1.png"
                                          width="15"
                                          height="15"
                                        />
                                        <img
                                          src="../../static/images/image/star.png"
                                          width="15"
                                          height="15"
                                        />
                                      </span>
                                      <span
                                        className="comment-time"
                                        style={{ color: "#aaa" }}
                                      >
                                        {item.pingluntime1}
                                      </span>
                                    </span>
                                  </h3>
                                  <p className="comment-content">
                                    <span className="short">
                                      {item.pinglun1}
                                    </span>
                                  </p>
                                </div>
                              </li>
                              <li className="comment-item">
                                <div className="comment">
                                  <h3>
                                    <span className="comment-info">
                                      <a style={{ color: "#3377aa" }}>
                                        {item.pinglunauthor2}
                                      </a>

                                      <span
                                        className="user-stars allstar50 rating"
                                        title="力荐"
                                        style={{
                                          marginLeft: "5px",
                                          marginRight: "5px",
                                          lineHeight: "14px",
                                        }}
                                      >
                                        <img
                                          src="../../static/images/image/star1.png"
                                          width="15"
                                          height="15"
                                        />
                                        <img
                                          src="../../static/images/image/star1.png"
                                          width="15"
                                          height="15"
                                        />
                                        <img
                                          src="../../static/images/image/star1.png"
                                          width="15"
                                          height="15"
                                        />
                                        <img
                                          src="../../static/images/image/star.png"
                                          width="15"
                                          height="15"
                                        />
                                      </span>
                                      <span
                                        className="comment-time"
                                        style={{ color: "#aaa" }}
                                      >
                                        {item.pingluntime2}
                                      </span>
                                    </span>
                                  </h3>
                                  <p className="comment-content">
                                    <span className="short">
                                      {item.pinglun2}
                                    </span>
                                  </p>
                                </div>
                              </li>
                              <li className="comment-item">
                                <div className="comment">
                                  <h3>
                                    <span className="comment-info">
                                      <a style={{ color: "#3377aa" }}>
                                        {item.pinglunauthor3}
                                      </a>

                                      <span
                                        className="user-stars allstar50 rating"
                                        title="力荐"
                                        style={{
                                          marginLeft: "5px",
                                          marginRight: "5px",
                                          lineHeight: "14px",
                                        }}
                                      >
                                        <img
                                          src="../../static/images/image/star1.png"
                                          width="15"
                                          height="15"
                                        />
                                        <img
                                          src="../../static/images/image/star1.png"
                                          width="15"
                                          height="15"
                                        />
                                        <img
                                          src="../../static/images/image/star1.png"
                                          width="15"
                                          height="15"
                                        />
                                        <img
                                          src="../../static/images/image/star.png"
                                          width="15"
                                          height="15"
                                        />
                                      </span>
                                      <span
                                        className="comment-time"
                                        style={{ color: "#aaa" }}
                                      >
                                        {item.pingluntime3}
                                      </span>
                                    </span>
                                  </h3>
                                  <p className="comment-content">
                                    <span className="short">
                                      {item.pinglun3}
                                    </span>
                                  </p>
                                </div>
                              </li>
                            </ul>
                            <p className="pl">
                              &gt;
                              <a href="reviews" style={{ fontSize: "13px" }}>
                                {" "}
                                更多书评 2547篇
                              </a>
                            </p>
                          </div>
                        </div>
                        {/* ------右半部分下一个div */}
                      </div>
                      {/* ----------------------下面一个是article的div--------------------- */}
                    </div>
                    <Aside></Aside>
                  </div>
                  {/* -------------------------- */}

                  {/* <div className="extra"></div> */}
                </div>

                {/* -------------------- */}
              </div>
            </div>
          );
        })}

        {/* --------------主体部分结束-------------------------- */}
        <Footer></Footer>
      </div>
    </Layout>
  );
};

IndexPage.getInitialProps = async (context: any) => {
  // console.log(context.query)
  const { id } = context.query;
  const res = await fetch(`http://localhost:3001/essay/${id}`);
  const data = await res.json();
  //这边返回的数据会被挂载到组件的props中
  // console.log(data);
  return { show: data };
};

export default withRouter(IndexPage);
