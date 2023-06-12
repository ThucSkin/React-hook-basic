import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";



const CountDown = () => {
    const [count, setCount] = useState(10)

    useEffect(() => {
        if (count === 0) {
            alert('Timed out')
            return
        }
        let timer = setInterval(() => {
            setCount(count - 1);
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [count])

    return (
        <div>{count} - hook</div>
    )
}

export { CountDown };