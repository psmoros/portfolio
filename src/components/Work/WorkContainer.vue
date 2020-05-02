<template>
  <div class="container-fluid">
    <!-- Work Component Start  -->
    <four18sec></four18sec>
    <rootnode></rootnode>
  </div>
</template>

<script>
import four18sec from "./Work-Items/four18sec";
import rootnode from "./Work-Items/rootnode";

export default {
  components: {
    four18sec,
    rootnode
  }
};
</script>

<style scoped>
.container-fluid {
  background-color: #0d2eb3;
  padding-bottom: 100px;
  padding-left: 5vw;
  padding-right: 5vw;
  position: relative;
  z-index: 5;
}
</style>
