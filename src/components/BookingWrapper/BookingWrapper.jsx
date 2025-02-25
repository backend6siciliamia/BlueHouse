import React from "react";
import Button from "../../components/Shared/Button/Button";
import "./BookingWrapper.css";
import { WithTransLate } from "../../components/helpers/translating";
import useBreakpoints from "../../Styles/useBreakpoints";
import { Typography } from "@mui/material";
import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const BookingWrapper = () => {
  const { isMobile, isTablet } = useBreakpoints();
  return (
    <div className="BookingWrapper_container">
      {isMobile || isTablet?
        <div style={{width:"100%"}}>
          <Typography
            gutterBottom
            variant="h2"
            sx={{
              display:"flex",
              fontSize: "20px",
              fontFamily: "Oblik",
            }}
          >
        <WithTransLate sx={{}} text="BOOK YOUR ROOM" />
      </Typography>
          <form style={{display:"flex",flexDirection:"column",width:"100%",margin:"auto"}}>
            <div>
              <input style={{borderColor:"#1D3967",borderRadius:"0px",borderBottom:"none",height:"50px",paddingLeft:"12%"}} placeholder="Chech-in Check-out"/>
              <CiCalendar size="30px" style={isMobile?{position:"absolute",left:"0",marginTop:"2%",marginLeft:"6%"}:{position:"absolute",left:"0",marginTop:"1%",marginLeft:"17%"}}/>
            </div>
            <div>
              <input style={{borderColor:"#1D3967",borderRadius:"0px",height:"50px",paddingLeft:"12%"}} placeholder="Travellers"/>
              <CiUser size="30px" style={isMobile?{position:"absolute",left:"0",marginTop:"2%",marginLeft:"6%"}:{position:"absolute",left:"0",marginTop:"1%",marginLeft:"17%"}}/>
            </div>
            
            <div style={{marginTop:"5%",display:"flex",justifyContent:"center"}}>
              <Button text="Search" btnClass="btnDark"/>
            </div>
            
          </form>
        </div>
        :<div className="buttons">
        <a href="https://beds24.com/booking2.php?propid=3578&layout=1">
          <Button text="BOOK YOUR ROOM" btnClass="btnDark" width="218px" />
        </a>
        <div className="ordial">
          <hr />
          <p style={{ color: "#1d3967" }}>
            <WithTransLate text="OR" />
          </p>
          <hr />
        </div>
        <a href="https://bluehouse.tourdesk.is/Tour">
          <Button text="Book Day Tours" btnClass="btnLight" width="218px" />
        </a>
      </div>}
      
    </div>
  );
};

export default BookingWrapper;
