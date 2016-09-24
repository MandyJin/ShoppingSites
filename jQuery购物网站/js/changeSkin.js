/*网站换肤
 * 原理：通过调用不同的样式表文件来实现不同皮肤的切换，
 * 并且需要将换号的皮肤记入Cookie中，这样，用户下次访问时，就可以显示用户自定义的皮肤了
 */
$(function(){
	/*获取选择的主题id,查看引用的CSS文件，如果发现其title属性正好与选中
	 的主题id值相等，则应用该主题CSS文件，同时将其他引用的CSS文件禁用，并且
	 将当前选中的主题写入cookie中，设置cookie过期时间，最后将当前选中的主题
	 按钮（li）设置为当前选中状态*/
	var $li=$("#skin li");
	$li.click(function(){
		switchSkin(this.id);
	});
	/*页面载入时，读取主题cookie值，如果主题cookie存在则调用cookie值对应
	的主题样式CSS文件，并且设置当前主题按钮状态为选中状态，反之，则调用默认样式*/
	var cookie_skin = $.cookie("MyCssSkin");
	if (cookie_skin) {
		switchSkin(cookie_skin);
	}
})
function switchSkin(skinName){
	$("#"+skinName).addClass("selected")//当前<li>元素被选中
					.siblings().removeClass("selected");//去掉其他同辈li元素的选中
	$("#cssfile").attr("href","css/skin/"+skinName+".css");//设置不同皮肤
	//设置cookie名称为"MyCssSkin"，值为当前选中的主题值，过期时间为10天。
	$.cookie("MyCssSkin",skinName,{path:'/',expires:10});
}
