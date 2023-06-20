import styles from './CharacterInfo.module.css'
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

export function CharacterInfo() {
    const { code } = useParams()
    const [character, setCharacter] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`https://hp-api.onrender.com/api/character/${code}`)
            .then(response => response.json())
            .then(data => {
                setCharacter(data)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [code])

    if (loading) {
        return <div>Loading...</div>
    } else if (error) {
        return <div>error</div>
    } else {
        return (
            <>
                {character?.map((character, index) => (
                    <div className={styles.container} key={index}>

                        <div className={styles.image} style={{ backgroundImage: `url(${character.image})`}}> 
                        </div>

                        <div>
                            <section className={styles.header}>
                                <div className={styles.name}>
                                    {character.name}
                                </div>

                                <div className={styles.names}>
                                    {character.alternate_names[0]}
                                    <br />
                                    {character.alternate_names[1]}
                                </div>
                            </section>

                            <section>
                                <div className={styles.info}>
                                    <div>
                                        Species:
                                    </div>

                                    <div>
                                        {character.species}
                                    </div>
                                </div>

                                <div className={styles.info}>
                                    <div>
                                        House:
                                    </div>

                                    <div>
                                        {character.house}
                                    </div>
                                </div>

                                <div className={styles.info}>
                                    <div>
                                        Ancestry:
                                    </div>

                                    <div>
                                        {character.ancestry}
                                    </div>
                                </div>

                                <div className={styles.info}>
                                    <div>
                                        Patronus:
                                    </div>

                                    <div>
                                        {character.patronus}
                                    </div>
                                </div>

                                <div className={styles.info}>
                                    <div>
                                        Actor:
                                    </div>

                                    <div>
                                        {character.actor}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                ))

                }
            </>
        )
    }


}