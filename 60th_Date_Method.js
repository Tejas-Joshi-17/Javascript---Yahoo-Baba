// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Date Method

// 1)   toDateString()
// 2)   getDate()
// 3)   getFullYear()
// 4)   getMonth()
// 5)   getDay()
// 6)   getHours()
// 7)   getMinutes()
// 8)   getSeconds()
// 9)   getMiliseconds()
// 10)  setDate()
// 11)  setFullYear()
// 12)  setHours()
// 13)  setMiliseconds()
// 14)  setMinutes()
// 15)  setMonths()
// 16)  setSeconds()

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let date1 = new Date()
console.log(date1.toDateString())       // Sun Nov 24 2024
console.log(date1.getDate())            // 24
console.log(date1.getFullYear())        // 2024
console.log(date1.getMonth())           // 10
console.log(date1.getDay())             // 0
console.log(date1.getHours())           // 11
console.log(date1.getMinutes())         // 1
console.log(date1.getSeconds())         // 34
console.log(date1.getMilliseconds())    // 568

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let date2 = new Date(`January 5 2010`)
console.log(date2.toDateString())       // Tue Jan 05 2010
console.log(date2.getDate())            // 5
console.log(date2.getFullYear())        // 2010
console.log(date2.getMonth())           // 0
console.log(date2.getDay())             // 2
console.log(date2.getHours())           // 0
console.log(date2.getMinutes())         // 0
console.log(date2.getSeconds())         // 0
console.log(date2.getMilliseconds())    // 0

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------