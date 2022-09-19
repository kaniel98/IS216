//================================================
// DO NOT MODIFY THIS CONSTANT VARIABLE
//================================================
const stars_dataset = [
    {
        "Ryan Gosling": ["sm_bg_ryan.jpg", "I'm going to make a movie about 'Hey Girl.'", "https://en.wikipedia.org/wiki/Ryan_Gosling"],
        "Zac Efron": ["sm_bg_zac.jpg", "A girl can tell I like her when I blush or start telling bad jokes.", "https://en.wikipedia.org/wiki/Zac_Efron"],
        Eminem: ["sm_bg_eminem.jpg", "I am whatever you say I am; if I wasn't, then why would you say I am.", "https://en.wikipedia.org/wiki/Eminem"],
    },
    {
        "Irina Shayk": ["sm_bg_irina.jpg", "I am trying to concentrate on books. You know, I love Dostoevsky. He's my favorite writer.", "https://en.wikipedia.org/wiki/Irina_Shayk"],
        "Anna Kendrick": ["sm_bg_anna.jpg", "An actor should always let humility outweigh ambition.", "https://en.wikipedia.org/wiki/Anna_Kendrick"],
        "Taylor Swift": ["sm_bg_taylor.jpg", "I'm intimidated by the fear of being average.", "https://en.wikipedia.org/wiki/Taylor_Swift"],
    },
];

// [TODO] IMPLEMENT THIS FUNCTION
// When the webpage loads, the web browser will call this function.
// Randomly determine whether to show "male" stars or "female" stars
function display_default() {
    // YOUR CODE GOES HERE
    // Look for "[IMPORTANT]" inside challenge10.html file.
    // It tells you what elements need to be updated by JavaScript functions.
    // [IMPORTANT] Buttons
    //
    // When displaying "male" stars:
    //  - "Show Male Stars" button must be "disabled" (the user cannot click on it)
    //  - "Show Female Stars" button must be activated (the user should be able to click on it)
    //
    // When displaying "female" stars:
    //  - "Show Male Stars" button must be activated (the user should be able to click on it)
    //  - "Show Female Stars" button must be "disabled" (the user cannot click on it)
    let random = Math.floor(Math.random() * 2 + 1);

    if (random === 1) {
        show_male_stars();
    } else {
        show_female_stars();
    }
}

// [TODO] IMPLEMENT THIS FUNCTION
// When "Show Male Stars" button is clicked, the web browser calls this function.
function show_male_stars() {
    // YOUR CODE GOES HERE
    // Elements to be edited
    let wiki_page = ["wiki1", "wiki2", "wiki3"];
    let carousel_photo = ["image1", "image2", "image3"];
    let carousel_header = ["slide_heading1", "slide_heading2", "slide_heading3"];
    let carousel_title = ["slide_title1", "slide_title2", "slide_title3"];
    // For loop with a range of 3
    let counter = 0;
    male_stars = stars_dataset[0];
    console.log(male_stars);
    for (let star in male_stars) {
        let star_details = male_stars[star];
        // Update the wiki page
        document.getElementById(wiki_page[counter]).setAttribute("href", star_details[2]);
        document.getElementById(wiki_page[counter]).innerText = star;

        // Update the carousel photo
        document.getElementById(carousel_photo[counter]).setAttribute("src", `/session5/challenges/Bootstrap5/resources/images/${star_details[0]}`);

        //Update the carousel photo title
        document.getElementById(carousel_header[counter]).innerText = star;
        document.getElementById(carousel_title[counter]).innerText = star_details[1];

        //Increase the counter
        counter++;
    }

    //Disabling a button and enabling a button
    document.getElementById("male_button").disabled = true;
    document.getElementById("female_button").disabled = false;
}

// [TODO] IMPLEMENT THIS FUNCTION
// When "Show Female Stars" button is clicked, the web browser calls this function.
function show_female_stars() {
    // YOUR CODE GOES HERE
    // Elements to be edited
    let wiki_page = ["wiki1", "wiki2", "wiki3"];
    let carousel_photo = ["image1", "image2", "image3"];
    let carousel_header = ["slide_heading1", "slide_heading2", "slide_heading3"];
    let carousel_title = ["slide_title1", "slide_title2", "slide_title3"];
    // For loop with a range of 3
    let counter = 0;
    female_stars = stars_dataset[1];
    for (let star in female_stars) {
        let star_details = female_stars[star];
        // Update the wiki page
        document.getElementById(wiki_page[counter]).setAttribute("href", star_details[2]);
        document.getElementById(wiki_page[counter]).innerText = star;

        // Update the carousel photo
        document.getElementById(carousel_photo[counter]).setAttribute("src", `/session5/challenges/Bootstrap5/resources/images/${star_details[0]}`);

        //Update the carousel photo title
        document.getElementById(carousel_header[counter]).innerText = star;
        document.getElementById(carousel_title[counter]).innerText = star_details[1];

        //Increase the counter
        counter++;
    }

    //Disabling a button and enabling a button
    document.getElementById("male_button").disabled = false;
    document.getElementById("female_button").disabled = true;
}
