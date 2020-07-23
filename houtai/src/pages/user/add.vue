<template>
    <div>
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
import { getuserAdd,
    getuserInfo,
    getuserEdit,
    getuserDelete,
    getuserCount } from '../../util/axios'
import { mapActions, mapGetters } from 'vuex'
export default {
    props: ['addInfo'],
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
    methods: {
        ...mapActions(['getActionUserist']),
        cancel() {
            this.reset()
            this.$emit('cancel', false)
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
    }
}
</script>

<style  lang="" scoped>
</style>
