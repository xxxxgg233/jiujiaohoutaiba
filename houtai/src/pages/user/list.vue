<template>
    <div>
<el-table :data="getStateUserList" border style="width: 100%" row-key="id">
            <el-table-column prop="uid" label="用户编号"></el-table-column>
            <el-table-column prop="username" label="用户名称"></el-table-column>
            <el-table-column prop="rolename" label="所属角色"></el-table-column>
            <el-table-column prop="status" label="状态">
                <template slot-scope="item">
                    <el-tag v-if="item.row.status==1" type="success">启动</el-tag>
                    <el-tag v-if="item.row.status==2" type="danger">禁用</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="item">
                    <el-button size="small" type="primary" @click="update(item.row.uid)">编辑</el-button>
                    <el-button size="small" type="danger" @click="del(item.row.uid)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>    
        <el-pagination
            background
            layout="prev, pager, next"
            :page-size="pageInfo.size"
            :total="count"
            @current-change="getPage"
        ></el-pagination>
        </div>
</template>

<script>
import { getMenuDelete } from '../../util/axios'
import { mapActions, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['getStateMenuList'])
    },
    mounted() {
        this.getActionMenuList()
    },
    methods: {
        ...mapActions(['getActionMenuList']),
        update(uid) {
            this.getActionRoleList()
            this.dialogIsShow = true
            this.isAdd = false
            this.editId = uid
            getuserInfo({ uid }).then(res => {
                if (res.data.code == 200) {
                    console.log(res)
                    this.userInfo = res.data.list
                    this.userInfo.status = this.userInfo.status.toString()
                }
            })
        },
        del(uid) {
            this.$confirm('你确定要删除这条数据吗', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    getuserDelete({ uid }).then(res => {
                        if (res.data.code == 200) {
                            this.getCount()
                            this.$message.success(res.data.msg)
                        } else {
                            this.$message.error(res.data.msg)
                        }
                    })
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    })
                })
        },
        getCount() {
            getuserCount().then(res => {
                if (res.data.code == 200) {
                    this.count = res.data.list[0].total
                    if(this.pageInfo.page !=1 && this.getStateUserList.length==1){
                        this.pageInfo.page--
                    }
                        this.$store.dispatch('getActionUserList', this.pageInfo)
                }
            })
        },
        getPage(n) {
            this.pageInfo.page = n
            this.$store.dispatch('getActionUserList', this.pageInfo)
        }
    }
}
</script>

<style  lang="" scoped>
</style>
