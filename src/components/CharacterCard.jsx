import { Link } from "react-router-dom"
import styles from './CharacterCard.module.css'
export function CharacterCard({ code, name, image }) {
    return (
        <Link to={`Character/${code}`}>
            <article className={styles.card}>
                <div className={styles.cardName}>
                    {name}
                </div>
                
                <div className={styles.image}
                    style={{
                        backgroundImage: `url(${image})`
                    }}
                >
                </div>

                
            </article>
        </Link>
    )
}