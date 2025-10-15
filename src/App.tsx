import type { HostConfig } from "@qlik/api/auth";
import { QlikEmbed, QlikEmbedConfig } from "@qlik/embed-react";
import './App.css'

const appId = import.meta.env.VITE_QLIK_APPID;
const sheetId = import.meta.env.VITE_QLIK_SHEETID;

const hostConfig: HostConfig = {
  host: import.meta.env.VITE_QLIK_TENANT_URL,
  clientId: import.meta.env.VITE_QLIK_OAUTH_CLIENTID,
  redirectUri: import.meta.env.VITE_QLIK_CALLBACK_URL,
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
