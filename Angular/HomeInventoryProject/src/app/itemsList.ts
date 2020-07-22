import { Item } from './Model/item';

export const ItemsList: Item[] = [
    {name: 'Spatula', 
    color: 'Red', 
    category:{  type:'Cooking', 
                locations:['kitchen']
            }, 
    status:true},

    {name: 'Laptop', 
    color: 'Black', 
    category:{  type:'Study', 
                locations:['Study room']
            }, 
    status:true},

    {name: 'Turmeric', 
    color: 'Yellow', 
    category:{  type:'Cooking and pooja', 
                locations:['kitchen', 'Pooja room']
            }, 
    status:true},

    {name: 'Tissue', 
    color: 'White', 
    category:{  type:'cleaning', 
                locations:['kitchen', 'bathroom']
            }, 
    status:true},
    {name: 'TV', 
    color: 'Black', 
    category:{  type:'Enjoy', 
                locations:['kitchen']
            }, 
    status:true}
];