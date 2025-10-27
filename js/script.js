function btn(cmd){

    document.getElementById("display").value+=cmd
        
    
}
function clr(){
    document.getElementById("display").value=null
}

// function equals(){
//     var answer = document.getElementById("display").value
//     var result = eval(answer)
//     document.getElementById("display").value=result
// }
let keymulti
let keydiv
let keymin
let keyadd;
function add(){

    
    keyadd = document.getElementById("display").value
    document.getElementById("display").value=null
}
function multiply(){

    
    keymulti = document.getElementById("display").value
    document.getElementById("display").value=null
}
function div(){

    
    keydiv = document.getElementById("display").value
    document.getElementById("display").value=null
}
function minus(){

    
    keymin = document.getElementById("display").value
    document.getElementById("display").value=null
}



function equals(){

    if(keymulti != null){

        let num = document.getElementById("display").value

        let ans = keymulti*num
        document.getElementById("display").value=ans
    }
    else if(keydiv != null){

        let num = document.getElementById("display").value

        let ans = keydiv/num
        document.getElementById("display").value=ans
    }
    else if(keymin != null){

        let num = document.getElementById("display").value

        let ans = keymin-num
        document.getElementById("display").value=ans
    }
    else if(keyadd != null){

        let num =document.getElementById("display").value
        

        let ans = Number(keyadd)+Number(num)
        console.log(ans)
        document.getElementById("display").value=ans
    }

 }