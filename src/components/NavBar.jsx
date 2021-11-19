import React from "react";

import { Link } from "react-router-dom";
// import Nav from "react-bootstrap/Nav";
// import Box from "@mui/material/Box";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";

function NavBar() {
  return (
    <>
      <nav className="navbar">

            <Link to="/" className = 'links'>Home</Link>

            <Link to="/SpellBook" className = 'links'>SpellBook</Link>
      </nav>
    </>
  );
}
export default NavBar;

/* <Nav fill variant="tabs" defaultActiveKey="/home">
<Nav.Item>
<Nav.Link href="/Home">Home</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link href ="/SpellBook" eventKey="link-1">SpellBook</Nav.Link>
</Nav.Item>
</Nav> */

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={(event) => {
//         // event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }
// <Box sx={{ width: "100%" }}>
//   <Tabs
//     value={value}
//     onChange={handleChange}
//     aria-label="nav tabs example"
//   >
//     <LinkTab label="Home" href="/Home" />
//     <LinkTab label="SpellBook" href="/SpellBook" />
//   </Tabs>
// </Box>

// const [value, setValue] = React.useState(0);

// const handleChange = (event, newValue) => {
//   setValue(newValue);
// };
