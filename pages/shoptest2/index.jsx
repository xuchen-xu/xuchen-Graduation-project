import React, {Component} from 'react'; //---->引入react模块
import "./sp.css" //引入sp.css样式

class Sp extends Component {
    constructor(props) {
        super(props);
        this.state={//定义一个初始化状态 
            good:[//将页面的数据写入good中用数组的方式保存
                {img:"../../static/images/cat.jpg",txt:"手工",jq:12,num:1,checked:false},//这里的图片都是本地图片，需要你本人自己替换，样式里也有一张需要替换 
                {img:"../../static/images/cat.jpg",txt:"桌",jq:20,num:1,checked:false},
                {img:"../../static/images/cat.jpg",txt:"椅",jq:32,num:1,checked:false},
                {img:"../../static/images/cat.jpg",txt:"板凳",jq:40,num:1,checked:false}
            ],
            c:false   //定义一个状态，后面用来判断 多选框 

        }
    }
    
    zj(){//--->总价
        var list=this.state.good;//获取list中的数据  
        var s=0;//声明一个s变量用来保存总价 
        list.forEach((v,i)=>{//循环它里面的数据
            if(v.checked){//判断，当多选框被选中的时候 
                s+=(v.jq*v.num);//总价等于当前被选中的数据的单价*数量 
            }
        });
        return s
    }

    jj(n){//+加按钮
        var list=this.state.good;
        list[n].num++;//n为当前的下标，点击后，每次数量加1
        this.setState({good:list})//在更新当前的状态 
    }
    jian(n){//-减按钮
        var list=this.state.good;
        list[n].num--;//n为当前的下标，点击后，每次减1 
        if(list[n].num<=0){
            //判断，当数量减到0的时候，弹出“最少买一个”，后面不在执行，最低的数量是1
            alert("最少买一个");
            list[n].num=1;
        }
        this.setState({good:list})//在更新当前的状态 
    }
    tg(n){//--->点击切换按钮   多选框  目前做了三种方法可以实现 
        var list=this.state.good;
        list[n].checked=!list[n].checked;//取反值 
        // ===================================第一种方法
        // var ler=list.filter((v,i)=>{//数组过滤的方法 
        //     return v.checked//--->返回 该多选框为被选中
        // });
        // if(ler.length==list.length){//--->判断选中的多选框的长度和数组中的数据长度是否相同
        //     this.setState({good:list,c:true})//--->如果是，把全选的属性false更新为true
        // }else{
        //     this.setState({good:list,c:false})//--->如果不是，全选属性为false
        // }
        // ==============================================第二种方法
        // var ler=list.every((v,i)=>{//--->every当多选框都被选中的时候，条件都满足true
        //     return v.checked;//--->单个被选中返回false
        // })
        // // console.log(ler)
        // this.setState({good:list,c:ler})//更新cc的状态为ler,当ler为false时，cc就是false,反之亦然 
        // ====================================================第三种方法
        var sun=0;//声明一个sun ，用来保存数值
        var ff=true;//声明一个状态 true  false 判断
        list.forEach((v,i)=>{//循环加判断 
            if(v.checked){//如果多选框被选中的时候，就让sun加1
                sun++
            }
        })
        if(sun==list.length){//当sun被选中的数量等于它当前整体的长度的时候 
            ff=true;//输出ff的状态为true
        }else{//反之 
            ff=false
        }
        this.setState({good:list,c:ff})//让cc的状态等于当前ff的状态
    }

    qx(){//--->全选
        var list=this.state.good;
        var c=!this.state.c;//--->先改变当前的全选状态为true
        list.forEach((v,i)=>{//--->循环当前的list数组
            v.checked=c;//--->把全选的状态true赋值给good中的checked
        });

        this.setState({good:list,c})//更新状态 
    }
    js(){//--->结算
        var list=this.state.good;
        var a=list.filter((v,i)=>{//数组过滤的方法 满足条件，输出新的数组，把不满足条件的过滤掉 
           return v.checked//当多选框被选中的时候 

        })
        console.log(a)//在控制台输出当前被选中的数据，价格，数量 等 
    }
    render() {
        return (
            <div className="box">
                <ul className="ultest">
                    {
                        this.state.good.map((v,i)=>{//数组的map方法 修该数据后，返回一个行的新的数组 
                            return <li key={i} className="litest">
                                {/*<span className={(v.checked?"active":"")+" d1"} onClick={this.tg.bind(this,i)}></span>*/}
                                <img src={v.checked?"../../static/images/cat.jpg":"../../static/images/cat.jpg"} alt="" onClick={this.tg.bind(this,i)} className="imgtest" />
                                <img src={v.img} alt="" className="imgtest" />
                                <div className="box1">
                                    <p>{v.txt}</p>
                                    <i>${v.jq}</i>
                                    <input type="button" value="+" onClick={this.jj.bind(this,i)}/>
                                    <input type="text" value={v.num} style={{width:"20px"}} readOnly /> {/*注：style后要加双花括号{{}}*/}
                                    <input type="button" value="-" onClick={this.jian.bind(this,i)}/>
                                </div>
                            </li>
                        })
                    }
                </ul>
                <div className="box2">
                   <span className={(this.state.c?"active":"")+" d1"} onClick={this.qx.bind(this)}><b>全选</b></span>
                    <span>合计${this.zj()}</span>
                    <input type="button" value="结算" onClick={this.js.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default Sp;//导出 