function repeat(fn,n){
for(let i = 0 ; i <= n ; i++){
console.log(fn);
}
}



    function hello(){
    return "hello";
}

    function goodBye() {
    return "goodbye";
}

//let hi = hello();
//let res = repeat(hi,5);
//console.log(res);
//console.log(repeat(goodBye(),5));
repeat(hello(),5);
repeat(goodBye(),10);