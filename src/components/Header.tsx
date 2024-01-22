import styles from "./Header.module.scss"
import { Chip } from "@mui/joy"
import LinkAirX from "./LinkAirX"

export default function Header() {
    return <>
        <div className={styles.header}>
            <Chip>LATEST PROJECT</Chip>
            &nbsp;
            See how <LinkAirX /> blurs the boundary between devices and platforms!
        </div>
    </>
}
