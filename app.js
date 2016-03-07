var wordsToExclude = ["FOR", "AND", "NOR", "BUT", "OR", "YET", "SO", "AFTER", "ALTHOUGH", "AS", "BECAUSE", "BEFORE", "EVEN", "IF", "LEST", "NOW", "THAN", "THAT", "THOUGH",
"TIL", "UNLESS", "UNTIL", "WHEN", "WHENEVER", "WHEREAS", "WHERE", "WHEREVER", "WHETHER", "WHICH", "WHILE", "WHO", "WHOEVER", "WHY", "WHAT", "BOTH", "ALSO", "EITHER", "NEITHER", "I",
"ME", "WE", "US", "YOU", "SHE", "HER", "HE", "HIM", "IT", "THEY", "THEM", "THIS", "THESE", "THOSE", "MYSELF", "OURSELVES", "YOURSELF", "YOURSELVES", "HIMSELF", "HERSELF",
"ITSELF", "THEMSELVES", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "TWENTY", "THIRTY", "FORTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY",
"HUNDRED", "THOUSAND", "MILLION", "BILLION", "TRILLION", "INTO", "IN", "THE", "OF", "WITH", "SOME", "A", "IT", "TO"];
var $text;
var $textArray = [];
var Text = {};
var lookupWord = 'advance';
var requestURL = 'http://words.bighugelabs.com/api/2/37c6f565170ee01f01539b911ed9dfb5/' + lookupWord + '/json';

$.ajax({
  type: 'GET',
  dataType: 'json',
  url: requestURL
}).done(function(data) {
  console.log(data)
});

$('textarea').on('change', function() {
  $text = $('textarea').val();
  var $textArrayTemp = $text.split(' ');

  for (i = 0; i < $textArrayTemp.length; i++) {
    Text[i] = $textArrayTemp[i]
  }
});




// $('textarea').on('change', function() {
//   $text = $('textarea').val();
//   var $textArrayTemp = $text.split(' ');
//
//   for (i = 0; i < $textArrayTemp.length; i++) {
//     if (wordsToExclude.includes($textArrayTemp[i].toUpperCase()) === false) {
//       $textArray.push($textArrayTemp[i])
//     }
//   }
// })


//need to get rid of periods, commas, etc from the text array
//allow for -ing, -s, and -ed
