<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-title>API参考</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn href="https://www.gaein.cn" text>
        <span class="mr-2">首页</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
