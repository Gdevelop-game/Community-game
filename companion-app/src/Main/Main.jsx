import React, {useState} from 'react';

import Connect from '../Components/Connect';
import MenuButton from '../Components/MenuButton';
import AppList from '../PhoneApps/AppsLister.tsx';
import appManager from '../PhoneApps/AppsManager';

export function Main() {
    const [currentApp, setApp] = useState(-1);
    const [connected, setConnected] = useState(false); 
    const [connection, setConnection] = useState(null);

    let app;
    if(currentApp === -1) {
        app = <AppList appManager={appManager} setApp={setApp}/>;
    } else {
        app = appManager[currentApp].getComponent({connection: connection});
    }

    return (
        <div>
            {connected &&
                <div>
                    <div>
                        {app}
                    </div>
                    <MenuButton
                        onClick={() => setApp(-1)}
                    />
                </div>
            }
            {!connected &&
                <Connect
                    onConnectionEstablished={(connection) => {
                        setConnection(connection);
                        setConnected(true);
                    }}
                    onConnectionLost={() => setConnected(false)}
                />
            }
        </div>
    );
}
