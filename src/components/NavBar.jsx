import React from "react";
// import Nav from "react-bootstrap/Nav";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        // event.preventDefault();
      }}
      {...props}
    />
  );
}

function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return ( 
    <>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Home" href="/Home" />
          <LinkTab label="SpellBook" href="/SpellBook" />
        </Tabs>
      </Box>
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
