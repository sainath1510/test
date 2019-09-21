var costs=new Array();
costs['idli']=0;
costs['wada']=0;
costs['puri']=0;
costs['dosa']=0;
costs['bonda']=0;
var quants = new Array();
quants['idli']=0;
quants['wada']=0;
quants['puri']=0;
quants['dosa']=0;
quants['bonda']=0;
function increment(id1,costid,item){
    var qty=parseInt(document.getElementById(id1).innerHTML);
    quants[item]=quants[item]+1;
    document.getElementById(id1).innerHTML=quants[item];

    var cost=parseInt(document.getElementById(costid).innerHTML);
    costs[item]=costs[item]+cost;
}
 function cost(){

 }
 