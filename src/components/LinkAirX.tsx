import { Link } from "@mui/joy";
import Color from "../utils/color";

export default function LinkAirX() {
    return <div style={{ display: 'inline-block' }}>
        <Link sx={{
            color: Color.accent('primary'),
            fontSize: '18px',
            textDecoration: 'underline',
        }} href="#airx-video">AirX</Link>
    </div>
}
