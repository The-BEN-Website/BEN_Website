import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MyComponent() {
  return (
    <div className="flex gap-6  flex-col md:flex-row w-full">
      <Button variant="contained" component={Link} to="/about" color="error" className='text-white rounded-sm font-semibold font-my_font w-[14rem] md:w-[7rem]'
      style={{
        borderRadius: 5,
        padding: "7px",
        margin: 'auto'
    }}
      >
        About Us
      </Button>

      <Button variant="outlined" component={Link} to="/enrolment" color="error" className="md:w-[7rem] w-[14rem]"
      style={{
        borderRadius: 5,
        backgroundColor: "white",
        padding: "7px",
        margin: 'auto'
    }}>
        New Here?
      </Button>
    </div>
  );
}