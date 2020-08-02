import React from 'react'
import Recommend from './recommend'
import Hotlist from './hotlist'
import Search from './search'
import { Route, Switch, Redirect, NavLink } from 'react-router-dom'
import { Tabs, WhiteSpace } from 'antd-mobile';
import DatePicker from 'antd-mobile/lib/date-picker';  // 加载 JS
import 'antd-mobile/lib/date-picker/style/css';        // 加载 CSS

class Home extends React.Component {
    constructor() {
        super()

    }
    render() {
        return (
            <div className="homeCom">
                <div className='header'>
                    <div className='topfix'>
                        <div className="topfl">
                            <span className='topplh'>网易云音乐</span>
                        </div>
                        <div className="topfr">
                            <span className="f-bd f-bd-full topbton">下载APP</span>
                        </div>
                    </div>
                </div>
                <ul className="titleList">
                    <li><NavLink activeClassName='select' to='/recommend'>推荐音乐</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='select' to='/hotlist'>热歌榜</NavLink>
                    </li>
                    <li><NavLink activeClassName='select' to='/search'>搜索</NavLink></li>
                </ul>
                <Switch>
                    <Route path='/recommend' component={Recommend}></Route>
                    <Route path='/hotlist' component={Hotlist}></Route>
                    <Route path='/search' component={Search}></Route>
                    <Redirect to='/recommend'></Redirect>
                </Switch>
            </div>
        )
    }
}

export default Home