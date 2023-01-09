import React, {useEffect} from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import messaging from '@react-native-firebase/messaging';

const App = () => {

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  useEffect(() => {
    if (requestUserPermission()) {
      messaging().getToken().then(token => {
        console.log(token);
      })
    } else {
      console.log("Failed token status. ", authStatus);
    }

    messaging().getInitialNotification().then(async remoteMessage => {
      if (remoteMessage) {
        console.log("Notification caused app to open from quit state:", remoteMessage.notification,);        
      }
    });

    messaging().onNotificationOpenedApp(async remoteMessage => {
      console.log("Notification caused app to open from background state:", remoteMessage.notification,);
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log("Message handled in the background!", remoteMessage);
    });

    const unsubcribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(remoteMessage.notification.title, remoteMessage.notification.body);
    });

    return unsubcribe;
  }, []);

  return (
    <View style={styles.container}>
      <Text>Firebase Cloud Messaging Client using React Native.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;