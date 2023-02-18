import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MyComponent() {
  return (
    <div className="flex gap-8">
      <Button variant="contained" component={Link} to="/about" color="error" className='text-white rounded-sm font-semibold font-my_font w-[10rem]'>
        About Us
      </Button>

      <Button variant="outlined" component={Link} to="/enrolment" color="error" className="w-[10rem]"
      style={{
        borderRadius: 5,
        backgroundColor: "white",
        padding: "10px",
    }}>
        New Here?
      </Button>
    </div>
  );
}