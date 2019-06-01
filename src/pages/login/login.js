import {BasePage} from "../base.page.js"

class LoginPage{
	constructor(){
		var pagePage = new BasePage();
		this.data = function(){
			return{
				...pagePage.data(),
				message : 'hello'
			}
		}

		this.methods = {
			...pagePage.methods,
			onClick : function(){
			}
		}
	}
}
export default new LoginPage()