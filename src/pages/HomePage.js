import React from 'react'
import { useTheme} from "@mui/material";
import {useResponsiveDevice} from "../styles/styles";
import useMediaQuery from "@mui/material/useMediaQuery";



function Home() {
    const theme = useTheme();
    const {isMobile, isTablet, isStandard} = useResponsiveDevice();
    console.log(`Mobile: ${isMobile}, Tablet: ${isTablet}, Desktop: ${isStandard}`);

    const headerStyle = {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
    }

    return (
        <div >
            <header style={headerStyle} className={'Temp=header'}>
                {isMobile && <h1> Phone < /h1>}
                {isStandard && <h1> Laptop </h1>}
                {isTablet && <h1> Tablet </h1>}
                <h1> Show something</h1>
            </header>
        </div>
    );
}

export default Home;