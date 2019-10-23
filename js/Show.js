function LoadGround(){
    var g="";
    for(var j=0;j<10 ;j++){
        map[j]=[];
        for(var i=0;i<9 ;i++){
            map[j][i]=0;
            g+="<article class='CS' id='CS"+j+"-"+i+"' onclick='onChose("+j+","+i+")'></article>";
        }
    }
    $("#space").html(g);
    Log("完成创建场景");
}

//0空
//兵1 炮2 车3 马4 相5 士6 将7 红
//卒-1 炮-2 车-3 马-4 象-5 士-6 帅-7 黑

function getCText(j,i){
    var T=[];
    switch (map[j][i])
     {
     case (0):
        return null;
     break;
     case (1):
         T[0]="兵";
         T[1]="BR";
     break;
     case (2):
         T[0]="炮";
         T[1]="PR";
     break;
     case (3):
         T[0]="车";
         T[1]="JR";
     break;
     case (4):
         T[0]="马";
         T[1]="MR";
     break;
     case (5):
         T[0]="相";
         T[1]="XR";
     break;
     case (6):
         T[0]="士";
         T[1]="SR";
     break;
     case (7):
         T[0]="将";
         T[1]="J";
     break;
     case (-1):
         T[0]="卒";
         T[1]="BB";
     break;
     case (-2):
         T[0]="炮";
         T[1]="PB";
     break;
     case (-3):
         T[0]="车";
         T[1]="JB";
     break;
     case (-4):
         T[0]="马";
         T[1]="MB";
     break;
     case (-5):
         T[0]="象";
         T[1]="XB";
     break;
     case (-6):
         T[0]="士";
         T[1]="SB";
     break;
     case (-7):
         T[0]="帅";
         T[1]="S";
     break;
     default :
         return null;
     break;
     }
    return T;
}

function showC()
{
    for(var j=0;j<10 ;j++) {
        for (var i = 0; i < 9; i++) {
            var cla="";
            var tex="";
            var isNone=false;
            var T=getCText(j,i);
            if(T == null){
                isNone=true;
            }else{
                cla=T[1];
                tex=T[0];
            }
            if(isNone){
                continue;
            }
            $("#CS"+j+"-"+i).html(
                    "<section class='C "+cla+"'>"+tex+"</section>"
            )
        }
    }
    Log("完成显示场景");
}

//0清除 1绿色 2黄色 3红色
function showChose(j,i,t){
    var o=$("#CS"+j+"-"+i);
    if(t==0){
        o.css({
            "box-shadow": "",
            "border": ""
        });
        return;
    }
    var c="";
    switch (t){
        case 1:
            c="6bc274";
            break;
        case 2:
            c="eeb948";
            break;
        case 3:
            c="c53f46";
            break;
        default :
            break;
    }
   o.css({
        "box-shadow": "0 0 25pt #"+c,
        "border": "3px solid #"+c
    })
}

function cleanChose(){
    $(".CS").css({
        "box-shadow": "",
        "border": ""
    })
}
function move(y,x,j,i,eat){
    onMove=true;
    if(eat==null)
        if(map[j][i]!=0){
            LogError("错误的位置");
            return;
        }
    var cla="";
    var tex="";
    var T=getCText(y,x);
    if(T == null){
        LogError("丢失棋子信息");
        return;
    }else{
        cla=T[1];
        tex=T[0];
    }
    if(eat==null)
        Log(y+"-"+x+" "+tex+" 移动到"+j+"-"+i);
    else
        Log(y+"-"+x+" "+tex+" 吃"+j+"-"+i+" "+getCText(j,i)[0]);
    map[j][i]=map[y][x];
    map[y][x]=0;
    $("#CS"+j+"-"+i).html(
            "<section class='C "+cla+"' style='transform:translate("+(x-i)*45+"px,"+(y-j)*45+"px);'>"+tex+"</section>"
    )
    $("#CS"+y+"-"+x).html(
        ""
    )
    setTimeout(function(){
        $("#CS"+j+"-"+i+" section").css({
            transform:""
        })
    },10);
    setTimeout(function(){
        trunH();
        onMove=false;
    },700);
}

function eat(y,x,j,i){
    onMove=true;
    $("#CS"+j+"-"+i+" section").css({
        transform:"scale(0,0)"
    })
    setTimeout(function(){
        move(y,x,j,i,true);
    },700)
}