const Discord = require('discord.js');
module.exports = {
	name: 'm',
	description: 'jeremir calcula. Use .m N + N',
	execute(message, args,client) {

        if(!args[0]) return message.reply('Coloque o primeiro numero'); //if there is no first arg
        if(!args[1]) return message.reply('Coloque o sinal'); //if there is no second arg
        if(!args[2]) return message.reply('Coloque o segundo numero'); //if there is no third arg
    
        //send the result of calculator to the channel
        message.channel.send(calculator(args[0], args[1], args[2]));
    
    function calculator(num1, operator, num2){
      if(isNaN(num1)) return 'so pode usar numeros'; //if the first number is not a number return an error message
      if(isNaN(num2)) return 'so pode usar numeros'; //if the second number is not a number return an error message
    
      //switch through the allowed operators and perform the specified operations
      switch(operator){
        case "+":
          return parseInt(num1)+parseInt(num2);
          break;
        case "-":
          return num1-num2;
          break;
        case "*":
          return num1*num2;
          break;
        case "/":
          return (num1/num2).toFixed(2);
          break;
        default:
          return "Coloque um desses operadores (+|-|*|/)";
          break;
      }
    }
    
    

},
};