// import Link from 'next/link'
import Layout from "../../components/Layout";
// import { withRouter } from "next/router";
import React from "react";
import "@/static/css/font-awesome.css";
import "../css/footerbook.css";
// import "./css/index.css";
// import fetch from "isomorphic-unfetch";
// import Fromdemo from "./components/from"
// 声明的全局数据

class IndexPage extends React.Component {
  render() {
    return (
      <div className="footer-box" id="footer">
        <div className="footer-wrap clearfix">
          <div className="copyright-info-box">
            © 2002-2021 Kongfz.com 孔子旧书网 版权所有
          </div>
          <div className="link-box">
            <a
              className="item"
              target="_blank"
              rel="nofollow"
              href="http://www.kongfz.com/help/aboutus.php"
            >
              关于孔网
            </a>
            <a
              className="item"
              target="_blank"
              rel="nofollow"
              href="http://www.kongfz.com/help/lianxi.html"
            >
              联系我们
            </a>
            <a
              className="item"
              target="_blank"
              rel="nofollow"
              href="http://help.kongfz.com/"
            >
              帮助中心
            </a>
            <a
              className="item"
              target="_blank"
              rel="nofollow"
              href="http://www.kongfz.com/help/copyright.php"
            >
              版权隐私
            </a>
            <a
              className="item"
              target="_blank"
              rel="nofollow"
              href="http://www.kongfz.com/help/guanggao.php"
            >
              广告业务
            </a>
            <a
              className="item"
              target="_blank"
              rel="nofollow"
              href="http://www.kongfz.com/help/zhaopin.php"
            >
              工作机会
            </a>
            <a className="item" target="_blank" href="https://m.kongfz.com/">
              移动版
            </a>
            <a className="item" target="_blank" href="http://book.kongfz.com/">
              图书目录
            </a>
            <a className="item" target="_blank" href="http://bq.kongfz.com/">
              图书标签
            </a>
          </div>
        </div>
      </div>
    );
  }
}

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
