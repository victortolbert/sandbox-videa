const markets = [
  {
    rank: 1,
    market: 'New York',
    homes: '7,461,030',
    percent: 6.442
  },
  {
    rank: 2,
    market: 'Los Angeles',
    homes: '5,665,780',
    percent: 4.892
  },
  {
    rank: 3,
    market: 'Chicago',
    homes: '3,534,080',
    percent: 3.052
  },
  {
    rank: 4,
    market: 'Philadelphia',
    homes: '2,963,500',
    percent: 2.559
  },
  {
    rank: 5,
    market: 'Dallas-Ft. Worth',
    homes: '2,655,290',
    percent: 2.293
  },
  {
    rank: 6,
    market: 'San Francisco-Oak-San Jose',
    homes: '2,518,900',
    percent: 2.175
  },
  {
    rank: 7,
    market: 'Boston (Manchester)',
    homes: '2,433,040',
    percent: 2.101
  },
  {
    rank: 8,
    market: 'Washington, DC (Hagrstwn)',
    homes: '2,412,250',
    percent: 2.083
  },
  {
    rank: 9,
    market: 'Atlanta',
    homes: '2,375,050',
    percent: 2.051
  },
  {
    rank: 10,
    market: 'Houston',
    homes: '2,289,360',
    percent: 1.977
  },
  {
    rank: 11,
    market: 'Detroit',
    homes: '1,856,400',
    percent: 1.603
  },
  {
    rank: 12,
    market: 'Phoenix (Prescott)',
    homes: '1,855,310',
    percent: 1.602
  },
  {
    rank: 13,
    market: 'Seattle-Tacoma',
    homes: '1,847,780',
    percent: 1.596
  },
  {
    rank: 14,
    market: 'Tampa-St. Pete (Sarasota)',
    homes: '1,827,510',
    percent: 1.578
  },
  {
    rank: 15,
    market: 'Minneapolis-St. Paul',
    homes: '1,748,070',
    percent: 1.509
  },
  {
    rank: 16,
    market: 'Miami-Ft. Lauderdale',
    homes: '1,663,290',
    percent: 1.436
  },
  {
    rank: 17,
    market: 'Denver',
    homes: '1,574,610',
    percent: 1.360
  },
  {
    rank: 18,
    market: 'Orlando-Daytona Bch-Melbrn',
    homes: '1,490,380',
    percent: 1.287
  },
  {
    rank: 19,
    market: 'Cleveland-Akron (Canton)',
    homes: '1,484,530',
    percent: 1.282
  },
  {
    rank: 20,
    market: 'Sacramnto-Stkton-Modesto',
    homes: '1,387,950',
    percent: 1.198
  },
  {
    rank: 21,
    market: 'St. Louis',
    homes: '1,254,530',
    percent: 1.083
  },
  {
    rank: 22,
    market: 'Portland, OR',
    homes: '1,185,160',
    percent: 1.023
  },
  {
    rank: 23,
    market: 'Pittsburgh',
    homes: '1,181,540',
    percent: 1.020
  },
  {
    rank: 24,
    market: 'Raleigh-Durham (Fayetvlle)',
    homes: '1,165,120',
    percent: 1.006
  },
  {
    rank: 25,
    market: 'Charlotte',
    homes: '1,157,920',
    percent: 1.000
  },
  {
    rank: 26,
    market: 'Indianapolis',
    homes: '1,096,650',
    percent: 0.947
  },
  {
    rank: 27,
    market: 'Baltimore',
    homes: '1,095,240',
    percent: 0.946
  },
  {
    rank: 28,
    market: 'San Diego',
    homes: '1,080,880',
    percent: 0.933
  },
  {
    rank: 29,
    market: 'Nashville',
    homes: '1,043,440',
    percent: 0.901
  },
  {
    rank: 30,
    market: 'Hartford &amp; New Haven',
    homes: '999.990',
    percent: 0.863
  },
  {
    rank: 31,
    market: 'Kansas City',
    homes: '941.980',
    percent: 0.813
  },
  {
    rank: 32,
    market: 'Columbus, OH',
    homes: '928.530',
    percent: 0.802
  },
  {
    rank: 33,
    market: 'Salt Lake City',
    homes: '921.240',
    percent: 0.796
  },
  {
    rank: 34,
    market: 'Milwaukee',
    homes: '916.590',
    percent: 0.791
  },
  {
    rank: 35,
    market: 'Cincinnati',
    homes: '908.440',
    percent: 0.784
  },
  {
    rank: 36,
    market: 'San Antonio',
    homes: '906.210',
    percent: 0.783
  },
  {
    rank: 37,
    market: 'Greenvll-Spart-Ashevll-And',
    homes: '849.340',
    percent: 0.733
  },
  {
    rank: 38,
    market: 'West Palm Beach-Ft. Pierce',
    homes: '809.640',
    percent: 0.699
  },
  {
    rank: 39,
    market: 'Grand Rapids-Kalmzoo-B.Crk',
    homes: '734.480',
    percent: 0.634
  },
  {
    rank: 40,
    market: 'Austin',
    homes: '733.390',
    percent: 0.633
  },
  {
    rank: 41,
    market: 'Oklahoma City',
    homes: '730.020',
    percent: 0.630
  },
  {
    rank: 42,
    market: 'Las Vegas',
    homes: '726.010',
    percent: 0.627
  },
  {
    rank: 43,
    market: 'Harrisburg-Lncstr-Leb-York',
    homes: '725.340',
    percent: 0.626
  },
  {
    rank: 44,
    market: 'Birmingham (Ann and Tusc)',
    homes: '719.200',
    percent: 0.621
  },
  {
    rank: 45,
    market: 'Norfolk-Portsmth-Newpt Nws',
    homes: '718.930',
    percent: 0.621
  },
  {
    rank: 46,
    market: 'Greensboro-H.Point-W.Salem',
    homes: '705.380',
    percent: 0.609
  },
  {
    rank: 47,
    market: 'Albuquerque-Santa Fe',
    homes: '690.740',
    percent: 0.596
  },
  {
    rank: 48,
    market: 'Jacksonville',
    homes: '675.650',
    percent: 0.583
  },
  {
    rank: 49,
    market: 'Louisville',
    homes: '674.950',
    percent: 0.583
  },
  {
    rank: 50,
    market: 'Memphis',
    homes: '672.390',
    percent: 0.581
  },
  {
    rank: 51,
    market: 'New Orleans',
    homes: '652.180',
    percent: 0.563
  },
  {
    rank: 52,
    market: 'Buffalo',
    homes: '634.280',
    percent: 0.548
  },
  {
    rank: 53,
    market: 'Providence-New Bedford',
    homes: '614.880',
    percent: 0.531
  },
  {
    rank: 54,
    market: 'Wilkes Barre-Scranton-Hztn',
    homes: '584.870',
    percent: 0.505
  },
  {
    rank: 55,
    market: 'Fresno-Visalia',
    homes: '580.180',
    percent: 0.501
  },
  {
    rank: 56,
    market: 'Little Rock-Pine Bluff',
    homes: '571.040',
    percent: 0.493
  },
  {
    rank: 57,
    market: 'Richmond-Petersburg',
    homes: '559.980',
    percent: 0.484
  },
  {
    rank: 58,
    market: 'Albany-Schenectady-Troy',
    homes: '548.560',
    percent: 0.474
  },
  {
    rank: 59,
    market: 'Mobile-Pensacola (Ft Walt)',
    homes: '541.060',
    percent: 0.467
  },
  {
    rank: 60,
    market: 'Tulsa',
    homes: '526.580',
    percent: 0.455
  },
  {
    rank: 61,
    market: 'Knoxville',
    homes: '525.620',
    percent: 0.454
  },
  {
    rank: 62,
    market: 'Ft. Myers-Naples',
    homes: '517.920',
    percent: 0.447
  },
  {
    rank: 63,
    market: 'Lexington',
    homes: '490.920',
    percent: 0.424
  },
  {
    rank: 64,
    market: 'Dayton',
    homes: '480.430',
    percent: 0.415
  },
  {
    rank: 65,
    market: 'Charleston-Huntington',
    homes: '457.600',
    percent: 0.395
  },
  {
    rank: 66,
    market: 'Roanoke-Lynchburg',
    homes: '455.340',
    percent: 0.393
  },
  {
    rank: 67,
    market: 'Wichita-Hutchinson Plus',
    homes: '454.040',
    percent: 0.392
  },
  {
    rank: 68,
    market: 'Flint-Saginaw-Bay City',
    homes: '448.960',
    percent: 0.388
  },
  {
    rank: 69,
    market: 'Honolulu',
    homes: '448.650',
    percent: 0.387
  },
  {
    rank: 70,
    market: 'Green Bay-Appleton',
    homes: '448.490',
    percent: 0.387
  },
  {
    rank: 71,
    market: 'Tucson (Sierra Vista)',
    homes: '442.950',
    percent: 0.383
  },
  {
    rank: 72,
    market: 'Des Moines-Ames',
    homes: '434.500',
    percent: 0.375
  },
  {
    rank: 73,
    market: 'Spokane',
    homes: '424.790',
    percent: 0.367
  },
  {
    rank: 74,
    market: 'Omaha',
    homes: '421.960',
    percent: 0.364
  },
  {
    rank: 75,
    market: 'Springfield, MO',
    homes: '419.450',
    percent: 0.362
  },
  {
    rank: 76,
    market: 'Toledo',
    homes: '415.000',
    percent: 0.358
  },
  {
    rank: 77,
    market: 'Columbia, SC',
    homes: '407.140',
    percent: 0.352
  },
  {
    rank: 78,
    market: 'Rochester, NY',
    homes: '402.300',
    percent: 0.347
  },
  {
    rank: 79,
    market: 'Huntsville-Decatur (Flor)',
    homes: '397.030',
    percent: 0.343
  },
  {
    rank: 80,
    market: 'Portland-Auburn',
    homes: '395.010',
    percent: 0.341
  },
  {
    rank: 81,
    market: 'Paducah-Cape Girard-Harsbg',
    homes: '390.490',
    percent: 0.337
  },
  {
    rank: 82,
    market: 'Shreveport',
    homes: '388.400',
    percent: 0.335
  },
  {
    rank: 83,
    market: 'Madison',
    homes: '385.690',
    percent: 0.333
  },
  {
    rank: 84,
    market: 'Champaign & Sprngfld-Decatur',
    homes: '382.050',
    percent: 0.330
  },
  {
    rank: 85,
    market: 'Syracuse',
    homes: '380.320',
    percent: 0.328
  },
  {
    rank: 86,
    market: 'Harlingen-Wslco-Brnsvl-McA',
    homes: '369.240',
    percent: 0.319
  },
  {
    rank: 87,
    market: 'Chattanooga',
    homes: '360.150',
    percent: 0.311
  },
  {
    rank: 88,
    market: 'Waco-Temple-Bryan',
    homes: '359.400',
    percent: 0.310
  },
  {
    rank: 89,
    market: 'Colorado Springs-Pueblo',
    homes: '353.790',
    percent: 0.306
  },
  {
    rank: 90,
    market: 'Cedar Rapids-Wtrlo-IWC&Dub',
    homes: '349.250',
    percent: 0.302
  },
  {
    rank: 91,
    market: 'El Paso (Las Cruces)',
    homes: '344.480',
    percent: 0.297
  },
  {
    rank: 92,
    market: 'Savannah',
    homes: '343.020',
    percent: 0.296
  },
  {
    rank: 93,
    market: 'Baton Rouge',
    homes: '337.550',
    percent: 0.291
  },
  {
    rank: 94,
    market: 'Jackson, MS',
    homes: '335.950',
    percent: 0.290
  },
  {
    rank: 95,
    market: 'Charleston, SC',
    homes: '326.760',
    percent: 0.282
  },
  {
    rank: 96,
    market: 'South Bend-Elkhart',
    homes: '322.750',
    percent: 0.279
  },
  {
    rank: 97,
    market: 'Tri-Cities, TN-VA',
    homes: '321.460',
    percent: 0.278
  },
  {
    rank: 98,
    market: 'Burlington-Plattsburgh',
    homes: '317.960',
    percent: 0.275
  },
  {
    rank: 99,
    market: 'Greenville-N.Bern-Washngtn',
    homes: '312.470',
    percent: 0.270
  },
  {
    rank: 100,
    market: 'Davenport-R.Island-Moline',
    homes: '308.220',
    percent: 0.266
  },
  {
    rank: 101,
    market: 'Ft. Smith-Fay-Sprngdl-Rgrs',
    homes: '302.920',
    percent: 0.262
  },
  {
    rank: 102,
    market: 'Myrtle Beach-Florence',
    homes: '292.080',
    percent: 0.252
  },
  {
    rank: 103,
    market: 'Johnstown-Altoona-St Colge',
    homes: '291.490',
    percent: 0.252
  },
  {
    rank: 104,
    market: 'Evansville',
    homes: '288.250',
    percent: 0.249
  },
  {
    rank: 105,
    market: 'Lincoln & Hastings-Krny',
    homes: '282.510',
    percent: 0.244
  },
  {
    rank: 106,
    market: 'Tallahassee-Thomasville',
    homes: '279.760',
    percent: 0.242
  },
  {
    rank: 107,
    market: 'Reno',
    homes: '273.320',
    percent: 0.236
  },
  {
    rank: 108,
    market: 'Tyler-Longview(Lfkn&Ncgd)',
    homes: '270.750',
    percent: 0.234
  },
  {
    rank: 109,
    market: 'Ft. Wayne',
    homes: '267.680',
    percent: 0.231
  },
  {
    rank: 110,
    market: 'Boise',
    homes: '267.470',
    percent: 0.231
  },
  {
    rank: 111,
    market: 'Sioux Falls(Mitchell)',
    homes: '265.470',
    percent: 0.229
  },
  {
    rank: 112,
    market: 'Augusta-Aiken',
    homes: '264.130',
    percent: 0.228
  },
  {
    rank: 113,
    market: 'Youngstown',
    homes: '261.300',
    percent: 0.226
  },
  {
    rank: 114,
    market: 'Springfield-Holyoke',
    homes: '257.130',
    percent: 0.222
  },
  {
    rank: 115,
    market: 'Lansing',
    homes: '256.340',
    percent: 0.221
  },
  {
    rank: 116,
    market: 'Fargo-Valley City',
    homes: '251.290',
    percent: 0.217
  },
  {
    rank: 117,
    market: 'Peoria-Bloomington',
    homes: '249.220',
    percent: 0.215
  },
  {
    rank: 118,
    market: 'Macon',
    homes: '244.320',
    percent: 0.211
  },
  {
    rank: 119,
    market: 'Traverse City-Cadillac',
    homes: '243.990',
    percent: 0.211
  },
  {
    rank: 120,
    market: 'Montgomery-Selma',
    homes: '241.990',
    percent: 0.209
  },
  {
    rank: 121,
    market: 'Eugene',
    homes: '240.480',
    percent: 0.208
  },
  {
    rank: 122,
    market: 'Lafayette, LA',
    homes: '234.380',
    percent: 0.202
  },
  {
    rank: 123,
    market: 'SantaBarbra-SanMar-SanLuOb',
    homes: '234.310',
    percent: 0.202
  },
  {
    rank: 124,
    market: 'Yakima-Pasco-Rchlnd-Knnwck',
    homes: '233.630',
    percent: 0.202
  },
  {
    rank: 125,
    market: 'Monterey-Salinas',
    homes: '230.880',
    percent: 0.199
  },
  {
    rank: 126,
    market: 'Columbus, GA (Opelika, AL)',
    homes: '226.240',
    percent: 0.195
  },
  {
    rank: 127,
    market: 'Bakersfield',
    homes: '225.730',
    percent: 0.195
  },
  {
    rank: 128,
    market: 'La Crosse-Eau Claire',
    homes: '213.020',
    percent: 0.184
  },
  {
    rank: 129,
    market: 'Corpus Christi',
    homes: '209.830',
    percent: 0.181
  },
  {
    rank: 130,
    market: 'Amarillo',
    homes: '198.540',
    percent: 0.171
  },
  {
    rank: 131,
    market: 'Wilmington',
    homes: '194.070',
    percent: 0.168
  },
  {
    rank: 132,
    market: 'Chico-Redding',
    homes: '193.000',
    percent: 0.167
  },
  {
    rank: 133,
    market: 'Columbus-Tupelo-W Pnt-Hstn',
    homes: '189.750',
    percent: 0.164
  },
  {
    rank: 134,
    market: 'Topeka',
    homes: '181.830',
    percent: 0.157
  },
  {
    rank: 135,
    market: 'Wausau-Rhinelander',
    homes: '180.840',
    percent: 0.156
  },
  {
    rank: 136,
    market: 'Rockford',
    homes: '180.010',
    percent: 0.155
  },
  {
    rank: 137,
    market: 'Monroe-El Dorado',
    homes: '177.550',
    percent: 0.153
  },
  {
    rank: 138,
    market: 'Columbia-Jefferson City',
    homes: '175.450',
    percent: 0.152
  },
  {
    rank: 139,
    market: 'Duluth-Superior',
    homes: '172.410',
    percent: 0.149
  },
  {
    rank: 140,
    market: 'Medford-Klamath Falls',
    homes: '171.500',
    percent: 0.148
  },
  {
    rank: 141,
    market: 'Beaumont-Port Arthur',
    homes: '166.880',
    percent: 0.144
  },
  {
    rank: 142,
    market: 'Salisbury',
    homes: '162.060',
    percent: 0.140
  },
  {
    rank: 143,
    market: 'Lubbock',
    homes: '161.400',
    percent: 0.139
  },
  {
    rank: 144,
    market: 'Wichita Falls & Lawton',
    homes: '159.780',
    percent: 0.138
  },
  {
    rank: 145,
    market: 'Minot-Bsmrck-Dcknsn(Wlstn)',
    homes: '158.730',
    percent: 0.137
  },
  {
    rank: 146,
    market: 'Anchorage',
    homes: '158.120',
    percent: 0.137
  },
  {
    rank: 147,
    market: 'Sioux City',
    homes: '157.910',
    percent: 0.136
  },
  {
    rank: 148,
    market: 'Palm Springs',
    homes: '157.750',
    percent: 0.136
  },
  {
    rank: 149,
    market: 'Erie',
    homes: '157.250',
    percent: 0.136
  },
  {
    rank: 150,
    market: 'Odessa-Midland',
    homes: '155.910',
    percent: 0.135
  },
  {
    rank: 151,
    market: 'Albany, GA',
    homes: '150.680',
    percent: 0.130
  },
  {
    rank: 152,
    market: 'Joplin-Pittsburg',
    homes: '149.870',
    percent: 0.129
  },
  {
    rank: 153,
    market: 'Rochestr-Mason City-Austin',
    homes: '145.690',
    percent: 0.126
  },
  {
    rank: 154,
    market: 'Panama City',
    homes: '141.310',
    percent: 0.122
  },
  {
    rank: 155,
    market: 'Terre Haute',
    homes: '140.170',
    percent: 0.121
  },
  {
    rank: 156,
    market: 'Bangor',
    homes: '139.650',
    percent: 0.121
  },
  {
    rank: 157,
    market: 'Wheeling-Steubenville',
    homes: '135.430',
    percent: 0.117
  },
  {
    rank: 158,
    market: 'Bluefield-Beckley-Oak Hill',
    homes: '135.340',
    percent: 0.117
  },
  {
    rank: 159,
    market: 'Binghamton',
    homes: '135.230',
    percent: 0.117
  },
  {
    rank: 160,
    market: 'Biloxi-Gulfport',
    homes: '131.640',
    percent: 0.114
  },
  {
    rank: 161,
    market: 'Sherman-Ada',
    homes: '128.200',
    percent: 0.111
  },
  {
    rank: 162,
    market: 'Idaho Fals-Pocatllo(Jcksn)',
    homes: '126.150',
    percent: 0.109
  },
  {
    rank: 163,
    market: 'Gainesville',
    homes: '125.160',
    percent: 0.108
  },
  {
    rank: 164,
    market: 'Missoula',
    homes: '115.760',
    percent: 0.100
  },
  {
    rank: 165,
    market: 'Abilene-Sweetwater',
    homes: '114.570',
    percent: 0.099
  },
  {
    rank: 166,
    market: 'Yuma-El Centro',
    homes: '113.240',
    percent: 0.098
  },
  {
    rank: 167,
    market: 'Hattiesburg-Laurel',
    homes: '112.360',
    percent: 0.097
  },
  {
    rank: 168,
    market: 'Billings',
    homes: '111.680',
    percent: 0.096
  },
  {
    rank: 169,
    market: 'Clarksburg-Weston',
    homes: '106.970',
    percent: 0.092
  },
  {
    rank: 170,
    market: 'Quincy-Hannibal-Keokuk',
    homes: '104.700',
    percent: 0.090
  },
  {
    rank: 171,
    market: 'Utica',
    homes: '104.520',
    percent: 0.090
  },
  {
    rank: 172,
    market: 'Dothan',
    homes: '102.440',
    percent: 0.088
  },
  {
    rank: 173,
    market: 'Rapid City',
    homes: '100.510',
    percent: 0.087
  },
  {
    rank: 174,
    market: 'Elmira (Corning)',
    homes: '96.890',
    percent: 0.084
  },
  {
    rank: 175,
    market: 'Lake Charles',
    homes: '96.230',
    percent: 0.083
  },
  {
    rank: 176,
    market: 'Watertown',
    homes: '94.330',
    percent: 0.081
  },
  {
    rank: 177,
    market: 'Jackson, TN',
    homes: '94.110',
    percent: 0.081
  },
  {
    rank: 178,
    market: 'Harrisonburg',
    homes: '92.240',
    percent: 0.080
  },
  {
    rank: 179,
    market: 'Alexandria, LA',
    homes: '91.260',
    percent: 0.079
  },
  {
    rank: 180,
    market: 'Marquette',
    homes: '85.170',
    percent: 0.074
  },
  {
    rank: 181,
    market: 'Jonesboro',
    homes: '81.560',
    percent: 0.070
  },
  {
    rank: 182,
    market: 'Bowling Green',
    homes: '81.030',
    percent: 0.070
  },
  {
    rank: 183,
    market: 'Charlottesville',
    homes: '75.030',
    percent: 0.065
  },
  {
    rank: 184,
    market: 'Laredo',
    homes: '74.260',
    percent: 0.064
  },
  {
    rank: 185,
    market: 'Grand Junction-Montrose',
    homes: '72.040',
    percent: 0.062
  },
  {
    rank: 186,
    market: 'Meridian',
    homes: '69.560',
    percent: 0.060
  },
  {
    rank: 187,
    market: 'Lima',
    homes: '69.170',
    percent: 0.060
  },
  {
    rank: 188,
    market: 'Butte-Bozeman',
    homes: '69.080',
    percent: 0.060
  },
  {
    rank: 189,
    market: 'Lafayette, IN',
    homes: '68.770',
    percent: 0.059
  },
  {
    rank: 190,
    market: 'Greenwood-Greenville',
    homes: '66.870',
    percent: 0.058
  },
  {
    rank: 191,
    market: 'Great Falls',
    homes: '66.150',
    percent: 0.057
  },
  {
    rank: 192,
    market: 'Twin Falls',
    homes: '64.550',
    percent: 0.056
  },
  {
    rank: 193,
    market: 'Bend, OR',
    homes: '64.160',
    percent: 0.055
  },
  {
    rank: 194,
    market: 'Parkersburg',
    homes: '62.830',
    percent: 0.054
  },
  {
    rank: 195,
    market: 'Eureka',
    homes: '60.270',
    percent: 0.052
  },
  {
    rank: 196,
    market: 'Cheyenne-Scottsbluff',
    homes: '57.970',
    percent: 0.050
  },
  {
    rank: 197,
    market: 'Casper-Riverton',
    homes: '57.890',
    percent: 0.050
  },
  {
    rank: 198,
    market: 'San Angelo',
    homes: '56.920',
    percent: 0.049
  },
  {
    rank: 199,
    market: 'Mankato',
    homes: '53.820',
    percent: 0.047
  },
  {
    rank: 200,
    market: 'St. Joseph',
    homes: '47.170',
    percent: 0.041
  },
  {
    rank: 201,
    market: 'Ottumwa-Kirksville',
    homes: '46.760',
    percent: 0.040
  },
  {
    rank: 202,
    market: 'Fairbanks',
    homes: '38.520',
    percent: 0.033
  },
  {
    rank: 203,
    market: 'Victoria',
    homes: '33.200',
    percent: 0.029
  },
  {
    rank: 204,
    market: 'Zanesville',
    homes: '33.150',
    percent: 0.029
  },
  {
    rank: 205,
    market: 'Helena',
    homes: '28.870',
    percent: 0.025
  },
  {
    rank: 206,
    market: 'Presque Isle',
    homes: '28.830',
    percent: 0.025
  },
  {
    rank: 207,
    market: 'Juneau',
    homes: '26.440',
    percent: 0.023
  },
  {
    rank: 208,
    market: 'North Platte',
    homes: '18.430',
    percent: 0.016
  },
  {
    rank: 209,
    market: 'Alpena',
    homes: '16.890',
    percent: 0.015
  },
  {
    rank: 210,
    market: 'Glendive',
    homes: '4.260',
    percent: 0.004
  }
]
