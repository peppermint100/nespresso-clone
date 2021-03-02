import {
    DeveloperBoardOutlined,
    FindInPageOutlined,
    GitHub,
} from "@material-ui/icons";
import React from "react";
import useStyles from "./styles";

const Footer = () => {
    const classes = useStyles();
    const footerLinks = [
        {
            text: "Github",
            icon: <GitHub />,
            link: "https://github.com/peppermint100?tab=repositories",
        },
        {
            text: "Blog",
            icon: <DeveloperBoardOutlined />,
            link: "https://velog.io/@peppermint100",
        },
        {
            text: "Resume",
            icon: <FindInPageOutlined />,
            link:
                "https://www.notion.so/InGyu-Lee-f4154d57e3ad48f094ed8210e5774881",
        },
    ];

    return (
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                {footerLinks.map((link) => (
                    <a
                        href={link.link}
                        key={link.text}
                        className={classes.linkContainer}
                    >
                        <div className={classes.icon}>{link.icon}</div>
                        <div className={classes.text}>{link.text}</div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Footer;
