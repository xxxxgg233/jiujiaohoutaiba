import React from 'react'

class Hotlist extends React.Component {
    constructor() {
        super()
        this.state = {
            hottime: '07月30日',
            hotsongList: [
                {
                    id: 407450223,
                    sgtl: '爸爸妈妈',
                    singger: '李荣浩',
                    sghot: '有理想'
                },
                {
                    id: 1426649237,
                    sgtl: '海底',
                    singger: '一只榴莲',
                    sghot: '《独》'
                },
                {
                    id: 558071673,
                    sgtl: '你走',
                    singger: '松紧先生（李宗锦）',
                    sghot: '你走'
                },
                {
                    id: 1435449062,
                    sgtl: '收敛',
                    singger: '不够',
                    sghot: '收敛'
                },
                {
                    id: 1442508316,
                    sgtl: '丢了你',
                    singger: '井胧',
                    sghot: '丢了你'
                },
                {
                    id: 1460682363,
                    sgtl: '爱，存在',
                    singger: '露露快闭嘴',
                    sghot: '爱，存在'
                },
                {
                    id: 1375640677,
                    sgtl: '官方回答',
                    singger: 'O.WEN',
                    sghot: '官方回答'
                },
                {
                    id: 1436709403,
                    sgtl: '夏天的风',
                    singger: '火羊瞌睡了',
                    sghot: '夏天的风'
                },
                {
                    id: 493735012,
                    sgtl: '无人之岛',
                    singger: '任然',
                    sghot: '没有发生的爱情'
                },
                {
                    id: 1463165983,
                    sgtl: '天外来物',
                    singger: '薛之谦',
                    sghot: '天外来物'
                },
            ]
        }
    }
    render() {
        return (
            <div className="m-hmhot">
                <div className="hotop clearfix">
                    <div className="hotopct">
                        <div className="hoticon u-hmsprt"></div>
                        <div className="hottime">
                            更新日期：{this.state.hottime}
                        </div>
                    </div>
                </div>
                <div className="hotcont">
                    <div className="m-sglst">
                        {
                            this.state.hotsongList.map((item, i) => {
                                return <a href="" className="m-sgitem clearfix" key={item.id}>
                                    <div className="sgfl sgfl-cred">{i<9? '0'+(i+1):(i+1)}</div>
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
                <div className="hotdn"></div>
            </div>
        )
    }
}

export default Hotlist