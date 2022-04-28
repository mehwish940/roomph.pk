import React, {useEffect} from 'react';
import {
  isAndroid,
  isIOS
} from "react-device-detect";

function App() {

  useEffect(() => {
    if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=roomph.booking.app";
    }else if(isIOS) {
      window.location.href =
        "https://apps.apple.com/pk/app/roomph/id1558380563";
    } else{
      window.location.href =
        "https://www.roomph.pk";
    }
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;