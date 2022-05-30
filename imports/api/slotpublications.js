import {Meteor} from 'meteor/meteor'
import Slots from '../collections/Slots'

Meteor.publish('slot',function publishSlots(){
    return Slots.find({})
})