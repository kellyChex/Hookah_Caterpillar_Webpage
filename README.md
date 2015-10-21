# Hookah_Smoking_Caterpillar_Webpage
Practiced dynamically changing a header on a web page



About the Project:

I made an Alice and Wonderland themed, simple, interactive webpage that has header, a text box, and a button. In the text box users can type whatever they'd like, click the button, and then the header is changed and updated. This interactivity was accomplished by creating a JavaScript function that takes the text and puts it into the header. 



How to set it up:

You'll need to run files inputBox.html, inputBox.css, and inputBox.js. 



What I learned:

How to dynamically change a header within a webpage using a textbox and a button. 

- That a function is "a group of reusable code that can be called within the program by calling its name. It eliminates the need for writing the same code again and again. And that allows a programmer to divide a big program into a number of small and manageable functions." 
- How to create a textbox. This was accomplished by creating an element called "input" and giving it a type attribute of text. 

< input type="text"/> 

And like the header, the input needed an id so it could be accessed later using JavaScript. 

< input type="text" id="myTextBox"> 


Lastly for the html, a button was created to submit the new header. 


< input type="button" id="myButton" value="Update Header" onclick="updateHeader( )"> 


The input type attribute is "button". The button was given an id of "myButton" and a value of "Update Header". 

The button was told to be on the lookout for an onclick event. So when the user clicks the button it will call a javascript function named updateHeader( ). 


function updateHeader( ) { } 


Everytime the button is clicked, it will refer to the function. 

The function needs to get the text within the text box and place it into the h1 element that was created. To access an "input" element with type "text" by using getElementById( ).

Now that the input textbox has been accessed the text needs to be stored as a string so a value is put at the end of the getElement. 

function updateHeader( ){
var myNewHeader = document.getElementById("myTextBox" ).value;
}


To access to the html h1 element a variable was declared and .getElementById was used again while passing in the id of h1 that was previously declared. .var methond at the end was not stored/used because it was replaced.


function updateHeader( ){
var newHeader = document.getElementById("myTextBox").value;
var oldHeader = document.getElementById("header");
}

To update the html with javascript, innerHTML was used because it gives access to the content of the element. 


function updateHeader( ){
var newHeader = document.getElementById('myTextBox').value;
var oldHeader = document.getElementById("header" );
oldHeader.innerHTML = "Howdy" + newHeader + "!";
}


The innerHTML property accessed the text within the h1 header then assigned that text the variable "Howdy" + newHeader + "!"  which will include the text entered in the textbox. 



Heroku or site44 link: Not available
