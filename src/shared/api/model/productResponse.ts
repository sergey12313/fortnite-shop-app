export interface ProductType {
  id: string;
  name: string;
}

export interface ProductRarity {
  id: string;
  name: string;
}

export interface ProductAdded {
  date: string;
  version: string;
}

export interface ProductImages {
  icon: string;
  featured: string;
  background: string;
  icon_background: string;
  full_background: string;
}

export interface ProductSet {
  id: string;
  name: string;
  partOf: string;
}

export interface ProductIntroduction {
  chapter: string;
  season: string;
  text: string;
}

export interface ProductDisplayAsset {
  displayAsset: string;
  materialInstance: string;
  url: string;
  flipbook?: any;
  background_texture?: any;
  background: string;
  full_background: string;
}

export interface ProductStyle {
  name: string;
  channel: string;
  channelName: string;
  tag: string;
  isDefault: boolean;
  startUnlocked: boolean;
  hideIfNotOwned: boolean;
  image: string;
}

export interface Product {
  id: string;
  type: ProductType;
  name: string;
  description: string;
  rarity: ProductRarity;
  series?: any;
  price: number;
  added: ProductAdded;
  builtInEmote?: any;
  copyrightedAudio: boolean;
  upcoming: boolean;
  reactive: boolean;
  releaseDate: string;
  lastAppearance: string;
  interest: number;
  images: ProductImages;
  video?: any;
  audio?: any;
  gameplayTags: string[];
  apiTags: any[];
  searchTags: any[];
  battlepass?: any;
  set: ProductSet;
  introduction: ProductIntroduction;
  displayAssets: ProductDisplayAsset[];
  shopHistory: string[];
  styles: ProductStyle[];
  previewVideos: any[];
  grants: any[];
  grantedBy: any[];
}

export interface ProductResponse {
  result: boolean;
  item: Product;
}
