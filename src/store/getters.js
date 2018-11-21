
export default { 
	getContentById: (state) => (id) => {
	    return state.contents.find(content => content.id === id)
	}
}


/*
const getContentById = state => id =>  { return state.contents.find(content => content.id === id) }
export { getContentById }*/