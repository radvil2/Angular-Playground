import { Injectable } from '@angular/core';
import { hoursToMilliseconds } from 'date-fns';
import { map, timer } from 'rxjs';
import { Model, TApiRes } from './booking.model';
import * as MockData from './mocks';

@Injectable({ providedIn: 'root' })
export class BookingService {
  #createMockResponse<T>(mockData: TApiRes<T>, delay = 1000) {
    return timer(delay).pipe(map(() => mockData));
  }

  getCompanyDetail() {
    return this.#createMockResponse(MockData.CompanyDetail, 500);
  }

  getBranchDetail() {
    return this.#createMockResponse(MockData.BranchDetail);
  }

  getEquipmentList() {
    return this.#createMockResponse(MockData.EquipmentList, 1200);
  }

  getRoomList() {
    return this.#createMockResponse(MockData.RoomList);
  }

  getServiceList(params?: { active: boolean }) {
    return this.#createMockResponse(MockData.ServiceList).pipe(
      map((response) => {
        if (params?.active) {
          response.data = response.data.filter((item) => !!item.Active);
        }
        return response;
      })
    );
  }

  getMemberList(params?: { Assignable: boolean }) {
    return this.#createMockResponse(MockData.MemberList, 900).pipe(
      map((response) => {
        if (params?.Assignable) {
          response.data = response.data.filter((item) => !!item.Assignable);
        }
        return response;
      })
    );
  }

  getMemberTypeList(params?: { parentId: string }) {
    return this.#createMockResponse(MockData.MemberTypeList, 700).pipe(
      map((response) => {
        if (params?.parentId) {
          response.data = response.data.filter(
            (item) => item.ParentId === params.parentId
          );
        }
        return response;
      })
    );
  }

  getBookingList(params?: { from: string; to: string }) {
    return this.#createMockResponse(MockData.BookingList, 1300).pipe(
      map((response) => {
        if (params) {
          // /booking/range/20230309
          const startTime = new Date(params.from || params.to).getTime();
          const endTime = startTime + hoursToMilliseconds(24); // one day
          const filterPredicate = (item: Model.Booking) => {
            const bookingTime = new Date(item.BookedTimestamp).getTime();
            return bookingTime > startTime && bookingTime < endTime;
          };
          response.data = response.data.filter(filterPredicate);
        }
        return response;
      })
    );
  }
}
