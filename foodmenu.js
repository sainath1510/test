var price=0;
var puri_qty=0;
var idli_qty=0;
var puricost=0;
var idlicost=0;
function decrement(id1,costid,item){
    var qty=parseInt(document.getElementById(id1).innerHTML);
    if(qty>0){
    qty-=1;
    document.getElementById(id1).innerHTML=qty;
    
    var cost=parseInt(document.getElementById(costid).innerHTML);
	if(item=='puri'){
		puri_qty=puri_qty-1;
		puricost=puri_qty*(cost);
	
	}
	if(item=='idli'){
		idli_qty=idli_qty-1;
		price=price-(cost);
	}
}
}

function increment(id1,costid,item){
    var qty=parseInt(document.getElementById(id1).innerHTML);
    qty+=1;
    document.getElementById(id1).innerHTML=qty;

	var cost=parseInt(document.getElementById(costid).innerHTML);
	//if(item=='puri'){
	//	puri_qty=puri_qty+1;
	//	puricost=puri_qty*(cost);
		

	//}
	//if(item=='idli'){
	//	idli_qty=idli_qty+1;
	//	idlicost=idli_qty*(cost);
		
	//}
	switch(item){
		case 'idli':idli_qty=idli_qty+1;
					idlicost=idli_qty*(cost);
					break;
		case 'puri':puri_qty=puri_qty+1;
					puricost=puri_qty*cost;
					break;
				}
	

	}
price=price+puricost;
price=price+idlicost;
function cost(){
	if(puri_qty>0){
	document.write(puri_qty);
	document.write("puricost:"+puricost);
	}
	document.write("total cost"+(puricost+idlicost));

	
}
//var idli_qty=0;
//var puri_qty=0;
/*var price=0;
function calculate(id1,costid,item){
	
	var cost=parseInt(document.getElementById(costid).innerHTML);
	if(item=='puri'){
		puri_qty=puri_qty+qty;
		price=price+(puri_qty*cost);
	}
	if(item=='idli'){
		idli_qty=idli_qty+qty;
		price=price+(idli_qty*cost);
	}

	}
function cost(){
	document.write(price);
}*/
