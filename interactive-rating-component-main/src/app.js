let app = document.querySelector('.ratingContainer')
let star = document.querySelector('.star');
let submitState = document.getElementById('submitButton');
let paragraphText = document.querySelector('.paragraph');
let headerText = document.querySelector('.heading');
let options = document.querySelector('.options');
let newRatingContainer = document.querySelector('.ratingContainer');

let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let number3 = document.getElementById('number3');
let number4 = document.getElementById('number4');
let number5 = document.getElementById('number5');


//Creating new Image
let imageAdd = document.createElement('img');
imageAdd.src ="./images/illustration-thank-you.svg"

//Creating new Paragraph
let newDiv = document.createElement('div');
newDiv.innerHTML = `You selected X out of 5`

//Listening for button selection
number1.addEventListener('click', () => {
    newDiv.innerHTML = `You selected 1 out of 5`
});

number2.addEventListener('click', () => {
    newDiv.innerHTML = `You selected 2 out of 5`
});

number3.addEventListener('click', () => {
    newDiv.innerHTML = `You selected 3 out of 5`
});

number4.addEventListener('click', () => {
    newDiv.innerHTML = `You selected 4 out of 5`
});

number5.addEventListener('click', () => {
    newDiv.innerHTML = `You selected 5 out of 5`
});


submitState.addEventListener('click', () => {
    //Giving a new class to the main container
    newRatingContainer.classList.add('newState')

    submitState.style.display = 'none';
    options.style.display = 'none';
    star.style.display = 'none';
    headerText.innerHTML = 'Thank you!';
    paragraphText.innerHTML = `We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`
    
    // add 2 new elements through function -> image, container
    // adding them to the top by using .insertbefore(element, parentElement.firstChild)
    // Giving them unique classes for styling
    app.insertBefore(newDiv, app.firstChild);
    newDiv.classList.add('newDivStyle')
    app.insertBefore(imageAdd, app.firstChild);
    imageAdd.classList.add('newImageStyle');


    //Adding a new class that can have its own CSS editing styles
    headerText.classList.add('newState')
    paragraphText.classList.add('newState');
});






