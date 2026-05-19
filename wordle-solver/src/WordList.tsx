function Word({content}: {content: string}){
    return(
        <div className="word-list-item">{content}</div>
    )
}

export function WordList({words}: {words: string[]}) {
    return (
       <div>
            {words.map((word) => (
                <Word key={word} content={word} />
            ))}
        </div>
    )
}