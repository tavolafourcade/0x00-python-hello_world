#!/usr/bin/node
// Square class that inherits from the Rectangle class

const Square_ = require('./5-square');

module.exports = class Square extends Square_{
	charPrint(c){
		if(!c){
			c = 'x';
		}
		
		for (let i =0; i < this.width; i++){
			console.log(c.repeat(this.width));
		}
	}
}
