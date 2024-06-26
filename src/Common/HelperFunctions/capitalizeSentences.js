export default function capitalizeSentences(input) {
    if (!input) return input; // Handle empty or null input

    // Split the input based on full-stops, question marks and exclamation sign
    // Split the input based on full-stops, question marks and exclamation sign
    let sentences = input.split(/([.?!])/);

    // Iterate through the sentences array and capitalize the first letter of each sentence
    for (let i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].trim();
        if (sentences[i].length > 1) {
            sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1);
            // adds spaces before every sentences
            if(i!==0){
                sentences[i] = " " + sentences[i];
            }
        }
    }

    // Join the sentences back together
    return sentences.join('');
}
