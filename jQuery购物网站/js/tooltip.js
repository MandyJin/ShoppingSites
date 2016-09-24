/*右侧最新动态模块内容添加超链接提示*/
$(function(){
	var x=10;
	var y=20;
	$("a.tooltip").mouseover(function(e){
		this.myTitle = this.title;
		this.title = "";
		var tooltip = "<div id = 'tooltip'>"+this.myTitle+"</div>";
		$("body").append(tooltip);//把它追加到文档中
		$("#tooltip")
		    .css({
		    	"top":(e.pageY+y)+"px",
		    	"left":(e.pageX+x)+"px"
		    }).show("fast");//设置x坐标和y坐标，并且显示
	}).mouseout(function(){
		this.title = this.myTitle;
		$("#tooltip").remove();//移除
	}).mousemove(function(e){
		$("#tooltip")
		    .css({
		    	"top":(e.pageY+y)+"px",
		    	"left":(e.pageX+x)+"px"
		    });
	});
})
/*右侧下部品牌活动横向滚动效果  && 光标滑过产品列表效果*/
$(function(){
	$("#jnBrandTab li a").click(function(){
		$(this).parent().addClass("chos")
						.siblings().removeClass("chos");
		var idx = $("#jnBrandTab li a").index(this);
		showBrandList(idx);
		return false;
	}).eq(0).click();
});
//显示不同模块
/*outerWidth:返回元素的外部宽度，包含padding和border
 * 
 */
function showBrandList(index){
	var $rollobj = $("#jnBrandList");
	var rollWidth = $rollobj.find("li").outerWidth();
	rollWidth = rollWidth*4;//一个版面的宽度
	$rollobj.stop(true,false).animate({left:-rollWidth*index},1000);
}
//each()方法遍历，为每个匹配元素规定运行的函数
/* 滑过图片出现放大镜效果 */
$(function(){
	$("#jnBrandList li").each(function(index){
		var $img = $(this).find("img");
		var img_w = $img.width();
		var img_h = $img.height();
		var spanHtml = '<span style="position:absolute;top:0;left:5px;width:'+img_w+'px;height:'+img_h+'px;" class="imageMask"></span>';
		$(spanHtml).appendTo(this);
	})
	$("#jnBrandList").delegate(".imageMask", "hover", function(){
		$(this).toggleClass("imageOver");
	});
	
	/*
	$("#jnBrandList").find(".imageMask").live("hover", function(){
		$(this).toggleClass("imageOver");
	});
	*/
})