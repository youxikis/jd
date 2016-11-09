$(function(){
//	头部动效
	function headSel(obj,objsel){
		obj.onmouseover=function()
		{
			objsel.style.display="block"
		}
		obj.onmouseout=function()
		{
			objsel.style.display="none"
		}
	}
	 var headnLeft=$(".headnLeft")[0];
	 var songzhi=$(".songzhi")[0];
	 headSel(headnLeft,songzhi);
    
	var myJD=$(".myJD")[0];
	var myJDsel=$(".myJDsel")[0];
	headSel(myJD,myJDsel);

	var sjJD=$(".sjJD")[0];
	var sjJDsel=$(".sjJDsel")[0];
	headSel(sjJD,sjJDsel);

	var gzJD=$(".gzJD")[0];
	var gzJDsel=$(".gzJDsel")[0];
	headSel(gzJD,gzJDsel);

	var khJD=$(".khJD")[0];
	var khJDsel=$(".khJDsel")[0];
	headSel(khJD,khJDsel);

	var wzJD=$(".wzJD")[0];
	var wzJDsel=$(".wzJDsel")[0];
	headSel(wzJD,wzJDsel);

	/*// 轮播
        var bnimgs=$("a",$(".bnZh")[0])
        var bnlis=$("li",$(".bnlis")[0])
        var bn=$(".bnZh")[0]
        console.log(bnimgs,bnlis,bn)
        var t=setInterval(move,2000)
        var bnn=0;
        function move(){

            bnn++;
            if(bnn>=bnimgs.length){
               bnn=0;
            }
            for(var i=0;i<bnimgs.length;i++){
                 bnimgs[i].style.display="none";
                 bnlis[i].style.background="#3e3e3e"
            }
            bnimgs[bnn].style.display="block";
            bnlis[bnn].style.background="#b61d1d"
        }
        function moveL(){
            bnn=bnimgs.length -1;
            bnn--;
            if(bnn<0){
               bnn=bnimgs.length;
            }
            for(var i=bnimgs.length-1;i<bnimgs.length;i--){
                 bnimgs[i].style.display="none";
                 bnlis[i].style.background="#3e3e3e"
            }
            bnimgs[bnn].style.display="block";
            bnlis[bnn].style.background="#b61d1d"
        }
        // 停 动
        bn.onmouseover=function(){
            clearInterval(t);
        }
        bn.onmouseout=function(){
            t=setInterval(move,2000);
        }
    // 选项卡
        for(var i=0;i<bnlis.length;i++){
            bnlis[i].index=i;
            bnlis[i].onmouseover=function(){
                for(var j=0;j<bnimgs.length;j++){
                 bnimgs[j].style.display="none";
                 bnlis[j].style.background="#3e3e3e"
                }
                bnimgs[this.index].style.display="block";
                bnlis[this.index].style.background="#b61d1d";
                bnn=this.index;
            }
        }
    // 左右按钮
      var btnL=$(".btnL")[0];
      var btnR=$(".btnR")[0];
       btnL.onclick=function(){
          moveL();
       }

         btnR.onclick=function(){
          move();
       }*/

// banner
var bnimgs=$("a",$(".bnZh")[0])
var bnlis=$("li",$(".bnlis")[0])
var bn=$(".bnZh")[0];
var btnL=$(".btnL")[0];
var btnR=$(".btnR")[0];
console.log(bn)
lunbo(bn,bnimgs,bnlis,btnL,btnR);


//banner 侧导航
	var bnLfl=$(".bnLfl");
	var bannerTan=$(".bannerTan");

	for(var i=0;i<bnLfl.length;i++){
		bnLfl[i].index=i;

		bnLfl[i].onmouseover=function(){
			bannerTan[this.index].style.display="block";

		}
		bnLfl[i].onmouseout=function(){
			bannerTan[this.index].style.display="none";
		}
	}
//猜你喜欢
$(".cain1")[0].onmouseover=function(){
	$(".headbg")[0].style.display="block";
	animate($(".headbg")[0],{left:845},400)
}

// 推荐
var tuijianRW=$(".tuijianRW")[0];
var tuijNR=$(".tuijNR",tuijianRW);
var btnLeft=$(".bntleft",tuijianRW)[0];
var btnRight=$(".bntright",tuijianRW)[0];
wufeng2(tuijianRW,tuijNR,btnLeft,btnRight);

// 选项卡 移入切换
var rdaoh=$(".rdaoh")

var cLis =$("li",rdaoh[0])
var dhLis=$(".redkkk",rdaoh[0])
var cf1=$(".louz1xR",$(".louz1xR-kk ")[0])
select2(cLis,dhLis,cf1)

var cLis3=$("li",rdaoh[2]);
var dhLis3=$(".redkkk",rdaoh[2]);
var cf3=$(".f3-kk",$(".f3-bot")[0]);
select2(cLis3,dhLis3,cf3)

var cLis4=$("li",rdaoh[3]);
var dhLis4=$(".redkkk",rdaoh[3]);
var cf4=$(".f3-kk",$(".f3-bot")[1]);
select2(cLis4,dhLis4,cf4)

var cLis5=$("li",rdaoh[4]);
var dhLis5=$(".redkkk",rdaoh[4]);
var cf5=$(".f3-kk",$(".f3-bot")[2]);
select2(cLis5,dhLis5,cf5)

var cLis11=$("li",rdaoh[10]);
var dhLis11=$(".redkkk",rdaoh[10]);
var cf11=$(".f3-kk",$(".f3-bot")[3]);
select2(cLis11,dhLis11,cf11)

var cLis2 =$("li",rdaoh[1]);
var dhLis2=$(".redkkk",rdaoh[1]);
var cf2=$(".qiehuan",$(".louF2B ")[0]);
select2(cLis2,dhLis2,cf2);

var cLis6=$("li",rdaoh[5]);
var dhLis6=$(".redkkk",rdaoh[5]);
var cf6=$(".qiehuan",$(".f6-bot")[0]);
select2(cLis6,dhLis6,cf6);

var cLis7=$("li",rdaoh[6]);
var dhLis7=$(".redkkk",rdaoh[6]);
var cf7=$(".qiehuan",$(".f6-bot")[1]);
select2(cLis7,dhLis7,cf7);

var cLis8=$("li",rdaoh[7]);
var dhLis8=$(".redkkk",rdaoh[7]);
var cf8=$(".qiehuan",$(".f6-bot")[2]);
select2(cLis8,dhLis8,cf8);

/*var cLis9=$("li",rdaoh[8]);
var dhLis9=$(".redkkk",rdaoh[8]);
var cf9=$(".qiehuan",$(".f6-bot")[3]);
console.log(cLis9,dhLis9,cf9)
select2(cLis9,dhLis9,cf9);*/

var cLis10=$("li",rdaoh[9]);
var dhLis10=$(".redkkk",rdaoh[9]);
var cf10=$(".qiehuan",$(".f10-bot")[0]);
select2(cLis10,dhLis10,cf10);


//	小轮播
//	F3
var f3_botm=$(".f3-botm")[0];
var f3Lunbo=$(".f3Lunbo")[0];
var f3Imgs=$(".f3-botm-sh",f3Lunbo);
var f3BtnLis=$("li",$(".f3-botm-btnul")[0]);
var btnLeft=$(".bntleft",$(".f3-botm")[0])[0];
var btnRight=$(".bntright",$(".f3-botm")[0])[0];
wufeng(f3_botm,f3Imgs,f3BtnLis,btnLeft,btnRight);
// F4
var f3_botm2=$(".f3-botm")[1];
var f3Lunbo2=$(".f3Lunbo")[1];
var f3Imgs2=$(".f3-botm-sh",f3Lunbo2);
var f3BtnLis2=$("li",$(".f3-botm-btnul")[1]);
var btnLeft2=$(".bntleft",$(".f3-botm")[1])[0];
var btnRight2=$(".bntright",$(".f3-botm")[1])[0];
wufeng(f3_botm2,f3Imgs2,f3BtnLis2,btnLeft2,btnRight2);
	
// F5
var f3_botm3=$(".f3-botm")[2];
var f3Lunbo3=$(".f3Lunbo")[2];
var f3Imgs3=$(".f3-botm-sh",f3Lunbo3);
var f3BtnLis3=$("li",$(".f3-botm-btnul")[2]);
var btnLeft3=$(".bntleft",$(".f3-botm")[2])[0];
var btnRight3=$(".bntright",$(".f3-botm")[2])[0];
wufeng(f3_botm3,f3Imgs3,f3BtnLis3,btnLeft3,btnRight3);
//F6
var f6_botm=$(".f6-botm")[0];
var f6Imgs=$(".f6-botm-img",f6_botm);
var f6BtnLis=$("li",$(".f6-botm-btnul")[0]);
var btnLeft6=$(".bntleft",$(".f6-botm")[0])[0];
var btnRight6=$(".bntright",$(".f6-botm")[0])[0];
wufeng(f6_botm,f6Imgs,f6BtnLis,btnLeft6,btnRight6);

//F7
var f7_botm=$(".f6-botm")[1];
var f7Imgs=$(".f6-botm-img",f7_botm);
var f7BtnLis=$("li",$(".f6-botm-btnul")[1]);
var btnLeft7=$(".bntleft",$(".f6-botm")[1])[0];
var btnRight7=$(".bntright",$(".f6-botm")[1])[0];
wufeng(f7_botm,f7Imgs,f7BtnLis,btnLeft7,btnRight7);

//F8
var f8_botm=$(".f6-botm")[2];
var f8Imgs=$(".f6-botm-img",f8_botm);
var f8BtnLis=$("li",$(".f6-botm-btnul")[2]);
var btnLeft8=$(".bntleft",$(".f6-botm")[2])[0];
var btnRight8=$(".bntright",$(".f6-botm")[2])[0];
wufeng(f8_botm,f8Imgs,f8BtnLis,btnLeft8,btnRight8);

//F9
var f9_botm=$(".f6-botm")[3];
var f9Imgs=$(".f6-botm-img",f9_botm);
var f9BtnLis=$("li",$(".f6-botm-btnul")[3]);
var btnLeft9=$(".bntleft",$(".f6-botm")[3])[0];
var btnRight9=$(".bntright",$(".f6-botm")[3])[0];
wufeng(f9_botm,f9Imgs,f9BtnLis,btnLeft9,btnRight9);

//	F10
var f10_botm=$(".f10-botm")[0];
var f10Lunbo=$(".f10Lunbo")[0];
var f10Imgs=$(".f10-botm-sh",f10Lunbo);
var f10BtnLis=$("li",$(".f10-botm-btnul")[0]);
var btnLeft10=$(".bntleft",$(".f10-botm")[0])[0];
var btnRight10=$(".bntright",$(".f10-botm")[0])[0];
wufeng(f10_botm,f10Imgs,f10BtnLis,btnLeft10,btnRight10);

//	F11
var f3_botm3=$(".f3-botm")[3];
var f3Lunbo3=$(".f3Lunbo")[3];
var f3Imgs3=$(".f3-botm-sh",f3Lunbo3);
var f3BtnLis3=$("li",$(".f3-botm-btnul")[3]);
var btnLeft3=$(".bntleft",$(".f3-botm")[3])[0];
var btnRight3=$(".bntright",$(".f3-botm")[3])[0];
wufeng(f3_botm3,f3Imgs3,f3BtnLis3,btnLeft3,btnRight3);

//	F12
var f12_botm=$(".f12-botm")[0];
var f12Lunbo=$(".f12Lunbo")[0];
var f12Imgs=$(".f12-botm-sh",f12Lunbo);
var f12BtnLis=$("li",$(".f12-botm-btnul")[0]);
var btnLeft12=$(".bntleft",$(".f12-botm")[0])[0];
var btnRight12=$(".bntright",$(".f12-botm")[0])[0];
wufeng(f12_botm,f12Imgs,f12BtnLis,btnLeft12,btnRight12);

var f12_botm=$(".f12-botm")[1];
var f12Lunbo=$(".f12Lunbo")[1];
var f12Imgs=$(".f12-botm-sh",f12Lunbo);
var f12BtnLis=$("li",$(".f12-botm-btnul")[1]);
var btnLeft12=$(".bntleft",$(".f12-botm")[1])[0];
var btnRight12=$(".bntright",$(".f12-botm")[1])[0];
wufeng(f12_botm,f12Imgs,f12BtnLis,btnLeft12,btnRight12);

//楼层跳转
	var gudingLeft=$(".gudingLeft")[0];
	var floorJump=$(".floorJump");
	var floor_lis=$(".floor_lis");
	var floor_h=floorJump[0].offsetTop;
	var font1=$(".font1");
	var font2=$(".font2");
	var cHeight=document.documentElement.clientHeight;
	var Height;
	// console.log(cHeight);
	for(var i=0;i<floorJump.length;i++){
		floorJump[i].h=floorJump[i].offsetTop;
	}
	window.onscroll=function(){
		var top=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
		if(top>floor_h-500){
			gudingLeft.style.display="block";
			Height=gudingLeft.offsetHeight;
			gudingLeft.style.top=(cHeight-Height)/2+"px";
		}
		if(top<floor_h-500){
			gudingLeft.style.display="none";
		}
		for(var i=0;i<floorJump.length;i++){
			if(top>floorJump[i].h-500){
				for(var j=0;j<font2.length;j++){
					font2[j].style.display="none";
				}
				font2[i].style.display="block";
				now=i;
			}
		}
	}

	for(var i=0;i<floor_lis.length;i++){
		floor_lis[i].index=i;
		floor_lis[i].onmouseover=function(){
			font1[this.index].style.display="block";
		}
		floor_lis[i].onmouseout=function(){
			font1[this.index].style.display="none";
		}
		floor_lis[i].onclick=function(){
			animate(document.body,{scrollTop:floorJump[this.index].h-100});
			animate(document.documentElement,{scrollTop:floorJump[this.index].h-100});
		}
	}
	// 固定右
	var smallLis=$(".smallLis");
	var gdRlis=$(".gdRlis");
	var gdkk=$(".gdkk",$(".Leadbox")[0]);
	for(var i=0;i<smallLis.length;i++){
		smallLis[i].index=i;
		smallLis[i].onmouseover=function(){
			animate(gdRlis[this.index],{left:-62},200);
			gdkk[this.index].style.background="#c81623";
		}
		smallLis[i].onmouseout=function(){
			animate(gdRlis[this.index],{left:0},200);
			gdkk[this.index].style.background="#7a6e6e";
		}
	}

	var gdR2lis=$(".gdR2lis");
	var gdR2font=$(".gdR2font");
	var gdkk2=$(".gdkk2",$(".gdR2")[0]);
	for(var i=0;i<gdR2lis.length;i++){
		gdR2lis[i].index=i;
		gdR2lis[i].onmouseover=function(){
			animate(gdR2font[this.index],{left:-62},200);
			gdkk2[this.index].style.background="#c81623";
		}
		gdR2lis[i].onmouseout=function(){
			animate(gdR2font[this.index],{left:0},200);
			gdkk2[this.index].style.background="#7a6e6e";
		}
	}
})