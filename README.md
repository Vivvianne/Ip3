IP 3

Ping Pong

Description
This is a web based javascript number game which takes a number from a user and returns a range of numbers from 1 to the chosen number with the following exceptions.
Numbers divisible by 3 are replaced with a ping;
Numbers divisible by 5 are replaced with a pong;
Numbers divisible by 15 are replaces with ping pong;

Setup Instalation
Open index.html via your webpage

Live demo
To view page click on the link bellow;

https://vivvianne.github.io/Ip3/


Specifications

It counts up to the provided number

Example Input : 2
Example Output : [1,2]
for(var i=1; i<=userInput; i+=1){ //count to the user input;}
It replaces numbers divisible by 3 with ping

Example Input : 4
Example Output : [1, 2, ping, 4]
if(number % 3===0){ return "ping" }
It replaces numbers divisible by 5 with pong

Example Input : 6
Example Output : [1, 2, ping, 4, pong, ping]
if(number % 5===0){ return "pong" }
It replaces numbers divisible by 15 with pingpong

Example Input : 17
Example Output : [1, ..., ping, 13, 14, pingpong, 16, 17]
if(number % 15===0){ return "pingpong" 
Technology used
Hyper Text Markup
Cascading Style Sheets
Javascript
Jquery Library

Licence

No known licence, but copyrights to Vivvianne Kimani.
