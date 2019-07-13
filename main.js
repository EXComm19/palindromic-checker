window.onload = function () {
    const btn = document.getElementById("submit-btn")

    btn.addEventListener("click", function (event) {
        event.preventDefault()
        const word = document.getElementById('input').value

        checkPalindrome(word)
    });
}

function checkPalindrome(word) {
    document.getElementById('o-label').textContent = word + " is :"

    const lower = word.toLowerCase()
    const arr = lower.split("")
    const revarr = arr.reverse()
    const reverse = revarr.join("")

    if (reverse == lower) {
        document.getElementById('output').textContent = "a Palindrome"
    } else {
        document.getElementById('output').textContent = "Not a Palindrome"
    }
}

