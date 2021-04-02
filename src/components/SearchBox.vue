<template lang="">
    <div>
        <div class="search-box">
        <input v-model="query" @keypress="fetchData" class="search-bar" type="text" placeholder="serch"/>
        </div>
    </div>
</template>
<script>
export default {
  name: "SearchBox",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    fetchData: async function (event) {
      if (event.key === "Enter") {
        console.log("SearchBox component: fetchData");
        await this.$store.dispatch("fetchData", this.query);
        this.saveSearch();
      }
    },
    saveSearch: function () {
      console.log("SearchBox component: saveSearch");
      this.$store.dispatch("saveSearch");

    },
  },
};
</script>



<style scoped>
.search-box {
  width: 100%;
  margin-bottom: 30px;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  appearance: none;
  font-size: 20px;
  border: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
  color: #313131;
  outline: none;
}

.search-box .search-bar:focus {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
  border: none;
}
</style>