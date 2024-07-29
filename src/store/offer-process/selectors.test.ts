import { StatusCodes } from 'http-status-codes';
import {
  AuthorizationStatus,
  Cities,
  NameSpace,
  PostReviewState,
  SortType,
} from '../../const';
import {
  OfferDetailEntity,
  OfferEntity,
  OfferProcess,
  UserProcess,
} from '../../types';
import {
  getCurrentCityOffers,
  getFavoriteOffers,
  getFavoriteOffersCount,
  getNearbyOffers,
  getOffer,
  getOffers,
  getOffersCount,
  getOrderedCityOffers,
} from './selectors';

const testOffers: OfferEntity[] = [
  {
    id: '7f0229b6-7339-46c2-9133-5626adba3759',
    title: 'Tile House',
    type: 'hotel',
    price: 340,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.3,
  },
  {
    id: '8819b81e-bf95-4f03-a34e-e27006c5a77b',
    title: 'Waterfront with extraordinary view',
    type: 'room',
    price: 102,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.8,
  },
  {
    id: '64f4401f-662c-4f50-b512-9ec83e2d163f',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'room',
    price: 300,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13,
      },
    },
    location: {
      latitude: 51.225402,
      longitude: 6.784314,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.9,
  },
];

const testOffer: OfferDetailEntity = {
  id: '7cf159bf-b59e-44ba-aca3-8598dd7fb2ec',
  title: 'Penthouse, 4-5 rooms + 5 balconies',
  description:
    'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
  type: 'room',
  price: 234,
  images: [
    'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
  ],
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  location: {
    latitude: 48.868610000000004,
    longitude: 2.342499,
    zoom: 16,
  },
  goods: [
    'Washing machine',
    'Fridge',
    'Kitchen',
    'Baby seat',
    'Heating',
    'Towels',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl:
      'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
  },
  isPremium: true,
  isFavorite: false,
  rating: 2.5,
  bedrooms: 1,
  maxAdults: 1,
};

const state = {
  [NameSpace.Data]: <OfferProcess>{
    offers: [],
    offer: null,
    nearbyOffers: [],
    reviews: [],
    postReviewState: PostReviewState.Send,
    currentCity: Cities[0],
    favoriteOffers: [],
    currentSort: SortType.popular,
    isOffersLoading: false,
    isOfferLoading: false,
    isFavoriteOffersLoading: false,
    responseStatusCode: StatusCodes.PROCESSING,
  },
  [NameSpace.User]: <UserProcess>{
    authorizationStatus: AuthorizationStatus.Unknown,
    userProfile: null,
  },
};

describe('Offers selectors', () => {
  it('should return offers data', () => {
    state[NameSpace.Data].offers = testOffers;
    const result = getOffers(state);
    expect(result).toBe(state[NameSpace.Data].offers);
  });

  it('should return offers data', () => {
    state[NameSpace.Data].offers = testOffers;
    const result = getOffersCount(state);
    expect(result).toBe(state[NameSpace.Data].offers.length);
  });

  it('should return offer data', () => {
    state[NameSpace.Data].offer = testOffer;
    const result = getOffer(state);
    expect(result).toBe(state[NameSpace.Data].offer);
  });

  it('should return offers data by city', () => {
    state[NameSpace.Data].offers = testOffers;
    state[NameSpace.Data].currentCity = Cities[5];
    const result = getCurrentCityOffers(state);
    expect(result.length).toBe(1);
  });

  it('should return ordered offers by price', () => {
    state[NameSpace.Data].offers = testOffers;
    state[NameSpace.Data].currentCity = Cities[0];
    state[NameSpace.Data].currentSort = SortType.priceLow2High;
    const result = getOrderedCityOffers(state);
    expect(result[0].price).toBe(102);
  });

  it('should return favorite offers', () => {
    state[NameSpace.Data].offers = testOffers;
    state[NameSpace.Data].favoriteOffers = [testOffers[2]];
    const result = getFavoriteOffers(state);
    expect(result.length > 0).toBe(true);
  });

  it('should return favorite offers count', () => {
    state[NameSpace.Data].offers = testOffers;
    state[NameSpace.Data].favoriteOffers = [testOffers[2]];
    const result = getFavoriteOffersCount(state);
    expect(result > 0).toBe(true);
  });

  it('should return nearby offers', () => {
    state[NameSpace.Data].offers = testOffers;
    state[NameSpace.Data].nearbyOffers = [testOffers[0], testOffers[1]];
    const result = getNearbyOffers(state);
    expect(result.length === 2).toBe(true);
  });
});
