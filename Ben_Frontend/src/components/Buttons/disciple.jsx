import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MyComponent() {
  return (
    <div className="flex gap-8">
      <Button variant="container" component={Link} to="/enroll" color="error" className="w-[41em]"
      style={{
        borderRadius: 5,
        backgroundColor: "#F74946",
        padding: "10px",
        color: "white",
        textTransform: "capitalize",
    }}>
        Learn More
      </Button>
    </div>
  );
}