import React, { useState } from "react";
import {
    Button,
    ButtonGroup,
    Divider,
    Drawer,
    Grid,
    Hidden,
    isWidthDown,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useTheme,
    withWidth,
} from "@material-ui/core";
import Logo from "./../../assets/logo-white.svg";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import {
    LocalCafeOutlined,
    Menu,
    PanoramaVerticalOutlined,
    PersonOutlined,
    ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import useStyles from "./style";

interface Props {
    width: Breakpoint;
}

const Navbar: React.FC<Props> = ({ width }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [drawerState, setDrawerState] = useState(false);
    const navTopRightMenuInfo = [
        {
            icon: <PersonOutlined />,
            text: "로그인",
            to: "/login",
        },
        {
            icon: <ShoppingCartOutlined />,
            text: "장바구니",
            to: "/cart",
        },
    ];

    const menuInfo = [
        {
            icon: <LocalCafeOutlined />,
            text: "커피 주문하기",
            to: "/capsules",
        },
        {
            icon: <PanoramaVerticalOutlined />,
            text: "머신 주문하기",
            to: "/machines",
        },
    ];

    const toggleDrawer = () => {
        setDrawerState(!drawerState);
    };

    return (
        <Grid container className={classes.container}>
            <Grid item xs={1} md={3} />
            <Grid item container xs={10} md={6}>
                <div className={classes.navTop}>
                    <Grid xs={2} item className={classes.navTopLeft}>
                        <Hidden mdUp>
                            <Button onClick={toggleDrawer}>
                                <Menu className={classes.menuIcon} />
                            </Button>
                            <Drawer open={drawerState} onClose={toggleDrawer}>
                                <div className={classes.drawerStyle}>
                                    <List
                                        component="nav"
                                        aria-label="main mailbox folders"
                                    >
                                        {menuInfo.map((menu) => (
                                            <Link
                                                key={menu.text}
                                                to={menu.to}
                                                style={{
                                                    color:
                                                        theme.palette.secondary
                                                            .light,
                                                }}
                                            >
                                                <ListItem button>
                                                    <ListItemIcon
                                                        className={
                                                            classes.listItemIcon
                                                        }
                                                    >
                                                        {menu.icon}
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={menu.text}
                                                    />
                                                </ListItem>
                                            </Link>
                                        ))}
                                    </List>
                                    <Divider />
                                </div>
                            </Drawer>
                        </Hidden>
                        <Link to="/">
                            <img
                                src={Logo}
                                className={classes.logoImg}
                                alt="logo"
                            />
                        </Link>
                    </Grid>
                    <Grid xs={5} item />
                    <Grid xs={5} item className={classes.navTopRight}>
                        <div className={classes.buttonContainer}>
                            {navTopRightMenuInfo.map((menu) => (
                                <Link to={menu.to} key={menu.text}>
                                    <Button
                                        variant="outlined"
                                        className={classes.buttonStyle}
                                    >
                                        {isWidthDown("sm", width)
                                            ? menu.icon
                                            : menu.text}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </Grid>
                </div>
                <div className={classes.navBottom}>
                    <ButtonGroup
                        disableElevation
                        variant="contained"
                        color="secondary"
                    >
                        {menuInfo.map((menu) => (
                            <Button
                                className={classes.menuButtonStyle}
                                key={menu.text}
                            >
                                <Link to={menu.to} style={{ color: "#fff" }}>
                                    {isWidthDown("sm", width)
                                        ? menu.icon
                                        : menu.text}
                                </Link>
                            </Button>
                        ))}
                    </ButtonGroup>
                </div>
            </Grid>
            <Grid item xs={1} md={3} />
        </Grid>
    );
};

export default withWidth()(Navbar);
