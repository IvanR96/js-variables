let message = prompt("Enter a message with a max of 250 characters: ");

let maxlength = 250;

let charLeft = maxlength - message.length;

alert("You have written " + message.length + " characters and you have "  + charLeft +  " characters left in your post");
