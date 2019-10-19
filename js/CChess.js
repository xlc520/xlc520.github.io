$().ready(function(){
    LoadGround();
    putDef();
    showC();
    runNow=true;
});

function Log(info){
    if(DeBug){
        console.log("DEBUG:"+info);
    }
}
function LogError(info){
    if(DeBug){
        console.log("ERROR:"+info);
    }
}

//0空
//兵1 炮2 车3 马4 相5 士6 将7 红
//卒-1 炮-2 车-3 马-4 象-5 士-6 帅-7 黑
var map=[];
var runNow=false;
var DeBug=true;

function putDef(){
    map[0][0]=-3; map[9][0]=3;
    map[0][1]=-4; map[9][1]=4;
    map[0][2]=-5; map[9][2]=5;
    map[0][3]=-6; map[9][3]=6;
    map[0][4]=-7; map[9][4]=7;
    map[0][5]=-6; map[9][5]=6;
    map[0][6]=-5; map[9][6]=5;
    map[0][7]=-4; map[9][7]=4;
    map[0][8]=-3; map[9][8]=3;

    map[2][1]=-2; map[7][1]=2;
    map[2][7]=-2; map[7][7]=2;
    map[3][0]=-1; map[6][0]=1;
    map[3][2]=-1; map[6][2]=1;
    map[3][4]=-1; map[6][4]=1;
    map[3][6]=-1; map[6][6]=1;
    map[3][8]=-1; map[6][8]=1;
    Log("完成放置默认棋子");
}

function WhatSpace(y,x){
    return map[y][x];
}

function CanEat(y,x,c){
    var cc=0;
    if(c==0){
        cc=1;
    }else{
        cc=-1;
    }
    return map[y][x]*cc<0;
}

//0空
//兵1 炮2 车3 马4 相5 士6 将7 红
//卒-1 炮-2 车-3 马-4 象-5 士-6 帅-7 黑
function WhereCan(y,x,t){//0可以走 1可以吃
    var c=0;
    if(t<=0){
        c=1;
        t*=-1;
    }
    var tmap=[];
    switch (t){
        case 1:
            binMove(tmap,c,y,x);
            break;
        case 2:
            paoMove(tmap,c,y,x);
            break;
        case 3:
            juMove(tmap,c,y,x);
            break;
        case 4:
            maMove(tmap,c,y,x);
            break;
        case 5:
            xiangMove(tmap,c,y,x);
            break;
        case 6:
            shiMove(tmap,c,y,x);
            break;
        case 7:
            JSMove(tmap,c,y,x);
            break;
        default :
            break;
    }
    for(var l=0;l<tmap.length;l++){
        if(CanEat(tmap[l][0],tmap[l][1],c)){
            tmap[l][2]=1;
        }else{
            tmap[l][2]=0;
        }
    }
    return tmap;
}
