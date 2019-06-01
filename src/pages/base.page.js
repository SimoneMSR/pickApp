export class BasePage {


	static loginGuard(to,from,resolve, reject){
        if(BasePage.isLoggedIn())
            resolve(to.path)
        else{
            reject();
            this.navigate("/");
        }
    }

    static redirectToDashboard(to,from,resolve, reject){
        if(BasePage.isLoggedIn())
            resolve("/dashboard/");
        else
            resolve(to.path)
    }

	constructor(){
		this.methods = {
			onPageInit : function(){
				var self=this;
			},
			toast(testo, duration) {
			    var ms = duration || 3000;
			    var toast = this.$f7.toast.create({
			        text: testo,
			        position: 'bottom'
			    });
			    toast.open();
			    setTimeout(function() {
			        toast.close();
			    }, ms);
			}
		};
		this.data = function(){
			return {
				name : "page"
			}
		},
		this.mounted = function(){

		}
	}
}
