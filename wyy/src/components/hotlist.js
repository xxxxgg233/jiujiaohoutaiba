import React from 'react'
//引入接口文件
import { getHotList } from '../util/axios'
class Hotlist extends React.Component {
    constructor() {
        super()
        this.state = {
            hottime: 0,
            hotsongList: []
        }
    }
    componentDidMount() {
        this.gethotlist()
    }
    //封装一个事件转化函数
    formatTime(timer) {
        let date = new Date(timer)
        let month = (date.getMonth() + 1 + '').padStart(2, '0')
        let day = (date.getDate() + '').padStart(2, '0')
        return `${month}月${day}日`
    }
    gethotlist() {
        getHotList()
            .then(res => {
                if (res.code == 200) {
                    let hotList = res.playlist.tracks.filter((item, i) => i < 20)
                    console.log(hotList, '热歌榜列表')
                    this.setState({
                        hottime: res.playlist.updateTime,
                        hotsongList: hotList
                    })
                }
            })
    }
    render() {
        const { hottime, hotsongList } = this.state
        return (
            <div className="m-hmhot">
                <div className="hotop clearfix">
                    <div className="hotopct">
                        <div className="hoticon u-hmsprt"></div>
                        <div className="hottime">
                            更新日期：{this.formatTime(hottime)}
                        </div>
                    </div>
                </div>
                <div className="hotcont">
                    <div className="m-sglst">
                        {
                            hotsongList.map((item, i) => {
                                return <div className="m-sgitem clearfix" key={item.id}>
                                    <div className="sgfl sgfl-cred">{i < 9 ? '0' + (i + 1) : (i + 1)}</div>
                                    <div className="sgfr f-bd f-bd-btm clearfix">
                                        <div className="sgchfl clearfix">
                                            <div className="sgtl f-thide clearfix">{item.name}
                                                {
                                                    item.alia ?
                                                        item.alia.map(item => {
                                                            return <span style={
                                                                {
                                                                    color: "#888"
                                                                }
                                                            } key={item}>({item})</span>
                                                        })
                                                        : ''
                                                }
                                            </div>
                                            <div className="sginfo f-thide clearfix">
                                                <i className="sghot u-hmsprt">
                                                </i>{
                                                    item.ar ?
                                                        item.ar.map(item => {
                                                            return <span key={item.id}>{item.name}</span>
                                                        })
                                                        : ''
                                                }-{item.al.name}</div>
                                        </div>
                                        <div className="sgchfr"><span className='u-hmsprt sgchply'></span></div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="hotdn"></div>
            </div>
        )
    }
}

export default Hotlist