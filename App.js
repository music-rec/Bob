import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Easing,
  Animated,
  // Button,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import BobLogin from './BobLogin'
import LoginToSpotify from './LoginToSpotify'
import InitialScreen from './InitialScreen'

import ImportFromSpotify from './ImportFromSpotify'
import Playlists from './Playlists'
//import Playlist from './Playlist'
import RecentlyPlayed from './RecentlyPlayed'
import Albums from './Albums'
import PlayerScreen from "./PlayerScreen.js"
import Album from "./Album.js"
import ReactNode from "./ReactNode.js"
import LoginToYoutube from "./LoginToYoutube.js"

import LandingScreen from './player/screens/LandingScreen';
import TrackPlayerScreen from './player/screens/TrackPlayerScreen';
import AddFavourites from './screens/AddFavourites';
import ImportFromYoutube from './screens/ImportFromYoutube';
import YouTubePlaylists from './screens/YouTubePlaylists';
import YouTubePlaylist from './screens/YouTubePlaylist';

export default StackNavigator(
  {
    Main: { screen: AddFavourites },
    TrackPlayerScreen: { screen: TrackPlayerScreen },
    //Main: { screen: ReactNode },
    LoginToYoutube: {screen: LoginToYoutube },
    LoginToSpotify: {screen: LoginToSpotify },
    InitialScreen: {screen: InitialScreen},        
    ImportFromSpotify: {screen: ImportFromSpotify},
    ImportFromYoutube: {screen: ImportFromYoutube},
    YouTubePlaylists: {screen: YouTubePlaylists},
    YouTubePlaylist: {screen: YouTubePlaylist},
    Playlists: {screen: Playlists},
    //Playlist: {screen: Playlist},
    RecentlyPlayed: {screen: RecentlyPlayed},
    Albums: {screen: Albums},
    Album: {screen: Album},
  	player: { screen:PlayerScreen }
},
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  }
);