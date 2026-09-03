export type LanguageCode =
  | 'en'   // English (Default / Fallback)
  | 'as'   // Assamese (Assam)
  | 'brx'  // Bodo (Assam)
  | 'njz'  // Nyishi (Arunachal Pradesh)
  | 'adi'  // Adi (Arunachal Pradesh)
  | 'mni'  // Meiteilon / Manipuri (Manipur)
  | 'kha'  // Khasi (Meghalaya)
  | 'grt'  // Garo (Meghalaya)
  | 'lus'  // Mizo (Mizoram)
  | 'nag'  // Nagamese (Nagaland)
  | 'ao'   // Ao Naga (Nagaland)
  | 'ne'   // Nepali (Sikkim)
  | 'bn'   // Bengali (Tripura / Assam)
  | 'trp';  // Kokborok (Tripura)

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
  state: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  { code: 'en',  name: 'English',            nativeName: 'English',       state: 'National / All States', flag: '🇮🇳' },
  { code: 'as',  name: 'Assamese',           nativeName: 'অসমীয়া',        state: 'Assam',                flag: '🌾' },
  { code: 'brx', name: 'Bodo',               nativeName: 'बर’',           state: 'Assam (BTC)',          flag: '🌾' },
  { code: 'njz', name: 'Nyishi',             nativeName: 'Nyishi',        state: 'Arunachal Pradesh',    flag: '🏔️' },
  { code: 'adi', name: 'Adi',                nativeName: 'Adi',           state: 'Arunachal Pradesh',    flag: '🏔️' },
  { code: 'mni', name: 'Meiteilon (Manipuri)', nativeName: 'মৈতৈলোন্',    state: 'Manipur',              flag: '🌸' },
  { code: 'kha', name: 'Khasi',              nativeName: 'Ka Ktien Khasi', state: 'Meghalaya',            flag: '☁️' },
  { code: 'grt', name: 'Garo',               nativeName: 'A·chik',        state: 'Meghalaya',            flag: '☁️' },
  { code: 'lus', name: 'Mizo',               nativeName: 'Mizo ṭawng',    state: 'Mizoram',              flag: '🌿' },
  { code: 'nag', name: 'Nagamese',           nativeName: 'Nagamese',      state: 'Nagaland',             flag: '🌄' },
  { code: 'ao',  name: 'Ao Naga',            nativeName: 'Ao Oshi',       state: 'Nagaland',             flag: '🌄' },
  { code: 'ne',  name: 'Nepali',             nativeName: 'नेपाली',        state: 'Sikkim',               flag: '🏔️' },
  { code: 'bn',  name: 'Bengali',            nativeName: 'বাংলা',         state: 'Tripura / Assam',      flag: '🌊' },
  { code: 'trp', name: 'Kokborok',           nativeName: 'Kokborok',      state: 'Tripura',              flag: '🎋' },
];

// Region/State to suggested languages mapping
export const STATE_TO_LANGUAGES: Record<string, LanguageCode[]> = {
  'Assam': ['as', 'brx', 'bn', 'en'],
  'Arunachal Pradesh': ['njz', 'adi', 'en'],
  'Manipur': ['mni', 'en'],
  'Meghalaya': ['kha', 'grt', 'en'],
  'Mizoram': ['lus', 'en'],
  'Nagaland': ['nag', 'ao', 'en'],
  'Sikkim': ['ne', 'en'],
  'Tripura': ['bn', 'trp', 'en'],
};

export interface AlertTranslation {
  title: string;
  message: string;
  actionText?: string;
}

export type AlertKey =
  | 'landslide_warning'
  | 'landslide_critical'
  | 'heavy_rain_warning'
  | 'weather_changing_low'
  | 'road_damage_medium'
  | 'corridor_cleared_low'
  | 'vehicle_delay_notice';

export const ALERT_TRANSLATIONS: Record<AlertKey, Record<LanguageCode, AlertTranslation>> = {
  // HIGH Alert: Landslide Warning
  landslide_warning: {
    en: {
      title: 'LANDSLIDE ALERT',
      message: 'There is heavy rain and a chance of landslides.',
      actionText: 'Exercise extreme caution & monitor route.'
    },
    as: {
      title: 'ভূমিস্খলনৰ সতৰ্কবাৰ্তা',
      message: 'বৰষুণ ধাৰাসাৰ হৈছে আৰু ভূমিস্খলনৰ সম্ভাৱনা আছে।',
      actionText: 'সাৱধান হওক আৰু পথ নিৰীক্ষণ কৰক।'
    },
    brx: {
      title: 'हास्रुनायनि खौरां',
      message: 'गोबां अखा हानाय आरो हास्रुनायनि खौरां दं।',
      actionText: 'सावधाने था आरो लामाखौ नायबाय था।'
    },
    njz: {
      title: 'MUDANG CHOHBO HETOKO',
      message: 'Edo botte doola aru mudang chohbo koda.',
      actionText: 'Pake loma hoce dula repto.'
    },
    adi: {
      title: 'DUMI DUPE MIRUM',
      message: 'Edo lanka dolo dumi dupe mirum dung.',
      actionText: 'Kape ilenka dula repto.'
    },
    mni: {
      title: 'চিং থাংখ্রিবগী খুদোংথিবা',
      message: 'নোং কনা চুবা অমসুং চিং থাংখ্রিবগী খুদোংথিবা লৈ।',
      actionText: 'চেকশিন্না লৈবিয়ু অমসুং লম্বী য়েংবিয়ু।'
    },
    kha: {
      title: 'JINGMAHAM BAN TWAD KHYNDEW',
      message: 'U slap jur bha bad don ka jingshisha ban thut ka khyndew (landslide).',
      actionText: 'Leh sumar bha bad pynleit jingmut ha ka lynti.'
    },
    grt: {
      title: 'A·A BE·ANI MIKRAKANI',
      message: 'Mikka jrimbee senga aro a·a be·gnangni kenchakani donga.',
      actionText: 'Simsakbee dongbo aro ramako nina re·ba.'
    },
    lus: {
      title: 'LEI MIN HLAUHAWM',
      message: 'Ruah a tling nasa hle a, khampat tlukchhiat (landslide) a hlauhawm hle.',
      actionText: 'Fimkhur hle la, kawng dinhmun thlithlai reng rawh.'
    },
    nag: {
      title: 'LANDSLIDE WARNING',
      message: 'Bishi barish ahi ase aru landslide hobo pare.',
      actionText: 'Bishi hushiyaar thakibi aru rasta saikena jabi.'
    },
    ao: {
      title: 'ANÜNG ALABAR MECHITEPBA',
      message: 'Tsünglu kanga arur aser anüng anünga alar.',
      actionText: 'Kanga küptoka litetjang aser lenmang reprangjang.'
    },
    ne: {
      title: 'पहिरो चेतावनी',
      message: 'ठूलो पानी परिरहेको छ र पहिरो जाने सम्भावना छ।',
      actionText: 'अत्यन्त सतर्क रहनुहोस् र बाटो निगरानी गर्नुहोस्।'
    },
    bn: {
      title: 'ভূমিধস সতর্কতা',
      message: 'প্রবল বৃষ্টি হচ্ছে এবং ভূমিধসের সম্ভাবনা রয়েছে।',
      actionText: 'চরম সতর্কতা অবলম্বন করুন এবং রুট পর্যবেক্ষণ করুন।'
    },
    trp: {
      title: 'HA BUKHUKLAI MANO SACHUKNI',
      message: 'Kwbang watwi kwrwngwi hani bisi gwnang.',
      actionText: 'Kahambai khwlai di tei lamano nai di.'
    },
  },

  // CRITICAL Alert: Landslide Blocking / Immediate Danger
  landslide_critical: {
    en: {
      title: 'CRITICAL LANDSLIDE DANGER',
      message: 'Landslide reported nearby. Avoid this route immediately.',
      actionText: 'Halt convoy and contact emergency control.'
    },
    as: {
      title: 'চৰম ভূমিস্খলনৰ বিপদ',
      message: 'কাষৰতে ভূমিস্খলনৰ বাতৰি পোৱা গৈছে। এই পথটো অবিলম্বে পৰিহাৰ কৰক।',
      actionText: 'কনভয় ৰখাওক আৰু নিয়ন্ত্ৰণ কক্ষৰ সৈতে যোগাযোগ কৰক।'
    },
    brx: {
      title: 'गिखांथाव हास्रुनायनि खौरां',
      message: 'खाथियावनो हास्रुनाय जादों। बे लामाखौ दा थां।',
      actionText: 'गाडिखौ लाखि आरो मदद लानो कल खालाम।'
    },
    njz: {
      title: 'BOTTE MUDANG DANGER',
      message: 'Akam loma mudang chopeba. So lamko maheto.',
      actionText: 'Lamko heto aru command room repto.'
    },
    adi: {
      title: 'LOMA DUMI DUPE',
      message: 'Loma dupe mikom dung. So bedang lok ilen mapeka.',
      actionText: 'Bedang lanka rula command dakang.'
    },
    mni: {
      title: 'চিং থাংখ্রিবগী অকনবা খুদোংথিবা',
      message: 'নাকনদা চিং থাংখ্রে। অসিগী লম্বী অসি থৌদোকপা য়ারোই।',
      actionText: 'কনভোয় লেপকনু অমসুং কন্ত্রোল রুমদা পাউ পীবিয়ু।'
    },
    kha: {
      title: 'KA JINGMAHAM JINGTWAD KHYNDEW BA JUR',
      message: 'Don ka jingtwad khyndew hajan. Ym bit ban pyndonkam ia kane ka lynti.',
      actionText: 'Sangeh noh mardor bad phone sha control room.'
    },
    grt: {
      title: 'KENBEGNI A·A BE·ANI',
      message: 'Seng·gnang a·a be·ani kobor man·aha. Ia ramako jakkalsiknade.',
      actionText: 'Gari-ko donge control room-ona call ka·bo.'
    },
    lus: {
      title: 'LEI MIN HLAUHAWM NASA',
      message: 'Hnaivai ah lei a min a, he kawng hi zawh nghal suh ang che.',
      actionText: 'In tlan chhunzawm suh ula, Control Room be nghal rawh u.'
    },
    nag: {
      title: 'CRITICAL LANDSLIDE DANGER',
      message: 'Kaksot te landslide hoise. Eitu rasta te najabi.',
      actionText: 'Gari rokhai di aru Control Room te khobor koribi.'
    },
    ao: {
      title: 'ANÜNG ALABA KANGA TASHIR',
      message: 'Anasa anüng alaba osang angashir. Iba lenmang meshitepjang.',
      actionText: 'Gari anentsütsü aser Control Room den jembitsü.'
    },
    ne: {
      title: 'गम्भीर पहिरो खतरा',
      message: 'नजिकै पहिरो गएको खबर आएको छ। तुरुन्तै यो बाटो नजानुहोस्।',
      actionText: 'सवारी रोक्नुहोस् र नियन्त्रण कक्षमा सम्पर्क गर्नुहोस्।'
    },
    bn: {
      title: 'মারাত্মক ভূমিধস বিপদ',
      message: 'নিকটবর্তী এলাকায় ভূমিধসের খবর পাওয়া গেছে। অবিলম্বে এই রুটটি এড়িয়ে চলুন।',
      actionText: 'কনভয় থামান এবং জরুরি নিয়ন্ত্রণ কক্ষে যোগাযোগ করুন।'
    },
    trp: {
      title: 'KHOROGO HA BUKHUKLAI MANO',
      message: 'Khorogo ha bukhuklai kha. O lamano siringlai di.',
      actionText: 'Garino thum di tei Control Room-no phone khwlai di.'
    },
  },

  // MEDIUM Alert: Heavy Rainfall Warning
  heavy_rain_warning: {
    en: {
      title: 'HEAVY RAIN WARNING',
      message: 'Heavy rainfall expected. Visibility and road grip significantly reduced.',
      actionText: 'Reduce convoy speed to below 40 km/h.'
    },
    as: {
      title: 'ধাৰাসাৰ বৰষুণৰ সতৰ্কবাৰ্তা',
      message: 'ধাৰাসাৰ বৰষুণৰ সম্ভাৱনা। দৃশ্যমানতা আৰু পথৰ স্থিতি হ্ৰাস পাইছে।',
      actionText: 'গতিবেগ ৪০ কিমি/ঘণ্টাতকৈ কম কৰক।'
    },
    brx: {
      title: 'गोबां अखा हानायनि खौरां',
      message: 'गोबां अखा हानो हागौ। लामायाव गिनाय दं।',
      actionText: 'गाडिनि गोख्रैथिखौ खम खालाम।'
    },
    njz: {
      title: 'EDO BOTTE ADVISORY',
      message: 'Edo botte doopa koda. Lamko nyi hoh heto.',
      actionText: 'Gari speed ko kaji to.'
    },
    adi: {
      title: 'EDO DUMI WARNING',
      message: 'Edo lanka dolo mirum dung. Bedang lok kaji to.',
      actionText: 'Gari speed ko kaji to.'
    },
    mni: {
      title: 'নোং কনা চুবগী চেকশিন-ৱাফম',
      message: 'নোং কনা চুগনি হায়না পানরি। লম্বীদা মীৎয়েং তাংশিনবা য়াই।',
      actionText: 'গাডীগী স্পীড ৪০ কিমি/ঘণ্টাগী মখাদা থম্মু।'
    },
    kha: {
      title: 'JINGMAHAM SLAP JUR',
      message: 'U slap u lah ban jur bha. Ka jingshai bad ka lynti kan kham eh.',
      actionText: 'Pynrit ia ka speed jong ka kali.'
    },
    grt: {
      title: 'MIKKA JRIMBEEANI MIKRAKANI',
      message: 'Mikka jrimbee sena am·a. Rama re·na neng·nikani donga.',
      actionText: 'Gari-ni speed-ko komiatbo.'
    },
    lus: {
      title: 'RUAH SUR NASA HLAUHAWM',
      message: 'Ruah nasa tak a sur dawn. Kawng a nal hle ang.',
      actionText: 'Tlan muang la, speed 40 km/h aia tlem tlan rawh.'
    },
    nag: {
      title: 'HEAVY RAIN WARNING',
      message: 'Bishi barish hobo pare. Rasta te phisal ase.',
      actionText: 'Gari dhire chalaibi (40 km/h niche).'
    },
    ao: {
      title: 'TSÜNGLU KANGA ARUR',
      message: 'Tsünglu kanga arutsü. Lenmang nung timtem arutsü.',
      actionText: 'Gari anasa kanga junga zübazüba anishang.'
    },
    ne: {
      title: 'भारी वर्षा चेतावनी',
      message: 'भारी वर्षा हुने सम्भावना छ। सडक चिप्लो र दृश्यता कम भएको छ।',
      actionText: 'सवारीको गति ४० किमी/घन्टा भन्दा कम गर्नुहोस्।'
    },
    bn: {
      title: 'ভারী বৃষ্টিপাতের সতর্কতা',
      message: 'ভারী বৃষ্টিপাতের পূর্বাভাস। রাস্তায় দৃশ্যমানতা ও গ্রিপ উল্লেখযোগ্যভাবে কমে গেছে।',
      actionText: 'কনভয়ের গতি ৪০ কিমি/ঘণ্টার নিচে নামিয়ে আনুন।'
    },
    trp: {
      title: 'KWBANG WATWI KWLAINI SACHUKNI',
      message: 'Kwbang watwi kwlai mano. Lamano naiwi chalaidi.',
      actionText: 'Garini speed komi di.'
    },
  },

  // LOW Alert: Weather Changing
  weather_changing_low: {
    en: {
      title: 'WEATHER ADVISORY',
      message: 'Weather conditions are changing. Fog and drizzle developing along hill ridge.',
      actionText: 'Turn on fog headlights.'
    },
    as: {
      title: 'বতৰৰ পৰামৰ্শ',
      message: 'বতৰ সলনি হৈছে। পাহাৰৰ পথত কুঁৱলী আৰু বৰষুণৰ টোপাল পৰিছে।',
      actionText: 'ফগ লাইট অন কৰক।'
    },
    brx: {
      title: 'बारहावा सोलायनाय',
      message: 'बारहावाया सोलायदों। हाजोनि लामायाव खौरां दं।',
      actionText: 'गाडिनि लाइटकौ गाब होनानै था।'
    },
    njz: {
      title: 'WEATHER UPDATE',
      message: 'Weather conditions change reba. Hill ridge repto.',
      actionText: 'Fog light on to.'
    },
    adi: {
      title: 'WEATHER UPDATE',
      message: 'Weather conditions dolo change dunge.',
      actionText: 'Fog light on to.'
    },
    mni: {
      title: 'নুংশিৎ-নোংগী পাউ',
      message: 'নুংশিৎ-নোংগী ফীভম হোংলক্লি। চিংগী লম্বীদা কুহুম থোক্লক্লি।',
      actionText: 'ফোগ লাইট থানবিয়ু।'
    },
    kha: {
      title: 'JINGPYNTIP SUINBNENG',
      message: 'Ka suinbneng ka la kylla. Don u lyoh bad slap rit ha lum.',
      actionText: 'Buh ia ka fog light.'
    },
    grt: {
      title: 'SALGIPLAN KOBOR',
      message: 'Salgipini obosta dingtangenga. A·brini ramako nina re·ba.',
      actionText: 'Fog light-ko on ka·bo.'
    },
    lus: {
      title: 'KHAWCHIN THLENGLEH',
      message: 'Khawchin a inthlak danglam mek. Tlang kawngah chhum a zing.',
      actionText: 'Fog light ti eng rawh u.'
    },
    nag: {
      title: 'WEATHER ADVISORY',
      message: 'Mausam bodli ase. Pahar rasta te kuwa ase.',
      actionText: 'Fog light jolabi.'
    },
    ao: {
      title: 'ANÜNG-TSÜNGLU OSANG',
      message: 'Mausam melenshir. Lenmang nung chidang-chidanga arur.',
      actionText: 'Fog light atsüktetjang.'
    },
    ne: {
      title: 'मौसम सल्लाह',
      message: 'मौसम परिवर्तन हुँदैछ। पहाडी मार्गमा कुहिरो र पानी पर्न थालेको छ।',
      actionText: 'फग लाइट बाल्नुहोस्।'
    },
    bn: {
      title: 'আবহাওয়া পরামর্শ',
      message: 'আবহাওয়া পরিবর্তন হচ্ছে। পাহাড়ের রাস্তায় কুয়াশা ও গুঁড়ি গুঁড়ি বৃষ্টি হচ্ছে।',
      actionText: 'ফগ লাইট জ্বালিয়ে রাখুন।'
    },
    trp: {
      title: 'NOGO TANI KOBOR',
      message: 'Nogo tani phulano salai kha. Hachuk lamano kuasa kwlai tongo.',
      actionText: 'Fog light-no on khwlai di.'
    },
  },

  // MEDIUM Alert: Road Damage / Bottleneck
  road_damage_medium: {
    en: {
      title: 'ROAD DAMAGE ADVISORY',
      message: 'Road surface subsidence reported. Heavy vehicles moving under caution.',
      actionText: 'Maintain single lane discipline.'
    },
    as: {
      title: 'পথ ক্ষতিগ্ৰস্তৰ পৰামৰ্শ',
      message: 'পথৰ পৃষ্ঠভাগ ক্ষতিগ্ৰস্ত হোৱাৰ বাতৰি পোৱা গৈছে। গধুৰ বাহনসমূহ সাৱধানে চলিছে।',
      actionText: 'একক লেন নীতি মানি চলক।'
    },
    brx: {
      title: 'लामा गाज्रि जानायनि खौरां',
      message: 'लामा गाज्रि जादों। गाडिफोरा सावधाने थांगासिनो दं।',
      actionText: 'लामाखौ मानिनानै था।'
    },
    njz: {
      title: 'LAMKO DAMAGE NOTICE',
      message: 'Lamko subsidence hoce. Heavy vehicle careful dula reba.',
      actionText: 'Single lane repto.'
    },
    adi: {
      title: 'BEDANG DAMAGE NOTICE',
      message: 'Bedang lanka damage dunge. Gari dula kape ilenka.',
      actionText: 'Single lane ruka.'
    },
    mni: {
      title: 'লম্বী মাংখ্রিবগী চেকশিন-ৱাফম',
      message: 'লম্বী মাংখ্রে হায়বা পাউ ফংই। অহুম্বা গাডীশিং চেকশিন্না চৎলি।',
      actionText: 'লেন অমখক্তদা চৎপিয়ু।'
    },
    kha: {
      title: 'JINGMAHAM LYNTI SNIEW',
      message: 'Ka lynti ka la sniew ha shilynter. Ki kali bakhia ki iaid suki.',
      actionText: 'Iaid tang ha kawei ka lane.'
    },
    grt: {
      title: 'RAMA GIMAANI MIKRAKANI',
      message: 'Rama gimaani kobor donga. Gari jrimrang simsakbee re·enga.',
      actionText: 'Gipin ramako sikoade.'
    },
    lus: {
      title: 'KAWNG CHHIA HLAUHAWM',
      message: 'Kawng a chhe deuh a. Motor lian zawk te fimkhur takin an tlan.',
      actionText: 'Lane pakhatah chauh tlan rawh u.'
    },
    nag: {
      title: 'ROAD DAMAGE ADVISORY',
      message: 'Rasta kharap hoise. Bishi daangro gari hushiyaar te choli ase.',
      actionText: 'Single lane te cholaibi.'
    },
    ao: {
      title: 'LENMANG MAJUNGBA OSANG',
      message: 'Lenmang raksaba osang angashir. Gari tulu kanga küptoka aodang.',
      actionText: 'Lenmang ka nung dang aodang.'
    },
    ne: {
      title: 'सडक क्षति सल्लाह',
      message: 'सडक धसिएको जानकारी आएको छ। ठूला सवारी साधनहरू सावधानीपूर्वक चलिरहेका छन्।',
      actionText: 'एकल लेन अनुशासन कायम राख्नुहोस्।'
    },
    bn: {
      title: 'রাস্তা ক্ষতিগ্রস্তের পরামর্শ',
      message: 'রাস্তার পৃষ্ঠ ক্ষতিগ্রস্ত হয়েছে। ভারী যানবাহন সতর্কতার সাথে চলাচল করছে।',
      actionText: 'একক লেন নিয়ম মেনে চলুন।'
    },
    trp: {
      title: 'LAMA BUKHUKNI SACHUKNI',
      message: 'Lama bukhuk kha. Gari krao rog kahambai chalaidi.',
      actionText: 'Khoroksa lamano chalaidi.'
    },
  },

  // LOW Alert: Corridor Cleared
  corridor_cleared_low: {
    en: {
      title: 'CORRIDOR ALL CLEAR',
      message: 'Debris cleared successfully. Normal speed and two-way traffic restored.',
      actionText: 'Corridor fully operational.'
    },
    as: {
      title: 'পথ সম্পূৰ্ণ মুকলি',
      message: 'আৱৰ্জনা সফলতাৰে আঁতৰোৱা হৈছে। স্বাভাৱিক যাতায়ত পুনৰ আৰম্ভ হৈছে।',
      actionText: 'পথ সম্পূৰ্ণৰূপে কাৰ্যক্ষম।'
    },
    brx: {
      title: 'लामा मोजां जाबाय',
      message: 'लामाखौ साफा खालामबाय। दा गाडिफोरा मोजांङै थांनो हाबाय।',
      actionText: 'लामा मुकलि जाबाय।'
    },
    njz: {
      title: 'LAMKO CLEAR REBA',
      message: 'Debris clear hoce. Normal traffic resume.',
      actionText: 'Corridor operational.'
    },
    adi: {
      title: 'BEDANG CLEAR RUKA',
      message: 'Bedang lanka clear dung. Normal traffic resume.',
      actionText: 'Bedang ready.'
    },
    mni: {
      title: 'লম্বী ক্লিয়ার ওইরে',
      message: 'চিং থাংখ্রিবা লংথোকখ্রে। নোর্মাল ত্রাফিক অমুক হন্না চৎপা য়ারে।',
      actionText: 'লম্বী ক্লিয়ার ওইরে।'
    },
    kha: {
      title: 'KA LYNTI KA LA SAID',
      message: 'Ka jingkhang lynti ka la biang. Ka jingiaid kali ka la long kaba biang.',
      actionText: 'Ka lynti ka la plie pura.'
    },
    grt: {
      title: 'RAMA KENGIPA SENG·AHA',
      message: 'Ramako tari-aha. Gari re·rurani name ong·aha.',
      actionText: 'Rama pilaknan seng·aha.'
    },
    lus: {
      title: 'KAWNG A TLAI FAI TA',
      message: 'Hnah leh lei vung then fai a ni tawh a. Pangngai takin motor a tlan theih ta.',
      actionText: 'Kawng a tluang e.'
    },
    nag: {
      title: 'CORRIDOR CLEAR HOISE',
      message: 'Rasta pura safa hoise. Sob gari aram te jabo pare.',
      actionText: 'Rasta ready ase.'
    },
    ao: {
      title: 'LENMANG JUNGMAHA',
      message: 'Lenmang nung timtem agizükogo. Gari junga arutsü akok.',
      actionText: 'Lenmang tenzükogo.'
    },
    ne: {
      title: 'सडक खुला भयो',
      message: 'पहिरोको फोहोर सफलतापूर्वक हटाइयो। सामान्य आवागमन पुनः सुचारु भएको छ।',
      actionText: 'सडक पूर्ण रूपमा सञ्चालनमा छ।'
    },
    bn: {
      title: 'করিডোর সম্পূর্ণ পরিষ্কার',
      message: 'সফলভাবে ধ্বংসাবশেষ পরিষ্কার করা হয়েছে। স্বাভাবিক যান চলাচল পুনরায় শুরু হয়েছে।',
      actionText: 'করিডোর সম্পূর্ণ সচল।'
    },
    trp: {
      title: 'LAMA KAHAM KHA',
      message: 'Lamano kaham khwlai kha. Gari rog kahambai thano mano.',
      actionText: 'Lama ready kha.'
    },
  },

  // MEDIUM Alert: Vehicle Delay Notice
  vehicle_delay_notice: {
    en: {
      title: 'VEHICLE DELAY NOTICE',
      message: 'Heavy transport convoy experiencing grade and terrain slowdown.',
      actionText: 'ETA updated automatically.'
    },
    as: {
      title: 'বাহন পলমৰ জাননী',
      message: 'পাহাৰীয়া ভূখণ্ডৰ বাবে গধুৰ পৰিবহণ কনভয়ৰ গতি মন্থৰ হৈছে।',
      actionText: 'সময় পুনৰ নিৰ্ধাৰণ কৰা হৈছে।'
    },
    brx: {
      title: 'गाडि लेट जानायनि खौरां',
      message: 'हाजो लामायाव गाडिनि थांनाया लेट जादों।',
      actionText: 'टाइम आपदेत जाबाय।'
    },
    njz: {
      title: 'GARI DELAY NOTICE',
      message: 'Convoy terrain slowdown hoce.',
      actionText: 'ETA updated.'
    },
    adi: {
      title: 'GARI DELAY NOTICE',
      message: 'Gari convoy slowdown dolo.',
      actionText: 'ETA updated.'
    },
    mni: {
      title: 'গাডী লেৎ ওইবগী পাউ',
      message: 'চিংগী লম্বীনা মরম ওইদুনা গাডীগী খোঙচৎ লেৎ ওইরে।',
      actionText: 'ইটিএ অপদেত তৌরে।'
    },
    kha: {
      title: 'JINGPYNTIP KALI SANGEH',
      message: 'Ka kynhun kali ka la kham slem namar ka lynti lum.',
      actionText: 'Pynbna por thymmai.'
    },
    grt: {
      title: 'GARI RUAANI KOBOR',
      message: 'A·brini a·sel gari rang ru·utaiaha.',
      actionText: 'ETA update ka·aha.'
    },
    lus: {
      title: 'MOTOR TLAN MUANG',
      message: 'Tlang kawng harsa avangin motor tlan a muang deuh.',
      actionText: 'Thlen hun tur siamṭhat a ni.'
    },
    nag: {
      title: 'VEHICLE DELAY NOTICE',
      message: 'Pahar rasta nimite gari dhire hoise.',
      actionText: 'Time update hoise.'
    },
    ao: {
      title: 'GARI MENULA OSANG',
      message: 'Lenmang kanga timtem nung gari menur.',
      actionText: 'Mapang melenshir.'
    },
    ne: {
      title: 'सवारी ढिलाइ सूचना',
      message: 'पहाडी भूभागका कारण यातायात कन्भोयको गति ढिलो भएको छ।',
      actionText: 'आगमन समय अद्यावधिक गरिएको छ।'
    },
    bn: {
      title: 'যানবাহন বিলম্ব বিজ্ঞপ্তি',
      message: 'পাহাড়ী অঞ্চলের কারণে ভারী কনভয়ের গতি হ্রাস পেয়েছে।',
      actionText: 'আগমনের সময় আপডেট করা হয়েছে।'
    },
    trp: {
      title: 'GARI LATE MANO SACHUKNI',
      message: 'Hachuk lamano gari slow kha.',
      actionText: 'Time update kha.'
    },
  },
};

// UI Translations Dictionary for Header, Notification Center, etc.
export const UI_TRANSLATIONS: Record<LanguageCode, Record<string, string>> = {
  en: {
    language: 'Language',
    notifications: 'Notifications',
    markAllRead: 'Mark all as read',
    clearAll: 'Clear all',
    noNotifications: 'No notifications',
    allCaughtUp: 'All caught up! All corridors monitored.',
    suggestedFor: 'Suggested for',
    liveEmergencyAlert: 'EMERGENCY ALERT',
    close: 'Close',
    triggerLandslide: 'Trigger Landslide Alert',
    triggerRain: 'Trigger Heavy Rain Alert',
    triggerCritical: 'Trigger Critical Danger',
    systemOperational: 'OPERATIONAL',
    controlRoom: 'Control Room',
    viewDetails: 'View Details',
    minAgo: 'min ago',
    justNow: 'Just now',
  },
  as: {
    language: 'ভাষা',
    notifications: 'জাননীসমূহ',
    markAllRead: 'সকলো পঢ়া বুলি চিহ্নিত কৰক',
    clearAll: 'সকলো মচক',
    noNotifications: 'কোনো জাননী নাই',
    allCaughtUp: 'সকলো পথ নিৰাপদ!',
    suggestedFor: 'পৰামৰ্শিত অঞ্চল',
    liveEmergencyAlert: 'জৰুৰীকালীন সতৰ্কবাৰ্তা',
    close: 'বন্ধ কৰক',
    triggerLandslide: 'ভূমিস্খলন সতৰ্কবাৰ্তা দিয়ক',
    triggerRain: 'বৰষুণৰ সতৰ্কবাৰ্তা দিয়ক',
    triggerCritical: 'চৰম বিপদ সতৰ্কবাৰ্তা',
    systemOperational: 'কাৰ্যক্ষম',
    controlRoom: 'নিয়ন্ত্ৰণ কক্ষ',
    viewDetails: 'বিস্তাৰিত চাওক',
    minAgo: 'মিনিট পূৰ্বে',
    justNow: 'এইমাত্ৰ',
  },
  brx: {
    language: 'राव',
    notifications: 'खौरांफोर',
    markAllRead: 'गासैखौबो फरायबाय होनना दिन्थि',
    clearAll: 'गासैखौबो एंगार',
    noNotifications: 'जेबो खौरां गैया',
    allCaughtUp: 'गासै लामाया मोजां!',
    suggestedFor: 'थावनिनि थाखाय',
    liveEmergencyAlert: 'गोख्रों खौरां',
    close: 'बन्द खालाम',
    triggerLandslide: 'हास्रुनायनि खौरां हो',
    triggerRain: 'अखा हानायनि खौरां हो',
    triggerCritical: 'गिखांथाव खौरां',
    systemOperational: 'जाफुंबाय',
    controlRoom: 'कन्ट्रल रूम',
    viewDetails: 'गुवारै नाय',
    minAgo: 'मिनिट सिगां',
    justNow: 'दासो',
  },
  njz: {
    language: 'Language',
    notifications: 'Notifications',
    markAllRead: 'Mark all as read',
    clearAll: 'Clear all',
    noNotifications: 'No alerts',
    allCaughtUp: 'All corridors monitored',
    suggestedFor: 'Suggested for',
    liveEmergencyAlert: 'EMERGENCY ALERT',
    close: 'Close',
    triggerLandslide: 'Trigger Landslide',
    triggerRain: 'Trigger Rain',
    triggerCritical: 'Trigger Critical',
    systemOperational: 'OPERATIONAL',
    controlRoom: 'Control Room',
    viewDetails: 'View Details',
    minAgo: 'min ago',
    justNow: 'Just now',
  },
  adi: {
    language: 'Language',
    notifications: 'Notifications',
    markAllRead: 'Mark all read',
    clearAll: 'Clear all',
    noNotifications: 'No alerts',
    allCaughtUp: 'Corridors clear',
    suggestedFor: 'Suggested for',
    liveEmergencyAlert: 'EMERGENCY ALERT',
    close: 'Close',
    triggerLandslide: 'Trigger Landslide',
    triggerRain: 'Trigger Rain',
    triggerCritical: 'Trigger Critical',
    systemOperational: 'OPERATIONAL',
    controlRoom: 'Control Room',
    viewDetails: 'View Details',
    minAgo: 'min ago',
    justNow: 'Just now',
  },
  mni: {
    language: 'লোন (Language)',
    notifications: 'পাউশিং (Notifications)',
    markAllRead: 'পুম্নমক পারবনি হায়না থম্মু',
    clearAll: 'পুম্নমক মুত্থৎলু',
    noNotifications: 'পাউ অমত্তা লৈতবনি',
    allCaughtUp: 'লম্বী পুম্নমক চেকশিন্না য়েংশিল্লি!',
    suggestedFor: 'অসিগী রিজনগীদমক',
    liveEmergencyAlert: 'অকক্নবা খুদোংথিবা পাউ',
    close: 'থিংশিনলু',
    triggerLandslide: 'চিং থাংবা পাউ পীবিয়ু',
    triggerRain: 'নোং চুবগী পাউ পীবিয়ু',
    triggerCritical: 'অকনবা ডেঞ্জর পাউ',
    systemOperational: 'ওপরেস্নেল',
    controlRoom: 'কন্ত্রোল রুম',
    viewDetails: 'বিস্তাৰিত য়েংবিয়ু',
    minAgo: 'মিনিৎ মমাংদা',
    justNow: 'হৌজিক',
  },
  kha: {
    language: 'Ktien (Language)',
    notifications: 'Ki Jingpyntip',
    markAllRead: 'Pynshai baroh ba la pule',
    clearAll: 'Pynngam baroh',
    noNotifications: 'Ym don jingmaham',
    allCaughtUp: 'Baroh ki lynti ki long kiba skhem!',
    suggestedFor: 'Ia kane ka jaka',
    liveEmergencyAlert: 'JINGMAHAM BA JUR',
    close: 'Khang',
    triggerLandslide: 'Ai jingmaham twad khyndew',
    triggerRain: 'Ai jingmaham slap jur',
    triggerCritical: 'Ai jingmaham kaba jur',
    systemOperational: 'TREI KAM',
    controlRoom: 'Control Room',
    viewDetails: 'Pule bniah',
    minAgo: 'minut mynshuwa',
    justNow: 'Mynte',
  },
  grt: {
    language: 'Ku·sik (Language)',
    notifications: 'Koborrang',
    markAllRead: 'Pilakkon poraaha ine mikrakbo',
    clearAll: 'Pilakkon galbo',
    noNotifications: 'Kobor dongja',
    allCaughtUp: 'Rama pilak seng·enga!',
    suggestedFor: 'Ia biapna',
    liveEmergencyAlert: 'JOGOT MIKRAKANI',
    close: 'Chipbo',
    triggerLandslide: 'A·a be·ani kobor on·bo',
    triggerRain: 'Mikka jrimani kobor on·bo',
    triggerCritical: 'Kenbegni kobor on·bo',
    systemOperational: 'KAM KA·ENGA',
    controlRoom: 'Control Room',
    viewDetails: 'Name nina',
    minAgo: 'minit skang',
    justNow: 'Dasan',
  },
  lus: {
    language: 'Ṭawng (Language)',
    notifications: 'Hriattirnate',
    markAllRead: 'Chhiar vek tawh angin dah rawh',
    clearAll: 'Tifai vek rawh',
    noNotifications: 'Hriattirna a awm lo',
    allCaughtUp: 'Kawng zawng zawng a tluang e!',
    suggestedFor: 'He bial tana rawt',
    liveEmergencyAlert: 'KHAWCHIN HLAUHAWM',
    close: 'Khar rawh',
    triggerLandslide: 'Lei min hriattirna pe rawh',
    triggerRain: 'Ruah sur hriattirna pe rawh',
    triggerCritical: 'Hlauhawm nasa hriattirna',
    systemOperational: 'KHAWL A KAL TLIK TLIK',
    controlRoom: 'Control Room',
    viewDetails: 'En chianna',
    minAgo: 'min kalta ah',
    justNow: 'Tun mai khan',
  },
  nag: {
    language: 'Language',
    notifications: 'Notifications',
    markAllRead: 'Sob porhise koikena mark koribi',
    clearAll: 'Sob hataibi',
    noNotifications: 'Kiba notification nai',
    allCaughtUp: 'Sob rasta theek ase!',
    suggestedFor: 'Eitu jaga laga',
    liveEmergencyAlert: 'EMERGENCY ALERT',
    close: 'Bondo koribi',
    triggerLandslide: 'Landslide Alert dibi',
    triggerRain: 'Barish Alert dibi',
    triggerCritical: 'Critical Danger Alert dibi',
    systemOperational: 'OPERATIONAL',
    controlRoom: 'Control Room',
    viewDetails: 'Details sabole',
    minAgo: 'min age te',
    justNow: 'Etiya',
  },
  ao: {
    language: 'Oshi (Language)',
    notifications: 'Osangtep',
    markAllRead: 'Ajunga azüngogo ta züngokang',
    clearAll: 'Ajunga agienjang',
    noNotifications: 'Osang kecha maka',
    allCaughtUp: 'Lenmang ajak tajung!',
    suggestedFor: 'Iba tesem asoshi',
    liveEmergencyAlert: 'KANGA TASHIR OSANG',
    close: 'Shibangjang',
    triggerLandslide: 'Anüng alaba osang yokang',
    triggerRain: 'Tsünglu aruba osang yokang',
    triggerCritical: 'Kanga sashiba osang yokang',
    systemOperational: 'INNYAKTEPER',
    controlRoom: 'Control Room',
    viewDetails: 'Tejangja reprangjang',
    minAgo: 'minita tsüngda',
    justNow: 'Tang',
  },
  ne: {
    language: 'भाषा (Language)',
    notifications: 'सूचनाहरू (Notifications)',
    markAllRead: 'सबै पढिएको चिन्ह लगाउनुहोस्',
    clearAll: 'सबै हटाउनुहोस्',
    noNotifications: 'कुनै सूचना छैन',
    allCaughtUp: 'सबै मार्ग सुरक्षित छन्!',
    suggestedFor: 'यो क्षेत्रको लागि सिफारिस',
    liveEmergencyAlert: 'आपतकालीन चेतावनी',
    close: 'बन्द गर्नुहोस्',
    triggerLandslide: 'पहिरो चेतावनी जारी गर्नुहोस्',
    triggerRain: 'भारी वर्षा चेतावनी जारी गर्नुहोस्',
    triggerCritical: 'गम्भीर खतरा चेतावनी',
    systemOperational: 'सञ्चालनमा छ',
    controlRoom: 'नियन्त्रण कक्ष',
    viewDetails: 'विवरण हेर्नुहोस्',
    minAgo: 'मिनेट अगाडि',
    justNow: 'भर्खरै',
  },
  bn: {
    language: 'ভাষা (Language)',
    notifications: 'বিজ্ঞপ্তি (Notifications)',
    markAllRead: 'সব পঠিত হিসেবে চিহ্নিত করুন',
    clearAll: 'সব সাফ করুন',
    noNotifications: 'কোনো বিজ্ঞপ্তি নেই',
    allCaughtUp: 'সব করিডোর নিরাপদ আছে!',
    suggestedFor: 'এই অঞ্চলের জন্য প্রস্তাবিত',
    liveEmergencyAlert: 'জরুরি সতর্কতা',
    close: 'বন্ধ করুন',
    triggerLandslide: 'ভূমিধস সতর্কতা জারি করুন',
    triggerRain: 'ভারী বৃষ্টি সতর্কতা জারি করুন',
    triggerCritical: 'চরম বিপদ সতর্কতা',
    systemOperational: 'সচল রয়েছে',
    controlRoom: 'নিয়ন্ত্রণ কক্ষ',
    viewDetails: 'বিস্তারিত দেখুন',
    minAgo: 'মিনিট আগে',
    justNow: 'এইমাত্র',
  },
  trp: {
    language: 'Kok (Language)',
    notifications: 'Kobor Rog',
    markAllRead: 'Bebak pori kha hwnwi khwlai di',
    clearAll: 'Bebakno siring di',
    noNotifications: 'Kobo kiphil yawa',
    allCaughtUp: 'Bebak lama kaham!',
    suggestedFor: 'O jagani bagwi',
    liveEmergencyAlert: 'EMERGENCY SACHUKNI',
    close: 'Thum di',
    triggerLandslide: 'Ha bukhukni alert ri di',
    triggerRain: 'Watwi kwlaini alert ri di',
    triggerCritical: 'Critical alert ri di',
    systemOperational: 'CHALAI TONGO',
    controlRoom: 'Control Room',
    viewDetails: 'Kahamwi nai di',
    minAgo: 'min swkang',
    justNow: 'Tabuk',
  },
};

// Safe helper function: translates an alert key with reliable fallback to English
export function getAlertTranslation(key: AlertKey, lang: LanguageCode): AlertTranslation {
  const dictionary = ALERT_TRANSLATIONS[key];
  if (!dictionary) {
    return {
      title: 'EMERGENCY ALERT',
      message: 'Weather and terrain alert issued for corridor.',
      actionText: 'Exercise caution.'
    };
  }
  return dictionary[lang] || dictionary['en'];
}

// Safe helper function for UI text
export function getUIText(key: string, lang: LanguageCode): string {
  const langDict = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS['en'];
  return langDict[key] || UI_TRANSLATIONS['en'][key] || key;
}
