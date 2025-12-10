// Tipos principais da aplicação MiWine

export type UserType = 'particular' | 'profissional';

export interface Wine {
  id: string;
  name: string;
  producer: string;
  region: string;
  country: string;
  year: number;
  type: 'tinto' | 'branco' | 'rose' | 'espumante' | 'fortificado';
  grapes: string[];
  imageUrl?: string;
  professionalRating?: ProfessionalRating;
  consumerRatings: ConsumerRating[];
  averagePrice: number;
  priceHistory: PriceEntry[];
  technicalNotes?: TechnicalNotes;
}

export interface ProfessionalRating {
  rating: number;
  reviewer: string;
  notes: string;
  date: string;
  technicalAnalysis: string;
}

export interface ConsumerRating {
  userId: string;
  rating: number; // 0-5
  pricePaid: number;
  purchaseLocation: string;
  purchaseType: 'restaurante' | 'loja' | 'garrafeira';
  date: string;
  comment?: string;
}

export interface PriceEntry {
  price: number;
  store: string;
  date: string;
  available: boolean;
  url?: string;
}

export interface TechnicalNotes {
  body: number; // 1-5
  acidity: number; // 1-5
  tannins: number; // 1-5
  sweetness: number; // 1-5
  alcohol: number;
  aromas: string[];
  pairings: string[];
  drinkingWindow: {
    start: number;
    end: number;
  };
}

export interface CellarWine {
  id: string;
  wineId: string;
  wine: Wine;
  quantity: number;
  pricePaid: number;
  purchaseLocation: string;
  purchaseDate: string;
  physicalLocation: string;
  notes?: string;
  readyToDrink: boolean;
}

export interface ProfessionalCatalog {
  id: string;
  name: string;
  wines: CatalogWine[];
  isPrivate: boolean;
}

export interface CatalogWine {
  wineId: string;
  wine: Wine;
  stock: number;
  costPrice: number;
  salePrice: number;
  margin: number;
  supplier: string;
  internalNotes: string;
}

export interface UserPreferences {
  favoriteTypes: string[];
  favoriteRegions: string[];
  favoriteGrapes: string[];
  priceRange: {
    min: number;
    max: number;
  };
  aromaticProfile: string[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}

export interface UserStats {
  totalWinesTasted: number;
  totalSpent: number;
  favoriteType: string;
  favoriteRegion: string;
  averageRating: number;
  badges: Badge[];
  level: number;
}
