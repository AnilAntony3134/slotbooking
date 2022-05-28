import { integerPropType } from '@mui/utils';
import { Class } from 'meteor/jagi:astronomy';
import { Slots } from '../collections/Slots';


export const Slotitem = Class.create ( {
    name: 'Slotitems',
    fields: {
        // _id: Number, 
        
        status: {
            type: String, 
            optional: true
         },
        Userid: String,
       
    }
})

export const SlotCategory = Class.create ( {
    name: 'Categories',
    collection: Slots,
    fields: {
        category: String,
        price : String,
        Seats: Number,
        individualslot : {
            type: [Slotitem],
            default() 
            { 
                return []; 
            },
        }

    }
})
