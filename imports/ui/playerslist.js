import React from 'react';
import Player from './player';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

export default class PlayersList extends React.Component {
  renderPlayers(){
    if (this.props.players.length===0)
    {
      return (
        <div className="item">
          <p className="item__message">Enter a player to get yourself started.</p>
        </div>
      );
    }
    else {
      return this.props.players.map((player)=>{
          return <Player key={player._id} player={player}/>;
    });
    }
  }
  render() {
    return (
      <div>
        <FlipMove duration={500} maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
}

PlayersList.propTypes={
  players: PropTypes.array.isRequired
};
