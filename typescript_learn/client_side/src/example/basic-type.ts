//布尔类型
let boot:boolean = false
let  boot1:boolean
boot1 = false
console.log("boot1", boot1)


//数字类型
let  num:number = 12
num = 0x12312
console.log("num", num)

// 字符串类型
let str:string = '232'
str = `asdasdws`
console.log("str", str)


// 数组类型
let arr:number[] = [12,43]
console.log("arr", arr)
let arr2:Array<number> = [1,2,3]

let arr3:(number | string)[] = [1,'2']
console.log("arr3", arr3)
let arr4:Array<number|string> = ['sc',23,'asd']
console.log("arr4", arr4)

//元组类型
let tuple:[string,number,boolean]
tuple = ['asda',23,true]

//枚举类型
enum Roles {
    SUPER_ADMIN,
    ADMIN,
    ISER,
}
console.log("Roles", Roles)

console.log( Roles.SUPER_ADMIN )

//any类型
let value:any;
value = 'wqr';
value = 123;
const arr5:any[] = ['qw',222]
console.log("arr5", arr5)

//void
const consoleText = function(text:string):void{
    console.log( text )
}
consoleText('sdf')

 
//never
const errorFunc = ( nessage:string ):never =>{
    throw new Error(nessage)
}


function getObject(obj:Object):void {
    console.log( obj )
}

getObject({num:234})

const getLength = (target:string | number):number =>{
    if( (target as string).length){
        return (<string>target).length
    }else{
        return target.toString().length
    }
}



