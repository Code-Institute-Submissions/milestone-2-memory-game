# portfolio-milestone-2
This is my Milestone Project for Interactive Front End Development
## Test your Memory Game with implemented Weather API
This is a small and engaiging Memory Game designed to relax or take a break while having a coffe. It cosists of old Soviet poster art 
from 50s and 60s with positive imagery aimed at good results and positivety. Current weather information was implemented seemlesly at the 
bottom of the screen to inform the User of the current weather conditions. 


# UX

The user is anyone that wants to take a little break and play a memory game which is easy on the eyes and has positive images. Users 
also can quickly check the current weather via the integrated API.

To accommodate what the UX should be certain requirements have been set. These are: 

1.	The game has to be stylish.

2.	The game has to be easy to understand.

3.	The app needs to have positive images and message.

4.	Interested users have to have the ability to reset the game at will. 

5.	Interested users need to have the option to see the current weather.

6.	Users have to have fun.


# UI structure

After understanding the requirements and taking into consideration best design practices the structure of the application was clear.

## Each Turn

•	The User turns a card open to reveal the underside.

•	The User reveals a second card anywhere on the board, the goal is to match the first revealed card with the second.

•	If the pictures on the 2 turned cards is the same, they stay revealed.

•	If the cards are not the same - both flip facedown in 1 second.

•	The game ends once all the card have been revealed.




# Features

## Existing Features

•	Game Board – the board consists of 12 initially unturned cards.

•	Restart Button - is at the top of the board when the user needs to reset or restart the board and start a New Game with new secret locations of the cards. 

•	Card Randomiser - can be found in JS file the card randomiser works in the background to have fresh secret locations for the cards every time.

•	Cards - Stylish and colorful cards with positive images.

•	Current Weather API - is there for the user to gain useful information about current weather conditions.


## Features Left to Implement

•	Have a timer counting up after each fresh game for the user to see how quickly they can reveal the whole Game Board.

•	Moves Counter for the user to see how many moves it took to reveal the whole Game Board.

•	Add an additional sets of cards to keep the game fresh.

•	Add additional rows per users request to make the Game more challenging for advanced players.


# Technologies Used

Several technologies have been used in the development of this personal profile website:

•	HTML5 and CSS3 for structure and styling of the pages.

•	<a href="https://fonts.google.com/">Google Fonts</a> where used for text editing and styling

•	<a href="https://fontawesome.com/start">Font Awesome</a> was used to implement the icons

•	<a href="https://jquery.com/download/">jQuery</a> was used to write a more efficient and clean JavaScript

•	<a href="https://github.com/">GitHub</a> repository was used to store the code and site deployment

•	<a href="gitpod.io">Gitpod</a> was used for development and version control

•	<a href="https://validator.w3.org/">W3C Markup Validation Service</a> was used for HTML validation

•	<a href="https://jigsaw.w3.org/css-validator/">Jigsaw W3</a> css validator was used to validate CSS

•	<a href="https://openweathermap.org/">Open Weather Map</a> was used as an API to implement Current Weather information in the App


# Testing

## Functional testing of the application

Functional testing is designed to ensure that each function of the application works in accordance with the requirements of the specification. Testing the functionality of the website shows "What the system does."
For this a checklist for testing application functionality is created and tested with a “<span style="color:green">Passed</span>” or “<span style="color:red">Failed</span>” status with a brief description of the outcome if necessary.

## Links Testing


•	The correctness of internal links – <span style="color:green">Passed</span> – all navigation links between pages work as intended

•	Missing links leading to one page – <span style="color:green">Passed</span> – none

•	Are there any non-linked pages? – <span style="color:green">Passed</span> – none

•	Are there any broken links – <span style="color:green">Passed</span> – none

•	Weather API communication links broken – <span style="color:green">Passed</span> – none


## Testing Gameplay


•	Validity of input; each card – <span style="color:green">Passed</span> – each card behaves as intended when clicked

•	Back of the cards displaying correctly – <span style="color:green">Passed</span> – works as intended

•	Cards displaying intended pictures when turned – <span style="color:green">Passed</span> - works as intended

•	Card randomising after each reset – <span style="color:green">Passed*</span>- It is functional, cards are randomised each time correctly at random.

•	Restart button – <span style="color:green">Passed</span> – works as intended

## HTML/CSS Validation

•	HTML syntax errors – <span style="color:green">Passed</span> – none (validated using <a href="https://validator.w3.org/">W3C Markup Validation Service</a>)

•	CSS syntax errors – <span style="color:green">Passed</span> – none (validated using <a href="https://jigsaw.w3.org/css-validator/">Jigsaw W3</a> css validator)

# Usability testing of the site

Usability testing is designed to evaluate the application from the perspective of the end user (UX Testing). This helps to determine whether the product meets user expectations, identifies problem areas in the interface.

Navigation testing of the game is performed with following checks:

•	The game is easy to navigate – <span style="color:green">Passed</span>

•	Buttons, shapes, cards and fields are convenient to use – <span style="color:green">Passed</span>

•	Animations and transitions work as intended - <span style="color:green">Passed</span>


## Content Testing

•	No grammar, spelling errors – <span style="color:green">Passed</span>

•	Images are sized and placed correctly – <span style="color:green">Passed</span>

•	Website color palette optimization and font sizes – <span style="color:green">Passed</span>

•	Content is informative, understandable, structured and logically connected – <span style="color:green">Passed</span>

•	The instructions are clear and contain the correct information - <span style="color:green">Passed</span>


Upon evaluatin the usability of the application it can be said that the structural integrity is in place.
The game is understandable and convenient. The navigation is intuitive and easy to understand for all types of users. 
The impressions it makes are visually striking and stylish with no unnecessary clutter. 
It is easy to understand what this game is.- <span style="color:green">Passed</span>


# UI Testing


User Interface testing is performed to verify that site’s graphical user interface conforms to specifications.

•	GUI Compliance – <span style="color:green">Passed</span>

•	Assessment of design elements: layout, colors, fonts, font sizes, labels, text fields, text formatting, titles, buttons, lists, icons, links – <span style="color:green">Passed</span>

•	Testing with different screen resolutions – <span style="color:green">Passed</span>

•	Testing the graphical user interface on target devices: smartphones – <span style="color:red">Failed</span> – Portrait view of Iphone XS, Pixel 2, IPhone 6-7 is not responding correctly, this will be fixed and documented appropriately (Testing made using http://www.responsinator.com/)

•	Testing the graphical user interface on target devices: smartphones Landscape view – <span style="color:red">Failed</span> – Landscape view of Iphone XS, Pixel 2, IPhone 6-7 is not responding correctly - the cards show up as intended, but the current weather forecast is put behind the Game Board and is not visible. This will be fixed and documented appropriately (Testing made using http://www.responsinator.com/)

•	Testing the graphical user interface on target devices: tablets – <span style="color:green">Passed</span>


## Compatibility Testing

Compatibility testing is performed to verify the operation of the site with various software and hardware configurations. 

Cross-platform testing of the site allows to evaluate the performance of the site under different operating systems (both desktop and mobile):

•	Widows – <span style="color:green">Passed</span>

•	Mac OS - <span style="color:green">Passed</span>

•	iOS – <span style="color:red">Failed</span> - does not respond in Google Chrome when using iPhone iOS

•	Android – <span style="color:green">Passed</span> – The game is functional with minor issues


Cross-browser testing of the site helps to verify the correct operation of the site in different browser configurations:

•	Google Chrome – <span style="color:green">Passed</span>

•	Mozilla Firefox – <span style="color:green">Passed</span>

•	Internet Explorer - <span style="color:green">Passed</span>


## Tests Summary


Total number of tests: <span style="color:yellow">32</span>

Number of successful tests: <span style="color:green">29</span>

Number of failed tests: <span style="color:red">3</span>


Fixes shall be implemented and documented accordingly for the identified issues.

1.	Graphical user interface on target devices: smartphones –

2.	Viewport sizing issues -

3.	Android merging of text issue - 


In conclusion, the application is of sound structure and is ready to be deployed.

# Deployment

Test your Memory game is located on GitHub. The repository for this site can be found at VladimirB3/milestone-2-memory-game.
The website was deployed using GitHub Pages, the link to the live version is: 
https://vladimirb3.github.io/milestone-2-memory-game/

Gitpod was used for development – to run the site locally python3 -m http.server command needs to be run on the terminal inside the repository VladimirB3/milestone-2-memory-game.

# Credits

## Content

•	The Soviet Era posters where downloaded from https://gallerix.ru/storeroom/1973977528/

•	The Soviet Era posters where issued before 1970s, therefore all of the copyright terms have expired. Additionally The Civil Code of the RSFSR of 1964 contained an additional free use provision in article 493 for personal OR educational purposes.

•	Some code was copied from Bootstrap Documentation and modified.

•	API was provided by https://openweathermap.org/ for free.

•	jQuery was used to creat clean and easy to understand JavaScript.

•	This README file was drafted up using MS Word following the giudelines provided by Code Institute.

## Media

•	The Soviet Era posters where used in the game.

•	The weather indication icon is loaded directly from https://openweathermap.org/ from their library.

•	The restart button icon was added from fontawesome.com library.


## Acknowledgements

•	I received inspiration for this project from my Lovely Spouse and my soon to be born Son.



