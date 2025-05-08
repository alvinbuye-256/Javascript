//Global Scope
var globalVar = "Im a global Variable";
let globalLet = "I'm also global but scoped";
const globalConst = "I'm A global Constant";

{
    //block Scope
    var BlockVar = "I'm a block-scoped Var";
    let BlockLet = "i'm a block-scoped Let";
    const BlockConst = "I'm a block-scoped Const";

}

// Global scope
    console.log(globalVar); // Output: "I'm a global variable"
    console.log(globalLet); // Output: "I'm also global, but scoped with let"
    console.log(globalConst); // Output: "I'm a global constant"
    
    //Block Scope
    console.log(blockVar);
    console.log(blockLet);