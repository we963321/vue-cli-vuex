<template>
    <div>
      <p>
        <input type="text" v-model.trim="input">
       <a href="javascript:;" v-on:click="createHandler" class="btn">CREATE</a>
      </p>
      <ol>
        <li v-for="(item, index) in contents" :key="item.id" class="list">
          {{ item.content }}
          
          <a href="javascript:;" v-on:click="updateHandler(index)">UPDATE</a>
          <a href="javascript:;" v-on:click="deleteHandler(index)">DELETE</a>
        </li>
      </ol>
    </div>
</template>


<script>

  export default {
    data: function () {
      return {
        input: '',
      }
    },
    mounted(){
      this.$store.dispatch('CONTENTS_READ')

      this.$store.dispatch('TEST_CORS')
    },
    computed: {
      contents() {
        return this.$store.state.contents
      }
    },
    methods: {
      createHandler() {
        if (!this.input) return false;

        this.$store.dispatch('CONTENTS_ADD', { input: this.input });

        this.input = '';
      },
      deleteHandler(index) {
        let target = this.contents[index];
        this.$store.dispatch('CONTENTS_DELETE', { target })
      },
      updateHandler(index) {

        // push 與 replace 差異就是一個會有歷史紀錄(push) 一個沒(replace)

        let target = this.contents[index];
        //this.$router.push({ path: `/update/${target.id}` }) //會可按上一頁
        this.$router.push({ name: 'update', params: { id: target.id } })
        //this.$router.replace({ path: `/update/${target.id}` }) //不會有上一頁
      }
    }
  };

</script>


<style>
  .list{ display:block }
  
</style>