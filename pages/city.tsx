import Layout from '../components/Layout'
import { withRouter } from "next/router";
import { Button } from 'antd';
import { useEffect } from 'react'

const IndexPage = (props: any) => {
    console.log(props);

    useEffect(() => {
        (async () => {
            //这种写法是没有SSR功能,如果要是用ssr，则需要使用getInitialProps
            const res = await fetch("https://api.tvmaze.com/search/shows?q=marvel");
            const data = await res.json();
        })()
    }, [])

    return < Layout title="这是city" >
        <Button></Button>
        <ul>
            {
                props.show.map((item: any) => {
                    return <li key={item.score}>{item.show.name}----{item.score}</li>
                })
            }
        </ul>
        <div>City页面 {props.router.query.title}</div>
    </Layout >
}


//getInitialProps 方法既可以在服务器运行，又可以在客户端运行(组件创建之前执行的)
//当刷新页面(初次载入页面)，该方法会在服务器执行
//当通过<Link>跳转路由的时候，该方法会在客户端执行
IndexPage.getInitialProps = async () => {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=marvel");
    const data = await res.json();
    //这边返回的数据会被挂载到组件的props中
    return { show: data }
}


export default withRouter(IndexPage)
