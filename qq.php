function QQ(){
var Div=document.createElement('div');
Div.id='qq_online';
Div.style.position='absolute';
Div.style.top='200px';
var Html='';
Div.style.right='0px';
Div.className='qq_onlines_7';
Html+='<div id="qq_onlines_top">在 线 咨 询<p class="qq_onlines_small_right" onclick="QQ_Close();"><strong>在线咨询</strong></p></div>';
Html+='<div id="qq_onlines_box">';
Html+='<p id="qq_onlines_tel">服务热线<strong>400-000-0000</strong></p>';
Html+='<p id="qq_onlines_list">';
Html+='<a href="http://wpa.qq.com/msgrd?v=3&uin=6009709&site=客服名称1&menu=yes" target="_blank"><img src="images/qq.png">客服名称1</a>';
Html+='<a href="http://wpa.qq.com/msgrd?v=3&uin=6009709&site=客服名称2&menu=yes" target="_blank"><img src="images/qq.png">客服名称2</a>';
Html+='</p>';
Html+='<p id="qq_onlines_tdc"><img src="images/20150529_194542.jpg" /></p>';
Html+='</div>';
Div.innerHTML=Html;
document.body.appendChild(Div);
FloatDiv('qq_online',200);
}
if (document.all){
window.attachEvent('onload',QQ)
}else{
window.addEventListener('load',QQ,false);
}function QQ_Close(){
if($('#qq_online').css('right')=='-130px'){
$('#qq_online').animate({right:'0px'},300);
}
else {
$('#qq_online').animate({right:'-130px'},300);
}
}

