import { useEffect } from "react";

const Alert = ({ type, message, removeAlert, list }: any) => {

    useEffect(() => {

        const timeout = setTimeout(() => {
            removeAlert()
        }, 3000)

        return () => clearTimeout(timeout)

    }, [list])

    return (
        <p className={`alert alert-${type}`}>{message}</p>
    )
}

export default Alert
