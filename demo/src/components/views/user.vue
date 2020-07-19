<template>
  <div>
    <!-- 面包屑 -->
    <bread-Crumb></bread-Crumb>
    <!-- 按钮 -->
    <div>
      <el-button size="small" type="primary" @click="add">添加</el-button>
    </div>
    <!-- 表格信息 -->
    <el-table :data="getStateUserList" border style="width: 100%" >
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
      :total= 'total' 
      @current-change="currentChange"  
    ></el-pagination>
    <!-- 弹框内容 -->
    <el-dialog
      :title="isAdd ? '添加管理员':'管理员编辑'"
      :visible.sync="dialogIsShow"
      center
      :before-close="cancel"
    >
      <el-form :model="userInfo" :rules="rules" ref="userInfo">
        <el-form-item label="用户名称：" :label-width="formLabelWidth" prop="username">
          <el-input v-model="userInfo.username"></el-input>
        </el-form-item>
        <el-form-item label="所属角色：" :label-width="formLabelWidth" placeholder="请选择" prop="roleid">
          <el-select v-model="userInfo.roleid" placeholder="请选择">
            <el-option
              v-for="item in getStateRoleList"
              :key="item.id"
              :label="item.rolename"
              :value="item.id"
            >{{item.rolename}}</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="密码：" :label-width="formLabelWidth">
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
//引入菜单接口
import {
  getuserAdd,
  getuserList,
  getuserInfo,
  getuserEdit,
  getuserDelete,
  getuserCount
} from "../../util/axios";
//调取辅助性函数
import { mapActions, mapGetters } from "vuex";
//引入面包屑组件
import breadCrumb from "../common/breadcrumb";
export default {
  data() {
    return {
      isAdd: true, //添加
      formLabelWidth: "100px", //label宽度
      userInfo: {
        // pid: 0,
        roleid: "", //角色编号
        status: "1",
        uid: "",
        roleid: "",
        username: "",
        password: "",
        randstr: ""
      },
      editId: 0,
      dialogIsShow: false, //是否出现弹框
      rules: {},
      size:10,
      page:1,
      total:1
    };
  },
  computed: {
    ...mapGetters(["getStateRoleList", "getStateUserList"])
  },
  mounted() {
    //组件一加载就调取菜单接口
    //触发才调取vuex中的列表
    this.getActionUserList();
    this.getActionRoleList();
    getuserCount().then(res=>{
        // console.log(res.data.list[0].total)
        this.total = res.data.list[0].total
      })
  },
  methods: {
    //关闭弹框事件
    cancel() {
      this.reset();
      this.dialogIsShow = false;
    },
    //重置输入内容
    reset() {
      this.userInfo = {
        uid: "",
        username: "",
        // pid: 0,
        roleid: "", //角色编号
        password: "",
        status: "1"
      };
    },
    //封装一个获取列表事件
    ...mapActions(["getActionUserList", "getActionRoleList"]),
    //点击添加按钮出现弹框
    add() {
      // console.log('出现弹框')
      //出现弹框
      this.dialogIsShow = true;
      this.isAdd = true;
    },
    //点击编辑按钮出现弹框并携带数据
    update(uid) {
      this.dialogIsShow = true;
      this.isAdd = false;
      //给编辑id赋值
      this.editId = uid;
      //调取菜单查询一条数据
      getuserInfo({ uid }).then(res => {
        if (res.data.code == 200) {
          console.log(res);
          this.userInfo = res.data.list;
          this.userInfo.status = this.userInfo.status.toString();
          this.userInfo.username = this.userInfo.username.toString();
        }
      });
    },
    //删除事件
    del(uid) {
      this.$confirm("你确定要删除这条数据吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //调取删除逻辑
          getuserDelete({ uid }).then(res => {
            if (res.data.code == 200) {
              //重新调取接口列表
              this.getActionUserList();
              this.$message.success(res.data.msg);
            } else {
              this.$message.error(res.data.msg);
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //确定添加或者更新事件
    subInfo(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //根据isAdd状态去判断执行接口
          if (this.isAdd) {
            //调取添加接口
            getuserAdd(this.userInfo).then(res => {
              // console.log(res)
              if (res.data.code == 200) {
                //关闭弹框
                this.dialogIsShow = false;
                //清空输入框
                this.reset();
                //添加成功重新查询列表
                this.getActionUserList();
                this.$message.success(res.data.msg);
              } else if (res.data.code == 500) {
                this.$message.warning(res.data.msg);
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            let data = this.userInfo;
            data.id = this.editId;
            //调取更新接口
            getuserEdit(data).then(res => {
              if (res.data.code == 200) {
                //关闭弹框
                this.dialogIsShow = false;
                //清空输入框
                this.reset();
                //添加成功重新查询列表
                this.getActionUserList();
                this.$message.success(res.data.msg);
              } else if (res.data.code == 500) {
                this.$message.warning(res.data.msg);
              } else {
                this.$message.error(res.data.msg);
              }
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    currentChange(val) {
      //val是当前页码
      // console.log(val)
      // this.page = val;
      // this.getActionUserList();
      getuserCount().then(res=>{
        // console.log(res.data.list[0].total)
        this.total = res.data.list[0].total
      })
    }
  },
  components: {
    breadCrumb
  }
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
