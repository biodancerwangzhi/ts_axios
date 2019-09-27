// string 模板
let lastName: string = 'zhi'
let sentence: string = `I am wang.zhi, you can call me ${ lastName }`
console.log(sentence)

// tuple 比array好一点，可以指定不同类型的数组，但还是要指定，any[]可以完全不用指定
let x : [string, number, string]
x = ['a', 12, 'b']
console.log(x)

// enum  让js的array可以用enumerate i, v
enum Color {Red, Green, Blue}
let color_i: number = Color.Green
let color_v: string = Color[2]
console.log(color_i, color_v)

// any type 相当于没有类型
let notSure: any = 4
notSure = 'a string'
console.log(notSure)
// 一个超级有用的方法，生成无类型数组
let list: any[] = [1, true, "free"];

// void 函数没有返回值就用这个, 实现的时候用undefined。  
function warnUser(): void {
    console.log("This is warning")
}

console.log(warnUser())

// never 比void更灵活一点，具有any特性