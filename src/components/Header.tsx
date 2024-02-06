import styles from "./Header.module.scss"
import { Chip } from "@mui/joy"
import LinkAirX from "./LinkAirX"
import { useState } from "react"

export default function Header() {
    const [counter, setCounter] = useState(0)

    function handleClickOnLatestProject() {
        setCounter(counter + 1)
    }

    return <>
        <div className={styles.header}>
            <a href="https://hits.seeyoufarm.com" style={{ display: counter > 10 ? 'flex' : 'none' }}>
                <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fhatsune-miku&count_bg=%237CD2FF&title_bg=%23FF98D8&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false" />
            </a>
            <span>
                <Chip onClick={handleClickOnLatestProject}>
                    LATEST PROJECT
                </Chip>&nbsp;See how <LinkAirX /> blurs the boundary between devices and platforms!
            </span>
        </div>
    </>
}
