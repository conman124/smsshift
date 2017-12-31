import {Dispatcher} from 'flux';
import actionTypes from './actionTypes.js';

const dispatcher = new Dispatcher();
dispatcher.ACTIONS = actionTypes;

export default new Dispatcher();
