<template>
  <div id="home">
    <v-container>
      <v-container v-for="(item, i) in itemList" :key="i">
        <docs-item :item="item"/>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import Axios from "axios";
import DocsItem from "@/components/DocsItem";

export default {
  name: 'Home',
  components: {
    DocsItem
  },
  data: () => ({
    itemList: null
  }),
  mounted() {
    Axios.get("/data.json")
        .then(response => {
          this.itemList = response.data;
        })
        .catch(error => {
          console.log(error);
        });
  }
}
</script>
