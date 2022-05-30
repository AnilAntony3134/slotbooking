import {Meteor} from 'meteor/meteor'
import { Slots } from '../collections/Slots'

Meteor.methods({
    'booked' ({seat,user,id}){
        const {default: SlotCategory} = require('../classes/Category');
        const category = SlotCategory.findOne({_id:id})
        console.log(category.category, id, 'from booked')
        const individualslot = category.individualslot[seat]
        individualslot.status= 'booked';
        individualslot.Userid=user.username

        category.save();
    },
    'remove' ({seat,id}){
        const {default: SlotCategory} = require('../classes/Category');
        const category = SlotCategory.findOne({_id:id})
        console.log(category.category, id, 'from remove')
        // const individualslot = category.individualslot[seat]
        // individualslot.status= 'available';
        // individualslot.Userid='';
        // category.save();
    }
})