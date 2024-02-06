import styles from './Portfolio.module.scss'
import sharedStyles from "./Shared.module.scss"
import { Button, Card, Chip, Divider, Stack, Typography } from '@mui/joy';
import Color from '../utils/color'
import { Download, Email, VideoLibrary } from '@mui/icons-material';
import useIsMobile from '../utils/is_mobile';
import useDarkMode from '../utils/is_darkmode';

function Portfolio() {
    const divider = <Divider sx={{ width: '12px' }} orientation="vertical" />
    const colorSecondary = Color.accent("neutral")
    const isMobile = useIsMobile()
    const isDarkMode = useDarkMode()

    function handleDownloadResume() {
        window.open("brian-resume-fullstack.pdf")
    }

    function handleNavigateToContactInfo() {
        window.location.href = "#contact-info"
    }

    function handleViewAirXVideo() {
        window.location.href = "#airx-video"
    }

    return (
        <Stack
            direction={isMobile ? "column" : "row"}
            className={sharedStyles.section}
            divider={divider}
        >
            <Stack direction="column" sx={{
                minWidth: isMobile ? '280px' : '380px',
                width: isMobile ? '280px' : '380px',
            }}>
                <Typography
                    level="h1"
                    color="primary"
                >
                    👋Hi, I'm Brian.
                </Typography>

                <Card style={{
                    padding: isMobile ? '24px 18px' : '24px',
                    borderRadius: '24px',
                    width: '320px',
                    margin: isMobile ? '12px 0 12px -12px' : '12px 0',
                }} variant="outlined">
                    <table>
                        <tbody style={{ fontSize: '14px' }}>
                            <tr><td><Typography level="h4">I am</Typography></td></tr>
                            <tr><td>
                                - <Chip>Full Stack</Chip> Developer
                            </td></tr>
                            <tr><td>
                                - <Chip>
                                    <i className={`${styles.icon} fa-brands fa-android`} />
                                    Android
                                </Chip> /&nbsp;
                                <Chip>
                                    <i className={`${styles.icon} fa-brands fa-apple`} />
                                    iOS
                                </Chip> Native Developer
                            </td></tr>
                            <tr><td>
                                - <Chip>
                                    <img src="flutter_logo.svg" style={{ width: '12px', margin: '0 4px' }} />
                                    Flutter
                                </Chip> /&nbsp;
                                <Chip>
                                    <i className={`${styles.icon} fa-brands fa-react`} />
                                    React Native
                                </Chip> Developer

                            </td></tr>
                            <tr><td>
                                - <Chip>
                                    <img src="xposed.svg" style={{ width: '12px', margin: '0 4px' }} />
                                    Xposed Modules
                                </Chip> Developer
                            </td></tr>
                            <tr><td>
                                - <Chip>
                                    <i className={`${styles.icon} fa-brands fa-windows`} />
                                    Windows KMDF
                                </Chip> Developer
                            </td></tr>
                            <tr><td>- <b>Programming Enthusiast</b></td></tr>
                            <tr><td>- <b style={{ color: '#39c5bb' }}>Hatsune Miku</b> Fan</td></tr>
                        </tbody>
                    </table>
                    <Stack direction="row" spacing={1}>
                        <Button color="primary" startDecorator={<Download />} onClick={handleDownloadResume}>
                            Resumé
                        </Button>

                        <Button color="neutral" startDecorator={<Email />} onClick={handleNavigateToContactInfo}>
                            Email
                        </Button>
                    </Stack>
                </Card>
            </Stack>

            <Stack direction="column">
                <Typography level="h3" color="primary" sx={{ color: Color.text(isDarkMode) }}>
                    "I like to say that every computer and smartphone is a friend of mine."
                </Typography>

                <br />

                <Typography level="h3" color="primary" sx={{ color: Color.text(isDarkMode) }}>
                    As a
                    <span style={{ color: colorSecondary }}> new grad </span>
                    with a Master's degree in Computer Engineering,
                    however, I have explored and practiced for
                    <span style={{ color: colorSecondary }}> 16 years </span>
                    in IT-related areas, specializing in various
                    mainstream
                    <span style={{ color: colorSecondary }}> frontend and backend </span>
                    frameworks and technologies.
                </Typography>

                <br />

                <Typography level="h3" color="primary" sx={{ color: Color.text(isDarkMode) }}>
                    Recently, I led a team of 4 to develop
                    <span style={{ color: colorSecondary }}> AirX, a better AirDrop </span>
                    - copy and paste across Windows, macOS & Linux! Please feel free to
                </Typography>

                <br />

                <Stack direction="row" alignItems="center">
                    <Button size="lg" startDecorator={<VideoLibrary />} onClick={handleViewAirXVideo}>
                        Watch AirX Demo Video
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Portfolio
