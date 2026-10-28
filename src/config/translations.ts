import type { Language } from '../types/wedding';

export interface TranslationDictionary {
  ganeshaInvocation: string;
  traditionalShloka: string;
  traditionalShlokaMeaning: string;
  invitationTitle: string;
  invitationSubtitle: string;
  datesBanner: string;
  openInvitation: string;
  skipIntro: string;
  blessingsHeading: string;
  grandparentsBlessing: string;
  invitationLetterHeading: string;
  invitationLetterBody: string;
  coupleHeading: string;
  groomTitle: string;
  brideTitle: string;
  sonOf: string;
  daughterOf: string;
  nativePlace: string;
  wedsBadge: string;
  countdownHeading: string;
  countdownSubtitle: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  countdownFinished: string;
  eventsHeading: string;
  eventsSubtitle: string;
  receptionTitle: string;
  muhurthamTitle: string;
  addToGoogleCalendar: string;
  downloadIcs: string;
  venueHeading: string;
  venueSubtitle: string;
  getDirections: string;
  venueNote: string;
  addressesHeading: string;
  addressesSubtitle: string;
  copyAddress: string;
  addressCopied: string;
  rsvpHeading: string;
  rsvpSubtitle: string;
  rsvpNameLabel: string;
  rsvpNamePlaceholder: string;
  rsvpPhoneLabel: string;
  rsvpPhonePlaceholder: string;
  rsvpAttendanceLabel: string;
  rsvpBoth: string;
  rsvpMuhurtham: string;
  rsvpReception: string;
  rsvpCannot: string;
  rsvpGuestsLabel: string;
  rsvpWishesLabel: string;
  rsvpWishesPlaceholder: string;
  rsvpSubmitBtn: string;
  rsvpWhatsAppBtn: string;
  rsvpSuccessMsg: string;
  rsvpRequiredError: string;
  rsvpSavedLocallyNotice: string;
  shareHeading: string;
  shareSubtitle: string;
  shareWhatsAppBtn: string;
  shareCopyLinkBtn: string;
  linkCopiedMsg: string;
  footerCompliments: string;
  footerBlessingShloka: string;
  soundOn: string;
  soundOff: string;
  petalsOn: string;
  petalsOff: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    ganeshaInvocation: '|| Sri Gananaiah Swamy Prasanna ||',
    traditionalShloka: 'వక్రతుండ మహాకాయ సూర్యకోటి సమప్రభ | నిర్విఘ్నం కురు మే దేవ సర్వకార్యేషు సర్వదా ||',
    traditionalShlokaMeaning: 'O Lord with the curved trunk and immense aura radiant like a million suns, please bless this auspicious beginning and remove all obstacles forever.',
    invitationTitle: 'Wedding Invitation',
    invitationSubtitle: 'Solicit your gracious presence & blessings on the auspicious wedding ceremony',
    datesBanner: '28 & 29 November 2026 • Hindupur, Andhra Pradesh',
    openInvitation: 'Open Invitation',
    skipIntro: 'Skip to Invitation',
    blessingsHeading: 'With the Blessings of Our Families',
    grandparentsBlessing: 'With the divine blessings of Smt. Late Hanumakka & Sri. Late Thimmareddy',
    invitationLetterHeading: 'Cordially Invited',
    invitationLetterBody: 'Smt. G. Govindamma & Sri. G. Narasimha Reddy request your gracious presence with family and friends on the auspicious occasion of the wedding ceremony of their son.',
    coupleHeading: 'The Auspicious Union',
    groomTitle: 'The Groom',
    brideTitle: 'The Bride',
    sonOf: 'Son of',
    daughterOf: 'Daughter of',
    nativePlace: 'Native of',
    wedsBadge: 'Weds',
    countdownHeading: 'Auspicious Muhurtham Countdown',
    countdownSubtitle: 'Counting down to the sacred Muhurtham on 29 November 2026 at 9:00 AM IST',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    countdownFinished: 'The Auspicious Wedding Ceremony has Commenced! Seeking your heartfelt blessings for Ganesh & Anusha.',
    eventsHeading: 'Ceremonies & Functions',
    eventsSubtitle: 'Join us in celebrating these sacred and joyful moments',
    receptionTitle: 'Reception',
    muhurthamTitle: 'Wedding Muhurtham',
    addToGoogleCalendar: 'Add to Google Calendar',
    downloadIcs: 'Save to Calendar (.ics)',
    venueHeading: 'Wedding Venue',
    venueSubtitle: 'Sri Kanakadasa Kalyana Mantapa, Hindupur, Andhra Pradesh',
    getDirections: 'Get Directions on Google Maps',
    venueNote: 'Located conveniently in Hindupur town. Ample parking and guest assistance available.',
    addressesHeading: 'Family Residences & Contact',
    addressesSubtitle: 'Feel free to reach out to the families for any assistance',
    copyAddress: 'Copy Address',
    addressCopied: 'Address Copied to Clipboard!',
    rsvpHeading: 'RSVP & Guest Response',
    rsvpSubtitle: 'Your presence brings joy to our celebration. Please confirm your attendance so we can welcome you warmly.',
    rsvpNameLabel: 'Full Name *',
    rsvpNamePlaceholder: 'Enter your full name',
    rsvpPhoneLabel: 'Phone Number (Optional)',
    rsvpPhonePlaceholder: 'e.g. +91 98765 43210',
    rsvpAttendanceLabel: 'Will you be attending? *',
    rsvpBoth: 'Attending Both Reception & Muhurtham',
    rsvpMuhurtham: 'Attending Wedding Muhurtham Only (29 Nov)',
    rsvpReception: 'Attending Reception Only (28 Nov)',
    rsvpCannot: 'Regretfully Unable, Sending Heartfelt Blessings',
    rsvpGuestsLabel: 'Number of Guests attending with you',
    rsvpWishesLabel: 'Blessings & Wishes for the Couple (Optional)',
    rsvpWishesPlaceholder: 'Share your warm wishes and blessings for Ganesh & Anusha...',
    rsvpSubmitBtn: 'Confirm My Attendance',
    rsvpWhatsAppBtn: 'Send RSVP via WhatsApp',
    rsvpSuccessMsg: 'Thank you! Your RSVP has been saved. We look forward to celebrating with you.',
    rsvpRequiredError: 'Please enter your name and select attendance.',
    rsvpSavedLocallyNotice: 'Your response is stored safely on this device. You can also send it directly to the family on WhatsApp.',
    shareHeading: 'Share Invitation with Loved Ones',
    shareSubtitle: 'Forward this digital invitation card easily to relatives and friends via WhatsApp',
    shareWhatsAppBtn: 'Share on WhatsApp',
    shareCopyLinkBtn: 'Copy Invitation Link',
    linkCopiedMsg: 'Invitation Link Copied to Clipboard!',
    footerCompliments: 'With Best Compliments From Gudivappagari Family, Relatives & Friends.',
    footerBlessingShloka: '|| మంగళం భగవాన్ విష్ణుః మంగళం గరుడధ్వజః | మంగళం పుండరీకాక్షః మంగళాయ తనో హరిః ||',
    soundOn: 'Mute Music',
    soundOff: 'Play Traditional Shehnai',
    petalsOn: 'Pause Petals',
    petalsOff: 'Show Petals'
  },
  te: {
    ganeshaInvocation: '|| శ్రీ గజానన స్వామి ప్రసన్నః ||',
    traditionalShloka: 'శుక్లాంబరధరం విష్ణుం శశివర్ణం చతుర్భుజం | ప్రసన్నవదనం ధ్యాయేత్ సర్వవిఘ్నోపశాంతయే ||',
    traditionalShlokaMeaning: 'సర్వ విఘ్నాలను తొలగించి, సర్వ శుభాలను కలిగించే శ్రీ విఘ్నేశ్వరుని అనుగ్రహంతో మా ఈ శుభకార్యం నిర్విఘ్నంగా నెరవేరాలని ప్రార్థిస్తున్నాము.',
    invitationTitle: 'శుభ వివాహ ఆహ్వాన పత్రిక',
    invitationSubtitle: 'మా కుమారుని పవిత్ర వివాహ మహోత్సవ వేడుకకు మీ సకుటుంబ రాకను కోరుచున్నాము',
    datesBanner: '28 & 29 నవంబర్ 2026 • హిందూపురం, ఆంధ్రప్రదేశ్',
    openInvitation: 'ఆహ్వాన పత్రికను తెరవండి',
    skipIntro: 'ఆహ్వానానికి వెళ్లండి',
    blessingsHeading: 'పెద్దల ఆశీస్సులతో',
    grandparentsBlessing: 'దివంగతులైన శ్రీమతి హనుమక్క మరియు శ్రీ తిమ్మారెడ్డి గార్ల దివ్యాశీస్సులతో',
    invitationLetterHeading: 'సాదర ఆహ్వానం',
    invitationLetterBody: 'శ్రీమతి జి. గోవిందమ్మ & శ్రీ జి. నరసింహారెడ్డి దంపతులు తమ కుమారుని వివాహ మహోత్సవ శుభ సందర్భంగా, బంధుమిత్ర సమేతంగా విచ్చేసి నూతన వధూవరులను ఆశీర్వదించవలసిందిగా సాదరంగా ఆహ్వానిస్తున్నారు.',
    coupleHeading: 'వధూవరుల పరిచయం',
    groomTitle: 'వరుడు',
    brideTitle: 'వధువు',
    sonOf: 'కుమారుడు',
    daughterOf: 'కుమార్తె',
    nativePlace: 'స్వగ్రామం',
    wedsBadge: 'పరిణయం',
    countdownHeading: 'శుభ ముహూర్త క్షణాల లెక్కింపు',
    countdownSubtitle: '29 నవంబర్ 2026 ఉదయం 9:00 గంటలకు జరిగే పవిత్ర వివాహ ముహూర్తానికి మిగిలిన సమయం',
    days: 'రోజులు',
    hours: 'గంటలు',
    minutes: 'నిమిషాలు',
    seconds: 'సెకన్లు',
    countdownFinished: 'శుభ ముహూర్త వేళ ఆసన్నమైంది! గణేష్ & అనూష నూతన దంపతులకు మీ హృదయపూర్వక ఆశీస్సులు అందించండి.',
    eventsHeading: 'శుభ కార్యక్రమాలు',
    eventsSubtitle: 'ఈ పవిత్ర మరియు ఆనందకరమైన వేడుకలలో మాతో పాటు పాల్గొనండి',
    receptionTitle: 'స్నేహ విందు (రిసెప్షన్)',
    muhurthamTitle: 'శుభ ముహూర్తం (కల్యాణం)',
    addToGoogleCalendar: 'గూగుల్ క్యాలెండర్‌కు జోడించండి',
    downloadIcs: 'క్యాలెండర్ ఈవెంట్ డౌన్‌లోడ్ (.ics)',
    venueHeading: 'కళ్యాణ వేదిక',
    venueSubtitle: 'శ్రీ కనకదాస కళ్యాణ మంటపం, హిందూపురం, ఆంధ్రప్రదేశ్',
    getDirections: 'గూగుల్ మ్యాప్స్ మార్గం చూడండి',
    venueNote: 'హిందూపురం పట్టణంలో అన్ని సౌకర్యాలు మరియు విశాలమైన పార్కింగ్ సదుపాయం కలదు.',
    addressesHeading: 'కుటుంబ నివాసాలు & వివరాలు',
    addressesSubtitle: 'ఏదైనా సమాచారం కొరకు కుటుంబ సభ్యులను సంప్రదించవచ్చు',
    copyAddress: 'చిరునామా కాపీ చేయండి',
    addressCopied: 'చిరునామా కాపీ చేయబడింది!',
    rsvpHeading: 'మీ రాకను తెలియజేయండి (RSVP)',
    rsvpSubtitle: 'మీ అమూల్యమైన ఉపస్థితి మరియు ఆశీస్సులు మా వివాహ వేడుకకు నిండుదనాన్ని చేకూరుస్తాయి. దయచేసి మీ రాకను నిర్ధారించండి.',
    rsvpNameLabel: 'మీ పూర్తి పేరు *',
    rsvpNamePlaceholder: 'మీ పేరు నమోదు చేయండి',
    rsvpPhoneLabel: 'మొబైల్ నంబర్ (ఐచ్ఛికం)',
    rsvpPhonePlaceholder: 'ఉదా: 98765 43210',
    rsvpAttendanceLabel: 'మీరు హాజరవుతారా? *',
    rsvpBoth: 'రిసెప్షన్ మరియు ముహూర్తం రెండింటికీ హాజరవుతాము',
    rsvpMuhurtham: 'శుభ ముహూర్తానికి మాత్రమే (29 నవంబర్)',
    rsvpReception: 'రిసెప్షన్‌కు మాత్రమే (28 నవంబర్)',
    rsvpCannot: 'రాలేకపోతున్నాము, మా హృదయపూర్వక శుభాకాంక్షలు',
    rsvpGuestsLabel: 'హాజరయ్యే కుటుంబ సభ్యుల సంఖ్య',
    rsvpWishesLabel: 'వధూవరులకు మీ ఆశీస్సులు (ఐచ్ఛికం)',
    rsvpWishesPlaceholder: 'గణేష్ & అనూష దంపతులకు మీ శుభాకాంక్షలు తెలియజేయండి...',
    rsvpSubmitBtn: 'నా రాకను నిర్ధారించండి',
    rsvpWhatsAppBtn: 'వాట్సాప్ ద్వారా సమాచారం పంపండి',
    rsvpSuccessMsg: 'ధన్యవాదాలు! మీ స్పందన నమోదయింది. మీ రాక కోసం మేము ఎదురుచూస్తున్నాము.',
    rsvpRequiredError: 'దయచేసి మీ పేరు నమోదు చేసి, హాజరును ఎంచుకోండి.',
    rsvpSavedLocallyNotice: 'మీ వివరాలు భద్రపరచబడ్డాయి. కుటుంబ సభ్యులకు వాట్సాప్ ద్వారా కూడా నేరుగా పంపవచ్చు.',
    shareHeading: 'ఆహ్వానాన్ని బంధుమిత్రులతో పంచుకోండి',
    shareSubtitle: 'వాట్సాప్ ద్వారా మీ స్నేహితులు మరియు కుటుంబ సభ్యులకు ఈ ఆహ్వాన పత్రికను సులభంగా పంపండి',
    shareWhatsAppBtn: 'వాట్సాప్‌లో షేర్ చేయండి',
    shareCopyLinkBtn: 'లింక్ కాపీ చేయండి',
    linkCopiedMsg: 'ఆహ్వాన పత్రిక లింక్ కాపీ అయింది!',
    footerCompliments: 'గుడివప్పగారి కుటుంబ సభ్యులు, బంధువులు & మిత్రుల హృదయపూర్వక శుభాకాంక్షలతో.',
    footerBlessingShloka: '|| మాంగల్య తంతునానేన లోకరక్షా విధాయినా | కంఠే బధ్నామి శుభగే సంజీవ శరదాం శతం ||',
    soundOn: 'సంగీతం ఆపండి',
    soundOff: 'సన్నాయి రాగం వినండి',
    petalsOn: 'పూల వాన ఆపండి',
    petalsOff: 'పూల వాన ప్రారంభించండి'
  },
  kn: {
    ganeshaInvocation: '|| ಶ್ರೀ ಗಜಾನನ ಸ್ವಾಮಿ ಪ್ರಸನ್ನ ||',
    traditionalShloka: 'ವಕ್ರತುಂಡ ಮಹಾಕಾಯ ಸೂರ್ಯಕೋಟಿ ಸಮಪ್ರಭ | ನಿರ್ವಿಘ್ನಂ ಕುರು ಮೇ ದೇವ ಸರ್ವಕಾರ್ಯೇಷು ಸರ್ವದಾ ||',
    traditionalShlokaMeaning: 'ಸರ್ವ ವಿಘ್ನಗಳನ್ನು ನಿವಾರಿಸಿ, ಸಕಲ ಶುಭಗಳನ್ನು ಅನುಗ್ರಹಿಸುವ ಶ್ರೀ ಮಹಾಗಣಪತಿಯ ಕೃಪೆಯಿಂದ ಈ ಮಂಗಳ ಕಾರ್ಯವು ನಿರ್ವಿಘ್ನವಾಗಿ ನೆರವೇರಲಿ ಎಂದು ಪ್ರಾರ್ಥಿಸುತ್ತೇವೆ.',
    invitationTitle: 'ಶುಭ ವಿವಾಹ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ',
    invitationSubtitle: 'ನಮ್ಮ ಪುತ್ರನ ಪಾವನ ಶುಭ ವಿವಾಹ ಮಹೋತ್ಸವಕ್ಕೆ ಸಕುಟುಂಬ ಸಮೇತರಾಗಿ ಆಗಮಿಸಿ ಹರಸಬೇಕಾಗಿ ಕೋರುತ್ತೇವೆ',
    datesBanner: '28 & 29 ನವೆಂಬರ್ 2026 • ಹಿಂದೂಪುರ, ಆಂಧ್ರಪ್ರದೇಶ',
    openInvitation: 'ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ ತೆರೆಯಿರಿ',
    skipIntro: 'ಆಮಂತ್ರಣಕ್ಕೆ ತೆರಳಿ',
    blessingsHeading: 'ಹಿರಿಯರ ಆಶೀರ್ವಾದಗಳೊಂದಿಗೆ',
    grandparentsBlessing: 'ದಿವಂಗತ ಶ್ರೀಮತಿ ಹನುಮಕ್ಕ ಮತ್ತು ಶ್ರೀ ತಿಮ್ಮಾರೆಡ್ಡಿ ಅವರ ದಿವ್ಯಾಶೀರ್ವಾದಗಳೊಂದಿಗೆ',
    invitationLetterHeading: 'ಹಾರ್ದಿಕ ಆಹ್ವಾನ',
    invitationLetterBody: 'ಶ್ರೀಮತಿ ಜಿ. ಗೋವಿಂದಮ್ಮ & ಶ್ರೀ ಜಿ. ನರಸಿಂಹ ರೆಡ್ಡಿ ದಂಪತಿಗಳು ತಮ್ಮ ಪ್ರೀತಿಯ ಪುತ್ರನ ಶುಭ ವಿವಾಹ ಮಹೋತ್ಸವದ ಪವಿತ್ರ ಸಂದರ್ಭದಲ್ಲಿ, ಕುಟುಂಬ ಸಮೇತರಾಗಿ ಆಗಮಿಸಿ ವಧು-ವರರನ್ನು ಆಶೀರ್ವದಿಸಬೇಕಾಗಿ ಹಾರ್ದಿಕವಾಗಿ ಆಹ್ವಾನಿಸುತ್ತಾರೆ.',
    coupleHeading: 'ಕಲ್ಯಾಣ ವಧು-ವರರು',
    groomTitle: 'ವರ',
    brideTitle: 'ವಧು',
    sonOf: 'ಸುಪುತ್ರ',
    daughterOf: 'ಸುಪುತ್ರಿ',
    nativePlace: 'ಸ್ವಗ್ರಾಮ',
    wedsBadge: 'ವಿವಾಹ',
    countdownHeading: 'ಶುಭ ಮುಹೂರ್ತದ ಕ್ಷಣಗಣನೆ',
    countdownSubtitle: '29 ನವೆಂಬರ್ 2026 ರ ಬೆಳಗ್ಗೆ 9:00 ಗಂಟೆಗೆ ನೆರವೇರುವ ಶುಭ ಮುಹೂರ್ತಕ್ಕೆ ಉಳಿದಿರುವ ಸಮಯ',
    days: 'ದಿನಗಳು',
    hours: 'ಗಂಟೆಗಳು',
    minutes: 'ನಿಮಿಷಗಳು',
    seconds: 'ಸೆಕೆಂಡುಗಳು',
    countdownFinished: 'ಶುಭ ಮುಹೂರ್ತದ ಪಾವನ ಘಳಿಗೆ ಆರಂಭವಾಗಿದೆ! ಗಣೇಶ್ & ಅನೂಷಾ ನವಜೋಡಿಗೆ ತಮ್ಮ ಹೃತ್ಪೂರ್ವಕ ಆಶೀರ್ವಾದವಿರಲಿ.',
    eventsHeading: 'ಮಂಗಳ ಕಾರ್ಯಕ್ರಮಗಳು',
    eventsSubtitle: 'ಈ ಪವಿತ್ರ ಮತ್ತು ಸಂಭ್ರಮದ ಕ್ಷಣಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿ ನಮ್ಮೊಂದಿಗೆ ಹರ್ಷಿಸಿ',
    receptionTitle: 'ಸ್ವಾಗತ ಸಮಾರಂಭ (ರಿಸೆಪ್ಷನ್)',
    muhurthamTitle: 'ಶುಭ ಮುಹೂರ್ತ (ಕಲ್ಯಾಣ)',
    addToGoogleCalendar: 'ಗೂಗಲ್ ಕ್ಯಾಲೆಂಡರ್‌ಗೆ ಸೇರಿಸಿ',
    downloadIcs: 'ಕ್ಯಾಲೆಂಡರ್ ಈವೆಂಟ್ ಡೌನ್‌ಲೋಡ್ (.ics)',
    venueHeading: 'ಕಲ್ಯಾಣ ಮಂಟಪ',
    venueSubtitle: 'ಶ್ರೀ ಕನಕದಾಸ ಕಲ್ಯಾಣ ಮಂಟಪ, ಹಿಂದೂಪುರ, ಆಂಧ್ರಪ್ರದೇಶ',
    getDirections: 'ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ದಾರಿ ತಿಳಿಯಿರಿ',
    venueNote: 'ಹಿಂದೂಪುರ ನಗರದ ಕೇಂದ್ರ ಭಾಗದಲ್ಲಿದೆ. ಸುಸಜ್ಜಿತ ಸೌಲಭ್ಯ ಹಾಗೂ ವಿಶಾಲವಾದ ವಾಹನ ನಿಲುಗಡೆ ಲಭ್ಯವಿದೆ.',
    addressesHeading: 'ಕುಟುಂಬ ನಿವಾಸಗಳು & ವಿಳಾಸಗಳು',
    addressesSubtitle: 'ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ಕುಟುಂಬಸ್ಥರನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು',
    copyAddress: 'ವಿಳಾಸ ಕಾಪಿ ಮಾಡಿ',
    addressCopied: 'ವಿಳಾಸ ನಕಲಿಸಲಾಗಿದೆ!',
    rsvpHeading: 'ನಿಮ್ಮ ಉಪಸ್ಥಿತಿ ದೃಢೀಕರಣ (RSVP)',
    rsvpSubtitle: 'ತಮ್ಮ ಉಪಸ್ಥಿತಿ ಮತ್ತು ಆಶೀರ್ವಾದಗಳು ನಮ್ಮ ವಿವಾಹ ಸಮಾರಂಭಕ್ಕೆ ವಿಶೇಷ ಶೋಭೆ ತರಲಿವೆ. ದಯವಿಟ್ಟು ತಮ್ಮ ಆಗಮನವನ್ನು ಖಚಿತಪಡಿಸಿ.',
    rsvpNameLabel: 'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು *',
    rsvpNamePlaceholder: 'ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
    rsvpPhoneLabel: 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (ಐಚ್ಛಿಕ)',
    rsvpPhonePlaceholder: 'ಉದಾ: 98765 43210',
    rsvpAttendanceLabel: 'ತಾವು ಸಮಾರಂಭಕ್ಕೆ ಆಗಮಿಸುವಿರಾ? *',
    rsvpBoth: 'ರಿಸೆಪ್ಷನ್ ಹಾಗೂ ಮುಹೂರ್ತ ಎರಡಕ್ಕೂ ಸಂತೋಷದಿಂದ ಆಗಮಿಸುವೆವು',
    rsvpMuhurtham: 'ಶುಭ ಮುಹೂರ್ತಕ್ಕೆ ಮಾತ್ರ (29 ನವೆಂಬರ್)',
    rsvpReception: 'ರಿಸೆಪ್ಷನ್‌ಗೆ ಮಾತ್ರ (28 ನವೆಂಬರ್)',
    rsvpCannot: 'ಬರಲು ಅಸಾಧ್ಯವಾಗಿದೆ, ಹೃತ್ಪೂರ್ವಕ ಶುಭಾಶಯಗಳು',
    rsvpGuestsLabel: 'ಒಟ್ಟು ಬರುವ ಅತಿಥಿಗಳ ಸಂಖ್ಯೆ',
    rsvpWishesLabel: 'ನವ ವಧು-ವರರಿಗೆ ತಮ್ಮ ಹಾರೈಕೆಗಳು (ಐಚ್ಛಿಕ)',
    rsvpWishesPlaceholder: 'ಗಣೇಶ್ & ಅನೂಷಾ ಜೋಡಿಗೆ ತಮ್ಮ ಶುಭ ಹಾರೈಕೆಗಳನ್ನು ತಿಳಿಸಿ...',
    rsvpSubmitBtn: 'ನನ್ನ ಆಗಮನವನ್ನು ಖಚಿತಪಡಿಸಿ',
    rsvpWhatsAppBtn: 'ವಾಟ್ಸಾಪ್ ಮೂಲಕ ತಿಳಿಸಿ',
    rsvpSuccessMsg: 'ಧನ್ಯವಾದಗಳು! ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆ ದಾಖಲಾಗಿದೆ. ತಮ್ಮ ಆಗಮನವನ್ನು ನಿರೀಕ್ಷಿಸುತ್ತಿದ್ದೇವೆ.',
    rsvpRequiredError: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೆಸರು ನಮೂದಿಸಿ, ಆಗಮನವನ್ನು ಆಯ್ಕೆಮಾಡಿ.',
    rsvpSavedLocallyNotice: 'ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಈ ಸಾಧನದಲ್ಲಿ ಉಳಿಸಲಾಗಿದೆ. ವಾಟ್ಸಾಪ್ ಮೂಲಕವೂ ಕುಟುಂಬಸ್ಥರಿಗೆ ನೇರವಾಗಿ ಕಳುಹಿಸಬಹುದು.',
    shareHeading: 'ಆಮಂತ್ರಣವನ್ನು ಹಂಚಿಕೊಳ್ಳಿ',
    shareSubtitle: 'ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಈ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆಯನ್ನು ನಿಮ್ಮ ಬಂಧು-ಮಿತ್ರರೊಂದಿಗೆ ಸುಲಭವಾಗಿ ಹಂಚಿಕೊಳ್ಳಿ',
    shareWhatsAppBtn: 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಶೇರ್ ಮಾಡಿ',
    shareCopyLinkBtn: 'ಲಿಂಕ್ ಕಾಪಿ ಮಾಡಿ',
    linkCopiedMsg: 'ಆಮಂತ್ರಣ ಲಿಂಕ್ ನಕಲಿಸಲಾಗಿದೆ!',
    footerCompliments: 'ಗುಡಿವಪ್ಪಗಾರಿ ಕುಟುಂಬಸ್ಥರು, ಬಂಧುಗಳು & ಮಿತ್ರರ ಹೃತ್ಪೂರ್ವಕ ಹಾರೈಕೆಗಳೊಂದಿಗೆ.',
    footerBlessingShloka: '|| ಮಂಗಳಂ ಭಗವಾನ್ ವಿಷ್ಣುಃ ಮಂಗಳಂ ಗರುಡಧ್ವಜಃ | ಮಂಗಳಂ ಪುಂಡರೀಕಾಕ್ಷಃ ಮಂಗಳಾಯ ತನೋ ಹರಿಃ ||',
    soundOn: 'ಸಂಗೀತ ನಿಲ್ಲಿಸಿ',
    soundOff: 'ಸನ್ನಾಯಿ ರಾಗ ಕೇಳಿ',
    petalsOn: 'ಹೂವಿನ ಮಳೆ ನಿಲ್ಲಿಸಿ',
    petalsOff: 'ಹೂವಿನ ಮಳೆ ಆರಂಭಿಸಿ'
  }
};
