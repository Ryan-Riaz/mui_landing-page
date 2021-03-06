import { makeStyles } from "@material-ui/core";
import Header from "./Header";
import PlaceToVisit from "./PlaceToVisit";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
}));

const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <PlaceToVisit />
        </div>
    );
};

export default App;
