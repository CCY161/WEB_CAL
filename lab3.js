let data = document.getElementById("data");
let result = document.getElementById("result");
let cur_data;
let op;
let keep = false;

function conca(n){
    if(data.innerText==0 || keep){
        data.innerText=n;
        keep =false;
    }
    else{
        data.innerText+=n;
    }
}

function ans(){
    let a = Number(cur_data);
    let b = Number(data.innerText);
    // let func;

    // if(op=="add" || op=="sub"){
    //     func="http://192.168.1.164:3000/" + op + "?&a="+a+"&b="+b;
    //     fetch(func)
    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function(myJson) {
    //         data.innerText = myJson.result;
    //         console.log(data.innerText);
    //     });
    // }

    // else if(op=="mul"){
    //     func = "http://192.168.1.164:3000/multiply";
    //     fetch(func, {
    //         body: JSON.stringify({a:a, b:b}),
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         method: 'POST',
    //     })
    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function(myJson) {
    //         data.innerText = myJson.result;
    //         console.log(data.innerText);
    //     });
    // }
    if(op=="add"){
        data.innerText =a+b;
    }
    else if(op=="sub"){
        data.innerText =a-b;
    }
    else if(op=="mul"){
        data.innerText =a*b;
    }
    else if(op=="div"){
        data.innerText=a/b;
    }
    else if(op=="mod"){
        data.innerText=a%b;
    }
    console.log(op);
    console.log(data.innerText);
    cur_data = data.innerText;
    keep = true;
    //data.innerText = 0;
}

function update(n){
    op = n;
    cur_data = data.innerText;
    //data.innerText = 0;
    keep = true;
}

function output(){
    ans();
    //data.innerText = 0;
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



