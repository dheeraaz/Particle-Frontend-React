export function capitalizeSentences(input) {
    if (!input) return ''; // Handle empty or null input | returns empty string for falsy values

    // Split the input based on full-stops, question marks and exclamation sign
    let sentences = input.split(/([.?!])/);

    // Iterate through the sentences array and capitalize the first letter of each sentence
    for (let i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].trim();
        if (sentences[i] !== "." && sentences[i] !== "?" && sentences[i] !== "!") {
            sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1);
            // adds spaces before every sentences
            if (i !== 0) {
                sentences[i] = " " + sentences[i];
            }
        }
    }

    // Join the sentences back together
    return sentences.join('');
}


export function capitalizeWords(input) {
    if (!input) return ''; // Handle empty or null input | returns empty string for falsy values

    // Split the input based on spaces
    let words = input.split(" ");

    // Iterate through the sentences array and capitalize the first letter of each words
    for (let i = 0; i < words.length; i++) {
        if(words[i].toLowerCase()==="of"){
            continue;
        }
        words[i] = words[i].trim().charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the words back together by adding spaces in between 
    return words.join(' ');
}
