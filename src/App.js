import logo from './logo.svg';
import './App.css';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card
} from "@aws-amplify/ui-react";



function App( {signOut}) {
  return (
    <view className="app">
      <card>
        <Image src={logo} className="app-logo" alt="logo"/>
        <heading level={1}>We now have Auth</heading>
      </card>
      <button onClick={signOut}>Sign Out</button>
    </view>
  );
}

export default withAuthenticator(App);
