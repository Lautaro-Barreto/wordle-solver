import { Word } from "./Word";

export function WordList({words}: {words: string[]}) {
    return (
       <div>
            {words.map((word) => (
                <Word key={word} content={word} />
            ))}
        </div>
    )
}