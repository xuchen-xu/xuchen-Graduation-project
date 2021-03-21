import Link from "next/link";
import Layout from "../../../components/Layout";
import { withRouter } from "next/router";
import React, { useState, useRef } from "react";
import "@/static/css/font-awesome.css";
import "../../novel/common.css";
import fetch from "isomorphic-unfetch";
import Topboxnav from "../../components/topboxnav";
import { Pagination } from "antd";
// 声明的全局数据

type IProps = {
  show: any;
  // reload:any;
  // history:any
  reload: any;
};
type State = {
  minValue: number;
  maxValue: number;
  value1: any;
  show: any;
  // data:any,
  history: any;
};

let url = "http://localhost:3001/novel";
let data;

export default class IndexPage extends React.Component<IProps, State> {
  
  static async getInitialProps(context: any) {
    console.log(context.query);
    const { name } = context.query;
    // console.log(name, "88888888888888888888");
    // console.log( name );
    const res = await fetch(`http://localhost:3001/search/${encodeURI(name)}`);
    const data = await res.json();
    //这边返回的数据会被挂载到组件的props中
    // console.log(data,'88888888888888888888');
    return { show: data };
  }

  constructor(props: any) {
    super(props);
    this.state = {
      show: [],
      minValue: 0,
      maxValue: 10,
      value1: "",
      // data:[],
      history: () => {},
    };
  }

  handleChange = (value: any) => {
    if (value <= 1) {
      this.setState({
        minValue: 0,
        maxValue: 10,
      });
    } else {
      this.setState({
        // minValue: (value - 1) * 3,
        // maxValue: (value - 1) * 3 + 3,
        minValue: (value - 1) * 10,
        maxValue: (value - 1) * 10 + 10,
      });
    }
  };

  search = (e: any) => {
    console.log(e.target.value);
    this.setState({ value1: e.target.value });
  };
  toValue = () => {
    console.log(this.state.value1);
    // this.props.reload(this.state.value1)
    // this.state.history.push('/search')
    // url = `http://localhost:3001/search/${this.state.value1}`
    // IndexPage.getInitialProps();
    // this.setState({data:IndexPage.getInitialProps()})
    // data=IndexPage.getInitialProps();
  };

  render() {
    // let data = this.state.show;
    data = this.props.show;
    // this.setState({data:this.props.show});
    //  this.state.data=this.props.show;

    return (
      <Layout title="搜索详情">
        <div className="novel-body">
          <Topboxnav></Topboxnav>
          {/* -----------第二层top导航栏开始--------------- */}
          <div id="db-nav-book" className="nav" style={{ height: "75.35px" }}>
            <div className="nav-wrap" style={{ height: "75.677px" }}>
              <div className="nav-primary" style={{ height: "74px" }}>
                <div
                  className="nav-logo"
                  style={{ width: "145px", height: "56px", float: "left" }}
                >
                  <a href="" style={{ fontSize: "30px", fontWeight: "bolder" }}>
                    首页搜索
                  </a>
                </div>
                <div className="nav-search">
                  <fieldset>
                    {/* <label htmlFor="inp-query"></label>
                      <div className="inp">
                        <input
                          id="inp-query"
                          name="search_text"
                          placeholder="书名、作者、ISBN"
                          onChange={this.search}
                          
                        />
                      </div> */}
                    {/* <div className="inp-btn"> */}
                    {/* <input type="button" value="搜索" onClick={this.toValue} /> */}
                    {/* <a href={`/search/${this.state.value1}`} onClick={this.toValue} >sousuo</a> */}
                    {/* <Link href="/novel/name/[name]" as={"/novel/name/"+this.state.value1}>
                        <input type="button" value="搜索" onClick={this.toValue} />
                        </Link> */}
                    {/* </div> */}
                    <input type="hidden" name="cat" value="1001" readOnly />
                  </fieldset>
                </div>
              </div>
            </div>
            {/* <div className="nav-secondary">
              <div className="nav-items">
                <ul>
                  <li>
                    <a href="https://book.douban.com/cart/">购书单</a>
                  </li>
                  <li>
                    <a target="_blank">电子图书</a>
                  </li>
                  <li>
                    <a>孔网书店</a>
                  </li>
                  <li>
                    <a target="_blank">2021年度榜单</a>
                  </li>
                  <li>
                    <a target="_blank">2021书影音报告</a>
                  </li>
                  <li className=" book-cart">
                    <a target="_blank">购物车</a>
                  </li>
                </ul>
              </div>
            </div>*/}
          </div>
          {/* -----------第二层top导航栏结束--------------- */}
          {/* ---------------------主体部分------------------------ */}
          <div id="wrapper">
            <div id="content">
              <h1>搜索详情</h1>
              <div className="grid-16-8 clearfix">
                <div className="article">
                  <div id="subject_list">
                    <div className="clearfix">
                      <span className="rr greyinput">
                        综合排序 &nbsp;/&nbsp;
                        <a>按出版日期排序</a>
                        &nbsp;/&nbsp;
                        <a>按评价排序</a>
                      </span>
                    </div>
                    <ul className="subject-list">
                      {data &&
                        data.length > 0 &&
                        data
                          .slice(this.state.minValue, this.state.maxValue)
                          .map((item: any) => {
                            return (
                              <Link
                                href="/novel/[id]"
                                as={`/novel/${item.bookId}`}
                                key={item.bookId}
                              >
                                <li className="subject-item" key={item.bookId}>
                                  <div className="pic">
                                    <a href="">
                                      <img
                                        src={`../../../static/images/image/${item.imgPath}`}
                                        style={{
                                          width: "90px",
                                          height: "133px",
                                        }}
                                      />
                                    </a>
                                  </div>
                                  <div className="info">
                                    <h2 className="">
                                      <a title="活着">{item.bookName}</a>
                                    </h2>
                                    <div className="pub">
                                      {item.author} / {item.publishHouse} /{" "}
                                      {item.publicationYear}年 /{" "}
                                      {item.bookPrice}元
                                    </div>
                                    <div className="star clearfix">
                                      <span
                                        className="allstar45"
                                        style={{ lineHeight: "15px" }}
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
                                      <span className="rating_nums">
                                        {item.grade}
                                      </span>

                                      <span className="pl">(568337人评价)</span>
                                    </div>

                                    <p
                                      style={{
                                        height: "41px",
                                        marginTop: "13px",
                                        marginBottom: "13px",
                                        overflow: "hidden",
                                      }}
                                    >
                                      {item.contentValidity}
                                    </p>
                                    <div className="ft">
                                      <div className="collect-info"></div>

                                      <div className="cart-actions">
                                        <span className="market-info">
                                          <a target="_blank">在孔网购买</a>
                                        </span>
                                      </div>
                                      <div className="ebook-link">
                                        <a target="_blank">去看电子版</a>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </Link>
                            );
                          })}
                    </ul>
                    <div className="paginator">
                      <Pagination
                        defaultCurrent={1}
                        defaultPageSize={10}
                        onChange={this.handleChange}
                        total={data.length}
                        showSizeChanger
                        showQuickJumper
                      />
                    </div>
                  </div>
                </div>
                {/* ---------------侧边栏开始-------------------------- */}
                <div className="aside">
                  <br></br>
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
                    {/* ------------------------------------ */}
                    {/* <br></br> */}
                    <h2>
                      <span>相关的标签</span>
                      &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
                    </h2>
                    <div className="tags-list">
                      <a href="/tag/外国文学">外国文学</a>
                      <a href="/tag/言情">言情</a>
                      <a href="/tag/美国">美国</a>
                      <a href="/tag/文学">文学</a>
                      <a href="/tag/爱情">爱情</a>
                      <a href="/tag/中国">中国</a>
                      <a href="/tag/中国文学">中国文学</a>
                      <a href="/tag/英国">英国</a>
                    </div>
                    <form name="tsp_form" action="/tag/" method="GET">
                      <input
                        name="search_text"
                        className="j a_search_text greyinput"
                        type="text"
                        title="去其他标签"
                        value="去其他标签"
                        readOnly
                      />
                      <input className="butt" type="submit" value="进入" />
                    </form>
                    <br></br>
                    <br></br>
                    <p className="pl2 mb30">
                      &gt; <a href="/tag/">浏览全部图书标签</a>
                    </p>
                    <br />
                    <br />
                    <div className="block5 movie_show">
                      <h2>最近受关注的书.....</h2>
                      <div id="book_rec" className="content clearfix">
                        <dl>
                          {/* <dd> */}
                          <dt>
                            <a>
                              <img
                                src="https://img3.doubanio.com/view/subject/s/public/s29520401.jpg"
                                className="m_sub_img"
                              />
                            </a>
                          </dt>
                          {/* </dd> */}
                          <dd>
                            <a>飞行家</a>
                          </dd>
                        </dl>
                        <dl>
                          {/* <dd> */}
                          <dt>
                            <a>
                              <img
                                src="https://img2.doubanio.com/view/subject/s/public/s33685372.jpg"
                                className="m_sub_img"
                              />
                            </a>
                          </dt>
                          {/* </dd> */}
                          <dd>
                            <a>绝叫</a>
                          </dd>
                        </dl>
                        <dl>
                          {/* <dd> */}
                          <dt>
                            <a>
                              <img
                                src="https://img1.doubanio.com/view/subject/s/public/s33789487.jpg"
                                className="m_sub_img"
                              />
                            </a>
                          </dt>
                          {/* </dd> */}
                          <dd>
                            <a>晚婚</a>
                          </dd>
                        </dl>
                        <div
                          className="clearfix rr"
                          style={{ width: "100%" }}
                        ></div>
                        <dl>
                          {/* <dd> */}
                          <dt>
                            <a>
                              <img
                                src="https://img9.doubanio.com/view/subject/s/public/s29488274.jpg"
                                className="m_sub_img"
                              />
                            </a>
                          </dt>
                          {/* </dd> */}
                          <dd>
                            <a>西线无战事</a>
                          </dd>
                        </dl>
                        <dl>
                          {/* <dd> */}
                          <dt>
                            <a>
                              <img
                                src="https://img2.doubanio.com/view/subject/s/public/s33815103.jpg"
                                className="m_sub_img"
                              />
                            </a>
                          </dt>
                          {/* </dd> */}
                          <dd>
                            <a>全球高考</a>
                          </dd>
                        </dl>
                        <dl>
                          {/* <dd> */}
                          <dt>
                            <a>
                              <img
                                src="https://img9.doubanio.com/view/subject/s/public/s33797216.jpg"
                                className="m_sub_img"
                              />
                            </a>
                          </dt>
                          {/* </dd> */}
                          <dd>
                            <a>坠物之声</a>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    {/* -------------------------------------- */}
                  </div>
                </div>

                {/* ------侧边栏结束------------------------------ */}
                <div className="extra"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

// getInitialProps 方法既可以在服务器运行，又可以在客户端运行(组件创建之前执行的)
// 当刷新页面(初次载入页面)，该方法会在服务器执行
// 当通过<Link>跳转路由的时候，该方法会在客户端执行
// IndexPage.getInitialProps = async () => {
//   const res = await fetch("http://localhost:3001/novel");
//   const data = await res.json();
//   //这边返回的数据会被挂载到组件的props中
//   return { show: data };
// };

// export default withRouter(IndexPage);
