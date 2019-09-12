import { colors } from '../../../style/theme'

import imgDurian from '../../../img/images/food/durian001.png' 
import imgPapaya from '../../../img/images/food/papaya001.png' 
import imgPitaya from '../../../img/images/food/pitaya001.png' 
import imgWatermelon from '../../../img/images/food/watermelon001.png' 
import imgKiwano from '../../../img/images/food/kiwano001.png' 
import imgRambutan from '../../../img/images/food/rambutan001.png' 

const food1 = {
  id: "f1",
  bgColor: colors.cardColor1a,
  ctaColor: colors.cardColor1a,
  title: "Durian Montong",
  subTitle: "King of fruits",
  description: "A fruit with a thick peel, such as a citrus fruit, is called a hesperidium. In hesperidia, the inner layer is peeled off together with the outer layer.",
  img: imgDurian,
  tags: ["organic", "fairtrade", "africa"],
  price: "9.99",
  nutrition: {
    fat: 8,
    protein: 25,
    carb: 24
  }
}

const food2 = {
  id: "f2",
  bgColor: colors.cardColor2a,
  ctaColor: colors.cardColor2b,
  title: "Papaya Carica",
  subTitle: "Rosids Eudicots",
  description: "The papaya is a small, sparsely branched tree, usually with a single stem growing from 5 to 10 m tall, with spirally arranged leaves confined to the top of the trunk. ",
  img: imgPapaya,
  tags: ["fresh", "peru"],
  price: "8.99",
  nutrition: {
    fat: 28,
    protein: 35,
    carb: 60
  }
}

const food3 = {
  id: "f3",
  bgColor: colors.cardColor3a,
  ctaColor: colors.cardColor3b,
  title: "Watermelon Lanatus",
  subTitle: "Citrullus seeds",
  description: "Citrullus lanatus is a plant species in the family Cucurbitaceae, a vine-like flowering plant originating in West Africa.",
  img: imgWatermelon,
  tags: ["local", "healthy","brazil"],
  price: "12.99",
  nutrition: {
    fat: 12,
    protein: 34,
    carb: 39
  }
}

const food4 = {
  id: "f4",
  bgColor: colors.cardColor4a,
  ctaColor: colors.cardColor4b,
  title: "Pitaya Hylocereus",
  subTitle: "Dragon fruit",
  description: "These fruits are commonly known in English as dragon fruit, a name used since around 1993, apparently resulting from the leather-like skin and prominent scaly spikes on the fruit exterior.",
  img: imgPitaya,
  tags: ["solidarity", "fresh","brazil", "agriculture"],
  price: "7.99",
  nutrition: {
    fat: 35,
    protein: 21,
    carb: 60
  }
}

const food5 = {
  id: "f5",
  bgColor: colors.cardColor5a,
  ctaColor: colors.cardColor5b,
  title: "Cucumis metuliferus",
  subTitle: "Spiked melon",
  description: "Kiwano is a traditional food plant in Africa. Along with the Gemsbok cucumber  and Tsamma.",
  img: imgKiwano,
  tags: ["dietary fiber", "snack","salad"],
  price: "7.99",
  nutrition: {
    fat: 22,
    protein: 55,
    carb: 19
  }
}

const food6 = {
  id: "f6",
  bgColor: colors.cardColor6a,
  ctaColor: colors.cardColor6b,
  title: "Rambutan",
  subTitle: "	Eudicots",
  description: "The name 'rambutan' is derived from the Malay word rambut meaning 'hair', a reference to the numerous hairy protuberances of the fruit.",
  img: imgRambutan,
  tags: ["vietnam", "speciel","saturated"],
  price: "12.99",
  nutrition: {
    fat: 61,
    protein: 33,
    carb: 38
  }
}


export default {
    food1,
    food2,
    food3,
    food4,
    food5,
    food6,
}