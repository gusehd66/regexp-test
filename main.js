const str = `
010-1234-5678
the1234@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccddd
`

//console.log(str.search(regexp))
console.log(str.match(/(?<=@).{1,}/g))