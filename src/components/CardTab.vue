<template>
  <section class="classes-tab">
    <h2 class="text-white font-weight-bold text-h5">Classes</h2>
    <div class="d-flex ga-10">
      <a
        href=""
        v-for="cname in classNames"
        :key="cname"
        class="text-white text-subtitle-1 pa-4 font-weight-bold"
        >{{ cname }}</a
      >
    </div>
  </section>
</template>

<script lang="ts" setup>
const classNames: string[] = ["Class A", "Class B", "Class C"];
</script>

<style scoped>
.classes-tab {
  position: fixed;
  width: 100%;
  background-color: #341539;
  padding: 16px 16px 0px 16px;
}
</style>
