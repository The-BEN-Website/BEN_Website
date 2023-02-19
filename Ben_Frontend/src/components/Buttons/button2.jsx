import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MyComponent() {
  return (
    <div className="flex gap-6  flex-col md:flex-row w-full ">
      <Button variant="contained" component={Link} to="/about" className='text-white rounded-sm font-semibold font-my_font w-[14rem] md:w-[20rem]'
      style={{
        borderRadius: 5,
        padding: "8px",
        margin: 'auto',
        color: "#FF5046",
        background: "white"
    }}
      >
        WHO WE ARE
      </Button>

      <Button variant="outlined" component={Link} to="/contact" className="md:w-[20rem] w-[14rem]"
      style={{
        borderRadius: 5,
        borderColor: "white",
        padding: "8px",
        margin: 'auto',
        color: "white"
    }}>
        CONTACT US
      </Button>
    </div>
  );
}