import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
  formsubmit(e)
  {
    let playername=e.target.name.value;
    if (playername)
    {
      e.target.name.value="";
      Players.insert({name:playername,score:0});
    }
    e.preventDefault();
  }
  render()
  {
    return (
      <div className="item">
        <form className="form" onSubmit={this.formsubmit.bind(this)} >
          <input className="form__input" type="text" name="name" placeholder="Player name"/>
          <input type="submit" value="Add player" className="button"/>
        </form>
      </div>
    );
  }
}
