/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "#383838",
    color: "white",
    margin: "0px 10px 15px 10px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 5px 10px black",
  },
  text: {
    // color: "red",
    textAlign: "center",
  },
  textarea: {
    backgroundColor: "red",
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
      <CardContent>
        <p className={classes.text}>{props.name}</p>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: { expanded },
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className={classes.textarea}>
          <p>{props.text} چیست: </p>
          <p className={classes.text}>{props.textarea}</p>
        </div>
      </Collapse>
    </Card>
  );
}
