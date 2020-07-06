const s = Symbol()
const s2 = Symbol()

console.log( typeof s )

const s3 = Symbol('hello')
console.log("s3", s3)

let prop = 'name';
const info = {
    [`my_${prop}_is`] : 'lison',
    ['name']:'张三'
}
console.log("info", info)

const s5 = Symbol('name')
const info2 = {
    [s5]:'lison',
    age:28,
    sex:'nan'
}
console.log("info2", info2)
info2[s5] = 'hhaa'
console.log("info2", info2)

for( const key in info2 ){
    console.log( key )
}

console.log( Object.keys(info2) )

console.log( Object.getOwnPropertyNames(info2) )

console.log( JSON.stringify(info2) )

console.log( Object.getOwnPropertySymbols(info2) )

console.log( Reflect.ownKeys(info2) )

// Symbol.for() Symbol.keyFor()

const s6 = Symbol.for('zhang')
const s7 = Symbol.for( 'zhang' )



