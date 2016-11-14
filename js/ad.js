/*首页大屏广告效果*/
$(function(){
	var $imgrolls = $("#jnImageroll div a");
	//opacity设置元素的不透明级别
	/*eq()选择器选取带有指定index值的元素，从0开始
	 下面代码中，参数index代表当前要显示图片的索引，获取当前滑过的<a>元素在所有<a>元素中的索引
	 可以使用jQuery的index()方法来获取
	 hover()方法的含义是鼠滑入滑出，它对应着2个事件，即mouseenter和mouseleave
	 其中eq(0).mouseover()部分二是用来初始化的，表示鼠标指针位于第一个图片上，即让第一个文字高亮并显示第一个图片*/
	$imgrolls.css("opacity","0.7");
	var len = $imgrolls.length;
	var index = 0;
	var adTimer = null;
	$imgrolls.mouseover(function(){
		index = $imgrolls.index(this);
		showImg(index);
	}).eq(0).mouseover();
	//滑入 停止动画，滑出开始动画
	/*setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
      setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
                由 setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数。
      triger()触发被选元素的指定事件类型
    */
	$('#jnImageroll').hover(function(){
		if(adTimer){
			clearInterval(adTimer);
		}
	},function(){
		adTimer =  setInterval(function(){
			showImg(index);
			index++;
			if (index==len) {
				index=0;
			}
		},5000);
	}).trigger("mouseleave");
})
//显示不同的幻灯片
//find()方法用来获得当前元素集合中每个元素的后代
//attr()方法设置或返回被选元素的属性值
//《锋利jQuery》P.277
function showImg(index){
	var $rollobj = $("#jnImageroll");
	var $rolllist = $rollobj.find("div a");
	var newhref = $rolllist.eq(index).attr("href");
	$("#JS_imgWrap").attr("href",newhref)
		.find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
	$rolllist.removeClass("chos").css("opacity","0.7")
		.eq(index).addClass("chos").css("opacity","1");
	
}
