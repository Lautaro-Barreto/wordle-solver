import { useState } from "react";
import { WordList } from "./WordList";

import dictionaryFile from '../wordle-dictionary.txt?raw';
import answersFile from '../past-wordle-answers.txt?raw';

function filterWords(formData) {

    const allWords : string[] = dictionaryFile.split("\r").map(str => str.trim());
    const filteredWords : string[] = [];
    const previousAnswers : string[] = answersFile.split(" ").map(str => str.trim());

    const correctLetters : string[] = ["", "", "", "", ""];
    const misplacedLetters : string[][] = [];
    const missingLetters : string[] = [];  

    let changed : boolean = false;
    let excludePrevious : boolean = false;

    for (const key in formData) {

        if (key.includes("correct-letter")) {
            const index = parseInt(key.split("-")[2])-1;
            correctLetters[index] = formData[key].toString().toUpperCase();
        } else if (key.includes("misplaced-letter")) {
            const [_, __, ___, ____] = key.split("-");
            const rowIndex = parseInt(____)-1;
            if (!misplacedLetters[rowIndex]) {
                misplacedLetters[rowIndex] = ["", "", "", "", ""];
            }
            misplacedLetters[rowIndex][parseInt(__)-1] = formData[key].toString().toUpperCase();
        } else if (key.includes("missing-letter")) {
            missingLetters.push(formData[key].toString().toUpperCase());
        } else if (key.includes("exclude-previous")) {
            if (formData[key]) {
                excludePrevious = true;
            }
        }
    }   
    
        for (const word of allWords) {
        let isValid = true;
        
        if (excludePrevious && previousAnswers.includes(word)) continue;

        for(const letter of missingLetters) {
            if (word.includes(letter)) {
                isValid = false;
                break;
            }
        }

        for (const row of misplacedLetters) {
            for (const letter of row) {
                if (!word.includes(letter)) {
                    isValid = false;
                    break;
                }
            }
            if (!isValid) break;
        }

        for (let i = 0; i < 5; i++) {
            
            if (correctLetters[i] && correctLetters[i].toUpperCase() !== word[i]) {
                isValid = false;
                break;
            }
            
            if (misplacedLetters[i] && misplacedLetters[i][i] === word[i]) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            filteredWords.push(word);
            changed = true;
        }
    }

    if (!changed) return allWords;
    else if (filteredWords.length == 0) return ["Sorry, no words found :("];


    return filteredWords;
}

export function PossibleAnswers({ data }) {

    const filteredList : string[] = filterWords(data);
    return(
        <>
        <p style={{textAlign: "center", marginTop: "20px"}}>Found {filteredList.length} words</p>
        <WordList words={filteredList} />
        </>
    )
}