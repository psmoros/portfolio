<template>
  <div class="container-fluid">
    <!-- Work Component Start  -->
    <app-rootnode></app-rootnode>
  </div>
</template>

<script>
import rootnode from "./Work-Items/rootnode";

export default {
  data() {
    return {
      work1Current: 0
    };
  },
  components: {
    "app-rootnode": rootnode
  }
};
</script>

<style scoped>


.container-fluid {
  background-color: #0c2db3;
  padding-bottom: 100px;
  padding-left: 5vw;
  padding-right: 5vw;
  position: relative;
  z-index: 5;
}
</style>
