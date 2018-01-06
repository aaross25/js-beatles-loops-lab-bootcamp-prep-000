function theBeatlesPlay (musicians, instruments){
  var empty = []
  musicians = musicians
  instruments = instruments
  for (var i=0; i<musicians.length-1; i++){
    var string = musicans[i] + " plays " + instruments[i]
    empty.push(string)
  }
  return empty
}

function johnLennonFacts (facts){
  let i = 0;
  var factArray = []
while (i<facts.length){
  factArray.push(facts[i])
}
return factArray
}