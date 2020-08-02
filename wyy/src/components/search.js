import React from 'react'

class Serach extends React.Component {
    constructor() {
        super()
        this.state={
            searchList:[
                {
                    
                    title:'Taylo Swift'
                },
                {
                    
                    title:'Billie Eilish'
                },
                {
                    
                    title:'无滤镜'
                },
                {
                    
                    title:'潘玮柏'
                },
                {
                    
                    title:'天外来物'
                },
                {
                    
                    title:'亚运会歌征集'
                },
                {
                    
                    title:'Troye Sivan'
                },
                {
                    
                    title:'上半年音乐榜单'
                },
                {
                    
                    title:'要我怎么办'
                },
                {
                    
                    title:'2020毕业音乐会'
                },
            ]
        }
    }
    render() {
        return (

            <div className="m-hmsrch">
                <form action="#" className="m-input f-bd f-bd-btm" method='get'>
                    <div className="inputcover clearfix">
                        <i className="u-svg u-svg-srch"></i>
                        <input type="search" name='search' className='input' placeholder='搜索歌曲、歌手、专辑' />
                        {/* <label className='holder'>搜索歌曲、歌手、专辑</label> */}

                    </div>
                </form>
                <div className="m-default">
                    <div className="m-hotlist">
                        <h3 className="title">热门搜索</h3>
                        <ul className="list">
                            {
                                this.state.searchList.map((item,i)=>{
                                    return <li className="item f-bd f-bd-full" key={i}>
                                    <a className='link clearfix'>{item.title}</a>
                                </li>
                                })
                            }
                            
                        </ul>
                    </div></div>
            </div>

        )
    }
}

export default Serach