function fullName1(first_name: string, last_name: string){
    return last_name + ' ' + first_name
}

let first_name: string = 'zhi'
let last_name: string = 'wang'
console.log(fullName1(first_name, last_name))

interface full_name2{
    firstName: string, 
    lastName: string
}

function fullName2(name: full_name2){
    return name.lastName + ' '+ name.firstName
}

let myName2 = {
    firstName: 'zhi',
    lastName: 'wang'
}

console.log(fullName2(myName2))

class FullName3{
    fullName: string
    firstName: string
    lastName: string

    constructor(f: string, l: string){
        this.firstName = f
        this.lastName = l
    }
}

let myName3 = new FullName3('zhi', 'wang')
console.log(fullName2(myName3))