import { integerPropType } from '@mui/utils';
import { Class } from 'meteor/jagi:astronomy';
import Slots from '../collections/Slots';


const Slotitem = Class.create ( {
    name: 'Slotitems',
    fields: {
        // _id: Number, 
        seatNo:{
            type: Number,
            required: true,
        },
        status: {
            type: String, 
            optional: true
         },
        Userid: {type: String, default(){return ''}},
       
    }
})

const SlotCategory = Class.create ( {
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

export default SlotCategory;