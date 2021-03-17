import './getStarted.css';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

function GetStarted() {
  // const classes = useStyles();

  return (
    <div data-testid="getStarted" className="container-home">
      {/* <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap');
      </style> */}
      <div className='text-letsstartContainer'>
        <h1 className='text-letsstart'>Let's cook!</h1>
        </div>
      <div className='button-getStartedContainer'>
        <Button
        className='button-getStarted'
          data-testid="getStartedButton"
          variant="contained"
          color="secondary"
          component={Link}
          to="/add_dish"
        
        >
          Get started
        </Button>
      </div>
    </div>
  );
}

export default GetStarted;
