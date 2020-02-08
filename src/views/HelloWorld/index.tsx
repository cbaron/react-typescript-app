import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(2)
  }
}));

const HelloWorld: React.FC<Props> = ({}) => {
  const classes = useStyles();
  return (
    <Typography className={classes.root} variant="h1" align="center">
      ᕕ( ᐛ )ᕗ
    </Typography>
  );
};

export default HelloWorld;
