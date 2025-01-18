// Select elements
const formTitle = document.getElementById("formTitle");
const formSubtitle = document.getElementById("formSubtitle");
const submitButton = document.getElementById("submitButton");
const switchText = document.getElementById("switchText");
const switchButton = document.getElementById("switchButton");
const authForm = document.getElementById("authForm");

// Current form state (signIn or signUp)
let isSignIn = true;

// Toggle form state
function toggleForm() {
    isSignIn = !isSignIn;

    if (isSignIn) {
        formTitle.textContent = "Welcome Back";
        formSubtitle.textContent = "Sign in to access your account";
        submitButton.textContent = "Sign In";
        switchText.innerHTML = "Don't have an account? <span id='switchButton'>Sign Up</span>";
    } else {
        formTitle.textContent = "Join Us";
        formSubtitle.textContent = "Sign up to get started";
        submitButton.textContent = "Sign Up";
        switchText.innerHTML = "Already have an account? <span id='switchButton'>Sign In</span>";
    }

    // Reattach event listener to new switch button
    document.getElementById("switchButton").addEventListener("click", toggleForm);
}

// Attach event listener
switchButton.addEventListener("click", toggleForm);
