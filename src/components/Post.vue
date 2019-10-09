<template>
  <v-card class="mx-auto">
    <v-card-text>
        <p class="display-1 text--primary">
            {{title}}
        </p>
        <slot></slot>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
  }),
  props: {
      title: String
  }
};
</script>
