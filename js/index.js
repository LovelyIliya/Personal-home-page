// 移动端菜单选项背景色
let collapse=$('div.collapse')
collapse.css({
  background:'rgba(0,0,0,.5)',
  textAlign: 'center',
  fontSize:18
})

$(function(){
	let consum
	let exsum
	// 获得前两个模块的高
	let threeHeight=$('.home').height()+$('#about').height()
	
	if(window.screen.width>420){		
		consum=threeHeight+$('#exhibition').height()/2;
	}else{
		consum=threeHeight+$('#exhibition').height()-300;
	}
  //锚点跳转动画
  $("a").click(function () {
    $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top-80 +"px"}, 500);
  });
  // 滚动监听改变导航栏背景色
  $(window).scroll(function () {
    let scrollTop=$(this).scrollTop()
    let homeHeight=$('div.home').height()
    if (scrollTop>=homeHeight-50){
      $('nav.navbar').css({
        background:'rgb(55,140,63)'
      })
    }else {
      $('nav.navbar').css({
        background:'none'
      })
    }
		
		
    // 给联系卡片增加动画
    if (scrollTop>=consum) {
      $('#contact .card').css({
        transition:'0.5s',
        transform:'translate(-50%, -50%) scale(1,1) '
      })
    }else {
      $('#contact .card').css({
        transition:'0.5s',
        transform:'translate(-50%, -50%) scale(0,0) '
      })
    }
  })


})

