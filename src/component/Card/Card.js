/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import { red } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "400px",
    backdropFilter: "blur(50px)",
    backgroundColor: "#202a4455 ",
    color: "white",
    margin: "0px 10px 15px 10px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 5px 10px black",
    borderRadius: "30px",
    direction: "rtl",
  },
  text: {
    margin: "auto",
    maxWidth: 345,
  },
  more: {
    textAlign: "center",
    margin: "auto",
    "&:hover": {
      borderBottom: "3.5px solid red",
      cursor: "pointer",
    },
  },

  textarea: {
    textAlign: "justify",
    // padding: "10px",
  },
  Text: {
    padding: "10px 10px 15px 10px",
  },
  media: {
    height: "300px",
    margin: "auto",
    padding: "35px",
  },
  expand: {
    transform: "rotate(0deg)",
    color: "white",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root}>
      <CardHeader />
      <img className={classes.media} src={props.images} />
      <CardActions disableSpacing>
        <p className={classes.text}>{props.name}</p>
      </CardActions>
      <CardActions disableSpacing>
        <p className={classes.more} onClick={handleExpandClick} aria-expanded={expanded}>
          بیشتر بدانید
        </p>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className={classes.textarea}>
          {/* <p>{props.text} چیست: </p> */}
          <p className={classes.Text}>{props.textarea}</p>
        </div>
      </Collapse>
    </Card>
  );
}
