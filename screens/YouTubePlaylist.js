import React, { Component } from 'react';

import { View, Text, TextInput, Image, ImageBackground } from 'react-native';

import { StyleSheet, WebView, Platform } from 'react-native';
import BKD from './BobBackground'
import YouTubePlaylistFlatList from './YouTubePlaylistFlatList'
import nodejs from 'nodejs-mobile-react-native';

export default class YouTubePlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { params } = this.props.navigation.state;
    let playlistId = params.playlistId;
    let playlistName = params.name
    if(!this.state.port) {
      return (
        <BKD title={playlistName}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
        }}>
          <View style={{ flexDirection: 'row', backgroundColor: 'transparent', flex: 1.5,  justifyContent: 'flex-end', alignItems: 'center'}}>
            <Image source={require('../Resources/3RD_PARTY_LOGOS/YOUTUBE.png')} style={styles.youtube} />
          </View>
          <View style={{ flexDirection: 'row', backgroundColor: 'transparent', flex: 7, marginLeft:'10%' }}>
            <Text style={styles.titleText}>Faiting for...</Text>
          </View>
          <View style={{ flexDirection: 'row', backgroundColor: 'transparent', flex: 1, marginLeft:'10%', alignItems: 'center' }}>
            <Image source={require('../Resources/BOB_LOGOS/BOB_LOGO_ORANGE.png')} style={styles.titleImage} />
            <Text style={styles.titleText}>import all to bob</Text>
          </View>
        </View>
      </BKD>
      );
    } else {

    return (
        <BKD title={playlistName}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
        }}>
          <View style={{ flexDirection: 'row', backgroundColor: 'transparent', flex: 1.5,  justifyContent: 'flex-end', alignItems: 'center'}}>
            <Image source={require('../Resources/3RD_PARTY_LOGOS/YOUTUBE.png')} style={styles.youtube} />
          </View>
          <View style={{ flexDirection: 'row', backgroundColor: 'transparent', flex: 7, marginLeft:'10%' }}>
            <YouTubePlaylistFlatList port={this.state.port} playlistId={playlistId} navigation={this.props.navigation}/>
          </View>
          <View style={{ flexDirection: 'row', backgroundColor: 'transparent', flex: 1, marginLeft:'10%', alignItems: 'center' }}>
            <Image source={require('../Resources/BOB_LOGOS/BOB_LOGO_ORANGE.png')} style={styles.titleImage} />
            <Text style={styles.titleText}>import all to bob</Text>
          </View>
        </View>
      </BKD>
    );
  }
  }
  async componentDidMount() {
  }
  componentWillMount()
  {
    nodejs.start('main.js');
    nodejs.channel.addListener('message', (msg) => {
      console.log(`msg=${msg}`);
      let port = JSON.parse(msg).port;
      this.setState({port: port});
    },this );
  }
}

const styles = StyleSheet.create({
  youtube: { width: 40, height: 40 * (1084 / 1543), right: '10%'},
  titleImage: {
    width: 50,
    height: (214 / 241) * 50
  },
  albumName: {
    color: 'white',
    fontFamily: 'Myriad Pro Bold',
    fontSize: 20,
    padding:5
  },
  artistName: {
    color: 'white',
    fontFamily: 'Myriad Pro Regular',
    fontSize: 20,
    padding:5
  },
  titleText: {
    color: '#FCB415',
    fontFamily: 'Bauhaus 93',
    fontSize: 20,
    padding:5
  }
});