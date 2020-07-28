<template>
  <div>
    <el-dialog title="轮播图编辑" :visible.sync="addInfo.dialogIsShow" center :before-close="cancel">
      <el-form :model="imgInfo" :rules="rules" ref="imgInfo">
        <el-form-item label="图片标题：" :label-width="formLabelWidth" prop="title">
          <el-input v-model="imgInfo.title"></el-input>
        </el-form-item>
        <el-form-item label="商品图片：" :label-width="formLabelWidth">
          <el-upload
            action="#"
            list-type="picture-card"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false"
            :on-change="changeInfo"
            :limit="1"
            :on-exceed="handleExceed"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
        <el-form-item label="状态：" :label-width="formLabelWidth">
          <el-radio v-model="imgInfo.status" label="1">启用</el-radio>
          <el-radio v-model="imgInfo.status" label="2">禁用</el-radio>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="subInfo('imgInfo')">更 新</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getbannerEdit, getbannerInfo, getbannerAdd } from "../../util/axios";
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["addInfo"],
  data() {
    return {
      formLabelWidth: "100px", //label宽度
      imgUrl: "", //上传之后的图片地址
      dialogImageUrl: "", //显示图片
      dialogVisible: false, //开启图片的弹框
      fileList: [],
      imgInfo: {
        id: 0,
        title: "",
        img: "",
        status: "1", //1是启用 2是禁用
      },
      rules: {},
    };
  },
  methods: {
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    ...mapActions(["getActionBannerList"]),

    handleRemove(file, fileList) {},
    handlePreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    changeInfo(file) {
      this.imgUrl = file.raw;
    },

    cancel() {
      this.reset();
      this.$emit("cancel", false);
    },
    reset() {
      this.imgInfo = {
        id: 0,
        title: "",
        img:'',
        status: "1",
      };
    },
    update(id) {
      this.editId = id;
      getbannerInfo({ id }).then((res) => {
        if (res.data.code == 200) {
          this.bannerInfo = res.data.list;
          this.fileList = this.bannerInfo.img
            ? [{ url: `${this.$imgUrl}${this.bannerInfo.img}` }]
            : [];
          this.bannerInfo.status = this.bannerInfo.status.toString();
        }
      });
    },
    subInfo(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = this.goodsInfo;
          let file = new FormData();
          if (this.addInfo.isAdd) {
            file.append("img", this.imgUrl);
            getbannerAdd(file).then((res) => {
              if (res.data.code == 200) {
                this.cancel();
                this.getActionBannerList();
                this.$message.success(res.data.msg);
              } else if (res.data.code == 500) {
                this.$message.warning(res.data.msg);
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            file.append("id", this.editId);
            this.imgUrl = this.imgUrl ? this.imgUrl : this.goodsInfo.img;
            file.append("img", this.imgUrl);
            getbannerEdit(file).then((res) => {
              if (res.data.code == 200) {
                this.cancel();
                this.getActionBannerList();
                this.$message.success(res.data.msg);
              } else if (res.data.code == 500) {
                this.$message.warning(res.data.msg);
              } else {
                this.$message.error(res.data.msg);
              }
            });
          }
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style  lang="" scoped>
</style>
