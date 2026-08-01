let question = "";


// Hide every screen
function hideAll() {

    document.getElementById("question-screen")
        .classList.add("hidden");

    document.getElementById("thinking-screen")
        .classList.add("hidden");

    document.getElementById("choice-screen")
        .classList.add("hidden");

    document.getElementById("answer-screen")
        .classList.add("hidden");

}



// Start the experience
function start() {

    question = document.getElementById("question-input").value;


    // If the user didn't type anything
    if (question.trim() === "") {

        alert("Please enter a question.");

        return;

    }


    hideAll();


    // Show "Don't rush"
    document.getElementById("thinking-screen")
        .classList.remove("hidden");



    // After 3 seconds show the next screen
    setTimeout(function() {


        hideAll();


        document.getElementById("choice-screen")
            .classList.remove("hidden");


    }, 3000);

}





// Show final answer
function reveal() {


    hideAll();


    document.getElementById("answer-screen")
        .classList.remove("hidden");


}





// Restart the website
function restart() {


    hideAll();


    document.getElementById("question-screen")
        .classList.remove("hidden");


    document.getElementById("question-input")
        .value = "";


}