import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MyComponent() {
  return (
    <div className="flex gap-8">
      <Button variant="outlined" component={Link} to="/mailing" color="error" className="w-[10rem]"
      style={{
        borderRadius: 5,
        backgroundColor: "white",
        padding: "10px",
    }}>
        Connect with Us
      </Button>
    </div>
  );
}