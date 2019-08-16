<template>
	<div>
		<p>
			<input type="text" v-model.trim="input">

			<a href="javascript:;" v-on:click="updateHandler" class="btn">UPDATE</a>
		</p>
	</div>
</template>


<script>
	
  	//import { mapGetters } from 'vuex';

  	const EXAMPLE_STORE = 'example';

  	export default {
	    data() {
			return {
				input: ''
			}
		},
		mounted() {

			if(typeof this.getContentById === 'undefined'){
				this.$store.dispatch(`${EXAMPLE_STORE}/CONTENTS_READ_BYID`, {
					id: this.$route.params.id,
				}).then(() => {  
					if(typeof this.$store.state[`${EXAMPLE_STORE}`].contents[0].content !== 'undefined'){
						this.input = this.$store.state[`${EXAMPLE_STORE}`].contents[0].content
					}
				})
			}else{
				this.input = this.getContentById.content;
				//console.log('getters', this.$store.getters[`${EXAMPLE_STORE}/getContentById`](this.$route.params.id))
			}
			
		},
		computed: {
			//...mapGetters(['getContentById'])
			getContentById(){
				return this.$store.getters[`${EXAMPLE_STORE}/getContentById`](this.$route.params.id)
			},
		},
		methods: {
			updateHandler() {
				this.$store.dispatch(`${EXAMPLE_STORE}/CONTENTS_UPDATE`, {  //打去api
					id: this.$route.params.id,
					input: this.input
				}).then(() => {   //切換router
					this.$router.push({ path: '/list' })
				})
			}
		}
  	};

</script>


<style>
	.btn{ font-size:16pt }
</style>