const shape = {
    radius: 10,
    diameter () {
        return this.radius * 2
    },
    perimeter: () => 2 * Math.PI * this.radius
}
console.log(shape.diameter());
console.log(shape.perimeter());

let a = 3
let b = new Number(3)
let c = 3
console.log(a, b, c)

class Chameleon {
    // 静态方法只能被创建它们的构造器使用
    static colorChange(newColor) {
        this.newColor = newColor
        console.log(this.newColor)
        return this.newColor
    }
    constructor({ newColor = 'green' } = {}) {
        Chameleon.colorChange(newColor);
    }
}
const freddie = new Chameleon({ newColor: 'purple' })

function getPersonInfo(one, two, three) {
    console.log(one, two, three)
}
const person = 'Lydia'
const age = 21
getPersonInfo`${person} is ${age} years old`

var test = (function (a) {
    this.a = a;
    return function (b) {
        return this.a + b;
    }(function (a, b) {
        return a
    }(1, 2))
})
console.log(test(6))
// 多维数组平铺
console.log('zttt', [11, [12, 13, [14, 15]]].flat(2))
// 数组乱序
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    let index = Math.floor(Math.random() * arr.length);
    newArr.push(arr[index]);
    arr.splice(index, 1);
}
console.log('zttt', newArr)
