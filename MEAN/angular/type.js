var mynum: number = 5;
var myString: string = 'Hello universe';
var myArr: number[] = [1, 2, 3, 4]
var myObj: object = { name: "bob" }
var anythingVariable:any = "Hey";
anythingVariable = 25;
var arrayOne: boolean[] = [true, false, true, true];
var arrayTwo: any[] = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };
class myNode{
    val: number
    _priv: number
    constructor(valueP: number) {
        this.val = 0;
		this.val = valueP;
    }
    doSomething(){
		this._priv = 10;
	}
}
let myNodeInscnace = new myNode(1)
console.log(myNodeInscnace.val)
function myfunction():void {
    console.log("Hello World");
    return;
}
function errorHandler(message: string): never{
	throw new Error(message);
}
