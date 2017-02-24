$(function(){
	
	Index.init();
	//字数限制
	wordlimit($(".person_text p"),70);
	wordlimit($(".recentArticle p"),130);
})
var Index={
	init : function(){
		//	底部效果
		this._footer();
		this._toggle();
	},
	_footer : function(){
		$(".media-partners ul>li").hover(function(){
			$(this).toggleClass("animated pulse");
		})
	},
	_toggle : function(){
		/*最新动态*/
		jQuery(".recent-right").slide({mainCell:".bd ul",effect:"leftLoop",trigger:"click",easing:"easeOutCirc"});
		/*媒体报道*/
		//jQuery(".media-report").slide({mainCell:".bd ul",effect:"leftLoop",easing:"easeOutCirc"});
		/*视频报道*/
		jQuery(".video-coverage").slide({mainCell:".bd ul",effect:"leftLoop",vis:3});
		var num=2;
		$(".video-qie li").eq(2).addClass("hover");
		$(".video-qie li").eq(2).css("width",400);
		$(".video-qie ul").css({"width":2880});
		$(".video-coverage .next").click(function(){
			num++;
			$(".video-qie li").eq(num).addClass("hover").siblings().removeClass("hover");
			$(".video-qie li").eq(num).css("width",400).siblings().css("width",320);
			if(num==6){
				$(".video-qie li").eq(2).addClass("hover");
				$(".video-qie li").eq(2).css("width",400);
				num=2;
			}
		});
		
		$(".video-qie li").click(function(){
			var index=$(this).attr("data");
			$(".video-list li").eq(index).show().siblings().hide();
			$(".video-wrap,.video-close").show();
			$(".video-close").unbind();
			$(".video-close").click(function(){
				if(index==0){
					getFlashMovieObject('videoPlay1').StopPlay();
					$(".video-wrap,.video-close,.video-list li").hide();
				}else if(index==1){
					getFlashMovieObject('videoPlay2').StopPlay();
					$(".video-wrap,.video-close,.video-list li").hide();
				}else if(index==2){
					getFlashMovieObject('videoPlay3').StopPlay();
					$(".video-wrap,.video-close,.video-list li").hide();
				}else if(index==3){
					getFlashMovieObject('videoPlay4').StopPlay();
					$(".video-wrap,.video-close,.video-list li").hide();
				}
			})
		})
		/*成功案例*/
		var visLen=Math.ceil($(window).width()/286);
		jQuery(".success-case").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:visLen,interTime:25,easing:"easeOutCirc"});
		$(".success-case .tempWrap").css({width:$(window).width()});
		var tang=$(".tangshan").offset().left;
		var an=$(".anyang").offset().left;
		var gan=$(".ganzhou").offset().left;
		$(".case-ul li.ul1").click(function(){
			$(".success-case .tempWrap ul").animate({"left":-tang});
		})
		$(".case-ul li.ul2").click(function(){
			$(".success-case .tempWrap ul").animate({"left":-an});
		})
		$(".case-ul li.ul3").click(function(){
			$(".success-case .tempWrap ul").animate({"left":-gan});
		})
		var left=$(".left");
		var right=$(".right");
		var uls=$(".main ul");
		var step=0;
		function auto(){
			for(var i=0;i<uls.length;i++){
				if(i==step){
					uls.eq(i).show();
				}else{
					uls.eq(i).hide();
				}
			}
			console.log(step);
		}
		right.click(function(){
			if(step>=uls.length-1){
				step=-1;
			}
			step++;
			auto();
			
		})
		left.click(function(){
			if(step<=0){
				step=uls.length;
			}
			step--
			auto();
			
		})
	}
}

function getFlashMovieObject(movieName){
  if (window.document[movieName]) 
  {
    return window.document[movieName];
  }
  if (navigator.appName.indexOf("Microsoft Internet")==-1)
  {
    if (document.embeds && document.embeds[movieName])
      return document.embeds[movieName]; 
  }
  else // if (navigator.appName.indexOf("Microsoft Internet")!=-1)
  {
    return document.getElementById(movieName);
  }
}

function wordlimit(cname,wordlength){
	for(var i=0;i<cname.length;i++){

		var nowLength=cname.eq(i).text().length;

		if(nowLength>wordlength){

			var txt=cname.eq(i).text().substr(0,wordlength)+'...';
			cname.eq(i).text(txt);
		}
	}

}