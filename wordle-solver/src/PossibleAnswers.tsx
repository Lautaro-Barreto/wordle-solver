import { WordList } from "./WordList";

import dictionaryFile from '../wordle-dictionary.txt?raw';
import answersFile from '../past-wordle-answers.txt?raw';
import type { useLayoutEffect } from "react";

function createFilters(formData) {

    const correctLetters : string[] = ["", "", "", "", ""];
    const misplacedLetters : string[][] = [["", "", "", "", ""]];
    const missingLetters : string[] = [];  
    let excludePrevious : boolean = false;

    if(JSON.stringify(formData) === '{}' || formData === null) return { correctLetters, misplacedLetters, missingLetters, excludePrevious };
//misplaced-letter-${num}-row-${rowIndex + 1}
    for (const key in formData) {

        if (key.includes("correct-letter")) {
            const index = parseInt(key.split("-")[2]) - 1;
            correctLetters[index] = formData[key]?.toString().toUpperCase() || "";
        }
        else{
            if (key.includes("misplaced-letter") ) {
                const rowIndex = parseInt(key.split("-")[2]) - 1;
                if(misplacedLetters.length < rowIndex + 1) {
                    misplacedLetters.push(["", "", "", "", ""]);
                }
                const row = parseInt(key.split("-")[4])-1;
                const col = parseInt(key.split("-")[2])-1;
                misplacedLetters[row][col] = formData[key]?.toString().toUpperCase() || "";
            }
            else{
                if (key.includes("missing-letter")) {
                    missingLetters.push(formData[key]?.toString().toUpperCase() || "");
                }
                 else{
                    if (key.includes("exclude-previous")) {
                        if (formData[key]) {
                        excludePrevious = true;
                        }
                    } 
                }   
            }  
        }
    }

    return { correctLetters, misplacedLetters, missingLetters, excludePrevious };
}

function filterWords(formData: FormData) {

    let allWords : string[] = dictionaryFile.split("\r").map(str => str.trim());
    const filteredWords : string[] = [];
    const previousAnswers : string[] = answersFile.split(" ").map(str => str.trim());

    const { correctLetters, misplacedLetters, missingLetters, excludePrevious } = createFilters(formData);

    if(JSON.stringify(formData) === '{}' || formData === null) return allWords;

    if (excludePrevious) {
        const set = new Set(previousAnswers);
        const allWordsCopy = [...allWords];
        allWords = allWordsCopy.filter(word => !set.has(word));
    }    

    //input name={`misplaced-letter-${num}-row-${rowIndex + 1}`}
    for (const word of allWords) {
        let isValid = true;
        
        if (excludePrevious && previousAnswers.includes(word)){
            allWords.splice(allWords.indexOf(word), 1);
            filteredWords.push(word);
            continue;
        }

        for(const letter of missingLetters) {
            if (word.includes(letter)) {
                isValid = false;
                break;
            }
        }

        for (let i = 0; i < 5; i++) {
            if (correctLetters[i] && correctLetters[i].toUpperCase() !== word[i]) {
                isValid = false;
                break;
            }
        }

        for (const row of misplacedLetters) {
            let i = 0;
            for (const letter of row) {
                if (word[i] === letter || (letter !== "" && !word.includes(letter))) {
                    isValid = false;
                    break;
                }
                i++;
            }
            if (!isValid) break;
        }

        if (!isValid) {
            filteredWords.push(word);
        }
    }

    const setFil = new Set(filteredWords);
    return allWords.filter(word => !setFil.has(word));
}

export function PossibleAnswers({ data }) {

    const filteredList : string[] = filterWords(data);
    return(
        <>
        <h2 style={{textAlign: "center", marginTop: "20px"}}>Possible Answers</h2>
        <p style={{textAlign: "center", marginTop: "20px"}}>Found {filteredList.length} words</p>
        <WordList words={filteredList} />
        </>
    )
}