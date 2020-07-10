let list:number[] = [1,2,3,4]
let list1:string[] = ['zhasn','lisi']

let name:string = 'xiaoming'

let oneString:any = 'is string'
let stringLength:number = (oneString as string).length

console.log( stringLength )

// 2.1.4　泛型
// 1.泛型函数
function Hello<T>(arg:T):T{
    return arg;
}

let h1 = Hello<string>('xiaoming')
let h2 = Hello<number>(123445)

console.log( h1 );
console.log( h2 );

// 泛型变量
// function Hello1:<T>(arg:T[]):Array<T>{
//     console.log( arg.lenght )
//     return arg
// }

// 2.1.5　枚举
enum OrderStatus {
    Start = 1,
    Unpaid,
    Shipping,
    Shipped,
    Complete
}

console.log( OrderStatus );

// 2.字符串枚举
enum OrderStatus1 {
    Start = 'Start',
    Unpaid = 'Unpaid',
    Shipping = 'Shipping',
    Shipped = 'Shipped',
    Complete = 'Complete'
}
console.log( OrderStatus1 )
// 3.反向映射

enum Enum{
    A
}

console.log( Enum.A );

// 2.1.6　symbol
const symbol1 = Symbol()
const symbol2 = Symbol('hello')
const symbol3 = Symbol( 'hello' )

// symbol3 ==== symbol2

// 2.2.3　类型保护与区分类型
interface Teacher {
    teache():void
}

interface Student {
    learn():void
}

function getPersion():Teacher|Student{
    return {} as Teacher
}

const persion = getPersion()

console.log( ( persion as Student ).learn() );

console.log( ( persion as Teacher ).teache() );

// 2.2.4　typeof与instanceof

// 2.2.5　类型别名
type Age = number;
type AgeCreator = () => Age;

// function getAge( arg:AgeCreator ):Age {
//     function arg()
// }

// type Persion<T> = { age:T };

// type Persion<T> = {
//     name:T;
//     mother:Persion<T>;
//     father:Persion<T>;
// }

// 2.2.6　字面量类型
// type Persion = "teacher";
type Profession = "teacher" | "doctor" | "accountant";
// function persionCreator( Profession:Persion ){

// }
























