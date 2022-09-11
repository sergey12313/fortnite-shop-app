export interface LastUpdate {
  date: string;
  uid: string;
}

export interface CurrentRotation {
  Featured: string;
  Featured2: string;
  Daily: string;
  Special: string;
  StarfireB: string;
  Rainbow: string;
  Rainbow2: string;
  PatrickMahomes1B: string;
}

export interface DisplayAsset {
  displayAsset: string;
  materialInstance: string;
  url: string;
  flipbook?: any;
  background_texture: string;
  background: string;
  full_background: string;
}

export interface Price {
  regularPrice: number;
  finalPrice: number;
}

export interface Rarity {
  id: string;
  name: string;
}

export interface Series {
  id: string;
  name: string;
}

export interface Banner {
  id: string;
  name: string;
  intensity: string;
}

export interface OfferTag {
  id: string;
  text: string;
}

export interface Type {
  id: string;
  name: string;
}

export interface Rarity2 {
  id: string;
  name: string;
}

export interface Series2 {
  id: string;
  name: string;
}

export interface Images {
  icon: string;
  featured: string;
  background: string;
  icon_background: string;
  full_background: string;
}

export interface Set {
  id: string;
  name: string;
  partOf: string;
}

export interface Granted {
  id: string;
  type: Type;
  name: string;
  description: string;
  rarity: Rarity2;
  series: Series2;
  images: Images;
  video: string;
  audio: string;
  gameplayTags: string[];
  set: Set;
}

export interface Section {
  id: string;
  name: string;
  landingPriority: number;
}

export interface ShopItem {
  mainId: string;
  displayName: string;
  displayDescription: string;
  displayType: string;
  mainType: string;
  offerId: string;
  displayAssets: DisplayAsset[];
  firstReleaseDate: string;
  previousReleaseDate: string;
  giftAllowed: boolean;
  buyAllowed: boolean;
  price: Price;
  rarity: Rarity;
  series: Series;
  banner: Banner;
  offerTag: OfferTag;
  granted: Granted[];
  priority: number;
  section: Section;
  groupIndex: number;
  storeName: string;
  tileSize: string;
  categories: string[];
}

export interface ShopResponse {
  result: boolean;
  fullShop: boolean;
  lastUpdate: LastUpdate;
  currentRotation: CurrentRotation;
  nextRotation?: any;
  carousel?: any;
  specialOfferVideo?: any;
  customBackground?: any;
  shop: ShopItem[];
}
