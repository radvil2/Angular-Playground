import { Model, TApiRes } from '../booking.model';

export const MemberTypeList: TApiRes<Model.MemberType[]> = {
  error: '00',
  message: 'Success',
  data: [
    {
      Id: '01GDYJNS67PP6EHT7RARGCACQM',
      CreatedTimestamp: '2022-11-12T09:01:57.331Z',
      UpdatedTimestamp: '2022-11-12T09:01:59.07Z',
      Name: 'Practitioner',
      DisplayOrder: 1,
      ValueData: {
        Assignable: true,
      },
    },
    {
      Id: '01GDYJP6GAT6D6TBBCJ873VZQS',
      CreatedTimestamp: '2022-11-12T09:10:02.871Z',
      UpdatedTimestamp: '2022-11-12T09:10:04.639Z',
      Name: 'Receptionist',
      DisplayOrder: 2,
      ValueData: {
        Assignable: false,
      },
    },
    {
      Id: '01GDYJPJBSABYMAYFVFD7CPWD1',
      CreatedTimestamp: '2022-11-12T09:10:39.239Z',
      UpdatedTimestamp: '2022-11-12T09:10:40.967Z',
      Name: 'Back Office',
      DisplayOrder: 3,
      ValueData: {
        Assignable: false,
      },
    },
    {
      Id: '01GDYK9F6C5QP4N66F3SHNXW9A',
      CreatedTimestamp: '2022-11-12T09:12:36.683Z',
      UpdatedTimestamp: '2022-11-12T09:12:37.518Z',
      ParentId: '01GDYJNS67PP6EHT7RARGCACQM',
      Name: 'Consultant',
      DisplayOrder: 1,
      ValueData: {
        Assignable: true,
      },
    },
    {
      Id: '01GDYKAGQNGE1YNFN0QJNJ8F26',
      CreatedTimestamp: '2022-11-12T09:14:08.71Z',
      UpdatedTimestamp: '2022-11-12T09:14:10.158Z',
      ParentId: '01GDYJNS67PP6EHT7RARGCACQM',
      Name: 'Nurse',
      DisplayOrder: 2,
      ValueData: {
        Assignable: true,
      },
    },
    {
      Id: '01GDYKFJGR3VTH5JDW33EKEKXY',
      CreatedTimestamp: '2022-11-12T09:14:35.568Z',
      UpdatedTimestamp: '2022-11-12T09:14:36.283Z',
      ParentId: '01GDYJNS67PP6EHT7RARGCACQM',
      Name: 'EBD Technician',
      DisplayOrder: 3,
      ValueData: {
        Assignable: true,
      },
    },
    {
      Id: '01GDYKF4PB2JQCD4TAAC1EQW2A',
      CreatedTimestamp: '2022-11-12T09:15:11.421Z',
      UpdatedTimestamp: '2022-11-12T09:15:12.204Z',
      ParentId: '01GDYJNS67PP6EHT7RARGCACQM',
      Name: 'Skin Therapist',
      DisplayOrder: 4,
      ValueData: {
        Assignable: true,
      },
    },
  ],
  count: 3,
  total: 3,
};
