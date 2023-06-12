import { useState, useEffect } from "react";



const CountDown = () => {
    const [count, setCount] = useState(10)

    useEffect(() => {
        setInterval(() => {
            setCount(count - 1);
        }, 1000)
    }, [count])

    return (
        <div>{count} - hook</div>
    )
}

export { CountDown };