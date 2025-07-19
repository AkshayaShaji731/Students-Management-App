<template>
  <v-tabs-window>
    <v-tabs-window-item
      v-for="text in textData"
      :key="text.title"
      :value="text"
    >
      <v-container>
        <v-card-title class="text-center">{{ text.title }}</v-card-title>
        <v-form class="d-flex ga-4 justify-center flex-column align-center">
          <v-text-field label="Username"></v-text-field>
          <v-text-field label="PassWord"></v-text-field>
          <v-btn>{{ text.btnText }}</v-btn>
        </v-form>
        <v-card-text class="forget-text">forget password</v-card-text>
      </v-container>
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<script setup lang="ts">
import type { FormText } from "@/types/FormText";

interface Texts {
  textData: FormText[];
}

defineProps<Texts>();
</script>

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
