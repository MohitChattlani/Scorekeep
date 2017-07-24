import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players,calculatePlayerpositions} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';
import App from './../imports/ui/App';

Meteor.startup(()=> {
Tracker.autorun(()=> {
  let players=Players.find({},{sort:{score:-1}}).fetch();
  let positionedplayers= calculatePlayerpositions(players);
  ReactDOM.render(<App players={positionedplayers}/>,document.getElementById('app')); //specify jsx and the element where we want it to render
});
//insert new document in the players Collection
});
