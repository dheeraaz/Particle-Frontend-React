export function capitalizeSentences(input) {
    if (!input) return input; // Handle empty or null input

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
    if (!input) return input; // Handle empty or null input

    // Split the input based on spaces
    let words = input.split(" ");

    // Iterate through the sentences array and capitalize the first letter of each words
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].trim().charAt(0).toUpperCase() + words[i].slice(1);
        // adds spaces before every words
        if (i !== 0) {
            words[i] = " " + words[i];
        }
    }

    // Join the words back together
    return words.join('');
}
