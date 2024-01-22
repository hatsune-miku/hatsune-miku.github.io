import sharedStyles from "./Shared.module.scss"
import { Box, Typography } from "@mui/joy"

export default function Education() {
    return <>
        <Box className={sharedStyles.section} sx={{ flexDirection: 'column' }}>
            <Typography level="h1" color="primary">
                Education
            </Typography>

            <table>
                <tbody>
                    <tr>
                        <td>September 2021 - August 2023</td>
                        <td>MASc in Computer Engineering @ Memorial University of Newfoundland</td>
                    </tr>
                    <tr>
                        <td>September 2017 - August 2021</td>
                        <td>Bachelor of Computer Science @ Capital Normal University</td>
                    </tr>
                </tbody>
            </table>
        </Box>
    </>
}
