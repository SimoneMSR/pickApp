import {SodexoPage} from "../base.page.js"

var page = {
	...new SodexoPage(),
}
var oldData = page.data;
var oldMounted = page.mounted;
page.data = function(){
	return {
		...oldData(),
		message : 'ciao'
		}
}
page.methods = {
	...page.methods,
	onClick : function(){
		console.log("hello")
	}
}
page.mounted = function(){
	oldMounted.bind(this)();
}

export default page