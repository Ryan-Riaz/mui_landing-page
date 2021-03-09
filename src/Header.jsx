import {
    AppBar,
    IconButton,
    makeStyles,
    Toolbar,
    Typography,
} from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SortIcon from "@material-ui/icons/Sort";
import { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    appBar: {
        background: "transparent",
    },
    appBarWrapper: {
        width: "80%",
        margin: "0 auto",
    },
    icon: {
        fontSize: "2rem",
        color: "#fff",
    },
    title: {
        flexGrow: 1,
        fontFamily: "'Nunito', sans-serif",
        fontWeight: "400",
    },
    colorText: {
        color: "#5aff3d",
    },
    hero: {
        height: "100vh",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    heroText: {
        fontSize: "4.8rem",
        fontFamily: "'Nunito', sans-serif",
        fontWeight: "bold",
    },
    heroIcon: {
        display: "block",
        fontSize: "4rem",
        marginTop: "28px",
        color: "#5aff3d",
    },
}));

const Header = () => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    const classes = useStyles();

    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appBar} elevation={0}>
                <Toolbar className={classes.appBarWrapper}>
                    <Typography className={classes.title} variant="h4">
                        My<span className={classes.colorText}>Island.</span>
                    </Typography>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Slide
                direction="up"
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
            >
                <div className={classes.hero}>
                    <Typography variant="h1" className={classes.heroText}>
                        Welcome to
                        <br />
                        My<span className={classes.colorText}>Island.</span>
                    </Typography>
                    <Scroll to="place-to-visit" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.heroIcon} />
                        </IconButton>
                    </Scroll>
                </div>
            </Slide>
        </div>
    );
};

export default Header;
