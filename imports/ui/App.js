import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './Titlebar';
import AddPlayer from './Addplayer';
import PlayersList from './playerslist';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title="Score keep" subtitle="Created by mohit" />
        <div className="wrapper">
          <PlayersList players={this.props.players}/>
          <AddPlayer />
        </div>
      </div>
    );
  }
}
