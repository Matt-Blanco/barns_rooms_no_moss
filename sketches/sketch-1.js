/*
what: 
date: 
author: arjun

thought(s):
*/

let str = ""; 

let words = []; //array to store words that i type.

function setup(){
    createCanvas (1000, 1000); 

    //set defaults: 
    textSize (16); 
    noStroke(); 
    fill (0); 
}

function draw(){
    background (255); 

    for (let word of words){
        word.display(); 
    }
}

function keyPressed(){
    //every time a key is pressed, accumulate a string.
}

function accumulate_string(){

}

class Word {
    constructor(str, x, y){
        this.str = str; 
        this.x = x; 
        this.y = y; 

        this.tw = textWidth(this.str); // with this i can calculate the width of the text box to affect the other text box positions.
    }

    display(){
        text (this.str, this.x, this.y); 
    }
}