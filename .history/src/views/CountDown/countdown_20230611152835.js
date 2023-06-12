import { useState, useEffect } from "react";



const CountDown = () => {
    const [count, setCount] = useState(10)

    useEffect(() => {
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