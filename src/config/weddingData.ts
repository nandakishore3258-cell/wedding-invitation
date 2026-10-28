import type { WeddingConfig } from '../types/wedding';

export const weddingConfig: WeddingConfig = {
  couple: {
    groom: {
      salutation: {
        en: 'Chi.',
        te: 'చి.',
        kn: 'ಚಿ.'
      },
      name: {
        en: 'Ganesh Reddy',
        te: 'గణేష్ రెడ్డి',
        kn: 'ಗಣೇಶ್ ರೆಡ್ಡಿ'
      },
      qualification: 'B.Tech',
      father: {
        en: 'Sri. G. Narasimha Reddy',
        te: 'శ్రీ జి. నరసింహారెడ్డి',
        kn: 'ಶ್ರೀ ಜಿ. ನರಸಿಂಹ ರೆಡ್ಡಿ'
      },
      mother: {
        en: 'Smt. G. Govindamma',
        te: 'శ్రీమతి జి. గోవిందమ్మ',
        kn: 'ಶ್ರೀಮತಿ ಜಿ. ಗೋವಿಂದಮ್ಮ'
      },
      grandParentsBlessings: {
        en: 'With the blessings of Smt. Late Hanumakka & Sri. Late Thimmareddy',
        te: 'దివంగతులైన శ్రీమతి హనుమక్క & శ్రీ తిమ్మారెడ్డి గార్ల దివ్యాశీస్సులతో',
        kn: 'ದಿವಂಗತ ಶ್ರೀಮತಿ ಹನುಮಕ್ಕ & ಶ್ರೀ ತಿಮ್ಮಾರೆಡ್ಡಿ ಅವರ ದಿವ್ಯಾಶೀರ್ವಾದಗಳೊಂದಿಗೆ'
      },
      village: {
        en: 'Ganthalapalli Village',
        te: 'గాంతలపల్లి గ్రామం',
        kn: 'ಗಾಂತಲಪಲ್ಲಿ ಗ್ರಾಮ'
      },
      mandal: {
        en: 'Madakasira Mandal',
        te: 'మడకశిర మండలం',
        kn: 'ಮಡಕಶಿರ ಮಂಡಲ'
      },
      district: {
        en: 'Sri Sathya Sai District',
        te: 'శ్రీ సత్యసాయి జిల్లా',
        kn: 'ಶ್ರೀ ಸತ್ಯಸಾಯಿ ಜಿಲ್ಲೆ'
      },
      state: {
        en: 'Andhra Pradesh',
        te: 'ఆంధ్రప్రదేశ్',
        kn: 'ಆಂಧ್ರಪ್ರದೇಶ'
      },
      pincode: '515303'
    },
    bride: {
      salutation: {
        en: 'Chi. Sou.',
        te: 'చి.సౌ.',
        kn: 'ಚಿ.ಸೌ.'
      },
      name: {
        en: 'Anusha Reddy',
        te: 'అనూష రెడ్డి',
        kn: 'ಅನೂಷಾ ರೆಡ್ಡಿ'
      },
      qualification: 'MBA',
      father: {
        en: 'Sri. Shivarama Reddy',
        te: 'శ్రీ శివరామ రెడ్డి',
        kn: 'ಶ್ರೀ ಶಿವರಾಮ ರೆಡ್ಡಿ'
      },
      mother: {
        en: 'Smt. Ramanjinamma',
        te: 'శ్రీమతి రామాంజినమ్మ',
        kn: 'ಶ್ರೀಮತಿ ರಾಮಾಂಜಿನಮ್ಮ'
      },
      village: {
        en: 'Basavanahalli Village',
        te: 'బసవనహళ్లి గ్రామం',
        kn: 'ಬಸವನಹಳ್ಳಿ ಗ್ರಾಮ'
      },
      taluk: {
        en: 'Pavagada Taluk',
        te: 'పావగడ తాలూకా',
        kn: 'ಪಾವಗಡ ತಾಲೂಕು'
      },
      district: {
        en: 'Tumkur District',
        te: 'తుమకూరు జిల్లా',
        kn: 'ತುಮಕೂರು ಜಿಲ್ಲೆ'
      },
      state: {
        en: 'Karnataka',
        te: 'కర్ణాటక',
        kn: 'ಕರ್ನಾಟಕ'
      },
      pincode: '561202'
    }
  },
  events: {
    reception: {
      id: 'reception',
      titleKey: 'receptionTitle',
      dateStr: {
        en: 'Saturday, 28 November 2026',
        te: 'శనివారం, 28 నవంబర్ 2026',
        kn: 'ಶನಿವಾರ, 28 ನವೆಂಬರ್ 2026'
      },
      timeStr: {
        en: '6:30 PM onwards',
        te: 'సాయంత్రం 6:30 గం.ల నుండి',
        kn: 'ಸಂಜೆ 6:30 ರಿಂದ'
      },
      startIso: '2026-11-28T18:30:00+05:30',
      endIso: '2026-11-28T22:30:00+05:30',
      location: 'Sri Kanakadasa Kalyana Mantapa, Hindupur, Andhra Pradesh',
      description: {
        en: 'A joyous evening of music, dinner, and celebration with family and friends to welcome the newly weds.',
        te: 'నవదంపతులను ఆశీర్వదించేందుకు, ఆత్మీయ విందు మరియు సంగీత వేడుకలతో కూడిన శుభ సాయంత్రం.',
        kn: 'ನವ ವಧೂ-ವರರನ್ನು ಅಭಿನಂದಿಸಿ ಆಶೀರ್ವದಿಸಲು, ಕುಟುಂಬ ಹಾಗೂ ಮಿತ್ರರೊಂದಿಗೆ ಸಂಭ್ರಮದ ಸ್ವಾಗತ ಸಮಾರಂಭ ಮತ್ತು ಸ್ನೇಹ ಭೋಜನ.'
      }
    },
    muhurtham: {
      id: 'muhurtham',
      titleKey: 'muhurthamTitle',
      dateStr: {
        en: 'Sunday, 29 November 2026',
        te: 'ఆదివారం, 29 నవంబర్ 2026',
        kn: 'ಭಾನುವಾರ, 29 ನವೆಂಬರ್ 2026'
      },
      timeStr: {
        en: '9:00 AM to 10:00 AM',
        te: 'ఉదయం 9:00 గం.ల నుండి 10:00 గం.ల వరకు',
        kn: 'ಬೆಳಗ್ಗೆ 9:00 ರಿಂದ 10:00 ರವರೆಗೆ'
      },
      lagnam: {
        en: 'Thula Lagnam',
        te: 'శుభ తులా లగ్నమందు',
        kn: 'ಶುಭ ತುಲಾ ಲಗ್ನದಲ್ಲಿ'
      },
      startIso: '2026-11-29T09:00:00+05:30',
      endIso: '2026-11-29T10:00:00+05:30',
      location: 'Sri Kanakadasa Kalyana Mantapa, Hindupur, Andhra Pradesh',
      description: {
        en: 'The sacred Kalyana Muhurtham in auspicious Thula Lagnam with Vedic rituals, Mangalya Dharanam, and elders blessings.',
        te: 'వేదమంత్రాల సాక్షిగా, మాంగళ్యధారణ మరియు పెద్దల ఆశీర్వాదాలతో తులా లగ్న సుముహూర్తంలో జరిగే పవిత్ర వివాహ బంధం.',
        kn: 'ವೇದ ಮಂತ್ರಘೋಷಗಳ ಸಮ್ಮುಖದಲ್ಲಿ, ಮಾಂಗಲ್ಯ ಧಾರಣೆ ಹಾಗೂ ಹಿರಿಯರ ಆಶೀರ್ವಾದಗಳೊಂದಿಗೆ ಶುಭ ತುಲಾ ಲಗ್ನದಲ್ಲಿ ನೆರವೇರುವ ಪವಿತ್ರ ಕಲ್ಯಾಣ ಮಹೋತ್ಸವ.'
      }
    }
  },
  venue: {
    name: {
      en: 'Sri Kanakadasa Kalyana Mantapa',
      te: 'శ్రీ కనకదాస కళ్యాణ మంటపం',
      kn: 'ಶ್ರೀ ಕನಕದಾಸ ಕಲ್ಯಾಣ ಮಂಟಪ'
    },
    city: {
      en: 'Hindupur',
      te: 'హిందూపురం',
      kn: 'ಹಿಂದೂಪುರ'
    },
    state: {
      en: 'Andhra Pradesh',
      te: 'ఆంధ్రప్రదేశ్',
      kn: 'ಆಂಧ್ರಪ್ರದೇಶ'
    },
    fullDisplay: {
      en: 'Sri Kanakadasa Kalyana Mantapa, Hindupur, Andhra Pradesh',
      te: 'శ్రీ కనకదాస కళ్యాణ మంటపం, హిందూపురం, ఆంధ్రప్రదేశ్',
      kn: 'ಶ್ರೀ ಕನಕದಾಸ ಕಲ್ಯಾಣ ಮಂಟಪ, ಹಿಂದೂಪುರ, ಆಂಧ್ರಪ್ರದೇಶ'
    },
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sri+Kanakadasa+Kalyana+Mantapa+Hindupur+Andhra+Pradesh'
  },
  invitationFrom: {
    en: 'Smt. G. Govindamma & Sri. G. Narasimha Reddy',
    te: 'శ్రీమతి జి. గోవిందమ్మ & శ్రీ జి. నరసింహారెడ్డి',
    kn: 'ಶ್ರೀಮತಿ ಜಿ. ಗೋವಿಂದಮ್ಮ & ಶ್ರೀ ಜಿ. ನರಸಿಂಹ ರೆಡ್ಡಿ'
  },
  bestCompliments: {
    family: {
      en: 'Gudivappagari Family, Relatives & Friends',
      te: 'గుడివప్పగారి కుటుంబ సభ్యులు, బంధువులు & మిత్రులు',
      kn: 'ಗುಡಿವಪ್ಪಗಾರಿ ಕುಟುಂಬಸ್ಥರು, ಬಂಧುಗಳು & ಮಿತ್ರರು'
    }
  },
  addresses: {
    groom: {
      familyTitle: {
        en: "Groom's Residence",
        te: 'వరుని నివాసం',
        kn: 'ವರನ ನಿವಾಸ'
      },
      name: {
        en: 'Sri. G. Narasimha Reddy & Family',
        te: 'శ్రీ జి. నరసింహారెడ్డి & కుటుంబ సభ్యులు',
        kn: 'ಶ್ರೀ ಜಿ. ನರಸಿಂಹ ರೆಡ್ಡಿ & ಕುಟುಂಬಸ್ಥರು'
      },
      addressLines: {
        en: [
          'Ganthalapalli Village, Kallumarri Post',
          'Madakasira Mandal',
          'Sri Sathya Sai District, Andhra Pradesh – 515303'
        ],
        te: [
          'గాంతలపల్లి గ్రామం, కల్లుమర్రి పోస్ట్',
          'మడకశిర మండలం',
          'శ్రీ సత్యసాయి జిల్లా, ఆంధ్రప్రదేశ్ – 515303'
        ],
        kn: [
          'ಗಾಂತಲಪಲ್ಲಿ ಗ್ರಾಮ, ಕಲ್ಲುಮರ್ರಿ ಪೋಸ್ಟ್',
          'ಮಡಕಶಿರ ಮಂಡಲ',
          'ಶ್ರೀ ಸತ್ಯಸಾಯಿ ಜಿಲ್ಲೆ, ಆಂಧ್ರಪ್ರದೇಶ – 515303'
        ]
      },
      pincode: '515303'
    },
    bride: {
      familyTitle: {
        en: "Bride's Residence",
        te: 'వధువు నివాసం',
        kn: 'ವಧುವಿನ ನಿವಾಸ'
      },
      name: {
        en: 'Sri. Shivarama Reddy & Family',
        te: 'శ్రీ శివరామ రెడ్డి & కుటుంబ సభ్యులు',
        kn: 'ಶ್ರೀ ಶಿವರಾಮ ರೆಡ್ಡಿ & ಕುಟುಂಬಸ್ಥರು'
      },
      addressLines: {
        en: [
          'Basavanahalli Village, Virupasamudra Post',
          'Pavagada Taluk',
          'Tumkur District, Karnataka – 561202'
        ],
        te: [
          'బసవనహళ్లి గ్రామం, విరూపసముద్ర పోస్ట్',
          'పావగడ తాలూకా',
          'తుమకూరు జిల్లా, కర్ణాటక – 561202'
        ],
        kn: [
          'ಬಸವನಹಳ್ಳಿ ಗ್ರಾಮ, ವಿರೂಪಸಮುದ್ರ ಪೋಸ್ಟ್',
          'ಪಾವಗಡ ತಾಲೂಕು',
          'ತುಮಕೂರು ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ – 561202'
        ]
      },
      pincode: '561202'
    }
  },
  // Exact Muhurtham time: 29 Nov 2026, 9:00 AM IST (+05:30)
  countdownTargetIso: '2026-11-29T09:00:00+05:30'
};
