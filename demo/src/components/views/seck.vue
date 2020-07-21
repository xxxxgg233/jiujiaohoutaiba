<template>
  <div>
    <!-- 面包屑 -->
    <bread-Crumb></bread-Crumb>
    <!-- 按钮 -->
    <div>
      <el-button size="small" type="primary" @click="add">添加</el-button>
      <el-table
        :data="getStateMenuList"
        border
        style="width: 100%"
        row-key="id"
        :tree-props="{children: 'children'}"
      >
        <el-table-column prop="id" label="菜单编号"></el-table-column>
        <el-table-column prop="title" label="菜单名称"></el-table-column>
        <el-table-column prop="pid" label="上级菜单"></el-table-column>
        <el-table-column prop="icon" label="菜单图标"></el-table-column>
        <el-table-column prop="url" label="菜单地址"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="item">
            <el-tag v-if="item.row.status==1" type="success">启动</el-tag>
            <el-tag v-if="item.row.status==2" type="danger">禁用</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="item">
            <el-button size="small" type="primary" @click="update(item.row.id)">编辑</el-button>
            <el-button size="small" type="danger" @click="del(item.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      

      <el-dialog
            :title="addInfo.isAdd ? '菜单添加':'菜单编辑'"
            :visible.sync="addInfo.dialogIsShow"
            center
            :before-close="cancel"
        >
            <el-form :model="menuInfo" :rules="rules" ref="menuInfo">
                <el-form-item label="菜单名称：" :label-width="formLabelWidth" prop="title">
                    <el-input v-model="menuInfo.title"></el-input>
                </el-form-item>
                <el-form-item
                    label="上级菜单："
                    :label-width="formLabelWidth"
                    placeholder="请选择菜单"
                    prop="pid"
                >
                    <el-select v-model="menuInfo.pid" placeholder="请选择">
                        <el-option label="顶级菜单" :value="0">顶级菜单</el-option>
                        <el-option
                            v-for="item in getStateMenuList"
                            :key="item.id"
                            :label="item.title"
                            :value="item.id"
                        >{{item.title}}</el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="菜单类型：" :label-width="formLabelWidth">
                    <el-radio :disabled="menuInfo.pid!=0" v-model="menuInfo.type" label="1">目录</el-radio>
                    <el-radio :disabled="menuInfo.pid==0" v-model="menuInfo.type" label="2">菜单</el-radio>
                </el-form-item>
                <el-form-item v-if="menuInfo.type==1" label="菜单图标：" :label-width="formLabelWidth">
                    <el-input :disabled="menuInfo.pid!=0" v-model="menuInfo.icon"></el-input>
                </el-form-item>
                <el-form-item v-if="menuInfo.type==2" label="菜单地址：" :label-width="formLabelWidth">
                    <el-input :disabled="menuInfo.pid==0" v-model="menuInfo.url"></el-input>
                </el-form-item>
                <el-form-item label="状态：" :label-width="formLabelWidth">
                    <el-radio v-model="menuInfo.status" label="1">启用</el-radio>
                    <el-radio v-model="menuInfo.status" label="2">禁用</el-radio>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button v-if="addInfo.isAdd" type="primary" @click="subInfo('menuInfo')">新 增</el-button>
                <el-button v-else type="primary" @click="subInfo('menuInfo')">更 新</el-button>
            </div>
        </el-dialog>
    </div>
    <!-- 表格信息 -->
    <v-list @edit="edit"></v-list>
    <!-- 弹框内容 -->
    <v-add ref="vAdd" :addInfo="addInfo" @cancel="cancel"></v-add>
  </div>
</template>

<script>
import breadCrumb from '../common/breadcrumb'
import { getMenuAdd, getMenuEdit, getMenuInfo,getMenuDelete } from '../../util/axios'
import { mapActions, mapGetters } from 'vuex'

//引入list组件
export default {
  data() {
    return {
      addInfo: {
        //控制弹框的信息
        isAdd: true, //添加
        dialogIsShow: false //是否出现弹框
      }
    };
  },
//   methods: {
//     //子传父去修改父级的数据
//     cancel(e) {
//       this.addInfo.dialogIsShow = e;
//     },
//     //list组件传值并修改数据
//     edit(e) {
//       this.addInfo.isAdd = e.isAdd;
//       this.addInfo.dialogIsShow = e.dialogIsShow;
//       this.$refs.vAdd.update(e.id);
//     },
//     //点击添加按钮出现弹框
//     add() {
//       this.addInfo = {
//         isAdd: true,
//         dialogIsShow: true
//       };
//     }
//   },
//   components: {
//     breadCrumb,
//     vList,
//     vAdd
//   }
};
</script>

<style  lang="stylus" scoped>
.el-button {
  margin-bottom: 10px;
}

.el-input {
  width: 85%;
}
</style>
