import useIsMobile from "../utils/is_mobile"
import sharedStyles from "./Shared.module.scss"
import { Box, Typography } from "@mui/joy"

const schools = [
    {
        timespan: "Sept 2021 - Aug 2023",
        degree: "MASc in Computer Engineering",
        school: "Memorial University of Newfoundland"
    },
    {
        timespan: "Sept 2017 - Aug 2021",
        degree: "Bachelor of Computer Science",
        school: "Capital Normal University"
    }
]

export default function Education() {
    const isModule = useIsMobile()

    return <>
        <Box className={sharedStyles.section} sx={{ flexDirection: 'column' }}>
            <Typography level="h1" color="primary">
                Education
            </Typography>

            <table>
                <tbody>
                    {
                        isModule
                            ? schools.map((school, i) => {
                                return <>
                                    <tr><td>
                                        {school.timespan}
                                    </td></tr>
                                    <tr><td>
                                        <b>{school.degree}</b>
                                    </td></tr>
                                    <tr><td>
                                        @ {school.school}
                                    </td></tr>
                                    {
                                        i !== schools.length - 1
                                            ? <tr><td>
                                                &#x3000;
                                            </td></tr>
                                            : null
                                    }
                                </>
                            })
                            : schools.map(school => {
                                return <tr>
                                    <td>{school.timespan}<br /> &#x3000;</td>
                                    <td>
                                        <b>{school.degree}</b> <br />
                                        @ {school.school}
                                    </td>
                                </tr>
                            })
                    }
                </tbody>
            </table>
        </Box>
    </>
}
