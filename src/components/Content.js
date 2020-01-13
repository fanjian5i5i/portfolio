import React from "react";
import FolderIcon from '../folder-icon.png';
import AboutIcon from '../about-icon.png';
import ContactIcon from '../contact-icon.png';
import Window from './Window';
const styles = {
    content:{
        width:"100%",
        height:"100vh",
        background: "rgb(0, 128, 128)",
        
    },
    icons:{
        display: "flex",
        flexDirection: "column",
        width: 50,
        padding: 10,
        color:"white"
    }
}
export default props =>
  <div style={styles.content}>
    <div style={styles.icons}>
        <img  src={FolderIcon} style={{ width: 48}}/>
        <a>Projects</a>
    </div>
    <div style={styles.icons}>
        <img  src={AboutIcon} style={{ width: 48}}/>
        <a>About</a>
    </div>
    <div style={styles.icons}>
        <img  src={ContactIcon} style={{ width: 40, padding:4, paddingLeft:6}}/>
        <a>Contacts</a>
    </div>
    <Window/>
  </div>