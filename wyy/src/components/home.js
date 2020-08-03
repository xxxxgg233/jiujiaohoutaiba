import React from 'react'
import Recommend from './recommend'
import Hotlist from './hotlist'
import Search from './search'
import { Route, Switch, Redirect, NavLink } from 'react-router-dom'

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
                            <span className='topplh'>网抑云音乐</span>
                        </div>
                        <div className="topfr">
                            <span className="f-bd f-bd-full topbton">下载APP</span>
                        </div>
                    </div>
                </div>
                <div className='m-index clearfix'>
                    <ul className="titleList clearfix">
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
            </div>
        )
    }
}

export default Home