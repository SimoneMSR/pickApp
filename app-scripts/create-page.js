const  mkdir = require('mkdirp')
const touch = require('touch')
const fs = require('fs')
var pageName = getPageName()
var pageFolderName = getPageFilename();
var pageFilename = getPageFilename();
var child = mkdir("src\\pages\\"+pageFolderName);
var template = 
`<template>
	<f7-page name="${pageFilename}" >
		<!-- Scrollable page content -->
		<div @click="onClick">
			{{message}}
		</div>
	</f7-page>
</template>
<script>
	import page from "./${pageFilename}.js"
	import "./${pageFilename}.scss"
</script>
`

var source =
`import {BasePage} from "../base.page.js"

class ${pageName}Page{
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
export default new ${pageName}Page()
`

var style = 
`[data-name="${pageFilename}"]{
}
`


fs.writeFileSync("src\\pages\\"+pageFolderName+"\\"+pageFilename+".vue", template)
fs.writeFileSync("src\\pages\\"+pageFolderName+"\\"+pageFilename+".scss",style);
fs.writeFileSync("src\\pages\\"+pageFolderName+"\\"+pageFilename+".js",source);

function capitalize(_string){
	if(!_string) return _string;
	return _string[0].toUpperCase() + _string.substr(1)
}

function getPageName(){
	return process.argv[2].split("-").map(token => capitalize(token)).join("");
}

function getPageFilename(){
	return process.argv[2].toLowerCase();
}
