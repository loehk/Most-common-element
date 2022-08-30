const string = "aaabccccdfe"

const mostCommonElement = (string) => {
    const letterArray = Array.from(string) 
    let mostCommonLetter = ""
    let occurrencesOfLetter = 0 
    const letterCounter = new Map() 
    letterArray.forEach(element => { 
      let count = letterCounter.get(element) 
      if (!count) { 
        count = 1; 
        letterCounter.set(element, count) 
      } else { 
        count++ 
        letterCounter.set(element, count) 
      }
      if (count > occurrencesOfLetter) { 
        mostCommonLetter = element; 
        occurrencesOfLetter = count; 
      }
    })
  
    return { mostCommonLetter, occurrencesOfLetter }
  }
  
  console.log(mostCommonElement(string));








// const string = "aaabccccdfe"

// const mostCommonElement = (string) => {
//   const letterArray = Array.from(string)
//   const letterCounter = {}
//   letterArray.forEach(element => {
//     if (!letterCounter[element]) {
//       letterCounter[element] = 1
//     } else {
//       letterCounter[element] ++
//     }
//   })
//   const letterCounterValues = Object.values(letterCounter)

// return Object.entries(letterCounter).sort((a,b)=> b[1] - a[1])[0][0] 
// }

// console.log(mostCommonElement(string))