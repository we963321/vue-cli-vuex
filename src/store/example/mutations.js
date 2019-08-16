
export default { //同步    //commit
	setContents(state, data) {
		state.contents = data
	},
	getContent(state, data) {
		state.contents.push(data)
	},
	addContent(state, data) {
		state.contents.push(data)
	},
	deleteContent(state, data) {
		state.contents.splice(data, 1)
	},
	updateContent(state, { item, input }) {
		item.content = input
	}
}


/*
const setContents = (state , data) => { state.contents = data }
const getContent = (state , data) => { state.contents = data }
const addContent = (state , data) => { state.contents.push(data) }
const deleteContent = (state , data) => { state.contents.splice(data, 1) }
const updateContent = (state , {item, input}) => { sitem.content = input }

export { setContents, getContent, addContent, deleteContent, updateContent }*/