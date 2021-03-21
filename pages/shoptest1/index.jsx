import React, { useState } from "react";
import style from "./shop.less"
class CartPage extends React.Component {
    state = {
        datalist:[
            {
                "imgUrl":"https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c8db2f99-d79e-4c4a-97e8-3e95c67a3b2e.jpg",
                "name": "小青菜350g",
                "newprice" : "4.5",
                "oldprice" : "4.9",
                "checked" :false,
                "count" :1
            },
        
            {
                "imgUrl":"https://img.wochu.cn/upload/abbc6852-711f-4d09-8e61-216c13505ccd.jpg",
                "name": "洪湖渔家香辣大闸蟹500g",
                "newprice" : "15.9",
                "oldprice" : "39.9",
                "checked" :false,
                "count" :1
        
            },
            {
                "imgUrl":"https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/c8db2f99-d79e-4c4a-97e8-3e95c67a3b2e.jpg",
                "name": "小青菜350g",
                "newprice" : "4.5",
                "oldprice" : "4.9",
                "checked" :false,
                "count" :1
        
            },
        ],
        all : false,
        sumprice :0,
        one : false,
        sumcount:0
    }

    render() {
        return (
            <div className={style.cartList}>
                <div className={style.cartListItem}>
                    <ul className={style.shopList} ref="myul">
                        {/* 对应的每个购物车条目 */}
                        {
                            this.state.datalist.map((item,index)=>
                                
                            <li key={index}> 
                            <input type="checkbox" className={style.checkbtn+' '+style.UnChecked}  ref="mytext"
                            onChange={()=>{this.handleChange(index)}} checked={item.checked} value=""
                            />
                            <div className={style.shopImg}>
                                {/* 点击图片跳转到页面详情 */}
                                <div className={style.shopImgShow}>
                                    <img src={item.imgUrl} alt=""/>
                                </div>
                            </div>
                            {/* 商品详情 */}
                            <div className={style.shopInfo}>
                                <div className={style.shopTitle}>{item.name}</div>
                                <div className={style.shopCoupen}></div>
                                <div className={style.shopPrice}>
                                    <div className={style.price}>
                                        <span>￥{item.newprice}</span>
                                        <i>￥{item.oldprice}</i>
                                    </div>
                                    <div className={style.shopSelect}>
                                        <button className={style.minus} onClick={()=>{this.handleMinus(index)}}>-</button>
                                        <input type="text" value={this.state.datalist[index].count||''} readOnly/>
                                        <button className={style.add} onClick={()=>{this.handleAdd(index)}}>+</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                            )
                        }
                        
                    </ul>
                </div>

                <div className={style.sum}>
                    <input type="checkbox" onChange={()=>{this.handleAll()}} checked={this.state.all} />
                    <div className={style.checkPrice}>
                        {/* 合算 */}
                        <div className={style.totalPrice}>
                            <span className={style.allsum}>合计</span>
                            <span>￥{this.state.sumprice}</span>
                        </div>
                        {/* 不含运费 */}
                        <div className={style.fee}>(不含运费)</div>
                    </div>

                        {/* 结算按钮 */}
                        <div className={this.state.one?style.btnCheck:style.btnNoCheck}>结算
                        <span>({this.state.sumcount})</span>
                        </div>
                </div>
               
            </div>
        );
    }


    // 单选
    handleChange(index){

        var list = [...this.state.datalist]
        list[index].checked = !list[index].checked
        
        
        var every=list.every((item,index)=>{
        return item.checked==true;
        })

        // 单选框中如果有一个是 checked的是true就可以
        var some = list.some((item,index)=>{
            return list[index].checked
        })
        
       
        this.setState({
            datalist :list,
            all : every,
            one : some  //设定结算框的样式是哪个，根据list[index].checked
        })
        
        this.SumPrice()

    }

    // 全选
    handleAll(){
        var list = [...this.state.datalist]
        var all = this.state.all
        all = ! all
        for(var i = 0 ; i < list.length ;i++){
            list[i].checked = all
        }      

        this.setState({
            all : all,
            one : all //全选的状态直接影响结算框的样式
        })
        this.SumPrice()
    }


    handleAdd(index){
        // 设定的value= {this.state.datalist[index].count}
        var list = [...this.state.datalist]
        list[index].count++;
        
        this.setState({
            datalist : list,
        })
       
        this.SumPrice()
       
    }

    handleMinus(index){
        // 设定的value= {this.state.datalist[index].count}
        var list = [...this.state.datalist];
        list[index].count--
        list[index].count=list[index].count<1?1:list[index].count; 
        this.setState({
            datalist : list
        })

        this.SumPrice()
    }

    SumPrice(){
        var sum=0
        var count = 0;
        var list = [...this.state.datalist]
        for(var i =0; i< list.length ;i++){
            if(list[i].checked=== true){
                sum += list[i].newprice *list[i].count
                count += list[i].count
            }
        }
        
        this.setState({
            sumprice : sum,
            sumcount : count //结算个数
        })
    }


    
    
    
}


export default CartPage;