<template>
  <v-container>
    <v-card-title class="text-center">LOGIN</v-card-title>
    <v-form class="d-flex ga-4 justify-center flex-column align-center">
      <v-text-field label="Username"></v-text-field>
      <v-text-field label="PassWord"></v-text-field>
      <v-btn>LOGIN</v-btn>
    </v-form>
    <v-card-text class="forget-text">forget password</v-card-text>
  </v-container>
</template>

<script setup lang="ts"></script>

<style scoped>
:deep.v-text-field,
.v-btn {
  width: 100%;
}

.forget-text {
  position: absolute;
  right: 0;
}

@media screen and (min-width: 768px) {
  :deep.v-text-field,
  .v-btn {
    width: 75%;
  }

  .forget-text {
    right: 10%;
  }
}

@media screen and (min-width: 1024px) {
  :deep.v-text-field,
  .v-btn {
    width: 50%;
  }
  .forget-text {
    right: 25%;
  }
}
@media screen and (min-width: 1440px) {
  .forget-text {
    right: 28%;
  }
}
@media screen and (min-width: 1469px) {
  .forget-text {
    right: 30%;
  }
}
</style>
