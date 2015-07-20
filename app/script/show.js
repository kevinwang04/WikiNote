define(['jquery','data'], function($,data) {
	/////////////////////////
  // Notebook Show Model //
  /////////////////////////
	var notebooks=data.getAllNotebook();


	/////////////////
  	// Private API //
 	/////////////////

 	/**
   	* 判断是否逆序排列，默认降序排列
  	* @param  {array}   arr 	笔记本数组或笔记数组
  	* @param  {boolean} boolean	true||false
   	* @return {boolean}             
  	*/
	var listReverse=function(arr,boolean){
  		if(boolean)
  		arr.reverse();
  };
  

  	/**
   	* 选取排序时的参照
  	* @param  {string}   type 	createDate||modifyDate
   	* @return {function} 		进行降序排列的函数            
  	*/
  var sortType=function(type){
  	if(type=="createDate"){
  		return function (a, b) { return a.createDate < b.createDate };
  	}else if(type=="modifyDate")
  		return function (a, b) { return a.modifyDate < b.modifyDate };
  };


	////////////////
	// Public API //
	////////////////
  	
	/**
  * 对数组按参数要求进行排序
  * @param  {string}  choice  _notebooks||_notes
  * @param  {string}  type 	createDate||modifyDate
  * @param  {boolean} boolean	true||false
  * @return {boolean} 		           
  */
 	var listSort=function(choice,type,boolean){
  	if(choice=="_notebooks"){
  		notebooks.sort(sortType(type));
  		listReverse(notebooks,boolean);
  	}else if(choice=="_notes"){
			for(var i=0;i<notebooks.length;i++){
 				notebooks[i].notes.sort(sortType(type));
 				listReverse(notebooks[i].notes,boolean);
 			}
 		}
  };


 	/**
  * 将笔记本导出到页面中
  * @return {boolean} 		          
  */ 
  var showNotebooks=function(){
  	if(notebooks.length==0){
  		$("#_notebooks").append("<div>您暂时未添加笔记本<div>");
  	}else{
  		$("#_notebooks").append("<ul></ul>");
  		for(var i=0;i<notebooks.length;i++){
		  	$("#_notebooks>ul").append("<li>"+notebooks[i].title+" "+notebooks[i].createDate+" "
			+notebooks[i].modifyDate+"</li>");}}	
	};

	/**
   	* 将指定id的笔记本内的全部笔记导出到页面中
   	* @param  {number}   id 	NotebookId
   	* @return {boolean} 		          
  	*/ 
	var showNotes=function(id){
		if(notebooks[id].notes.length==0){
			$("#_notes").append("<div>您暂时未在本笔记本添加笔记<div>");
		}else{
			$("#_notes").append("<ul></ul>");
			for(var i=0;i<notebooks[id].notes.length;i++){
		  		$("#_notes>ul").append("<li>"+notebooks[id].notes[i].title+" "+notebooks[id].notes[i].createDate+" "
				+notebooks[id].notes[i].modifyDate+" "+notebooks[id].notes[i].tag+" "+notebooks[id].notes[i].content.substring(0,6)+"</li>");}}
	};
});