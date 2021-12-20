let data = document.getElementById("data");
let result = document.getElementById("result");
let op;
let keep = false;

function conca(n){
    if(data.innerText==0)
        data.innerText=n;
    else
        data.innerText+=n;
}

function ans(){
    let a = Number(result.innerText);
    let b = Number(data.innerText);
    console.log(op);
    if(op=="add"){
        result.innerText=a+b;        
    }
    else if(op=="sub"){
        result.innerText=a-b;
    }
    else if(op=="mul"){
        result.innerText=a*b;
    }
    else if(op=="div"){
        result.innerText=a/b;
    }
    else if(op=="mod"){
        result.innerText=a%b;
    }
    console.log(result.innerText);
    //data.innerText = 0;
}

function update(n){
    if(keep){
        ans();
        op = n;
    }
    else{
        result.innerText = data.innerText;
        data.innerText = 0;
        op = n;
        keep = true;
    }
}

function output(){
    ans();
    data.innerText = 0;
}

function sign(){
    data.innerText *= -1;
}

function cls(){
    result.innerText ="";
    data.innerText = 0;
    op = " ";
    keep = false;
}

for(let i = 0  ; i <=18 ; i++){
    let x;
    if(i<=9){
        x = "num" + i;
    }
    else if(i==10){
        x = "add";
    }
    else if(i==11){
        x = "sub";
    }
    else if(i==12){
        x = "mul";
    }
    else if(i==13){
        x = "div";
    }
    else if(i==14){
        x = "mod";
    }
    else if(i==15){
        x = "sign";
    }
    else if(i==16){
        x = "dot";
    }
    else if(i==17){
        x = "cls";
    }
    else if(i==18){
        x = "ans";
    }
    let y = document.getElementById(x);
    if(i<=9){
        y.addEventListener("click", function(){conca(i)});
    }
    else if(i <= 14){
        y.addEventListener("click", function(){update(x)});
    }
    else if(i == 15){
        y.addEventListener("click", function(){sign()});
    }
    else if(i == 17){
        y.addEventListener("click", function(){cls()});
    }
    else if(i == 18){
        y.addEventListener("click", function(){output()});
    }
}



