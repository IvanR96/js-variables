//let maxlength = 250;

//let charLeft = maxlength - message.length;

//alert("You have written " + message.length + " characters and you have "  + charLeft +  " characters left in your post");


// Done in one line
//alert(prompt("Enter a message with a max of 250 characters: ").slice(0, 250));


//let name = prompt("What is your name?");


//let rest = name.slice(1,name.length);

//name = name.toUpperCase().slice(0,1);


//alert("Hello " + name + rest.toLowerCase())

//let dogAge = prompt("What is your dog's age?");


//let humanAge = (dogAge - 2) * 4 + 21;


//alert("Your dog is " + humanAge + " years old in human years. Amazing!!!!!");

// js functions continue here


function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        const days = (90 - age) * 365;
        
        const weeks = (90 - age) * 52;
        
        const months = (90 - age) * 12;
        
        console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
        
        
        
        
    /*************Don't change the code below**********/
    }
    
    lifeInWeeks(56);