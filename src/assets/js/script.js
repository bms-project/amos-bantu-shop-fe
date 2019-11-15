var HomeCountryName = "United States";
var HomeSelectedCountry;
var HomeCountryCode;
var HomePageLocale;
var HomeAgilentLocale;
var headerHeight;
var moreReturnURL;

var isIosDevice;

var scrollPosFix;
var mouseTop;
var mainHeaderTop;
var stickyHeaderTop;
var menuSelected;
var menuLeaveYes;
var menuLeaveFixYes;
var deviceMegaMenuLeave = false;

var countryHome = [];
var countryName = [];
var agLocaleArray = [];

var prodCosURLDomain = "www.chem.agilent.com";
var prodURLDomain = "www.agilent.com";
var prodCNURLDomain = "cn.chem.agilent.com";
var genomicsDomain = "www.genomics.agilent.com";
var prodAgilentURLDomain = "www.agilent.com";
var prodAgilentCNURLDomain = "cn.agilent.com";
// DCWCS-1200 - added due to translations		
var staticFilterLabelData = staticFilterLabelData || {};		
// DCWCS-1040 - corporate pages		
//var corpPages = ["about", "contributions", "newsroom", "crisis", "environment", "univ_relation", "comm_relation"];
var corpPages = ["about11", "contributions11", "newsroom11", "crisis11", "environment11", "univ_relation11", "comm_relation11"];

if (typeof imageData != "undefined" && typeof imageData.items != "undefined") {
    var staticImgURL = imageData.items[0];
}

/* RBE AUG 4105 starts*/
countryName[0] = ["US", "United States", "United States"];
countryName[1] = ["CN", "中国", "China"];
countryName[2] = ["JP", "日本", "Japan"];
countryName[3] = ["KR", "한국어", "Korea"];
countryName[4] = ["VN", "Việt", "Vietnam"];
countryName[5] = ["BR", "Brasil", "Brazil"];
countryName[6] = ["RU", "Pоссия", "Russia"];
countryName[7] = ["DE", "Deutschland", "Germany"];
countryName[8] = ["FR", "France", "France"];
countryName[9] = ["ES", "España", "Spain"];
countryName[10] = ["IT", "Italia", "Italy"];
countryName[11] = ["TW", "Taiwan", "Taiwan"];
countryName[12] = ["AE", "United Arab Emirates", "United Arab Emirates"];
countryName[13] = ["AL", "Albania", "Albania"];
countryName[14] = ["AM", "Armenia", "Armenia"];
countryName[15] = ["AN", "Netherlands Antilles", "Netherlands Antilles"];
countryName[16] = ["AO", "Angola", "Angola"];
countryName[17] = ["AR", "Argentina", "Argentina"];
countryName[18] = ["AT", "Österreich", "Austria"];
countryName[19] = ["AU", "Australia", "Australia"];
countryName[20] = ["AW", "Aruba", "Aruba"];
countryName[21] = ["AZ", "Azerbaijan", "Azerbaijan"];
countryName[22] = ["BA", "Bosnia and Herzegovina", "Bosnia and Herzegovina"];
countryName[23] = ["BD", "Bangladesh", "Bangladesh"];
countryName[24] = ["BE", "Belgium", "Belgium"];
countryName[25] = ["BE", "Belgium", "Belgium"];
countryName[26] = ["BF", "Burkina Faso", "Burkina Faso"];
countryName[27] = ["BG", "Bulgaria", "Bulgaria"];
countryName[28] = ["BH", "Bahrain", "Bahrain"];
countryName[29] = ["BI", "Burundi", "Burundi"];
countryName[30] = ["BJ", "Benin", "Benin"];
countryName[31] = ["BN", "Brunei Darussalam", "Brunei Darussalam"];
countryName[32] = ["BO", "Bolivia", "Bolivia"];
countryName[33] = ["BO", "Bolivia", "Bolivia"];
countryName[34] = ["BW", "Botswana", "Botswana"];
countryName[35] = ["BY", "Belarus", "Belarus"];
countryName[36] = ["BZ", "Belize", "Belize"];
countryName[37] = ["CA", "Canada", "Canada"];
countryName[38] = ["CA", "Canada", "Canada"];
countryName[39] = ["CG", "DR Congo", "DR Congo"];
countryName[40] = ["CF", "Central African Republic", "Central African Republic"];
countryName[41] = ["CD", "Congo", "Congo"];
countryName[42] = ["CH", "Switzerland", "Switzerland"];
countryName[43] = ["CH", "Switzerland", "Switzerland"];
countryName[44] = ["CI", "Cote d`Ivoire (Ivory Coast)", "Cote d`Ivoire (Ivory Coast)"];
countryName[45] = ["CL", "Chile", "Chile"];
countryName[46] = ["CM", "Cameroon", "Cameroon"];
countryName[47] = ["CM", "Cameroon", "Cameroon"];
countryName[48] = ["CO", "Colombia", "Colombia"];
countryName[49] = ["CR", "Costa Rica", "Costa Rica"];
countryName[50] = ["CY", "Cyprus", "Cyprus"];
countryName[51] = ["CZ", "Czech Republic", "Czech Republic"];
countryName[52] = ["CZ", "Czech Republic", "Czech Republic"];
countryName[53] = ["DJ", "Djibouti", "Djibouti"];
countryName[54] = ["DK", "Denmark", "Denmark"];
countryName[55] = ["DO", "Dominican Republic", "Dominican Republic"];
countryName[56] = ["DZ", "Algeria", "Algeria"];
countryName[57] = ["EC", "Ecuador", "Ecuador"];
countryName[58] = ["EE", "Estonia", "Estonia"];
countryName[59] = ["EG", "Egypt", "Egypt"];
countryName[60] = ["ER", "Eritrea", "Eritrea"];
countryName[61] = ["ER", "Eritrea", "Eritrea"];
countryName[62] = ["ET", "Ethiopia", "Ethiopia"];
countryName[63] = ["FI", "Finland", "Finland"];
countryName[64] = ["ER", "Eritrea", "Eritrea"];
countryName[65] = ["GA", "Gabon", "Gabon"];
countryName[66] = ["GB", "United Kingdom", "United Kingdom"];
countryName[67] = ["GE", "Georgia", "Georgia"];
countryName[68] = ["GH", "Ghana", "Ghana"];
countryName[69] = ["GM", "Gambia", "Gambia"];
countryName[70] = ["GN", "Guinea", "Guinea"];
countryName[71] = ["GQ", "Equatorial Guinea", "Equatorial Guinea"];
countryName[72] = ["GR", "Greece", "Greece"];
countryName[73] = ["GT", "Guatemala", "Guatemala"];
countryName[74] = ["GW", "Guinea-Bissau", "Guinea-Bissau"];
countryName[75] = ["HK", "香港", "Hong Kong"];
countryName[76] = ["HN", "Honduras", "Honduras"];
countryName[77] = ["HR", "Croatia", "Croatia"];
countryName[78] = ["HU", "Hungary", "Hungary"];
countryName[79] = ["ID", "Indonesia", "Indonesia"];
countryName[80] = ["IE", "Ireland", "Ireland"];
countryName[81] = ["IL", "Israel", "Israel"];
countryName[82] = ["IN", "India", "India"];
countryName[83] = ["IQ", "Iraq", "Iraq"];
countryName[84] = ["IS", "Iceland", "Iceland"];
countryName[85] = ["ER", "Eritrea", "Eritrea"];
countryName[86] = ["JO", "Jordan", "Jordan"];
countryName[87] = ["ER", "Eritrea", "Eritrea"];
countryName[88] = ["KE", "Kenya", "Kenya"];
countryName[89] = ["KG", "Kyrgyzstan", "Kyrgyzstan"];
countryName[90] = ["ER", "Eritrea", "Eritrea"];
countryName[91] = ["KW", "Kuwait", "Kuwait"];
countryName[92] = ["KZ", "Kazakhstan", "Kazakhstan"];
countryName[93] = ["LB", "Lebanon", "Lebanon"];
countryName[94] = ["LK", "Sri Lanka", "Sri Lanka"];
countryName[95] = ["LR", "Liberia", "Liberia"];
countryName[96] = ["LS", "Lesotho", "Lesotho", ];
countryName[97] = ["LT", "Lithuania", "Lithuania"];
countryName[98] = ["LU", "Luxembourg", "Luxembourg"];
countryName[99] = ["LV", "Latvia", "Latvia"];
countryName[100] = ["LY", "Libya", "Libya"];
countryName[101] = ["MA", "Morocco", "Morocco"];
countryName[102] = ["MD", "Moldova, Republic of", "Moldova, Republic of"];
countryName[103] = ["YU2", "Montenegro", "Montenegro"];
countryName[104] = ["MG", "Madagascar", "Madagascar"];
countryName[105] = ["MK", "Macedonia, Republic of", "Macedonia, Republic of"];
countryName[106] = ["ML", "Mali", "Mali"];
countryName[107] = ["MR", "Mauritania", "Mauritania"];
countryName[108] = ["MT", "Malta", "Malta"];
countryName[109] = ["MU", "Mauritius", "Mauritius"];
countryName[110] = ["MW", "Malawi", "Malawi"];
countryName[111] = ["MX", "Mexico", "Mexico"];
countryName[112] = ["MY", "Malaysia", "Malaysia"];
countryName[113] = ["MZ", "Mozambique", "Mozambique"];
countryName[114] = ["NA", "Namibia", "Namibia"];
countryName[115] = ["NE", "Niger", "Niger"];
countryName[116] = ["NG", "Nigeria", "Nigeria"];
countryName[117] = ["NI", "Nicaragua", "Nicaragua"];
countryName[118] = ["NL", "Netherlands", "Netherlands"];
countryName[119] = ["NO", "Norway", "Norway"];
countryName[120] = ["NZ", "New Zealand", "New Zealand"];
countryName[121] = ["OM", "Oman", "Oman"];
countryName[122] = ["PA", "Panama", "Panama"];
countryName[123] = ["PE", "Peru", "Peru"];
countryName[124] = ["PH", "Philippines", "Philippines"];
countryName[125] = ["PK", "Pakistan", "Pakistan"];
countryName[126] = ["PL", "Poland", "Poland"];
countryName[127] = ["PR", "Puerto Rico", "Puerto Rico"];
countryName[128] = ["PT", "Português", "Portugal"];
countryName[129] = ["PY", "Paraguay", "Paraguay"];
countryName[130] = ["QA", "Qatar", "Qatar"];
countryName[131] = ["RE", "Reunion", "Reunion"];
countryName[132] = ["RO", "Romania", "Romania"];
countryName[133] = ["RS", "Serbia", "Serbia"];
countryName[134] = ["ER", "Eritrea", "Eritrea"];
countryName[135] = ["RW", "Rwanda", "Rwanda"];
countryName[136] = ["SA", "Saudi Arabia", "Saudi Arabia"];
countryName[137] = ["SC", "Seychelles", "Seychelles"];
countryName[138] = ["SE", "Sweden", "Sweden"];
countryName[139] = ["SG", "Singapore", "Singapore"];
countryName[140] = ["SI", "Slovenia", "Slovenia"];
countryName[141] = ["SK", "Slovakia", "Slovakia"];
countryName[142] = ["SL", "Sierra Leone", "Sierra Leone"];
countryName[143] = ["SN", "Senegal", "Senegal"];
countryName[144] = ["SO", "Somalia", "Somalia"];
countryName[145] = ["SV", "El Salvador", "El Salvador"];
countryName[146] = ["SZ", "Swaziland", "Swaziland"];
countryName[147] = ["TD", "Chad", "Chad"];
countryName[148] = ["TG", "Togo", "Togo"];
countryName[149] = ["TH", "Thailand", "Thailand"];
countryName[150] = ["TJ", "Tajikistan", "Tajikistan"];
countryName[151] = ["TM", "Turkmenistan", "Turkmenistan"];
countryName[152] = ["TN", "Tunisia", "Tunisia"];
countryName[153] = ["TR", "Turkey", "Turkey"];
countryName[154] = ["TW", "Taiwan", "Taiwan"];
countryName[155] = ["TZ", "Tanzania", "Tanzania"];
countryName[156] = ["UA", "Україна", "Ukraine"];
countryName[157] = ["UG", "Uganda", "Uganda"];
countryName[158] = ["ER", "Eritrea", "Eritrea"];
countryName[159] = ["UY", "Uruguay", "Uruguay"];
countryName[160] = ["UZ", "Uzbekistan", "Uzbekistan"];
countryName[161] = ["VE", "Venezuela", "Venezuela"];
countryName[162] = ["YE", "Yemen", "Yemen"];
countryName[163] = ["ZA", "South Africa", "South Africa"];
countryName[164] = ["ZM", "Zambia", "Zambia"];
countryName[165] = ["ZW", "Zimbabwe", "Zimbabwe"];
countryName[166] = ["ZZ", "Worldwide", "Worldwide"];
countryName[167] = ["AF", "Afghanistan", "Afghanistan"];
/*APP-8761*/

countryName[168] = ["AS", "American Samoa", "American Samoa"];
countryName[169] = ["AD", "Andorra", "Andorra"];
countryName[170] = ["AI", "Anguilla", "Anguilla"];
countryName[171] = ["BS", "Bahamas", "Bahamas"];
countryName[172] = ["BB", "Barbados", "Barbados"];
countryName[173] = ["BM", "Bermuda", "Bermuda"];
countryName[174] = ["BT", "Bhutan", "Bhutan"];
countryName[175] = ["BV", "Bouvet Island", "Bouvet Island"];
countryName[176] = ["IO", "British Indian Ocean Territory", "British Indian Ocean Territory"];
countryName[177] = ["KH", "Cambodia", "Cambodia"];
countryName[178] = ["CV", "Cape Verde Islands", "Cape Verde Islands"];
countryName[179] = ["KY", "Cayman Islands", "Cayman Islands"];
countryName[180] = ["CX", "Christmas Island", "Christmas Island"];
countryName[181] = ["CC", "Cocos (Keeling) Islands", "Cocos (Keeling) Islands"];
countryName[182] = ["KM", "Comoros", "Comoros"];
countryName[183] = ["CK", "Cook Islands", "Cook Islands"];
countryName[184] = ["CI", "Cote d`Ivoire (Ivory Coast)", "Cote d`Ivoire (Ivory Coast)"];
countryName[185] = ["DM", "Dominica", "Dominica"];
countryName[186] = ["TP", "East Timor", "East Timor"];
countryName[187] = ["FK", "Falkland/Malvinas", "Falkland/Malvinas"];
countryName[188] = ["FO", "Faroe Islands", "Faroe Islands"];
countryName[189] = ["FM", "Fed. States of Micronesia", "Fed. States of Micronesia"];
countryName[190] = ["FJ", "Fiji", "Fiji"];
countryName[191] = ["GF", "French Guiana", "French Guiana"];
countryName[192] = ["PF", "French Polynesia", "French Polynesia"];
countryName[193] = ["TF", "French Southern Territories", "French Southern Territories"];
countryName[194] = ["GI", "Gibraltar", "Gibraltar"];
countryName[195] = ["GL", "Greenland", "Greenland"];
countryName[196] = ["GD", "Grenada", "Grenada"];
countryName[197] = ["GP", "Guadeloupe", "Guadeloupe"];
countryName[198] = ["GU", "Guam", "Guam"];
countryName[199] = ["GY", "Guyana", "Guyana"];
countryName[200] = ["HT", "Haiti", "Haiti"];
countryName[201] = ["HM", "Heard and McDonald Islands", "Heard and McDonald Islands"];
countryName[202] = ["JM", "Jamaica", "Jamaica"];
countryName[203] = ["KI", "Kiribati", "Kiribati"];
countryName[204] = ["XK", "Kosovo", "Kosovo"];
countryName[205] = ["LA", "Laos", "Laos"];
countryName[206] = ["LI", "Liechtenstein", "Liechtenstein"];
countryName[207] = ["MO", "Macao", "Macao"];
countryName[208] = ["MV", "Maldives", "Maldives"];
countryName[209] = ["MH", "Marshall Islands", "Marshall Islands"];
countryName[210] = ["MQ", "Martinique", "Martinique"];
countryName[211] = ["YT", "Mayotte", "Mayotte"];
countryName[212] = ["MC", "Monaco", "Monaco"];
countryName[213] = ["MN", "Mongolia", "Mongolia"];
countryName[214] = ["MS", "Montserrat", "Montserrat"];
countryName[215] = ["NR", "Nauru", "Nauru"];
countryName[216] = ["NP", "Nepal", "Nepal"];
countryName[217] = ["NC", "New Caledonia", "New Caledonia"];
countryName[218] = ["NU", "Niue", "Niue"];
countryName[219] = ["NF", "Norfolk Island", "Norfolk Island"];
countryName[220] = ["MP", "Northern Mariana Islands", "Northern Mariana Islands"];
countryName[221] = ["PW", "Palau", "Palau"];
countryName[222] = ["PG", "Papua New Guinea", "Papua New Guinea"];
countryName[223] = ["PN", "Pitcairn Islands", "Pitcairn Islands"];
countryName[224] = ["SM", "San Marino", "San Marino"];
countryName[225] = ["ST", "Sao Tome and Principe", "Sao Tome and Principe"];
countryName[226] = ["SL", "Sierra Leon", "Sierra Leon"];
countryName[227] = ["SB", "Solomon Islands", "Solomon Islands"];
countryName[228] = ["SH", "St. Helena", "St. Helena"];
countryName[229] = ["KN", "St. Kitts and Nevis", "St. Kitts and Nevis"];
countryName[230] = ["LC", "St. Lucia", "St. Lucia"];
countryName[231] = ["PM", "St. Pierre and Miquelon", "St. Pierre and Miquelon"];
countryName[232] = ["VC", "St. Vincent and the Grenadines", "St. Vincent and the Grenadines"];
countryName[233] = ["SR", "Suriname", "Suriname"];
countryName[234] = ["SJ", "Svalbard and Jan Mayen Islands", "Svalbard and Jan Mayen Islands"];
countryName[235] = ["TK", "Tokelau", "Tokelau"];
countryName[236] = ["TO", "Tonga", "Tonga"];
countryName[237] = ["TT", "Trinidad and Tobago", "Trinidad and Tobago"];
countryName[238] = ["TC", "Turks and Caicos Islands", "Turks and Caicos Islands"];
countryName[239] = ["TV", "Tuvalu", "Tuvalu"];
countryName[240] = ["UM", "US Minor Outlying Islands", "US Minor Outlying Islands"];
countryName[241] = ["VU", "Vanuatu", "Vanuatu"];
countryName[242] = ["VA", "Città del Vaticano", "Vatican City State"];
countryName[243] = ["VG", "Virgin Islands (British)", "Virgin Islands (British)"];
countryName[244] = ["VI", "Virgin Islands (U.S.)", "Virgin Islands (U.S.)"];
countryName[245] = ["EH", "Western Sahara", "Western Sahara"];
countryName[246] = ["WS", "Western Samoa", "Western Samoa"];
countryName[247] = ["MM", "Myanmar", "Myanmar"];
countryName[248] = ["AX", "Aland Islands", "Aland Islands"];


countryHome[0] = ["US", "en_US"];
countryHome[1] = ["CN", "zh_CN"];
countryHome[2] = ["JP", "ja_JP"];
countryHome[3] = ["KR", "ko_KR"];
countryHome[4] = ["VN", "vi_VN"];
countryHome[5] = ["BR", "pt_BR"];
countryHome[6] = ["RU", "ru_RU"];
countryHome[7] = ["DE", "de_DE"];
countryHome[8] = ["FR", "fr_FR"];
countryHome[9] = ["ES", "es_ES"];
countryHome[10] = ["IT", "it_IT"];
countryHome[11] = ["TW", "zh_TW"];
countryHome[12] = ["AR", "es_ES"];
countryHome[13] = ["AT", "de_DE"];
countryHome[14] = ["BE", "fr_FR"];
countryHome[15] = ["CA", "en_US"];
countryHome[16] = ["CH", "de_DE"];
countryHome[17] = ["CH", "fr_FR"];
countryHome[18] = ["MX", "es_ES"];
countryHome[19] = ["VE", "es_ES"];
countryHome[20] = ["PT", "pt_BR"];
countryHome[21] = ["HK", "zh_CN"];
countryHome[22] = ["LU", "fr_FR"];
countryHome[23] = ["BY", "ru_RU"];
countryHome[24] = ["KZ", "ru_RU"];
countryHome[25] = ["KG", "ru_RU"];
countryHome[26] = ["TJ", "ru_RU"];
countryHome[27] = ["TM", "ru_RU"];
countryHome[28] = ["UA", "ru_RU"];
countryHome[29] = ["BZ", "es_ES"];
countryHome[30] = ["BO", "es_ES"];
countryHome[31] = ["CL", "es_ES"];
countryHome[32] = ["CO", "es_ES"];
countryHome[33] = ["CR", "es_ES"];
countryHome[34] = ["DO", "es_ES"];
countryHome[35] = ["EC", "es_ES"];
countryHome[36] = ["SV", "es_ES"];
countryHome[37] = ["GT", "es_ES"];
countryHome[38] = ["HN", "es_ES"];
countryHome[39] = ["NI", "es_ES"];
countryHome[40] = ["PA", "es_ES"];
countryHome[41] = ["PY", "es_ES"];
countryHome[42] = ["PE", "es_ES"];
countryHome[43] = ["PR", "es_ES"];
countryHome[44] = ["UY", "es_ES"];

agLocaleArray[0] = ["en", "eng"];
agLocaleArray[1] = ["fr", "fre"];
agLocaleArray[2] = ["de", "ger"];
agLocaleArray[3] = ["zh", "chi"];
agLocaleArray[4] = ["ko", "kor"];
agLocaleArray[5] = ["ja", "jpn"];
agLocaleArray[6] = ["vi", "vie"];
agLocaleArray[7] = ["pt", "por"];
agLocaleArray[8] = ["ru", "rus"];
agLocaleArray[9] = ["es", "spa"];
agLocaleArray[10] = ["it", "ita"];

var langLocale = [];
var lang = [];
/*
langLocale[0] = ["en","en_US"]; langLocale[1] = ["fr","fr_FR"]; langLocale[2] = ["de","de_DE"]; langLocale[3] = ["zh","zh_CN"]; 
langLocale[4] = ["ko","ko_KR"]; langLocale[5] = ["ja","ja_JP"]; langLocale[6] = ["vi","vi_VN"]; langLocale[7] = ["pt","pt_BR"];
langLocale[8] = ["ru","ru_RU"]; langLocale[9] = ["es","es_ES"]; langLocale[10] = ["it","it_IT"]; 
*/
langLocale[0] = ["en", "DEFAULT", "en_US"];
langLocale[1] = ["en", "CN", "en_CN"];
langLocale[2] = ["fr", "DEFAULT", "fr_FR"];
langLocale[3] = ["de", "DEFAULT", "de_DE"];
langLocale[4] = ["zh", "DEFAULT", "zh_CN"];
langLocale[5] = ["ko", "DEFAULT", "ko_KR"];
langLocale[6] = ["ja", "DEFAULT", "ja_JP"];
langLocale[7] = ["vi", "DEFAULT", "vi_VN"];
langLocale[8] = ["pt", "DEFAULT", "pt_BR"];
langLocale[9] = ["ru", "DEFAULT", "ru_RU"];
langLocale[10] = ["es", "DEFAULT", "es_ES"];
langLocale[11] = ["it", "DEFAULT", "it_IT"];
//langLocale[12] = ["en","JP","en_JP"];

lang[0] = ["en", "English"];
lang[1] = ["fr", "Français"];
lang[2] = ["de", "Deutsch"];
lang[3] = ["zh", "简体中文"];
lang[4] = ["ko", "한국어"];
lang[5] = ["ja", "日本語"];
lang[6] = ["vi", "Việt"];
lang[7] = ["pt", "Português"];
lang[8] = ["ru", "Русский"];
lang[9] = ["es", "Español"];
lang[10] = ["it", "Italiano"];
/* RBE AUG 4105 ends*/


var CountryLocaleMap = {
    "AL": "en_US",
    "DZ": "en_US",
    "AO": "en_US",
    "AR": "es_ES,en_US",
    "AM": "en_US",
    "AW": "en_US",
    "AU": "en_US",
    "AT": "de_DE,en_US",
    "AZ": "en_US",
    "BH": "en_US",
    "BD": "en_US",
    "BY": "ru_RU,en_US",
    "BE": "fr_FR,en_US,de_DE",
    "BZ": "es_ES,en_US",
    "BJ": "en_US",
    "BO": "es_ES,en_US",
    "BA": "en_US",
    "BW": "en_US",
    "BR": "pt_BR,en_US",
    "BN": "en_US",
    "BG": "en_US",
    "BF": "en_US",
    "BI": "en_US",
    "CM": "en_US",
    "CA": "en_US,fr_FR",
    "CF": "en_US",
    "TD": "en_US",
    "CL": "es_ES,en_US",
    "CN": "zh_CN,en_CN",
    "CO": "es_ES,en_US",
    "CD": "en_US",
    "CG": "en_US",
    "CR": "es_ES,en_US",
    "HR": "en_US",
    "CY": "en_US",
    "CZ": "en_US",
    "DK": "en_US",
    "DJ": "en_US",
    "DO": "es_ES,en_US",
    "EC": "es_ES,en_US",
    "EG": "en_US",
    "SV": "es_ES,en_US",
    "GQ": "en_US",
    "ER": "en_US",
    "EE": "en_US",
    "ET": "en_US",
    "FI": "en_US",
    "FR": "fr_FR,en_US",
    "GA": "en_US",
    "GM": "en_US",
    "GE": "en_US",
    "DE": "de_DE,en_US",
    "GH": "en_US",
    "GR": "en_US",
    "GT": "es_ES,en_US",
    "GN": "en_US",
    "GW": "en_US",
    "HN": "es_ES,en_US",
    "HK": "zh_CN,en_US",
    "HU": "en_US",
    "IS": "en_US",
    "IN": "en_US",
    "ID": "en_US",
    "IQ": "en_US",
    "IE": "en_US",
    "IL": "en_US",
    "IT": "it_IT,en_US",
    "CI": "en_US",
    "JP": "ja_JP,en_US",
    "JO": "en_US",
    "KZ": "ru_RU,en_US",
    "KE": "en_US",
    "KR": "ko_KR,en_US",
    "KW": "en_US",
    "KG": "ru_RU,en_US",
    "LV": "en_US",
    "LB": "en_US",
    "LS": "en_US",
    "LR": "en_US",
    "LY": "en_US",
    "LT": "en_US",
    "LU": "fr_FR,en_US",
    "MK": "en_US",
    "MG": "en_US",
    "MW": "en_US",
    "MY": "en_US",
    "ML": "en_US",
    "MT": "en_US",
    "MR": "en_US",
    "MU": "en_US",
    "MX": "es_ES,en_US",
    "MD": "en_US",
    "YU2": "en_US",
    "MA": "en_US",
    "MZ": "en_US",
    "NA": "en_US",
    "NL": "en_US",
    "NZ": "en_US",
    "NI": "es_ES,en_US",
    "NE": "en_US",
    "NG": "en_US",
    "NO": "en_US",
    "OM": "en_US",
    "PK": "en_US",
    "PA": "es_ES,en_US",
    "PY": "es_ES,en_US",
    "PE": "es_ES,en_US",
    "PH": "en_US",
    "PL": "en_US",
    "PT": "pt_BR,en_US",
    "PR": "es_ES,en_US",
    "QA": "en_US",
    "RO": "en_US",
    "RU": "ru_RU,en_US",
    "RW": "en_US",
    "SA": "en_US",
    "SN": "en_US",
    "RS": "en_US",
    "SC": "en_US",
    "SL": "en_US",
    "SG": "en_US",
    "SK": "en_US",
    "SI": "en_US",
    "SO": "en_US",
    "ZA": "en_US",
    "ES": "es_ES,en_US",
    "LK": "en_US",
    "SZ": "en_US",
    "SE": "en_US",
    "CH": "de_DE,fr_FR,it_IT,en_US",
    "TW": "en_US,zh_CN",
    "TJ": "ru_RU,en_US",
    "TZ": "en_US",
    "TH": "en_US",
    "TG": "en_US",
    "TN": "en_US",
    "TR": "en_US",
    "TM": "ru_RU,en_US",
    "UG": "en_US",
    "UA": "ru_RU,en_US",
    "AE": "en_US",
    "GB": "en_US",
    "US": "en_US",
    "UY": "es_ES,en_US",
    "UZ": "en_US",
    "VE": "es_ES,en_US",
    "VN": "vi_VN,en_US",
    "YE": "en_US",
    "ZM": "en_US",
    "ZW": "en_US",
    "VA": "en_US,it_IT",
    "SM": "en_US,it_IT",
    "LI": "en_US,de_DE",
    "MC": "en_US,fr_FR",
    "AD": "en_US,es_ES",
    "AX": "en_US"
};



'use strict';
var ua = window.navigator.userAgent,
    prevHashTag = "";
var msie = ua.indexOf("MSIE ");

var newString, selectedPaginationNumber = 1,
    filterValues = {
        'filterA': 'All',
        'filterB': 'All',
        'filterC': 'All',
        'filterD': 'All',
        'filterE': 'All'
    },
    filterNames = ["A", "B", "C", "D", "E"];
    
//script for showing the sub menus on clicking the menu links
$(function handleMenuClicks() {
    $(".top-nav ul li").click(function(e) {
        $(this).addClass('activeTopNav');
        $(this).siblings().removeClass('activeTopNav');
        $("#triangle1").css('visibility', 'visible');
        $("#topRtNav1Links").hide();
        $("#topRtNav4Links").hide();

    });
    $("#topRtNav1").on("click", function() {
        $("#topRtNav1Links").show();
        $("#triangle1").css('visibility', 'hidden')
    });

    $("#topRtNav4").on("click", function() {
        $("#topRtNav4Links").show();
        $("#triangle1").css('visibility', 'hidden')
    });
    $("#topRtNav3").on("click", function() {
        $("#topRtNav3Links").show();
        // $("#triangle3").css('visibility','hidden');
    });

});



/* RBE Feb APP-13708 */
//if($("div.homeFeaturedEvents > div").length > 0) {
if ($("div.homeFeaturedEvents > div").not('.homeMoreEvents-btn').length > 0) {

    $("div.featuredEventDiv").show();
} else {
    $("div.featuredEventDiv").hide();
}
/* RBE Feb APP-13708 ENDS*/

/* RBE Feb APP-13613 && Mallard Jul APP-19159 Updated Ht to 22 from 21 */
if ($("ol.breadcrumb.container").height() > 22) {
    $('ol.breadcrumb.container').addClass('longBreadcrumb-class');
}
/* RBE Feb APP-13613 Ends*/

/*code copied from here ends here tuesday*/

/* End of Code Addition for Sapphire CR */
//$(".highlightOne:last").addClass("lastHighlight");

$(".bxslider li:first-child").attr("target", "_blank");

//Function for Preloading he images

$(function preload() {
    var countryCode = $.cookie("CountryCode");
    if (countryCode == 'US') {
        img1 = new Image();
        img1.src = "//" + prodURLDomain + "/cs/home_images/btn_more_EN_normal.png";
        img2 = new Image();
        img2.src = "//" + prodURLDomain + "/cs/home_images/btn_more_EN_hover.png";
    } else if (countryCode == 'CN') {
        img1 = new Image();
        img1.src = "//" + prodURLDomain + "/cs/home_images/btn_more_CH_normal.png";
        img2 = new Image();
        img2.src = "//" + prodURLDomain + "/cs/home_images/btn_more_CH_hover.png";
    } else if (countryCode == 'TW') {
        img1 = new Image();
        img1.src = "//" + prodURLDomain + "/cs/home_images/btn_more_TW_normal.png";
        img2 = new Image();
        img2.src = "//" + prodURLDomain + "/cs/home_images/btn_more_TW_hover.png";
    } else if (countryCode == 'JP') {
        img1 = new Image();
        img1.src = "//" + prodURLDomain + "/cs/home_images/btn_more_JP_normal.png";
        img2 = new Image();
        img2.src = "//" + prodURLDomain + "/cs/home_images/btn_more_JP_hover.png";
    } else if (countryCode == 'KR') {
        img1 = new Image();
        img1.src = "//" + prodURLDomain + "/cs/home_images/btn_more_KR_normal.png";
        img2 = new Image();
        img2.src = "//" + prodURLDomain + "/cs/home_images/btn_more_KR_hover.png";
    } else if (countryCode == 'VN') {
        img1 = new Image();
        img1.src = "//" + prodURLDomain + "/cs/home_images/btn_more_VT_normal.png";
        img2 = new Image();
        img2.src = "//" + prodURLDomain + "/cs/home_images/btn_more_VT_hover.png";
    } else if (countryCode == 'BR') {
        img1 = new Image();
        img1.src = "//" + prodURLDomain + "/cs/home_images/btn_more_PT-BR_normal.png";
        img2 = new Image();
        img2.src = "//" + prodURLDomain + "/cs/home_images/btn_more_PT-BR_hover.png";
    } else if (countryCode == 'RU') {
        img1 = new Image();
        img1.src = "//" + prodURLDomain + "/cs/home_images/btn_more_RU_normal.png";
        img2 = new Image();
        img2.src = "//" + prodURLDomain + "/cs/home_images/btn_more_RU_hover.png";
    } else if (countryCode == 'DE') {
        img1 = new Image();
        img1.src = "//" + prodURLDomain + "/cs/home_images/btn_more_DE_normal.png";
        img2 = new Image();
        img2.src = "//" + prodURLDomain + "/cs/home_images/btn_more_DE_hover.png";
    } else if (countryCode == 'FR') {
        img1 = new Image();
        img1.src = "//" + prodURLDomain + "/cs/home_images/btn_more_FR_normal.png";
        img2 = new Image();
        img2.src = "//" + prodURLDomain + "/cs/home_images/btn_more_FR_hover.png";
    } else if (countryCode == 'ES') {
        img1 = new Image();
        img1.src = "//" + prodURLDomain + "/cs/home_images/btn_more_ES_normal.png";
        img2 = new Image();
        img2.src = "//" + prodURLDomain + "/cs/home_images/btn_more_ES_hover.png";
    } else if (countryCode == 'IT') {
        img1 = new Image();
        img1.src = "//" + prodURLDomain + "/cs/home_images/btn_more_IT_normal.png";
        img2 = new Image();
        img2.src = "//" + prodURLDomain + "/cs/home_images/btn_more_IT_hover.png";
    } else {
        img1 = new Image();
        img1.src = "//" + prodURLDomain + "/cs/home_images/btn_more_EN_normal.png";
        img2 = new Image();
        img2.src = "//" + prodURLDomain + "/cs/home_images/btn_more_EN_hover.png";
    }
});

if (isIosDevice) {

    $('.homeSearchBox').css('width', '310px');
    $('.tt-dropdown-menu').css('width', '323px');
}

$(function externalintegrations() {
    /* Start of Cart Integration */
    var mycartCnt = $.cookie("CartValue");

    if (mycartCnt == null) {
        mycartCnt = "0";
    } else if (mycartCnt > 99 && mycartCnt < 999) {
        mycartCnt = "99+";
    } else if (mycartCnt > 999) {
        mycartCnt = "999+";
    }

    //document.getElementById("homeMainNav7").querySelector("p").innerHTML=mycartCnt;
    //document.getElementById("homeMainNav7Fix").querySelector("p").innerHTML=mycartCnt;
    /* End of Cart Integration */

    /* To decide to have the language dropdown or not  */
    var myCountry = $.cookie("CountryCode");
    // get the count of languages supported by country
    var countryLocaleList = getLocaleListForCountry(myCountry);
    var countryLocaleSplit = countryLocaleList.split(',');
    var countryLocaleCnt = countryLocaleSplit.length;

    //if(countryLocaleCnt==1){
    //$("#topRtNav3Links").html(""); //remove content for country dropdown
    $("#triangle3").css('visibility', 'hidden');
    //	$("#topRtNav3 #selectedCountry").attr("href","/home/more-countries");
    //}
    /* End of code block */

});

//Function For Herobanner

setTimeout(function() {

    $('.heroBox').each(function() {
        var thisBox = $(this);

        if (thisBox.children().first().height() == 43) {
            thisBox.css('margin-top', '344px');
            thisBox.css('height', '105px');
        } else if (thisBox.children().first().height() == 86) {
            thisBox.css('margin-top', '305px');
            thisBox.css('height', '145px');
        } else if (thisBox.children().first().height() == 129) {
            thisBox.css('margin-top', '260px');
            thisBox.css('height', '190px');
        } else if (thisBox.children().first().height() == 172) {
            thisBox.css('margin-top', '218px');
            thisBox.css('height', '230px');
        }
        if ($.cookie("CountryCode") == 'FR') {
            thisBox.addClass("heroBoxFR");
        }
        if ($.cookie("CountryCode") == 'VN') {
            thisBox.addClass("heroBoxVN");
        }
        if ($.cookie("CountryCode") == 'JP') {
            thisBox.addClass("heroBoxJP");
        }
        if ($.cookie("CountryCode") == 'RU' || $.cookie("CountryCode") == 'BR' || $.cookie("CountryCode") == 'DE' || $.cookie("CountryCode") == 'IT') {
            thisBox.addClass("heroBoxRU");
            thisBox.children().first().css('max-height', '144px');

            if (thisBox.children().first().height() == 36) {
                thisBox.css('margin-top', '352px');
                thisBox.css('height', '95px');
            } else if (thisBox.children().first().height() == 70) {
                thisBox.css('margin-top', '318px');
                thisBox.css('height', '130px');

            } else if (thisBox.children().first().height() == 105) {
                thisBox.css('margin-top', '290px');
                thisBox.css('height', '160px');

            } else if (thisBox.children().first().height() == 140) {
                thisBox.css('margin-top', '248px');
                thisBox.css('height', '200px');

            }
        }
    });
}, 10);
//script for hide the menus on moving the mouse out.
$("#topRtNav1").mouseleave(function() {
    $("#topRtNav1Links").hide();
    $(".top-nav ul li").removeClass('activeTopNav');
    $("#triangle1").css('visibility', 'visible');
});
$("#topRtNav4").mouseleave(function() {
    $("#topRtNav4Links").hide();
    $(".top-nav ul li").removeClass('activeTopNav');
    $("#triangle1").css('visibility', 'visible');
});
$("#topRtNav3").mouseleave(function() {
    $("#topRtNav3Links").hide();
    $(".top-nav ul li").removeClass('activeTopNav');
    $("#triangle3").css('visibility', 'visible');
});

$('.sticky .side-nav').each(function() {
    var $el = $(this);

    $el.on('affix.bs.affix', function() {
        // Timeout to ensure that main nav collapses before calculating height
        setTimeout(function() {
            $el.css('top', $('body > header').outerHeight(true));
        }, 0);

    });

    $el.affix({
        offset: {
            'top': function() {
                return $el.parent().offset().top - $('body > header').outerHeight(true);
            },
            'bottom': function() {
                return $(document).height() - ($el.parent().offset().top + $el.parent().outerHeight());
            }
        }
    });
});

$('.pdpSections footer>a.pull-right').on('click', function(data) {
    $('html,body').animate({
        scrollTop: (0)
    }, 'fast');
    return false;

});

var shiftWindow = function() {
    if ($(".sidenav").length) {
        if (window.location.hash != "") {
            var hashCheck = window.location.hash.substring(1);
            //RBE APP-4865:buy-products
            //if(hashCheck.indexOf("page-")==-1 && hashCheck.indexOf("0")==-1 && hashCheck.indexOf("collapse-")==-1 && hashCheck.indexOf("buy-parts")==-1){
            if (hashCheck.indexOf("page-") == -1 && hashCheck.indexOf("0") == -1 && hashCheck.indexOf("collapse-") == -1 && hashCheck.indexOf("buy-products") == -1 && typeof $(window.location.hash).offset() != 'undefined') {
                $('html,body').animate({
                    scrollTop: ($(window.location.hash).offset().top - 108)
                }, 'fast');
            }
        }
        scrollBy(0, -97);
    }
};

if (location.hash) shiftWindow();

if (window.addEventListener)
    window.addEventListener("hashchange", shiftWindow);
else
    window.attachEvent("onhashchange", shiftWindow);



$('.primary-nav').each(function() {
    $(this).parents('header').affix({
        offset: {
            'top': $(this).offset().top,
            'bottom': 0
        }
    });
});

$('body').scrollspy({
    target: '.sticky .side-nav',
    // offset: 120
    /*updated offset value for Apollo2.5-It2 App-404 */
    offset: 220
}).on('activate.bs.scrollspy', function() {
    var scrollSpy = $(this).data('bs.scrollspy');
    var currentTarget = scrollSpy.activeTarget;
    $(currentTarget).parents('.item-collection').first().addClass('active').siblings().removeClass('active');
});

$(".vpp ul li a").click(function() {
    var text = $(this).html();
    $(".viewPerPage").html(text);
});

$('.nav-dropdown')
    .on('show.bs.collapse', function() {
        // Close open collapse items
        $('.nav-dropdown.in').collapse('hide');
        $('#nav-accordion .collapse-close').trigger('open');
        // disable active/current page nub
        $('.primary-nav [data-current-page]').removeClass('active');
        // $('#nav-accordion ~ .breadcrumb').hide();
    })
    .on('hidden.bs.collapse', function() {
        $('.page', this).removeClass('active')
            .first().addClass('active');
        $('#nav-accordion .collapse-close').trigger('close');
    });

$('#nav-accordion .collapse-close')
    .click(function() {
        $('.primary-nav a:not(.collapsed)').click();
    })
    .on('open', function() {
        $(this).addClass('open');
        $('.breadcrumb').hide();
    })
    .on('close', function() {
        var $self = $(this);
        setTimeout(function() {
            if (!$('.primary-nav li > a:not(.collapsed)').length) {
                $self.removeClass('open');
                $('.primary-nav [data-current-page]').addClass('active');
                $('.breadcrumb').show();
            }
        });
    });

$('.nav-dropdown .page a').on('click', function(e) {
    var $this = $(this),
        href = $this.attr('href'),
        $next = $(href),
        $current = $this.parents('.page');

    if ($next.length) {
        e.preventDefault();
        $current.removeClass('active');
        $next.addClass('active');
		// DCWCS-876 - Dynamically adjust the border between the last text menu column and first CTA column
        var textMenuLength = $next.find(".mega-menu-text-section ol").length;
        var ctaMenuLength = $next.find(".mega-menu-cta-section ol").length;
        var textMenuHeight = $next.find("div.mega-menu-text-section ol:last-child").height();
        var ctaMenuHeight = $next.find("div.mega-menu-cta-section div.l2-mega-menu").height();
        if (textMenuHeight > ctaMenuHeight && textMenuLength < 5 && ctaMenuLength > 0) {
            $next.find(".mega-menu-text-section ol:last-child").addClass("border-right");
            $next.find(".mega-menu-cta-section ol:first-child").addClass("cta-margin-based-on-text-border");
        }
        if (ctaMenuHeight > textMenuHeight && textMenuLength > 0 && ctaMenuLength < 5) {
            $next.find(".mega-menu-cta-section ol:first-child").addClass("border-left");
        }
    }
});

$('#search.collapse').on('shown.bs.collapse', function() {
    $('input[type="search"]', this).focus();
});

$('.cta .btn-primary').click(function() {
    $('.table.collapse').collapse('toggle');
});

$('#filter > .collapse').each(function() {
    var $this = $(this);
    var $trigger = $this.parent().find('[href=#' + $this.attr('id') + ']').parent();
    $this.on('show.bs.collapse', function() {
            // Close open collapse items
            $(this).siblings('.in').collapse('hide');
            $trigger.addClass('active');
        })
        .on('hide.bs.collapse', function() {
            $trigger.removeClass('active');
        });
});
// Prevent changing tabs if clicked one is disabled
$('.nav li.disabled a, li.disabled span').click(function() {
    return false;
});

(function() {
    $('.filter-group .nav-pills li').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).siblings(':lt(4)').removeClass('hidden');
            $(this).removeClass('active');
        } else {
            $(this).siblings().removeClass('active').addClass('hidden');
            $(this).addClass('active');
            $(this).parent().next().data('showing', false);
        }

        return false;
    });

    $('.filter-group .show-all').on('click', function() {
        if ($(this).data('showing')) {
            $(this).data('showing', false);
            $(this).prev().children(':gt(4):not(.active)').addClass('hidden');
        } else {
            $(this).data('showing', true);
            $(this).prev().children().removeClass('hidden');
        }
    });
})();

$("#closeClassification").on('click', function() {
    $("#classification").removeClass("collapse in");
    $("#classification").addClass("collapse");
    $(".container dd").removeClass('active');
});
$("#closeEpaMethod").on('click', function() {
    $("#epa-method").removeClass("collapse in");
    $("#epa-method").addClass("collapse");
    $(".container dd").removeClass('active');
});
$("#astmMethod").on('click', function() {
    $("#astm-method").removeClass("collapse in");
    $("#astm-method").addClass("collapse");
    $(".container dd").removeClass('active');
});
$("#uspdestClose").on('click', function() {
    $("#usp-destination").removeClass("collapse in");
    $("#usp-destination").addClass("collapse");
    $(".container dd").removeClass('active');
});
$("#solutionsClose").on('click', function() {
    $("#solutions").removeClass("collapse in");
    $("#solutions").addClass("collapse");
    $(".container dd").removeClass('active');
});

//script for unchecking the checkbox on clear all
$("#clearClassification").on('click', function() {
    $('#classification').find('input[type=checkbox]:checked').removeAttr('checked');
});
$("#clearcloseEpaMethod").on('click', function() {
    $('#epa-method').find('input[type=checkbox]:checked').removeAttr('checked');
});
$("#clearAstm-method").on('click', function() {
    $('#astm-method').find('input[type=checkbox]:checked').removeAttr('checked');
});
$("#clearUsp-destination").on('click', function() {
    $('#usp-destination').find('input[type=checkbox]:checked').removeAttr('checked');
});
$("#clearSolutions").on('click', function() {
    $('#solutions').find('input[type=checkbox]:checked').removeAttr('checked');
});




$('.table button').click(function() {
    var $sort = $('.fa', this),
        sortClass = $sort.attr('class');

    // Reset all headers
    $('.table button').removeClass('active');
    $('.table button .fa').removeClass('fa-sort-asc fa-sort-desc');

    // Sort this header
    $(this).addClass('active');

    if (/fa-sort-desc$/.test(sortClass)) {
        $sort.attr('class', 'fa fa-sort-asc');
    } else {
        $sort.attr('class', 'fa fa-sort-desc');
    }
});

$('.pdpSections .trigger').click(function() {
    setTimeout(function() {
        $('body').scrollspy('refresh');
    }, 10000);
});


$(' .side-nav .nav li a').on('click', function() {

    if (location.hash) {
        if ($(this).attr('href') == location.hash) {
            $('html,body').animate({
                scrollTop: $($(this).attr('href')).offset().top - (108)
            }, 0);
            return false;
        }

        $('body').scrollspy('refresh');

    }

});

$(document).ready(function() {
    var serviceDescArr = [],
        serviceTitleArr = [],
        serviceDescCount = 1,
        serviceTitleCount = 1;
    var serviceItemsCount = $('.servicesItems .lead').length;
    function truncateServiceItems() {
        var titleArrCount = 0;
        $('.servicesItems').each(function() {
            $('.servicesItems .media-heading a').each(function() {
                if (serviceTitleCount <= serviceItemsCount)
                    serviceTitleArr.push($(this)[0].innerHTML)
                serviceTitleCount++;
                $(this).html(serviceTitleArr[titleArrCount]);
                console.log("servicesItems" + $(this).height());
                if ($(this).height() > 45) {
                    var words = $(this).html().split(/\s+/);
                    words.push('...');
                    do {
                        words.splice(-2, 1);
                        $(this).html(words.join(' '));
                    } while ($(this).height() > 45);
                }
                titleArrCount++;
            });
            var descArrCount = 0;
            $('.servicesItems .lead').each(function() {
                if (serviceDescCount <= serviceItemsCount)
                    serviceDescArr.push($(this)[0].innerHTML)
                serviceDescCount++;
                $(this).html(serviceDescArr[descArrCount]);
                var origContent = $(this).html();
                while ($(this).height() > 60) {
                    origContent = trimFromLast(origContent);
                    var content = origContent;
                    var strloc = String(window.location);
                    if (content == "" && strloc.search("/zh-cn/") != -1) { // DCWCS-1200 modified due to translations
                        $(this).html(staticFilterLabelData["LearnMore"]);
                    } else {
                        $(this).html(content + " ...");
                    }
                }
                descArrCount++;
            });
            $('.servicesItems .lead').each(function() {
                $(this).attr('style', 'display : block');
            });
        });
    }
    setTimeout(function() {
        truncateServiceItems();
    }, 100);
    $(window).resize(truncateServiceItems);
    setTimeout(function() {
        $('.promodesc .media-heading a').each(function() {
            if ($(this).height() > 40) {
                var words = $(this).html().split(/\s+/);
                words.push('...');
                do {
                    words.splice(-2, 1);
                    $(this).html(words.join(' '));
                } while ($(this).height() > 40);
            }

        });

        $('.promodesc .lead').each(function() {
            var origContent = $(this).html();
            while ($(this).height() > 84) {
                origContent = trimFromLast(origContent);
                var content = origContent;
                var strloc = String(window.location);

                if (content == "" && strloc.search("/zh-cn/") != -1) { // DCWCS-1200 modified due to translations
                    /*<sl:translate>*/
                    $(this).html(staticFilterLabelData["LearnMore"]); /*</sl:translate>*/
                } else {
                    $(this).html(content + " ...");

                }
            }
        });
        $('.promodesc .lead').each(function() {
            $(this).attr('style', 'display : block');
        });

    }, 10);


    function trimFromLast(input) {
        var delimFound = false;
        for (var i = input.length - 1; i >= 0; i--) {
            // \uFF0C-comma \u3002-stop  \u002D-hyphen  \u2014-EM DASH  \u3001-IDEOGRAPHIC COMMA  \u002C-COMMA  \u4E00CJK- <enum dash> Ideograph  \u2009-thin space

            if (input[i] == ' ' || input[i] == '\uFF0C' || input[i] == '\u3002' || input[i] == '\u002D' || input[i] == '\u2014' || input[i] == ',' ||
                input[i] == '\u3001' || input[i] == '\u002C' || input[i] == '\u4E00' || input[i] == '\u2009') {

                delimFound = true;

            } else if (delimFound) {
                var str2 = input.substring(0, i + 1);
                //console.log(input.substring(0,i+1));
                return input.substring(0, i + 1);
            }
        }
        return "";
    }

    $('#Btn-Promotions').on('click', function() {
        if (location.hash) shiftWindow();
    });

    var HomeCountryCode = $.cookie("CountryCode");
    var HmPageLocale = $.cookie("agilent_locale");

    var countrySelectPage, browserURL;
    if (window.location.href.indexOf('more-countries') != -1) {
        countrySelectPage = "http://www.agilent.com/home/more-countries";
        browserURL = window.location.href.split('?currPageURL')[0];
    }

    function checkCookie() {
        var cookieEnabled = (navigator.cookieEnabled) ? true : false;
        if (cookieEnabled == false && browserURL == countrySelectPage) {
            $('.affix-top').append('<div class="cookieMssgBox" >' + staticFilterLabelData["CookiesText"] + '</div>');
        }
    }
    checkCookie();



    var previousPageUrl = location.href;

    var preUrl = previousPageUrl.indexOf("more-countries");
    if (preUrl == -1) {
        $.cookie("currPageURL", previousPageUrl, {
            path: '/',
            domain: '.agilent.com',
            expires: 90
        });
    }
    setHomePageCookies(HomeCountryCode, HmPageLocale);
    $('.trainingEventbox').each(function() {
        if ($(this).find('h4').height() > 43) {
            var words = $(this).find('a').html().split(/\s+/);
            words.push('...');
            do {
                words.splice(-2, 1);
                $(this).find('a').html(words.join(' '));

            } while ($(this).find('h4').height() > 43);
        }

        if ($(this).children('span').height() > 60) {
            var words = $(this).children('span').html().split(/\s+/);
            words.push('...');
            do {
                words.splice(-2, 1);
                $(this).children('span').html(words.join(' '));

            } while ($(this).children('span').height() > 60);
        }


    });

    $('.elipse').each(function() {
        if ($(this).height() > 80) {
            var words = $(this).html().split(/\s+/);
            words.push('...');
            do {
                words.splice(-2, 1);
                var strloc = String(window.location);
                if (words.join(' ').length < 4 && strloc.search("/zh-cn/") != -1) { // DCWCS-1200 modified due to translations
                    /*<sl:translate>*/
                    $(this).html(staticFilterLabelData["LearnMore"]); /*</sl:translate>*/
                } else
                    $(this).html(words.join(' '));
            } while ($(this).height() > 80);
        }

    });


    $(".trainingEventTile .trainingEventbox").click(function() {
        window.location.href = $(this).children("h4").children('a').attr("href");
        return false;
    });

    retainCartValue();
    setDigitalDataObject();

    if ($('#product-details').hasClass("hide")) {
        $('.sidenav>header').hide();
    } else {
        $('.sidenav>header').show();
    }
    if ($.cookie("CountryName") != null && $.cookie("isRegulatory") != null) {
        $("#topRtNav3 .toprtnav").text($.cookie("CountryName"));
        $('#triangle3').remove();
        $("#topRtNav3 a").append('<span class="dropDownTriangle" id="triangle3" style=" "></span>');

        $("#topRtNav3 a").attr("href", "#");

        buildLanguageDropdown();
        $("#topRtNav3Links li:last-child").append("<a href='//www.agilent.com/home/more-countries'></a>");
        /* To decide to have the language dropdown or not  */
        var myCountry = $.cookie("CountryCode");
        // get the count of languages supported by country



        var countryLocaleList = getLocaleListForCountry(myCountry);
        var countryLocaleSplit = countryLocaleList.split(',');
        var countryLocaleCnt = countryLocaleSplit.length;

        if (countryLocaleCnt == 1) {
            $("#topRtNav3Links").html(""); //remove content for country dropdown
            $("#triangle3").css('visibility', 'hidden');
            $("#topRtNav3 #selectedCountry").attr("//www.agilent.com/home/more-countries");
            $('#topRtNav3Links').remove();
            $('#triangle3').parents('a').attr('href', "//www.agilent.com/home/more-countries");
        }
        if (countryLocaleCnt > 1) {
            $("#triangle3").css('visibility', 'visible');
            $("#triangleArrow").css('visibility', 'visible');
        }

    } else {

        //$("#topRtNav3 .toprtnav").text(HomeCountryName);
        $("#topRtNav3 .toprtnav").text(staticFilterLabelData["SelectCountry"]); //Changed for Dako change
        $('#triangle3').remove();
        $("#topRtNav3 a").append('<span class="dropDownTriangle" id="triangle3" style=" "></span>');
        $('#topRtNav3Links').remove();
        $('#triangle3').parents('a').attr('href', "//www.agilent.com/home/more-countries");

    }
    $("#topRtNav3").show();
    $("#topRtNav").show();

    /* To decide to have the language dropdown or not  */
    var myCountry = $.cookie("CountryCode");
    // get the count of languages supported by country
    var countryLocaleList = getLocaleListForCountry(myCountry);
    var countryLocaleSplit = countryLocaleList.split(',');
    var countryLocaleCnt = countryLocaleSplit.length;

    /*if(countryLocaleCnt==1){
    $("#topRtNav3Links").html(""); //remove content for country dropdown
                $("#triangle3").css('visibility','hidden');
                $("#topRtNav3 #selectedCountry").attr("href","/home/more-countries");

    }*/
    /* End of code block */
    /* Start of Login/MyAccount Integration */
    //var loginUser = $.cookie(".ASPXAUTH");
    //var loginUser = $.cookie("SEARCH_displayName");

    var loginUser = $.cookie("loginFlag");
    if (loginUser != null) {
        if (loginUser == 'true') {
            $("#topRtNav3Links li:last-child").hide();
            $("#topRtNav").html(""); // remove content for Login
            $("#topRtNav").hide(); // Hide Login
            $("#topRtNav4").show();
            $("#topRtNav3 > a").attr("href", "#");
            if (countryLocaleCnt == 1) {
                //$("#topRtNav3 #selectedCountry").css("cursor","text");
                $("#topRtNav3 > a").css('cursor', 'text');
            }
            $("#topRtNav").css("margin-left", "0px");
            document.getElementById("topRtNav4Links").querySelector("p").querySelector("a").innerHTML = $.cookie("SEARCH_displayName");
            //$("#topRtNav3").html(""); //remove content for country dropdown
            //$("#topRtNav3").hide(); //hide country dropdown
            $("#topRtNav3").css("margin-left", "10px");
            //$("#topRtNav0").html("<a>"+$.cookie("CountryName")+"</a>");
            //$("#topRtNav0").show();
            $("#footerNav1").show();
            $("#footerNav2").show();
            /* Start of PunchOut User Integration*/
            var isPunchOutUser = $.cookie("IPU");
            if (isPunchOutUser != null) {
                var punchoutVar = document.querySelectorAll(".punchout");
                for (loopcnt = 0; loopcnt < punchoutVar.length; loopcnt++) {
                    var tmp = punchoutVar[loopcnt];
                    tmp.querySelector("a").href = "#";
                    tmp.querySelector("a").style.cursor = "auto";
                }
                $(".topRtNav4SubLinks [class*=moreButton]").hide();

            }
            /* End of PunchOut user Integration*/
			/* Start of MySubscription Link */
			var mySubScriptionCntry=$.cookie("CountryCode");
			if(mySubScriptionCntry!=null){
				if(mySubScriptionCntry!="US" && mySubScriptionCntry!="GB" && mySubScriptionCntry!="DE" &&  mySubScriptionCntry!="NL" && mySubScriptionCntry!="IT" && mySubScriptionCntry!="CA" && mySubScriptionCntry!="DK" && mySubScriptionCntry!="FI" && mySubScriptionCntry!="CH" && mySubScriptionCntry!="SE" && mySubScriptionCntry!="IE" && mySubScriptionCntry!="FR" && mySubScriptionCntry!="BE" && mySubScriptionCntry!="ES" && mySubScriptionCntry!="PR" && mySubScriptionCntry!="NZ" && mySubScriptionCntry!="AU" && mySubScriptionCntry!="SG"){
						$(".mysubscriptionlink").hide();
				}
			}else{
				$(".mysubscriptionlink").hide();
			}
			/* End of MySubscription Link */
        } else {
            $("#topRtNav4").html(""); // remove content for MyAccount
            $("#topRtNav4").hide(); // Hide MyAccount
            $("#topRtNav4").css("margin-left", "0px");
            $("#topRtNav0").html(""); // remove content for country name
            $("#topRtNav0").hide(); // hide country name display
            $("#topRtNav0").css("margin-left: 0px;");
            $("#footerNav1").html(""); // remove content of Promotions & Offers in Footer
            $("#footerNav2").html(""); // remove content of Logout in Footer
        }
    }
    /* End of Login/MyAccount Integration */
});

// Fake filter activation on .buy-parts table
/*$('.product .buy-parts .form-control').on('change', function(){
                $('.product .buy-parts .table tbody').animate({'opacity': 0}, 333).delay(333).animate({'opacity': 1}, 333);
});
--end of modification march 6th 2015
*/

function getKeyOverlay(clickedId) {
    var tempObj;
    if (typeof imageData != "undefined") {
        for (var obj = 0; obj < imageData.items.length; obj++) {
            if (imageData.items[obj].id == clickedId) {
                tempObj = imageData.items[obj];
            }
        }
        return tempObj;
    }
}

// Image rotation
$('.zoom .media-gallery').each(function() {
    var $images = $('button', this);
    var galleryButtonClicked = false;
    var $gallery = $(this);
    var currentIndex = $images.filter('.active:first').index();
    if ($images.length > 5) {
        $gallery.addClass("withOutScroll");

        // Add up/down buttons for traversal
        var $up = $('<button type="button" class="btn btn-default direction-control" id="gal-prev" disabled><i class="fa fa-chevron-up"></i></button>');
        var $down = $('<button type="button" class="btn btn-default direction-control" id="gal-next"><i class="fa fa-chevron-down"></i></button>');

        $up
            .click(function() {
                galleryButtonClicked = true;
            })
            .prependTo($gallery);

        $down
            .click(function() {
                galleryButtonClicked = true;
            })
            .prependTo($gallery);

    }
    //$images.wrapAll('<div class="wrapper"/>');

    var $wrapper = $('.wrapper', $gallery);
    /*-------------IE-----------------*/
    /*    if (msie > 0)  {
                                $("body").click(function(e) {
                                if(e.target.parentNode.className=='wrapper')
                                {
                                   $(".wrapper button").removeClass('active');
                $(e.target).addClass('active');
                                                                currentIndex=$(e.target).index();
                                                                if($($(".wrapper").children()[0]).hasClass("active"))
                                {
                                
                                  $up.attr('disabled', true);
                                   $down.attr('disabled', false);
                                }
                                else{
                                $up.attr('disabled', false);

                                }
                                if($($(".wrapper").children()[$(".wrapper").children().length-1]).hasClass("active"))
                                {

                                  $up.attr('disabled', false);
                                   $down.attr('disabled', true);
                                }
                                else{

                                   $down.attr('disabled', false);
                                }


                                }
                                });
                                }*/
    /*-----------chrome/firefox--------------------*/
    // else{
    $("body").on("click", ".wrapper button", function(e) {

        //if(e.target.parentNode){
        //if(e.target.parentNode.className=='wrapper')
        //  {

        $(".wrapper button").removeClass('active');
        $(this).addClass('active');
        currentIndex = $(e.target).index();
        /* if($($(".wrapper").children()[0]).hasClass("active"))
                                {
                                if($up)
                                  $up.attr('disabled', true);
  if($down)
                                   $down.attr('disabled', false);
                                }
                                else{
 if($up)
                                $up.attr('disabled', false);
                                  
                                }
                                if($($(".wrapper").children()[$(".wrapper").children().length-1]).hasClass("active"))
                                {
                                
 if($up)
                                  $up.attr('disabled', false);
 if($down)
                                   $down.attr('disabled', true);
                                }
                                else{
                                
 if($down)
                                   $down.attr('disabled', false);
                                }*/


        // }
        //}

        /*  else if(e.target.className=='thumbNail'){
                $(".wrapper button").removeClass('active');
                $(e.target.parentNode.parentNode).addClass('active');
                                                                currentIndex=$(e.target.parentNode.parentNode).index();
                                                                if($($(".wrapper").children()[0]).hasClass("active"))
                                {

                                  $up.attr('disabled', true);
                                   $down.attr('disabled', false);
                                }
                                else{
                                $up.attr('disabled', false);

                                }
                                if($($(".wrapper").children()[$(".wrapper").children().length-1]).hasClass("active"))
                                {

                                  $up.attr('disabled', false);
                                   $down.attr('disabled', true);
                                }
                                else{

                                   $down.attr('disabled', false);
                                }
               }*/

    });
    //}
    $gallery
        .addClass('scroller')
        .on('scroller.scroll', function(e, newPosition) {
            if (newPosition <= 0) {
                newPosition = 0;
                $up.attr('disabled', true);
                $down.attr('disabled', false);
            }

            if (newPosition >= $images.length) {
                newPosition = $images.length - 1;
            }

            if (newPosition < $images.length) {
                $down.attr('disabled', false);
            }

            if (newPosition > 0) {
                $up.attr('disabled', false);
            }

            if (newPosition >= $images.length - 1) {
                $down.attr('disabled', true);
            }
            $images.eq(currentIndex).removeClass('active');
            $(".wrapper button").removeClass('active');
            $images.eq(newPosition).addClass('active');
            if (galleryButtonClicked) {
                $("#currentImg img").attr('src', $images.eq(newPosition).attr('src'));
            } else {
                $("#currentImg img").attr('src', $images.eq(newPosition).children().children().attr('src'));
            }

            /*$(".zoomWindow").css({
                backgroundImage: "url('" + $images.eq(newPosition).children().children().attr("data-zoom-image") + "')"
            });*/
            $wrapper.scrollTop(
                $images.eq(newPosition).offset().top - $wrapper.offset().top
            );

            currentIndex = newPosition;


        });

    /*Changing the main image according to the selected thumbnail*/
    $images.click(function() {
        staticImgURL = getKeyOverlay($(this).attr('id'));
        $("#currentImg img").attr('src', $(this).children().children().attr('src'));
        $("#currentImg img").attr('title', $(this).children().children().attr('title'));
        $('.heroImgName p').text(staticImgURL.stain_tissue);
        /*$(".zoomWindow").css({
            backgroundImage: "url('" + $(this).children().children().attr("data-zoom-image") + "')"
        });*/

    });

});

$(".capillary").on('click', function() {
    $('#featuredColumn').hide();
    $('#capillary').show();
});

/*$('#gallery_09 a').removeClass('active').eq(currentValue-1).addClass('active');
var ez = $('#media-object-container').data('elevateZoom');
ez*/
// Vertical Filters
$('.fv-trigger').click(function() {
    var $triggerContentId = $(this).attr('data-reveal');
    $('#fv-accordion dd .btn-group').removeClass('active');
    $('.fv-trigger').removeClass('active');
    $(this).addClass('active');
    $(this).parent().addClass('active');
    $('.fv-content').removeClass('active');
    $($triggerContentId).addClass('active');
    $('#back-to-featured').addClass('active');
});

// Vertical Filters
$('.featured-trigger').click(function() {
    var $triggerContentId = $(this).attr('data-reveal');
    var $fvTriggerDataId = $('#fv-accordion button[data-reveal="' + $triggerContentId + '"]');
    $('#fv-accordion .btn-group').removeClass('active');
    $fvTriggerDataId.parent().addClass('active');
    $('.fv-trigger').removeClass('active');
    $fvTriggerDataId.addClass('active');
    $('.fv-content').removeClass('active');
    $($triggerContentId).addClass('active');
    $('#back-to-featured').addClass('active');
});

$('#back-to-featured button').click(function() {
    var $triggerContentId = $(this).attr('data-reveal');
    $('#fv-accordion dd .btn-group').addClass('active');
    $('.fv-trigger').removeClass('active');
    $('.fv-content').removeClass('active');
    $($triggerContentId).addClass('active');
    $('#back-to-featured').removeClass('active');
});

// Vertical Filters Accordion
$('.fv-acc-heading').click(function() {
    $(this).toggleClass('active');
});

// Horizontal Filter Modals
$('.fh-modal-trigger').click(function() {
    var $modalContentId = $(this).attr('data-reveal');
    $('.fh-modal-trigger').removeClass('active');
    $(this).addClass('active');
    $('.fh-modal-backdrop').removeClass('active');
    $($modalContentId).addClass('active');
});

$('#applied-filters-trigger').click(function() {
    $('.applied-filters').addClass('active');
    $('.applied-filter').addClass('exist');
    $('.fh-modal-trigger').removeClass('active');
    $('.fh-modal-backdrop').removeClass('active');
});

$('.fh-modal-clear').click(function() {
    $('.fh-modal-content section input:checkbox').removeAttr('checked');
});

$('.series a').click(function() {
    $('.series a').removeClass('active');
    $(this).addClass('active');
});

$('.applied-filter').click(function() {
    $(this).removeClass('exist');
});

$('.accordion dl dt').click(function() {
    $(this).toggleClass('active');
});

$('.applied-filter.first').click(function() {
    $(this).removeClass('exist');
    $('.applied-filter').removeClass('exist');
    $('.applied-filters').removeClass('active');
});

$('.fh-modal-close').click(function() {
    $('.fh-modal-trigger').removeClass('active');
    $('.fh-modal-backdrop').removeClass('active');
});

//$(".pdp-nav li:first-child").addClass('active');

$('.sidenav section:nth-child(2)').addClass('active');
$('.accordion dl dt').click(function() {

    setTimeout(function() {
        $('body').scrollspy('refresh');

    }, 500);
});

/*
$(function(){
  $(".solutionCategoryCr table h4.media-heading a").each(function(i){
   var len=$(this).text().length;
    if(len>55)
    {
      $(this).text($(this).text().substr(0,55)+'...');
    }
  });
});
$(function(){
  $(".solutionCategoryCr table p.lead").each(function(i){
   var len=$(this).text().length;
    if(len>55)
    {
      $(this).text($(this).text().substr(0,150)+'...');
    }
  });*/

/*$('.solutionsTitle').each(function(){
while ($(this).outerHeight()>40) {
     $(this).text(function (index, text) {
                $(this).height(30);
                return text.replace(/\W*\s(\S)*$/, '...');
      });
    }
   $(this).height(30);
});*/
$('.solutionsTitle').each(function() {
    if ($(this).height() > 42) {
        var words = $(this).html().split(/\s+/);
        words.push('...');
        do {
            words.splice(-2, 1);
            var strloc = String(window.location);
            if (words.join(' ').length < 4 && strloc.search("/zh-cn/") != -1) { // DCWCS-1200 modified due to translations
                /*<sl:translate>*/
                $(this).html(staticFilterLabelData["LearnMore"]); /*</sl:translate>*/
            } else
                $(this).html(words.join(' '));
        } while ($(this).height() > 42);
    }

});
$('.solutionsec .lead').each(function() {
    if ($(this).height() > 65) {
        var words = $(this).html().split(/\s+/);
        words.push('...');
        do {
            words.splice(-2, 1);
            var strloc = String(window.location);
            if (words.join(' ').length < 4 && strloc.search("/zh-cn/") != -1) { // DCWCS-1200 modified due to translations
                /*<sl:translate>*/
                $(this).html(staticFilterLabelData["LearnMore"]); /*</sl:translate>*/
            } else
                $(this).html(words.join(' '));
        } while ($(this).height() > 65);
    }

});

/*--- country selection code starts here ---*/

$(document).ready(function() {
    /*--- PDP/SAP page left nav yellow bar highlight on load based on hash tag in the url ---*/

    if ($(".pdp-nav li").length > 0) {

        var pdpNavliMatchHash = false;


        if (window.location.hash) {

            $(".pdp-nav li").each(function() {

                if ($(this).children('a').attr("href") == window.location.hash) {
                    if ($(this).hasClass("active"))
                        pdpNavliMatchHash = true;
                    else {
                        $(".pdp-nav li").removeClass("active");
                        $(this).addClass("active");
                        pdpNavliMatchHash = true;
                    }
                }
            });
            if (!pdpNavliMatchHash) {
                $(".pdp-nav li").removeClass("active");
                $(".pdp-nav li:first-child").addClass("active");
            }
        } else {
            $(".pdp-nav li").removeClass("active");
            $(".pdp-nav li:first-child").addClass("active");
        }
        shiftWindow();
    }
    isIosDevice = (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

    var previousPageUrl = location.href;

    var preUrl = previousPageUrl.indexOf("more-countries");
    if (preUrl == -1) {
        $.cookie("currPageURL", previousPageUrl, {
            path: '/',
            domain: '.agilent.com',
            expires: 90
        });
    }


    /* Start of Code Addition for Sapphire CR */
    $('.countryList li a').click(function() {

        var parent = jQuery(this).parent();
        var previous = jQuery('.countryShowLang');
        if (!parent.hasClass('countryShowLang')) {
            // hide open element
            previous.find('.countryLanguageList').slideUp();
            previous.removeClass('countryShowLang');
            // show current element
            parent.addClass('countryShowLang');
            parent.find('.countryLanguageList').slideDown();
        } else {
            // hide element
            parent.find('.countryLanguageList').slideUp();
            parent.removeClass('countryShowLang');
        }
    });




    //---mega menu header new changes -----//
    scrollPosFix = $(window).scrollTop();
    //mainHeaderTop=$("#homeMainNav").offset().top;
    //stickyHeaderTop=$("#homeMainNavFix").offset().top;
    $("#homeMainNav1Links,#homeMainNav2Links,#homeMainNav3Links,#homeMainNav4Links,#homeMainNav5Links,#homeMainNav6Links").hide();
    $("#homeMainNav1LinksFix,#homeMainNav2LinksFix,#homeMainNav3LinksFix,#homeMainNav4LinksFix,#homeMainNav5LinksFix,#homeMainNav6LinksFix").hide();

    $(document).mousemove(function(event) {
        mouseTop = event.clientY;
    });

    //----end---//

    /*code copied from here tuesday*/
    if ($("#topRtNav3 li").length > 0) {
        $("#triangle3").show();
        $("#triangle3").css('visibility', 'visible');
    } else {
        $("#triangle3").css('visibility', 'hidden');
        //$("#topRtNav3 #selectedCountry").attr("href","/cs/ContentServer?d=&pagename=Agilent/Utilities/CountrySelect");
        $("#topRtNav3 #selectedCountry").attr("href", "//www.agilent.com/home/more-countries");

    }
    ///*code copied from here ends here tuesday*/
    //
    ///* End of Code Addition for Sapphire CR */
    //$(".highlightOne:last").addClass("lastHighlight");
    //
    //$(".bxslider li:first-child").attr("target","_blank");
    //
    ////Function for Preloading he images
    //
    //    $(function preload(){
    //        console.log("alert22");
    //        var countryCode=$.cookie("CountryCode");
    //        if(countryCode=='US'){
    //        img1 = new Image();
    //        img1.src =  "//"+prodURLDomain+"/cs/home_images/btn_more_EN_normal.png";
    //        img2 = new Image();
    //        img2.src =  "//"+prodURLDomain+"/cs/home_images/btn_more_EN_hover.png";
    //        }
    //        else if(countryCode=='CN'){
    //        img1 = new Image();
    //        img1.src =  "//"+prodURLDomain+"/cs/home_images/btn_more_CH_normal.png";
    //        img2 = new Image();
    //        img2.src =  "//"+prodURLDomain+"/cs/home_images/btn_more_CH_hover.png";
    //        }
    //        else if(countryCode=='TW'){
    //        img1 = new Image();
    //        img1.src =  "//"+prodURLDomain+"/cs/home_images/btn_more_TW_normal.png";
    //        img2 = new Image();
    //        img2.src = "//"+prodURLDomain+"/cs/home_images/btn_more_TW_hover.png";
    //        }
    //        else if(countryCode=='JP'){
    //        img1 = new Image();
    //        img1.src = "//"+prodURLDomain+"/cs/home_images/btn_more_JP_normal.png";
    //        img2 = new Image();
    //        img2.src =  "//"+prodURLDomain+"/cs/home_images/btn_more_JP_hover.png";
    //        }
    //        else if(countryCode=='KR'){
    //        img1 = new Image();
    //        img1.src =  "//"+prodURLDomain+"/cs/home_images/btn_more_KR_normal.png";
    //        img2 = new Image();
    //        img2.src =  "//"+prodURLDomain+"/cs/home_images/btn_more_KR_hover.png";
    //        }
    //        else if(countryCode=='VN'){
    //        img1 = new Image();
    //        img1.src =  "//"+prodURLDomain+"/cs/home_images/btn_more_VT_normal.png";
    //        img2 = new Image();
    //        img2.src =  "//"+prodURLDomain+"/cs/home_images/btn_more_VT_hover.png";
    //        }
    //        else if(countryCode=='BR'){
    //        img1 = new Image();
    //        img1.src =  "//"+prodURLDomain+"/cs/home_images/btn_more_PT-BR_normal.png";
    //        img2 = new Image();
    //        img2.src =  "//"+prodURLDomain+"/cs/home_images/btn_more_PT-BR_hover.png";
    //        }
    //        else if(countryCode=='RU'){
    //        img1 = new Image();
    //        img1.src = "//"+prodURLDomain+"/cs/home_images/btn_more_RU_normal.png";
    //        img2 = new Image();
    //        img2.src = "//"+prodURLDomain+"/cs/home_images/btn_more_RU_hover.png";
    //        }
    //        else if(countryCode=='DE'){
    //        img1 = new Image();
    //        img1.src = "//"+prodURLDomain+"/cs/home_images/btn_more_DE_normal.png";
    //        img2 = new Image();
    //        img2.src =  "//"+prodURLDomain+"/cs/home_images/btn_more_DE_hover.png";
    //        }
    //        else if(countryCode=='FR'){
    //        img1 = new Image();
    //        img1.src =  "//"+prodURLDomain+"/cs/home_images/btn_more_FR_normal.png";
    //        img2 = new Image();
    //        img2.src =  "//"+prodURLDomain+"/cs/home_images/btn_more_FR_hover.png";
    //        }
    //        else if(countryCode=='ES'){
    //        img1 = new Image();
    //        img1.src = "//"+prodURLDomain+"/cs/home_images/btn_more_ES_normal.png";
    //        img2 = new Image();
    //        img2.src =  "//"+prodURLDomain+"/cs/home_images/btn_more_ES_hover.png";
    //        }
    //        else if(countryCode=='IT'){
    //        img1 = new Image();
    //        img1.src =  "//"+prodURLDomain+"/cs/home_images/btn_more_IT_normal.png";
    //        img2 = new Image();
    //        img2.src = "//"+prodURLDomain+"/cs/home_images/btn_more_IT_hover.png";
    //        }
    //        else{
    //        img1 = new Image();
    //        img1.src =  "//"+prodURLDomain+"/cs/home_images/btn_more_EN_normal.png";
    //        img2 = new Image();
    //        img2.src =  "//"+prodURLDomain+"/cs/home_images/btn_more_EN_hover.png";
    //        }
    //});
    //
    //if(isIosDevice)
    //{
    //
    //$('.homeSearchBox').css('width', '310px');
    //$('.tt-dropdown-menu').css('width', '323px');
    //}
    //
    // $(function externalintegrations() {
    // /* Start of Cart Integration */
    // var mycartCnt=$.cookie("CartValue");
    //
    // if(mycartCnt==null){
    // mycartCnt="0";
    // }else if(mycartCnt>99 && mycartCnt<999){
    // mycartCnt="99+";
    // }else if(mycartCnt>999){
    // mycartCnt="999+";
    // } 
    // 
    // //document.getElementById("homeMainNav7").querySelector("p").innerHTML=mycartCnt;
    // //document.getElementById("homeMainNav7Fix").querySelector("p").innerHTML=mycartCnt;
    // /* End of Cart Integration */
    // 
    // /* To decide to have the language dropdown or not  */
    // var myCountry = $.cookie("CountryCode");
    // // get the count of languages supported by country
    // var countryLocaleList = getLocaleListForCountry(myCountry);
    // var countryLocaleSplit = countryLocaleList.split(',');
    // var countryLocaleCnt = countryLocaleSplit.length;
    // 
    // //if(countryLocaleCnt==1){
    // //$("#topRtNav3Links").html(""); //remove content for country dropdown
    // $("#triangle3").css('visibility','hidden');
    // //
    // $("#topRtNav3 #selectedCountry").attr("href", "/cs/ContentServer?pagename=Agilent/Utilities/CountrySelect");
    // //}
    // /* End of code block */
    // 
    // });
    // 
    // //Function For Herobanner
    //
    // setTimeout(function(){
    // 
    // $('.heroBox').each( function(){ 
    // var thisBox=$(this);
    // 
    // if(thisBox.children().first().height()==43){
    // thisBox.css('margin-top','344px');
    // thisBox.css('height','105px');
    // }else if(thisBox.children().first().height()==86){
    // thisBox.css('margin-top','305px');
    // thisBox.css('height','145px');
    // }else if(thisBox.children().first().height()==129){
    // thisBox.css('margin-top','260px');
    // thisBox.css('height','190px');
    // }else if(thisBox.children().first().height()==172){
    // thisBox.css('margin-top','218px');
    // thisBox.css('height','230px');
    // }
    // if($.cookie("CountryCode")=='FR'){
    // thisBox.addClass("heroBoxFR");
    // }
    // if($.cookie("CountryCode")=='VN'){
    // thisBox.addClass("heroBoxVN");
    // }
    // if($.cookie("CountryCode")=='JP'){
    // thisBox.addClass("heroBoxJP");
    // }

    // if($.cookie("CountryCode")=='RU' || $.cookie("CountryCode")=='BR' || $.cookie("CountryCode")=='DE' || $.cookie("CountryCode")=='IT')
    // {
    // thisBox.addClass("heroBoxRU");
    // thisBox.children().first().css('max-height','144px');
    //
    // if(thisBox.children().first().height()==36){
    // thisBox.css('margin-top','352px');
    // thisBox.css('height','95px');
    // }else if(thisBox.children().first().height()==70){
    // thisBox.css('margin-top','318px');
    // thisBox.css('height','130px');
    // 
    // }else if(thisBox.children().first().height()==105){
    // thisBox.css('margin-top','290px');
    // thisBox.css('height','160px');
    // 
    // }else if(thisBox.children().first().height()==140){
    // thisBox.css('margin-top','248px');
    // thisBox.css('height','200px');
    // 
    // }
    // }
    // });
    // },390);  

    /* End of Code Addition for Sapphire CR */
    //script for showing the sub menus on clicking the menu links
    $(function handleMenuClicks() {
        $(".topRtNav ul li").click(function(e) {
            if ($(e.target)[0].id == "selectedCountry") {
                if ($('#topRtNav3Links').children('li').length > 0) {
                    e.preventDefault();
                }
            } else if ($(e.target)[0].children[0]) {
                if ($(e.target)[0].children[0].className == "dropDownTriangle") {
                    e.preventDefault();
                }
            }
            $(this).addClass('activeTopNav');
            $(this).siblings().removeClass('activeTopNav');
            $("#triangle1,#triangle4").css('visibility', 'visible');
            $("#topRtNav1Links,#topRtNav3Links,#topRtNav4Links").hide();
        });
        if (typeof scpl_time == "undefined") {
            $("#topRtNav1").on("click", function() {
                $("#topRtNav1Links").show();
                $("#triangle1").css('visibility', 'hidden');
            });
        } else {
            $("#topRtNav1").live("click", function() {
                $("#topRtNav1Links").show();
                $("#triangle1").css('visibility', 'hidden');
            });
        }
        $("#topRtNav3").click(function(e) {
            if ($('#topRtNav3Links').children('li').length > 0) {
                $("#topRtNav3Links").show();
                //$("#triangle3").css('visibility','hidden');
            }
        });
        $("#topRtNav4").click(function(e) {
            $("#topRtNav4Links").show();
            $("#triangle4").css('visibility', 'hidden');
        });
        $("#triangle1").click(function(e) {
            $("#topRtNav1Links").show();
            $("#triangle1").css('visibility', 'hidden');
            e.preventDefault();
        });
        $("#triangle3").click(function(e) {
            if ($('#topRtNav3Links').children('li').length > 0) {
                $("#topRtNav3Links").show();
                //$("#triangle3").css('visibility','hidden');
                e.preventDefault();
            }
        });
        $("#triangle4").click(function(e) {
            $("#topRtNav4Links").show();
            $("#triangle4").css('visibility', 'hidden');
            e.preventDefault();
        });

    });


    //script for showing the auto search box.
    $(function autoSearch() {
        $("#homeSearchTextBox").keydown(function(e) {
            $("#homeAutoSearch").show();
        });
        $("#homeAutoSearch li").click(function(e) {
            var selectedTxt = $(this).text();
            $("#homeSearchTextBox").val(selectedTxt);
            $("#homeAutoSearch").hide();
        });
        $('#homeSearchTextBox').click(function(e) {
            this.value = '';
        });
    });

    $("#topRtNav3").mouseleave(function() {
        $("#topRtNav3Links").hide();
        $(".topRtNav ul li").removeClass('activeTopNav');
        if ($('#topRtNav3Links').children('li').length > 0) {
            $("#triangle3").css('visibility', 'visible');
        } else {
            $("#triangle3").css('visibility', 'hidden');
        }
    });
    $("#topRtNav4").mouseleave(function() {
        $("#topRtNav4Links").hide();
        $(".topRtNav ul li").removeClass('activeTopNav');
        $("#triangle4").css('visibility', 'visible');
    });

    //script for hide the menus on moving the mouse out.

    if (isIosDevice) {

        $(document).on('click', function(event) {
            if (!$(event.target).closest('#homeMainNav ul li ').length) {
                $("#homeMainNav1Links,#homeMainNav2Links,#homeMainNav3Links,#homeMainNav4Links,#homeMainNav5Links,#homeMainNav6Links").hide();
                $("#homeMainNav ul li").removeClass('activeSubLink');
                deviceMegaMenuLeave = true;
            } else {
                deviceMegaMenuLeave = false;
            }
        });
    } else {
        if (typeof scpl_time == "undefined") {
            $("#homeMainNav1").on("mouseleave", function() {
                $("#homeMainNav1Links").hide();
                $("#homeMainNav ul li").removeClass('activeSubLink');
                mouseLeaveMainHeader();
            });
        } else {
            $("#homeMainNav1").live("mouseleave", function() {
                $("#homeMainNav1Links").hide();
                $("#homeMainNav ul li").removeClass('activeSubLink');
                mouseLeaveMainHeader();
            });
        }

        $("#homeMainNav2").mouseleave(function() {
            $("#homeMainNav2Links").hide();
            $("#homeMainNav ul li").removeClass('activeSubLink');
            mouseLeaveMainHeader();
        });
        $("#homeMainNav3").mouseleave(function() {
            $("#homeMainNav3Links").hide();
            $("#homeMainNav ul li").removeClass('activeSubLink');
            mouseLeaveMainHeader();
        });
        $("#homeMainNav4").mouseleave(function() {
            $("#homeMainNav4Links").hide();
            $("#homeMainNav ul li").removeClass('activeSubLink');
            mouseLeaveMainHeader();
        });
        $("#homeMainNav5").mouseleave(function() {
            $("#homeMainNav5Links").hide();
            $("#homeMainNav ul li").removeClass('activeSubLink');
            mouseLeaveMainHeader();
        });
        $("#homeMainNav6").mouseleave(function() {
            $("#homeMainNav6Links").hide();
            $("#homeMainNav ul li").removeClass('activeSubLink');
            mouseLeaveMainHeader();
        });
    }

    if (isIosDevice) {
        $(document).on('click', function(event) {

            if (!$(event.target).closest('#homeMainNavFix ul li').length) {

                $("#homeMainNav1LinksFix,#homeMainNav2LinksFix,#homeMainNav3LinksFix,#homeMainNav4LinksFix,#homeMainNav5LinksFix,#homeMainNav6LinksFix").hide();
                $("#homeMainNavFix ul li").removeClass('activeSubLinkFix');
                deviceMegaMenuLeave = true;
            } else {
                deviceMegaMenuLeave = false;
            }
        });
    } else {
        //For sticky menu mouse out
        $("#homeMainNav1Fix").mouseleave(function() {
            $("#homeMainNav1LinksFix").hide();
            $("#homeMainNavFix ul li").removeClass('activeSubLinkFix');
            mouseLeaveStickyHeader();
        });
        $("#homeMainNav2Fix").mouseleave(function() {
            $("#homeMainNav2LinksFix").hide();
            $("#homeMainNavFix ul li").removeClass('activeSubLinkFix');
            mouseLeaveStickyHeader();
        });
        $("#homeMainNav3Fix").mouseleave(function() {
            $("#homeMainNav3LinksFix").hide();
            $("#homeMainNavFix ul li").removeClass('activeSubLinkFix');
            mouseLeaveStickyHeader();
        });
        $("#homeMainNav4Fix").mouseleave(function() {
            $("#homeMainNav4LinksFix").hide();
            $("#homeMainNavFix ul li").removeClass('activeSubLinkFix');
            mouseLeaveStickyHeader();
        });
        $("#homeMainNav5Fix").mouseleave(function() {
            $("#homeMainNav5LinksFix").hide();
            $("#homeMainNavFix ul li").removeClass('activeSubLinkFix');
            mouseLeaveStickyHeader();
        });
        $("#homeMainNav6Fix").mouseleave(function() {
            $("#homeMainNav6LinksFix").hide();
            $("#homeMainNavFix ul li").removeClass('activeSubLinkFix');
            mouseLeaveStickyHeader();
        });
    }

    //mouse Leave for main header
    function mouseLeaveMainHeader() {
        if ($(window).scrollTop() == 0) {
            menuLeaveYes = true;
            menuLeaveFixYes = true;
        } else {
            menuLeaveYes = false;
            menuLeaveFixYes = false;
        }
    }
    //mouse Leave for main header

    function mouseLeaveStickyHeader() {
        if ($(window).scrollTop() > 0) {

            if ($(window).scrollTop() == scrollPosFix) {

                menuLeaveFixYes = true;
                menuLeaveYes = true;
            } else {
                menuLeaveYes = false;
                menuLeaveFixYes = false;
            }
        } else {
            menuLeaveYes = false;
            menuLeaveFixYes = false;
        }
        scrollPosFix = $(window).scrollTop();
    }

    if (typeof scpl_time == "undefined") {
        $("#searchinput").on('keyup', function(event) {
            if (event.keyCode == 13) {
                //submitSearch();
                doSearch();
            }
        });
    } else {
        $("#searchinput").live('keyup', function(event) {
            if (event.keyCode == 13) {
                //submitSearch();
                doSearch();
            }
        });
    }

    if (typeof scpl_time == "undefined") {
        $("#searchForm").on('submit', function(e) {
            doSearch();
        });
    } else {
        $("#searchForm").live('submit', function(e) {
            doSearch();
        });
    }

    $(".twitter-typeahead").css("position", "relative");
    $(".twitter-typeahead").css("display", "block", "important");
    $(".searchform").removeClass('pull-left');

    //script for hiding the mega menu on scroll.

    if (typeof scpl_time == "undefined") {
        $(window).on("scroll", function() {

            if ($(this).scrollTop()) {

                /*if(scrollPosFix==0)
                {
                stickyHeaderTop=$("#homeMainNavFix").offset().top;
                if((mouseTop+$(this).scrollTop())>(stickyHeaderTop+layoutHeight))
                {
                menuLeaveYes=true;
                        menuLeaveFixYes=true;
                }
                }*/
                $("#homeHeaderDiv").fadeIn(1);
                $("#homeMainNavFix").show();
                $("#homeMainNav").hide();
                $("#homeMainNavFixWraper").show();
                if (isIosDevice) {

                    if (deviceMegaMenuLeave) {
                        menuLeaveYes = true;
                    } else {
                        menuLeaveYes = false;
                    }
                }

                if (menuLeaveYes) {
                    menuSelected = "";
                    $("#homeMainNav1LinksFix").hide();
                    $("#homeMainNav2LinksFix").hide();
                    $("#homeMainNav3LinksFix").hide();
                    $("#homeMainNav4LinksFix").hide();
                    $("#homeMainNav5LinksFix").hide();
                    $("#homeMainNav6LinksFix").hide();
                    menuLeaveYes = false;
                    menuLeaveFixYes = false;
                }
                if (menuSelected == "menu1") {
                    $("#homeMainNav1LinksFix").show();
                    $("#homeMainNav1Fix").addClass('activeSubLinkFix');
                    $("#homeMainNav1Fix").siblings().removeClass('activeSubLinkFix');
                } else if (menuSelected == "menu2") {
                    $("#homeMainNav2LinksFix").show();
                    $("#homeMainNav2Fix").addClass('activeSubLinkFix');
                    $("#homeMainNav2Fix").siblings().removeClass('activeSubLinkFix');
                } else if (menuSelected == "menu3") {
                    $("#homeMainNav3LinksFix").show();
                    $("#homeMainNav3Fix").addClass('activeSubLinkFix');
                    $("#homeMainNav3Fix").siblings().removeClass('activeSubLinkFix');
                } else if (menuSelected == "menu4") {
                    $("#homeMainNav4LinksFix").show();
                    $("#homeMainNav4Fix").addClass('activeSubLinkFix');
                    $("#homeMainNav4Fix").siblings().removeClass('activeSubLinkFix');
                } else if (menuSelected == "menu5") {
                    $("#homeMainNav5LinksFix").show();
                    $("#homeMainNav5Fix").addClass('activeSubLinkFix');
                    $("#homeMainNav5Fix").siblings().removeClass('activeSubLinkFix');
                } else if (menuSelected == "menu6") {
                    $("#homeMainNav6LinksFix").show();
                    $("#homeMainNav6Fix").addClass('activeSubLinkFix');
                    $("#homeMainNav6Fix").siblings().removeClass('activeSubLinkFix');
                } else if (menuSelected == "menu7") {
                    $("#homeMainNav7LinksFix").show();
                    $("#homeMainNav7Fix").addClass('activeSubLinkFix');
                    $("#homeMainNav7Fix").siblings().removeClass('activeSubLinkFix');
                }
            } else {
                if (mouseTop < mainHeaderTop) {
                    menuLeaveYes = true;
                    menuLeaveFixYes = true;
                }
                $("#homeMainNavFix").fadeOut(1);
                $("#homeHeaderDiv").show();
                $("#homeMainNav").show();
                $("#homeMainNavFixWraper").hide();
                if (isIosDevice) {

                    if (deviceMegaMenuLeave) {
                        menuLeaveFixYes = true;
                    } else {
                        menuLeaveFixYes = false;
                    }
                }
                if (menuLeaveFixYes) {
                    menuSelected = "";
                    $("#homeMainNav1Links").hide();
                    $("#homeMainNav2Links").hide();
                    $("#homeMainNav3Links").hide();
                    $("#homeMainNav4Links").hide();
                    $("#homeMainNav5Links").hide();
                    $("#homeMainNav6Links").hide();
                    menuLeaveFixYes = false;
                    menuLeaveYes = false;
                }

                if (menuSelected == "menu1") {
                    $("#homeMainNav1Links").show();
                    $("#homeMainNav1").addClass('activeSubLink');
                    $("#homeMainNav1").siblings().removeClass('activeSubLink');
                } else if (menuSelected == "menu2") {
                    $("#homeMainNav2Links").show();
                    $("#homeMainNav2").addClass('activeSubLink');
                    $("#homeMainNav2").siblings().removeClass('activeSubLink');
                } else if (menuSelected == "menu3") {
                    $("#homeMainNav3Links").show();
                    $("#homeMainNav3").addClass('activeSubLink');
                    $("#homeMainNav3").siblings().removeClass('activeSubLink');
                } else if (menuSelected == "menu4") {
                    $("#homeMainNav4Links").show();
                    $("#homeMainNav4").addClass('activeSubLink');
                    $("#homeMainNav4").siblings().removeClass('activeSubLink');
                } else if (menuSelected == "menu5") {
                    $("#homeMainNav5Links").show();
                    $("#homeMainNav5").addClass('activeSubLink');
                    $("#homeMainNav5").siblings().removeClass('activeSubLink');
                } else if (menuSelected == "menu6") {
                    $("#homeMainNav6Links").show();
                    $("#homeMainNav6").addClass('activeSubLink');
                    $("#homeMainNav6").siblings().removeClass('activeSubLink');
                } else if (menuSelected == "menu6") {
                    $("#homeMainNav7Links").show();
                    $("#homeMainNav7").addClass('activeSubLink');
                    $("#homeMainNav7").siblings().removeClass('activeSubLink');
                }
            }
            scrollPosFix = $(window).scrollTop();
        });
    } else {

        $(window).bind("scroll", function() {

            if ($(this).scrollTop()) {

                /*if(scrollPosFix==0)
                {
                stickyHeaderTop=$("#homeMainNavFix").offset().top;
                if((mouseTop+$(this).scrollTop())>(stickyHeaderTop+layoutHeight))
                {
                menuLeaveYes=true;
                        menuLeaveFixYes=true;
                }
                }*/
                $("#homeHeaderDiv").fadeIn(1);
                $("#homeMainNavFix").show();
                $("#homeMainNav").hide();
                $("#homeMainNavFixWraper").show();
                if (menuLeaveYes) {
                    menuSelected = "";
                    $("#homeMainNav1LinksFix").hide();
                    $("#homeMainNav2LinksFix").hide();
                    $("#homeMainNav3LinksFix").hide();
                    $("#homeMainNav4LinksFix").hide();
                    $("#homeMainNav5LinksFix").hide();
                    $("#homeMainNav6LinksFix").hide();
                    menuLeaveYes = false;
                    menuLeaveFixYes = false;
                }
                if (menuSelected == "menu1") {
                    $("#homeMainNav1LinksFix").show();
                    $("#homeMainNav1Fix").addClass('activeSubLinkFix');
                    $("#homeMainNav1Fix").siblings().removeClass('activeSubLinkFix');
                } else if (menuSelected == "menu2") {
                    $("#homeMainNav2LinksFix").show();
                    $("#homeMainNav2Fix").addClass('activeSubLinkFix');
                    $("#homeMainNav2Fix").siblings().removeClass('activeSubLinkFix');
                } else if (menuSelected == "menu3") {
                    $("#homeMainNav3LinksFix").show();
                    $("#homeMainNav3Fix").addClass('activeSubLinkFix');
                    $("#homeMainNav3Fix").siblings().removeClass('activeSubLinkFix');
                } else if (menuSelected == "menu4") {
                    $("#homeMainNav4LinksFix").show();
                    $("#homeMainNav4Fix").addClass('activeSubLinkFix');
                    $("#homeMainNav4Fix").siblings().removeClass('activeSubLinkFix');
                } else if (menuSelected == "menu5") {
                    $("#homeMainNav5LinksFix").show();
                    $("#homeMainNav5Fix").addClass('activeSubLinkFix');
                    $("#homeMainNav5Fix").siblings().removeClass('activeSubLinkFix');
                } else if (menuSelected == "menu6") {
                    $("#homeMainNav6LinksFix").show();
                    $("#homeMainNav6Fix").addClass('activeSubLinkFix');
                    $("#homeMainNav6Fix").siblings().removeClass('activeSubLinkFix');
                } else if (menuSelected == "menu7") {
                    $("#homeMainNav7LinksFix").show();
                    $("#homeMainNav7Fix").addClass('activeSubLinkFix');
                    $("#homeMainNav7Fix").siblings().removeClass('activeSubLinkFix');
                }
            } else {

                if (mouseTop < mainHeaderTop) {
                    menuLeaveYes = true;
                    menuLeaveFixYes = true;
                }
                $("#homeMainNavFix").fadeOut(1);
                $("#homeHeaderDiv").show();
                $("#homeMainNav").show();
                $("#homeMainNavFixWraper").hide();
                if (menuLeaveFixYes) {
                    menuSelected = "";
                    $("#homeMainNav1Links").hide();
                    $("#homeMainNav2Links").hide();
                    $("#homeMainNav3Links").hide();
                    $("#homeMainNav4Links").hide();
                    $("#homeMainNav5Links").hide();
                    $("#homeMainNav6Links").hide();
                    menuLeaveFixYes = false;
                    menuLeaveYes = false;
                }

                if (menuSelected == "menu1") {
                    $("#homeMainNav1Links").show();
                    $("#homeMainNav1").addClass('activeSubLink');
                    $("#homeMainNav1").siblings().removeClass('activeSubLink');
                } else if (menuSelected == "menu2") {
                    $("#homeMainNav2Links").show();
                    $("#homeMainNav2").addClass('activeSubLink');
                    $("#homeMainNav2").siblings().removeClass('activeSubLink');
                } else if (menuSelected == "menu3") {
                    $("#homeMainNav3Links").show();
                    $("#homeMainNav3").addClass('activeSubLink');
                    $("#homeMainNav3").siblings().removeClass('activeSubLink');
                } else if (menuSelected == "menu4") {
                    $("#homeMainNav4Links").show();
                    $("#homeMainNav4").addClass('activeSubLink');
                    $("#homeMainNav4").siblings().removeClass('activeSubLink');
                } else if (menuSelected == "menu5") {
                    $("#homeMainNav5Links").show();
                    $("#homeMainNav5").addClass('activeSubLink');
                    $("#homeMainNav5").siblings().removeClass('activeSubLink');
                } else if (menuSelected == "menu6") {
                    $("#homeMainNav6Links").show();
                    $("#homeMainNav6").addClass('activeSubLink');
                    $("#homeMainNav6").siblings().removeClass('activeSubLink');
                } else if (menuSelected == "menu6") {
                    $("#homeMainNav7Links").show();
                    $("#homeMainNav7").addClass('activeSubLink');
                    $("#homeMainNav7").siblings().removeClass('activeSubLink');
                }
            }
            scrollPosFix = $(window).scrollTop();
        });
    }

    /*
    if (typeof scpl_time != "undefined") {
    	document.querySelectorAll(".homeSearchImg")[0].querySelectorAll("a")[0].href="javascript:submitSearch();";
    }
    */
    /*----for sticky header scroll alignment----*/
    if (typeof scpl_time == "undefined") {
        $(window).on('scroll',
            function(e) {
                $('#homeMainNavFix').css('left', -window.scrollX);
            });
    } else {
        $(window).bind('scroll',
            function(e) {
                $('#homeMainNavFix').css('left', -window.scrollX);
            });
    }
    /*----End doc. ready----*/

});




function retainCartValue() {
    var x = document.cookie;
    var cartsCountRetain = getCookie("GenomicsCartCount");


    $(".cartItem").text(cartsCountRetain);
}

/*Digital Data Object */
function setDigitalDataObject() {
    if (typeof window.digitalData != 'undefined') {
        var language = getCookie("agilent_locale");
        var country = getCookie("CountryCode");
        var loggedIn = getCookie(".ASPXAUTH");
        var punchoutUser = getCookie("IPU");
        var profileDetails = getCookie("pl_profile_type").split('&');
        var memberType = profileDetails[0];
        var salesOrg = profileDetails[1];
        var eCommStatus = profileDetails[2];

        if (typeof window.digitalData.user != 'undefined') {
            if (loggedIn != null && loggedIn != 0) {
                window.digitalData.user.attributes.loginStatus = "Logged In";
            } else {
                window.digitalData.user.attributes.loginStatus = "Not Logged In";

            }
            if (memberType != null) {
                window.digitalData.user.attributes.memberType = memberType;
            }
            if (salesOrg != null) {
                window.digitalData.user.attributes.salesOrg = salesOrg;
            }
            if (eCommStatus != null) {
                window.digitalData.user.attributes.eCommStatus = eCommStatus;
            }
            if (punchoutUser != null && punchoutUser != 0) {
                window.digitalData.user.attributes.punchoutUser = "Yes";
            } else {
                window.digitalData.user.attributes.punchoutUser = "No";
            }
            if (language != null) {
                window.digitalData.user.attributes.languageSelected = language;
            }
            if (country != null) {
                window.digitalData.user.attributes.countrySelected = country;
            }

        }
        if (typeof window.digitalData.page != 'undefined') {

            window.digitalData.page.pageinfo.referringURL = document.referrer;
            window.digitalData.page.pageinfo.destinationURL = window.location.href;
        }
    }
}
/*Digital Data Object */

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "0";
}



// Integrate Sapphire Login

function doLogout(param) {
    if (param == undefined || param == "") {
        param = "";
    }
    $.cookie("logOutATG", "atglogoutsuccess");
    setTimeout(function() {
        location.href = "//" + prodCosURLDomain + "/store/logoutUser.jsp" + param;
    }, 100);



}

function doLogin() {
    var LoginUrl;
    var str = location.href;
    var currPageUrl = str; //.replace("http://", "https://");

    if (currPageUrl.indexOf("ContentServer") > -1) {
        currPageUrl = currPageUrl.replace(/&/g, "%26");
        LoginUrl = "//" + prodCosURLDomain + "/common/login.jsp" + "?ReturnURL=" + currPageUrl;
    }
    if (currPageUrl.indexOf("DPSLogout=true") > -1) {
        var index = currPageUrl.indexOf("DPSLogout=true");
        currPageUrl = currPageUrl.substring(0, index - 1);
    }

    if (currPageUrl.indexOf("genomics.agilent.com") > -1) {
        if (currPageUrl.indexOf(genomicsDomain) > -1) {
            LoginUrl = "//" + genomicsDomain + "/common/login.jsp" + "?ReturnURL=" + currPageUrl;
        } else {
            LoginUrl = "//" + genomicsDomain + "/common/login.jsp" + "?ReturnURL=" + currPageUrl;
        }
    } else {
        LoginUrl = "//" + prodCosURLDomain + "/common/login.jsp" + "?ReturnURL=" + currPageUrl;
    }
    location.href = LoginUrl;
}

/* End of Code Addition for Sapphire CR */
//$(".highlightOne:last").addClass("lastHighlight");




/*code from sapphire homepage script */
//Function For Herobanner

setTimeout(function() {

    $('.heroBox').each(function() {
        var thisBox = $(this);

        if (thisBox.children().first().height() == 43) {
            thisBox.css('margin-top', '344px');
            thisBox.css('height', '105px');
        } else if (thisBox.children().first().height() == 86) {
            thisBox.css('margin-top', '305px');
            thisBox.css('height', '145px');
        } else if (thisBox.children().first().height() == 129) {
            thisBox.css('margin-top', '260px');
            thisBox.css('height', '190px');
        } else if (thisBox.children().first().height() == 172) {
            thisBox.css('margin-top', '218px');
            thisBox.css('height', '230px');
        }
        if ($.cookie("CountryCode") == 'FR') {
            thisBox.addClass("heroBoxFR");
        }
        if ($.cookie("CountryCode") == 'VN') {
            thisBox.addClass("heroBoxVN");
        }
        if ($.cookie("CountryCode") == 'JP') {
            thisBox.addClass("heroBoxJP");
        }
        if ($.cookie("CountryCode") == 'RU' || $.cookie("CountryCode") == 'BR' || $.cookie("CountryCode") == 'DE' || $.cookie("CountryCode") == 'IT') {
            thisBox.addClass("heroBoxRU");
            thisBox.children().first().css('max-height', '144px');

            if (thisBox.children().first().height() == 36) {
                thisBox.css('margin-top', '352px');
                thisBox.css('height', '95px');
            } else if (thisBox.children().first().height() == 70) {
                thisBox.css('margin-top', '318px');
                thisBox.css('height', '130px');

            } else if (thisBox.children().first().height() == 105) {
                thisBox.css('margin-top', '290px');
                thisBox.css('height', '160px');

            } else if (thisBox.children().first().height() == 140) {
                thisBox.css('margin-top', '248px');
                thisBox.css('height', '200px');

            }
        }
    });
}, 10);

var moreCountryUrlIdentifier = "//www.agilent.com/home/more-countries";

function setHomePageCookies(HomeCountryCode, HmPageLocale, ccParam) {
    var currentPageUrl = location.href;
	if(HmPageLocale === undefined){
		 HmPageLocale = $.cookie("agilent_locale");
	}
	if(HomeCountryCode === undefined){
		 HomeCountryCode = $.cookie("CountryCode");
	}
    if (currentPageUrl.indexOf(moreCountryUrlIdentifier) == -1) {
        var tempPageUrlWithoutCC = removeParamValFromUrl(currentPageUrl, "?cc=");
        $.cookie("currPageURL", tempPageUrlWithoutCC, {
            path: '/',
            domain: '.agilent.com',
            expires: 90
        });
    }
    if (HomeCountryCode == "US-DEFAULT" || HomeCountryCode == null || HomeCountryCode == "null") {
        //HomeCountryName = "United States"; //commented for Dako change
        HomeCountryName = $.cookie("CountryName");
        //HomeCountryName = "Select Country";
        //$.cookie("CountryCode","US",{ path: '/', domain: '.agilent.com', expires: 90 });
        $.cookie("CountryName", HomeCountryName, {
            path: '/',
            domain: '.agilent.com',
            expires: 90
        });
        //$.cookie("agilent_locale","en_US",{ path: '/', domain: '.agilent.com', expires: 90 });
        //$.cookie("AG_LOCALE","USeng",{ path: '/', domain: '.agilent.com', expires: 90 });
    } else {
        var cntrycde = $.cookie("CountryCode");
        //if(cntrycde==null){
        $.cookie("CountryCode", HomeCountryCode, {
            path: '/',
            domain: '.agilent.com',
            expires: 90
        });
        //}
        if (isValidLocaleForCountry(HomeCountryCode, HmPageLocale)) {
            defaultLocale = HmPageLocale;
        } else {
            var LocaleList = getLocaleListForCountry(HomeCountryCode);
            var defaultLocale;
            if (LocaleList == null) {
                defaultLocale = "en_US";
            } else {
                var LocaleSplit = LocaleList.split(',');
                defaultLocale = LocaleSplit[0];
            }
        }
        $.cookie("agilent_locale", defaultLocale, {
            path: '/',
            domain: '.agilent.com',
            expires: 90
        });
        len = countryName.length;

        for (var i = 0; i < len; i++) {


            //RBE AUG 4105 starts  
            /*if( countryName[i][0] == cntrycde&& $.cookie("agilent_locale")!="en_US") {
                                                             HomeCountryName = countryName[i][1];
                                                             break;
                                             }
                                             else if( countryName[i][0] == cntrycde&& $.cookie("agilent_locale")=="en_US") {

                                                             HomeCountryName = countryName[i][2];
                                                             break;
                                             }*/
            //  DCWCS-807 - added below line 
            if (countryName[i][0] == cntrycde && $.cookie("agilent_locale").indexOf("en_") == -1) {
                HomeCountryName = countryName[i][1];
                break;
			}
			else if( countryName[i][0] == cntrycde && $.cookie("agilent_locale").indexOf("en_") != -1) {
                HomeCountryName = countryName[i][2];
                break;
            }
            //RBE AUG 4105 ends
        }

        var agLang = defaultLocale.split("_")[0];
        var agLocale = "DEFAULT_VALUE";
        len = agLocaleArray.length;
        for (var i = 0; i < len; i++) {
            if (agLocaleArray[i][0] == agLang) {
                agilentLocale = langLocale[i][2]; // DCWCS-807 - modified due to translations
                break;
            }
        }

        if (agLocale == "DEFAULT_VALUE") {
            agLocale = HomeCountryCode + "eng";
        } else {
            agLocale = HomeCountryCode + agLocale;
        }

        $.cookie("AG_LOCALE", agLocale, {
            path: '/',
            domain: '.agilent.com',
            expires: 90
        });
        $.cookie("CountryName", HomeCountryName, {
            path: '/',
            domain: '.agilent.com',
            expires: 90
        });

    }
}

function submitSearch() {
    doSearch();

}

function doSearch() {
    var currentPageURL = location.href;
    var homeLocale = $.cookie("agilent_locale");
    var SearchUrl;
    if (currentPageURL.indexOf(prodCosURLDomain) > 0 || currentPageURL.indexOf(prodCNURLDomain) > 0 || currentPageURL.indexOf(prodURLDomain) > 0 || currentPageURL.indexOf(genomicsDomain) > 0) {
        if (homeLocale != null && homeLocale == "zh_CN") {
            SearchUrl = "//" + prodCNURLDomain + "/search/?Ntt=" + encodeURIComponent($("#searchinput").val());
        } else {
            SearchUrl = "//" + prodCosURLDomain + "/search/?Ntt=" + encodeURIComponent($("#searchinput").val());
        }
    } else {
        //SearchUrl = "/search/?Ntt="+encodeURIComponent($("#searchinput").val());
        SearchUrl = "//" + prodCosURLDomain + "/search/?Ntt=" + encodeURIComponent($("#searchinput").val());
    }
    location.href = SearchUrl;
}

function setCookies(cntrycode, lang) {
    $.cookie('isRegulatory', "true", {
        path: '/',
        domain: '.agilent.com',
        expires: 90
    });
    $.cookie("CountryCode", cntrycode, {
        path: '/',
        domain: '.agilent.com',
        expires: 90
    });
    len = countryName.length;
    for (var i = 0; i < len; i++) {

        //RBE AUG APP-4105 starts
        if (countryName[i][0] == cntrycode && $.cookie("agilent_locale") != "en_US") {
            HomeCountryName = countryName[i][1];
            break;
        } else if (countryName[i][0] == cntrycode && $.cookie("agilent_locale") == "en_ US") {
            HomeCountryName = countryName[i][2];
            break;
        }
        //RBE AUG APP-4105 ends			
    }
    $.cookie("CountryName", HomeCountryName, {
        path: '/',
        domain: '.agilent.com',
        expires: 90
    });
    var cnt = langLocale.length;
    var agilentLocale = "DEFAULT_VALUE";
    for (var i = 0; i < cnt; i++) {
        if (langLocale[i][0] == lang && (langLocale[i][1] == cntrycode || langLocale[i][1] == "DEFAULT")) {
            agilentLocale = langLocale[i][2]; // DCWCS-807 - modified due to translations
            //break;
        }
    }
    //RBE AUG APP-4105 
    if (cntrycode == "CN" && lang == "zh")
        agilentLocale = "zh_CN";
    else if (agilentLocale == "DEFAULT_VALUE")
        agilentLocale = "en_US";
    //alert(agilentLocale );
    $.cookie("agilent_locale", agilentLocale, {
        path: '/',
        domain: '.agilent.com',
        expires: 90
    });
    cnt = agLocaleArray.length;
    var agLocale = "DEFAULT_VALUE";
    for (var i = 0; i < cnt; i++) {
        if (agLocaleArray[i][0] == lang) {
            agLocale = agLocaleArray[i][1];
            break;
        }
    }
    if (agLocale == "DEFAULT_VALUE") {
        agLocale = cntrycode + "eng";
    } else {
        agLocale = cntrycode + agLocale;
    }
    $.cookie("AG_LOCALE", agLocale, {
        path: '/',
        domain: '.agilent.com',
        expires: 90
    });

    var currPageUrlCookie;
    if ($.cookie("currPageURL") != undefined) {
        currPageUrlCookie = $.cookie("currPageURL");
    } else {
        currPageUrlCookie = window.currentPageUrl;
    }

    var tempCurrPageURL, urlCheck;
    // DCWCS-1040 - modified below logics. To redirect only for corporate pages - start
    var pageUrlTemp = (currPageUrlCookie !== undefined) ? currPageUrlCookie.split("agilent.com/") : [];
    pageUrlTemp = (pageUrlTemp[1] !== undefined) ? pageUrlTemp[1].split("/") : pageUrlTemp;
    if ((cntrycode == "CN" || cntrycode == "HK" || cntrycode == "TW") && agilentLocale == "zh_CN" && pageUrlTemp.length > 0 && $.grep(corpPages, function(str) {
            return pageUrlTemp[0].indexOf(str) > -1;
        }).length > 0 && currPageUrlCookie.indexOf(prodAgilentCNURLDomain) == -1) {
        tempCurrPageURL = currPageUrlCookie;
        if (tempCurrPageURL != null && tempCurrPageURL.indexOf(prodAgilentURLDomain) > 0) {
            currPageUrlCookie = tempCurrPageURL.replace(prodAgilentURLDomain, prodAgilentCNURLDomain);
        }
    } else {
        tempCurrPageURL = currPageUrlCookie;
        if (agilentLocale != "zh_CN" && currPageUrlCookie != null && currPageUrlCookie.indexOf(prodAgilentCNURLDomain) > 0 && $.grep(corpPages, function(str) {
                return pageUrlTemp[0].indexOf(str) > -1;
            }).length > 0) {
            if (tempCurrPageURL != null && tempCurrPageURL.indexOf(prodAgilentCNURLDomain) > 0) {
                currPageUrlCookie = tempCurrPageURL.replace(prodAgilentCNURLDomain, prodAgilentURLDomain);
            }
        }
    }
    if (currPageUrlCookie != undefined) { // DCWCS-1040 - during analysis, found and added/modified below logics.
        if (currPageUrlCookie.indexOf("PageUnavailable") > -1 || currPageUrlCookie.indexOf("Agilent404") > -1) {
            urlCheck = currPageUrlCookie.split("?s=");
            currPageUrlCookie = urlCheck[1].split("amp;");
            var navUrl = "";
            for (x in currPageUrlCookie) {
                navUrl += currPageUrlCookie[x] + "";
            }
            currPageUrlCookie = navUrl;
        }
    }

    if (currPageUrlCookie == null) {
        currPageUrlCookie = "//www.agilent.com/home/more-countries";
        if (window.location.href.indexOf('currPageURL') != -1) {
            currPageUrlCookie = window.location.href.split('currPageURL=')[1];
            currPageUrlCookie = decodeURIComponent(currPageUrlCookie)
            if (currPageUrlCookie.indexOf('?') > -1)
                currPageUrlCookie = currPageUrlCookie.replace('homepagename', 'pagename')
            else
                currPageUrlCookie = currPageUrlCookie.replace('&homepagename', '?pagename')

        }
    }

    setTimeout(function() {
        location.href = currPageUrlCookie;
    }, 100);
}
var CountryLocaleMap = {
    "AL": "en_US",
    "DZ": "en_US",
    "AO": "en_US",
    "AR": "es_ES,en_US",
    "AM": "en_US",
    "AW": "en_US",
    "AU": "en_US",
    "AT": "de_DE,en_US",
    "AZ": "en_US",
    "BH": "en_US",
    "BD": "en_US",
    "BY": "ru_RU,en_US",
    "BE": "fr_FR,en_US,de_DE",
    "BZ": "es_ES,en_US",
    "BJ": "en_US",
    "BO": "es_ES,en_US",
    "BA": "en_US",
    "BW": "en_US",
    "BR": "pt_BR,en_US",
    "BN": "en_US",
    "BG": "en_US",
    "BF": "en_US",
    "BI": "en_US",
    "CM": "en_US",
    "CA": "en_US,fr_FR",
    "CF": "en_US",
    "TD": "en_US",
    "CL": "es_ES,en_US",
    "CN": "zh_CN,en_CN",
    "CO": "es_ES,en_US",
    "CD": "en_US",
    "CG": "en_US",
    "CR": "es_ES,en_US",
    "HR": "en_US",
    "CY": "en_US",
    "CZ": "en_US",
    "DK": "en_US",
    "DJ": "en_US",
    "DO": "es_ES,en_US",
    "EC": "es_ES,en_US",
    "EG": "en_US",
    "SV": "es_ES,en_US",
    "GQ": "en_US",
    "ER": "en_US",
    "EE": "en_US",
    "ET": "en_US",
    "FI": "en_US",
    "FR": "fr_FR,en_US",
    "GA": "en_US",
    "GM": "en_US",
    "GE": "en_US",
    "DE": "de_DE,en_US",
    "GH": "en_US",
    "GR": "en_US",
    "GT": "es_ES,en_US",
    "GN": "en_US",
    "GW": "en_US",
    "HN": "es_ES,en_US",
    "HK": "zh_CN,en_US",
    "HU": "en_US",
    "IS": "en_US",
    "IN": "en_US",
    "ID": "en_US",
    "IQ": "en_US",
    "IE": "en_US",
    "IL": "en_US",
    "IT": "it_IT,en_US",
    "CI": "en_US",
    "JP": "ja_JP,en_US",
    "JO": "en_US",
    "KZ": "ru_RU,en_US",
    "KE": "en_US",
    "KR": "ko_KR,en_US",
    "KW": "en_US",
    "KG": "ru_RU,en_US",
    "LV": "en_US",
    "LB": "en_US",
    "LS": "en_US",
    "LR": "en_US",
    "LY": "en_US",
    "LT": "en_US",
    "LU": "fr_FR,en_US",
    "MK": "en_US",
    "MG": "en_US",
    "MW": "en_US",
    "MY": "en_US",
    "ML": "en_US",
    "MT": "en_US",
    "MR": "en_US",
    "MU": "en_US",
    "MX": "es_ES,en_US",
    "MD": "en_US",
    "ME": "en_US",
    "MA": "en_US",
    "MZ": "en_US",
    "NA": "en_US",
    "NL": "en_US",
    "NZ": "en_US",
    "NI": "es_ES,en_US",
    "NE": "en_US",
    "NG": "en_US",
    "NO": "en_US",
    "OM": "en_US",
    "PK": "en_US",
    "PA": "es_ES,en_US",
    "PY": "es_ES,en_US",
    "PE": "es_ES,en_US",
    "PH": "en_US",
    "PL": "en_US",
    "PT": "pt_BR,en_US",
    "PR": "es_ES,en_US",
    "QA": "en_US",
    "RO": "en_US",
    "RU": "ru_RU,en_US",
    "RW": "en_US",
    "SA": "en_US",
    "SN": "en_US",
    "RS": "en_US",
    "SC": "en_US",
    "SL": "en_US",
    "SG": "en_US",
    "SK": "en_US",
    "SI": "en_US",
    "SO": "en_US",
    "ZA": "en_US",
    "ES": "es_ES,en_US",
    "LK": "en_US",
    "SZ": "en_US",
    "SE": "en_US",
    "CH": "de_DE,fr_FR,it_IT,en_US",
    "TW": "en_US,zh_CN",
    "TJ": "ru_RU,en_US",
    "TZ": "en_US",
    "TH": "en_US",
    "TG": "en_US",
    "TN": "en_US",
    "TR": "en_US",
    "TM": "ru_RU,en_US",
    "UG": "en_US",
    "UA": "ru_RU,en_US",
    "AE": "en_US",
    "GB": "en_US",
    "US": "en_US",
    "UY": "es_ES,en_US",
    "UZ": "en_US",
    "VE": "es_ES,en_US",
    "VN": "vi_VN,en_US",
    "YE": "en_US",
    "ZM": "en_US",
    "ZW": "en_US",
    "VA": "en_US,it_IT",
    "SM": "en_US,it_IT",
    "LI": "en_US,de_DE",
    "MC": "en_US,fr_FR",
    "AD": "en_US,es_ES",
    "AX": "en_US"
};

function getLocaleListForCountry(countrycode) {
    //console.log(CountryLocaleMap);
    //console.log(CountryLocaleMap[countrycode]);
    if (CountryLocaleMap[countrycode] != null) {
        return CountryLocaleMap[countrycode];
    } else {
        return "en_US";
    }
}

function removeParamValFromUrl(currentUrl, paramToRemove) {
    if (currentUrl.indexOf(paramToRemove) > 0) {
        var tempStrFirstPart = currentUrl.substr(0, currentUrl.indexOf(paramToRemove));
        if (currentUrl.indexOf("?cc=") + 7 < currentUrl.length) {
            var tempStrSecondPart = currentUrl.substr(currentUrl.indexOf(paramToRemove) + 7, currentUrl.length);
        }
        if (tempStrSecondPart) {
            currentUrl = tempStrFirstPart + "?" + tempStrSecondPart;
        } else {
            currentUrl = tempStrFirstPart;
        }
    }
    return currentUrl;
}

function isValidLocaleForCountry(countrycode, locale) {
    var localeList = getLocaleListForCountry(countrycode);
    var localeSplit = localeList.split(',');
    var cnt = localeSplit.length;
    for (i = 0; i < cnt; i++) {
        if (localeSplit[i] == locale) {
            return true;
        }
    }
    return false;
}

// DCWCS-807 - modified due to translations
function getLocaleFromLang(lang, country) {
    var cnt = langLocale.length;
    var locale = "en_US";
    for (var i = 0; i < cnt; i++) {
        if (langLocale[i][0] == lang && (langLocale[i][1] == country || langLocale[i][1] == "DEFAULT")) {
            locale = langLocale[i][2];
            //break;
        }
    }
    return locale;
}


function buildLanguageDropdown() {
    var cntrycode = $.cookie("CountryCode");
    var currlocale = $.cookie("agilent_locale");
    if (currlocale == null) {
        currlocale = "en_US";
    }

    var tmp = currlocale.split("_");
    var currlang = tmp[0];

    var cnt = lang.length;
    var currLangTxt = " ";
    for (var i = 0; i < cnt; i++) {
        if (lang[i][0] == currlang) {
            currLangTxt = lang[i][1];
            break;
        }
    }
    var localeList = getLocaleListForCountry(cntrycode);
    var localeSplit = localeList.split(',');
    var cnt = localeSplit.length;
    var varHTML = '';

    for (i = 0; i < cnt; i++) {
        var loopingLang = localeSplit[i].split("_");
        var loopingLangTxt = getLangTextFromCode(loopingLang[0]);
        if (loopingLang[0] == currlang) {
            // the user is already in current language, so display this as a disabled language
            //document.write("<li id='"+loopingLang[0]+"' class='currentLanguage'><a data-link-name='"+loopingLangTxt+"' style='color: #ccc !important;cursor:default;text-decoration:none !important;' >"+loopingLangTxt+"</a></li>");


            varHTML += "<li id='" + loopingLang[0] + "' class='currentLanguage'><a data-link-name='" + loopingLangTxt + "' style='color: #ccc !important;cursor:default;text-decoration:none !important;' >" + loopingLangTxt + "</a></li>";

        } else {
            //document.write("<li id='"+loopingLang[0]+"'><a data-link-name='"+loopingLangTxt+"' href='#'>"+loopingLangTxt+"</a></li>");



            varHTML += "<li id='" + loopingLang[0] + "'  ><a data-link-name='" + loopingLangTxt + "' href='#'>" + loopingLangTxt + "</a></li>";

        }

    }
    $('#topRtNav3Links').prepend(varHTML);

    $("#topRtNav3Links li").on('click', function(e) {
        if ($(this).attr("class")) {
            var clsStr = $(this).attr("class");
        } else {
            var clsStr = '';
        }
		var cntrycode = $.cookie("CountryCode"); // DCWCS-807 - modified due to translations
        if ((clsStr.indexOf("moreButton")) == -1) {
            if (!$(this).hasClass("currentLanguage")) {
                e.stopPropagation();
                var languageTxt = $(this).text();
                var lang = $(this).attr('id');
                var locale = getLocaleFromLang(lang, cntrycode); // DCWCS-807 - modified due to translations
                $.cookie("agilent_locale", locale, {
                    path: '/',
                    domain: '.agilent.com',
                    expires: 90
                });
                var currUrl = location.href;
                if (currUrl.indexOf("#") != -1) {
                    currUrl = currUrl.substring(0, currUrl.length - 1);
                }

                /* Added from here */
				//if(cntrycode == "CN" && locale == "zh_CN"){
                // DCWCS-1040 - modified below logics. To redirect only for corporate pages - start
                var pageUrlTemp = (currUrl !== undefined) ? currUrl.split("agilent.com/") : [];
                pageUrlTemp = (pageUrlTemp[1] !== undefined) ? pageUrlTemp[1].split("/") : pageUrlTemp;
                if ((cntrycode == "CN" || cntrycode == "HK" || cntrycode == "TW") && locale == "zh_CN" && pageUrlTemp.length > 0 && $.grep(corpPages, function(str) {
                        return pageUrlTemp[0].indexOf(str) > -1;
                    }).length > 0 && currUrl.indexOf(prodAgilentCNURLDomain) == -1) {
                    currUrl = currUrl.replace(prodAgilentURLDomain, prodAgilentCNURLDomain);
                } else {
                    if (locale != "zh_CN" && currUrl != null && currUrl.indexOf(prodAgilentCNURLDomain) > 0 && $.grep(corpPages, function(str) {
                            return pageUrlTemp[0].indexOf(str) > -1;
                        }).length > 0) {
                        currUrl = currUrl.replace(prodAgilentCNURLDomain, prodAgilentURLDomain);
                    }
                    if (currUrl != undefined) {
                        if (currUrl.indexOf("PageUnavailable") > -1 || currUrl.indexOf("Agilent404") > -1) {
                            urlCheck = currUrl.split("?s=");
                            currUrl = urlCheck[1].replace("cn.", "").split("amp;");
                            var navUrl = "";
                            for (x in currUrl) {
                                navUrl += currUrl[x] + "";
                            }
                            currUrl = navUrl;
                        }
                    }

                }
                /* Added till here */

                setTimeout(function() {
                    location.href = currUrl;
                }, 100);
            }
        }
        /*else{
        				alert($(this).find("a:first").attr("href"));location.href = $(this).find("a:first").attr("href");
        			}*/
    });

}



function getLangTextFromCode(language) {
    var cnt = lang.length;
    var langText = "English";
    for (var i = 0; i < cnt; i++) {
        if (lang[i][0] == language) {
            langText = lang[i][1];
            break;
        }
    }
    return langText;
}

function showKeySightMessage() {
    document.write('<scr' + 'ipt type="text/javascript" src="/cs/home_scripts/keysight.js"></scr' + 'ipt>');
}

jQuery('.solutionsec img.thumbNail').each(function() {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');
        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
        //$svg.find("[fill=#000000]").attr('fill','#ffffff')
        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});


$(".homeSearchImg,.homeSearchImgCH,.homeSearchImgTW,.homeSearchImgJP,.homeSearchImgKR,.homeSearchImgVN,.homeSearchImgBR,.homeSearchImgRU,.homeSearchImgDE,.homeSearchImgFR,.homeSearchImgES,.homeSearchImgIT").click(function() {
    var searchTerm = encodeURIComponent($("#homeSearchTextBox").val());
    if(searchTerm) {	
		if(selSearchCategoryDDVal && $('.selectric-searchCategoryDD .selected').hasClass('dimensionValue' )){
			window.location = endecaSearchURL+'/?N='+selSearchCategoryDDVal+'&Ntt='+searchTerm+'&catdd=1';
		}else{
			if(selSearchCategoryDDVal && $('.selectric-searchCategoryDD .selected').hasClass('staticLink')){
				window.location = window.endecaSearchURL+'&Ntt='+searchTerm;//+'&catdd=1';
			}else{
				window.location = endecaSearchURL+'/?Ntt='+searchTerm;	
			}
		}				
		}
		else if( selSearchCategoryDDVal && $('.selectric-searchCategoryDD .selected').hasClass('dimensionValue' )){
			window.location = endecaSearchURL+'/?N='+selSearchCategoryDDVal+'&catdd=1';
		}else if(selSearchCategoryDDVal != "" && $('.selectric-searchCategoryDD .selected').hasClass('staticLink')){
				window.endecaSearchURL = selSearchCategoryDDVal;//+'&catdd=1';
		} else {   
			$('#homeSearchTextBox').focus();
		}
});
$(".homeSearchBox").keyup(function(e) {
    if (e.keyCode == '13') {
        var searchTerm = encodeURIComponent($("#homeSearchTextBox").val());
     if(searchTerm){	
		if( selSearchCategoryDDVal && $('.selectric-searchCategoryDD .selected').hasClass('dimensionValue' )){
			window.location = endecaSearchURL+'/?N='+selSearchCategoryDDVal+'&Ntt='+searchTerm+'&catdd=1';
		}else{
			if(selSearchCategoryDDVal && $('.selectric-searchCategoryDD .selected').hasClass('staticLink')){
			window.location = window.endecaSearchURL+'&Ntt='+searchTerm;//+'&catdd=1';
			}else{
			window.location = endecaSearchURL+'/?Ntt='+searchTerm;	
			}
		}	
			//var endecaSearchURL=window.endecaSearchURL;			
		}
		else if( selSearchCategoryDDVal && $('.selectric-searchCategoryDD .selected').hasClass('dimensionValue' )){
			window.location = endecaSearchURL+'/?N='+selSearchCategoryDDVal+'&catdd=1';
		}else if(selSearchCategoryDDVal != "" && $('.selectric-searchCategoryDD .selected').hasClass('staticLink')){
			window.endecaSearchURL = selSearchCategoryDDVal;//+'&catdd=1';
		} else{   		
		$('#homeSearchTextBox').focus();
		}		
    }
});
/*Fix for issue 467 start*/
$('.categoryContent .categoryRowTitle').each(function() {
    if (!$(this).hasClass('noRightBorder') && $(this).next('td').length > 0) {
        if ($(this).find('.media-body .lead').length) {
            var offset = $(this).find('.media-body .lead').offset();
        } else {
            var offset = $(this).find('.media-body .media-heading').offset();
        }
        var updatecnt = '<div>' + $(this).next('td').html() + '</div>';
        $(this).next('td').html(updatecnt);
        /* commented for RBE DEC APP-13323 */
        //$(this).next('td').find('div').offset({ top:offset.top });
        /* RBE DEC APP-13323 ENDS */
    }

});
/*Fix for issue 467 end*/
jQuery('.soltitleSec img').each(function() {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');
        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});

function select_Country() {
    setCookies($('#ctl00_countrySelectorCook_countryddlNew').val(), 'en');

}
$('.ajaxOn').on('click', function() {
    var libraryContent = ',SpSearch:Library';
    var ajaxUrl = window.endecaURL + '?format=json&Nr=AND(';
    var urlPar = window.productId;
    var wcsUrl = window.wcsURL;
    var assetType = window.assetType;
    var assocAttribute = window.assocAttribute;
    var country = window.country;
    var language = window.language;
    //var libraryContentType = "Support_C";
    var libraryContentType = $(this).attr('content-type');
    var sortAttribute = window.sortAttribute;
    var librarySubType = $(this).attr('sub-type');
	var agilentLocale = $.cookie("agilent_locale"); // DCWCS-1200 added	
    var subtype = $(this).attr('sub-type');
    var literatureTagged = window.literatureTagged;
    var supportFeatured = window.supportFeatured;
    var supportTagged = window.supportTagged;
    var libSupportTagged = window.libSupportTagged;
    var regulatoryFlag = window.regulatoryFlag;
    //var libraryAjax = ajaxUrl+urlPar+",sd_content_type:"+$(this).attr('sub-type')+")";
    var libraryAjax = "";
    if ("true" == window.wcsTagging) {
        //libraryAjax = wcsUrl+"&assetType="+assetType+"&assocAttribute="+assocAttribute+"&libraryContentType="+libraryContentType+"&sortAttribute="+sortAttribute+"&librarySubType="+librarySubType+"&agilentLocale="+agilentLocale+"&country="+country+"&language="+language+"&d=";
        //libraryAjax = wcsUrl + "&assetType=" + assetType + "&assocAttribute=" + assocAttribute + "&libraryContentType=" + libraryContentType + "&sortAttribute=" + sortAttribute + "&librarySubType=" + librarySubType + "&agilentLocale=" + agilentLocale + "&country=" + country + "&language=" + language + "&literatureTagged=" + literatureTagged + "&supportFeatured=" + supportFeatured + "&supportTagged=" + supportTagged + "&libSupportTagged=" + libSupportTagged + "&regulatoryFlag=" + regulatoryFlag + "&d=";
		if(typeof literatureTagged !== 'undefined') {
			libraryAjax = libraryAjax+"&literatureTagged="+literatureTagged;
		}
		if(typeof supportFeatured !== 'undefined') {
			libraryAjax = libraryAjax+"&supportFeatured="+supportFeatured;
		}
		if(typeof supportTagged !== 'undefined') {
			libraryAjax = libraryAjax+"&supportTagged="+supportTagged;
		}
		if(typeof libSupportTagged !== 'undefined') {
			libraryAjax = libraryAjax+"&libSupportTagged="+libSupportTagged;
		}
		if(typeof regulatoryFlag !== 'undefined') {
			libraryAjax = libraryAjax+"&regulatoryFlag="+regulatoryFlag;
		}
		libraryAjax = wcsUrl+"&assetType="+assetType+"&assocAttribute="+assocAttribute+"&libraryContentType="+libraryContentType+"&sortAttribute="+sortAttribute+"&librarySubType="+librarySubType +"&agilentLocale="+agilentLocale+"&country="+country+"&language="+language+libraryAjax+"&d=";
    } else {
        libraryAjax = ajaxUrl + urlPar + ",sd_content_type:" + $(this).attr('sub-type') + ")";

    }
    var temp = $(this);

    /*App-308 */
    var accordionAction = new Object();
    accordionAction.node = temp.attr('data-section-name');
    accordionAction.actionType = temp.hasClass('active') ? "open" : "close";
    //_satellite.setVar('accordion action',accordionAction);
    //_satellite.track("accordion action");

    /*ends App-308 */

    if (!$(this).hasClass('Noajax')) {
        $(this).addClass('Noajax');
        if (!$(".loading").length)
            $('body').prepend('<div class="loading"></div>');

        $(".loading").css("display", "block");
        $.ajax({
            type: "GET",
            url: libraryAjax,
            //jsonpCallback: 'callbackfn',
            contentType: "application/json;charset=utf-8",
            // dataType: "jsonp",
            timeout: 30000,
            success: function(result) {
                var obj = jQuery.parseJSON(result);
                var litHTLM = '';
                if (obj.length == 0) {
                    litHTLM = '<div class="noDataResponse hide" style="display: block;">' + staticFilterLabelData["Nodatatodisplay"] + '</div>';
                } else {
                for (var t = 0; t < obj.length; t++) {

                    if (obj[t].relatedItems != null) {

                        //litHTLM+= '<section class="item col-full" data-section-name="pdp:"><header class="media">  <div class="media-body"> <h4 class="media-heading" role="heading" aria-level="4"><a id="LibraryContent-'+obj[t].relatedItems.sectionTitle+'" href="/cs/library/applications/5991-2508EN.pdf">'+obj[t].relatedItems.sectionTitle+'</a></h4><p class="lead">'+obj[t].relatedItems.sectionSummary+'</p><ul class="meta-data"><li data-type=""> <span class="meta-label"></span> <span class="meta-value">'+obj[t].relatedItems.contentDate+'</span></li><li data-type=""> <span class="meta-label"></span> <span class="meta-value">'+obj[t].relatedItems.contentSize+'</span> </li><li data-type=""> <span class="meta-label"></span> <span class="meta-value">'+obj[t].relatedItems.docIconType+'</span></li></ul></div></header></section>';
                        //Below line commented as part of cartagenia code and added the if condition
                        //litHTLM+= '<section class="item col-full" data-section-name="'+temp.attr('sectionpage')+':'+temp.attr('section')+':'+temp.attr('subsection')+':'+obj[t].relatedItems.sectionTitle+'"><header class="media">  <div class="media-body"> <h4 class="media-heading" role="heading" aria-level="4"><a id="'+obj[t].relatedItems.relatedObjectType+'-'+obj[t].relatedItems.relatedObjectId+'" href="'+obj[t].relatedItems.documentURL+'">'+obj[t].relatedItems.sectionTitle+'</a></h4>';			

                        //Below if condition is added/modified for Cartagenia--Start

                        if ("Cartagenia" == obj[t].relatedItems.subBrand) {
                            //console.log('subbrand-----'+obj[t].relatedItems.subBrand);
                            litHTLM += '<section class="item col-full" data-section-name="' + temp.attr('sectionpage') + ':' + temp.attr('section') + ':' + temp.attr('subsection') + ':' + obj[t].relatedItems.sectionTitle + '"><header class="media">  <div class="media-body"> <h4 class="media-heading" role="heading" aria-level="4"><a id="' + obj[t].relatedItems.relatedObjectType + '-' + obj[t].relatedItems.relatedObjectId + '" target="_blank" href="' + obj[t].relatedItems.documentURL + '">' + obj[t].relatedItems.sectionTitle + '</a></h4>';
                        } else {
                            litHTLM += '<section class="item col-full" data-section-name="' + temp.attr('sectionpage') + ':' + temp.attr('section') + ':' + temp.attr('subsection') + ':' + obj[t].relatedItems.sectionTitle + '"><header class="media">  <div class="media-body"> <h4 class="media-heading" role="heading" aria-level="4"><a id="' + obj[t].relatedItems.relatedObjectType + '-' + obj[t].relatedItems.relatedObjectId + '" target="_blank" href="' + obj[t].relatedItems.documentURL + '">' + obj[t].relatedItems.sectionTitle + '</a></h4>';
                        }

                        //Below if condition is added/modified for Cartagenia--End

                        if (obj[t].relatedItems.sectionSummary != null)
                            litHTLM += '<p class="lead">' + obj[t].relatedItems.sectionSummary + '</p>';

                        litHTLM += '<ul class="meta-data">';
                        // RBE-March APP-14089
                        if (obj[t].relatedItems.sectionsubType != null)
                            litHTLM += '<li data-type=""> <span class="meta-label"></span> <span class="meta-value">' + obj[t].relatedItems.sectionsubType + '</span> </li>';
                        if (obj[t].relatedItems.language != null)
                            litHTLM += '<li data-type=""> <span class="meta-label"></span> <span class="meta-value">' + obj[t].relatedItems.language + '</span> </li>';
                        // RBE-March APP-14089 End	
                        if (obj[t].relatedItems.contentDate != null)
                            litHTLM += '<li data-type=""> <span class="meta-label"></span> <span class="meta-value">' + obj[t].relatedItems.contentDate + '</span></li>';
                        if (obj[t].relatedItems.contentSize != null)
                            litHTLM += '<li data-type=""> <span class="meta-label"></span> <span class="meta-value">' + obj[t].relatedItems.contentSize + '</span> </li>';
                        if (obj[t].relatedItems.docIconType != null)
                            litHTLM += '<li data-type=""> <span class="meta-label"></span> <span class="meta-value">' + obj[t].relatedItems.docIconType + '</span></li>';

                        litHTLM += '</ul></div></header></section>';

                    } else {
                        litHTLM = '<div class="noBrowseData hide" style="display: block;">' + staticFilterLabelData["Nodatatodisplay"] + '</div>';
                    }
                    }

                }
                $(".loading").css("display", "none");
                $(temp.attr("href")).prepend(litHTLM);
				
				//Function call to track download links		
				if($(temp).parent().parent()[0].className.indexOf('literature') != -1)		
					async_load('section.literature');		
		
				if($(temp).parent().parent()[0].className.indexOf('support') != -1)		
					async_load('section.support');

            },
            error: function(e) {

                //console.log('Error ' + e);
                $(".loading").css("display", "none");
            }
        });

    }

});


/*handle DTM call first accordion*/
$('dt.accordionAction').click(function() {
    var temp1 = $(this);
    var accordionAction = new Object();
    accordionAction.node = temp1.attr('data-section-name');
    accordionAction.actionType = temp1.hasClass("active") ? "open" : "close";
    //_satellite.setVar('accordion action',accordionAction);
    //_satellite.track("accordion action");

});


$('.primary-nav li a').removeAttr('data-current-page');
$('.primary-nav li a').removeClass('active');

if ($('.breadcrumb').length > 0) {
    var srearchstr = $('.breadcrumb.container li:nth-child(2)').text().toLowerCase();
    $('.primary-nav li').each(function() {
        var searchmenu = $(this).find('a').text().toLowerCase();
        if (searchmenu.search(srearchstr) != -1 || srearchstr.search(searchmenu) != -1) {
            $(this).find('a').attr('data-current-page', '');
            $(this).find('a').addClass('active');
        }
    });
}

/*prmtion single btn */

$(document).ready(function() {

    var promotionBtn = $("#Btn-Promotions");
    if (promotionBtn.length > 0) {
        var nextButtons = promotionBtn.siblings('a');
        if (nextButtons.length == 0) {
            promotionBtn.addClass("singleBtnClass");
            promotionBtn.removeClass("transparentBtn");

        }
    }

    /*app-204*/
    $("#baidu").click(function(event) {
        event.preventDefault();
        var title = $(document).attr('title');
        var windowLoc = $(location).attr('href');
        var baiduUrl = $(this).attr("href");
        baiduUrl = baiduUrl + '?it=' + title + '&iu=' + windowLoc;
        var win = window.open(baiduUrl, '_blank');
        win.focus();

    });



});

$('.jpModal').click(function() {

    var cur = $(this);
    $(this).addClass("japanModal");
    var url = $(this).attr('h-ref');

    $("#dialog").addClass("japanModal");
    $("#dialog").dialog({
        resizable: false,
        modal: true,
        height: 250,
        width: 650,
        position: {
            my: 'top',
            at: 'top+150'
        },
        closeOnEscape: false,
        open: function(event, ui) {
            $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
        },
        buttons: [{
            text: function() {
                if ($.cookie('AG_LOCALE') == "JPjpn") {
                    return "いいえ";
                } else {
                    return "No";
                }

            },

            class: "btn btn-primary pull-right",
            click: function() {
                $(this).dialog("close");
            }


        }, {

            text: function() {
                if ($.cookie('AG_LOCALE') == "JPjpn") {
                    return "はい";
                } else {
                    return "Yes";
                }

            },

            class: "btn btn-primary pull-right",
            click: function() {
                cur.attr('href', url);
                cur.trigger('click');
                cur.removeAttr('href');
                $(this).dialog("close");
            }
        }]

    });
})



function truncationCT() {
    $('.customerTestimonialJSON .custContent').each(function() {
        if ($(this).height() > 288) {
            var words = $(this).html().split(/\s+/);
            words.push('...');
            do {
                words.splice(-2, 1);
                $(this).html(words.join(' '));
            } while ($(this).height() > 288);
        }

    });
}
truncationCT();

function createCustTestSections(firstPage, lastPage, rData) {
    customerTesties = "", customerTestiesFooter = "";
    //customerTesties +='<div class="customerTestimonialStyle">';

    for (var i = firstPage; i < lastPage; i++) {
        customerTesties += '<section class="item col-third card custTestScriptScetion" data-id="' + rData[i].id + '" data-section-name="sap:customer testimonial: 1290 Infinity II LC System">';
        customerTesties += '<header class="media "><div class="media-body">';
        if (rData[i].contact_details.length > 0) {
            customerTesties += /*<sl:translate>*/ '<h6 class="media-heading">' + rData[i].contact_details[0].suffix + ' ' + rData[i].contact_details[0].firstname + ' ' + rData[i].contact_details[0].lastname + '</h6>' /*</sl:translate>*/ ;
            var designationDetails = $.trim(rData[i].contact_details[0].designation);
			var companyDetails = $.trim(rData[i].contact_details[0].companyname);
			if (designationDetails != '' && companyDetails != '')
				designationDetails += ', ' + companyDetails;
			else
				designationDetails += companyDetails;
            customerTesties += /*<sl:translate>*/ '<p class="lead distDetail">' + designationDetails + '</p>' /*</sl:translate>*/ ;
        } else {
            customerTesties += '<h6 class="media-heading"></h6>';
            customerTesties += '<p class="lead distDetail"></p>';
        }
        if (rData[i].video_details && rData[i].video_details.length > 0) {
            customerTesties += /*<sl:translate>*/ '<p class="custContent">' + rData[i].cust_testimonial_video_desc + '</p>' /*</sl:translate>*/ ;
        } else {
            // DCWCS-819 - added "desc_truncated" attribute
            customerTesties += /*<sl:translate>*/ '<p class="custContent">' + rData[i].desc_truncated + '</p>' /*</sl:translate>*/ ;
        }
        //customerTesties += '<p class="custContent">'+rData[i].cust_testimonial_desc+'</p>';	
        customerTesties += /*<sl:translate>*/ '<a class="custTestMore">' + staticFilterLabelData["ViewMore"] + '</a>' /*</sl:translate>*/ ;
        customerTesties += '</header></section>';
        //$(".customerTestimonialStyle").append(customerTesties);
    }
    //customerTesties += ' </div>';

    customerTestiesFooter = /*<sl:translate>*/ '<div class="pdpPagination"><div class="pdpPaginationCon"><ul class="pagination pull-left customerTestPagination"></ul><p class="pull-left rightAlignRP showNoResults" >1 - 3 of 28 Results </p></div> <a class="pull-right rightAlignRP" href="#">' + staticFilterLabelData["Returntotop"] + ' <i class="fa fa-chevron-circle-up"></i></a> </div>' /*</sl:translate>*/ ;

    //$(".customerTestimonialJSON section").remove();
    $(".customerTestimonialStyle section").remove();
    $(".customerTestimonialJSON .pdpPagination").remove();

    $(".customerTestimonialStyle").html(customerTesties);
    $(".customerTestimonialJSON").append(customerTestiesFooter);
    $('body').scrollspy('refresh');


    //APP-8850
    if ($('  .bg-pdp-full.customerTestimonialStyle').is(":last")) {
        $(".customerTestimonialJSON footer a").removeClass("rightAlignRP");
    }
    //ends APP-8850

    truncationCT();
}


var testimonialUrl = window.testimonialURL,
    jsonDataCust;

var selectedPgpPageNumberCT = 1;

function createCustTestPagination(totalPages, viewPerpage, selectedPage) {
    ellipsisCountCT = 0;
    ellipsisFlagCT = true;
    var totalPagiantions = Math.ceil(totalPages / viewPerpage);

    var pageNumberHtml = "",
        endPage, firstPage;
    $(".customerTestPagination").empty();


    if (selectedPage == 1) {
        $(".customerTestimonialJSON .showNoResults").text(" 1 - " + viewPerpage + " " + staticFilterLabelData["Of"] + " " + totalPages + " " + staticFilterLabelData["Results"]);
        pageNumberHtml += ' <li class="disabled page-back"><a ></a></li>';

    } else {
        endPage = viewPerpage * selectedPage;

        firstPage = (endPage - viewPerpage) + 1;
        //console.log(firstPage+"-"+endPage);
        if (endPage <= totalPages)
            $(".customerTestimonialJSON .showNoResults").text(firstPage + " - " + endPage + " " + staticFilterLabelData["Of"] + " " + totalPages + " " + staticFilterLabelData["Results"]);
        else
            $(".customerTestimonialJSON .showNoResults").text(firstPage + " - " + totalPages + " " + staticFilterLabelData["Of"] + " " + totalPages + " " + staticFilterLabelData["Results"]);
        pageNumberHtml += ' <li class="page-back"><a ></a></li>';
    }


    for (var p = 1; p <= totalPagiantions; p++) {

        if (p == selectedPage) {
            pageNumberHtml += '<li class="active"><a >' + p + '</a></li>';
        } else if ((p == selectedPage + 1) || (p == selectedPage - 1) || (p == 1) || (p == totalPagiantions)) {
            pageNumberHtml += '<li><a >' + p + '</a></li>';
            ellipsisCountCT = 0;
            ellipsisFlagCT = true;
        } else {
            ellipsisCountCT = ellipsisCountCT + 1;
            if (ellipsisCountCT > 1) {
                if (ellipsisFlagCT) {
                    pageNumberHtml += '<li class="pgEllipsisTxt"><span >...</span></li>';
                    ellipsisFlagCT = false;
                }
            } else if (ellipsisCountCT == 1) {
                if ((totalPagiantions - selectedPage == 3 && p > selectedPage) || (selectedPage - 1 == 3 && p < selectedPage))
                    pageNumberHtml += '<li><a >' + p + '</a></li>';
            }
        }
    }
    if (totalPagiantions == selectedPage) {
        pageNumberHtml += '<li class="page-forward disabled"><a ></a></li>';
    } else {
        pageNumberHtml += '<li class="page-forward"><a ></a></li>';
    }
    $(".customerTestPagination").append(pageNumberHtml);
    //--------------Pagination ajax call---------------//
    $(".customerTestPagination li a").on("click", function(e) {
        $('html, body').animate({
            scrollTop: $("section.customerTestimonialJSON").offset().top - 80
        }, 100);
        //start fix forAPP-5711
        $('.item-collection.sidenav > .side-nav').css('position', 'fixed');
        //ends fix forAPP-5711
        if (!$(e.target.parentNode).hasClass("disabled")) {
            if ($(e.target.parentNode).hasClass("page-back")) {
                selectedPgpPageNumberCT = selectedPgpPageNumberCT - 1;
                var selectedLi = $(".customerTestPagination li").eq(selectedPgpPageNumber);
                $(".customerTestPagination li").removeClass("active");
                $(selectedLi).addClass("active");
            } else if ($(e.target.parentNode).hasClass("page-forward")) {
                selectedPgpPageNumberCT = selectedPgpPageNumberCT + 1;
                var selectedLi = $(".customerTestPagination li").eq(selectedPgpPageNumberCT);
                $(".customerTestPagination li").removeClass("active");
                $(selectedLi).addClass("active");
            } else {

                selectedPgpPageNumberCT = parseInt(e.target.innerHTML);
                $(".customerTestPagination li").removeClass("active");
                $(e.target.parentNode).addClass("active");
            }
            endPage = viewPerpage * selectedPgpPageNumberCT
            firstPage = endPage - viewPerpage;
            if (firstPage == 0) {
                $(".page-back").addClass("disabled")

            } else if (endPage >= totalPages) {
                $(".page-forward").addClass("disabled")

            } else {
                $(".page-back").removeClass("disabled")
                $(".page-forward").removeClass("disabled")

            }
            if ((totalPages - firstPage) > viewPerpage)
                createCustTestSections(firstPage, firstPage + viewPerpage, jsonDataCust);
            else
                createCustTestSections(firstPage, totalPages, jsonDataCust);
            createCustTestPagination(jsonDataCust.length, viewPerpage, selectedPgpPageNumberCT);
        }

    });

}

$("body").append("<div class='customer_testimonial_wrap'></div>");
$("body").append("<div id='customer_testimonial_modal' title='" + ((staticFilterLabelData["CustomerTestimonials"] !== undefined) ? staticFilterLabelData["CustomerTestimonials"] : "Customer Testimonials") + "'><div class='contentCT'></div><div class='footerCT'></div></div>");
$('.customer_testimonial_wrap').hide();
// DCWCS-19 - Customer Testimonials Modal Overlay (Video)
// url & autostart - coming from assets
// height & width - added default. Hence we can get it from assets if required.
// container - added default for carousel overlay video DCWCS-877.
var videoPlayer = function(url, autostart, height, width, container) {
    autostart = autostart || false;
    url = (url !== '' && url !== null && url !== undefined) ? url : '';
    height = height || 415;
    width = width || 720;
	container = container || 'customer_testimonial_modal';
    // set-up of JW Player with poster frame and video modes
    jwplayer("ct-video-desc").setup({
        width: width,
        height: height,
        autostart: autostart,
        modes: [{
                type: "html5",
                config: {
                    levels: [{
                        file: url
                    }]
                }
            },
            {
                type: "flash",
                src: "/cs/agilent_scripts/player.swf",
                config: {
                    levels: [{
                        file: url
                    }]
                }
            }
        ],
        events: {
            onReady: function() {
                if (autostart === 'false' || !autostart) {
                    this.play();
                    this.pause();
                }
            },
            onFullscreen: function() {
                if (this.getFullscreen()) {
                    $("#" + container).dialog("option", "width", $(window).width());
                    $("#" + container).dialog("option", "height", $(window).height());
                    $("#ct-video-desc_jwplayer_controlbar, #ct-video-desc_jwplayer_display").css("position", "absolute");
                    $("#paginationCToverlay, #custnext, #custprev").css("display", "none");
                } else {
					if (container == 'customer_testimonial_modal') {
						$("#customer_testimonial_modal").dialog("option", "width", 720);
						$("#customer_testimonial_modal").dialog("option", "height", 560);
						//$("#ct-video-desc_jwplayer_controlbar, #ct-video-desc_jwplayer_display").css("position", "fixed");
						$("#paginationCToverlay, #custnext, #custprev").css("display", "block");
                    }
                    else if (container == 'carousel-video-modal'){
                        $("#carousel-video-modal").dialog("option", "width", 960);		
                        $("#carousel-video-modal").dialog("option", "height", 645);		
                    }
                }
            }
        }
    });
};
// DCWCS-774 - PDP customer testimonials tiles with long descriptions are cutting off at the bottom of the tile on browser width 1222-992
$(window).resize(function() {
    truncationCT();
});


var generalImgId;
$(document).ready(function() {
    // example url: www.abc.com/#zoom-image=<id>
    if (location.href.indexOf("#zoom") != -1) {
        //if (window.location.hash && (window.location.hash == "#zoom-image")) {
        var imageId = location.hash.split('zoom')[1].split('&')[0];
        console.log("Image id: ");
        console.log(imageId);
        generalImgId = imageId;
        var imageIdString = '#' + imageId;
        // get thumbnail image which matches imageId$
        $(imageIdString).trigger('click');
        $('.zoomLaunch').trigger('click');

    }
    if (testimonialUrl != undefined) {
        $.ajax({
            type: "GET",
            url: testimonialUrl,
            dataType: "json",
            timeout: 30000,
            success: function(result) {
                jsonDataCust = result.testimonialItems;

                if (jsonDataCust.length < 3) {
                    /*To Show related products button*/
                    //$("#Btn-RelatedProducts").show();
                    //createRelProdSections(0,jsonDataCust.length,jsonDataCust);
                    $(".customerTestimonialJSON .showNoResults").hide();
                } else {
                    /*To Show related products button*/
                    //$("#Btn-RelatedProducts").show();
                    //createRelProdSections(0,6,jsonDataCust);
                    $(".customerTestimonialJSON .showNoResults").show();
                    createCustTestPagination(jsonDataCust.length, 3, 1);
                }
            },
            error: function(e) {

                //alert('Network Error ');
                //$("#Btn-RelatedProducts").hide();
                console.log('Error ' + e);

            }
        });
    }

        //UX-813 start
		setTimeout(function(){
            $('.media-body .custContent').each(function(){
                 
                    if ($(this).height() >65) {
                        var words = $(this).html().split(/\s+/);
                        words.push('...');
                        do {
                           words.splice(-2, 1);
                           var strloc = String(window.location);
                            if(words.join(' ').length<4 && strloc.search("/zh-cn/") != -1) { // DCWCS-1200 modified due to translations
                                  /*<sl:translate>*/ $(this).html(staticFilterLabelData["LearnMore"]);/*</sl:translate>*/
                            }
                          else 
                            $(this).html( words.join(' ') );
                            } while($(this).height() > 65);
                        }
                    
                
                });
            }, 0);
            //UX-814 end
});


var customer_testimonial_singledata, customer_testimonial_singlecount;

function getPaginationInOverlay() {
    $(".customer_testimonial_wrap #paginationCToverlay").html((customer_testimonial_singlecount + 1) + "/" + jsonDataCust.length);
}

function arrowAlignCToverlay() {
    var topOverlayCust = parseInt($('.customer_testimonial_wrap .ui-dialog').css('top'));
    var leftOverlayCust = parseInt($('.customer_testimonial_wrap .ui-dialog').css('left'));
    $('#custprev').css({
        'left': leftOverlayCust - 104 + 'px',
        'top': topOverlayCust + 225 + 'px'
    });
    $('#custnext').css({
        'left': leftOverlayCust + 724 + 'px',
        'top': topOverlayCust + 225 + 'px'
    });
    $('#paginationCToverlay').css('top', topOverlayCust + 573 + 'px');
}

function testimonialDialogInit(data) {
    $("#customer_testimonial_modal").dialog({
        show: {
            effect: "fadeIn"
        },
        resizable: false,
        draggable: false,
        appendTo: ".customer_testimonial_wrap",
        modal: true,
        height: 560,
        width: 720,
        closeOnEscape: true,
        close: function() {
            $('.customer_testimonial_wrap').hide();
            $('html').css('overflow', 'auto');
            // DCWCS-778-DCWCS-19 :After Closing the Customer Testimonials Overlay, Video keeps playing in background in Browser
            if ($("div#ct-video-desc") != '' && $("div#ct-video-desc").text().length > 0) {
                jwplayer("ct-video-desc").stop();
            }
        },
        open: function() {
            // DCWCS-19 - Customer Testimonials Modal Overlay (Video) and content area
            $(".contentCT").empty();
            if (data.video_details && data.video_details.length > 0) {
                var videoDetails = data.video_details[0],
                    video_url = videoDetails.video_source_file,
                    autostart = videoDetails.autostart;
                if (video_url != '') {
                    $(".contentCT").html('<div id="ct-video-desc"></div>');
                    videoPlayer(video_url, autostart);
                }
            } else {
                // DCWCS-772 - more space on top and bottom when scroll		
                var topBottombar = '<div class="topbar"></div><div class="bottombar"></div>';
                /*<sl:translate>*/
                $(".contentCT").html('<div class="ct-content-desc">' + data.cust_testimonial_desc + '</div>' + topBottombar); /*<sl:translate>*/
            }
            //Customer Testimonials Modal Overlay footer area
            if (data.contact_details.length > 0) {
                $('.footerCT').empty();
                if (data.contact_details[0].imageUrl != "") {
                    $('.footerCT').append('<div class="CT-img"><img src="' + data.contact_details[0].imageUrl + '" alt=""></div>');
                }
                var designationDetails = $.trim(data.contact_details[0].designation);
				var companyDetails = $.trim(data.contact_details[0].companyname);
				if (designationDetails != '' && companyDetails != '')
					designationDetails += ', ' + companyDetails;
				else
					designationDetails += companyDetails;
                /*<sl:translate>*/
                $('.footerCT').append('<div class="CT-info"><span>'+data.contact_details[0].suffix+' '+data.contact_details[0].firstname+' '+data.contact_details[0].lastname+'</span><span>'+ designationDetails +'</span></div>'); /*<sl:translate>*/				
            } else {
                $('.footerCT').html('');
            }
            getPaginationInOverlay();
            $('html').css('overflow', 'hidden');
            $('.customer_testimonial_wrap .ui-widget-overlay').bind('click', function() {
                $('#customer_testimonial_modal').dialog('close');
            });
        }
    });
}
var DELAY = 200,
    nextclicks = 0,
    prevclicks = 0,
    timer = null;
$(document).on("click", ".customerTestimonialStyle section,.customer-pgp-testimonial section", function(e) {
    if ($(this).parent().hasClass('customer-pgp-testimonial')) {
        jsonDataCust = jsonDataCust.slice(0, 4);
    }
    var tileId = $(this).attr('data-id');
    for (var i = 0; i < jsonDataCust.length; i++) {
        if (tileId == jsonDataCust[i].id) {
            customer_testimonial_singlecount = i;
            customer_testimonial_singledata = jsonDataCust[i];
        }
    }
    $(".customer_testimonial_wrap").empty();
    $('.customer_testimonial_wrap').show();
    testimonialDialogInit(customer_testimonial_singledata);
    // DCWCS-758 - DCWCS-17 : No arrows should display if there is only 1 CT
    if (jsonDataCust.length > 1) {
        $(".customer_testimonial_wrap").append("<div id='custprev' class='cust-overlay-arrow'></div>");
        $(".customer_testimonial_wrap").append("<div id='custnext' class='cust-overlay-arrow'></div>");
        $(".customer_testimonial_wrap").append("<div id='paginationCToverlay'></div>");
        arrowAlignCToverlay();
        getPaginationInOverlay();
    }
});
$('.customer_testimonial_wrap').on("click dblclick", "#custnext", function(e) {
    nextclicks++; //count clicks
    if (nextclicks === 1) {
        timer = setTimeout(function() {
            $("#customer_testimonial_modal").dialog('close');
            $('.customer_testimonial_wrap').show();
            customer_testimonial_singlecount++;
            if (customer_testimonial_singlecount > jsonDataCust.length - 1) {
                customer_testimonial_singlecount = 0;
            }
            customer_testimonial_singledata = jsonDataCust[customer_testimonial_singlecount];
            testimonialDialogInit(customer_testimonial_singledata);
            arrowAlignCToverlay();
            nextclicks = 0; //after action performed, reset counter
        }, DELAY);
    } else {
        clearTimeout(timer); //prevent single-click action
        nextclicks = 0; //after action performed, reset counter
    }
});
$('.customer_testimonial_wrap').on("click dblclick", "#custprev", function(e) {
    prevclicks++; //count clicks
    if (prevclicks === 1) {
        timer = setTimeout(function() {
            $("#customer_testimonial_modal").dialog('close')
            $('.customer_testimonial_wrap').show();
            customer_testimonial_singlecount--;
            if (customer_testimonial_singlecount < 0) {
                customer_testimonial_singlecount = jsonDataCust.length - 1;
            }
            customer_testimonial_singledata = jsonDataCust[customer_testimonial_singlecount];
            testimonialDialogInit(customer_testimonial_singledata);
            arrowAlignCToverlay();
            prevclicks = 0; //after action performed, reset counter
        }, DELAY);
    } else {
        clearTimeout(timer); //prevent single-click action
        prevclicks = 0; //after action performed, reset counter
    }
});


if ($("ol.breadcrumb.container").length > 0) {
    //if ($("ol.breadcrumb.container").attr("data-section").split(":")[0] != "ssp" && $("ol.breadcrumb.container").attr("data-section").split(":")[0] != "pgp" && $("ol.breadcrumb.container").attr("data-section").split(":")[0] != "svgp") {
        /* RBE Dec APP-10858 */
        /*function getFooterfixed () {
        var contentHeight, assignContentVal;
        if ($("#content").height() != null) {
            contentHeight = $("#content").height();
            assignContentVal = "#content";
			}
			else if($("#container").height() != null) {
            contentHeight = $("#container").height();
            assignContentVal = "#container";
			}
			else if($("div.promotionContainer").height() != null) {
            contentHeight = $("div.promotionContainer").height();
            assignContentVal = "div.promotionContainer";
        }
        var totalBlocksHeight = $("header").height() + $("footer").height() + $("footer#footer").height() + contentHeight;
        var windowHeight = $(window).height();

        var calcContainerHeight = windowHeight - totalBlocksHeight;
        if (windowHeight > totalBlocksHeight && (!$(assignContentVal).next("section").is(":visible"))) {
            var appliedHeight = calcContainerHeight + contentHeight;
            $(assignContentVal).css('height', appliedHeight + 25 + 'px');
            console.log("Script Applied Height : " + $("#content").height());
			}
			else {
            console.log(" script Height not applied");
        }

        //} */	
        /* RBE Dec APP-10858 Ends*/
	/*}
	else {
        console.log("any pgp,svgp,slsegment available");
    }*/
}
else {
    //if($("ol.breadcrumb.container").attr("data-section").split(":")[0] != "ssp" && $("ol.breadcrumb.container").attr("data-section").split(":")[0] != "pgp" && $("ol.breadcrumb.container").attr("data-section").split(":")[0] != "svgp") {
    /* RBE Dec APP-10858 */
    /*function getFooterfixed () {
    var contentHeight, assignContentVal;
    if ($("#content").height() != null) {
        contentHeight = $("#content").height();
        assignContentVal = "#content";
			}
			else if($("#container").height() != null) {
        contentHeight = $("#container").height();
        assignContentVal = "#container";
			}
			else if($("div.promotionContainer").height() != null) {
        contentHeight = $("div.promotionContainer").height();
        assignContentVal = "div.promotionContainer";
    }
    var totalBlocksHeight = $("header").height() + $("footer").height() + $("footer#footer").height() + contentHeight;
    var windowHeight = $(window).height();

    var calcContainerHeight = windowHeight - totalBlocksHeight;
    if (windowHeight > totalBlocksHeight && (!$(assignContentVal).next("section").is(":visible"))) {
        var appliedHeight = calcContainerHeight + contentHeight;
        $(assignContentVal).css('height', appliedHeight + 25 + 'px');
        console.log("Script Applied Height : " + $("#content").height());
			}
			else {
        console.log(" script Height not applied");
    }

    //}	*/
    /* RBE Dec APP-10858 Ends*/
    /*}
    else {
    	console.log("any pgp,svgp,slsegment available");
    }*/
}

/*truncation logic on pgp CT*/
window.onload = function() {
	
	if (typeof updatedIndexHero != "undefined") { // UX-41 - Added for home page banner H1/H2
		var heroTagH1 = $('.heroBox div h2').eq(updatedIndexHero + 1).html();
		$('.heroBox div h2').eq(updatedIndexHero + 1).replaceWith('<h1>' + heroTagH1 + '</h1>');
	}
	
    $('.customer-pgp-testimonial .custContent').each(function() {
        console.log($(this).height())
        if ($(this).height() > 80) {
            var words = $(this).html().split(/\s+/);
            words.push('...');
            do {
                words.splice(-2, 1);
                $(this).html(words.join(' '));
            } while ($(this).height() > 80);
        }

    });
}

// DCWCS-877 - Carousel in Product & Solution Category page - Start
var carouselTimer;
$(document).ready(function() {
    //script for herobanner slide
    var slider = $('.pc-bxslider'), sliderLength = slider.children().length;
    slider.bxSlider({
        auto: (sliderLength < 2) ? false : true,
        pagerCustom: '#custom-pager',
        pause: 12000,
        autoStart: true,
        touchEnabled: false,
        mode: 'horizontal',
        onSlideBefore: function($slideElement, oldIndex, newIndex) {
            var $lazy = $slideElement.find(".lazy")
            var $load = $lazy.attr("data-src");
            $lazy.attr("src", $load).removeClass("lazy");
            // This logic should be rewrite. To avoid this logic need to reduce the min-height for transparent-message-box 
            var transparentMessageBoxElement = $slideElement.find('div.transparent-message-box');
            var divs = transparentMessageBoxElement.find('div').length;
            var headLineElement = transparentMessageBoxElement.find('div.headline-title');
            if (divs == 2 && headLineElement.height() == 38) {
                headLineElement.css({"line-height":"51px"});
            }
        },
        onSliderLoad: function() {
            $(".pc-bxslider").css("visibility", "visible");
            if (sliderLength > 1) {
                $("#custom-pager").css("display", "block");
            }
        }
    });

    // Pause slider for 3 minutes when click on circle nav button
    $('.custom-pager-link').click(function(e) {
        clearTimeout(carouselTimer);
        var i = $(this).data('slide-index');
        slider.goToSlide(i);
        slider.stopAuto();
        carouselTimer = setTimeout(function(){ slider.startAuto();}, 168000);
        return false;
    });

    // To overwrite the padding for <body> tag, div.content, etc 
    if ($("div#carousel-bxoutercontainer").length || $("div.carousel-container > img").length) {
        // $("body").addClass("carousel");
        $(".item.hero").css({"padding-top":"0px"});
    } 
	else if ($("div.content-area").length || $("div.reachback-form-container").length) {
		
	}else if($('.pdt-comp-sec').length){		
		$("body").addClass("no-carousel-prod-comp")		
	}
	else {
        $("body").removeClass("carousel").addClass("no-carousel");
    }

    //Dynamically adjust the Headline text
    $("ul.pc-bxslider li div.transparent-message-box").each(function(i) {
        var headLineElement = $(this).find('div.headline-title');
        var readMoreElement = $(this).find('div.read-more');
        var divs = $(this).find('div').length;
        if (divs == 1 && headLineElement.height() == 38) {
            headLineElement.addClass('one-line')
        }
        else if (divs == 1 && headLineElement.height() == 76) {
            headLineElement.addClass('two-line')
        }
    });

    $(".carousel-video").on("click", function() {
        var video_url = $(this).data('video-url');
        var autostart = $(this).data('autostart');
        $(".carousel-video-wrap").empty();
        $('.carousel-video-wrap').show();
        carouselDialogInit(video_url, autostart, slider, sliderLength);
        return false;
    });

    // If there is no URL then neeed to display default cursor pointer
    $(".transparent-message-box:not(:has(.read-more))").css({"cursor":"default", "background-color":"rgba(34, 34, 34, 0.7)"});
});

// Play video on carousel
$("body").append("<div class='carousel-video-wrap'></div>");
$("body").append("<div id='carousel-video-modal' title='" + ((staticFilterLabelData["Video"] !== undefined) ? staticFilterLabelData["Video"] : "Video") + "'><div class='carousel-overlay-content'></div><div class='carousel-overlay-footer'></div></div>");
$('.carousel-video-wrap').hide();

function carouselDialogInit(video_url, autostart, slider, sliderLength) {
    $("#carousel-video-modal").dialog({
        show: {
            effect: "fadeIn"
        },
        resizable: false,
        draggable: false,
        appendTo: ".carousel-video-wrap",
        modal: true,
        height: 645,
        width: 960,
        closeOnEscape: true,
        close: function() {
            (sliderLength > 1) ? slider.startAuto(): '';
            $('.carousel-video-wrap').hide();
            $('html').css('overflow', 'auto');
            jwplayer("ct-video-desc").stop();
        },
        open: function() {
            clearTimeout(carouselTimer);
            slider.hasOwnProperty('stopAuto') ? slider.stopAuto() : ''; // DCWCS-3909, DCWCS-3857, DCWCS-3899 - added condition to avoid issues.

            //Modal Overlay content area
            $(".carousel-overlay-content").empty();
            $(".carousel-overlay-content").html('<div id="ct-video-desc"></div>');
            videoPlayer(video_url, autostart, 540, 960, 'carousel-video-modal');

            //Modal Overlay footer area
            $('.carousel-overlay-footer').html('');

            $('html').css('overflow', 'hidden');
            $('.carousel-video-wrap .ui-widget-overlay').on('click', function() {
                $('#carousel-video-modal').dialog('close');
            });
        }
    });
}

// DCWCS-877 - Carousel in Product & Solution Category page - End

// DCWCS-3857 - Added new function for image modal overlay - Start
// Show image on popup
$("body").append("<div class='image-wrap'></div>");
$("body").append("<div id='image-modal'><button type='button' class='ui-dialog-titlebar-close'></button><div class='image-overlay-content'></div></div>");
$('.image-wrap').hide();

function imageDialogInit(image_url) {
    $("#image-modal").dialog({
        show: {
            effect: "fadeIn"
        },
        resizable: false,
        draggable: false,
        appendTo: ".image-wrap",
        modal: true,
        height: 540,
        width: 960,
        closeOnEscape: true,
        close: function() {
            $('.image-wrap').hide();
            $('html').css('overflow', 'auto');
        },
        open: function() {
            //Modal Overlay content area
            $(".image-overlay-content").empty();
            $(".image-overlay-content").html('<div><img src="' + image_url + '" alt="" title="" /></div>');

            $('html').css('overflow', 'hidden');
            $('.image-wrap .ui-widget-overlay, .image-wrap .ui-dialog-titlebar-close').on('click', function() {
                $('#image-modal').dialog('close');
            });
        }
    });
}
// DCWCS-3857 - Added new function for image modal overlay - End

/* Mallard June DCWCS-2186 */
$(document).ready(function() {
	var highCount = 1;
	var nowCount = 1;
	$('#homeHighlightsDiv').children("div.highlightOne").each(function() {
		if (highCount % 3 == 0) $(this).addClass("lastHighlight");
		highCount++;
	});
	$('#homeNowPartAgilent').find("div.now-part-section").each(function() {
		if (nowCount % 3 == 0) $(this).addClass("lastNowPart");
		nowCount++;
	});
});
/* Mallard June DCWCS-2186 Ends*/

function scrollingDefinition(active){
	if(typeof analytics !== "undefined" && typeof currentPage !== "undefined"){
		currentPage = currentPage.trim();	
		if(analytics.indexOf(currentPage)!=-1){
			if(active){
				try{
					if (typeof PDPTracker === "function") { 
						PDPTracker(active);	
					}
				}catch(err) {
        				console.log("Error while calling PDPTracker");
   				 }
			}
		}
	}
    console.log("left nav section highlighted "+ active);	
}
/* DCWCS-3819 Starts */
jQuery('.featuredSol img').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function(data) {
       // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');
        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');
        // Replace image with new SVG
        $img.replaceWith($svg);
    }, 'xml');
});
$(document).ready(function(){
// REMOVE EXTRA SPANS 
// $('.related-product-desc > span span').remove();
function getWords(container) {   
	var tmpContainer = document.createElement('div');
	tmpContainer.style.width = 0;
	tmpContainer.style.position = 'absolute';
	tmpContainer.style.top = '-9999em';
	tmpContainer.style.left = '-9999em';
	document.body.appendChild(tmpContainer);
	container.origText = container.innerHTML.trim();
	var chars = container.origText.split("");
	var words = [];
	var word = chars[0];
	tmpContainer.innerHTML = chars[0];
	var prevHeight = tmpContainer.offsetHeight;
	for(var i=1; i < chars.length; i++) {
		tmpContainer.innerHTML += chars[i];
		var currHeight = tmpContainer.offsetHeight;
		if(currHeight > prevHeight) {
			prevHeight = currHeight;
			words.push(word);
			word = chars[i];
		} else {
			word += chars[i];
		}
	}
	words.push(word);
	//console.log(words);
	container.words = words;
	document.body.removeChild(tmpContainer);
}
function truncateTextByHeight(container, height, ender) {  
	if(container.origText == "" || container.innerHTML.trim() == "")
		return;
	if(!container.origText)
		getWords(container);
	var words = container.words;
	container.innerHTML = words[0];
	var currHeight = container.offsetHeight;
	//console.log("currHeight "+currHeight);
	if(currHeight > height)
		return;
	if(!ender)
		ender = "";
	var prevText = words[0];
	var currHeight = container.offsetHeight;
	if(currHeight > height)
		return;
	for(var i=1; i < words.length; i++) {
		var currText = prevText + words[i];
		container.innerHTML = currText + ender;
		var currHeight = container.offsetHeight;
		//console.log("currText "+ currText);
		//console.log("prevText "+ prevText);
		if(currHeight > height) {
			container.innerHTML = prevText.trim() + ender;
			return;
		}
		prevText = currText;
	}
	if(i == words.length)
		container.innerHTML = container.origText;
}
var list= document.getElementsByClassName("txt-truncation-ellipses");
 for (var i = 0; i < list.length; i++) {
	$(".txt-truncation-ellipses").addClass("txt-truncation-ellipses"+i);
 }
function truncateRelatedProductDesc() {
	$('.txt-truncation-ellipses').each(function() {
		var h = $(".txt-truncation-ellipses").height();
 		/*var desc = $(this).find('.related-product-desc > p'); // Commented due to template change
 		var descTop = $(".related-product-desc > p").height();*/
		var desc = $(this).find('p.related-product-desc');
		var descTop = $("p.related-product-desc").height();
		//console.log("descTop "+descTop);
		var descTargetHeight = (h-30) - descTop;
		//console.log("descTargetHeight "+descTargetHeight);
		truncateTextByHeight(desc.get(0), descTargetHeight, " ...")
	}); 
}
$(".txt-truncation-ellipses").css("display", "none");
setTimeout(function(){
   $(".txt-truncation-ellipses").css("display", "block");
   truncateRelatedProductDesc();
}, 10);
truncateCustomQuoteBoxDesc();
    $(window).resize(truncateRelatedProductDesc);
	$(window).resize(truncateCustomQuoteBoxDesc);
	alignCustomQuoteBox();
});
/* DCWCS-3819 Ends */
/*See all services - Mac fix*/
if (navigator.userAgent.indexOf('Mac OS X') != -1) {
    $(".see-all-listed-label").css("padding-top", "210px");
} else {
    $(".see-all-listed-label").css("padding-top", "208px");
}
/* NPOA Changes Starts */
if ($('.now-part-agilent') && $('.now-part-agilent').length > 0) {
    var BGcolor = '';
    if (typeof backgroundColor != 'undefined') {
        BGcolor = backgroundColor;
    }
    //if(BGcolor == 'grey' || BGcolor == 'Grey' || BGcolor == 'GREY'){
    if (BGcolor.toLowerCase() == 'grey') {
        BGcolor = '#EDEFF0';
    } else if (BGcolor.toLowerCase() == 'white') {
        BGcolor = '#FFF';
    }
    if ($.cookie("agilent_locale") == "zh_CN") {
        $(".now-part-agilent").css("background", "#FFF");
        $(".now-part-agilent").css("padding-top", "59px");
        $(".view-brand-cta").css("margin-top", "10px");
    } else {
        if (BGcolor) {
            $(".now-part-agilent").css("background", BGcolor);
        }
    }
    var list = document.getElementsByClassName("np-child-wrapper");
    var addCls = $('.np-child-wrapper');
    for (i = 0; i < list.length; i++) {
        addCls.eq(i).addClass('tileClr' + i);
        //$(".tileClr"+i).css("border-left", "2px solid "+borderColor[i]);
    }
    if ($(".np-child-wrapper").length == 3) {
        $(".np-child-wrapper").addClass("three-acquisition");
    } else if ($(".np-child-wrapper").length == 4) {
        $(".np-child-wrapper").addClass("four-acquisition");
    } else if ($(".np-child-wrapper").length == 5) {
        $(".np-child-wrapper").addClass("five-acquisition");
    }
    window.onload = function() {
        nowPartCustom(list.length);
    }
}
function nowPartCustom(listLen) {
    var borderHeight = "0";
    for (i = 0; i <= listLen; i++) {
        var tileHeight = $(".tileClr" + i).height();
        if (tileHeight > borderHeight) {
            borderHeight = tileHeight + 1;
        }
    }
    $(".np-child-wrapper").css("height", borderHeight);
}

/* NPOA Changes Ends */

var cqBoxDesc,cqBoxFlag=true;
function truncateCustomQuoteBoxDesc(){
	$('.custom-quote-cta .custom-quote-cta-txt').each(function() {
		if(cqBoxFlag){
			cqBoxDesc=$(this)[0].innerHTML;
			cqBoxFlag=false;
		}
		$(this).html(cqBoxDesc);
		var origContent = $(this).html();
		
		$(this).css("max-height","initial");
		while ($(this).height() >= 76) {
			origContent = trimFromLast(origContent);
			$(this).html(origContent + "...");
		}
	});
}

function trimFromLast(input){
  var delimFound = false;
  for (var i = input.length - 1; i >= 0; i--)
  {
	// \uFF0C-comma \u3002-stop  \u002D-hyphen  \u2014-EM DASH  \u3001-IDEOGRAPHIC COMMA  \u002C-COMMA  \u4E00CJK- <enum dash> Ideograph  \u2009-thin space

	if (input[i]==' ' || input[i] == '\uFF0C' || input[i] == '\u3002' ||input[i] == '\u002D'||input[i]=='\u2014' || input[i] == ',' 
	|| input[i] == '\u3001' ||input[i]=='\u002C' ||input[i] == '\u4E00' || input[i] == '\u2009')
	{
   
          delimFound = true;
      
	} else if(delimFound) {
	  var str2 = input.substring(0,i+1);
          //console.log(input.substring(0,i+1));
          return input.substring(0,i+1);
        }
  }
  return "";
}

function alignCustomQuoteBox(){
	if($('.custom-quote-cta-btn').length == 0){
		$('.custom-quote-cta').addClass('no-cta');
	}
}