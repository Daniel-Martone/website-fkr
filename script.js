for (let i = -6666; i <= 66666; i+=0.666){
    console.log(i*666)
}
    
wordlist = ["martone", "websitefkr", "daniel"];

do {
  let word = wordlist[Math.floor(Math.random() * 3)];
  let response = prompt(`Type ${word} to continue`);
} while (response != word);
