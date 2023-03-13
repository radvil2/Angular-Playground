import { Model, TApiRes } from '../booking.model';

export const BranchDetail: TApiRes<Model.Branch> = {
  error: '00',
  message: 'Success',
  data: {
    Id: '01GDXKJPZX2Z36J78ENFJEH9KA',
    CreatedTimestamp: '2022-11-12T09:00:05.255Z',
    UpdatedTimestamp: '2023-03-06T09:37:04.647438Z',
    Active: true,
    CompanyId: '1',
    Name: 'NU28 Medical Aesthetics',
    Code: 'MEL',
    Configuration: {
      Address: {
        Address1: 'Jeisys Medical Australia Pty Ltd (ABN 19 659 395 865)',
        Address2: 'Level1, 1200 High Street',
        City: 'Armadale',
        Country: 'Australia',
        District: '',
        PostalCode: '3143',
        Province: 'VIC',
        SubDistrict: '',
      },
      BreakTime: [
        {
          From: 12,
          To: 13,
        },
      ],
      CloseOnPublicHolidays: true,
      CountryCode: 'AU',
      CreditRatio: 1,
      Currency: {
        Digit: 2,
        Name: 'AUD',
        Symbol: '$',
      },
      DaysOff: {
        '20221201': true,
        '20221202': true,
        '20221224': true,
        '20221225': true,
        '20221226': true,
        '20221231': true,
        '20230101': true,
        '20230102': true,
      },
      Homepage: 'https://www.nu28.com.au',
      Locale: 'en-AU',
      LogoUrl:
        'https://cdn.cliocrm.com/branch/01GDXKJPZX2Z36J78ENFJEH9KA/logo.png',
      MemberTypeDepth: 2,
      PhonePrefix: '+62',
      ServiceDepth: 3,
      Tel: '+61433180248',
      Timezone: {
        Id: '01GF0BFRNWJGVNARCA2SVVGZ5F',
        Name: 'Asia/Jakarta',
        Offset: 7,
      },
      ValidInvoiceDays: 10,
      VatPercentage: 10,
      WorkingHour: {
        FridayHours: [
          {
            From: 8,
            To: 22,
          },
        ],
        MondayHours: [
          {
            From: 8,
            To: 22,
          },
        ],
        SaturdayHours: [
          {
            From: 8,
            To: 22,
          },
        ],
        SundayHours: [
          {
            From: 8,
            To: 22,
          },
        ],
        ThursdayHours: [
          {
            From: 8,
            To: 22,
          },
        ],
        TuesdayHours: [
          {
            From: 8,
            To: 22,
          },
        ],
        WednesdayHours: [
          {
            From: 8,
            To: 22,
          },
        ],
      },
    },
  },
};
