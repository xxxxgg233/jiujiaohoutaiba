import React from 'react'
import { searchHot, searchInfo } from '../util/axios'
class Serach extends React.Component {
    constructor() {
        super()
        this.state = {
            searchHotList: [],
            searchList: []
        }
        this.inpVal = React.createRef()
    }
    componentDidMount() {
        this.get_search_hot()
    }
    get_search_hot() {
        searchHot()
            .then(res => {
                if (res.code == 200) {
                    this.setState({
                        searchHotList: res.result.hots
                    })
                }
            })
    }
    goSearch(keywords) {
        this.inpVal.current.value = keywords
        searchInfo({ keywords })
            .then(res => {
                if (res.code == 200) {
                    console.log(res.result.songs)
                    this.setState({
                        searchList: res.result.songs
                    })
                }
            })
    }
    getInput() {
        console.log(this.inpVal.current.value, 'input内容')
    }
    clearInfo() {
        this.inpVal.current.value = ''
        this.setState({
            searchList: []
        })
    }
    render() {
        const { searchHotList, searchList } = this.state
        let valFlag = ''
        if (this.inpVal.current) {
            valFlag = this.inpVal.current.value
        }
        let hotInfo = <div className="m-hotlist">
            <h3 className="title">热门搜索</h3>
            <ul className="list">
                {
                    searchHotList.map((item, i) => {
                        return <li onClick={this.goSearch.bind(this, item.first)} className="item f-bd f-bd-full" key={item.first}>
                            <a className='link clearfix'>{item.first}</a>
                        </li>
                    })
                }

            </ul>
        </div>
        return (
            <div className="m-hmsrch">
                <div className="m-input f-bd f-bd-btm" method='get'>
                    <div className="inputcover clearfix">
                        <i className="u-svg u-svg-srch"></i>
                        <input type="search" name='search' className='input' ref={this.inpVal} onInput={this.getInput.bind(this)} placeholder='搜索歌曲、歌手、专辑' />
                        {
                            valFlag ? <figure className='close' onClick={this.clearInfo.bind(this)}>
                                <i className="u-svg u-svg-empty z-show"></i>
                            </figure> : ''
                        }
                    </div>
                </div>
                {/* 搜索列表 */}
                <div className="m-sglst">
                    {
                        searchList.length > 0 ? searchList.map((item, i) => {
                            return <a href="" className="m-sgitem clearfix" key={item.id}>
                                <div className="sgfr f-bd f-bd-btm clearfix">
                                    <div className="sgchfl clearfix">
                                        <div className="sgtl f-thide clearfix">{item.name} {
                                            item.alias ?
                                                item.alias.map(item => {
                                                    return <span style={
                                                        {
                                                            color: "#888"
                                                        }
                                                    } key={item}>({item})</span>
                                                })
                                                : ''
                                        }</div>
                                        <div className="sginfo f-thide clearfix">
                                            <i className="sghot u-hmsprt"></i>{item.artists ?
                                                item.artists.map(item => {
                                                    return <span key={item.id}>{item.name}</span>
                                                })
                                                : ''}-{item.album.name} </div>
                                    </div>
                                    <div className="sgchfr">
                                        <span className='u-hmsprt sgchply'></span>
                                    </div>
                                </div>
                            </a>


                        })
                            : ''

                        
                    }
                </div>
                
                <div className="m-default">
                    {
                        searchList.length == 0 ? hotInfo : ''
                    }
                </div>
            </div>
        )
    }
}

export default Serach