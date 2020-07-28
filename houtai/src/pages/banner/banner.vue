<template>
  <div>
    <bread-Crumb></bread-Crumb>
    <div>
      <el-button size="small" type="primary" @click="add">添加</el-button>
    </div>
    <v-list @edit="edit"></v-list>
    <v-add ref="vAdd" :addInfo="addInfo" @cancel="cancel"></v-add>
  </div>
</template>

<script>
import breadCrumb from "../../components/common/breadcrumb";
import vList from "./list";
import vAdd from "./add";
export default {
  data() {
    return {
      addInfo: {
        isAdd: true,
        dialogIsShow: false,
      },
    };
  },
  methods: {
    cancel(e) {
      this.addInfo.dialogIsShow = e;
    },
    edit(e) {
      this.addInfo.isAdd = e.isAdd;
      this.addInfo.dialogIsShow = e.dialogIsShow;
      this.$refs.vAdd.update(e.id);
    },
    add() {
      this.addInfo = {
        isAdd: true,
        dialogIsShow: true,
      };
    },
  },
  components: {
    breadCrumb,
    vList,
    vAdd,
  },
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
