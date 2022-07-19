const palindromes = function (sentence) { 
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g;
    const reversedSentence = [...sentence]
                                .reverse()
                                .join('')
                                .toLowerCase()
                                .replace(regex,"");
    const newSentence = [...sentence]
                            .join('')
                            .toLowerCase()
                            .replace(regex,"");
    newSentence === reversedSentence ? true : false ;
};










// /[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""
// Do not edit below this line
module.exports = palindromes;


function reverseSentence(string) {
    return [...string].filter(char => { char!== ',' && char!== ' ' && char!== '.'})
        .reverse()
        .join('')
        .toLowerCase();
}