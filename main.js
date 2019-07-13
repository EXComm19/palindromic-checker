window.onload = function () {
    const btn = document.getElementById("submit-btn")

    btn.addEventListener("click", function (event) {
        event.preventDefault()
        const word = document.getElementById('input').value

        checkPalindrome(word)
    });
}

function checkPalindrome(word) {
    const lower = word.toLowerCase()
    const arr = lower.split("")
    const revarr = arr.reverse()
    const reverse = revarr.join("")

    if (reverse == lower) {
        console.log('Palindrome');
    } else {
        console.log('not Palindrome');
        console.log(reverse);
        
    }
}

