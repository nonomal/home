<template>
  <Layout :menuList="menuList" />
</template>

<script setup>
//leftmenu #f9f9f9
import Layout from "@/components/Layout.vue";
import DataArr from "@/assets/public.js";
import { onBeforeMount, ref } from "vue";
import menuicon from "@/assets/image/menuicon.js";

let menuList = ref([]);

onBeforeMount(() => {
  // 生成左侧菜单栏
  menuList.value = DataArr.map((v, i) => ({
    label: v.title,
    name: (i + 1).toString(),
    icon: menuicon[v.icon] || null,
  }));
});

let CloseWebPage = () => {
  if (navigator.userAgent.indexOf("MSIE") > 0) {
    if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
      window.opener = null;
      window.close();
    } else {
      window.open("", "_top");
      window.top.close();
    }
  } else if (navigator.userAgent.indexOf("Firefox") > 0) {
    window.location.href = "about:blank "; //火狐默认状态非window.open的页面window.close是无效的
    //window.history.go(-2);
  } else {
    window.opener = null;
    window.open("", "_self", "");
    window.close();
  }
};
</script>
<style lang="less"></style>
