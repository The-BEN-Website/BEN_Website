import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MyComponent() {
  return (
    <div className="flex gap-6 flex-col md:flex-row w-full ">
      <Button variant="contained" component={Link} to="/about" className='text-white rounded-sm font-semibold font-my_font w-[14rem] md:w-[12rem]'
      style={{
        borderRadius: 0,
        padding: "7px",
        margin: 'auto',
        background: "#F74946",
        textTransform: "uppercase",
    }}
      >
        About US
      </Button>

      <Button variant="outlined" component={Link} to="/enroll" color="error" className="md:w-[12rem] w-[14rem]"
      style={{
        borderRadius: 0,
        backgroundColor: "transparent",
        padding: "7px",
        margin: 'auto',
        border: "1px solid white",
        color: "white",
        textTransform: "capitalize",

    }}>
        New Here?
      </Button>
    </div>
  );
}