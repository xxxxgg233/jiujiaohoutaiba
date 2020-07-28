<template>
    <div>
        <bread-Crumb></bread-Crumb>
        <v-list @edit="edit"></v-list>
        <v-add ref="vAdd" :addInfo="addInfo" @cancel="cancel"></v-add>
    </div>
</template>

<script>
import breadCrumb from '../../components/common/breadcrumb'
import vList from './list'
import vAdd from './add'
export default {
    data() {
        return {
            addInfo: {
                isAdd: true, //添加
                dialogIsShow: false //是否出现弹框
            }
        }
    },
    methods: {
        //子传父去修改父级的数据
        cancel(e) {
            this.addInfo.dialogIsShow = e
        },
        //list组件传值并修改数据
        edit(e) {
            this.addInfo.isAdd = e.isAdd
            this.addInfo.dialogIsShow = e.dialogIsShow
            this.$refs.vAdd.update(e.id)
        },
        add() {
            this.addInfo = {
                isAdd: true,
                dialogIsShow: true
            }
        }
    },
    components: {
        breadCrumb,
        vList,
        vAdd
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
</style>
