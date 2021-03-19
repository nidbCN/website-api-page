<template>
  <div>
    <v-card>
      <v-card-title>{{ item.name }}</v-card-title>
      <v-card-subtitle>
        {{ item.info }}
      </v-card-subtitle>
      <v-card-text>
        {{ item.description }}
      </v-card-text>
      <v-card-actions>
        <v-btn v-if="item.showGitHub" text :href="item.gitHub">
          <v-icon small> mdi-github </v-icon> GITHUB
        </v-btn>
        <v-btn :href="item.link" color="primary">
          <v-icon small> mdi-book-open </v-icon>
          查看文档
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["item"],
  name: "DocsItem",
};
</script>