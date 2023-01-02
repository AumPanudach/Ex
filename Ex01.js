function calculate(value){
    var number;
    var total;
    for(var i = 0 ; i < value.length ; i++){
    if(value[i] !== "+" &&  value[i] !== "-" && value[i] !== "" && value[i] !== "/" && i + 2 < value.length ){
       number = parseInt(value[i + 2]) ;
       if(i === 0 ){
        total = parseInt(value[i]);
       }
    }
    else if(value[i] === "+"){
        total = total + number;
    }
    else if(value[i] === "-"){
        total = total - number;
    }
    else if(value[i] === ""){
        total = total * number;
    }
    else if(value[i] === "/"){
        total = total / number;
    }
}
return total;
}
console.log(calculate("1+1"));
console.log(calculate("7*4-2"));
console.log(calculate("1+1+1+1+1"));