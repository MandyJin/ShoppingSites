/*衣服颜色切换*/
$(function(){
	$(".color_change ul li img").click(function(){    
		  $(this).addClass("hover").parent().siblings().find("img").removeClass("hover");
		  var imgSrc = $(this).attr("src");
		  var i = imgSrc.lastIndexOf(".");
		  var unit = imgSrc.substring(i);
		  imgSrc = imgSrc.substring(0,i);
		  var imgSrc_small = imgSrc + "_one_small"+ unit;
		  var imgSrc_big = imgSrc + "_one_big"+ unit;
		  $("#bigImg").attr({"src": imgSrc_small });
		  $("#thickImg").attr("href", imgSrc_big);
		  var alt = $(this).attr("alt");
		  $(".color_change strong").text(alt);
		  var newImgSrc = imgSrc.replace("img/pro_img/","");
		  $("#jnProitem .imgList li").hide();
		  $("#jnProitem .imgList").find(".imgList_"+newImgSrc).show();
		  //解决问题：切换颜色后，放大图片还是显示原来的图片。
		  $("#jnProitem .imgList").find(".imgList_"+newImgSrc).eq(0).find("a").click();
	});
});

/*右侧产品尺寸切换*/
$(function(){
	$(".pro_size li").click(function(){
		$(this).addClass("cur").siblings().removeClass('cur');
		$(this).parents("ul").siblings("strong")
			   .text($(this).text());
	})
})

/*右侧产品数量和价格联动*/
$(function(){
	var $span = $(".pro_price strong");
	var price = $span.text();
	$("#num_sort").change(function(){
		var num = $(this).val();
		var amount = num*price;
		$span.text(amount);
	}).change();
})

/*右侧给产品评分的效果*/
$(function(){
	//通过修改样式来显示不同的星级
    $("ul.rating li a").click(function(){
	     var title = $(this).attr("title");
	     alert("您给此商品的评分是："+title);
		 var cl = $(this).parent().attr("class");
		 $(this).parent().parent().removeClass().addClass("rating "+cl+"star");
		 $(this).blur();//去掉超链接的虚线框
		 return false;
	})
})

/*右侧放入购物车*/
$(function(){
	var $product = $(".jnProDetail");
	$("#cart a").click(function(){
		var pro_name = $product.find("h4:first").text();
		var pro_size = $product.find(".pro_size strong").text();
		var pro_color = $(".color_change strong").text();
		var pro_num = $product.find("#num_sort").val();
		var pro_price=$product.find(".pro_price strong").text();
		var dialog = "感谢您的购买。\n您购买的\n"+
					"产品是："+pro_name+";\n"+
					"尺寸是："+pro_size+";\n"+
					"颜色是："+pro_color+";\n"+
					"数量是："+pro_num+";\n"+
					"总价是："+pro_price+"元";
//		alert(dialog);
		$("#jnDialogContent").html(dialog);
		$('#basic-dialog-ok').modal();
		return false;//避免页面跳转
	})
})
