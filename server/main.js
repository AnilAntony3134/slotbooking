import { Meteor } from 'meteor/meteor';
import { Slots } from '../imports/collections/Slots';
import { SlotCategory, Slotitem } from '../imports/classes/Category';
import { Random } from 'random-js';

Meteor.startup(() => {
  
  if (Slots.find().count() !== 0) {
    const random = new Random();
    var platinum = new SlotCategory();
    platinum.category = 'Platinum';
    platinum.price = 'RS 350';
    platinum.Seats = 15;
    for (var i=0;i<platinum.Seats;i++)
    {platinum.individualslot.push({status:'available',Userid:''})}
    platinum.save();


    var gold = new SlotCategory();
    gold.category = 'Gold';
    gold.price = 'RS 250';
    gold.Seats = 20;
    for (var i=0;i<gold.Seats;i++)
    {gold.individualslot.push({status:'available',Userid:''})}
    gold.save();

    var economy = new SlotCategory();
    economy.category = 'Economy';
    economy.price = 'RS 100';
    economy.Seats = 30;
    for (var i=0;i<economy.Seats;i++)
    {economy.individualslot.push({status:'available',Userid:''})}
    economy.save();
  }
});
