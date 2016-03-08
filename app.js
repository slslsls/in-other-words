var wordsToIgnore = ["FOR", "AND", "NOR", "BUT", "OR", "YET", "SO", "AFTER", "ALTHOUGH", "AS", "BECAUSE", "BEFORE", "EVEN", "IF", "LEST", "NOW", "THAN", "THAT", "THOUGH",
"TIL", "UNLESS", "UNTIL", "WHEN", "WHENEVER", "WHEREAS", "WHERE", "WHEREVER", "WHETHER", "WHICH", "WHILE", "WHO", "WHOEVER", "WHY", "WHAT", "BOTH", "ALSO", "EITHER", "NEITHER", "I",
"ME", "WE", "US", "YOU", "SHE", "HER", "HE", "HIM", "IT", "THEY", "THEM", "THIS", "THESE", "THOSE", "MYSELF", "OURSELVES", "YOURSELF", "YOURSELVES", "HIMSELF", "HERSELF",
"ITSELF", "THEMSELVES", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "TWENTY", "THIRTY", "FORTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY",
"HUNDRED", "THOUSAND", "MILLION", "BILLION", "TRILLION", "INTO", "IN", "THE", "OF", "WITH", "SOME", "A", "IT", "TO", "IS"];
var $text;
var $textArray = [];
var Text = {};

function convertWord(word, propertyNumber) {
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'http://words.bighugelabs.com/api/2/37c6f565170ee01f01539b911ed9dfb5/' + word + '/json',
    error: function() {
      console.log('"' + word + '" was ignored')
    },
    success: function(data) {
      if (data.noun && !(wordsToIgnore.includes(word.toUpperCase()))) {
        var arrayLength = data.noun.syn.length - 1;
        var random = function() {
          return Math.round(Math.random() * arrayLength)
        }

        Text[propertyNumber] = data.noun.syn[random()]
      }
      else if (data.adjective && !(wordsToIgnore.includes(word.toUpperCase()))) {
        var arrayLength = data.adjective.syn.length - 1;
        var random = function() {
          return Math.round(Math.random() * arrayLength)
        }

        Text[propertyNumber] = data.adjective.syn[random()]
      }
      else if (data.verb && !(wordsToIgnore.includes(word.toUpperCase()))) {
        var arrayLength = data.verb.syn.length - 1;
        var random = function() {
          return Math.round(Math.random() * arrayLength)
        }

        Text[propertyNumber] = data.verb.syn[random()]
      }
      else if (data.adverb && !(wordsToIgnore.includes(word.toUpperCase()))) {
        var arrayLength = data.adverb.syn.length - 1;
        var random = function() {
          return Math.round(Math.random() * arrayLength)
        }

        Text[propertyNumber] = data.adverb.syn[random()]
      }
      else {
        Text[propertyNumber] = word;
        console.log('"' + word + '" was ignored');
      }
      console.log(data)
    }
  })
};

$('textarea').on('change', function() {
  $text = $('textarea').val();
  $textArray = $text.split(' ');
  Text = {};

  for (i = 0; i < $textArray.length; i++) {
    Text[i] = $textArray[i]
  }
});

$('#convert').on('click', function() {
  for (i = 0; i < $textArray.length; i++) {
    var $results = $('#results');

    convertWord(Text[i], i);
  }
})




//need to get rid of periods, commas, etc from the text array
//allow for -ing, -s, and -ed
