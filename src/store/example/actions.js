
import axios from 'axios'
import router from '../../router'
import helper from '../../helper'

export default { //非同步 api一定樣放這   //dispatch
	CONTENTS_READ: (context) => {   //context為action的obj，可使用其功能
		return axios.get(`${process.env.VUE_APP_API_URL}/contents/`).then((res) => {
			context.commit('setContents', res.data)
		})
	},
	CONTENTS_READ_BYID: (context, { id }) => {
		return axios.get(`${process.env.VUE_APP_API_URL}/contents/` + id).then((res) => {
			context.commit('getContent', res.data)
		}).catch(()=>{
			router.replace({ path: '/list' })
		});
	},
	CONTENTS_ADD: (context, { input }) => {
		let data = {
			content: input
		}

		return axios.post(`${process.env.VUE_APP_API_URL}/contents/`, data).then((res) => {
			context.commit('addContent', res.data)
		})
	},
	CONTENTS_DELETE: (context, { target }) => {
		let index = context.state.contents.indexOf(target);
		if (index == -1) return false;
		return axios.delete(`${process.env.VUE_APP_API_URL}/contents/` + target.id).then((res) => {
			context.commit('deleteContent', index)
		})
	},
	CONTENTS_UPDATE: (context, { id, input }) => { 
		let item = context.state.contents.find((item) => {
			return item.id == id
		});

		if (!item) return false;

		let data = {
			content: input
		}

		return axios.patch(`${process.env.VUE_APP_API_URL}/contents/` + item.id, data).then((res) => {
			context.dispatch('CONTENTS_READ')
		})
	}
}