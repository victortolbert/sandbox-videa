const moment = require('moment')

module.exports = [
  {
    id: 65733,
    expanded: false,
    status: 'active',
    availStatus: 'new',
    releasedDate: '05/24/16',
    advertiser: 'Piedmont Healthcare',
    product: 'HEA',
    estimateNumber: 57,
    cpe: 'PIE-HEA-57',
    campaignName: 'WASHI WVVV PHC-HEA-57 Q1 17',
    market: 'Washington',
    station: 'WVVV',
    expirationDate: '06/07/16',
    flightStartDate: '05/15/17',
    flightEndDate: '06/25/17',
    agency: 'Hughes-Martin Agency',
    lastUpdated: '05/24/16 04:50 PM',
    grossMarketBudget: 140000,
    totalGrpGoal: 800,
    primaryDemo: 'A25-54',
    lastUpdatedBy: 'Brian Reed',
    shareGoal: 0.25,
    dueDate: '06/07/16',
    notes: '6a start time / 12a cutoff no animation ',
    daypartGoals: [
      {
        daypart: 'Early Morning',
        cpp: 150,
        grps: 320,
        mix: 0.4
      },
      {
        daypart: 'Early News',
        cpp: 215,
        grps: 320,
        mix: 0.4
      },
      {
        daypart: 'Late Fringe',
        cpp: 125,
        grps: 160,
        mix: 0.2
      }
    ],
    dayparts: [
      {
        id: 1,
        daypart_id: 1,
        name: 'Early Morning',
        startTime: '04:30 AM',
        expanded: false,
        marketCompetitive: {
            low: 185,
            high: 200
        },
        goals: {
            cpp: 150,
            grps: 150,
            mix: 0.4
        },
        programs: [
          {
            id: 1,
            name: 'Network 23 6a News',
            time: 'M-F / 06:00 AM - 07:00 AM',
            flightStartDate: '02/13/17',
            flightEndDate: '03/24/17',
            length: ':30',
            rate: 447,
            rating: 2.1,
            avgCpp: 213,
            expanded: false,
            videa: {
              rate: 325,
              cpp: 191,
              rating: 2.1,
              needGoal: 315,
              needLow: 389,
              needHigh: 420
            },
            buyer: {
              rating: 2.1,
              needGoal: 315,
              needLow: 389,
              needHigh: 420
            },
            months: [
              {
                month: 'February',
                flightStartDate: '02/13/17',
                flightEndDate: '03/24/17',
                length: ':30',
                rate: 475,
                rating: 2.1,
                avgCpp: 226,
                expanded: false,
                station: {
                  rate: 325,
                  rating: 1.7,
                  cpp: 191
                },
                videa: {
                  rate: 325,
                  cpp: 191,
                  rating: 2.1,
                  needGoal: 315,
                  needLow: 389,
                  needHigh: 420
                },
                buyer: {
                  rating: 2.1,
                  needGoal: 315,
                  needLow: 389,
                  needHigh: 420
                },
                onTheBooks: {
                  minRate: 280,
                  maxRate: 435,
                  aur: 358,
                  sellOutPercent: 0.68,
                  lyAur: 350
                },
                otherSources: {
                  shareBuilders: 348,
                  mktCpp: 200
                },
                weeks: [
                  {
                    week: '02/13/17 - 02/17/17',
                    expanded: false,
                    length: ':30',
                    rate: 500,
                    rating: 2.1,
                    avgCpp: 221,
                    station: {
                        rate: 300,
                        rating: 1.7,
                        cpp: 176
                    },
                    videa: {
                        rate: 325,
                        cpp: 191,
                        rating: 2.1,
                        needGoal: 315,
                        needLow: 389,
                        needHigh: 420
                    },
                    buyer: {
                        rating: 2.1,
                        needGoal: 315,
                        needLow: 389,
                        needHigh: 420
                    },
                    onTheBooks: {
                        minRate: 280,
                        maxRate: 435,
                        aur: 358,
                        sellOutPercent: 0.68,
                        lyAur: 350
                    },
                    otherSources: {
                        shareBuilders: 317,
                        mktCpp: 200
                    }
                  },
                  {
                    week: '02/20/17 - 02/24/17',
                    expanded: false,
                    length: ':30',
                    rate: 500,
                    rating: 2.1,
                    avgCpp: 190,
                    station: {
                        rate: 300,
                        rating: 1.7,
                        cpp: 176
                    },
                    videa: {
                        rate: 325,
                        cpp: 191,
                        rating: 2.1,
                        needGoal: 315,
                        needLow: 389,
                        needHigh: 420
                    },
                    buyer: {
                        rating: 2.1,
                        needGoal: 315,
                        needLow: 389,
                        needHigh: 420
                    },
                    onTheBooks: {
                        minRate: 280,
                        maxRate: 435,
                        aur: 358,
                        sellOutPercent: 0.68,
                        lyAur: 350
                    },
                    otherSources: {
                        shareBuilders: 317,
                        mktCpp: 200
                    }
                  }
                ]
              },
              {
                month: 'March',
                flightStartDate: '02/27/17',
                flightEndDate: '03/24/17',
                length: ':30',
                rate: 433,
                rating: 2.1,
                avgCpp: 206,
                expanded: false,
                station: {
                    rate: 325,
                    rating: 1.7,
                    cpp: 191
                },
                videa: {
                    rate: 325,
                    cpp: 191,
                    rating: 2.1,
                    needGoal: 315,
                    needLow: 389,
                    needHigh: 420
                },
                buyer: {
                    rating: 2.1,
                    needGoal: 315,
                    needLow: 389,
                    needHigh: 420
                },
                onTheBooks: {
                    minRate: 280,
                    maxRate: 435,
                    aur: 358,
                    sellOutPercent: 0.68,
                    lyAur: 350
                },
                otherSources: {
                    shareBuilders: 348,
                    mktCpp: 200
                },
                weeks: [
                  {
                    week: '02/27/17 - 03/03/17',
                    expanded: false,
                    length: ':30',
                    rate: 465,
                    rating: 2.1,
                    avgCpp: 190,
                    station: {
                        rate: 300,
                        rating: 1.7,
                        cpp: 176
                    },
                    videa: {
                        rate: 325,
                        cpp: 191,
                        rating: 2.1,
                        needGoal: 315,
                        needLow: 389,
                        needHigh: 420
                    },
                    buyer: {
                        rating: 2.1,
                        needGoal: 315,
                        needLow: 389,
                        needHigh: 420
                    },
                    onTheBooks: {
                        minRate: 280,
                        maxRate: 435,
                        aur: 358,
                        sellOutPercent: 0.68,
                        lyAur: 350
                    },
                    otherSources: {
                        shareBuilders: 317,
                        mktCpp: 200
                    }
                  },
                  {
                    week: '03/06/16 - 03/10/16',
                    expanded: false,
                    length: ':30',
                    rate: 465,
                    rating: 2.1,
                    avgCpp: 190,
                    station: {
                        rate: 300,
                        rating: 1.7,
                        cpp: 176
                    },
                    videa: {
                        rate: 325,
                        cpp: 191,
                        rating: 2.1,
                        needGoal: 315,
                        needLow: 389,
                        needHigh: 420
                    },
                    buyer: {
                        rating: 2.1,
                        needGoal: 315,
                        needLow: 389,
                        needHigh: 420
                    },
                    onTheBooks: {
                        minRate: 280,
                        maxRate: 435,
                        aur: 358,
                        sellOutPercent: 0.68,
                        lyAur: 350
                    },
                    otherSources: {
                        shareBuilders: 317,
                        mktCpp: 200
                    }
                  },
                  {
                    week: '03/13/17 - 03/17/17',
                    expanded: false,
                    length: ':30',
                    rate: 465,
                    rating: 2.1,
                    avgCpp: 190,
                    station: {
                        rate: 300,
                        rating: 1.7,
                        cpp: 176
                    },
                    videa: {
                        rate: 325,
                        cpp: 191,
                        rating: 2.1,
                        needGoal: 315,
                        needLow: 389,
                        needHigh: 420
                    },
                    buyer: {
                        rating: 2.1,
                        needGoal: 315,
                        needLow: 389,
                        needHigh: 420
                    },
                    onTheBooks: {
                        minRate: 280,
                        maxRate: 435,
                        aur: 358,
                        sellOutPercent: 0.68,
                        lyAur: 350
                    },
                    otherSources: {
                        shareBuilders: 317,
                        mktCpp: 200
                    }
                }, {
                    week: '03/20/17 - 03/24/17',
                    expanded: false,
                    length: ':30',
                    rate: 465,
                    rating: 2.1,
                    avgCpp: 190,
                    station: {
                        rate: 300,
                        rating: 1.7,
                        cpp: 176
                    },
                    videa: {
                        rate: 325,
                        cpp: 191,
                        rating: 2.1,
                        needGoal: 315,
                        needLow: 389,
                        needHigh: 420
                    },
                    buyer: {
                        rating: 2.1,
                        needGoal: 315,
                        needLow: 389,
                        needHigh: 420
                    },
                    onTheBooks: {
                        minRate: 280,
                        maxRate: 435,
                        aur: 358,
                        sellOutPercent: 0.68,
                        lyAur: 350
                    },
                    otherSources: {
                        shareBuilders: 317,
                        mktCpp: 200
                    }
                }]
            }]
        }, {
            id: 2,
            name: 'Network 23 News This Morning',
            time: 'M-F / 07:00 AM - 08:00 AM',
            flightStartDate: '02/13/17',
            flightEndDate: '03/24/17',
            length: ':30',
            rate: 380,
            rating: 1.8,
            avgCpp: 211,
            expanded: false,
            videa: {
                rate: 325,
                cpp: 191,
                rating: 1.8,
                needGoal: 270,
                needLow: 333,
                needHigh: 360
            },
            buyer: {
                rating: 1.8,
                needGoal: 270,
                needLow: 333,
                needHigh: 360
            },
            months: [{
                month: 'February',
                flightStartDate: '02/13/17',
                flightEndDate: '02/24/17',
                length: ':30',
                rate: 390,
                rating: 1.8,
                avgCpp: 213,
                expanded: false,
                station: {
                    rate: 325,
                    rating: 1.7,
                    cpp: 191
                },
                videa: {
                    rate: 325,
                    cpp: 191,
                    rating: 1.8,
                    needGoal: 270,
                    needLow: 333,
                    needHigh: 360
                },
                buyer: {
                    rating: 1.8,
                    needGoal: 270,
                    needLow: 333,
                    needHigh: 360
                },
                onTheBooks: {
                    minRate: 280,
                    maxRate: 435,
                    aur: 358,
                    sellOutPercent: 0.68,
                    lyAur: 350
                },
                otherSources: {
                    shareBuilders: 348,
                    mktCpp: 200
                },
                weeks: [{
                    week: '05/09/16 - 05/13/16',
                    expanded: false,
                    length: ':30',
                    rate: 390,
                    rating: 1.8,
                    avgCpp: 217,
                    station: {
                        rate: 300,
                        rating: 1.7,
                        cpp: 176
                    },
                    videa: {
                        rate: 325,
                        cpp: 191,
                        rating: 2.5,
                        needGoal: 270,
                        needLow: 333,
                        needHigh: 360
                    },
                    buyer: {
                        rating: 1.8,
                        needGoal: 270,
                        needLow: 333,
                        needHigh: 360
                    },
                    onTheBooks: {
                        minRate: 280,
                        maxRate: 435,
                        aur: 358,
                        sellOutPercent: 0.68,
                        lyAur: 350
                    },
                    otherSources: {
                        shareBuilders: 317,
                        mktCpp: 200
                    }
                }, {
                    week: '05/16/16 - 05/20/16',
                    expanded: false,
                    length: ':30',
                    rate: 390,
                    rating: 1.8,
                    avgCpp: 217,
                    station: {
                        rate: 300,
                        rating: 1.7,
                        cpp: 176
                    },
                    videa: {
                        rate: 325,
                        cpp: 191,
                        rating: 2.5,
                        needGoal: 270,
                        needLow: 333,
                        needHigh: 360
                    },
                    buyer: {
                        rating: 1.8,
                        needGoal: 270,
                        needLow: 333,
                        needHigh: 360
                    },
                    onTheBooks: {
                        minRate: 280,
                        maxRate: 435,
                        aur: 358,
                        sellOutPercent: 0.68,
                        lyAur: 350
                    },
                    otherSources: {
                        shareBuilders: 317,
                        mktCpp: 200
                    }
                }, {
                    week: '05/23/16 - 05/27/16',
                    expanded: false,
                    length: ':30',
                    rate: 360,
                    rating: 1.8,
                    avgCpp: 200,
                    station: {
                        rate: 300,
                        rating: 1.7,
                        cpp: 176
                    },
                    videa: {
                        rate: 325,
                        cpp: 191,
                        rating: 2.5,
                        needGoal: 270,
                        needLow: 333,
                        needHigh: 360
                    },
                    buyer: {
                        rating: 1.8,
                        needGoal: 270,
                        needLow: 333,
                        needHigh: 360
                    },
                    onTheBooks: {
                        minRate: 280,
                        maxRate: 435,
                        aur: 358,
                        sellOutPercent: 0.68,
                        lyAur: 350
                    },
                    otherSources: {
                        shareBuilders: 317,
                        mktCpp: 200
                    }
                }]
            }, {
                month: 'March',
                flightStartDate: '02/27/17',
                flightEndDate: '03/24/17',
                length: ':30',
                rate: 360,
                rating: 1.8,
                avgCpp: 200,
                expanded: false,
                station: {
                    rate: 325,
                    rating: 1.7,
                    cpp: 191
                },
                videa: {
                    rate: 325,
                    cpp: 191,
                    rating: 1.8,
                    needGoal: 270,
                    needLow: 333,
                    needHigh: 360
                },
                buyer: {
                    rating: 1.8,
                    needGoal: 270,
                    needLow: 333,
                    needHigh: 360
                },
                onTheBooks: {
                    minRate: 280,
                    maxRate: 435,
                    aur: 358,
                    sellOutPercent: 0.68,
                    lyAur: 350
                },
                otherSources: {
                    shareBuilders: 348,
                    mktCpp: 200
                }
            }]
        }, {
            id: 3,
            name: 'Network 23 News This Morning',
            time: 'M-F / 08:00 AM - 09:00 AM',
            flightStartDate: '02/13/17',
            flightEndDate: '03/24/17',
            length: ':30',
            rate: 450,
            rating: 2.2,
            avgCpp: 205,
            expanded: false,
            videa: {
                rate: 325,
                cpp: 191,
                rating: 2.2,
                needGoal: 330,
                needLow: 407,
                needHigh: 440
            },
            buyer: {
                rating: 2,
                needGoal: 300,
                needLow: 370,
                needHigh: 400
            }
        }, {
            id: 4,
            name: 'Network 23 Weekend News-Sat',
            time: 'Sat / 09:00 AM - 10:00 AM',
            flightStartDate: '02/18/17',
            flightEndDate: '03/25/17',
            length: ':30',
            rate: 200,
            rating: 0.9,
            avgCpp: 222,
            expanded: false,
            videa: {
                rate: 325,
                cpp: 191,
                rating: 0.9,
                needGoal: 135,
                needLow: 167,
                needHigh: 180
            },
            buyer: {
                rating: 0.9,
                needGoal: 135,
                needLow: 167,
                needHigh: 180
            }
        }, {
            id: 5,
            name: 'Network 23 Weekend News-Sun',
            time: 'Sun / 09:00 AM - 10:00 AM',
            flightStartDate: '02/19/17',
            flightEndDate: '03/26/17',
            length: ':30',
            rate: 228,
            rating: 1.1,
            avgCpp: 207,
            expanded: false,
            videa: {
                rate: 325,
                cpp: 191,
                rating: 1.1,
                needGoal: 165,
                needLow: 204,
                needHigh: 220
            },
            buyer: {
                rating: 1.1,
                needGoal: 165,
                needLow: 204,
                needHigh: 220
            }
        }]
    }, {
        id: 4,
        daypart_id: 4,
        name: 'Early News',
        startTime: '04:30 AM',
        expanded: false,
        marketCompetitive: {
            low: 215,
            high: 240
        },
        goals: {
            cpp: 210,
            grps: 210,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'Network 23 News @ 5',
            time: 'M-F / 05:00 PM - 06:00 PM',
            flightStartDate: '04/25/16',
            flightEndDate: '05/27/16',
            length: ':30',
            rate: 624,
            rating: 2.6,
            avgCpp: 240,
            expanded: false,
            videa: {
                rate: 325,
                cpp: 191,
                rating: 2.5,
                needGoal: 270,
                needLow: 125,
                needHigh: 240
            },
            buyer: {
                rating: 2.4,
                needGoal: 270,
                needLow: 185,
                needHigh: 240
            }
        }, {
            id: 2,
            name: 'Network 23 News @ 5',
            time: 'M-F / 06:00 PM - 07:00 PM',
            flightStartDate: '04/25/16',
            flightEndDate: '05/27/16',
            length: ':30',
            rate: 652,
            rating: 2.2,
            avgCpp: 237,
            expanded: false,
            videa: {
                rate: 325,
                cpp: 191,
                rating: 2.2,
                needGoal: 528,
                needLow: 550,
                needHigh: 583
            },
            buyer: {
                rating: 2.1,
                needGoal: 504,
                needLow: 525,
                needHigh: 557
            },
            months: [{
                month: 'May',
                flightStartDate: '04/25/16',
                flightEndDate: '05/27/16',
                length: ':30',
                rate: 667,
                rating: 2.8,
                avgCpp: 238,
                expanded: false,
                station: {
                    rate: 325,
                    rating: 1.7,
                    cpp: 191
                },
                videa: {
                    rate: 325,
                    cpp: 191,
                    rating: 2.2,
                    needGoal: 528,
                    needLow: 550,
                    needHigh: 583
                },
                buyer: {
                    rating: 2.1,
                    needGoal: 504,
                    needLow: 525,
                    needHigh: 557
                },
                onTheBooks: {
                    minRate: 280,
                    maxRate: 435,
                    aur: 358,
                    sellOutPercent: 0.68,
                    lyAur: 350
                },
                otherSources: {
                    shareBuilders: 348,
                    mktCpp: 200
                },
                weeks: [{
                    week: '04/25/16 - 04/29/16',
                    expanded: false,
                    length: ':30',
                    rate: 675,
                    rating: 2.8,
                    avgCpp: 241,
                    station: {
                        rate: 300,
                        rating: 1.7,
                        cpp: 176
                    },
                    videa: {
                        rate: 325,
                        cpp: 191,
                        rating: 2.2,
                        needGoal: 528,
                        needLow: 550,
                        needHigh: 583
                    },
                    buyer: {
                        rating: 2.1,
                        needGoal: 504,
                        needLow: 525,
                        needHigh: 557
                    },
                    onTheBooks: {
                        minRate: 280,
                        maxRate: 435,
                        aur: 358,
                        sellOutPercent: 0.68,
                        lyAur: 350
                    },
                    otherSources: {
                        shareBuilders: 317,
                        mktCpp: 200
                    }
                }, {
                    week: '05/02/16 - 05/06/16',
                    expanded: false,
                    length: ':30',
                    rate: 675,
                    rating: 2.8,
                    avgCpp: 241,
                    station: {
                        rate: 300,
                        rating: 1.7,
                        cpp: 176
                    },
                    videa: {
                        rate: 325,
                        cpp: 191,
                        rating: 2.2,
                        needGoal: 528,
                        needLow: 550,
                        needHigh: 583
                    },
                    buyer: {
                        rating: 2.1,
                        needGoal: 504,
                        needLow: 525,
                        needHigh: 557
                    },
                    onTheBooks: {
                        minRate: 280,
                        maxRate: 435,
                        aur: 358,
                        sellOutPercent: 0.68,
                        lyAur: 350
                    },
                    otherSources: {
                        shareBuilders: 317,
                        mktCpp: 200
                    }
                }, {
                    week: '05/09/16 - 05/13/16',
                    expanded: false,
                    length: ':30',
                    rate: 675,
                    rating: 2.8,
                    avgCpp: 241,
                    station: {
                        rate: 300,
                        rating: 1.7,
                        cpp: 176
                    },
                    videa: {
                        rate: 325,
                        cpp: 191,
                        rating: 2.2,
                        needGoal: 528,
                        needLow: 550,
                        needHigh: 583
                    },
                    buyer: {
                        rating: 2.1,
                        needGoal: 504,
                        needLow: 525,
                        needHigh: 557
                    },
                    onTheBooks: {
                        minRate: 280,
                        maxRate: 435,
                        aur: 358,
                        sellOutPercent: 0.68,
                        lyAur: 350
                    },
                    otherSources: {
                        shareBuilders: 317,
                        mktCpp: 200
                    }
                }, {
                    week: '05/16/16 - 05/20/16',
                    expanded: false,
                    length: ':30',
                    rate: 652,
                    rating: 2.8,
                    avgCpp: 233,
                    station: {
                        rate: 300,
                        rating: 1.7,
                        cpp: 176
                    },
                    videa: {
                        rate: 325,
                        cpp: 191,
                        rating: 2.2,
                        needGoal: 528,
                        needLow: 550,
                        needHigh: 583
                    },
                    buyer: {
                        rating: 2.1,
                        needGoal: 504,
                        needLow: 525,
                        needHigh: 557
                    },
                    onTheBooks: {
                        minRate: 280,
                        maxRate: 435,
                        aur: 358,
                        sellOutPercent: 0.68,
                        lyAur: 350
                    },
                    otherSources: {
                        shareBuilders: 317,
                        mktCpp: 200
                    }
                }, {
                    week: '05/23/16 - 05/27/16',
                    expanded: false,
                    length: ':30',
                    rate: 652,
                    rating: 2.8,
                    avgCpp: 233,
                    station: {
                        rate: 300,
                        rating: 1.7,
                        cpp: 176
                    },
                    videa: {
                        rate: 325,
                        cpp: 191,
                        rating: 2.2,
                        needGoal: 528,
                        needLow: 550,
                        needHigh: 583
                    },
                    buyer: {
                        rating: 2.1,
                        needGoal: 504,
                        needLow: 525,
                        needHigh: 557
                    },
                    onTheBooks: {
                        minRate: 280,
                        maxRate: 435,
                        aur: 358,
                        sellOutPercent: 0.68,
                        lyAur: 350
                    },
                    otherSources: {
                        shareBuilders: 317,
                        mktCpp: 200
                    }
                }]
            }, {
                month: 'June',
                flightStartDate: '05/30/16',
                flightEndDate: '06/03/16',
                length: ':30',
                rate: 652,
                rating: 2.8,
                avgCpp: 233,
                expanded: false,
                station: {
                    rate: 325,
                    rating: 1.7,
                    cpp: 191
                },
                videa: {
                    rate: 325,
                    cpp: 191,
                    rating: 2.2,
                    needGoal: 528,
                    needLow: 550,
                    needHigh: 583
                },
                buyer: {
                    rating: 2.1,
                    needGoal: 504,
                    needLow: 525,
                    needHigh: 557
                },
                onTheBooks: {
                    minRate: 280,
                    maxRate: 435,
                    aur: 358,
                    sellOutPercent: 0.68,
                    lyAur: 350
                },
                otherSources: {
                    shareBuilders: 348,
                    mktCpp: 200
                },
                weeks: [{
                    week: '05/30/16 - 06/03/16',
                    expanded: false,
                    length: ':30',
                    rate: 652,
                    rating: 2.8,
                    avgCpp: 233,
                    station: {
                        rate: 300,
                        rating: 1.7,
                        cpp: 176
                    },
                    videa: {
                        rate: 325,
                        cpp: 191,
                        rating: 2.2,
                        needGoal: 528,
                        needLow: 550,
                        needHigh: 583
                    },
                    buyer: {
                        rating: 2.1,
                        needGoal: 504,
                        needLow: 525,
                        needHigh: 557
                    },
                    onTheBooks: {
                        minRate: 280,
                        maxRate: 435,
                        aur: 358,
                        sellOutPercent: 0.68,
                        lyAur: 350
                    },
                    otherSources: {
                        shareBuilders: 317,
                        mktCpp: 200
                    }
                }]
            }]
        }, {
            id: 3,
            name: 'Network 23 News Sat @ 5',
            time: 'Sat / 05:00 PM - 06:00 PM',
            flightStartDate: '04/25/16',
            flightEndDate: '05/27/16',
            length: ':30',
            rate: 220,
            rating: 1,
            avgCpp: 216,
            expanded: false,
            videa: {
                rate: 325,
                cpp: 191,
                rating: 1,
                needGoal: 244,
                needLow: 255,
                needHigh: 270
            },
            buyer: {
                rating: 0.9,
                needGoal: 220,
                needLow: 230,
                needHigh: 243
            }
        }, {
            id: 4,
            name: 'Network 23 News Sun @ 6',
            time: 'Sun / 06:00 PM - 07:00 PM',
            flightStartDate: '04/25/16',
            flightEndDate: '05/27/16',
            length: ':30',
            rate: 300,
            rating: 1.4,
            avgCpp: 209,
            expanded: false,
            videa: {
                rate: 325,
                cpp: 191,
                rating: 1.4,
                needGoal: 344,
                needLow: 359,
                needHigh: 380
            },
            buyer: {
                rating: 1.3,
                needGoal: 320,
                needLow: 334,
                needHigh: 354
            }
        }]
    }, {
        id: 9,
        daypart_id: 9,
        name: 'Late Fringe',
        startTime: '04:30 AM',
        expanded: false,
        marketCompetitive: {
            low: 100,
            high: 136
        },
        goals: {
            cpp: 125,
            grps: 20,
            mix: 0.2
        },
        programs: [{
            id: 1,
            name: 'Seinfeld',
            time: 'M-F / 11:00 PM - 11:30 PM',
            flightStartDate: '02/29/16',
            flightEndDate: '03/27/16',
            length: ':30',
            rate: 125,
            rating: 1,
            avgCpp: 125,
            expanded: false,
            videa: {
                rate: 325,
                cpp: 191,
                rating: 0.8,
                needGoal: 80,
                needLow: 80,
                needHigh: 88
            },
            buyer: {
                rating: 0.7,
                needGoal: 70,
                needLow: 70,
                needHigh: 77
            }
        }, {
            id: 2,
            name: 'Seinfeld',
            time: 'M-F / 11:30 PM - 12:00 AM',
            flightStartDate: '02/29/16',
            flightEndDate: '03/27/16',
            length: ':30',
            rate: 100,
            rating: 0.8,
            avgCpp: 125,
            expanded: false,
            videa: {
                rate: 325,
                cpp: 191,
                rating: 0.5,
                needGoal: 50,
                needLow: 50,
                needHigh: 55
            },
            buyer: {
                rating: 0.4,
                needGoal: 40,
                needLow: 40,
                needHigh: 44
            }
        }, {
            id: 3,
            name: 'Anger Management',
            time: 'Sat / 11:00 PM - 11:30 PM',
            flightStartDate: '02/29/16',
            flightEndDate: '03/27/16',
            length: ':30',
            rate: 50,
            rating: 0.5,
            avgCpp: 100,
            expanded: false,
            videa: {
                rate: 325,
                cpp: 191,
                rating: 0.5,
                needGoal: 50,
                needLow: 50,
                needHigh: 55
            },
            buyer: {
                rating: 0.4,
                needGoal: 40,
                needLow: 40,
                needHigh: 44
            }
        }, {
            id: 4,
            name: 'Anger Management',
            time: 'Sat / 11:30 PM - 12:30 AM',
            flightStartDate: '02/29/16',
            flightEndDate: '03/27/16',
            length: ':30',
            rate: 50,
            rating: 0.5,
            avgCpp: 100,
            expanded: false,
            videa: {
                rate: 325,
                cpp: 191,
                rating: 0.5,
                needGoal: 50,
                needLow: 50,
                needHigh: 55
            },
            buyer: {
                rating: 0.4,
                needGoal: 40,
                needLow: 40,
                needHigh: 44
            }
        }]
    }],
    versions: [{
        id: 1,
        dateSubmitted: '05/17/16',
        timeSubmitted: '09:34 AM',
        submittedBy: 'Brian Reed',
        dayparts: [{
            id: 1,
            name: 'Early Morning',
            startTime: '04:30 AM',
            programs: [{
                id: 1,
                name: 'News 12 First @ 5',
                time: 'M-F / 05:00 PM - 05:30 PM',
                flightStartDate: '03/30/15',
                flightEndDate: '06/21/15',
                rate: 185,
                rating: 1.7,
                avgCpp: 109,
                length: ':30'
            }]
        }, {
            id: 2,
            name: 'Daytime',
            startTime: '09:00 AM',
            programs: [{
                id: 1,
                name: 'News 12 First @ 5',
                time: 'M-F / 05:00 PM - 05:30 PM',
                flightStartDate: '03/30/15',
                flightEndDate: '06/21/15',
                rate: 285,
                rating: 1.7,
                avgCpp: 109,
                length: ':30'
            }, {
                id: 2,
                name: 'News 12 First @ 5',
                time: 'M-F / 05:00 PM - 05:30 PM',
                flightStartDate: '03/30/15',
                flightEndDate: '06/21/15',
                rate: 285,
                rating: 1.7,
                avgCpp: 109,
                length: ':30'
            }]
        }, {
            id: 3,
            name: 'Early Fringe',
            startTime: '03:00 PM',
            programs: [{
                id: 1,
                name: 'News 12 First @ 5',
                time: 'M-F / 05:00 PM - 05:30 PM',
                flightStartDate: '03/30/15',
                flightEndDate: '06/21/15',
                rate: 185,
                rating: 1.7,
                avgCpp: 109,
                length: ':30'
            }]
        }, {
            id: 4,
            name: 'Early News',
            startTime: '5:00 PM',
            programs: [{
                id: 1,
                name: 'News 12 First @ 5',
                time: 'M-F / 05:00 PM - 05:30 PM',
                flightStartDate: '03/30/15',
                flightEndDate: '06/21/15',
                rate: 185,
                rating: 1.7,
                avgCpp: 109,
                length: ':30'
            }]
        }, {
            id: 5,
            name: 'Prime Access',
            startTime: '07:00 PM',
            programs: [{
                id: 1,
                name: 'Wheel of Fortune',
                time: 'M-F / 07:00 PM - 07:30 PM',
                flightStartDate: '03/30/15',
                flightEndDate: '06/21/15',
                rate: 185,
                rating: 1.7,
                avgCpp: 109,
                length: ':30'
            }]
        }, {
            id: 6,
            name: 'Prime',
            startTime: '08:00 PM',
            programs: [{
                id: 1,
                name: '2 Broke Girls/Mike',
                time: 'Mon / 08:00 PM - 09:00 PM',
                flightStartDate: '03/30/15',
                flightEndDate: '06/21/15',
                rate: 185,
                rating: 1.7,
                avgCpp: 109,
                length: ':30'
            }]
        }, {
            id: 7,
            name: 'Late News',
            startTime: '10:00 PM',
            programs: [{
                id: 1,
                name: 'News 12 - 11PM',
                time: 'M-F / 11:00 PM - 11:35pm',
                flightStartDate: '03/30/15',
                flightEndDate: '06/21/15',
                rate: 185,
                rating: 1.7,
                avgCpp: 109,
                length: ':30'
            }]
        }, {
            id: 8,
            name: 'Late Fringe',
            startTime: '11:00 PM',
            programs: [{
                id: 1,
                name: 'News 12 First @ 5',
                time: 'M-F / 05:00 PM - 05:30 PM',
                flightStartDate: '03/30/15',
                flightEndDate: '06/21/15',
                rate: 185,
                rating: 1.7,
                avgCpp: 109,
                length: ':30'
            }]
        }, {
            id: 9,
            name: 'Overnight',
            startTime: '01:00 AM',
            programs: [{
                id: 1,
                name: 'News 12 First @ 5',
                time: 'M-F / 05:00 PM - 05:30 PM',
                flightStartDate: '03/30/15',
                flightEndDate: '06/21/15',
                rate: 185,
                rating: 1.7,
                avgCpp: 109,
                length: ':30'
            }]
        }, {
            id: 10,
            name: 'Sports and Specials',
            startTime: '',
            programs: [{
                id: 1,
                name: 'News 12 First @ 5',
                time: 'M-F /  05:00 PM - 05:30 PM',
                flightStartDate: '03/30/15',
                flightEndDate: '06/21/15',
                rate: 185,
                rating: 1.7,
                avgCpp: 109,
                length: ':30'
            }]
        }]
    }, {
        id: 2,
        dateSubmitted: '05/20/16',
        timeSubmitted: '03:14 PM',
        submittedBy: 'Brian Reed',
        dayparts: [{
            id: 1,
            name: 'Early Morning',
            startTime: '04:30 AM',
            programs: [{
                id: 1,
                name: 'News 12 First @ 5',
                time: 'M-F / 05:00 PM - 05:30 PM',
                flightStartDate: '03/30/15',
                flightEndDate: '06/21/15',
                rate: 185,
                rating: 1.7,
                avgCpp: 109,
                length: ':30'
            }]
        }, {
            id: 2,
            name: 'Daytime',
            startTime: '09:00 AM',
            programs: [{
                id: 1,
                name: 'News 12 First @ 5',
                time: 'M-F / 05:00 PM - 05:30 PM',
                flightStartDate: '03/30/15',
                flightEndDate: '06/21/15',
                rate: 285,
                rating: 1.7,
                avgCpp: 109,
                length: ':30'
            }, {
                id: 2,
                name: 'News 12 First @ 5',
                time: 'M-F / 05:00 PM - 05:30 PM',
                flightStartDate: '03/30/15',
                flightEndDate: '06/21/15',
                rate: 285,
                rating: 1.7,
                avgCpp: 109,
                length: ':30'
            }]
        }, {
            id: 3,
            name: 'Early Fringe',
            startTime: '03:00 PM',
            programs: [{
                id: 1,
                name: 'News 12 First @ 5',
                time: 'M-F / 05:00 PM - 05:30 PM',
                flightStartDate: '03/30/15',
                flightEndDate: '06/21/15',
                rate: 185,
                rating: 1.7,
                avgCpp: 109,
                length: ':30'
            }]
        }, {
            id: 4,
            name: 'Early News',
            startTime: '5:00 PM',
            programs: [{
                id: 1,
                name: 'News 12 First @ 5',
                time: 'M-F / 05:00 PM - 05:30 PM',
                flightStartDate: '03/30/15',
                flightEndDate: '06/21/15',
                rate: 185,
                rating: 1.7,
                avgCpp: 109,
                length: ':30'
            }]
        }, {
            id: 5,
            name: 'Prime Access',
            startTime: '07:00 PM',
            programs: [{
                id: 1,
                name: 'Wheel of Fortune',
                time: 'M-F / 07:00 PM - 07:30 PM',
                flightStartDate: '03/30/15',
                flightEndDate: '06/21/15',
                rate: 185,
                rating: 1.7,
                avgCpp: 109,
                length: ':30'
            }]
        }, {
            id: 6,
            name: 'Prime',
            startTime: '08:00 PM',
            programs: [{
                id: 1,
                name: '2 Broke Girls/Mike',
                time: 'Mon / 08:00 PM - 09:00 PM',
                flightStartDate: '03/30/15',
                flightEndDate: '06/21/15',
                rate: 185,
                rating: 1.7,
                avgCpp: 109,
                length: ':30'
            }]
        }, {
            id: 7,
            name: 'Late News',
            startTime: '10:00 PM',
            programs: [{
                id: 1,
                name: 'News 12 - 11PM',
                time: 'M-F / 11:00 PM - 11:35pm',
                flightStartDate: '03/30/15',
                flightEndDate: '06/21/15',
                rate: 185,
                rating: 1.7,
                avgCpp: 109,
                length: ':30'
            }]
        }, {
            id: 8,
            name: 'Late Fringe',
            startTime: '11:00 PM',
            programs: [{
                id: 1,
                name: 'News 12 First @ 5',
                time: 'M-F / 05:00 PM - 05:30 PM',
                flightStartDate: '03/30/15',
                flightEndDate: '06/21/15',
                rate: 185,
                rating: 1.7,
                avgCpp: 109,
                length: ':30'
            }]
        }, {
            id: 9,
            name: 'Overnight',
            startTime: '01:00 AM',
            programs: [{
                id: 1,
                name: 'News 12 First @ 5',
                time: 'M-F / 05:00 PM - 05:30 PM',
                flightStartDate: '03/30/15',
                flightEndDate: '06/21/15',
                rate: 185,
                rating: 1.7,
                avgCpp: 109,
                length: ':30'
            }]
        }, {
            id: 10,
            name: 'Sports and Specials',
            startTime: '',
            programs: [{
                id: 1,
                name: 'News 12 First @ 5',
                time: 'M-F / 05:00 PM - 05:30 PM',
                flightStartDate: '03/30/15',
                flightEndDate: '06/21/15',
                rate: 185,
                rating: 1.7,
                avgCpp: 109,
                length: ':30'
            }]
        }]
    }]
}, {
    id: 65734,
    expanded: false,
    status: 'expired',
    availStatus: 'released',
    releasedDate: '11/17/16',
    advertiser: 'Metro Wireless',
    product: 'GEN',
    estimateNumber: 23,
    cpe: 'SAM GAL 23233',
    campaignName: 'WASHI WVVV MEW-GEN-23 Q1 17',
    market: 'Washington',
    station: 'WVVV',
    expirationDate: '11/17/16',
    flightStartDate: '01/09/17',
    flightEndDate: '02/19/17',
    agency: 'The Media Masters Group',
    lastUpdated: '11/17/16 08:47 AM',
    grossMarketBudget: 53190,
    totalGrpGoal: 94,
    primaryDemo: 'M 18-49',
    lastUpdatedBy: 'John Doe',
    shareGoal: '',
    dueDate: '04/22/16',
    notes: 'Notes...',
    daypartGoals: [{
        daypart: 'Early News',
        cpp: 40,
        grps: 120,
        mix: 0.15
    }, {
        daypart: 'Prime Access',
        cpp: 41,
        grps: 90,
        mix: 0.2
    }, {
        daypart: 'Prime',
        cpp: 75,
        grps: 200,
        mix: 0.4
    }, {
        daypart: 'Late News',
        cpp: 49,
        grps: 220,
        mix: 0.1
    }, {
        daypart: 'Sports & Specials',
        cpp: 64,
        grps: 140,
        mix: 0.15
    }],
    dayparts: [{
        id: 1,
        daypart_id: 1,
        name: 'Early Morning',
        startTime: '04:30 AM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 2,
        daypart_id: 2,
        name: 'Daytime',
        startTime: '09:00 AM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 3,
        daypart_id: 3,
        name: 'Early Fringe',
        startTime: '03:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 4,
        daypart_id: 4,
        name: 'Early News',
        startTime: '5:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 5,
        daypart_id: 5,
        name: 'Prime Access',
        startTime: '07:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 6,
        daypart_id: 6,
        name: 'Prime/Specials',
        startTime: '08:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 7,
        daypart_id: 8,
        name: 'Late News',
        startTime: '10:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 8,
        daypart_id: 9,
        name: 'Late Fringe',
        startTime: '11:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 9,
        daypart_id: 11,
        name: 'Overnight',
        startTime: '01:00 AM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }]
}, {
    id: 61984,
    expanded: false,
    status: 'expired',
    availStatus: 'released',
    releasedDate: '10/15/16',
    advertiser: 'Sun Valley Bank',
    product: 'GEN',
    estimateNumber: 459,
    cpe: 'SAM GAL 23233',
    campaignName: 'WASHI WVVV SUN-GEN-459 Q1 17',
    market: 'Washington',
    station: 'WVVV',
    expirationDate: '10/15/16',
    flightStartDate: '01/30/16',
    flightEndDate: '03/26/16',
    agency: 'Mullberry Way Group',
    lastUpdated: '10/15/16 12:12 PM',
    grossMarketBudget: 53190,
    totalGrpGoal: 940,
    primaryDemo: 'M 18-49',
    lastUpdatedBy: 'John Doe',
    shareGoal: '',
    dueDate: '06/09/15',
    notes: '',
    daypartGoals: [{
        daypart: 'Early News',
        cpp: 40,
        grps: 120,
        mix: 0.15
    }, {
        daypart: 'Prime Access',
        cpp: 41,
        grps: 90,
        mix: 0.2
    }, {
        daypart: 'Prime',
        cpp: 75,
        grps: 200,
        mix: 0.4
    }, {
        daypart: 'Late News',
        cpp: 49,
        grps: 220,
        mix: 0.1
    }, {
        daypart: 'Sports & Specials',
        cpp: 64,
        grps: 140,
        mix: 0.15
    }],
    dayparts: [{
        id: 1,
        daypart_id: 1,
        name: 'Early Morning',
        startTime: '04:30 AM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 2,
        daypart_id: 2,
        name: 'Daytime',
        startTime: '09:00 AM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 285,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }, {
            id: 2,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 285,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 3,
        daypart_id: 3,
        name: 'Early Fringe',
        startTime: '03:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 4,
        daypart_id: 4,
        name: 'Early News',
        startTime: '5:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 5,
        daypart_id: 5,
        name: 'Prime Access',
        startTime: '07:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'Wheel of Fortune',
            time: 'M-F / 07:00 PM - 07:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 6,
        daypart_id: 6,
        name: 'Prime/Specials',
        startTime: '08:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: '2 Broke Girls/Mike',
            time: 'Mon 8:00 PM - 9:00 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 8,
        daypart_id: 8,
        name: 'Late News',
        startTime: '10:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 - 11PM',
            time: 'M-F / 11:00 PM - 11:35pm',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 9,
        daypart_id: 9,
        name: 'Late Fringe',
        startTime: '11:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 11,
        daypart_id: 11,
        name: 'Overnight',
        startTime: '01:00 AM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }]
}, {
    id: 64390,
    expanded: false,
    status: 'expired',
    availStatus: 'released',
    releasedDate: '10/13/16',
    advertiser: 'Southeast Ford',
    product: 'END',
    estimateNumber: 22,
    cpe: 'SAM GAL 23233',
    campaignName: 'WASHI WVVV FSE-END-22 Q1 17',
    market: 'Washington',
    station: 'WVVV',
    expirationDate: '10/13/16',
    flightStartDate: '01/09/16',
    flightEndDate: '02/19/17',
    agency: 'Auto Advertising Partners',
    lastUpdated: '10/13/16 11:14 AM',
    grossMarketBudget: 53190,
    totalGrpGoal: 94,
    primaryDemo: 'M 18-49',
    lastUpdatedBy: 'John Doe',
    shareGoal: '',
    dueDate: '12/01/15',
    notes: 'Notes...',
    daypartGoals: [{
        daypart: 'Early News',
        cpp: 40,
        grps: 120,
        mix: 0.15
    }, {
        daypart: 'Prime Access',
        cpp: 41,
        grps: 90,
        mix: 0.2
    }, {
        daypart: 'Prime',
        cpp: 75,
        grps: 200,
        mix: 0.4
    }, {
        daypart: 'Late News',
        cpp: 49,
        grps: 220,
        mix: 0.1
    }, {
        daypart: 'Sports & Specials',
        cpp: 64,
        grps: 140,
        mix: 0.15
    }],
    dayparts: [{
        id: 1,
        daypart_id: 1,
        name: 'Early Morning',
        startTime: '04:30 AM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 2,
        daypart_id: 2,
        name: 'Daytime',
        startTime: '09:00 AM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 3,
        daypart_id: 3,
        name: 'Early Fringe',
        startTime: '03:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 4,
        daypart_id: 4,
        name: 'Early News',
        startTime: '5:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 5,
        daypart_id: 5,
        name: 'Prime Access',
        startTime: '07:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 6,
        daypart_id: 1,
        name: 'Prime/Specials',
        startTime: '08:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 8,
        daypart_id: 8,
        name: 'Late News',
        startTime: '10:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 9,
        daypart_id: 9,
        name: 'Late Fringe',
        startTime: '11:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 11,
        daypart_id: 11,
        name: 'Overnight',
        startTime: '01:00 AM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }]
}, {
    id: 64191,
    expanded: false,
    status: 'expired',
    availStatus: 'released',
    releasedDate: '09/23/16',
    advertiser: 'Papa John’s Pizza',
    product: 'HOL',
    estimateNumber: 8,
    cpe: 'SAM GAL 23233',
    campaignName: 'WASHI WVVV PJP-HOL-8 Q1 17',
    market: 'Washington',
    station: 'WVVV',
    expirationDate: '09/23/16',
    flightStartDate: '12/26/16',
    flightEndDate: '01/29/17',
    agency: 'Zone Group Advertising',
    lastUpdated: '09/23/16 03:31 PM',
    grossMarketBudget: 53190,
    totalGrpGoal: 94,
    primaryDemo: 'M 18-49',
    lastUpdatedBy: 'John Doe',
    shareGoal: '',
    dueDate: '12/01/15',
    notes: 'Notes...',
    daypartGoals: [{
        daypart: 'Early News',
        cpp: 40,
        grps: 120,
        mix: 0.15
    }, {
        daypart: 'Prime Access',
        cpp: 41,
        grps: 90,
        mix: 0.2
    }, {
        daypart: 'Prime',
        cpp: 75,
        grps: 200,
        mix: 0.4
    }, {
        daypart: 'Late News',
        cpp: 49,
        grps: 220,
        mix: 0.1
    }, {
        daypart: 'Sports & Specials',
        cpp: 64,
        grps: 140,
        mix: 0.15
    }],
    dayparts: [{
        id: 1,
        daypart_id: 1,
        name: 'Early Morning',
        startTime: '04:30 AM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 2,
        daypart_id: 2,
        name: 'Daytime',
        startTime: '09:00 AM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 3,
        daypart_id: 3,
        name: 'Early Fringe',
        startTime: '03:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 4,
        daypart_id: 4,
        name: 'Early News',
        startTime: '5:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 5,
        daypart_id: 5,
        name: 'Prime Access',
        startTime: '07:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 6,
        daypart_id: 6,
        name: 'Prime/Specials',
        startTime: '08:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 8,
        daypart_id: 8,
        name: 'Late News',
        startTime: '10:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 9,
        daypart_id: 9,
        name: 'Late Fringe',
        startTime: '11:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 11,
        daypart_id: 11,
        name: 'Overnight',
        startTime: '01:00 AM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }]
}, {
    id: 63999,
    expanded: false,
    status: 'expired',
    availStatus: 'released',
    releasedDate: '09/19/16',
    advertiser: 'Community Loans, LLC.',
    product: 'QTR',
    estimateNumber: 3567,
    cpe: 'SAM GAL 23233',
    campaignName: 'WASHI WVVV CLI-QTR-3567 Q1 17',
    market: 'Washington',
    station: 'WVVV',
    expirationDate: '09/19/16',
    flightStartDate: '12/26/16',
    flightEndDate: '01/29/17',
    agency: 'Vanthrop & Associates',
    lastUpdated: '09/19/16 10:12 AM',
    grossMarketBudget: 53190,
    totalGrpGoal: 94,
    primaryDemo: 'M 18-49',
    lastUpdatedBy: 'John Doe',
    shareGoal: '',
    dueDate: '12/01/15',
    notes: 'Notes...',
    daypartGoals: [{
        daypart: 'Early News',
        cpp: 40,
        grps: 120,
        mix: 0.15
    }, {
        daypart: 'Prime Access',
        cpp: 41,
        grps: 90,
        mix: 0.2
    }, {
        daypart: 'Prime',
        cpp: 75,
        grps: 200,
        mix: 0.4
    }, {
        daypart: 'Late News',
        cpp: 49,
        grps: 220,
        mix: 0.1
    }, {
        daypart: 'Sports & Specials',
        cpp: 64,
        grps: 140,
        mix: 0.15
    }],
    dayparts: [{
        id: 1,
        daypart_id: 1,
        name: 'Early Morning',
        startTime: '04:30 AM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 2,
        daypart_id: 2,
        name: 'Daytime',
        startTime: '09:00 AM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 3,
        daypart_id: 3,
        name: 'Early Fringe',
        startTime: '03:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 4,
        daypart_id: 4,
        name: 'Early News',
        startTime: '5:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 5,
        daypart_id: 5,
        name: 'Prime Access',
        startTime: '07:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 6,
        daypart_id: 6,
        name: 'Prime/Specials',
        startTime: '08:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 8,
        daypart_id: 8,
        name: 'Late News',
        startTime: '10:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 9,
        daypart_id: 9,
        name: 'Late Fringe',
        startTime: '11:00 PM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }, {
        id: 11,
        daypart_id: 11,
        name: 'Overnight',
        startTime: '01:00 AM',
        marketCompetitive: {
            low: 250,
            high: 265
        },
        goals: {
            cpp: 200,
            grps: 108,
            mix: 0.4
        },
        programs: [{
            id: 1,
            name: 'News 12 First @ 5',
            time: 'M-F / 05:00 PM - 05:30 PM',
            flightStartDate: '03/30/15',
            flightEndDate: '06/21/15',
            rate: 185,
            rating: 1.7,
            avgCpp: 109,
            length: ':30'
        }]
    }]
}]
