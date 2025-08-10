<template>
  <div>
    <div class="title">
      <h2>简历解析</h2>
    </div>
    <el-upload
      class="upload-demo upload"
      drag
      action=""
      :on-change="handleChange"
      :show-file-list="false"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
    <p>
      使用说明：选择或者拖曳你的附件简历文件，并点击提交按钮。
      <br />
      支持格式：doc|docx格式。
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "analysis",
  data() {
    return {};
  },
  // dom节点初次渲染完成的操作
  created() {},
  methods: {
    handleChange(file) {
      console.log(file);
      const formData = new FormData();
      formData.append("file", file.raw);
      axios({
        url: "/api/word/user/upload",
        method: "post",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        this.$emit("renew", 2, res.data.data);
        // console.log(res.data.data);
      });
    },
  },
};
</script>

<style>
.upload {
  text-align: center;
}
.title {
  margin: 50px 0 20px 0;
  font-weight: 600 !important;
  text-align: center;
}
p {
  margin-top: 30px;
  text-align: center;
  color: #869ab8 !important;
}
</style>
