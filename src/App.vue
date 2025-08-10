<template>
  <div id="app">
    <analysis v-if="id == 1" @renew="renew" />
    <resumeDisplay v-if="id == 2" :data="data" />
  </div>
</template>
<script>
import axios from "axios";
import analysis from "./views/analysis.vue";
import resumeDisplay from "./views/resumeDisplay.vue";

export default {
  name: "app",
  // 注册组件
  components: { analysis, resumeDisplay },
  data() {
    return {
      data: {},
      id: 1,
    };
  },
  methods: {
    renew(id, data) {
      this.id = id;
      axios({
        url: "/api/word/test",
        method: "post",
        data: data,
      }).then((res) => {
        this.data = res.data.data;
        console.log(this.data);
      });
      console.log(id, data);
    },
  },
};
</script>

<style></style>
