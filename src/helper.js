
import md5 from 'md5'

const helper = {
	apiKey : function(){
		let d = new Date();
	    let h = d.getHours();
	    let m = d.getMinutes();
	    let time = h + m;
	    let key = process.env.VUE_APP_API_KEY;
	    let result = md5(key + time + key);

		return result;
	},

	sayHi : function (){ alert('hi') }
}

export default helper
