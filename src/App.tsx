import type { HostConfig } from "@qlik/api/auth";
import { QlikEmbed, QlikEmbedConfig } from "@qlik/embed-react";
import './App.css'

const appId = '1c24f07d-039e-4371-980d-27717f01542c';
const sheetId = '05743d07-2e17-4c5b-8f81-625c4ee0931b';

const hostConfig: HostConfig = {
  host: "https://cedleb.eu.qlikcloud.com",
  clientId: "94b6ceff3c82c917ad1351848327d9ae",
  redirectUri: "http://localhost:5173/oauth-callback.html",
  accessTokenStorage: "session",
  authType: "oauth2",
};

function App() {

  return (
    <>
      <QlikEmbedConfig.Provider value={hostConfig}>
        <div className="container">
          <div className="selections-bar">
            <QlikEmbed ui="analytics/selections" appId={appId} />
          </div>
          <div className="viz">
            <QlikEmbed ui="classic/app" app={appId} sheet={sheetId} />
          </div>
        </div>
      </QlikEmbedConfig.Provider>
    </>
  )
}

export default App
