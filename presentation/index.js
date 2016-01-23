// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  leap: require("../assets/leap.jpg"),
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#bada55"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade", "slide"]} transitionDuration={500}>

          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Build Cool Stuff
            </Heading>
            <Heading size={1} fit caps>
              With Socket.io & Leap Motion
            </Heading>
            <Link href="https:twitter.com/wisamjs">
              <Text bold caps textColor="tertiary">@wisamjs</Text>
            </Link>
          </Slide>

          <Slide bgColor="primary" textColor="secondary">
            <Heading size={1}>
              What is Socket.io ?
            </Heading>
            <List>
              <Appear><ListItem>Enables real-time bidirectional event-based communication</ListItem></Appear>
              <Appear><ListItem>Uses websockets to send and receive messages from the server</ListItem></Appear>
              <Appear><ListItem>Can be used in Node as well as in the browser</ListItem></Appear>
            </List>
          </Slide>
          <Slide bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={1}>
              Getting started
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/socketio-example1")}
              margin="20px auto"
            />
          </Slide>
          <Slide bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={1}>
              Lets have some more fun
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/socketio-example2")}
              margin="20px auto"
            />
          </Slide>
          <Slide bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={1}>
              And on the front-end
            </Heading>

            <CodePane
              lang="html"
              source={require("raw!../assets/socketio-example2html")}
              margin="20px auto"
            />
          </Slide>
          <Slide bgColor="primary" textColor="secondary">
            <Heading size={1}>
              What can I do with Socket.io?
            </Heading>
            <List>
              <Appear><ListItem>Chat Apps</ListItem></Appear>
              <Appear><ListItem>Games</ListItem></Appear>
              <Appear><ListItem>Creative real-time web applications</ListItem></Appear>
            </List>
          </Slide>
          <Slide bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={1}>
              If Interested Checkout The Official Tutorial
            </Heading>
              <Appear><ListItem>socket.io/get-started/chat/</ListItem></Appear>
          </Slide>



          <Slide bgImage={images.leap.replace("/", "")} bgDarken={0.75} textColor="primary">
            <Heading size={1}>
              What's a Leap Motion?
            </Heading>
            <List>
              <Appear><ListItem>Hand sensor and motion detector</ListItem></Appear>
              <Appear><ListItem>Uses websockets to sense and receive input</ListItem></Appear>
              <Appear><ListItem>Can be used in Node as well as in the browser</ListItem></Appear>
            </List>
          </Slide>
          <Slide bgColor="secondary" textColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={1}>
              Getting started
            </Heading>
             <List>
              <ListItem>https://www.leapmotion.com/setup</ListItem>
            </List>
            <CodePane
              lang="js"
              source={require("raw!../assets/leap-example1")}
              margin="20px auto"
            />
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
            <Heading size={1}>
              What can I do with a Leap Motion?
            </Heading>
            <List>
              <Appear><ListItem>Games</ListItem></Appear>
              <Appear><ListItem>Tools that rely on hand sensors</ListItem></Appear>
              <Appear><ListItem>Creative real-time web applications</ListItem></Appear>
            </List>
          </Slide>
          <Slide bgColor="secondary"  textColor="primary"  notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={1}>
              If Interested Checkout The Official Site
            </Heading>
              <Appear><ListItem>https://developer.leapmotion.com/getting-started/javascript</ListItem></Appear>
          </Slide>

          <Slide bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            Socket.io + Leap Motion = ?
            </Heading>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1} textColor="primary">
            Thanks!
            </Heading>
            <Heading size={2} caps fit textColor="secondary">
            Questions?
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
