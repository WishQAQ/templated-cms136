function $2(ObjID){
	return document.getElementById(ObjID);
}

function Ajax(TagID,UrlStr){ 
	var xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null){
  		alert ("您的浏览器不支持AJAX!");
		return false;
	}
	var Url="ajax.php"+UrlStr+"&sid="+Math.random();
	xmlHttp.onreadystatechange=function(){
		if (xmlHttp.readyState==4){ 
			if (xmlHttp.status==200){
				if (TagID!="") $2(TagID).innerHTML=xmlHttp.responseText;
			}
		}
	}
	xmlHttp.open("GET",Url,true);
	xmlHttp.send(null);
}

function GetXmlHttpObject(){
	var XmlHttp=null;
	try{
		XmlHttp=new XMLHttpRequest(); // Firefox, Opera 8.0+, Safari
	}
	catch (e){
 	 	// Internet Explorer
  		try{
			XmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
  		catch (e){
			XmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
 	}
	return XmlHttp;
}

function DisDiv(ObjID,Val){
	if (Val==0){
		$2(ObjID).style.display="none";
	}
	else{
		$2(ObjID).style.display="block";
	}
}

function DisDivs(ObjID){
	if ($2(ObjID).style.display=="none"){
		$2(ObjID).style.display="block";
	}
	else{
		$2(ObjID).style.display="none";
	}
}

function MarqueeImage(ObjDiv,Obj1,Obj2,Direction,Speed){
    var demo1 = $2(Obj1);
    var demo2 = $2(Obj2);
    var mydiv = $2(ObjDiv);
	var Tid;
	switch(Direction){
	case "left":
		if (demo1.offsetWidth<=mydiv.offsetWidth) return;
		break;
	case "right":
		if (demo1.offsetWidth<=mydiv.offsetWidth) return;
		break;
	case "top":
		if (demo1.offsetHeight<=mydiv.offsetHeight) return;
		break;
	case "bottom":
		if (demo1.offsetHeight<=mydiv.offsetHeight) return;
		break;
	}
    demo2.innerHTML=demo1.innerHTML;
    Tid=setInterval(Marquee,Speed)
    mydiv.onmouseover=function(){clearInterval(Tid)}
    mydiv.onmouseout=function(){Tid=setInterval(Marquee,Speed)}
    
    function Marquee(){
		switch(Direction){
		case "left":
            if(mydiv.scrollLeft>=demo1.offsetWidth)
                mydiv.scrollLeft=0;
            else
                mydiv.scrollLeft++;
			break;
		case "right":
            if(mydiv.scrollLeft==0)
                mydiv.scrollLeft=demo1.offsetWidth;
            else
                mydiv.scrollLeft--;
			break;
		case "top":
			if(mydiv.scrollTop>=demo1.offsetHeight)
                mydiv.scrollTop=0;
            else
                mydiv.scrollTop++;
			break;
		case "bottom":
			if(mydiv.scrollTop==0)
                mydiv.scrollTop=demo1.offsetHeight;
            else
                mydiv.scrollTop--;
			break;
		}
    }
}

function AddFavorite(sURL,sTitle){
	sURL=encodeURI(sURL); 
	try{
		window.external.addFavorite(sURL,sTitle);
	}
	catch(e){
		try{
			window.sidebar.addPanel(sTitle,sURL,"");
		}
		catch(e){
			alert("加入收藏失败，请使用Ctrl+D进行添加，或手动在浏览器里进行设置！");
		}
	}
}

function SetHome(Url){
	if (document.all){
		document.body.style.behavior='url(#default#homepage)';
		document.body.setHomePage(Url);
	}
	else{
		alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页！");
	}
}

function CheckSearch(Language){
	var SearchKey=$2("search_key");
	if (SearchKey.value=="" || SearchKey.value=="请输入搜索关键词" || SearchKey.value=="Please enter keywords"){
		if (Language=="cn"){
			alert("请输入搜索关键词！");
		}
		else{
			alert("Please enter keywords!");
		}
		SearchKey.focus();
		return;
	}
	location.href="products.php?search_key="+encodeURI(SearchKey.value);
}

function CheckSearch2(Evt,Language){
	Evt=Evt?Evt:(window.event?window.event:"");
	var Key=Evt.keyCode?Evt.keyCode:Evt.which;
	if (Key==13){
		var SearchKey=$2("search_key");
		if (SearchKey.value=="" || SearchKey.value=="请输入搜索关键词" || SearchKey.value=="Please enter keywords"){
			if (Language=="cn"){
				alert("请输入搜索关键词！");
			}
			else{
				alert("Please enter keywords!");
			}
			SearchKey.focus();
			return;
		}
		location.href="products.php?search_key="+encodeURI(SearchKey.value);
	}
}

function FloatDiv(ObjID,Ch){
	var Did=$2(ObjID);
	var DidTop=parseInt(Did.style.top);
	var Diff=(document.documentElement.scrollTop+document.body.scrollTop+Ch-DidTop)*.80;
	Did.style.top=Ch+document.documentElement.scrollTop+document.body.scrollTop-Diff+"px";
	setTimeout("FloatDiv('"+ObjID+"',"+Ch+")",20);
}
function FloatDiv2(ObjID,Ch){
	var Did=$2(ObjID);
	var DidTop=parseInt(Did.style.top);
	var Diff=(document.documentElement.clientHeight-53-Ch+document.documentElement.scrollTop+document.body.scrollTop-DidTop)*.80;
	Did.style.top=document.documentElement.clientHeight-53-Ch+document.documentElement.scrollTop+document.body.scrollTop-Diff+"px";
	setTimeout("FloatDiv2('"+ObjID+"',"+Ch+")",20);
}

function iNews(Val){
	var Node=$2("inews_menu");
	var TagCount=Node.getElementsByTagName("li").length;
	for (var i=0;i<TagCount;i++){
		Node.getElementsByTagName("li")[i].className="inews_menu_out";
		$2("inews_"+i).style.display="none";
	}
	Node.getElementsByTagName("li")[Val].className="inews_menu_over";
	$2("inews_"+Val).style.display="block";
}

function CheckFeedback(ObjForm,Language){
	var Str1,Str2,Str3,Str4,Str5,Str6,Str7;
	if (Language=="cn"){
		Str1="请输入您的姓名！";
		Str2="请输入联系电话！";
		Str3="请输入电子邮箱！";
		Str4="请输入留言主题！";
		Str5="请输入留言内容！";
		Str6="请输入验证码！";
		Str7="非法的验证码！";
	}
	else{
		Str1="Please enter the name!";
		Str2="Please enter the tel!";
		Str3="Please enter the E-mail!";
		Str4="Please enter the subject!";
		Str5="Please enter the message!";
		Str6="Please enter the verification code!";
		Str7="Invalid verification code!";
	}
	if (ObjForm.f_name.value==""){
		alert(Str1);
		ObjForm.f_name.focus();
		return false;
	}
	if (ObjForm.f_tel.value==""){
		alert(Str2);
		ObjForm.f_tel.focus();
		return false;
	}
	if (ObjForm.f_email.value==""){
		alert(Str3);
		ObjForm.f_email.focus();
		return false;
	}
	if (ObjForm.f_title.value==""){
		alert(Str4);
		ObjForm.f_title.focus();
		return false;
	}
	if (ObjForm.f_content.value==""){
		alert(Str5);
		ObjForm.f_content.focus();
		return false;
	}
	if (ObjForm.f_code.value==""){
		alert(Str6);
		ObjForm.f_code.focus();
		return false;
	}
	Reg=/^\w{4}$/;
	if (!Reg.test(ObjForm.f_code.value)){
		alert(Str7);
		return false;
	}
	ObjForm.submit();
}