<template>
    <div>
        <el-table :data="imgList" border style="width: 100%">
            <el-table-column prop="id" label="图片编号"></el-table-column>
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="img" label="图片"></el-table-column>
            <el-table-column prop="status" label="状态">
                <template slot-scope="item">
                    <el-tag v-if="item.row.status==1" type="success">启动</el-tag>
                    <el-tag v-if="item.row.status==2" type="danger">禁用</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="item">
                    <el-button size="small" type="primary" @click="update(item.row.uid)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
//引入用户接口
import { getbannerList } from '../../util/axios'
export default {
    data() {
        return {
            imgList:[]
        }
    },
    mounted() {
        this.getList()
    },
    methods: {
        getList() {
            getbannerList().then((res) => {
                if(res.data.code==200){
                    this.mList = res.data.list
                }
            })
        },
        update(id) {
            this.$emit('edit', {
                isAdd: false,
                dialogIsShow: true,
                id
            })
        },
    },
}
</script>

<style  lang="" scoped>
</style>
