import {Meteor} from 'meteor/meteor'
import { Slots } from '../collections/Slots'

Meteor.methods({
    'booked' ({seat,user,id}){
    
        const {default: SlotCategory} = require('../classes/Category');
        const category = SlotCategory.findOne({_id:id})
        const individualslot = category.individualslot[seat]
        individualslot.status= 'booked';
        individualslot.Userid=user.username
        category.save();
    },
    'remove' ({seat,id,user,slot:{Userid}}){  
        // if (user.username !== Userid)
        // {throw new Meteor.Error("This user is not authorised")}
        const {default: SlotCategory} = require('../classes/Category');
        const category = SlotCategory.findOne({_id:id})
        const individualslot = category.individualslot[seat]
        individualslot.status= 'available';
        individualslot.Userid='';
        category.save()
    }
})