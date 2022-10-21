/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Communication from './components/Communication';
import Server from './components/Server';
import Title from './components/Title';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [sockets, setSockets] = React.useState<WebSocket>();
  const [messages, setMessages] = React.useState<Array<string>>([]);

  const joinServer =  (port:number, address: string) => {
    let SERVER = `ws://${address}:${port}`;
    let socket: WebSocket = new WebSocket(SERVER);

    setSockets(socket);
    
    socket.onerror = (event) => {
      console.log('Connection failed');
        // enqueueSnackbar('Connection failed', {variant:'error'});
    }

    socket.onopen = () => {
      console.log('Successfully connected');
      // enqueueSnackbar('Successfully connected', {variant:'success'});
    }
  };

  React.useEffect(()=> {
    if (sockets) {
      sockets.onmessage = (event) => {
        if (event) {
          console.log("Kevin", event.data)
          setMessages([event.data])
        }
      }
    }      
  }, [sockets, messages]);

  const handleSendMessage = (text:string) => {
    if(!!sockets) {
      sockets.send(text);
    }
  };
  const clearMessage = () => {
    setMessages([]);
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Server joinServer={joinServer}/>
          <Communication onSendMessage={handleSendMessage} clearMessage={clearMessage} messages={messages} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
