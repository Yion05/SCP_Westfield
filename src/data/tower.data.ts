import type { BriefInfoType, FacilityData, MasterPlan, TowerData } from "../types/data.types";

export const BriefInfo: BriefInfoType = {
    tenure: 'Freehold',
    SiteArea: 2.826,
    totalUnits: 928,
    towerCounts: 2,
    towerStorey: 44,
    unitSizeMin: 768,
    unitSizeMax: 1008,
};

export const TowerInfoB: TowerData[] = [
    {
        type: "A",
        gfa: 550,
        unit: 70,
        room: "1+1 Bedrooms",
        carPark: "1 Single"
    },
    {
        type: "B",
        gfa: 768,
        unit: 214,
        room: "3 Bedrooms",
        carPark: "1 Single / 1 Tandem"
    },
    {
        type: "C",
        gfa: 868,
        unit: 108,
        room: "3+1 Bedrooms",
        carPark: "1 Tandem"
    },
    {
        type: "D",
        gfa: 1008,
        unit: 72,
        room: "4 Bedrooms",
        carPark: "1 Tandem"
    },
]

export const TowerInfoA: TowerData[] = [
    {
        type: "A",
        gfa: 550,
        unit: 70,
        room: "1+1 Bedrooms",
        carPark: "1 Single"
    },
    {
        type: "B",
        gfa: 768,
        unit: 214,
        room: "3 Bedrooms",
        carPark: "1 Single / 1 Tandem"
    },
    {
        type: "C",
        gfa: 868,
        unit: 108,
        room: "3+1 Bedrooms",
        carPark: "1 Tandem"
    },
    {
        type: "D",
        gfa: 1008,
        unit: 72,
        room: "4 Bedrooms",
        carPark: "1 Tandem"
    },
];

export const facilityConcepts = [
  { name: "Flow", icon: "assets/flow.png" },
  { name: "Growth", icon: "assets/growth.png" },
  { name: "Inspiring", icon: "assets/inspiring.png" },
  { name: "Balance", icon: "assets/balance.png" },
];

export const facilityLevel: FacilityData = {
    "LEVEL 1": [
        "Management Office",
        "Kindergarten Room",
        "EV Charging Bays",
        "Carwash Bay",
        "Parcel / Mailbox Room",
        "Guardhouse"
    ],
    "LEVEL 6 & 7": [
        "Co-working Lounge / Library"
    ],
    "LEVEL 8": [
        "50m Swimming Pool",
        "Water Cascade",
        "Wet Deck",
        "Sun Deck",
        "Leisure Pool",
        "Spa Pool",
        "Hydrotherapy Spa Bed",
        "Wading Pool",
        "Mist Enclave",
        "Aqua Serene Enclave",
        "Outdoor Shower",
        "Ivory Pavilion",
        "Social Area",
        "Outdoor Lounge",
        "Outdoor Fitness",
        "Inclusive Playscape",
        "Feast Garden (BBQ Lounge)",
        "Vertical Herb’s Garden",
        "Calisthenics Garden",
        "Pre-function Garden & Deck",
        "Aromatic Garden",
        "Yoga Deck",
        "Solitude Spheres",
        "Jogging Path",
        "Gymnasium",
        "Pickleball Court",
        "Badminton Court / Multipurpose Hall",
        "Communal Kitchen",
        "Sauna Room",
        "Reflexology Path",
        "Mini Theatre",
        "Convenience Store Space",
        "Male / Female Changing Room",
        "E-sports Room",
        "Surau"
    ]
};

export const masterPlanType: MasterPlan[] = [
    {
        type: "A",
        builtUp: "550 sq.ft.",
        layout: "1 Bedroom, 1 Study, 1 Bathroom",
        layoutImage: "assets/typea.png",
        locationTower: "https://placehold.com/600x240"
    },
        {
        type: "B",
        builtUp: "768 sq.ft.",
        layout: "3 Bedroom, 2 Bathroom",
        layoutImage: "assets/typeb.png",
        locationTower: "https://placehold.com/600x240"
    },
        {
        type: "C",
        builtUp: "868 sq.ft.",
        layout: "3 Bedroom, 1 Study, 2 Bathroom",
        layoutImage: "assets/typec.png",
        locationTower: "https://placehold.com/600x240"
    },
        {
        type: "D",
        builtUp: "1008 sq.ft.",
        layout: "4 Bedroom, 3 Bathroom",
        layoutImage: "assets/typed.png",
        locationTower: "https://placehold.com/600x240"
    },
]