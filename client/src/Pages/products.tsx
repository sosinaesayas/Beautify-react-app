import React from 'react'
import general1 from "../assets/general1.jpg"
import general3 from "../assets/general3.jpg"
import general4 from "../assets/general4.jpg"
import general5 from "../assets/general5.jpg"
import general9 from "../assets/general9.jpg"
import general10 from "../assets/general10.jpg"
import Image1 from "../assets/brush/brush1.jpg"
import Image2 from "../assets/general1.jpg"
import featuredImage1 from "../assets/lipstick/lipstick1.jpg"
import featuredImage2 from "../assets/lipstick/lipstick2.jpg"
import featuredImage3 from "../assets/lipstick/lipstick3.jpg"
import featuredImage4 from "../assets/lipstick/lipstick4.jpg"
import featuredImage5 from "../assets/nailPolish/nailpolish.jpg"
import featuredImage6 from "../assets/nailPolish/nailpolish2.jpg"
import featuredImage7 from "../assets/nailPolish/nailpolish3.jpg"
import featuredImage8 from "../assets/nailPolish/nailpolish4.jpg"
import baby1 from "../assets/baby/pexels-alexander-mass-19763375.jpg"
import baby2 from "../assets/baby/pexels-erik-mclean-4987535.jpg"
import baby3 from "../assets/baby/pexels-erik-mclean-5126899.jpg"
import baby4 from "../assets/baby/pexels-mo-ha-8216701.jpg"
import baby5 from "../assets/baby/photo_2024-04-06_22-13-17.jpg"
import baby6 from "../assets/baby/photo_2024-04-06_22-14-35.jpg"
import baby7 from "../assets/baby/photo_2024-04-06_22-14-41.jpg"
import baby8 from "../assets/baby/photo_2024-04-06_22-15-21.jpg"
import men1 from "../assets/men/pexels-august-de-richelieu-4427714.jpg"
import men2 from "../assets/men/pexels-bolarinwa-olasunkanmi-11705153.jpg"
import men3 from "../assets/men/pexels-cottonbro-studio-6626903.jpg"
import men4 from "../assets/men/pexels-cottonbro-studio-7026767.jpg"
import men5 from "../assets/men/pexels-felipepelaquim-1895015.jpg"
import men6 from "../assets/men/pexels-gül-işık-2452345.jpg"
import men7 from "../assets/men/pexels-klaus-nielsen-6303681.jpg"
import men8 from "../assets/men/pexels-lucas-toyes-18131871.jpg"
import men9 from "../assets/baby/photo_2024-04-06_22-15-24.jpg"
import men10 from "../assets/men/pexels-ray-piedra-1456706.jpg"
import men11 from "../assets/baby/photo_2024-04-06_22-15-32.jpg"
import women1 from "../assets/women/pexels-agung-pandit-wiguna-2085527.jpg"
import women2 from "../assets/women/pexels-anna-malysheva-12471934.jpg"
import women3 from "../assets/women/pexels-bella-zhong-3782786.jpg"
import women4 from "../assets/women/pexels-elegance-nairobi-3389419.jpg"
import women5 from "../assets/women/pexels-mart-production-8801042.jpg"
import women6 from "../assets/women/pexels-ming-zimik-4513817.jpg"
import women7 from "../assets/women/pexels-monstera-production-7691385.jpg"
import women8 from "../assets/women/pexels-ray-piedra-1507351.jpg"
import women9 from "../assets/women/photo_2024-04-06_22-09-53.jpg"
import women10 from "../assets/women/photo_2024-04-06_22-09-58.jpg"
import women11 from "../assets/women/photo_2024-04-06_22-10-01.jpg"
import women12 from "../assets/women/photo_2024-04-06_22-10-03.jpg"
import women13 from "../assets/women/photo_2024-04-06_22-10-13.jpg"
import women14 from "../assets/women/photo_2024-04-06_22-10-19.jpg"
import women15 from "../assets/women/photo_2024-04-06_22-10-28.jpg"
import women16 from "../assets/women/photo_2024-04-06_22-10-37.jpg"







const Products = [
  {
    id:1,
    productName: `GLoria Vandet's white hills` ,
    price: "$25",
    productImage: women1 ,
  },

  {
    id:2,
    productName: `New Air force men's and baby's shoes  `,
    price: "$20",
    productImage: baby3 ,
  },

  {
    id:3,
    productName: 'Estee Lalder nail polish',
    price: "$5",
    productImage: featuredImage5 ,
  },

  {
    id:4,
    productName: 'Classic Comfort Hoodie',
    price: "$48",
    productImage: men3 ,
  },

  {
    id:5,
    productName: 'Classic Comfort Hoodie',
    price: "$36",
    productImage: men7 ,
  },

  {
    id:6,
    productName: `HilltopGlam Women's High-Heel Shoes`,
    price: "$83",
    productImage: women3 ,
  },

  {
    id:7,
    productName: `PeakProtect men's All-Weather Jacket`,
    price: '$57',
    productImage: men4 ,
  },

  {
    id:8,
    productName: `UrbanEdge Men's Leather Carryall`,
    price: "$12",
    productImage: men1 ,
  },

  {
    id:9,
    productName: `Zapa Men's perfume`,
    price: "$6",
    productImage: men2 ,
  },

  {
    id:10,
    productName: `ChicEssence Women's Leather Tote`,
    price: "$15",
    productImage: women2 ,
  },

  {
    id:11,
    productName: 'MoistureMax Lip Balm',
    price: "$4",
    productImage: featuredImage3 ,
  },

  {
    id:12,
    productName: 'AdventurePro Backcountry Backpack',
    price: "$13",
    productImage: men6 ,
  },

  {
    id:13,
    productName: 'ProtectiveShield Lip Balm',
    price: "$6",
    productImage: featuredImage6 ,
  },

  {
    id:14,
    productName: 'UltraRepair Lip Balm',
    price: "5$",
    productImage: featuredImage4 ,
  },
  {
    id:15,
    productName: `SummitStrut Women's Hill-Formed Heels`,
    price: "$28",
    productImage: women4 ,
  },
  {
    id:16,
    productName: `FashionistaFinesse Women's Leather Hobo Bag`,
    price: "$14",
    productImage: women5 ,
  },

  {
    id:17,
    productName: 'JoyfulTwirl Baby Peplum',
    price: "$10",
    productImage: baby7 ,
  },

  {
    id:18,
    productName: 'TinyComfort Baby Tee',
    price: "$12",
    productImage: baby5 ,
  },

  {
    id:19,
    productName: 'TinyExplorer Toddler Jacket',
    price: "$13",
    productImage: baby8,
  },

  {
    id:20,
    productName: 'chatpstick',
    price: "2$",
    productImage: men11 ,
  },

  {
    id:21,
    productName: 'chatpstick',
    price: "2$",
    productImage: women15 ,
  },

  {
    id:22,
    productName: 'chatpstick',
    price: "2$",
    productImage: women9 ,
  },
  {
    id:23,
    productName: 'chatpstick',
    price: "2$",
    productImage: women16 ,
  },
  {
    id:24,
    productName: 'chatpstick',
    price: "2$",
    productImage: women11 ,
  },

  
  
]

export default Products
