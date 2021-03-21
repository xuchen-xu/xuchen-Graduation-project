// import Link from 'next/link'
import Layout from "../../components/Layout";
import { withRouter } from "next/router";
import React, { FC, useState, useEffect } from "react";
import "@/static/css/font-awesome.css";
// import "./css/index.css";
import fetch from "isomorphic-unfetch";
import { fetchpost, fetchget } from "../../utils/zgfetch";
import { Button, notification } from "antd";
import Router from "next/router";
// import Fromdemo from "./components/from"
import Topboxnav from "../components/topboxnavyidenglu";
import "./carshop.css";
import { Menu, Dropdown } from "antd";
import Item from "antd/lib/list/Item";

const IndexPage = (props: any) => {
  let url =
    "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1123237291,2005820395&fm=26&gp=0.jpg";

  let [imgurl, setimg] = useState(url);
  let [name, setname] = useState("未登录");
  let [show, setshow] = useState<any>([]);

  // let [count, setcount] = useState<any>(1);

  let [sumcount, setsum] = useState(0);

  let [sumprice, setprice] = useState(0);

  let [allzhuangtai, setallzhuangtai] = useState(false);

  let [checked, setchecked] = useState(true);

  // let [xiaoji,setxiaoji] = useState()

  useEffect(() => {
    getUser();
    getdata();
    // checkedshezhi();
    // countquanbu();
  }, []);

  var submittijiaodingdan = () => {
    var list = show;
    list.forEach((v: any, i: any) => {
      var sum = 0;
      // if (v.checked) {
      //   sum++;
      //   console.log(sum,v.checked,"xumxxxxxxxxx")
      // }
      if (v.checked) {
        var sumprice = zj();
        let sensobjtodingdan = {
          bookname: "",
          bookprice: 0,
          chubanshe: "",
          imgurl: "",
          year: "",
          author: "",
          count: 0,
          sumprice: sumprice,
          xiaojiprice : 0 
        };
        sensobjtodingdan.bookname = v.bookname;
        sensobjtodingdan.bookprice = v.bookprice;
        sensobjtodingdan.chubanshe = v.chubanshe;
        sensobjtodingdan.imgurl = v.imgurl;
        sensobjtodingdan.year = v.year;
        sensobjtodingdan.author = v.author;
        sensobjtodingdan.count = v.count;
        sensobjtodingdan.xiaojiprice = v.xiaojiprice;
        fetchpost("http://localhost:3001/dingdan", sensobjtodingdan);
        console.log(sensobjtodingdan, i, "订单数据循环发送");
        Router.push("/dingdan")
      } //else {
      //   alert("亲爱的读者，您还未选择商品哦，快来选购吧");
      // }
    });
  };


  const shanchucaozuo = (n:any)=>{
    var list = show;
    let sensobjtodingdan = {
      name : " "
    }
    sensobjtodingdan.name = list[n].bookname;
    fetchpost("http://localhost:3001/shanchu", sensobjtodingdan);
    getdata();
  }

  const getUser = () => {
    //    console.log(sessionStorage.name)
    if (sessionStorage.imgurl && sessionStorage.name) {
      setimg((imgurl = sessionStorage.imgurl));
      // console.log(imgurl);
      setname((name = sessionStorage.name));
      // console.log(imgurl);
    }
  };

  const jiafahandle = (n: any) => {
    var list = show;
    list[n].count++;
    var xiaojiprice=0;
    xiaojiprice = list[n].count * parseFloat(list[n].bookprice);
    list[n].xiaojiprice = xiaojiprice.toFixed(2);
    // console.log( list[n].count,"list数组的值xxxxxxxxxx")
    setshow([...list]);
    // console.log(list)
    // console.log(show);
  };

  const jianfa = (n: any) => {
    var list = show;
    list[n].count--;
    var xiaojiprice=0;
    if(list[n] > 0 ){
      xiaojiprice = list[n].count * parseFloat(list[n].bookprice);
      list[n].xiaojiprice = xiaojiprice.toFixed(2);
    }
  

    if (list[n].count <= 0) {
      alert("                         您最少买一个商品哦");
      // console.log("wwwwww")
      list[n].count = 1;
    }
    setshow([...list]);
  };

  const getdata = async () => {
    // console.log(name, "123456");
    if (name != "未登录") {
      let datas = await fetchget(
        `http://localhost:3001/qqwwaddcarshop/${name}`
      );
      if (datas) {
        setshow(datas);
      }
    }
    //  console.log(datas,'xxxxxxx')
  };

  const zj = () => {
    var list = show;
    var s = 0;

    list.forEach((v: any, i: any) => {
      if (v.checked) {
        s += v.bookprice * v.count;
      }
    });
    //  setprice(s);
    return s.toFixed(2);
  };

  // const xiaoji = (n:any)=>{
  //   var list = show;
  //   var s = 0;
  //   s = list[n].bookprice * list[n].count;
  //   // list.forEach((element:any) => {

  //   // });
  //   // setshow([...list]);
  //   console.log(s,"sssssssssssss");
  //   return s;
  // }

  const countquanbu = () => {
    var list = show;
    // console.log(list, "xxxxxxyoumeiyou1");
    var s = 0;
    list.forEach((v: any, i: any) => {
      if (v.count && v.checked) {
        s += parseInt(v.count);
      }
    });
    return s;
    // setsum(s);
  };

  const tg = (n: any) => {
    var list = show;
    list[n].checked = !list[n].checked;
    var sun = 0; //声明一个sun ，用来保存数值
    var ff = true; //声明一个状态 true  false 判断

    list.forEach((v: any, i: any) => {
      //循环加判断
      if (v.checked) {
        //如果多选框被选中的时候，就让sun加1
        sun++;
      }
    });

    if (sun == list.length) {
      //当sun被选中的数量等于它当前整体的长度的时候
      ff = true; //输出ff的状态为true
    } else {
      //反之
      ff = false;
    }
    setshow([...list]);
    setchecked(ff);
  };

  const qx = () => {
    var list = show;
    // checked=!checked;
    setchecked(!checked);
    // var c=!this.state.c;//--->先改变当前的全选状态为true
    list.forEach((v: any, i: any) => {
      //--->循环当前的list数组
      v.checked = !checked; //--->把全选的状态true赋值给good中的checked
    });
    setshow([...list]);
  };

 

  return (
    <Layout title="购物车页面">
      <div className="novel-body">
        <Topboxnav></Topboxnav>
        <div id="market-header" className="market-global-header">
          <div className="header-inner">
            <div className="logo" style={{ fontSize: "50px" }}>
              购物车
            </div>

            {/* 头像模块 */}
            <div className="market-user">
              <div className="user-people">
                <div className="user-pic" id="header-user-pic">
                  <img src={imgurl} />
                  <span>个人中心</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -----商品模块-- */}

        <div id="car" className="market-wrapper">
          <div className="cart-header" id="cart-header">
            <h3>全部商品</h3>
          </div>
          <div id="cart-section" className="cart-section">
            <div className="cart-content"></div>
            <table className="cart-table-header">
              <tbody > 
                <tr>
                  <th className="checkout"></th>
                  <th className="cart-item-info">商品信息</th>
                  <th className="cart-item-price">单价（元）</th>
                  <th className="cart-item-picker">数量</th>
                  <th className="cart-item-amount">小计（元）</th>
                  <th className="cart-item-actions"></th>
                </tr>
              </tbody>
            </table>
            <div className="shop-card-list" style={{paddingBottom:"400px"}}>
              <div className="shop-card">
                {/* <div className="shop-header"></div> */}
                <div className="shop-content-wrap">
                  <div className="shop-content">
                    <table
                      className="mui-table basic"
                      style={{ marginBottom: "300px", textAlign: "left" }}
                    >
                      <tbody className="tbodycarshop">
                        {show.map((item: any, index: any) => {
                          if (name != "未登录") {
                            return (
                              <tr className="item-row" key={index}>
                                <td className="checkout1 border-bottom">
                                  <input
                                    checked={item.checked}
                                    type="checkbox"
                                    className="mui-radio"
                                    // onClick={tg.bind(this, index)}
                                    onChange={tg.bind(this, index)}
                                  />
                                </td>

                                <td
                                  className="cart-item-info border-bottom "
                                  // style={{ width: "290px" }}
                                >
                                  <div
                                    className="cart-item"
                                    // style={{ width: "295px", overflow: "hidden" }}
                                  >
                                    <div className="item-pic">
                                      <a>
                                        {" "}
                                        <img
                                          src={`../../static/images/image/${item.imgurl}`}
                                          alt=""
                                        />
                                      </a>
                                    </div>
                                    <div className="cart-item-detail">
                                      <p className="item-title">
                                        <a>{item.bookname}</a>
                                      </p>
                                      <div className="item-info">
                                        {item.author}
                                      </div>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  className="cart-item-info border-bottom"
                                  style={{ width: "249px",paddingLeft:"0px"}}
                                >
                                  <span className="item-price">
                                    <em>
                                      {/* &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                                      &nbsp; */}
                                      <i>¥</i>
                                      &nbsp;{item.bookprice}
                                    </em>
                                  </span>
                                </td>
                                <td className="cart-item-picker border-bottom">
                                  <div className="item-number-picker">
                                    <div className="mui-number-picker">
                                      <div className="mui-number-picker">
                                        <i
                                          className="button-car"
                                          style={{
                                            fontSize: "30px",
                                            color: "gray",
                                          }}
                                          onClick={jianfa.bind(this, index)}
                                        >
                                          -
                                        </i>
                                        <span
                                          className="current-number number-content"
                                          style={{
                                            fontSize: "19px",
                                            lineHeight: "35px",
                                          }}
                                        >
                                          {item.count}
                                        </span>
                                        <i
                                          className="button-car"
                                          style={{
                                            fontSize: "30px",
                                            color: "gray",
                                          }}
                                          onClick={jiafahandle.bind(
                                            this,
                                            index
                                          )}
                                          // onChange={jiafahandle.bind(
                                          //      this,
                                          //     index
                                          //   )}
                                        >
                                          +
                                        </i>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td
                                  className="cart-item-amount border-bottom"
                                  style={{ width: "155px" }}
                                >
                                  <span className="item-amount">
                                    &nbsp; &nbsp; &nbsp;
                                    <i>¥</i> {item.xiaojiprice}
                                  </span>
                                </td>
                                <td className="cart-item-actions border-bottom">
                                  <div className="buttoncarshop">
                                    <i
                                      className="mui-icon close"
                                      style={{
                                        fontSize: "30px",
                                        color: "gray",
                                      }}
                                      onClick={shanchucaozuo.bind(this,index)}
                                    >
                                      x
                                    </i>
                                  </div>
                                </td>
                              </tr>
                            );
                          }
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="cart-footer-wrapper fixed">
                  <div className="market-wrapper">
                    <div className="cart-footer">
                      <div className="cart-actions">
                        <label className="select-all">
                          <span className="simulate-checkbox checked">
                            <i
                              className="mui-icon right"
                              style={{ display: "inline-block" }}
                            >
                              <input
                                type="checkbox"
                                className="mui-radio"
                                checked={checked}
                                // onClick={qx.bind(this)}
                                onChange={qx.bind(this)}
                              />
                            </i>
                          </span>
                          <span className="select-all-text">全选</span>
                        </label>
                        <span className="quantity-all">
                          已选择<b>{countquanbu()}</b>件商品
                        </span>
                      </div>
                      <div className="cart-info">
                        <span className="amount-all">
                          <span className="amount">
                            <em className="freight">不含运费</em>
                            <em className="amount-text">合计：</em>
                            {/* <b>¥ {sumprice}</b> */}
                            <b>¥ {zj()}</b>
                          </span>
                        </span>
                        <button
                          className="mui-button red l default"
                          type="button"
                          onClick={submittijiaodingdan.bind(this)}
                        >
                          结算
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -----商品模块-- */}
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
