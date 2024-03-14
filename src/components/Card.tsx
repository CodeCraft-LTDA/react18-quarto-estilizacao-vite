import { CSSProperties } from "react"

export const Card = () => {

    const container: CSSProperties = {
        backgroundColor: "red", border: "1px solid red", width: 400, height: 400, color:"green"
    }
    

    return (
        <div style={container}>
            <h1>Card</h1>
        </div>
    )
}