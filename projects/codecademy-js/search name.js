/*jshint multistr:true */

var text = "Hello... my name is Robert and I am a boy who is also the \ KING of the WORLD"
var myName = "Robert"

var hits = []

for ( i = 0; i<text.length; i++) {
    if (text[i] === 'R') {
        for (j = i;j < i+myName.length; j++){
            hits.push(text[j])
        }
        
        }
}

if (hits.length === []){
    console.log("Your name wasn't found")
}
else{
    console.log(hits)
}