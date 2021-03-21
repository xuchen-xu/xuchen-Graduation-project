// import Link from 'next/link'
import Layout from "../../components/Layout";
// import { withRouter } from "next/router";
import React from "react";
// import { useEffect } from "react";
// import { Button } from 'antd';
//开启css模块化之后可以这样使用样式
// import cssobj from './index.less'
import cssobj from "../css/home.less";
import "@/static/css/font-awesome.css";
import "../css/home.css";
import fetch from "isomorphic-unfetch";

import { Carousel } from "antd";
// import ColumnGroup from "antd/lib/table/ColumnGroup";
// import { type } from "os";
import { Menu, Dropdown } from "antd";
import { DownOutline } from "@ant-design/icons";
import Link from "next/link";
const { SubMenu } = Menu;
import { Tabs } from "antd";

const { TabPane } = Tabs;

// 声明的全局数据
const menu1 = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        // href="http://www.alipay.com/"
      >
        我的好友
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        // href="http://www.taobao.com/"
      >
        资金账户
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        图书收藏
      </a>
    </Menu.Item>
    <Menu.Item >拍卖交易</Menu.Item>
  </Menu>
);

const menu2 = (
  <Menu>
    <Menu.ItemGroup title="店铺">
      <Menu.Item>免费摆地摊</Menu.Item>
      <Menu.Item>申请开店</Menu.Item>
    </Menu.ItemGroup>
    <SubMenu title="拍卖">
      <Menu.Item>申请拍卖会员</Menu.Item>
      <Menu.Item>拍卖信息</Menu.Item>
    </SubMenu>
    {/* <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu> */}
  </Menu>
);

const menu3 = (
  <Menu>
    <Menu.ItemGroup title="APP客户端">
      {/* <Menu.Item>
        <img src="../static/images/app.jpg" width="150" height="150" />
      </Menu.Item> */}
      {/* <Menu.Item>iOS • Android</Menu.Item> */}
    </Menu.ItemGroup>
    <Menu.ItemGroup>
      <img
        src="../static/images/app.jpg"
        width="150"
        height="150"
        style={{ marginRight: "10px", marginLeft: "10px" }}
      />
    </Menu.ItemGroup>
    <Menu.ItemGroup title="iOS • Android"></Menu.ItemGroup>
  </Menu>
);

// 声明的全局数据
var imgnumber: number = 0;

type state = {
  selected: boolean;
};

type IProps = {
  show: [{}];
};
export default class IndexPage extends React.Component<IProps, state> {

  static async getInitialProps() {
    const res = await fetch("http://localhost:3001/essay");
    const show = await res.json();
    //这边返回的数据会被挂载到组件的props中
    return { show };
  }
  
  constructor(props: any) {
    super(props);
    this.state = { selected: false };
  }
  handleClick = (e: any) => {
    this.setState({ selected: !this.state.selected }, () => {
      if (!this.state.selected) {
        // this.clearAll();
      }
    });
  };

  callback = (key: any) => {
    console.log(key);
  };

  render() {
    var currentstyle;
    return (
      <Layout title="新书资讯">
        <div>
          <div className={cssobj.shortcut}>
            <div className={cssobj.headerWrap}>
              <div className={cssobj.sloganBox}>
                <span className={cssobj.text}>网罗天下图书</span>
                <span>传承中华文明</span>
              </div>
            </div>
            <div className={[cssobj.userinfobox, cssobj.clearfix].join(" ")}>
              {/* 1 */}
              <div className={cssobj.itemInfo}>
                <span className={cssobj.infoNormal}>
                  <span className={cssobj.infoText}>登录</span>
                  <span className={cssobj.infoText}>/</span>
                  <span className={cssobj.infoText}>注册</span>
                </span>
                {/* 
                 <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Hover me <DownOutlined />
    </a>
  </Dropdown>
                */}
              </div>
              <div className={cssobj.itemInfo}>
                <a
                  href="/carshop"
                  className={cssobj.infoLink}
                  target="_blank"
                  rel="nofollow"
                  style={{ color: "#fff" }}
                >
                  <span
                    className={["fa", "fa-shopping-cart", cssobj.tubiao].join(
                      " "
                    )}
                  ></span>
                  <span className={cssobj.infoText}>购物车</span>
                </a>
              </div>
              <Dropdown overlay={menu1}>
                <div className={cssobj.itemInfo}>
                  <a
                    href="http://shop.kongfz.com/buyer/order/order_list.html"
                    className={[cssobj.infoLink, "ant-dropdown-link"].join(" ")}
                    target="_blank"
                    rel="nofollow"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className={cssobj.infoText}>个人中心</span>
                  </a>
                </div>
              </Dropdown>
              {/*  */}
              {/* 2 */}
              <div className={cssobj.itemInfo}>
                <a
                  href="http://shop.kongfz.com/buyer/order/order_list.html"
                  className={cssobj.infoLink}
                  target="_blank"
                  rel="nofollow"
                >
                  <span className={cssobj.infoText}>我的订单</span>
                </a>
              </div>
              <Dropdown overlay={menu2}>
                <div className={cssobj.itemInfo}>
                  <a
                    href="http://shop.kongfz.com/buyer/order/order_list.html"
                    className={[cssobj.infoLink, "ant-dropdown-link"].join(" ")}
                    target="_blank"
                    rel="nofollow"
                  >
                    <span className={cssobj.infoText}>卖家中心</span>
                  </a>
                </div>
              </Dropdown>
              <div className={cssobj.itemInfo}>
                <a
                  href="http://shop.kongfz.com/buyer/order/order_list.html"
                  className={[cssobj.infoLink, "ant-dropdown-link"].join(" ")}
                  target="_blank"
                  rel="nofollow"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className={cssobj.infoText}>客服</span>
                </a>
              </div>
              {/* 3 */}
              <Dropdown overlay={menu3}>
                <div className={cssobj.itemInfo}>
                  <a
                    href="http://shop.kongfz.com/buyer/order/order_list.html"
                    className={[cssobj.infoLink, "ant-dropdown-link"].join(" ")}
                    target="_blank"
                    rel="nofollow"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className={cssobj.infoText}>手机版</span>
                  </a>
                </div>
              </Dropdown>
              <div className={cssobj.itemInfo}></div>
              <div className={cssobj.itemInfo}></div>
              <div className={cssobj.itemInfo}></div>
              <div className={cssobj.itemInfo}></div>
              <div className={cssobj.itemInfo}></div>
              <div className={cssobj.itemInfo}></div>
              <div className={cssobj.itemInfo}></div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------------------- */}
        <div className="container clear">
          <div className="nov-fir clear">
            <div className="code"></div>
          </div>
          <div className="dbg">
            <div className="nov-primary clear">新书资讯</div>
            <div className="nov-sec">
              <div className="novel">
                <a href="/novel" target="_blank">
                  小说
                </a>
              </div>
              <div className="essay">
                <a href="/essay" target="_blank">
                  散文
                </a>
              </div>
              <div className="poetry">
                <a href="/jotting" target="_blank">
                  随笔
                </a>
              </div>
              <div className="work">
                <a href="/literature" target="_blank">
                  文学
                </a>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------- */}
          {/* <LunBoComponent lunboObject={data.lunboObject} imgArray={data.imgArray} linkArray={data.linkArray}/>, document.getElementById('wrapper') */}
          <div>
            <Carousel autoplay>
              <div>
                {/* <h3 className="contentStyle">1</h3> */}
                <img src="../static/lunbo/lun0.jpg" width="1200" height="270" />
              </div>
              <div>
                <img
                  src="../static/lunbo/lun11.jpg"
                  width="1200"
                  height="270"
                />
              </div>
              <div>
                <img src="../static/lunbo/lun2.jpg" width="1200" height="270" />
              </div>
              <div>
                <img src="../static/lunbo/lun3.jpg" width="1200" height="270" />
              </div>
              <div>
                <img src="../static/lunbo/lun4.jpg" width="1200" height="270" />
              </div>
            </Carousel>
          </div>
          {/* , mountNode, */}
          {/* <div className="nov-thi clear"> */}
          {/* <img src="../static/images/image/2.jpg"></img> */}
          {/* </div> */}
          <div className="nov-for clear">
            <div>新书速递</div>
            <div>更多»</div>
          </div>
          {/* ----------------------------------------------- */}

          <div className="nov-fif clear">
            {this.props.show.map((item: any) => {
              imgnumber++;
              if (imgnumber < 22) {
                return (
                  <Link
                    href="/newbook/[id]"
                    as={`/newbook/${item.bookId}`}
                    key={item.bookId}
                  >
                    <div key={item.bookId}>
                      <img
                        src={`../static/images/image/${item.imgPath}`}
                        width="115"
                        height="172"
                      />
                      {item.bookName}
                      <div>作者:{item.author}</div>
                    </div>
                  </Link>
                );
              }
            })}
          </div>

          {/* ----------------------------------------------- */}
          {/* <%--豆瓣日历--%> */}
          <div className="nov-cal clear">
            <img src="../static/images/mulu.jpg" width="675" height="120" />
          </div>
          <div>
            <div className="book-news clear">图书资讯</div>
            <div className="book-news-content clear">
              <div className="bluetext">
                孔网一周新书速递｜陈春成首部短篇小说集，呈现汉语小说的一种风度与新的可能性
              </div>
              <div className="graytext">读书推荐</div>
              <div className="blacktext">
                虚构类
                *特别推荐仿佛鸟栖树，鱼潜渊，一切稳妥又安宁，夜晚这才真正地降临。
                《夜晚的潜水艇》是作家陈春成的首部短篇小说集。九个故事，笔锋游走于旧山河与未知宇宙间，以瑰奇飘扬的想象、温厚清幽的笔法，
                在现实与幻境间辟开若干条秘密的通道：海底漫游的少年、深山遗落的古碑、弥散入万物的字句、云彩修剪站、铸剑与酿酒、铁幕下的萨克斯、蓝鲸内的演奏厅……
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------ */}
        <div>
          <div className="most-like">
            <div className="like" style={{ marginLeft: 168 }}>
              最受关注图书榜
            </div>
            <div className="like1">
              <div>虚构类»</div>
              <div>非虚构类»</div>
            </div>
          </div>
          <div className="like-content clear" style={{ marginLeft: 250 }}>
            {this.props.show.map((item: any) => {
              // let grade = item.grade;
              if (item.bookId < 32 && item.bookId > 22) {
                if (item.grade < 9) {
                  return (
                    <div key={item.bookId}>
                      <img
                        src={`../static/images/image/${item.imgPath}`}
                        width="85"
                        height="120"
                      ></img>
                      <br></br>
                      <div className="bk clear">
                        <div className="bookname">{item.bookName}</div>
                        <br></br>
                        <div className="dbgrade">
                          <div>评分：</div>
                          <div className="cl">
                            <React.Fragment>
                              <div className="grade">{item.grade}</div>
                              <img
                                src="../static/images/image/star1.png"
                                height="11"
                                width="11"
                              ></img>
                              <img
                                src="../static/images/image/star1.png"
                                height="11"
                                width="11"
                              ></img>
                              <img
                                src="../static/images/image/star1.png"
                                height="11"
                                width="11"
                              ></img>
                              <img
                                src="../static/images/image/star1.png"
                                height="11"
                                width="11"
                              ></img>
                            </React.Fragment>
                          </div>
                        </div>
                        <div className="bookau">作者:{item.author}</div>
                        <br></br>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={item.bookId}>
                      <img
                        src={`../static/images/image/${item.imgPath}`}
                        width="85"
                        height="120"
                      ></img>
                      <br></br>
                      <div className="bk clear">
                        <div className="bookname">{item.bookName}</div>
                        <br></br>
                        <div className="dbgrade">
                          <div>评分：</div>
                          <div className="cl">
                            <React.Fragment>
                              <div className="grade">{item.grade}</div>
                              <img
                                src="../static/images/image/star1.png"
                                height="11"
                                width="11"
                              ></img>
                              <img
                                src="../static/images/image/star1.png"
                                height="11"
                                width="11"
                              ></img>
                              <img
                                src="../static/images/image/star1.png"
                                height="11"
                                width="11"
                              ></img>
                              <img
                                src="../static/images/image/star1.png"
                                height="11"
                                width="11"
                              ></img>
                              <img
                                src="../static/images/image/star1.png"
                                height="11"
                                width="11"
                              ></img>
                            </React.Fragment>
                          </div>
                        </div>
                        <div className="bookau">作者:{item.author}</div>
                        <br></br>
                      </div>
                    </div>
                  );
                }
              }
            })}
          </div>
        </div>
        {/* ------------------------------------------------------------------------------ */}
        <footer>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="content">
            <div className="friend_link_box">
              <div className="friend_link_tit clearfix">
                <Tabs
                  defaultActiveKey="1"
                  onChange={this.callback}
                  tabPosition="top"
                >
                  <TabPane tab="合作伙伴" key="1">
                    {/* <a style={{ textDecoration: "none" }} className="now"> */}
                    {/* <a href="" className={["", this.state.selected ? "now":null].join(' ')} style={{ textDecoration: "none" }} onClick={this.handleClick.bind(this)}> */}
                    <div className="friend_link_list clearfix m_t10">
                      <div className="f_box">
                        <ul>
                          <li>
                            <a
                              href="http://history.sohu.com/"
                              target="_blank"
                              className="black333"
                            >
                              搜狐历史
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://www.xilu.com/"
                              target="_blank"
                              className="black333"
                            >
                              西陆军事网
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.koolearn.com"
                              target="_blank"
                              className="black333"
                            >
                              新东方在线
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://www.kaoyan.com/"
                              target="_blank"
                              className="black333"
                            >
                              考研帮
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://www.banbijiang.com/"
                              target="_blank"
                              className="black333"
                            >
                              半壁江中文网
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.tianyancha.com/"
                              target="_blank"
                              className="black333"
                            >
                              天眼查
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://www.zjguji.com/"
                              target="_blank"
                              className="black333"
                            >
                              浙江古籍出版社
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://www.tuniu.com/"
                              target="_blank"
                              className="black333"
                            >
                              途牛旅游网
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://www.cmr.com.cn/"
                              target="_blank"
                              className="black333"
                            >
                              网络教育
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://www.rongbaozhai.cn/"
                              target="_blank"
                              className="black333"
                            >
                              荣宝斋
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.ooopic.com/"
                              target="_blank"
                              className="black333"
                            >
                              我图网
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.hjenglish.com/"
                              target="_blank"
                              className="black333"
                            >
                              沪江英语
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.ximalaya.com/"
                              target="_blank"
                              className="black333"
                            >
                              有声小说
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://book.kongfz.com/newbook/"
                              target="_blank"
                              className="black333"
                            >
                              每日上书
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://www.zashuguan.cn/"
                              target="_blank"
                              className="black333"
                            >
                              杂书馆
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/community/links.php"
                              target="_blank"
                              className="black333"
                            >
                              更多友链 &gt;&gt;
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* </a> */}
                    </div>
                  </TabPane>
                  <TabPane tab="友情链接" key="2">
                    <div className="friend_link_list clearfix m_t10">
                      <div className="f_box">
                        <ul>
                          <li>
                            <a href="http://www.kongfz.cn/" target="_blank">
                              拍卖网站
                            </a>{" "}
                          </li>
                          <li>
                            <a href="https://www.smzdm.com/" target="_blank">
                              什么值得买
                            </a>{" "}
                          </li>
                          <li>
                            <a href="https://www.qcc.com/" target="_blank">
                              企查查
                            </a>{" "}
                          </li>
                          <li>
                            <a href="https://book.tiexue.net/" target="_blank">
                              军事读书
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.canet.com.cn/" target="_blank">
                              中国会计网
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.huatu.com/" target="_blank">
                              公务员考试网
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.kekenet.com/" target="_blank">
                              可可英语
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.02516.com/" target="_blank">
                              网址导航
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.bookschina.com/"
                              target="_blank"
                            >
                              中国图书网
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.63243.com/" target="_blank">
                              网址大全
                            </a>{" "}
                          </li>
                          <li>
                            <a href="https://www.zhipin.com/" target="_blank">
                              招聘网
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.jmw.com.cn/" target="_blank">
                              加盟
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.qianlima.com/" target="_blank">
                              千里马招投标
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.chexun.com/" target="_blank">
                              车讯网
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.cifnews.com/" target="_blank">
                              跨境电商
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.ebrun.com" target="_blank">
                              亿邦动力网
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.aoshu.com" target="_blank">
                              奥数
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.959.cn/" target="_blank">
                              959品牌商机网
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.51bi.com/" target="_blank">
                              返利网
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.southmoney.com/"
                              target="_blank"
                            >
                              股票
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.lvye.cn/" target="_blank">
                              绿野网
                            </a>{" "}
                          </li>
                          <li>
                            <a href="https://www.wed114.cn/" target="_blank">
                              wed114结婚网
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.zbird.com/" target="_blank">
                              钻石小鸟
                            </a>{" "}
                          </li>
                          <li>
                            <a href="https://www.zhifang.com/" target="_blank">
                              智房旅游地产
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.zhulong.com/" target="_blank">
                              建筑
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.anzhi.com/" target="_blank">
                              安卓市场
                            </a>{" "}
                          </li>
                          <li>
                            <a href="https://office.fang.com/" target="_blank">
                              北京写字楼网
                            </a>{" "}
                          </li>
                          <li>
                            <a href="https://www.kanzhun.com/" target="_blank">
                              看准网
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.rbz1672.com/" target="_blank">
                              荣宝斋在线
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="f_box" style={{ display: "block" }}>
                        <ul>
                          <li>
                            <a href="http://bq.kongfz.com/" target="_blank">
                              图书大全
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/topic/"
                              target="_blank"
                            >
                              热搜专题
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/"
                              target="_blank"
                            >
                              出版社大全
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/"
                              target="_blank"
                            >
                              作家大全
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="https://shoushu.kongfz.com/"
                              target="_blank"
                            >
                              上门收书
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/kexuechubanshe/"
                              target="_blank"
                            >
                              科学出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/qinghuadaxue/"
                              target="_blank"
                            >
                              清华大学出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/zhongguobiaozhun/"
                              target="_blank"
                            >
                              中国标准出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/dianzigongye/"
                              target="_blank"
                            >
                              电子工业出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/huaxuegongye/"
                              target="_blank"
                            >
                              化学工业出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/beijingdaxuechubanshe/"
                              target="_blank"
                            >
                              北京大学出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/renminweisheng/"
                              target="_blank"
                            >
                              人民卫生出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/zhongguojianzhugongye/"
                              target="_blank"
                            >
                              中国建筑工业出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/zhongguorenmindaxue/"
                              target="_blank"
                            >
                              中国人民大学出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/shangwuyinshuguan"
                              target="_blank"
                            >
                              商务印书馆
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/zhongguotiedao/"
                              target="_blank"
                            >
                              中国铁道出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/renminchubanshe/"
                              target="_blank"
                            >
                              人民出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/zhongguodianli/"
                              target="_blank"
                            >
                              中国电力出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/zhonghuashuju/"
                              target="_blank"
                            >
                              中华书局
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/falvchubanshe/"
                              target="_blank"
                            >
                              法律出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/gaodengjiaoyu/"
                              target="_blank"
                            >
                              高等教育出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/jixiegongye/"
                              target="_blank"
                            >
                              机械工业出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/jinyong/"
                              target="_blank"
                            >
                              金庸
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/cunshangchunshu/"
                              target="_blank"
                            >
                              村上春树
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/maodun/"
                              target="_blank"
                            >
                              茅盾
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/zhangxiaoxian/"
                              target="_blank"
                            >
                              张小娴
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/wangxiaobo/"
                              target="_blank"
                            >
                              王小波
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/laoshe/"
                              target="_blank"
                            >
                              老舍
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tab="推荐专题" key="3">
                    <div className="friend_link_list clearfix m_t10">
                      <div className="f_box" style={{ display: "none" }}>
                        <ul>
                          <li>
                            <a href="http://www.kongfz.cn/" target="_blank">
                              拍卖网站
                            </a>{" "}
                          </li>
                          <li>
                            <a href="https://www.smzdm.com/" target="_blank">
                              什么值得买
                            </a>{" "}
                          </li>
                          <li>
                            <a href="https://www.qcc.com/" target="_blank">
                              企查查
                            </a>{" "}
                          </li>
                          <li>
                            <a href="https://book.tiexue.net/" target="_blank">
                              军事读书
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.canet.com.cn/" target="_blank">
                              中国会计网
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.huatu.com/" target="_blank">
                              公务员考试网
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.kekenet.com/" target="_blank">
                              可可英语
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.02516.com/" target="_blank">
                              网址导航
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.bookschina.com/"
                              target="_blank"
                            >
                              中国图书网
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.63243.com/" target="_blank">
                              网址大全
                            </a>{" "}
                          </li>
                          <li>
                            <a href="https://www.zhipin.com/" target="_blank">
                              招聘网
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.jmw.com.cn/" target="_blank">
                              加盟
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.qianlima.com/" target="_blank">
                              千里马招投标
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.chexun.com/" target="_blank">
                              车讯网
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.cifnews.com/" target="_blank">
                              跨境电商
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.ebrun.com" target="_blank">
                              亿邦动力网
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.aoshu.com" target="_blank">
                              奥数
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.959.cn/" target="_blank">
                              959品牌商机网
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.51bi.com/" target="_blank">
                              返利网
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.southmoney.com/"
                              target="_blank"
                            >
                              股票
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.lvye.cn/" target="_blank">
                              绿野网
                            </a>{" "}
                          </li>
                          <li>
                            <a href="https://www.wed114.cn/" target="_blank">
                              wed114结婚网
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.zbird.com/" target="_blank">
                              钻石小鸟
                            </a>{" "}
                          </li>
                          <li>
                            <a href="https://www.zhifang.com/" target="_blank">
                              智房旅游地产
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.zhulong.com/" target="_blank">
                              建筑
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.anzhi.com/" target="_blank">
                              安卓市场
                            </a>{" "}
                          </li>
                          <li>
                            <a href="https://office.fang.com/" target="_blank">
                              北京写字楼网
                            </a>{" "}
                          </li>
                          <li>
                            <a href="https://www.kanzhun.com/" target="_blank">
                              看准网
                            </a>{" "}
                          </li>
                          <li>
                            <a href="http://www.rbz1672.com/" target="_blank">
                              荣宝斋在线
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="f_box" style={{ display: "block" }}>
                        <ul>
                          <li>
                            <a href="http://bq.kongfz.com/" target="_blank">
                              图书大全
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/topic/"
                              target="_blank"
                            >
                              热搜专题
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/"
                              target="_blank"
                            >
                              出版社大全
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/"
                              target="_blank"
                            >
                              作家大全
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="https://shoushu.kongfz.com/"
                              target="_blank"
                            >
                              上门收书
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/kexuechubanshe/"
                              target="_blank"
                            >
                              科学出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/qinghuadaxue/"
                              target="_blank"
                            >
                              清华大学出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/zhongguobiaozhun/"
                              target="_blank"
                            >
                              中国标准出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/dianzigongye/"
                              target="_blank"
                            >
                              电子工业出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/huaxuegongye/"
                              target="_blank"
                            >
                              化学工业出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/beijingdaxuechubanshe/"
                              target="_blank"
                            >
                              北京大学出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/renminweisheng/"
                              target="_blank"
                            >
                              人民卫生出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/zhongguojianzhugongye/"
                              target="_blank"
                            >
                              中国建筑工业出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/zhongguorenmindaxue/"
                              target="_blank"
                            >
                              中国人民大学出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/shangwuyinshuguan"
                              target="_blank"
                            >
                              商务印书馆
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/zhongguotiedao/"
                              target="_blank"
                            >
                              中国铁道出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/renminchubanshe/"
                              target="_blank"
                            >
                              人民出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/zhongguodianli/"
                              target="_blank"
                            >
                              中国电力出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/zhonghuashuju/"
                              target="_blank"
                            >
                              中华书局
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/falvchubanshe/"
                              target="_blank"
                            >
                              法律出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/gaodengjiaoyu/"
                              target="_blank"
                            >
                              高等教育出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/publisher/jixiegongye/"
                              target="_blank"
                            >
                              机械工业出版社
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/jinyong/"
                              target="_blank"
                            >
                              金庸
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/cunshangchunshu/"
                              target="_blank"
                            >
                              村上春树
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/maodun/"
                              target="_blank"
                            >
                              茅盾
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/zhangxiaoxian/"
                              target="_blank"
                            >
                              张小娴
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/wangxiaobo/"
                              target="_blank"
                            >
                              王小波
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/laoshe/"
                              target="_blank"
                            >
                              老舍
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/moyan/"
                              target="_blank"
                            >
                              莫言
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/luxun/"
                              target="_blank"
                            >
                              鲁迅
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/j-k-luolin/"
                              target="_blank"
                            >
                              J.K.罗琳
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/zhangailing/"
                              target="_blank"
                            >
                              张爱玲
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/yuhua/"
                              target="_blank"
                            >
                              余华
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/qiongyao/"
                              target="_blank"
                            >
                              琼瑶
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/zhangdaqian/"
                              target="_blank"
                            >
                              张大千
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/xubeihong/"
                              target="_blank"
                            >
                              徐悲鸿
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/dafenqi/"
                              target="_blank"
                            >
                              达芬奇
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/annibaobei/"
                              target="_blank"
                            >
                              安妮宝贝
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/bingxin/"
                              target="_blank"
                            >
                              冰心
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="http://www.kongfz.com/writer/haiyan/"
                              target="_blank"
                            >
                              海岩
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </div>
          <span>© 2020－2020 baofu.com, all rights reserved 孔子旧书网</span>
          <br></br>
          <span>联系我们 xinguan@weibo.com</span>
        </footer>
        {/* ------------------------------------------------------------------------------ */}
      </Layout>
    );
  }
}
