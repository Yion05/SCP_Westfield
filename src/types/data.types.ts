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

