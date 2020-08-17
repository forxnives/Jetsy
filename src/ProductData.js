import woodspoon from './img/wood_spoons.jpg';
import rastabag from './img/rasta_bag.jpg';
import teaset from './img/tea_set.jpg';
import slippaz from './img/orange_slippers.jpg';
import birdpillow from './img/bird_pillow.jpg';
import woodbracelet from './img/wood_bracelet.jpg';
import calabash from './img/calabash_container.jpg';
import necklace from './img/necklace.jpg';
import cartoonpins from './img/cartoon_pins.jpg';


//mock data structure; array of objects (products) 


const ProductData = [


    { id:1, title:'Clay Vase with Wooden Utensils', seller:'Wood n Wata', rating:4, ratings:2103, price:`99.95`, img:woodspoon, cartquantity: 0, giftcat:['Wedding Gifts'], instock:true, categories:['Sculptures & Crafts', 'Kitchen Ware'], keywords:['center piece'], extra:['Hot Right Now'], personalize:{}, description:'', reviews:[], modifiers:{}, itemsSold:'' }, 

    { id:2, title:'Rasta Color Handbag', seller:'Dappa Doops', rating:5, ratings:1459, price:`50.25`, img:rastabag, cartquantity: 0, giftcat:[], instock:true, categories:[], keywords:[], extra:[], personalize:{}, description:'', reviews:[], modifiers:{}, itemsSold:''  },

    { id:3, title:'Clay Tea Set', seller:'Blacks from Bogwalk', rating:3, ratings:539, price:`119.99`, img:teaset, cartquantity: 0, giftcat:[], instock:true, categories:[], keywords:[], extra:[], personalize:{}, description:'', reviews:[], modifiers:{}, itemsSold:''  },

    { id:4, title:'Orange Slippaz (pair)', seller:'Peenie Wallie', rating:5, ratings:531, price:`22.00`, img:slippaz, cartquantity: 0, giftcat:[], instock:true, categories:[], keywords:[], extra:[], personalize:{}, description:'', reviews:[], modifiers:{}, itemsSold:''  },

    { id:5, title:'Hummingbird Pillow', seller:`Toni '2 cute' Clarke`, rating:4, ratings:331, price:`25.00`, img:birdpillow, cartquantity: 0, giftcat:[], instock:true, categories:[], keywords:[], extra:[], personalize:{}, description:'', reviews:[], modifiers:{}, itemsSold:''  },

    { id:6, title:'Wooden Bracelet', seller:`Itchi Hanmiggle`, rating:5, ratings:736, price:`12.50`, img:woodbracelet, cartquantity: 0, giftcat:[], instock:true, categories:[], keywords:[], extra:[], personalize:{}, description:'', reviews:[], modifiers:{}, itemsSold:''  },

    { id:7, title:'Calabash Container Set', seller:`Ricky 'Stinky' McCaw`, rating:5, ratings:138, price:`60.00`, img:calabash, cartquantity: 0, giftcat:[], instock:true, categories:[], keywords:[], extra:[], personalize:{}, description:'', reviews:[], modifiers:{}, itemsSold:''  },

    { id:8, title:'Brown Pendant Necklace', seller:`Kimmy Creates`, rating:3, ratings:2871, price:`15.25`, img:necklace, cartquantity: 0, giftcat:[], instock:true, categories:[], keywords:[], extra:[], personalize:{}, description:'', reviews:[], modifiers:{}, itemsSold:''  },

    { id:9, title:'Cartoon Pins Set', seller:`Trixie's Treats`, rating:4, ratings:93, price:`9.99`, img:cartoonpins, cartquantity: 0, giftcat:[], instock:true, categories:[], keywords:[], extra:[], personalize:{}, description:'', reviews:[], modifiers:{}, itemsSold:''  },

];

export default ProductData;
