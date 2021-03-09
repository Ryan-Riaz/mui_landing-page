import { makeStyles } from "@material-ui/core";
import ImageCard from "./ImageCard";
import place from "./static/data";

const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
        },
    },
}));

const PlaceToVisit = () => {
    const classes = useStyle();
    // const checked = useWindowPosition("header");
    return (
        <div className={classes.root}>
            <ImageCard place={place[0]} />
            <ImageCard place={place[1]} />
        </div>
    );
};

export default PlaceToVisit;
