(function () {
	var  styleN = document.createElement("style");
	var width = document.documentElement.clientWidth/750;
	styleN.innerHTML = 'html{font-size:'+(100 * width)+'px!important}';
	document.head.appendChild(styleN);
})();
// 模块开发
function myModule(){

}
myModule.prototype.module = function(){

}
// 显示列表公共区域开始************************************
// 左右列表可点击简单模块
myModule.prototype.list = function(box,list){
	var that = this;
	var fla = false;
	for(var i in list){
		var text = '';
		text += '<div class="list"><div>';
		// 添加图片
		if(list[i].img){
			text += '<img src="'+list[i].img+'" class="listImg">'
		}
		// 是否有子标题
		if(list[i].subtitle){
			fla = true;
			text += '<p class="subtitle1"><span>'+list[i].name+'</span>';
			if(list[i].subRightText){
				text += '<span class="subRightText">'+list[i].subRightText+'</span>'
			}
			text += '</p><p class="subtitle2">'
			// if()
			var list1 = list[i].subtitle;
			for(var j in list1){
				text += '<span>'+list1[j]+'</span>';
			}
			text += '</p>';
		}else{
			// 添加文字
			text += '<span class="leftText">'+list[i].name+'</span>';
		}
		// 添加表格右边文字
		if(list[i].rightText){
			// 添加文字
			if(list[i].color){
				text += '<span class="rightText" style="color:'+list[i].color+'">'+list[i].rightText+'</span>';
			}else{
				text += '<span class="rightText">'+list[i].rightText+'</span>';
			}
			
		}
		// 添加icon
		if(list[i].icon){
			text += '<svg class="icon" aria-hidden="true">'+
			  			'<use xlink:href="#iconyou"></use>'+
					'</svg>'
		}

		text += '</div></div>';
		that.listClick(box,text,i,list[i].func);
	}
	if(fla){
		var listImg = box.getElementsByClassName('listImg');
		for(var j=0;j<listImg.length;j++){
			$api.addCls(listImg[j],'list_Img')
		}
		
	}
	// $api.append(box,text);
}
// 显示列表点击事件
myModule.prototype.listClick = function(box,html,index,func){
	$api.append(box,html);
	box.children[index].onclick = function(){
		var that = this;
		if(func){
			func(that)	
		}
	}
}
// 显示列表公共区域结束************************************
// inputGroup验证区域开始*********************************
myModule.prototype.inputGroup = function($box,list){
	var that = this;
	var html = '<div id="inputGroup"></div>';
	$api.append($box,html);
	that.inputBox = $api.byId('inputGroup')
	that.inputMain(list)
}
myModule.prototype.inputMain = function(list){
	var that = this;
	for(var i in list){
		var inputData = list[i].inputData;
		that.inputJudge(inputData,list[i].placeholder)
	}
}
myModule.prototype.inputJudge = function(data,placeholder){
	var that = this;
	var type = data.type
	switch(type) {
		     case 'text':
		        that.inputText(data,placeholder)
		        break;
		     case 'pwd':
		     	that.inputPwd(data,placeholder)
		        break;
	        case 'switch':
	     		that.inputSwitch(data,placeholder)
	        	break;
	        // case 'select':
	        // 	that.inputSelect(data,placeholder)
		     default:
		       that.inputTable(data,placeholder,type)
		}
}
myModule.prototype.inputText = function(data,placeholder){
	var that = this;
	var html = '<p><input type="text" placeholder="'+placeholder+'" name="'+data.name+'" id="'+data.name+'" value="'+data.items+'"></p>'
	$api.append(that.inputBox,html)
}
myModule.prototype.inputPwd = function(data,placeholder){
	var that = this;
	// 判断是否显示密码，true为显示，false为不显示，默认不显示
	var type = data.encryption?'text':'password';
	var uhref = data.encryption?'#iconyanjing1':'#iconyanjing';
	var html = '<p>'+
					'<input type="'+type+'" placeholder="'+placeholder+'" name="'+data.name+'" id="'+data.name+'" value="'+data.items+'">'+
					'<svg class="icon" aria-hidden="true" ><use xlink:href="#iconyanjing" class="'+data.name+'"></use></svg>'+
					'<svg class="icon" aria-hidden="true" ><use xlink:href="#iconyanjing1" class="'+data.name+'"></use></svg>'+
				'</p>'
	$api.append(that.inputBox,html);
	var yanjin = document.getElementsByClassName(data.name);
	if(data.encryption){
		$api.addCls(yanjin[0].parentNode,'none');
	}else{
		$api.addCls(yanjin[1].parentNode,'none');
	}
	yanjin[0].onclick = function(even){
		yanjinClick(0)	
	}
	yanjin[1].onclick = function(even){
		yanjinClick(1)	
	}
	function yanjinClick(num){
		var pwd = $api.byId(data.name);
		var ty = $api.attr(pwd,'type');
		if(ty == 'password'){
			pwd.setAttribute('type','text');
		}else{
			pwd.setAttribute('type','password');
		}
		$api.addCls(yanjin[num].parentNode,'none')
		var par = num == 0?yanjin[1].parentNode:yanjin[0].parentNode;
		$api.removeCls(par,'none');
	}
}
myModule.prototype.inputSwitch = function(data,placeholder){
	var that = this;
}
myModule.prototype.inputSelect = function(data,placeholder){
	var that = this;
	var box = that.tableBox;
	var html = '<tr><td>'+placeholder+'</td><td><select class="'+data.name+'"></select></td></tr>';
	$api.append(box,html);
	console.log()
	var sel = box.getElementsByClassName(data.name)[0]
	var list = data.items;
	var options = '';
	for(var i in list){
		options += '<option value="'+list[i].value+'">'+list[i].text+'</option>'
	}
	$api.append(sel,options)
}
myModule.prototype.inputTable = function(data,placeholder,type){
	var that = this;
	var box = that.inputBox;
	
	if(!box.children.length){
		$api.append(box,'<table class="table"><tbody></tbody></table>');
		that.tableBox = box.childNodes[0].childNodes[0];
	}
	
	switch(type) {
		case 'select':
			that.inputSelect(data,placeholder)
		break;
		case 'switch':
 			that.inputSwitch(data,placeholder)
    	break;
	}

}
//  inputGroup验证区域结束*********************************
//第3中列表样式  
 myModule.prototype.table = function(box,list){
 	var that = this;
 	$api.append(box,'<div id="Table" class="Table"></div>');
 	// console.log(box.getElementsByClassName('Table')[0])
 	that.tableBox = box.getElementsByClassName('Table')[0];
 	for(var i in list){
 		var type = list[i].type;
 		switch (type){
 			case 'text':
 				that.tableText(list[i])
 			break;
 			case 'switch':
 				that.tableSwitch(list[i])
 			break;
 		}
 	}
 }
myModule.prototype.tableText = function(data){
	var that = this;
	var box = that.tableBox;
	$api.append(box,'<div><span>'+data.name+'</span><input type="text" value="'+data.items+'" placeholder = "'+data.placeholder+'" class="'+data.cla+'"></div>')
}
myModule.prototype.tableSwitch = function(data){
	var that = this;
	var box = that.tableBox;
	var uswitch = data.switch?'color2':'color1';
	var cla = data.switch?'right':'left';
	$api.append(box,'<div><span>'+data.name+'</span><p class="switch '+data.cla+'" name="'+uswitch+'" value="'+data.switch+'"><span name="'+cla+'"></span></p></div>')
	var swc = $api.byClass('switch');
	swc.onclick = function(){
		var val = $api.attr(this,'value');
		if(val == 0){
			$api.attr(this,'name','color2');
			$api.attr(this.children[0],'name','right');
			$api.attr(this,'value',1);
			
		}else{
			$api.attr(this,'name','color1');
			$api.attr(this.children[0],'name','left');
			$api.attr(this,'value',0);
		}
	}
}
 myModule.prototype.btns = function(el,data){
 	$api.append(el,'<div class="buttons"></div>');
 	var buttons = $api.byClass('buttons');
 	var html = '';
 	for(var i in data){
 		html += '<button class="btn" id="btn'+i+'" tapmode="">'+data[i]+'</button>';
 	}
 	$api.append(buttons,html)
 }
// 底部导航公共区域
myModule.prototype.footer = function(box,winHeight,data,type){
	var that = this;
	var type = type;
	var img = {
		'network':type ==1?'../image/product/10.png':'../image/product/10.png',
		'product':type ==2?'../image/product/1.png':'../image/product/1.png',
		'service':type ==3?'../image/product/3.png':'../image/product/3.png',
		'my':type == 4?'../image/product/11.png':'../image/product/11.png'
	}
	var obj = [
		{
			'name':'网络',
			'img':img.network,
			'class':type==1?'col':'col1',
			func:function(){
				api.openWin({
		            name: 'network',
		            url: './network.html',
		            pageParam: {
		                name: 'network'
		            }
		        });
			}
		},
		{
			'name':'产品',
			'img':img.product,
			'class':type==2?'col':'col1',
			func:function(){
				api.openWin({
		            name: 'product',
		            url: './product.html',
		            pageParam: {
		                name: 'product'
		            }
		        });
			}
		},
		{
			'name':'服务',
			'img':img.service,
			'class':type==3?'col':'col1',
			func:function(){
				api.openWin({
		            name: 'service',
		            url: './service.html',
		            pageParam: {
		                name: 'service'
		            }
		        });
			}
		},
		{
			'name':'我的',
			'img':img.my,
			'class':type==4?'col':'col1',
			func:function(){
				api.openWin({
		            name: 'my',
		            url: './my.html',
		            pageParam: {
		                name: 'my'
		            }
		        });
			}
		},
	];
	var list = data?data:obj;
	var html = '';
	html += '<div id="footer" style="top:'+(winHeight-50)+'px"><ul>';
	var wid = Number(100/(list.length))
	for(var i in list){
		html += '<li style="width:'+wid+'%"><p><img src="'+list[i].img+'"></p><p class="'+list[i].class+'">'+list[i].name+'</p></li>';
	}
	html += '</ul></div>';
	$api.append(box,html);
	var foot = $api.byId('footer');
	that.footerClick(foot,list)
	
}
myModule.prototype.footerClick = function(box,list){
	var box = box;
	for(var i in list){
		var func = list[i].func;
		footClick(i,func)
	}
	function footClick(index,func){
		box.children[0].children[index].onclick = function(){
			if(func){
				func()
			}
		}
	}
}
// 提示框样式
myModule.prototype.dialogBox = function(){
	var sty = {
		    bg: '#fff',            //（可选项）字符串类型；对话框整体背景配置，支持#、rgb、rgba、img；默认：#fff
		    maskBg:'rgba(100, 100, 100, 0.5)', //（可选项）字符串类型，不传使用系统默认颜色
		    corner: 2,             //（可选项）数字类型；对话框背景圆角大小；默认：2
		    w: 300,                //（可选项）数字类型；对话框的宽；默认：300
		    title:{                //（可选项）JSON对象；弹窗标题栏样式配置，不传则不显示标题区域
		        marginT: 20,       //（可选项）数字类型；标题栏与对话框顶端间距；默认：20
		        icon: '',          //（可选项）字符串类型；标题前面的图标路径，要求本地路径（widget://、fs://）；图片为正方形的，如：50*50、100*100，建议开发者传大小合适的图片以适配高分辨率手机屏幕，不传则不显示
		        iconSize: 40,      //（可选项）数字类型；icon 图标边长大小,若 icon 不存在则此参数无效；默认：24
		        titleSize: 14,     //（可选项）数字类型；标题字体大小；默认：14
		        titleColor: '#000' //（可选项）字符串类型；标题字体颜色，支持#、rgb、rgba；默认：#fff
		    },
		    content:{              //（可选项）JSON 对象；文本内容配置，若不传则不显示该区域
		        marginT: 20,       //（可选项）数字类型；内容文本顶端与标题栏底端的距离，如果标题栏不存在，则是到窗口顶端的距离；默认：20
		        marginB: 20,       //（可选项）数字类型；内容文本底端与 left/right 顶端的距离，如果 left/right 都不存在，则是到对话框底端的距离；默认：20
		        color: '#000',     //（可选项）字符串类型；内容文本字体颜色，支持 rgb、rgba、#；默认：#eee
		        size: 12           //（可选项）数字类型：内容文本字体大小；默认：12
		    },
		    left:{                 //（可选项）JSON 对象；左边按钮样式配置，不传则不显示左边按钮
		        marginB: 7,        //（可选项）数字类型；左边按钮的下边距；默认：7
		        marginL: 20,       //（可选项）数字类型；左边按钮的左边距；默认：20
		        w: 140,            //（可选项）数字类型；左边按钮的宽；默认：130
		        h: 35,             //（可选项）数字类型；左边按钮的高；默认：35
		        corner: 2,         //（可选项）数字类型；左边按钮圆角半径；默认：0.0
		        bg: '#fff',        //（可选项）字符串类型；左边按钮的背景，支持rgb、rgba、#、img；默认：'#e0e'
		        color: '#0781fe',  //（可选项）字符串类型；左边按钮标题字体颜色，支持rgb，rgba、#；默认：'#007FFF'
		        size: 12           //（可选项）数字类型；左边按钮标题字体大小；默认：12
		    },
		    right: {               //（可选项）JSON 对象；右边按钮样式配置，不传则不显示右边按钮
		        marginB: 7,        //（可选项）数字类型；右边按钮的下边距；默认：7
		        marginL: 10,      //（可选项）数字类型；右边按钮左边距；默认：10
		        w: 140,            //（可选项）数字类型；右边按钮的宽；默认：130
		        h: 35,             //（可选项）数字类型；右边按钮的高；默认：35
		        corner: 2,         //（可选项）数字类型；右边按钮圆角半径；默认：0.0
		        bg: '#fff',        //（可选项）字符串类型；右边按钮的背景，支持rgb、rgba、#、img；默认：'#e0e'
		        color: '#0781fe',  //（可选项）字符串类型；右边按钮标题字体颜色，支持rgb、rgba、#；默认：'#007FFF'
		        size: 12           //（可选项）数字类型；右边按钮标题字体大小；默认：12
		    },
		    horizontalLine:{
		    color:'rgba(245,245,245,0)', //（可选项）字符串类型；左右按钮上边横线的颜色，支持rgb、rgba、#；默认：'rgba(245,245,245,0)'
		    height:1                //（可选项）数字类型；左右边按钮横线的高度；默认：0   
		    },
		    verticalLine:{
		        color:'rgba(245,245,245,0)', //（可选项）字符串类型；左右按钮中间竖线的颜色，支持rgb、rgba、#；默认：'rgba(245,245,245,0)'
		      width:1                 //（可选项）数字类型；左右边按钮竖线的高度；默认：0  
		    }
		}
		return sty;
}
var module = new myModule();