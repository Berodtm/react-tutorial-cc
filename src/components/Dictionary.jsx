import { useEffect, useState } from "react";



export default function Dictionary() {
    const [word, setWord] = useState('');
    const [word2, setWord2] = useState('')

    useEffect(() => {
        console.log('State Updated, word1: ', word)
    }, [])
    useEffect(() => {
        console.log('State Updated, word2: ', word2)
    }, [word2])
    return (
        <>
            <input onChange={(e) => {
                setWord(e.target.value)
            }} type="text" />
            <h2>Let's get the definition for word1: {word}</h2>
            <input onChange={(e) => {
                setWord2(e.target.value)
            }} type="text" />
            <h2>Let's get the definition for word 2: {word2}</h2>
        </>
    )
}