import { Meteor } from 'meteor/meteor';
import Slots from '../imports/collections/Slots';
import SlotCategory from '../imports/classes/Category';
import { Random } from 'random-js';
import { Accounts } from 'meteor/accounts-base';
import '../imports/api/slotmethods'
import '../imports/api/slotpublications'

const SEED_USERNAME = 'Anil';
const SEED_PASSWORD = '1234';


Meteor.startup(() => {
  
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });}

    const user = Accounts.findUserByUsername(SEED_USERNAME);
  
  if (Slots.find().count() === 0) {
    const random = new Random();
    var platinum = new SlotCategory();
    platinum.category = 'Platinum';
    platinum.price = 'RS 350';
    platinum.Seats = 15;
    for (var i=1;i<=platinum.Seats;i++)
    {platinum.individualslot.push({
      seatNo: i,
      status:'available',
      Userid:''})}
    platinum.save();


    var gold = new SlotCategory();
    gold.category = 'Gold';
    gold.price = 'RS 250';
    gold.Seats = 20;
    for (var i=1;i<=gold.Seats;i++)
    {gold.individualslot.push({seatNo:i,status:'available',Userid:''})}
    gold.save();

    var economy = new SlotCategory();
    economy.category = 'Economy';
    economy.price = 'RS 100';
    economy.Seats = 30;
    for (var i=1;i<=economy.Seats;i++)
    {economy.individualslot.push({seatNo:i,status:'available',Userid:''})}
    economy.save();
  }
});
