import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MyComponent() {
  return (
    <div className="flex gap-8">
      <Button variant="outlined" component={Link} to="/enroll" color="error" className="w-[15rem]"
      style={{
        borderRadius: 5,
        padding: "7px",
        color: "#F74946",
        margin: "auto"
    }}>
        Enroll
      </Button>
    </div>
  );
}