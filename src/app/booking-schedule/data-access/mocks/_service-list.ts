import { Model, TApiRes } from '../booking.model';

export const ServiceList: TApiRes<Model.Service[]> = {
  error: '00',
  message: 'Success',
  count: 202,
  total: 202,
  data: [
    {
      Id: '01GQH02NP0M2CHM1XSHGD18MM7',
      CreatedTimestamp: '2023-01-24T04:20:16.745142Z',
      UpdatedTimestamp: '2023-01-24T04:20:16.745142Z',
      ParentId: '01GQGTM67DZX5Y1Z4A5329RHE0',
      Name: '11 Sessions',
      Active: true,
      Sku: '',
      PackageCount: 11,
      Duration: 30,
      Price: {
        credit: 123,
        discounted: 123,
        normal: 123,
      },
      Reminder: {
        Count: 0,
        Interval: 0,
        MessageTemplateId: '',
      },
      ShowInSummary: true,
    },
    {
      Id: '01GNHEXZXKEZ5RMT4BF8893D7R',
      CreatedTimestamp: '2022-12-30T12:08:28.41691Z',
      UpdatedTimestamp: '2023-01-09T02:15:48.798693Z',
      ParentId: '01GNHBR60VKBAWN7QJAJ36GQ8X',
      Name: '3 sessions',
      Active: true,
      Sku: '',
      PackageCount: 3,
      Duration: 35,
      Price: {
        credit: 100,
        discounted: 50,
        normal: 100,
      },
      Reminder: {
        Count: 0,
        Interval: 0,
        MessageTemplateId: '',
      },
      MemberTypeIds: ['01GDYKAGQNGE1YNFN0QJNJ8F26'],
      MemberTypes: [
        {
          Id: '01GDYKAGQNGE1YNFN0QJNJ8F26',
          CreatedTimestamp: '2022-11-12T09:14:08.71Z',
          UpdatedTimestamp: '2022-11-12T09:14:10.158Z',
          ParentId: '01GDYJNS67PP6EHT7RARGCACQM',
          Name: 'Nurse',
          DisplayOrder: 2,
          Active: true,
          Assignable: true,
        },
      ],
      MemberIdsResource: [
        '01GGAT8N42S4C5406N4H519KAS',
        '01GKTGG8JAR1ENQ9B2HFPH3ETX',
        '01GNHATHDQDE1CMGZE6XMPSDC6',
        '01GPPW3HXWNCHVVSE2FFAR6YS8',
        '01GDYT73FX82X9FH4MP21G5MHN',
        '01GFZG2EG1HMNXZ394RKW4TNGZ',
      ],
      MembersResource: [
        {
          Id: '01GKTGG8JAR1ENQ9B2HFPH3ETX',
          CreatedTimestamp: '2022-12-09T03:57:41.851807Z',
          UpdatedTimestamp: '2023-03-01T04:13:35.528645Z',
          Name: 'Sandra ',
          Active: true,
          Username: '80ee089a-e98c-4af9-b708-0c3d743cf1a3',
          Title: 'Ms.',
          Email: 'manggala+monica@access-mobile.com',
          Mobile: '+6112341234',
          Roles: ['branch/practitioner'],
          Assignable: true,
          Configuration: {
            DaysOff: {},
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
        {
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
        {
          Id: '01GFZG2EG1HMNXZ394RKW4TNGZ',
          CreatedTimestamp: '2022-11-12T09:17:31.669Z',
          UpdatedTimestamp: '2023-02-17T10:53:09.333266Z',
          Name: 'Alex',
          DisplayOrder: 1,
          Active: true,
          Username: 'google_104566952009000424502',
          Title: 'Ms.',
          FirstName: 'Alex',
          LastName: 'Won',
          Email: 'alex@access-mobile.com',
          Mobile: '-',
          PictureUrl:
            'https://lh3.googleusercontent.com/a/ALm5wu163ZE9EU7J1Ayaa_gT8qjN1mbgfwkQyzMpjhid=s96-c',
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
        {
          Id: '01GNHATHDQDE1CMGZE6XMPSDC6',
          CreatedTimestamp: '2022-12-30T10:56:40.910799Z',
          UpdatedTimestamp: '2023-02-20T04:15:46.022949Z',
          Name: 'N Alex',
          Active: true,
          Username: 'ee541f38-57bb-4513-8873-28b32303381e',
          Title: 'Mr.',
          Email: 'alex+dev1@access-mobile.com',
          Mobile: '+628111777473',
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
      ],
      EquipmentIds: [
        '01GGAJHCX0WPWH9V88JG9CMN8P',
        '01GGAJHCX0JQBC561KA9C0VCE5',
      ],
      Equipments: [
        {
          Id: '01GGAJHCX0WPWH9V88JG9CMN8P',
          CreatedTimestamp: '2022-11-12T11:01:08.552Z',
          UpdatedTimestamp: '2022-11-12T11:01:09.783Z',
          Name: 'Janus',
          DisplayOrder: 17,
          Active: true,
        },
        {
          Id: '01GGAJHCX0JQBC561KA9C0VCE5',
          CreatedTimestamp: '2022-11-12T11:01:08.552Z',
          UpdatedTimestamp: '2022-11-12T11:01:09.783Z',
          Name: 'LED 2',
          DisplayOrder: 16,
          Active: true,
        },
      ],
      RoomIds: ['01GGAJ000D3TN493VTB0282YJQ'],
      Rooms: [
        {
          Id: '01GGAJ000D3TN493VTB0282YJQ',
          CreatedTimestamp: '2022-11-12T10:51:11.39Z',
          UpdatedTimestamp: '2022-11-12T10:51:12.191Z',
          Name: 'EP2',
          Description: 'Energy Procedure Room (Laser)',
          DisplayOrder: 9,
          Active: true,
        },
      ],
      ShowInSummary: true,
    },
    {
      Id: '01GHT0PHEMYWM6P6WMR5T150CR',
      CreatedTimestamp: '2022-11-29T10:36:49.98438Z',
      UpdatedTimestamp: '2022-12-30T11:58:18.60868Z',
      ParentId: '01GHSZPVEKNMYNX70EQCZXRNBM',
      Name: 'Single',
      DisplayOrder: 1,
      Active: true,
      Sku: '0100101',
      PackageCount: 1,
      Duration: 30,
      Price: {
        credit: 0,
        discounted: 0,
        normal: 0,
      },
      Reminder: {
        Count: 0,
        Interval: 0,
        MessageTemplateId: '',
      },
      MemberTypeIds: ['01GDYK9F6C5QP4N66F3SHNXW9A'],
      MemberTypes: [
        {
          Id: '01GDYK9F6C5QP4N66F3SHNXW9A',
          CreatedTimestamp: '2022-11-12T09:12:36.683Z',
          UpdatedTimestamp: '2022-11-12T09:12:37.518Z',
          ParentId: '01GDYJNS67PP6EHT7RARGCACQM',
          Name: 'Consultant',
          DisplayOrder: 1,
          Active: true,
          Assignable: true,
        },
      ],
      MemberIdsResource: [
        '01GDYT73FX82X9FH4MP21G5MHN',
        '01GFZG2EG1HMNXZ394RKW4TNGZ',
        '01GGAT5DRSTG2ZWN2G8GK14Y8V',
        '01GGASX4YVYP6Q2KQ5F0WJ8DMP',
        '01GGAS6S69Q74M05ZEZ1S7JXPK',
      ],
      MembersResource: [
        {
          Id: '01GGAT5DRSTG2ZWN2G8GK14Y8V',
          CreatedTimestamp: '2022-11-12T09:17:31.669Z',
          UpdatedTimestamp: '2022-11-12T09:17:32.095Z',
          Name: 'ET Mira',
          DisplayOrder: 0,
          Active: false,
          Username: 'null',
          Title: 'Ms.',
          FirstName: 'Mira',
          LastName: '-',
          Email: '-',
          Mobile: '-',
          Roles: ['branch/practitioner'],
          Assignable: true,
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
        {
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
        {
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
      ],
      EquipmentIds: [
        '01GGAJHCX0W4T1NT5E4SBVVCAD',
        '01GGAJHCX0J5JAGBGB48F6DW6C',
      ],
      Equipments: [
        {
          Id: '01GGAJHCX0W4T1NT5E4SBVVCAD',
          CreatedTimestamp: '2022-11-12T11:01:08.552Z',
          UpdatedTimestamp: '2022-11-12T11:01:09.783Z',
          Name: 'Tribeam 1',
          DisplayOrder: 9,
          Active: true,
        },
        {
          Id: '01GGAJHCX0J5JAGBGB48F6DW6C',
          CreatedTimestamp: '2022-11-12T11:01:08.552Z',
          UpdatedTimestamp: '2022-11-12T11:01:09.783Z',
          Name: 'Tribeam  2',
          DisplayOrder: 10,
          Active: true,
        },
      ],
      RoomIds: ['01GGAJ000D3TN493VTB0282YJQ', '01GGAJ000DQMG9ZE0EQ0PVSSCB'],
      Rooms: [
        {
          Id: '01GGAJ000D3TN493VTB0282YJQ',
          CreatedTimestamp: '2022-11-12T10:51:11.39Z',
          UpdatedTimestamp: '2022-11-12T10:51:12.191Z',
          Name: 'EP2',
          Description: 'Energy Procedure Room (Laser)',
          DisplayOrder: 9,
          Active: true,
        },
        {
          Id: '01GGAJ000DQMG9ZE0EQ0PVSSCB',
          CreatedTimestamp: '2022-11-12T10:51:11.39Z',
          UpdatedTimestamp: '2022-11-12T10:51:12.191Z',
          Name: 'EP1',
          Description: 'Energy Procedure Room (Laser)',
          DisplayOrder: 8,
          Active: true,
        },
      ],
      ShowInSummary: true,
    },
  ],
};
