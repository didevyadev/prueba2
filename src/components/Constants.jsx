import { makeStyles } from "@material-ui/core/styles";

const Constants = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 330,
      backgroundColor: theme.palette.background.paper,
    },
    '& > span': {
      margin: theme.spacing(2),
    },
}));
export default Constants