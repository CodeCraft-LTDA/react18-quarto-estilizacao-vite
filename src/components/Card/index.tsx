// import styles from "./styles"
// import "./Card.css"
import { CardTitle } from "../CardTitle"
import styles from "./Card.module.css"

export const Card = () => {
    return (
        // <div style={styles.container}>
        // <div id="container">
        <div className={styles.container}>
            <h1>Card</h1>
            <CardTitle />
        </div>
    )
}