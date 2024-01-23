import sharedStyles from "./Shared.module.scss"
import { Box, Divider, Link, List, ListItem, ListItemDecorator, Tooltip, Typography } from "@mui/joy"
import { Email, GitHub, LinkedIn, Person, Phone } from "@mui/icons-material"
import styles from "./ContactInfo.module.scss"
import React from "react"

function 呜呜呜() {
    for (let i = 0; i < 6; ++i) {
        console.log("给个工作吧 也太难找了")
        console.log("HIRE ME HIRE ME HIRE ME")
    }
}

export default function ContactInfo() {
    // @ts-ignore
    React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && 呜呜呜()

    return <>
        <Box id="contact-info" className={sharedStyles.section} sx={{ flexDirection: 'column' }}>
            <Typography level="h1" color="primary">
                Contact Information
            </Typography>

            <List>
                <ListItem>
                    <Divider component="div" role="presentation" orientation="horizontal">
                        Canada
                    </Divider>
                </ListItem>

                <ListItem>
                    <ListItemDecorator><Person /></ListItemDecorator>
                    <Typography>Zhen (Brian) Guan</Typography>
                </ListItem>

                <ListItem>
                    <ListItemDecorator><Email /></ListItemDecorator>
                    <Link href="mailto:zguan@mun.ca">
                        zguan@mun.ca
                    </Link>
                </ListItem>

                <ListItem>
                    <ListItemDecorator><Phone /></ListItemDecorator>
                    <Link href="tel:+17092224031">
                        (709) 222-4031
                    </Link>
                </ListItem>

                <ListItem>
                    <ListItemDecorator><LinkedIn /></ListItemDecorator>
                    <Link href="https://www.linkedin.com/in/brian-guan">
                        linkedin.com/in/brian-guan
                    </Link>
                </ListItem>

                <ListItem>
                    <ListItemDecorator><GitHub /></ListItemDecorator>
                    <Link href="https://github.com/hatsune-miku">
                        github.com/hatsune-miku
                    </Link>
                </ListItem>

                <ListItem>
                    <Divider component="div" role="presentation" orientation="horizontal">
                        Mainland China
                    </Divider>
                </ListItem>

                <ListItem>
                    <ListItemDecorator>
                        {/* Bilibili */}
                        <Tooltip title="Bilibili is a Chinese video site." variant="plain">
                            <svg viewBox="0 0 512 512" className={styles.svg}>
                                <path
                                    d="M488.6 104.1C505.3 122.2 513 143.8 511.9 169.8V372.2C511.5 398.6 502.7 420.3 485.4 437.3C468.2 454.3 446.3 463.2 419.9 464H92C65.6 463.2 43.8 454.2 26.7 436.8C9.7 419.4 .8 396.5 0 368.2V169.8C.8 143.8 9.7 122.2 26.7 104.1C43.8 87.8 65.6 78.8 92 78H121.4L96.1 52.2C90.3 46.5 87.4 39.2 87.4 30.4C87.4 21.6 90.3 14.3 96.1 8.6C101.8 2.9 109.1 0 117.9 0C126.7 0 134 2.9 139.8 8.6L213.1 78H301.1L375.6 8.6C381.7 2.9 389.2 0 398 0C406.8 0 414.1 2.9 419.9 8.6C425.6 14.3 428.5 21.6 428.5 30.4C428.5 39.2 425.6 46.5 419.9 52.2L394.6 78L423.9 78C450.3 78.8 471.9 87.8 488.6 104.1H488.6zM449.8 173.8C449.4 164.2 446.1 156.4 439.1 150.3C433.9 144.2 425.1 140.9 416.4 140.5H96.1C86.5 140.9 78.6 144.2 72.5 150.3C66.3 156.4 63.1 164.2 62.7 173.8V368.2C62.7 377.4 66 385.2 72.5 391.7C79 398.2 86.9 401.5 96.1 401.5H416.4C425.6 401.5 433.4 398.2 439.7 391.7C446 385.2 449.4 377.4 449.8 368.2L449.8 173.8zM185.5 216.5C191.8 222.8 195.2 230.6 195.6 239.7V273C195.2 282.2 191.9 289.9 185.8 296.2C179.6 302.5 171.8 305.7 162.2 305.7C152.6 305.7 144.7 302.5 138.6 296.2C132.5 289.9 129.2 282.2 128.8 273V239.7C129.2 230.6 132.6 222.8 138.9 216.5C145.2 210.2 152.1 206.9 162.2 206.5C171.4 206.9 179.2 210.2 185.5 216.5H185.5zM377 216.5C383.3 222.8 386.7 230.6 387.1 239.7V273C386.7 282.2 383.4 289.9 377.3 296.2C371.2 302.5 363.3 305.7 353.7 305.7C344.1 305.7 336.3 302.5 330.1 296.2C323.1 289.9 320.7 282.2 320.4 273V239.7C320.7 230.6 324.1 222.8 330.4 216.5C336.7 210.2 344.5 206.9 353.7 206.5C362.9 206.9 370.7 210.2 377 216.5H377z" />
                            </svg>
                        </Tooltip>
                    </ListItemDecorator>
                    <Link href="https://space.bilibili.com/20731192">
                        @蛋挞挞不是蛋w
                    </Link>
                </ListItem>

                <ListItem>
                    <ListItemDecorator>
                        {/* Wechat */}
                        <Tooltip title="WeChat is a Chinese IM software." variant="plain">
                            <svg viewBox="0 0 576 512" className={styles.svg}>
                                <path d="M385.2 167.6c6.4 0 12.6 .3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2 .1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3 .1 10-9.9 19.6-24.4 19.6z" />
                            </svg>
                        </Tooltip>
                    </ListItemDecorator>
                    <Typography>
                        eggtartc
                    </Typography>
                </ListItem>

                <ListItem>
                    <ListItemDecorator>
                        {/* QQ */}
                        <Tooltip title="QQ is a Chinese IM software." variant="plain">
                            <svg viewBox="0 0 448 512" className={styles.svg}>
                                <path d="M433.8 420.4c-11.5 1.4-44.9-52.7-44.9-52.7 0 31.3-16.1 72.2-51.1 101.8 16.8 5.2 54.8 19.2 45.8 34.4-7.3 12.3-125.5 7.9-159.6 4-34.1 3.8-152.3 8.3-159.6-4-9-15.3 28.9-29.2 45.8-34.4-34.9-29.5-51.1-70.4-51.1-101.8 0 0-33.3 54.1-44.9 52.7-5.4-.7-12.4-29.6 9.3-99.7 10.3-33 22-60.5 40.1-105.8C60.7 98.1 109 0 224 0c113.7 0 163.2 96.1 160.3 215 18.1 45.2 29.9 72.9 40.1 105.8 21.8 70.1 14.7 99.1 9.3 99.7z" />
                            </svg>
                        </Tooltip>
                    </ListItemDecorator>
                    <Typography>
                        894859145
                    </Typography>
                </ListItem>
            </List>
        </Box >
    </>
}
