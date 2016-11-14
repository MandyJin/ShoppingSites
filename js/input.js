/*搜索文本框效果*/
$(function(){
	$("#inputSearch").focus(function(){
		$(this).addClass("focus");
		if ($(this).val()==this.defaultValue) {
			$(this).val("");
		}
	}).blur(function(){
		$().removeClass("focus");
		if($(this).val()==''){
			$(this).val(this.defaultValue);
		}
	/*实现点击Enter提交表单效果*/
	}).keyup(function(e){
		if(e.which == 13){
			alert('回车提交表单！')
		}
	})
})
//左侧商品分类热销效果
//append：向每个匹配的元素内部追加内容
$(function(){
	$(".jnCatainfo .promoted").append('<span class="hot"></span>');
})