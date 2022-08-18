import { makeStyles } from "@material-ui/core/styles";
import Wrapper from "./component/Header/Wrapper";
import CardWrapper from "./component/Cardwrapper/CardWrapper";
import { ReadMoreBtn } from "./component/Styledcomponents/StyledComponents";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  viewBtn: {
    position: "relative",
    top: "160px",
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CardWrapper />
    </div>
  );
}

export default App;
