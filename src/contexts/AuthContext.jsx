import {createContext, useEffect, useState} from "react";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import services from '../services';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getLoggedUser().then(data => setCurrentUser(data));
  }, []);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '278015890123-n1kmm160pasl41dafp8mg47m895i72do.apps.googleusercontent.com',
    expoClientId: '278015890123-jmiduepfm1vfvqhnn4ggcusf4qheqe21.apps.googleusercontent.com',
    redirectUri: 'https://auth.expo.io/@ivanstatkevich/manage-my-time'
  });

  const getLoggedUser = async () => await AsyncStorage.getItem('@logged_user');

  // const putStandAloneKey = async key => {
  //   await AsyncStorage.setItem(
  //     '@logged_user',
  //     JSON.stringify({
  //       stand_alone_key: key
  //     })
  //   );
  //   setCurrentUser(key);
  // };

  // const putUser = async user => {
  //   await AsyncStorage.setItem(
  //     '@logged_user',
  //     JSON.stringify(user)
  //   );
  //   setCurrentUser(user);
  // };

  const signIn = userParams => {
    services.authServices.signIn(userParams).then(res => {
      console.log(res.data);
    });
  }

  return (
    <AuthContext.Provider
      value={{
        promptAsync,
        response,
        request,
        currentUser,
        getLoggedUser,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;