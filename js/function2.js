//获取类名的兼容性函数
function getClass(classname,obj){
	//判断是否传进obj
	obj=obj||document;
    //判断是否支持obj.getElementsByClassName
	if(obj.getElementsByClassName){
		//支持
		return obj.getElementsByClassName(classname);
	}
	else{
		//不支持  获取全部
		var all=obj.getElementsByTagName("*");
		var arr=[];
		//将符合条件的筛选出来放进新数组
		for(var i=0;i<all.length;i++){
             if(checkClass(all[i].className,classname)){
                 arr.push(all[i]);
             }
		}
		return arr;
	}
}
//checkClass()检测对象的所有类名是否包含目标类名
function checkClass(classstr,classname){
    //字符串转换成数组
    var classarr=classstr.split(" ");
    for(var i=0;i<classarr.length;i++){
        if(classarr[i]==classname){
        	return true;
        }
    }
    return false;
}

// 设置或获取内容  value:要设置的内容
function oprateContent(obj,value){
	// 设置内容
	if(value){
	  if(obj.innerText){
	  
	    obj.innerText=value;
	  }
	  else{
	    obj.textContent=value;

	 }  
    }
    // 获取内容
  else{
  	 if(obj.innerText){
	   return obj.innerText;
	  }
	  else{
		return obj.textContent;
	 }
  }
}
// 获取样式  obj  style:要获取的属性
function getStyle(obj,style){
	if(obj.currentStyle){
		return obj.currentStyle[style];

	}
	else{
		return window.getComputedStyle(obj,null)[style];
	}
}

// $(".one")
// $("#one")
// $("div")
function $(name,obj){
  if(typeof name=="string"){
    	 var obj=obj||document;
    	 //去除不小心打出的前后的空格
    	 var name=name.replace(/^\s*|\s*$/g,"");
    	 if(name.charAt(0)=="#"){
    	 	return document.getElementById(name.slice(1));
    	 }
    	 else if(name.charAt(0)=="."){
             return getClass(name.slice(1),obj);
    	 }
    	 else if(/^[a-zA-z][a-zA-z0-9]{0,10}$/.test(name)){
             return obj.getElementsByTagName(name);
    	 }
       else if(/^<[a-zA-z][a-zA-z0-9]{0,10}>$/.test(name)){
             return document.createElement(name.slice(1,-1));
       }	
   }
   else if(typeof name=="function"){
  	   window.onload=function(){
  	   	  name();
  	   }
   }
}

// 获取子节点 type:no yes no:只获取元素节点 yes:获取元素节点和非空格的文本
function getChilds(obj,type){
    type=type||"no"
    var child=obj.childNodes
    var arr=[]
    for(var i=0;i<child.length;i++){
        if(type=="no"){
        	if(child[i].nodeType==1){
        		arr.push(child[i])
        	}
            
        }
        else if(type=="yes"){
            if(child[i].nodeType==1||child[i].nodeType==3&&child[i].nodeValue.replace(/^\s*|\s*$/g,""))
            {
            	arr.push(child[i])
            }
        }
    }
    return arr    
}

function firstChild(obj,type){
    type=type||"no";
    return getChilds(obj,type)[0];

}
function lastChild(obj,type){
	type=type||"no";
    return getChilds(obj,type)[getChilds(obj,type).length-1];
}
// 获取第n个孩子
function getN(obj,n,type){
	type=type||"no";
	var childs=getChilds(obj,type);

	if(n>childs.length||n<1){
		return false;
	}
	return childs[n-1];

}
// 获得下一个兄弟节点
function getNext(obj,type){
    type=type||"no";
    var next=obj.nextSibling;
    if(next==null){
       return false
    }
    if(type=="no"){
       while(next.nodeType==3||next.nodeType==8){
       	  next=next.nextSibling;
       	  if(next==null){
       	  	 return false;
       	  }
       }
       return next;
    }
    else if(type=="yes"){
        while(next.nodeType==3&&!next.nodeValue.replace(/^\s*|\s*$/g,"")||next.nodeType==8){
       	  next=next.nextSibling;
       	  if(next==null){
       	  	 return false;
       	  }
       }
       return next;
    }

}
// 获得上一个兄弟节点
function getPrevious(obj,type){
    type=type||"no";
    var previous=obj.previousSibling;
    if(previous==null){
       return false
    }
    if(type=="no"){
       while(previous.nodeType==3||previous.nodeType==8){
       	  previous=previous.previousSibling;
       	  if(previous==null){
       	  	 return false;
       	  }
       }
       return previous;
    }
    else if(type=="yes"){
        while(previous.nodeType==3&&!previous.nodeValue.replace(/^\s*|\s*$/g,"")||previous.nodeType==8){
       	  previous=previous.previousSibling;
       	  if(previous==null){
       	  	 return false;
       	  }
       }
       return previous;
    }
}

// 插入一个元素在某一元素之前  obj1：要插入的元素  obj:要插入到obj之前
function insertBefore(obj1,obj){
    var parent=obj.parentNode;
    parent.insertBefore(obj1,obj)
}

// 插入一个元素在某一元素之后
function insertAfter(obj1,obj){
	var parent=obj.parentNode;
	var objnext=getNext(obj,"yes");
	if(!objnext){
		parent.appendChild(obj1)
	}
	else{
		parent.insertBefore(obj1,objnext);
    }
}

//15.hover
//判断某个元素是否包含有另外一个元素
function contains (parent,child) {
    if(parent.contains){
        return parent.contains(child) && parent!=child;
    }else{
        return (parent.compareDocumentPosition(child)===20);
    }
}

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
function checkHover (e,target) {
    if(getEvent(e).type=="mouseover"){
        return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
            !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
    }else{
        return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
            !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
}
//鼠标移入移出事件
/*
 obj   要操作的对象
 overfun   鼠标移入需要处理的函数
 outfun     鼠标移除需要处理的函数
 */
function hover (obj,overfun,outfun) {
    if(overfun){
        obj.onmouseover=function  (e) {
            if(checkHover(e,obj)){
                overfun.call(obj,[e]);
            }
        }
    }
    if(outfun){
        obj.onmouseout=function  (e) {
            if(checkHover(e,obj)){
                outfun.call(obj,[e]);
            }
        }
    }
}

function getEvent (e) {
    return e||window.event;
}

/*封装节点轮播图：
box:最外层框
obj:要轮播的对象
sBox:每次轮播的小对象
lBtn,rBtn:左右按钮 
num:一次轮播几张
*/
function nodeLunbo(box,obj,sBox,lBtn,rBtn,num){
    var  box=box;
    var  imgBox=obj;
    var  lbtn=lBtn;
    var  rbtn=rBtn;
    var  sbox=sBox;
    var  n=num;
    var  width=parseInt(getStyle(sbox[0],"width"))+parseInt(getStyle(sbox[0],"border-right"));
         // imgbox.style.width=width*sbox.length+"px"
    var  flag=true;
    var  tt=setInterval(moveL2,2000);
         function moveL2(){  
             animate(imgBox,{left:-width*n},700,function(){
                    for(var i=1;i<=n;i++){
                      var first=firstChild(imgBox);      
                      imgBox.appendChild(first);
                      imgBox.style.left=0;
                    }
                    flag=true;
                  })

     }
        function moveR2(){
          for(var i=1;i<=n;i++){
            var first=firstChild(imgBox);
            var last=lastChild(imgBox);
            insertBefore(last,first);  
             
          }
          imgBox.style.left=-width*n+"px";   
          animate(imgBox,{left:0},700,function(){flag=true});
    }
        box.onmouseover=function(){
          clearInterval(tt);
    }
        box.onmouseout=function(){
          tt=setInterval(moveL2,2000);
    }

        lbtn.onclick=function(){
          if(flag){
            flag=false;
            moveR2();

          }     
    }
        rbtn.onclick=function(){
          if(flag){
            flag=false;
            moveL2();
          } 
    }
}



/**/
function wufeng(obj,objimg,lis,bnL,bnR){
   var banner=obj;
   var imgs=objimg;
   var lis=lis;
   var bnL=bnL;
   var bnR=bnR;
   var n=0;
   var next=0;
   var width=parseInt(getStyle(banner,"width"));
   var flag=true;

 var t=setInterval(move,2000);
 function move(){
     next=n+1;
     if(next>=imgs.length){
         next=0;
     }
     imgs[next].style.left=width+"px";
     animate(imgs[n],{left:-width},600);
     animate(imgs[next],{left:0},600,function(){flag=true});
     n=next;
     for(var i=0;i<lis.length;i++){
        lis[i].style.background="#333";
     }
     lis[next].style.background="#c81623";

 }
  function move2(){
     next=n-1;
     if(next<0){
         next=imgs.length-1;
     }
     imgs[next].style.left=-width+"px";
     animate(imgs[n],{left:width},600);
     animate(imgs[next],{left:0},600,function(){flag=true});
     n=next;
     for(var i=0;i<lis.length;i++){
        lis[i].style.background="#333";
     }
     lis[next].style.background="#c81623";

 }
 banner.onmouseover=function(){
    clearInterval(t);
     // bnL.style.display="block";
     // bnR.style.display="block";
 }
 banner.onmouseout=function(){
    t=setInterval(move,2000);
     // bnL.style.display="none";
     // bnR.style.display="none";
 }
   // a左右按钮
  bnL.onclick=function(){
    // if(flag){
      move2();
      // flag=false;
    // }
   
  }
  bnR.onclick=function(){
    if(flag){
      move();
      flag=false;
    }
  }
  // 点击小点 如果this.index大于n,向左移动 小于，则向右移动
    for(var i=0;i<lis.length;i++){
        lis[i].index=i;
       lis[i].onmouseover=function(){
           
           if(this.index>n){
               if(!flag){
                 return;
               }
               flag=false;    
               imgs[this.index].style.left=width+"px";
               animate(imgs[n],{left:-width},600);
               animate(imgs[this.index],{left:0},600,function(){flag=true});
                
               for(var i=0;i<lis.length;i++){
                  lis[i].style.background="#333";
               }
               lis[this.index].style.background="#c81623";
               
           }
           else if(this.index<n){
                   if(!flag){
                    return;
                   }
                   flag=false;   
                   imgs[this.index].style.left=-width+"px";
                   animate(imgs[n],{left:width},600);
                   animate(imgs[this.index],{left:0},600,function(){flag=true});
                   
                   for(var i=0;i<lis.length;i++){
                      lis[i].style.background="#333";
                   }
                   lis[this.index].style.background="#c81623";
                   
           }
           n=this.index;
           
       }
    }
}
function wufeng2(obj,objimg,bnL,bnR){
    var banner=obj;
    var imgs=objimg;
    var bnL=bnL;
    var bnR=bnR;
    var n=0;
    var next=0;
    var width=parseInt(getStyle(banner,"width"));
    var flag=true;
    function move(){
        next=n+1;
        if(next>=imgs.length){
            next=0;
        }
        imgs[next].style.left=width+"px";
        animate(imgs[n],{left:-width},600);
        animate(imgs[next],{left:0},600,function(){flag=true});
        n=next;
    }
    function move2(){
        next=n-1;
        if(next<0){
            next=imgs.length-1;
        }
        imgs[next].style.left=-width+"px";
        animate(imgs[n],{left:width},600);
        animate(imgs[next],{left:0},600,function(){flag=true});
        n=next;


    }
    banner.onmouseover=function(){
        bnL.style.display="block";
        bnR.style.display="block";
    }
    banner.onmouseout=function(){
        bnL.style.display="none";
        bnR.style.display="none";
    }
    // a左右按钮
    bnL.onclick=function(){
        if(flag){
        move2();
        flag=false;
        }

    }
    bnR.onclick=function(){
        if(flag){
            move();
            flag=false;
        }
    }
}
/*
  选项卡，移入显示
  select2(lis,content) 
  lis:指要点击的标签
  content:显示内容

*/
function select2(lis,dhLis,content){
  var lis;
  var content;
  var dhLis;
  for(var i=0;i<lis.length;i++)
   {
      lis[i].index=i;
      hover(lis[i],function(){
          for(var j=0;j<lis.length;j++)
         {
            content[j].style.display="none";
             dhLis[j].style.display="none";

         }
         content[this.index].style.display="block";
         dhLis[this.index].style.display="block";

      },function(){
      })
    }
  }


/*
// 轮播 瞬间轮播图
banner:总的框框
bnimgs:要懂得所有目标
bnlis:所有小按钮
bnL:左按钮
bnR:右按钮
*/
function lunbo(banner,bnimgs,bnlis,bnL,bnR){
  var bnimgs=bnimgs;
  var bnlis=bnlis;
  var banner=banner
  var bnL=bnL;
  var bnR=bnR;
  var n=0;
  
  var tt=setInterval(move,2000);

  function move(){
     n++;
     // 判断，超过最大长度，返0重新开始
     if(n>=bnimgs.length){
      n=0;
     }
     for(var i=0;i<bnimgs.length;i++){

         animate(bnimgs[i],{opacity:0},600)
         bnlis[i].className="bnli";
         
         // bnlis[i].style.background="#3e3e3e";
     }
      animate(bnimgs[n],{opacity:1},600,function(){flag=true});
     bnlis[n].className="bnli bnli-mr";
     // bnlis[i].style.background="#b61d1d";
     
  }
  function move2(){
     n--;
     if(n<0){
      n=bnimgs.length-1;
     }
     for(var i=0;i<bnimgs.length;i++){
         animate(bnimgs[i],{opacity:0},600)
         bnlis[i].className="bnli";
         // bnlis[i].style.background="#3e3e3e";
     }
      animate(bnimgs[n],{opacity:1},600,function(){flag=true});
     bnlis[n].className="bnli bnli-mr";
     // bnlis[i].style.background="#b61d1d";

  }
  // 放上去停 离开动
    banner.onmouseover=function(){
        clearInterval(tt);
        bnL.style.display="block";
        bnR.style.display="block";
    }
    banner.onmouseout=function(){
      tt=setInterval(move,2000);
        bnL.style.display="none";
        bnR.style.display="none";
    }
  // 选项卡 点哪个显示哪个
   
  for(var i=0;i<bnlis.length;i++){
     bnlis[i].index=i
     bnlis[i].onclick=function(){
         for(var j=0;j<bnlis.length;j++){
            bnlis[j].className="bnli";
            // bnlis[i].style.background="#3e3e3e";
             animate(bnimgs[j],{opacity:0},600)
         }
         animate(bnimgs[this.index],{opacity:1},600,function(){flag=true});
         bnlis[this.index].className="bnli bnli-mr";
         // bnlis[i].style.background="#b61d1d";
         n=this.index;
     } 
  }
// 左右按钮
  bnR.onclick=function(){
     move();    
  }
  bnL.onclick=function(){  
      move2();
  }
}

 /*
 obj:总的框框
 objimg:obj内的轮播对象
 lis:小圆点
 bnL:左按钮
 bnR:右按钮
 */
//  function wufeng(obj,objimg,lis,bnL2,bnR2){
//    var obj=obj;
//    var imgs=objimg
//    var lis=lis
//    var bnL2=bnL2;
//    var bnR2=bnR2;
//    var n=0;
//    var next=0;
//    var width=parseInt(getStyle(obj,"width"));
//    var flag=true;

//  var t=setInterval(move,2000);
//  function move(){
//      next=n+1;
//      if(next>=imgs.length){
//          next=0;
//      }
//      imgs[next].style.left=width+"px";
//      animate(imgs[n],{left:-width},1);
//      animate(imgs[next],{left:0},1,function(){flag=true});
//      n=next;
//      for(var i=0;i<lis.length;i++){
//         lis[i].style.background="#3e3e3e"
//      }
//      lis[next].style.background="#b61d1d";

//  }
//   function move2(){
//      next=n-1;
//      if(next<0){
//          next=imgs.length-1;
//      }
//      imgs[next].style.left=-width+"px";
//      animate(imgs[n],{left:width},1);
//      animate(imgs[next],{left:0},1,function(){flag=true});
//      n=next;
//      for(var i=0;i<lis.length;i++){
//         lis[i].style.background="#3e3e3e"
//      }
//      lis[next].style.background="#b61d1d";

//  }
//  obj.onmouseover=function(){
//     clearInterval(t);
//  }
//  obj.onmouseout=function(){
//     t=setInterval(move,2000);
//  }
//    // a左右按钮
//   bnL2.onclick=function(){
//     if(flag){
//       move2();
//       flag=false;
//     }
     
     
   
//   }
//   bnR2.onclick=function(){
//     if(flag){
//       move();
//       flag=false;
//     }
//   }
//   // 点击小点 如果this.index大于n,向左移动 小于，则向右移动
//     for(var i=0;i<lis.length;i++){
//         lis[i].index=i;
//        lis[i].onmouseover=function(){
           
//            if(this.index>n){
//                if(!flag){
//                  return;
//                }
//                flag=false;    
//                imgs[this.index].style.left=width+"px";
//                animate(imgs[n],{left:-width},1);
//                animate(imgs[this.index],{left:0},1,function(){flag=true});
                
//                for(var i=0;i<lis.length;i++){
//                   lis[i].style.background="#3e3e3e"
//                }
//                lis[this.index].style.background="#b61d1d"; 
               
//            }
//            else if(this.index<n){
//                    if(!flag){
//                     return;
//                    }
//                    flag=false;   
//                    imgs[this.index].style.left=-width+"px";
//                    animate(imgs[n],{left:width},1);
//                    animate(imgs[this.index],{left:0},1,function(){flag=true});
                   
//                    for(var i=0;i<lis.length;i++){
//                       lis[i].style.background="#3e3e3e"
//                    }
//                    lis[this.index].style.background="#b61d1d";
                   
//            }
//            n=this.index;
           
//        }
//     }
// }