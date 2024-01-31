class Random {
    static getFloat(){
        return Math.random()
    }
    static getInt(min, max) {
    let x = (max - min) +1
    return min + Math.floor(math.random() * x)
}
static getBoolean() {
let r = this.getInt(1, 10)
return (r >= 5) ? true : false
}
}
console.log(Random.getFloat())
console.log(Random.getInt(1, 10))
console.log(Random.getBoolean())
class ThaiDate {
    constructor(year , month, data){
        this.year = year
        this.month = month
        this.data = data
    }
    getShotDate() {
        return `${this.data}/${this.month}/${this.year+543}/`
    }
    gatLongDate() {
        const m =['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฏาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม',]
        return `${this.data}/${this.month-1}/${this.year+543}/`
    }
}
const thDate = new ThaiDate(2020, 8, 3)
console.log(thDate.getShotDate())
console.log(thDate.gatLongDate())