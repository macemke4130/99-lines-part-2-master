// An array of my friends --
let friends = ["Lilah", "Sarah", "Tony", "Brandon", "Dan"];

// Set variables for the song lyrics --
let line1 = " lines of code in the file, "
let line2 = " lines of code; "
let line3 = " strikes one out, clears it all out, ";
let line4 = " lines of code in the file";

let penultimateLine = " line of code in the file";

let lastLine1 = " line of code in the file, 1 line of code; ";
let lastLine2 = " strikes one out, clears it all out, no more lines of code in the file";

// Loop through the friends array --
for (let index = 0; index < friends.length; index++) {
    console.log(friends[index] + ":"); // Displays Name: --
    let myCurrentFriend = index; // Stores Name for the next loop --
    // Loops through lyrics --
    for (let index = 99; index > 0; index--) {
        if (index > 1 && index != 2) { // If statement determines which lyrics to compile --
            let nextLine = index - 1 // Creates varable for the final or next number in the lyric --
            // Compiles lyrics --
            let lyrics = index + line1 + index + line2 + friends[myCurrentFriend] + line3 + nextLine + line4;
            console.log(lyrics);
        } else if (index == 2) { // Catches if lyric should be "line" or "lines" --
            // Compiles lyrics --
            let nextLine = index - 1
            let lyrics = index + line1 + index + line2 + friends[myCurrentFriend] + line3 + nextLine + penultimateLine;
            console.log(lyrics);
        } else { // Catches the final lyric --
            // Compiles lyrics --
            let lyrics = index + lastLine1 + friends[myCurrentFriend] + lastLine2;
            console.log(lyrics);
        }

    }
}