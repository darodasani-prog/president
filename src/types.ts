export type Language = 'en' | 'ha' | 'yo' | 'ig';

export interface Translation {
  [key: string]: {
    en: string;
    ha: string;
    yo: string;
    ig: string;
  };
}

export const translations: Translation = {
  nav_home: {
    en: "Home",
    ha: "Gida",
    yo: "Ile",
    ig: "Ụlọ"
  },
  nav_about: {
    en: "About",
    ha: "Game da",
    yo: "Nipa",
    ig: "Maka"
  },
  nav_agenda: {
    en: "Agenda",
    ha: "Tsare-tsare",
    yo: "Eto",
    ig: "Atụmatụ"
  },
  nav_achievements: {
    en: "Achievements",
    ha: "Nasara",
    yo: "Àṣeyọrí",
    ig: "Ihe Ndị Emere"
  },
  nav_vision: {
    en: "Vision",
    ha: "Burin",
    yo: "Iran",
    ig: "Ọhụụ"
  },
  nav_involved: {
    en: "Get Involved",
    ha: "Shiga ciki",
    yo: "Kopa",
    ig: "Bata na ya"
  },
  hero_title_1: {
    en: "THE WORK HAS BEGUN. THE PROGRESS IS REAL.",
    ha: "AIKI YA FARA. CIGABA NA GASKIYA NE.",
    yo: "IṢẸ TI BẸRẸ. ITẸSIWAJU JẸ OLOOTO.",
    ig: "ỌRỤ AMALITELA. ỌGANỊRHỤ BỤ EZIOKWU."
  },
  cta_join: {
    en: "JOIN THE MOVEMENT",
    ha: "SHIGA TARE DA MU",
    yo: "DARAPỌ MỌ WA",
    ig: "BATA NA NDI ANYI"
  },
  cta_view_achievements: {
    en: "VIEW ACHIEVEMENTS",
    ha: "DUBA NASARORI",
    yo: "WO ÀṢEYỌRÍ",
    ig: "LEE IHE NDI EMERE"
  }
};
