export interface BriefInfoType {
  tenure: string;
  SiteArea: number;
  totalUnits: number;
  towerCounts: number;
  towerStorey: number;
  unitSizeMin: number;
  unitSizeMax: number;
}

export interface TowerData {
  type: string;
  gfa: number;
  unit: number;
  room: string;
  carPark: string;
}

export interface ConnectionService {
  image: string;
  title: string;
  description: string;
}

export interface LocationItem {
  placename: string;
  distance: string;
}

export interface QuietEnclaveData {
  [category: string]: LocationItem[];
}

export interface UniversityData {
  id: string;
  placename: string;
  description: string;
  image: string;
  aspectRatio: string; 
}

export interface FacilityData {
  [level: string]: string[];
}

export interface MasterPlan {
  type: string;
  builtUp: string;
  layout: string;
  layoutImage: string;
  locationTower: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}