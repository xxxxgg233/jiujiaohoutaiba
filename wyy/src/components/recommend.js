import React from 'react'
import axios from 'axios'
//引入swipercss
import 'swiper/css/swiper.min.css'
//引入推荐组件的css
import 'swiper/js/swiper.min.js'
//调用swiper插件
import Swiper from 'swiper'
import { personalized, banner, getNewSongs } from '../util/axios'
class Recommend extends React.Component {
    constructor() {
        super()
        this.state = {
            bannerList:[],
            songList: [

            ],
            newsgList: [

            ]
        }
    }
    componentDidMount(){
        axios.all([personalized({ limit: 6 }), banner(), getNewSongs()])
        .then(axios.spread((songList, bannerList, newSong) => {
            console.log(songList, 'songList')
            console.log(bannerList, 'bannerList')
            console.log(newSong, 'newSong')
            //获取轮播图
            if (bannerList.code === 200) {
                //可以通过filter 对数组进行过滤
                let banners = bannerList.banners.filter((item, i) => i < 4)
                this.setState({
                    bannerList: banners
                }, () => {
                    let swiper = new Swiper('.swiper-container', {
                        autoplay: {
                            delay: 2000,
                        },
                        loop: true,
                        pagination: {
                            el: '.swiper-pagination',
                        },
                    });
                })
            }
            //获取推荐歌单
            if (songList.code === 200) {
                this.setState({
                    songList: songList.result
                })
            }
            //获取最新音乐
            if (newSong.code === 200) {
                console.log(newSong.result)
                this.setState({
                    newsgList: newSong.result
                })
            }
        }))
    }
    render() {
        const { songList, bannerList, newsgList } = this.state
        return (
            <div className="homeReccom">
                 <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            bannerList.map(item => {
                                return <div key={item.imageUrl} className="swiper-slide">
                                    <img className='imgUrl' src={item.imageUrl} alt="" />
                                </div>
                            })
                        }
                    </div>
                    {/* 分页器。如果放置在swiper-container外面，需要自定义样式。 */}
                    <div className="swiper-pagination"></div>
                </div>
                <h2 className='remd_tl'>推荐歌单</h2>
                <div className='remd_songs'>
                    <ul className='remd_ul'>
                        {/*  歌单，可放路由  */}
                        {
                            songList.map((item, i) => {
                                return <li className="remd_li" key={item.id}>
                                    {/* <NavLink> */}
                                    <div className="remd_img">
                                        <img src={item.picUrl} className="u-img" />
                                        <span className="u-earp  remd_lnum">{parseInt( item.playCount/1000)/10+'万'}</span>
                                    </div>
                                    <p className="remd_text">{item.name}</p>
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
                            newsgList.map((item, i) => {
                                return <a href="" className="m-sgitem clearfix" key={item.id}>
                                    <div className="sgfr f-bd f-bd-btm clearfix">
                                        <div className="sgchfl clearfix">
                                            <div className="sgtl f-thide clearfix">{item.song.name} {
                                                    item.song.alias ?
                                                        item.song.alias.map(item => {
                                                        return <span style={
                                                            {
                                                                color:"#888"
                                                            }
                                                        } key={item}>({item})</span>
                                                        })
                                                        : ''
                                                }</div>
                                            <div className="sginfo f-thide clearfix">
                                                <i className="sghot u-hmsprt"></i>{item.song.artists ?
                                                        item.song.artists.map(item => {
                                                        return <span key={item.id}>{item.name}</span>
                                                        })
                                                        : ''}-{item.song.album.name} </div>
                                        </div>
                                        <div className="sgchfr">
                                            <span className='u-hmsprt sgchply'></span>
                                        </div>
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