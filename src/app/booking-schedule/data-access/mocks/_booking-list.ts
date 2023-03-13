import { TApiRes } from '../booking.model';
import { Model } from '../booking.model';

export const BookingList: TApiRes<Model.Booking[]> = {
  error: '00',
  message: 'Success',
  count: 5,
  total: 5,
  data: [
    {
      Id: '01GTZ5S22ZQPZ6Q6GB66S09GC6',
      CreatedTimestamp: '2023-03-07T23:16:20.765576Z',
      UpdatedTimestamp: '2023-03-07T23:18:25.165629Z',
      Active: true,
      Customer: {
        Id: '01GPYV33GQJ7SC3T2B698NBSS2',
        CreatedTimestamp: '2023-01-17T03:06:48.254Z',
        UpdatedTimestamp: '2023-02-15T09:33:23.784835Z',
        Active: true,
        Code: 'MEL-CLI-2301-000004',
        Name: 'Ali Abdul Wahid',
        Mobile: '6285280871948',
        Email: 'aly.dihaw96@gmail.com',
        Birthdate: '',
        Gender: 'Female',
        PictureUrl:
          'https://s3.ap-southeast-1.amazonaws.com/cdn-dev.cliocrm.com/customer/01GPYV33GQJ7SC3T2B698NBSS2/photo/logo_01GSA4PEPR1W4HXR81277FP6K6.jpg',
        Address: {
          Address1: '',
          Address2: '',
          District: '',
          PostalCode: '',
          Province: '',
        },
        Tags: ['VIP'],
        Notes: '',
        ReferredBy: {
          Data: null,
          Source: 'Other',
        },
        AvailableCredit: 0,
      },
      MemberBookedBy: {
        Id: '01GGAT8N42S4C5406N4H519KAS',
        CreatedTimestamp: '2022-11-12T09:17:31.669Z',
        UpdatedTimestamp: '2023-03-08T15:29:09.197068Z',
        Name: 'Seill Park',
        DisplayOrder: 1,
        Active: true,
        Username: 'google_115278909321576912368',
        Title: 'Mr.',
        FirstName: 'Seill',
        LastName: 'Park',
        Email: 'seill.park@access-mobile.com',
        Mobile: '+6280000000000',
        PictureUrl:
          'https://lh3.googleusercontent.com/a/ALm5wu1nKXph-QNO4cnlW5YJGFmvBRA6yhZg6qk6Yik6=s96-c',
        Roles: ['branch/practitioner'],
        Assignable: true,
        Configuration: {
          DaysOff: {},
          DaysOn: [
            {
              '20230327': [
                {
                  From: '9:30',
                  To: '12:30',
                },
                {
                  From: '13:00',
                  To: '17:30',
                },
              ],
            },
            {
              '20230301': [
                {
                  From: '3:30',
                  To: '4:30',
                },
              ],
            },
          ],
          WorkingHours: {
            FridayHours: [],
            MondayHours: [],
            SaturdayHours: [],
            SundayHours: [],
            ThursdayHours: [],
            TuesdayHours: [],
            WednesdayHours: [],
          },
        },
      },
      BookingServices: [
        {
          Id: '01GTZ5S23JSHY462R8NJV1BTGQ',
          CreatedTimestamp: '2023-03-07T23:16:20.798489Z',
          UpdatedTimestamp: '2023-03-07T23:18:25.226797Z',
          Index: 0,
          ServiceNo: 301,
          Service: {
            Id: '01GJYRHHPGSFEBF67VPVFFG253',
            CreatedTimestamp: '2022-11-29T10:43:38.851953Z',
            UpdatedTimestamp: '2023-02-26T18:37:31.033978Z',
            ParentId: '01GJYPXXF20D500RBZYF5D6ZE1',
            Name: 'single',
            DisplayOrder: 301,
            Active: true,
            ParentService: {
              Id: '01GJYPXXF20D500RBZYF5D6ZE1',
              CreatedTimestamp: '2022-11-29T10:43:21.104538Z',
              UpdatedTimestamp: '2023-01-19T09:49:55.760153Z',
              ParentId: '01GJYPQ8RWF1SRDFQJ625ZQZAZ',
              Name: 'BOTOX - Gummy Smile',
              DisplayOrder: 213,
              Active: true,
              ParentService: {
                Id: '01GJYPQ8RWF1SRDFQJ625ZQZAZ',
                CreatedTimestamp: '2022-11-29T10:43:14.588403Z',
                UpdatedTimestamp: '2023-01-19T09:50:06.819645Z',
                Name: 'Antiwrinkle',
                DisplayOrder: 172,
                Active: true,
                ShowInSummary: true,
              },
              ShowInSummary: true,
            },
            Sku: '070301',
            PackageCount: 1,
            Duration: 30,
            Price: {
              credit: 119,
              discounted: 119,
              normal: 119,
            },
            Reminder: {
              Count: 0,
              Interval: 0,
              MessageTemplateId: '',
            },
            Injectable: true,
            ShowInSummary: true,
          },
          MemberNoResource: 19,
          MemberResource: {
            Id: '01GK33X31WHG155C374HQPESWG',
            CreatedTimestamp: '2022-11-30T01:54:58.767428Z',
            UpdatedTimestamp: '2023-03-01T03:44:25.140748Z',
            Name: 'Ervan',
            Active: true,
            Username: 'google_101055116795020517191',
            Title: 'Mr.',
            Email: 'ervan@access-mobile.com',
            Mobile: '',
            PictureUrl:
              'https://lh3.googleusercontent.com/a/ALm5wu0y1OqrKWeYq0kfVxAILuaqLbtF6jkHU_vLX4NRdw=s96-c',
            Roles: ['branch/practitioner'],
            Assignable: true,
            Configuration: {
              DaysOff: {},
              WorkingHours: {
                FridayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                MondayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                SaturdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                SundayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                ThursdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                TuesdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                WednesdayHours: [
                  {
                    From: '8:00',
                    To: '16:00',
                  },
                ],
              },
            },
          },
          Injectable: true,
          Duration: 30,
          Status: 'Tentative',
        },
      ],
      BookedTimestamp: '2023-03-09T01:40:00Z',
      TotalDuration: 30,
      Code: 'MEL-BOOK-2303-000027',
      Status: 'Tentative',
    },
    {
      Id: '01GTZXSCW6WZ4HSHGWGW322GHS',
      CreatedTimestamp: '2023-03-08T06:15:57.644594Z',
      UpdatedTimestamp: '2023-03-08T06:15:57.644594Z',
      Active: true,
      Customer: {
        Id: '01GK9GAF2XHTJ751FSZ2NG9V9B',
        CreatedTimestamp: '2022-12-02T13:27:26.61Z',
        UpdatedTimestamp: '2023-02-27T14:05:59.626516Z',
        Active: true,
        Code: 'MEL-CLI-2212-000001',
        Name: 'Helvetica',
        Mobile: '6181812341234',
        Email: 'helvetica@test.com',
        Birthdate: '1990-03-14T17:00:00.000Z',
        Gender: 'Female',
        PictureUrl:
          'https://s3.ap-southeast-1.amazonaws.com/cdn-dev.cliocrm.com/customer/01GK9GAF2XHTJ751FSZ2NG9V9B/photo/L1_01GT9K3DWR7ANHEG18F298H8VD.png',
        Address: {
          Address1: ' 58 Thyme Avenue',
          Address2: 'The Summit',
          District: 'QUEEN VICTORIA BUILDING',
          PostalCode: '1226',
          Province: 'NSW',
        },
        Tags: ['VIP'],
        Notes:
          'Skin Treatment, wedding in March 15 2023, wedding package\nFriend of a Celeb',
        ReferredBy: {
          Data: 'Veronica',
          Source: 'Friends',
        },
        AvailableCredit: 4170,
        ProductNoMembership: 5,
        ProductMembership: {
          Id: '01GMT3KQRF4YQH8CJQY276B19J',
          CreatedTimestamp: '2022-12-21T19:24:33.00946Z',
          UpdatedTimestamp: '2022-12-21T19:24:33.00946Z',
          ParentId: '01GMT3KQRF1XG8K0W2DDA4SADQ',
          Name: 'Pink Moon',
          DisplayOrder: 1,
          Active: true,
          ProductType: 'membership',
          Sku: 'PMS001001',
          Price: {
            Credit: 0,
            Discounted: 2828,
            Normal: 2828,
          },
          Data: {
            Credit: 3028,
            ValidityDays: 365,
          },
        },
        MembershipExpiry: '2024-12-21T06:50:26.913091Z',
      },
      MemberBookedBy: {
        Id: '01GDYTFW6HAGGX9ST38F3ERB1D',
        CreatedTimestamp: '2022-11-12T09:17:31.669Z',
        UpdatedTimestamp: '2023-03-09T06:03:27.676948Z',
        Name: 'Radvil',
        DisplayOrder: 2,
        Active: true,
        Username: 'google_104174244758340395576',
        Title: 'Mr.',
        FirstName: 'Radvil',
        LastName: 'Radvil',
        Email: 'radvil@access-mobile.com',
        Mobile: '+6280000000000',
        PictureUrl:
          'https://lh3.googleusercontent.com/a/ALm5wu3YCvkE7-5L61-XnoPbT6wwyW0hzrsxn2IOMsDv=s96-c',
        Roles: ['branch/back-office'],
        Configuration: {
          WorkingHours: {
            FridayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            MondayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            SaturdayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            SundayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            ThursdayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            TuesdayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            WednesdayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
          },
        },
      },
      BookingServices: [
        {
          Id: '01GTZXSCWTWGFH0GEY2WCTJ1CX',
          CreatedTimestamp: '2023-03-08T06:15:57.696066Z',
          UpdatedTimestamp: '2023-03-08T06:15:57.696066Z',
          Index: 0,
          ServiceNo: 604,
          Service: {
            Id: '01GSCKW78X9AWKWF58R8JJ5KGV',
            CreatedTimestamp: '2023-02-16T08:01:28.397348Z',
            UpdatedTimestamp: '2023-02-16T08:01:28.397348Z',
            ParentId: '01GJYPXXF26JBECNMN3N6W93MR',
            Name: 'High Quality',
            Active: true,
            ParentService: {
              Id: '01GJYPXXF26JBECNMN3N6W93MR',
              CreatedTimestamp: '2022-11-29T10:43:21.814927Z',
              UpdatedTimestamp: '2022-12-29T10:21:16.636041Z',
              ParentId: '01GJYPQ8RW53X5EN8B4AGBKTNS',
              Name: 'Dermal Filler: Cheeks 1ml',
              DisplayOrder: 218,
              Active: true,
              ParentService: {
                Id: '01GJYPQ8RW53X5EN8B4AGBKTNS',
                CreatedTimestamp: '2022-11-29T10:43:14.726793Z',
                UpdatedTimestamp: '2022-11-29T10:43:14.726793Z',
                Name: 'Dermal Filler',
                DisplayOrder: 173,
                Active: true,
                ShowInSummary: true,
              },
              ShowInSummary: true,
            },
            Sku: '8788',
            PackageCount: 1,
            Duration: 45,
            Price: {
              credit: 1.19,
              discounted: 1.19,
              normal: 1.19,
            },
            Reminder: {
              Count: 0,
              Interval: 0,
              MessageTemplateId: '',
            },
            Injectable: true,
            ShowInSummary: true,
          },
          MemberNoResource: 13,
          MemberResource: {
            Id: '01GDYT73FX82X9FH4MP21G5MHN',
            CreatedTimestamp: '2022-11-12T09:17:31.669Z',
            UpdatedTimestamp: '2023-02-03T13:35:48.582542Z',
            Name: 'Kaitlyn',
            DisplayOrder: 0,
            Active: true,
            Username: 'null',
            Title: 'Ms.',
            FirstName: 'Kaitlyn',
            LastName: 'Shin',
            Email: 'kaitlyn.shin@nu28.com.au',
            Mobile: '-',
            Roles: ['branch/practitioner'],
            Assignable: true,
            Configuration: {
              DaysOff: {
                '20230111': true,
                '20230112': true,
                '20230113': true,
                '20230201': true,
                '20230202': true,
                '20230204': true,
                '20230206': true,
                '20230208': true,
              },
              WorkingHours: {
                FridayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                MondayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                SaturdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                SundayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                ThursdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                TuesdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                WednesdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
              },
            },
          },
          Injectable: true,
          Duration: 45,
          Status: 'Tentative',
        },
      ],
      BookedTimestamp: '2023-03-09T02:00:00Z',
      TotalDuration: 45,
      Code: 'MEL-BOOK-2303-000030',
      Status: 'Tentative',
    },
    {
      Id: '01GV05V2HVDFW6QAH05BPC7M3G',
      CreatedTimestamp: '2023-03-08T08:36:41.347629Z',
      UpdatedTimestamp: '2023-03-08T09:38:19.439805Z',
      Active: true,
      Customer: {
        Id: '01GV05MZ3NZ63ZM23SW6VDCYFF',
        CreatedTimestamp: '2023-03-08T08:33:21.07Z',
        UpdatedTimestamp: '2023-03-08T08:35:04.368041Z',
        Active: true,
        Code: 'MEL-CLI-2303-000005',
        Name: 'jamal tes',
        Mobile: '6281234567788',
        Email: 'jamal@gmail.com',
        Birthdate: '2016-02-02T17:00:00.000Z',
        Gender: 'Female',
        Address: {
          Address1: 'test',
          Address2: 'test',
          District: 'test',
          PostalCode: '1234566',
          Province: 'test',
        },
        Tags: ['VIP'],
        Notes: 'untuk kebutuhan wedding',
        ReferredBy: {
          Data: null,
          Source: 'Facebook',
        },
        AvailableCredit: 0,
      },
      MemberBookedBy: {
        Id: '01GJEM29TNYJ3MC0D9WMV1A0EM',
        CreatedTimestamp: '2022-11-22T02:53:23.688399Z',
        UpdatedTimestamp: '2023-02-18T07:26:11.801498Z',
        Name: 'Jamal',
        Active: true,
        Username: '24cd47ff-69ea-4056-96a6-a4b46d377e71',
        Title: 'Mr.',
        Email: 'jamaludin@access-mobile.com',
        Mobile: '-',
        PictureUrl:
          'https://lh3.googleusercontent.com/a/ALm5wu1-SzODsBB23ZCsfFT1RLVVi7geCjpsfcu_Iivw=s96-c',
        Roles: ['branch/back-office'],
        Assignable: false,
        Configuration: {
          WorkingHours: {
            FridayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            MondayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            SaturdayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            SundayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            ThursdayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            TuesdayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            WednesdayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
          },
        },
      },
      BookingServices: [
        {
          Id: '01GV09BY8W8S6S0A4FG56JHE9N',
          CreatedTimestamp: '2023-03-08T09:38:19.559506Z',
          UpdatedTimestamp: '2023-03-08T09:38:19.559506Z',
          Index: 0,
          ServiceNo: 268,
          Service: {
            Id: '01GJYRHHPGXT1YAQ7TNNSACWVF',
            CreatedTimestamp: '2022-11-29T10:43:30.399391Z',
            UpdatedTimestamp: '2022-11-29T10:43:30.399391Z',
            ParentId: '01GJYPXXF2NFCJPD4GF8MDD7QR',
            Name: '3 sessions',
            DisplayOrder: 268,
            Active: true,
            ParentService: {
              Id: '01GJYPXXF2NFCJPD4GF8MDD7QR',
              CreatedTimestamp: '2022-11-29T10:43:17.594194Z',
              UpdatedTimestamp: '2022-11-29T10:43:17.594194Z',
              ParentId: '01GJYPQ8RWGNK59N3D88KG19N5',
              Name: 'Pumping (Exosome)',
              DisplayOrder: 193,
              Active: true,
              ParentService: {
                Id: '01GJYPQ8RWGNK59N3D88KG19N5',
                CreatedTimestamp: '2022-11-29T10:43:13.892633Z',
                UpdatedTimestamp: '2022-11-29T10:43:13.892633Z',
                Name: 'Device Solution Delivery',
                DisplayOrder: 168,
                Active: true,
                ShowInSummary: true,
              },
              ShowInSummary: true,
            },
            Sku: '030402',
            PackageCount: 3,
            Duration: 40,
            Price: {
              credit: 3105,
              discounted: 3105,
              normal: 3105,
            },
            Injectable: false,
            ShowInSummary: true,
          },
          MemberNoResource: 8,
          MemberResource: {
            Id: '01GGASX4YVYP6Q2KQ5F0WJ8DMP',
            CreatedTimestamp: '2022-11-12T09:17:31.669Z',
            UpdatedTimestamp: '2022-12-29T12:39:08.875817Z',
            Name: 'Evelyn',
            DisplayOrder: 0,
            Active: true,
            Username: 'null',
            Title: 'Ms.',
            FirstName: 'Evelyn',
            LastName: '-',
            Email: 'evelyn.huang@nu28.com.au',
            Mobile: '-',
            Roles: ['branch/practitioner'],
            Assignable: true,
            Configuration: {
              DaysOff: {
                '20221201': true,
                '20221202': true,
                '20221203': true,
              },
              WorkingHours: {
                FridayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                MondayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                SaturdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                SundayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                ThursdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                TuesdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                WednesdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
              },
            },
          },
          RoomNo: 8,
          Room: {
            Id: '01GGAJ000DQMG9ZE0EQ0PVSSCB',
            CreatedTimestamp: '2022-11-12T10:51:11.39Z',
            UpdatedTimestamp: '2022-11-12T10:51:12.191Z',
            Name: 'EP1',
            Description: 'Energy Procedure Room (Laser)',
            DisplayOrder: 8,
            Active: true,
          },
          EquipmentNo: 5,
          Equipment: {
            Id: '01GGAJHCX00Y9PKVTGA4CEJ31W',
            CreatedTimestamp: '2022-11-12T11:01:08.552Z',
            UpdatedTimestamp: '2022-11-12T11:01:09.783Z',
            Name: "D'liv 1",
            DisplayOrder: 5,
            Active: true,
          },
          Injectable: false,
          Duration: 40,
        },
        {
          Id: '01GV05V2PDGN6BAPKKG8QDQCES',
          CreatedTimestamp: '2023-03-08T08:36:41.394635Z',
          UpdatedTimestamp: '2023-03-08T09:38:19.584031Z',
          Index: 1,
          ServiceNo: 604,
          Service: {
            Id: '01GSCKW78X9AWKWF58R8JJ5KGV',
            CreatedTimestamp: '2023-02-16T08:01:28.397348Z',
            UpdatedTimestamp: '2023-02-16T08:01:28.397348Z',
            ParentId: '01GJYPXXF26JBECNMN3N6W93MR',
            Name: 'High Quality',
            Active: true,
            ParentService: {
              Id: '01GJYPXXF26JBECNMN3N6W93MR',
              CreatedTimestamp: '2022-11-29T10:43:21.814927Z',
              UpdatedTimestamp: '2022-12-29T10:21:16.636041Z',
              ParentId: '01GJYPQ8RW53X5EN8B4AGBKTNS',
              Name: 'Dermal Filler: Cheeks 1ml',
              DisplayOrder: 218,
              Active: true,
              ParentService: {
                Id: '01GJYPQ8RW53X5EN8B4AGBKTNS',
                CreatedTimestamp: '2022-11-29T10:43:14.726793Z',
                UpdatedTimestamp: '2022-11-29T10:43:14.726793Z',
                Name: 'Dermal Filler',
                DisplayOrder: 173,
                Active: true,
                ShowInSummary: true,
              },
              ShowInSummary: true,
            },
            Sku: '8788',
            PackageCount: 1,
            Duration: 45,
            Price: {
              credit: 1.19,
              discounted: 1.19,
              normal: 1.19,
            },
            Reminder: {
              Count: 0,
              Interval: 0,
              MessageTemplateId: '',
            },
            Injectable: true,
            ShowInSummary: true,
          },
          MemberNoResource: 13,
          MemberResource: {
            Id: '01GDYT73FX82X9FH4MP21G5MHN',
            CreatedTimestamp: '2022-11-12T09:17:31.669Z',
            UpdatedTimestamp: '2023-02-03T13:35:48.582542Z',
            Name: 'Kaitlyn',
            DisplayOrder: 0,
            Active: true,
            Username: 'null',
            Title: 'Ms.',
            FirstName: 'Kaitlyn',
            LastName: 'Shin',
            Email: 'kaitlyn.shin@nu28.com.au',
            Mobile: '-',
            Roles: ['branch/practitioner'],
            Assignable: true,
            Configuration: {
              DaysOff: {
                '20230111': true,
                '20230112': true,
                '20230113': true,
                '20230201': true,
                '20230202': true,
                '20230204': true,
                '20230206': true,
                '20230208': true,
              },
              WorkingHours: {
                FridayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                MondayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                SaturdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                SundayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                ThursdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                TuesdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                WednesdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
              },
            },
          },
          Injectable: true,
          Duration: 45,
          Status: 'Tentative',
        },
      ],
      BookedTimestamp: '2023-03-09T02:00:00Z',
      TotalDuration: 85,
      Code: 'MEL-BOOK-2303-000042',
      Status: 'Paid',
    },
    {
      Id: '01GV250TEHQFRFYD265NNTMNE0',
      CreatedTimestamp: '2023-03-09T03:00:49.849186Z',
      UpdatedTimestamp: '2023-03-09T03:01:54.02573Z',
      Active: true,
      Customer: {
        Id: '01GK9GAF2XHTJ751FSZ2NG9V9B',
        CreatedTimestamp: '2022-12-02T13:27:26.61Z',
        UpdatedTimestamp: '2023-02-27T14:05:59.626516Z',
        Active: true,
        Code: 'MEL-CLI-2212-000001',
        Name: 'Helvetica',
        Mobile: '6181812341234',
        Email: 'helvetica@test.com',
        Birthdate: '1990-03-14T17:00:00.000Z',
        Gender: 'Female',
        PictureUrl:
          'https://s3.ap-southeast-1.amazonaws.com/cdn-dev.cliocrm.com/customer/01GK9GAF2XHTJ751FSZ2NG9V9B/photo/L1_01GT9K3DWR7ANHEG18F298H8VD.png',
        Address: {
          Address1: ' 58 Thyme Avenue',
          Address2: 'The Summit',
          District: 'QUEEN VICTORIA BUILDING',
          PostalCode: '1226',
          Province: 'NSW',
        },
        Tags: ['VIP'],
        Notes:
          'Skin Treatment, wedding in March 15 2023, wedding package\nFriend of a Celeb',
        ReferredBy: {
          Data: 'Veronica',
          Source: 'Friends',
        },
        AvailableCredit: 4170,
        ProductNoMembership: 5,
        ProductMembership: {
          Id: '01GMT3KQRF4YQH8CJQY276B19J',
          CreatedTimestamp: '2022-12-21T19:24:33.00946Z',
          UpdatedTimestamp: '2022-12-21T19:24:33.00946Z',
          ParentId: '01GMT3KQRF1XG8K0W2DDA4SADQ',
          Name: 'Pink Moon',
          DisplayOrder: 1,
          Active: true,
          ProductType: 'membership',
          Sku: 'PMS001001',
          Price: {
            Credit: 0,
            Discounted: 2828,
            Normal: 2828,
          },
          Data: {
            Credit: 3028,
            ValidityDays: 365,
          },
        },
        MembershipExpiry: '2024-12-21T06:50:26.913091Z',
      },
      MemberBookedBy: {
        Id: '01GGASXJSY6A3FFNCE5YAQ6AC5',
        CreatedTimestamp: '2022-11-12T09:17:31.669Z',
        UpdatedTimestamp: '2023-03-01T03:29:55.332052Z',
        Name: 'Manggala',
        DisplayOrder: 0,
        Active: true,
        Username: 'google_112239094617644611673',
        Title: 'Mr.',
        FirstName: 'Manggala',
        LastName: '-',
        Email: 'manggala@access-mobile.com',
        Mobile: '+6280000000000',
        PictureUrl:
          'https://lh3.googleusercontent.com/a/ALm5wu3IRyvpMggPwnkirU38UkQke4lxcRxdtppSQiHk=s96-c',
        Roles: ['branch/practitioner'],
        Assignable: true,
        Configuration: {
          DaysOff: {},
          WorkingHours: {
            FridayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            MondayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            SaturdayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            SundayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            ThursdayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            TuesdayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            WednesdayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
          },
        },
      },
      BookingServices: [
        {
          Id: '01GV250TFNNR7E6W1SW6J72QJG',
          CreatedTimestamp: '2023-03-09T03:00:49.907954Z',
          UpdatedTimestamp: '2023-03-09T03:00:49.907954Z',
          Index: 0,
          ServiceNo: 292,
          Service: {
            Id: '01GJYRHHPG6TCZJXB9ZGEJ3AF5',
            CreatedTimestamp: '2022-11-29T10:43:36.345626Z',
            UpdatedTimestamp: '2022-11-29T10:43:36.345626Z',
            ParentId: '01GJYPXXF27M8E3QYWM18ZYWH5',
            Name: '5 sessions',
            DisplayOrder: 292,
            Active: true,
            ParentService: {
              Id: '01GJYPXXF27M8E3QYWM18ZYWH5',
              CreatedTimestamp: '2022-11-29T10:43:19.512645Z',
              UpdatedTimestamp: '2022-11-29T10:43:19.512645Z',
              ParentId: '01GJYPQ8RWHHK9PE50V5DQJ4T8',
              Name: 'Intense Pulsed Light for colour correction 350-650',
              DisplayOrder: 205,
              Active: true,
              ParentService: {
                Id: '01GJYPQ8RWHHK9PE50V5DQJ4T8',
                CreatedTimestamp: '2022-11-29T10:43:14.290632Z',
                UpdatedTimestamp: '2022-11-29T10:43:14.290632Z',
                Name: 'IPL',
                DisplayOrder: 170,
                Active: true,
                ShowInSummary: true,
              },
              ShowInSummary: true,
            },
            Sku: '050302',
            PackageCount: 5,
            Duration: 40,
            Price: {
              credit: 2137.5,
              discounted: 2137.5,
              normal: 2137.5,
            },
            Injectable: false,
            ShowInSummary: true,
          },
          MemberNoResource: 8,
          MemberResource: {
            Id: '01GGASX4YVYP6Q2KQ5F0WJ8DMP',
            CreatedTimestamp: '2022-11-12T09:17:31.669Z',
            UpdatedTimestamp: '2022-12-29T12:39:08.875817Z',
            Name: 'Evelyn',
            DisplayOrder: 0,
            Active: true,
            Username: 'null',
            Title: 'Ms.',
            FirstName: 'Evelyn',
            LastName: '-',
            Email: 'evelyn.huang@nu28.com.au',
            Mobile: '-',
            Roles: ['branch/practitioner'],
            Assignable: true,
            Configuration: {
              DaysOff: {
                '20221201': true,
                '20221202': true,
                '20221203': true,
              },
              WorkingHours: {
                FridayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                MondayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                SaturdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                SundayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                ThursdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                TuesdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                WednesdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
              },
            },
          },
          RoomNo: 8,
          Room: {
            Id: '01GGAJ000DQMG9ZE0EQ0PVSSCB',
            CreatedTimestamp: '2022-11-12T10:51:11.39Z',
            UpdatedTimestamp: '2022-11-12T10:51:12.191Z',
            Name: 'EP1',
            Description: 'Energy Procedure Room (Laser)',
            DisplayOrder: 8,
            Active: true,
          },
          EquipmentNo: 7,
          Equipment: {
            Id: '01GGAJHCX0HCK8SQAQC8VDMDQ1',
            CreatedTimestamp: '2022-11-12T11:01:08.552Z',
            UpdatedTimestamp: '2022-11-12T11:01:09.783Z',
            Name: 'SmoothCool 1',
            DisplayOrder: 7,
            Active: true,
          },
          Injectable: false,
          Duration: 40,
          Status: 'Tentative',
        },
      ],
      BookedTimestamp: '2023-03-09T03:00:00Z',
      TotalDuration: 40,
      Code: 'MEL-BOOK-2303-000047',
      Status: 'Paid',
    },
    {
      Id: '01GV2AN3BH53R4G86A0JBEC1A2',
      CreatedTimestamp: '2023-03-09T04:39:17.184513Z',
      UpdatedTimestamp: '2023-03-09T04:47:21.400281Z',
      Active: true,
      Customer: {
        Id: '01GV05MZ3NZ63ZM23SW6VDCYFF',
        CreatedTimestamp: '2023-03-08T08:33:21.07Z',
        UpdatedTimestamp: '2023-03-08T08:35:04.368041Z',
        Active: true,
        Code: 'MEL-CLI-2303-000005',
        Name: 'jamal tes',
        Mobile: '6281234567788',
        Email: 'jamal@gmail.com',
        Birthdate: '2016-02-02T17:00:00.000Z',
        Gender: 'Female',
        Address: {
          Address1: 'test',
          Address2: 'test',
          District: 'test',
          PostalCode: '1234566',
          Province: 'test',
        },
        Tags: ['VIP'],
        Notes: 'untuk kebutuhan wedding',
        ReferredBy: {
          Data: null,
          Source: 'Facebook',
        },
        AvailableCredit: 0,
      },
      MemberBookedBy: {
        Id: '01GJEM29TNYJ3MC0D9WMV1A0EM',
        CreatedTimestamp: '2022-11-22T02:53:23.688399Z',
        UpdatedTimestamp: '2023-02-18T07:26:11.801498Z',
        Name: 'Jamal',
        Active: true,
        Username: '24cd47ff-69ea-4056-96a6-a4b46d377e71',
        Title: 'Mr.',
        Email: 'jamaludin@access-mobile.com',
        Mobile: '-',
        PictureUrl:
          'https://lh3.googleusercontent.com/a/ALm5wu1-SzODsBB23ZCsfFT1RLVVi7geCjpsfcu_Iivw=s96-c',
        Roles: ['branch/back-office'],
        Assignable: false,
        Configuration: {
          WorkingHours: {
            FridayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            MondayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            SaturdayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            SundayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            ThursdayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            TuesdayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
            WednesdayHours: [
              {
                From: '8:00',
                To: '22:00',
              },
            ],
          },
        },
      },
      BookingServices: [
        {
          Id: '01GV2AN3C712R01BF5Y3XPHZ6P',
          CreatedTimestamp: '2023-03-09T04:39:17.226236Z',
          UpdatedTimestamp: '2023-03-09T04:41:26.690558Z',
          Index: 0,
          ServiceNo: 293,
          Service: {
            Id: '01GJYRHHPGRD32X7EQVT04GAER',
            CreatedTimestamp: '2022-11-29T10:43:36.617098Z',
            UpdatedTimestamp: '2022-11-29T10:43:36.617098Z',
            ParentId: '01GJYPXXF27M8E3QYWM18ZYWH5',
            Name: '10 sessions',
            DisplayOrder: 293,
            Active: true,
            ParentService: {
              Id: '01GJYPXXF27M8E3QYWM18ZYWH5',
              CreatedTimestamp: '2022-11-29T10:43:19.512645Z',
              UpdatedTimestamp: '2022-11-29T10:43:19.512645Z',
              ParentId: '01GJYPQ8RWHHK9PE50V5DQJ4T8',
              Name: 'Intense Pulsed Light for colour correction 350-650',
              DisplayOrder: 205,
              Active: true,
              ParentService: {
                Id: '01GJYPQ8RWHHK9PE50V5DQJ4T8',
                CreatedTimestamp: '2022-11-29T10:43:14.290632Z',
                UpdatedTimestamp: '2022-11-29T10:43:14.290632Z',
                Name: 'IPL',
                DisplayOrder: 170,
                Active: true,
                ShowInSummary: true,
              },
              ShowInSummary: true,
            },
            Sku: '050303',
            PackageCount: 10,
            Duration: 40,
            Price: {
              credit: 2137.5,
              discounted: 2137.5,
              normal: 2137.5,
            },
            Injectable: false,
            ShowInSummary: true,
          },
          MemberNoResource: 12,
          MemberResource: {
            Id: '01GGAS6S69Q74M05ZEZ1S7JXPK',
            CreatedTimestamp: '2022-11-12T09:17:31.669Z',
            UpdatedTimestamp: '2023-02-20T07:49:05.580708Z',
            Name: 'Jacinta',
            DisplayOrder: 0,
            Active: true,
            Username: 'null',
            Title: 'Ms.',
            FirstName: 'Jascinta',
            LastName: '-',
            Email: '-',
            Mobile: '-',
            Roles: ['branch/practitioner'],
            Assignable: true,
            Configuration: {
              DaysOff: {
                '20230213': true,
                '20230214': true,
                '20230215': true,
                '20230216': true,
              },
              WorkingHours: {
                FridayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                MondayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                SaturdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                SundayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                ThursdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                TuesdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
                WednesdayHours: [
                  {
                    From: '8:00',
                    To: '22:00',
                  },
                ],
              },
            },
          },
          RoomNo: 8,
          Room: {
            Id: '01GGAJ000DQMG9ZE0EQ0PVSSCB',
            CreatedTimestamp: '2022-11-12T10:51:11.39Z',
            UpdatedTimestamp: '2022-11-12T10:51:12.191Z',
            Name: 'EP1',
            Description: 'Energy Procedure Room (Laser)',
            DisplayOrder: 8,
            Active: true,
          },
          EquipmentNo: 7,
          Equipment: {
            Id: '01GGAJHCX0HCK8SQAQC8VDMDQ1',
            CreatedTimestamp: '2022-11-12T11:01:08.552Z',
            UpdatedTimestamp: '2022-11-12T11:01:09.783Z',
            Name: 'SmoothCool 1',
            DisplayOrder: 7,
            Active: true,
          },
          Injectable: false,
          Duration: 40,
          Status: 'Tentative',
        },
      ],
      BookedTimestamp: '2023-03-09T06:00:00Z',
      TotalDuration: 40,
      Code: 'MEL-BOOK-2303-000049',
      Status: 'Paid',
    },
  ],
};
