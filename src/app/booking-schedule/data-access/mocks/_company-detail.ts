import { Model, TApiRes } from '../booking.model';

export const CompanyDetail: TApiRes<Model.Company> = {
  error: '00',
  message: 'Success',
  data: {
    Id: '01GDXKDMYJW9YSBPBWHHNY9BQK',
    CreatedTimestamp: '2022-11-11T18:27:49.16156Z',
    UpdatedTimestamp: '2022-11-11T18:27:49.16156Z',
    Active: true,
    Name: 'NU:28',
    Code: 'NU28',
    Configuration: {
      MemberTypeDepth: 2,
      ServiceDepth: 3,
    },
  },
};
