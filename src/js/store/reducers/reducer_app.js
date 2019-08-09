import { colors } from '../../../style/theme'

import imgDurian from '../../../img/images/food/durian-monthong001.png' 
import imgPapaya from '../../../img/images/food/papaya001.png' 
import imgPitaya from '../../../img/images/food/pitaya001.png' 
import imgWatermelon from '../../../img/images/food/watermelon001.png' 

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

const initialState = {
  foodItems: {
    f1: food1,
    f2: food2,
    f3: food3,
    f4: food4
  }
}

const app = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return 
      default:
        return state
    }
  }
  
  export default app