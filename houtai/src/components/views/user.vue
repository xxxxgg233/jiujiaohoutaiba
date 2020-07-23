<template>
    <div>
        <bread-Crumb></bread-Crumb>
        <div>
            <el-button size="small" type="primary" @click="add">添加</el-button>
        </div>
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
        <el-dialog
            :title="isAdd ? '用户添加':'用户编辑'"
            :visible.sync="dialogIsShow"
            center
            :before-close="cancel"
        >
            <el-form :model="userInfo" :rules="rules" ref="userInfo">
                <el-form-item
                    label="所属角色："
                    :label-width="formLabelWidth"
                    placeholder="请选择所属角色"
                    prop="roleid"
                >
                    <el-select v-model="userInfo.roleid" placeholder="请选择">
                        <el-option
                            v-for="item in getStateRoleList"
                            :key="item.id"
                            :label="item.rolename"
                            :value="item.id"
                        >{{item.rolename}}</el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用户名称：" :label-width="formLabelWidth" prop="username">
                    <el-input v-model="userInfo.username"></el-input>
                </el-form-item>
                <el-form-item label="密码：" :label-width="formLabelWidth" prop="password">
                    <el-input v-model="userInfo.password"></el-input>
                </el-form-item>
                <el-form-item label="状态：" :label-width="formLabelWidth">
                    <el-radio v-model="userInfo.status" label="1">启用</el-radio>
                    <el-radio v-model="userInfo.status" label="2">禁用</el-radio>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button v-if="isAdd" type="primary" @click="subInfo('userInfo')">新 增</el-button>
                <el-button v-else type="primary" @click="subInfo('userInfo')">更 新</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import {
    getuserAdd,
    getuserInfo,
    getuserEdit,
    getuserDelete,
    getuserCount
} from '../../util/axios'
import { mapActions, mapGetters } from 'vuex'
import breadCrumb from '../common/breadcrumb'
export default {
    data() {
        return {
            count: 0, //总条目
            pageInfo: {
                size: 2, //代表一个页面查询2条数据
                page: 1 //一共有多少页面
            },
            isAdd: true, //添加
            formLabelWidth: '100px', //label宽度
            userInfo: {
                username: '', //用户名称
                roleid: '', //角色编号
                password: '', //密码
                status: '1'
            },
            editId: 0,
            dialogIsShow: false, //是否出现弹框
            rules: {
                username: [
                    {
                        required: true,
                        message: '请输入用户名称',
                        trigger: 'blur'
                    },
                    {
                        min: 2,
                        max: 6,
                        message: '长度在 2 到 6 个字符',
                        trigger: 'blur'
                    }
                ],
                roleid: [
                    {
                        required: true,
                        message: '请选择所属角色',
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    computed: {
        ...mapGetters(['getStateUserList', 'getStateRoleList'])
    },
    mounted() {
        this.getCount()
    },
    methods: {
        cancel() {
            this.reset()
            this.dialogIsShow = false
        },
        reset() {
            this.userInfo = {
                username: '', //用户名称
                roleid: '', //角色编号
                password: '', //密码
                status: '1'
            }
        },
        ...mapActions(['getActionRoleList']),
        add() {
            console.log('出现弹框')
            this.dialogIsShow = true
            this.isAdd = true
            this.getActionRoleList()
        },
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
        subInfo(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    console.log(this.userInfo, '官员表单')
                    if (this.isAdd) {
                        getuserAdd(this.userInfo).then(res => {
                            if (res.data.code == 200) {
                                this.dialogIsShow = false
                                this.reset()
                                this.getCount()
                                this.$message.success(res.data.msg)
                            } else if (res.data.code == 500) {
                                this.$message.warning(res.data.msg)
                            } else {
                                this.$message.error(res.data.msg)
                            }
                        })
                    } else {
                        let data = this.userInfo
                        data.id = this.editId
                        getuserEdit(data).then(res => {
                            if (res.data.code == 200) {
                                this.dialogIsShow = false
                                this.reset()
                                this.getCount()
                                this.$message.success(res.data.msg)
                            } else if (res.data.code == 500) {
                                this.$message.warning(res.data.msg)
                            } else {
                                this.$message.error(res.data.msg)
                            }
                        })
                    }
                } else {
                    console.log('error submit!!')
                    return false
                }
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
    },
    components: {
        breadCrumb
    }
}
</script>

<style  lang="stylus" scoped>
.el-button {
    margin-bottom: 10px;
}

.el-input {
    width: 85%;
}

.el-pagination {
    float: right;
    margin: 16px 0;
}
</style>
