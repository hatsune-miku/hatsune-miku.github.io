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
                        <td>Sept 2021 - Aug 2023<br /> &#x3000;</td>
                        <td>
                            <b>MASc in Computer Engineering</b> <br />
                            @ Memorial University of Newfoundland
                        </td>
                    </tr>
                    <tr>
                        <td>Sept 2017 - Aug 2021<br /> &#x3000;</td>
                        <td>
                            <b>Bachelor of Computer Science</b> <br />
                            @ Capital Normal University
                        </td>
                    </tr>
                </tbody>
            </table>
        </Box>
    </>
}
