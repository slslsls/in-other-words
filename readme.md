url: http://spencerscarpelli-inotherwords.surge.sh

Project Write-up:

For this project, I built a web app that takes text and transforms it by replacing a portion of it with synonyms. The page has two text boxes, one for the source text and one for results. The results can be loaded back into the input box to reiterate the transformation.
I began with a basic html and css layout. Then I wrote javascript to take the source text and break it into an array of strings, to be channeled into API requests. The javascipt checks each API response for synonyms in the noun, adjective, verb, and adverb categories, in that order based on estimations of frequency in English academic prose. It then picks one of the resulting synonyms at random and places it into a new array of strings, to be joined and appended to the results box on the page. I started git branches to work on significant new features. I used the following technologies: html, css, javascript, jQuery, ajax, json, and Big Huge Labs Thesaurus API.
