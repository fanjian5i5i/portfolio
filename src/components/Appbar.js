import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, List, ListItem, Divider, AppBar ,Toolbar, Button} from "react95";
import LogoIcon from '../windows-icon.png';
import AboutIcon from '../about-icon.png';
import FolderIcon from '../folder-icon.png';
import ContactIcon from '../contact-icon.png';
const ResetStyles = createGlobalStyle`
  ${reset}
`;


function Menu() {
    const [open, setOpen] = React.useState(false);
  
    function handleClick() {
      setOpen(!open);
    }
  
    function handleClose() {
      setOpen(false);
    }
  
    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {open && (
          <List horizontalAlign="left" verticalAlign="top" open={open} onClick={handleClose}>
            
            <ListItem>
            <img  src={FolderIcon} style={{ width: 24}} alt="fireSpot"/>
                Projects
            </ListItem>
            <ListItem>
    
                <img  src={AboutIcon} style={{ width: 24}} alt="fireSpot"/>
                About
           
            </ListItem>

            
            <ListItem>
              <img  src={ContactIcon} style={{ width: 24}} alt="fireSpot"/>
                Contact
            </ListItem>
            
          </List>
        )}
        <Button onClick={handleClick} active={open} style={{ fontWeight: 'bold' }}>
          <img  src={LogoIcon} style={{ width: 24, marginLeft: -2, marginRight: 4 }} alt="fireSpot"/>
          Start
        </Button>
      </div>
    );
  }
export default props =>
  <div className="App">
    <ResetStyles />
    <ThemeProvider theme={themes.default}>
      <AppBar>
          <Toolbar>
                <Menu />
          </Toolbar>
      </AppBar>
    </ThemeProvider>
  </div>