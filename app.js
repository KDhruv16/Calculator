const disp = document.querySelector("#display");
let btns = document.querySelectorAll(".btn");
let op_btns = document.querySelectorAll(".op-btn");
let flag = false;
for(let btn of btns){
    btn.addEventListener("click",function(e){
     if(e.currentTarget.id == "backspace"){
        disp.textContent = disp.textContent.slice(0, -1);
    }
    else if(e.target.innerText != "="){
    disp.textContent += e.target.innerText;
    }
    // console.log("wo");
})
}
for(let op of op_btns){
    op.addEventListener("click",function(evt){
        // let a = disp.textContent;
        // if(!flag){
        //     flag = true;
        //     console.log(a);
        // }
        // let o = evt.target.innerText;
        // let b;
        // if(evt.target.innerText == "="){
        //     b = disp.textContent.slice(a.length);
        // }

        // console.log(o);
        // console.log(b);
        if(evt.target.innerText != '=')
        disp.textContent += evt.target.innerText;
        if(evt.target.innerText == '='){
            disp.textContent = eval(disp.textContent);
        }
    })
}