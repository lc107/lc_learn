interface NameInfo {
    firstName:string,
    lastName:string
}

const gitFullName = ({firstName,lastName}:NameInfo) => {
    return `${firstName} ${lastName}`
}
// 使用对象的形式
// const gitFullName = ({firstName,lastName}:{firstName:string,lastName:string}):string => {
//     return `${firstName} ${lastName}`
// }
const myName = gitFullName ( {
    firstName:'zhang',
    lastName:'san'
} )

console.log( myName )

interface ColorType {
    color?:string,
    type:string
}

const getColor = ({color,type}:ColorType):string =>{
    return `a ${color ? (color + ' ') : ' ' }${type}`
}
console.log( getColor({
    color:'red',
    type:'tomato'
}) )