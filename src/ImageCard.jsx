import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles({
    root: {
        maxWidth: 645,
        background: "rgba(0,0,0,.7)",
        margin: "20px",
    },
    media: {
        height: 440,
    },
    title: {
        fontSize: "2rem",
        color: "#fff",
        fontFamily: "'Nunito', sans-serif",
        fontWeight: "bold",
    },
    desc: {
        fontSize: "1.1rem",
        color: "#fff",
        fontFamily: "'Nunito', sans-serif",
    },
});

export default function ImageCard({ place }) {
    const classes = useStyles();

    return (
        <Card className={classes.root} id="place-to-visit">
            <CardMedia
                className={classes.media}
                image={place.imageUrl}
                title={place.title}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.title}
                >
                    {place.title}
                </Typography>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.desc}
                >
                    {place.description}
                </Typography>
            </CardContent>
        </Card>
    );
}
