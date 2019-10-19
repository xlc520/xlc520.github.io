function binMove(tmap,c,y,x){//0红 1黑
    var w;
    var h=0;
    if(c==0){
        w=y<5;
        h=-1;
    }else{
        w=y>4;
        h=1;
    }
    if(w){
        if(y+h>=0&&y+h<map.length){
            var t1=[];
            t1[0]=y+h;
            t1[1]=x;
            tmap.push(t1);
        }
        var t2=[];var t3=[];
        t2[0]=y;t3[0]=y;
        t2[1]=x-1;t3[1]=x+1;
        tmap.push(t2);tmap.push(t3);
    }else{
        var t=[];
        t[0]=y+h;
        t[1]=x;
        tmap.push(t);
    }
}
function paoMove(tmap,c,y,x){
    paoMove_(tmap,0,c,y,x);
    paoMove_(tmap,1,c,y,x);
    paoMove_(tmap,2,c,y,x);
    paoMove_(tmap,3,c,y,x);
}
function paoMove_(tmap,d,c,y,x){//0上1左2下3右
    var q= y,w= x,qi= 0,wi= 0,ci=0;//ci:0红 1黑
    if(c==0){
        ci=1;
    }else{
        ci=-1;
    }
    var cc;
    switch (d){
        case 0:
            cc=function(q){return q>=0;}
            qi=-1;
            break;
        case 1:
            cc=function(q,w){return w>=0;}
            wi=-1;
            break;
        case 2:
            cc=function(q){return q<map.length;}
            qi=1;
            break;
        case 3:
            cc=function(q,w){return w<map.length;}
            wi=1;
            break;
    }
    var ce=false;
    while(true){
        if(!cc(q,w))break;
        if(q==y&&w==x){
            q+=qi;w+=wi;
            continue;
        }
        if(map[q][w]==0){
            if(!ce){
                var t=[];
                t[0]=q;
                t[1]=w;
                tmap.push(t);
            }
        }else{
            if(ce){
                if(map[q][w]*ci<0){
                    var t=[];
                    t[0]=q;
                    t[1]=w;
                    tmap.push(t);
                    ce=false;
                    break;
                }
            }
            ce=true;
        }
        q+=qi;w+=wi;
    }
}
function juMove(tmap,c,y,x){
    for(var q=y;q>=0;q--){
        if(q==y)continue;
        if(!fastMove(tmap,c,q,x))break;
    }
    for(var q=x;q>=0;q--){
        if(q==x)continue;
        if(!fastMove(tmap,c,y,q))break;
    }
    for(var q=y;q<map.length;q++){
        if(q==y)continue;
        if(!fastMove(tmap,c,q,x))break;
    }
    for(var q=x;q<map.length;q++){
        if(q==x)continue;
        if(!fastMove(tmap,c,y,q))break;
    }
}
function fastMove(tmap,c,y,x){//c:0红 1黑
    var ci=0;
    if(c==0){
        ci=1;
    }else{
        ci=-1;
    }
    if(map[y][x]==0){
        var t=[];
        t[0]=y;
        t[1]=x;
        tmap.push(t);
        return true;
    }else{
        if(map[y][x]*ci<0){
            var t=[];
            t[0]=y;
            t[1]=x;
            tmap.push(t);
        }
        return false;
    }
}
function maMove(tmap,c,y,x){
    function fastMa(tmap,y,x,ys,xs,c){
        if(y+ys<map.length&&y+ys>=0&&x+xs<map.length&&x+xs>=0)
        if(map[y+ys][x+xs]==0){
            var yz= 0,xz=0;
            if(ys==0){
                yz=-1;
            }else{
                xz=-1;
            }
            if(y+ys+ys-yz<map.length&&y+ys+ys-yz>=0&&x+xs+xs-xz<map.length&&x+xs+xs-xz>=0)
            if(map[y+ys+ys-yz][x+xs+xs-xz]*c<=0){
                var t=[];
                t[0]=y+ys+ys-yz;
                t[1]=x+xs+xs-xz;
                tmap.push(t);
            }
            if(y+ys+ys+yz<map.length&&y+ys+ys+yz>=0&&x+xs+xs+xz<map.length&&x+xs+xs+xz>=0)
            if(map[y+ys+ys+yz][x+xs+xs+xz]*c<=0){
                var t1=[];
                t1[0]=y+ys+ys+yz;
                t1[1]=x+xs+xs+xz;
                tmap.push(t1);
            }
        }
    }
    var cc=0;
    if(c==0){
        cc=1;
    }else{
        cc=-1;
    }
    fastMa(tmap,y,x,-1,0,cc);
    fastMa(tmap,y,x,1,0,cc);
    fastMa(tmap,y,x,0,-1,cc);
    fastMa(tmap,y,x,0,1,cc);
}
function xiangMove(tmap,c,y,x){//c:0红 1黑
    function fastXiang(tmap,y,x,yy,xx,c,cy){
        if(y+yy*2<map.length&&y+yy*2>=0&&x+xx*2<map.length&&x+xx*2>=0){
            if(cy(y+yy*2))
            if(map[y+yy][x+xx]==0){
                if(map[y+yy*2][x+xx*2]*c<=0){
                    var t=[];
                    t[0]=y+yy*2;
                    t[1]=x+xx*2;
                    tmap.push(t);
                }
            }
        }
    }
    var cc=0;
    if(c==0){
        cc=1;
    }else{
        cc=-1;
    }
    var ch;
    if(c==0){
        ch=function(y){return y>4};
    }else{
        ch=function(y){return y<5};
    }
    fastXiang(tmap,y,x,1,1,cc,ch);
    fastXiang(tmap,y,x,1,-1,cc,ch);
    fastXiang(tmap,y,x,-1,1,cc,ch);
    fastXiang(tmap,y,x,-1,-1,cc,ch);
}
function shiMove(tmap,c,y,x){//c:0红 1黑
    function fastShi(tmap,y,x,yy,xx,c,cc){
        if(cc(y+yy)){
            if(x+xx>=3&&x+xx<=5){
                if(map[y+yy][x+xx]*c<=0){
                    var t=[];
                    t[0]=y+yy;
                    t[1]=x+xx;
                    tmap.push(t);
                }
            }
        }
    }
    var cf;
    var cc=0;
    if(c==0){
        cc=1;
        cf=function(y){return y>=7&&y<=9}
    }else{
        cf=function(y){return y>=0&&y<=2}
        cc=-1;
    }
    fastShi(tmap,y,x,1,1,cc,cf);
    fastShi(tmap,y,x,-1,1,cc,cf);
    fastShi(tmap,y,x,1,-1,cc,cf);
    fastShi(tmap,y,x,-1,-1,cc,cf);
}
function JSMove(tmap,c,y,x){
    function fastJS(tmap,y,x,yy,xx,c,cc){
        if(cc(y+yy)){
            if(x+xx>=3&&x+xx<=5){
                if(map[y+yy][x+xx]*c<=0){
                    var t=[];
                    t[0]=y+yy;
                    t[1]=x+xx;
                    tmap.push(t);
                }
            }
        }
    }
    var cf;
    var cc=0;
    if(c==0){
        cc=1;
        cf=function(y){return y>=7&&y<=9}
    }else{
        cf=function(y){return y>=0&&y<=2}
        cc=-1;
    }
    fastJS(tmap,y,x,1,0,cc,cf);
    fastJS(tmap,y,x,-1,0,cc,cf);
    fastJS(tmap,y,x,0,-1,cc,cf);
    fastJS(tmap,y,x,0,1,cc,cf);
    if(c==0){
        for(var q=y-1;q<map.length&&q>=0;q--){
            if(map[q][x]==0){
                continue;
            }
            if(map[q][x]==-7){
                var t=[];
                t[0]=q;
                t[1]=x;
                tmap.push(t);
            }else break;
        }
    }else{
        for(var q=y+1;q<map.length&&q>=0;q++){
            if(map[q][x]==0){
                continue;
            }
            if(map[q][x]==7){
                var t=[];
                t[0]=q;
                t[1]=x;
                tmap.push(t);
            }else break;
        }
    }
}