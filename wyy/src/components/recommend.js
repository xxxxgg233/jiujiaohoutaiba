import React from 'react'
import { Route, Switch, Redirect, NavLink } from 'react-router-dom'

class Recommend extends React.Component {
    constructor() {
        super()
        this.state = {
            songList: [
                {
                    id: 5126542986,
                    imgSrc: "http://p2.music.126.net/NUoBu3y4srByMPoCeBWh3g==/109951165178088042.jpg?imageView=1&type=webp&thumbnail=369x0",
                    lnum: '98.4万',
                    text: '2020上半年最受欢迎日语新歌'
                },
                {
                    id: 5126389016,
                    imgSrc: "http://p2.music.126.net/uRKi7uzwfXCQmoS21u5VJA==/109951165145224508.jpg?imageView=1&type=webp&thumbnail=369x0",
                    lnum: '51.9万',
                    text: '盛夏白瓷梅子汤，碎冰碰壁铛啷响'
                },
                {
                    id: 4971368917,
                    imgSrc: "http://p2.music.126.net/41-htla5bzGExJt29EDD4g==/109951164909803171.jpg?imageView=1&type=webp&thumbnail=369x0",
                    lnum: '224.9万',
                    text: '伤感片段:夜和你都在熬我'
                },
                {
                    id: 4866322076,
                    imgSrc: "http://p2.music.126.net/boGF139O-OtRO5OTIj40Cg==/109951164712192199.jpg?imageView=1&type=webp&thumbnail=369x0",
                    lnum: '40.5万',
                    text: '打野BGM［游戏专用］'
                },
                {
                    id: 3056787792,
                    imgSrc: "http://p2.music.126.net/ySAPT2l0oiv3nNYFPKupAA==/109951164796920183.jpg?imageView=1&type=webp&thumbnail=369x0",
                    lnum: '24.9万',
                    text: '宝藏857蹦迪DJ'
                },
                {
                    id: 3188819446,
                    imgSrc: "http://p2.music.126.net/lMjuNL1ifmroz_KE8dnfkw==/109951164863932384.jpg?imageView=1&type=webp&thumbnail=369x0",
                    lnum: '180.4万',
                    text: '中文DJ（电摇版）（车载DJ）开车驾车必听'
                },
            ],
            newsgList: [
                {
                    id: 1466595872,
                    sgtl: '致我们终将逝去的青春 (2020重唱版)',
                    singger: '张靓颖',
                    sghot: '致我们终将逝去的青春'
                },
                {
                    id: 1466675564,
                    sgtl: '如果我是海',
                    singger: '李荣浩',
                    sghot: '麻雀'
                },
                {
                    id: 1466643383,
                    sgtl: '祝我快乐',
                    singger: '汪苏泷',
                    sghot: '祝我快乐'
                },
                {
                    id: 1465026481,
                    sgtl: '星星之火',
                    singger: '罗云熙',
                    sghot: '星星之火'
                },
                {
                    id: 1466822129,
                    sgtl: '晚来天欲雪',
                    singger: '恋恋故人难/云の泣',
                    sghot: '晚来天欲雪'
                },
                {
                    id: 1466033420,
                    sgtl: '先知',
                    singger: '田馥甄',
                    sghot: '先知'
                },
                {
                    id: 1465036454,
                    sgtl: '我行我素我爱你',
                    singger: '郁可唯',
                    sghot: '我行我素我爱你'
                },
                {
                    id: 1465598472,
                    sgtl: 'PARADISE',
                    singger: 'Ravi/河成云',
                    sghot: 'PARADISE'
                },
                {
                    id: 1465765256,
                    sgtl: '睹物思人',
                    singger: '武艺',
                    sghot: '睹物思人'
                },
                {
                    id: 1465274224,
                    sgtl: '尘埃',
                    singger: '董家鸿',
                    sghot: '尘埃'
                },
            ]
        }
    }
    render() {
        return (
            <div className="homeReccom">
                <h2 className='remd_tl'>推荐歌单</h2>
                <div className='remd_songs'>
                    <ul className='remd_ul'>
                        {/*  歌单，可放路由  */}
                        {
                            this.state.songList.map((item, i) => {
                                return <li className="remd_li" key={item.id}>
                                    {/* <NavLink> */}
                                    <div className="remd_img">
                                        <img src={item.imgSrc} className="u-img" />
                                        <span className="u-earp  remd_lnum">{item.lnum}</span>
                                    </div>
                                    <p className="remd_text">{item.text}</p>
                                    {/* </NavLink> */}
                                </li>
                            })
                        }

                    </ul>
                </div>
                <h2 className='remd_tl'>最新音乐</h2>
                <div className="remd_newsg">
                    <div className="m-sglst">
                        {
                            this.state.newsgList.map((item, i) => {
                                return <a href="" className="m-sgitem clearfix" key={item.id}>
                                    <div className="sgfr f-bd f-bd-btm clearfix">
                                        <div className="sgchfl clearfix">
                                            <div className="sgtl f-thide clearfix">{item.sgtl}</div>
                                            <div className="sginfo f-thide clearfix">
                                                <i className="sghot u-hmsprt">{item.singger}-{item.sghot}</i></div>
                                        </div>
                                        <div className="sgchfr"></div>
                                    </div>
                                </a>


                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Recommend