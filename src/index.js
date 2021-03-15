module.exports = function toReadable (number) {
  const dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const tn = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
   if (number < 20) return dg[number]
   const world = number % 10
    if (number < 100) {
    return tn[Math.floor(number / 10)] + (world ? ` ${dg[world]}` : `` )
  }
   return `${dg[Math.floor(number / 100)]} hundred${number % 100 !== 0 ? ` ${toReadable(number % 100)}` : `` }`
}    
