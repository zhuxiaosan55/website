// JavaScript Document
function prepareSlideshow(){
	//if(!document.getElementById) return false;
	//if(!document.getElementsByTagName) return false;
	//if(!document.getElementById("linklist")) return false;
	//var preview = document.getElementById("preview");
	//var picture = document.getElementsByClassName("pic");
	var picture = document.getElementsByTagName("img");
	/*var slideshow = document.createElement("div");
	slideshow.setAttribute("id", "slideshow");
    var  preview = document.createElement("img");
	picture.setAttribute("src","topics.gif");
	preview.setAttribute("alt","building blocks of web design");*/
	//slideshow.appendChild(preview);
	//insertAfter(slideshow,list);*/

	for( var i=0;i<picture.length;i++){
		var xpos = picture[i].style.left;//智能提取内嵌在html中的属性。
		var ypos = picture[i].style.top;
		(function(i){                    //想用for里的i要用到闭包
		picture[i].onmouseover = function(){
			picture[i].style.top = 0;
			//picture[i].setAttribute("id","preview");
			//moveElement("preview",xpos,0,30);
		};
		
		picture[i].onmouseout = function(){
			picture[i].style.top =ypos;
		}
		})(i);
		
	}
	
	/*picture[0].onmouseover = function(){
	      picture[0].style.left ="96px";
		  picture[0].style.top = "80px";
		//picture[0].setAttribute("id","preview");
		moveElement("pic0",96,0,30);
	
	picture[0].onmouseout = function(){
		picture[0].style.left ="96px";
		picture[0].style.top = "80px";
		
	}
	}
	picture[1].onmouseover = function(){
	     picture[1].style.left = "194px";
	     picture[1].style.top = "80px"
		//picture[0].setAttribute("id","preview");
		moveElement("pic1",194,0,30);
	
	picture[1].onmouseout = function(){
		 picture[1].style.left = "194px";
	     picture[1].style.top = "80px"
		
	 }
	}
        picture[2].onmouseover = function(){
	     picture[2].style.left = "261px";
	     picture[2].style.top = "80px"
		//picture[0].setAttribute("id","preview");
		moveElement("pic2",261,0,30);
	
	picture[2].onmouseout = function(){
		 picture[2].style.left = "261px";
	     picture[2].style.top = "80px"
		
	 }
	}
  
	/*picture[1].onmouseover = function(){
		moveElement("picture",0,50,30);
	}
	picture[2].onmouseover = function(){
		moveElement("picture",0,50,30);
	}*/
}
addLoadEvent(prepareSlideshow);

