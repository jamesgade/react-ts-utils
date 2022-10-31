import { useState, useEffect } from "react"
import rgbToHex from "./utils"

interface SingleColorProps {
    rgb: [number, number, number]
    weight: number
    index: number
    // hexColor: string
}

const SingleColor = ({ rgb, weight, index }: SingleColorProps) => {

    const [alert, setAlert] = useState(false);

    useEffect(() => {

        // setTimeout(() => {
        //     setAlert(false)
        // }, 3000)

        const timeOut = setTimeout(() => {
            setAlert(false)
        }, 3000)

        return () => clearTimeout(timeOut)

    }, [alert])

    // convert rgb to hex or use one from library(hexColor prop)
    const hex = rgbToHex(...rgb)

    return (
        <article
            className={`color ${index > 10 && "color-light"}`}
            style={{ backgroundColor: `rgb(${rgb.join(',')})` }}
            onClick={() => {
                setAlert(true)
                navigator.clipboard.writeText(hex)
            }}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{hex}</p>
            {alert && <p className="alert">copied to clipboard!</p>}
        </article>
    )
}

export default SingleColor;
