import React, { Component } from 'react';
import axios from 'axios'
import BScroll from 'better-scroll'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[],
            index:0
        }
    }
    
    render() {
        const {list} = this.state;
        return (
            <div className="wrapper" ref={box=>this.box=box}>
                <ul className="list">
                    {
                        list.map(item=>(
                            <li key={item.id}>
                                <h3 ref={"item_"+item.title}>{item.title}</h3>
                                <ol>
                                    {
                                        item.children.map(item=>(
                                            <li key={item.id}>{item.name}</li>
                                        ))
                                    }
                                </ol>
                            </li>
                        ))
                    }
                </ul>
                <aside>
                    {
                        list.map((item,index)=>(
                            <p key={item.id} onClick={()=>this.handleScrollTo(item.title,index)} style={{color:index === this.state.index ? "red" :"" }}>{item.title}</p>
                        ))
                    }
                </aside>
            </div>
        );
    }

    componentDidMount(){
        if(this.state.list.length ===0){
            axios.get('/api/list').then(res=>{
                this.setState({
                    list:res.data.list
                })
            })
        }
        this.scroll = new BScroll(this.box,{
            probeType:2,
            click:true
        })
        this.MyScroll()
    }

    componentWillUnmount(){
        this.scroll.destroy()
    }

    /**
     * @function  点击侧边栏
     * @param {*} title 字母
     * @param {*} index 下标
     */
    handleScrollTo(title,index){
        this.scroll.scrollToElement(this.refs["item_"+title])
        this.setState({
            index
        })
    }
    /**
     * @function    滚动事件
     */
    MyScroll(){
        var _this = this;
        this.scroll.on("scroll",function(e){
			// Object.values()返回一个数组，其元素是在对象上找到的可枚举属性值(即属性值)
            const arr = Object.values(_this.refs)
            let scrollTop = [];
            arr.forEach(item=>{
                scrollTop.push(item.offsetTop)
            })
            scrollTop.forEach((item,index)=>{
                if(-this.y-item>0 && -this.y-item<5){
                    _this.setState({
                        index
                    })
                }
            })
        })
    }

}

export default Home;