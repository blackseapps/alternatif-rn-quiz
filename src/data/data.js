import React from 'react';
import * as Images from '../constants/Images';

export const campaignData = [
  {
    id: 0,
    headerColor: '#FBB03B',
    campaignTitle: 'Kahveci Penguen',
    campaignImage: Images.walletsListItemOne,
    activeCount: 4,
    price: "4,00",
    priceUnit: '₺',
  },
  {
    id: 1,
    headerColor: '#E81894',
    campaignTitle: 'Lagina Kahvecisi ',
    campaignImage: Images.walletsListItemTwo,
    activeCount: 4,
    price: null,
    priceUnit: null,
  },
  {
    id: 2,
    headerColor: '#31AC83',
    campaignTitle: 'Kantin',
    campaignImage: Images.walletsListItemThree,
    activeCount: 4,
    price: null,
    priceUnit: null,
  },
];
