//Global Scope
var globalVar = "Im a global Variable";
let globalLet = "I'm also global but scoped";
const globalConst = "I'm A global Constant";

{
    //block Scope
    var blockVar = "I'm a block-scoped Var";
    let blockLet = "i'm a block-scoped Let";
    const blockConst = "I'm a block-scoped Const";

}

// Global scope
    console.log(globalVar); // Output: "I'm a global variable"
    console.log(globalLet); // Output: "I'm also global, but scoped with let"
    console.log(globalConst); // Output: "I'm a global constant"
    
//Block Scope
    console.log(blockVar);
    console.log(blockLet);
    
    

    function show(){
        var functionVar = "I'm a block-scoped var";
        let functionLet ="I'm a block-scoped let";
        const functionConst = "I'm a block-scoped const";
    }
    show();

    console.log(functionVar);// Throws  ReferenceError
    console.log(functionLet);// 
