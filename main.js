//
function closeClick(oRT,oLi,oRB,oRBdiv,arr,oLi,aRTli,bOk2,aRBdiv,aLi){
	oRT.removeChild(oLi);
	oRB.removeChild(oRBdiv);
	arr.splice((oLi.n-1),1);
	for(var i=0;i<arr.length;i++){
		arr[i].a=(i+1);
		aRTli[i].n=arr[i].a;
	}
								
	//----------------------------------------开关
	for(var i=0;i<aRTli.length;i++){
		if(aRTli[i].className=='active'){
			bOk2=true;
		}
	}
	if(!bOk2){
		for(var i=0;i<aRBdiv.length;i++){
			aRBdiv[i].style.display='none';
			aRTli[i].className='';
		}
		for(var i=0;i<aLi.length;i++){
			aLi[i].className='';
		}
		aRTli[arr[arr.length-1].a-1].className='active';
		aRBdiv[arr[arr.length-1].a-1].style.display='block';
		aLi[arr[arr.length-1].b].className='on';
	}
}
//tab
function tab(aRTli,aRBdiv,aLi,arr){
	for(var i=0;i<aRTli.length;i++){
		(function(index){
			aRTli[index].onclick=function(){
				for(var i=0;i<aLi.length;i++){
					aLi[i].className='';
				}
				for(var i=0;i<aRTli.length;i++){
					aRTli[i].className='';
					aRBdiv[i].style.display='none';
				};
				this.className='active';
				aRBdiv[index].style.display='block';
				aLi[arr[index].b].className='on';
			};
		})(i);	
	}
}

//清空aRBdiv的display
function clsAliClassName(aRBdiv){
	for(var i=0;i<aRBdiv.length;i++){
		aRBdiv[i].style.display='none';
	}	
}
//aRTli的className和aRBdiv的display清空
function clsAllAr(aRTli,aRBdiv){
	for(var i=0;i<aRTli.length;i++){
		aRTli[i].className='';
		aRBdiv[i].style.display='none';	
	}
}






































