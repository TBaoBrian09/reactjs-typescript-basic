import { Box, Button, TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ChangeEvent, useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieInput: {
      position: "fixed",
      right: "3rem",
      bottom: "3rem",
    },
  })
);

const Movies = () => {
  // classes
  const classes = useStyles();

  //   state
  const [movie, setMovie] = useState("");

  const onMovieInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setMovie(event.target.value);

  return (
    <>
      <Box display="flex" justifyContent="center" my={5}>
        <TextField
          label="Luong Ngu"
          variant="outlined"
          className={classes.movieInput}
          onChange={onMovieInputChange}
          value={movie}
        />
        <Button variant='contained' color='primary'>Add</Button>
      </Box>
    </>
  );
};

export default Movies;
