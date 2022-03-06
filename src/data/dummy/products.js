import {Product} from '../model/product';
import { ImageInfo } from '../model/image-info';
import { Note } from '../model/note';

export const products = [
    new Product(
        'p1', 
        'Printer HS',
        require('../../assets/images/item1.png'), 
        new ImageInfo('Gt2000', 'Gt2000', 'Hello1', '30 $', 'category', ''),
        [
            new Note('n1', 'Mohamed Khamis', new Date(), 'amazing item....'),
            new Note('n2', 'Mohamed Khamis', new Date(), 'amazing item....'),   
        ]
    ),
    new Product(
        'p2', 
        'LCD XS',
        require('../../assets/images/item2.png'),  
        new ImageInfo('Gt2000', 'Gt2000', 'Hello1', '30 $', 'category', ''),
        [
            new Note('n1', 'Mohamed Khamis', new Date(), 'amazing item....'),
            new Note('n2', 'Mohamed Khamis', new Date(), 'amazing item....'),   
        ]
    ),
    new Product(
        'p3', 
        'Laptops',
        require('../../assets/images/item3.png'),  
        new ImageInfo('Gt2000', 'Gt2000', 'Hello1', '30 $', 'category', ''),
        [
            new Note('n1', 'Mohamed Khamis', new Date(), 'amazing item....'),
            new Note('n2', 'Mohamed Khamis', new Date(), 'amazing item....'),   
        ]
    ),
    new Product(
        'p4', 
        'Printer Inc',
        require('../../assets/images/item4.png'),  
        new ImageInfo('Gt2000', 'Gt2000', 'Hello1', '30 $', 'category', ''),
        [
            new Note('n1', 'Mohamed Khamis', new Date(), 'amazing item....'),
            new Note('n2', 'Mohamed Khamis', new Date(), 'amazing item....'),   
        ]
    ),
]