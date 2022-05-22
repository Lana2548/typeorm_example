<template>
  <div>
    <post-enquete/> <!-- PostEnqueteコンポーネントを使っています。 -->
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import PostEnquete from "./PostEnquete.vue"

export default Vue.extend({
    components:{PostEnquete} // PostEnqueteを画面で使えるようにしています。
});
</script>