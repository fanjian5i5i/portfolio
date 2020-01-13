import React, {useState, useEffect} from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, Window, WindowContent, WindowHeader, Button} from "react95";
const ResetStyles = createGlobalStyle`
  ${reset}
`;

function Popup() {
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //   document.title = `You clicked ${count} times`;
    // });
    return (
        <Window style={{ width: 400 }}>
        <WindowHeader
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span>react95.exe</span>
          <Button style={{ marginRight: '-6px', marginTop: '1px' }} size={'sm'} square>
            <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
          </Button>
        </WindowHeader>
        <WindowContent>
          <ul>
            <li>something here</li>
            <li>something here</li>
            <li>something here</li>
            <li>something here</li>
          </ul>
        </WindowContent>
      </Window>
    );
  }

  export default Popup;