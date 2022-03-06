import {Product} from '../model/product';
import { ImageInfo } from '../model/image-info';
import { Note } from '../model/note';

const dummyNotes = [
    new Note('n1', 'Mohamed Khamis', new Date(), 'amazing item....'),
    new Note('n2', 'Mohamed Khamis', new Date(), 'amazing item....'),   
];

//const dummyImageInfo = new ImageInfo('Gt2000', 'Gt2000', 'Hello1', '30 $', 'category', '')
const dummyImageInfo = {
    'Model':'Gt2000',
    'Model Name': 'Gt2000', 
    "Model Type": "Hello", 
    "Cost": "20 $", 
    "Additional Description": "you can write any description here it should fit its container"
}

export const products = [
    new Product(
        'p1', 
        'Printer HS',
        require('../../assets/images/item1.png'), 
        dummyImageInfo,
        dummyNotes
    ),
    new Product(
        'p2', 
        'LCD XS',
        require('../../assets/images/item2.png'),  
        dummyImageInfo,
        dummyNotes
    ),
    new Product(
        'p3', 
        'Laptops',
        require('../../assets/images/item3.png'),  
        dummyImageInfo,
        dummyNotes
    ),
    new Product(
        'p4', 
        'Printer Inc',
        require('../../assets/images/item4.png'),  
        dummyImageInfo,
        dummyNotes
    ),
    new Product(
        'p5', 
        'Printer Inc',
        require('../../assets/images/item4.png'),  
        dummyImageInfo,
        dummyNotes
    ),
    new Product(
        'p6', 
        'Printer Inc',
        require('../../assets/images/item4.png'),  
        dummyImageInfo,
        dummyNotes
    ),
    new Product(
        'p7', 
        'Printer Inc',
        require('../../assets/images/item4.png'),  
        dummyImageInfo,
        dummyNotes
    ),
    new Product(
        'p8', 
        'Printer Inc',
        require('../../assets/images/item4.png'),  
        dummyImageInfo,
        dummyNotes
    ),
]