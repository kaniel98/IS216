// [IMPORTANT]
// DO NOT MODIFY challenge12.html content
// YOU MUST WORK WITH WHAT IS GIVEN TO YOU

// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function highlight_words() {
    let string_length = numberInput(window.prompt("Enter the length of the words to be highlighted: "));
    if (!string_length) {
        alert("Invalid input!");
        return;
    }

    // YOUR CODE GOES HERE
    var labels = document.getElementsByTagName("span");
    var paragraphs = document.getElementsByTagName("p");
    for (paragraph in paragraphs) {
        // Go through each word in the paragraph, if more than string length, highlight that word
        if (paragraphs[paragraph].innerHTML != null || paragraphs[paragraph].innerHTML != undefined) {
            var words = paragraphs[paragraph].innerHTML.split(" ");
            for (let i = 0; i < words.length; i++) {
                if (words[i].length === string_length) {
                    words[i] = "<span style='background-color:yellow';>" + words[i] + "</span>";
                }
            }
            paragraphs[paragraph].innerHTML = words.join(" ");
        }
    }
}

//Validate number input
function numberInput(number) {
    if (number == null || number == "") {
        return false;
    } else if (isNaN(number)) {
        return false;
    }
    return parseInt(number);
}

// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_num_words() {
    // YOUR CODE GOES HERE
}

// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_emoticons() {
    // YOUR CODE GOES HERE
}
