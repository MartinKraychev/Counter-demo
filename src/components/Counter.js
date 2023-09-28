import { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)
    const [direction, setDirection] = useState('No direction')
    const [movedBy, setMovedBy] = useState(0)

    const incrementCounter = () => {
        const moveIndex = 1
        setCount(oldCount => oldCount + moveIndex)
        setDirection('Increasing')
        setMovedBy(moveIndex)
    }

    const doubleIncrementCounter = () => {
        const moveIndex = 2
        setCount(oldCount => oldCount + moveIndex)
        setDirection('Increasing')
        setMovedBy(moveIndex)
    }

    const decrementCounter = () => {
        const moveIndex = 1
        setCount(oldCount => oldCount - moveIndex)
        setDirection('Decreasing')
        setMovedBy(moveIndex)
    }

    const doubleDecrementCounter = () => {
        const  moveIndex = 2
        setCount(oldCount => oldCount - moveIndex)
        setDirection('Decreasing')
        setMovedBy(moveIndex)
    }

    const resetCounter = () => {
        const moveIndex = 0
        setCount(moveIndex)
        setDirection('No direction')
        setMovedBy(moveIndex)
    }

    const moveByString = movedBy !== 0 ? `${direction} by ${movedBy}` : `${direction}`
    let title = ''
    let fontColor = ''
    if (count < 0) {
        title = 'Negative Counter'
        fontColor = 'white'
    } else if (count < 10) {
        title = 'Counter'
        fontColor = 'yellow'
    } else if (count < 20) {
        title = 'Mega Counter'
        fontColor = 'green'
    } else {
        title = 'MONSTER COUNTER'
        fontColor = 'red'
    }

    return (
        <div>
            <h1 style={{fontSize: 16 + count + 'px', color: `${fontColor}`}}>{title}</h1>
            <h2>{moveByString}</h2>
            <h2>{count}</h2>
            <button onClick={doubleDecrementCounter}>--</button>
            <button onClick={decrementCounter}>-</button>
            <button onClick={resetCounter}>Reset</button>
            <button onClick={incrementCounter}>+</button>
            <button onClick={doubleIncrementCounter}>++</button>
        </div>
    )
}