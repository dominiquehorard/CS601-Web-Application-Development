
/*putting the program into a function so it can run with an on click event*/
function CalcProgram() {

    alert('Welcome to Dom\'s Simple JavaScript Calculator!');

    /*variable for the answer the user gives*/
    let name = prompt('What is your name?');

    /*Temperate literal to return the value of the name variable*/
    alert(`Welcome ${name}`);

    /*Converting the string to a number for addition later*/
    let num1 = Number(prompt('Please enter your first number'));
    let num2 = Number(prompt('Please enter your second number'));

    if (isNaN(num1) == false && isNaN(num2) == false) {
        /*Creating a function to add the numbers and also alert the user if the number is large or small*/
        function AddNumbers() {

            let sum = num1 + num2;

            alert(`The sum of your numbers is: ${sum}`);

            if (sum > 10) {
                alert('Whoa there boss... That\'s a big number!');
            } else {
                alert('Eh, that\'s a pretty small number...');
            }
        }

        /*calling the function*/
        AddNumbers();

        /*setting variable for first reprompt*/
        let reprompt = prompt('Would you like to add new numbers?');

        /*converting the input to lowercase so we don't have to check for different inputs*/
        let answer = reprompt.toLowerCase();

        /*While loop that checks if the conditions are true, then runs the respective code block*/
        while (true) {

            /*If answer is yes, provide the same prompts, run the function again, then reprompt again*/
            if (answer == 'yes') {
                num1 = Number(prompt('Please enter your first number'));
                num2 = Number(prompt('Please enter your second number'));
                AddNumbers();
                reprompt = prompt(`Would you like to add new numbers ${name}?`);
                answer = reprompt.toLowerCase();
            }

            /*If the answer is no, exit the program after providing a message*/
            else if (answer == 'no') {
                alert(`Thanks for using this program ${name}!`);
                break
            }

            /*If anything besides yes or no is entered, terminate after message*/
            else {
                alert(`You didn\'t enter \"Yes\" or \"No\"... Goodbye ${name}`);
                break
            }
        }
    } else {
        alert(`${name}, one or more of your inputs aren\'t numbers... Goodbye`);
    }
}