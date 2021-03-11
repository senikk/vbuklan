<template>
  <v-card class="mb-4 mr-2 mx-auto">
    <v-card-text>
      <v-img :src="src" v-bind:style="adimage"/>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    adimage: {
      'max-height': '170px',
    }
  }),
  props: {
      src: String
  }
};
</script>
