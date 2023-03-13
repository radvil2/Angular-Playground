export type TApiRes<T> = {
  data: T;
  error: '00' | string;
  message?: string;
  status?: boolean;
  success?: boolean;
  total?: number;
  count?: number;
};

export namespace Config {
  export interface Company {
    MemberTypeDepth: number;
    ServiceDepth: number;
  }
  export interface Hour<T = number> {
    From: T; // string | number
    To: T; // string | number
  }
  export interface Currency {
    Name: string;
    Symbol: string;
    Digit: number;
  }
  export interface Timezone {
    Id: string;
    Name: string;
    Offset: number;
  }
  export interface Reminder {
    Count: number;
    Interval: number;
    MessageTemplateId: string;
  }
  export interface Price {
    Credit: number;
    Discounted: number;
    Normal: number;
  }
  export interface PriceLowerCase {
    credit: number;
    discounted: number;
    normal: number;
  }
  export interface Member {
    DaysOff?: Record<string, boolean>;
    WorkingHours: Record<string, Config.Hour<string>[]>;
    DaysOn?: Record<string, Config.Hour<string>[]>[];
  }
  export interface Branch {
    CountryCode: string;
    LogoUrl: string;
    ValidInvoiceDays: number;
    VatPercentage: number;
    Homepage: string;
    Address: Model.Address;
    Tel: string;
    Timezone: Config.Timezone;
    DaysOff: Record<string, boolean>;
    BreakTime: Config.Hour[];
    CloseOnPublicHolidays: boolean;
    ServiceDepth: number;
    MemberTypeDepth: number;
    Currency: Config.Currency;
    Locale: string;
    CreditRatio: number;
    PhonePrefix: string;
    WorkingHour: Record<string, Config.Hour[]>;
  }
}

export namespace Model {
  export interface Company {
    Id: string;
    CreatedTimestamp: string;
    UpdatedTimestamp: string;
    Active: boolean;
    Name: string;
    Code: string;
    Configuration: Config.Company;
  }
  export interface Address {
    Address1: string;
    Address2: string;
    District: string;
    PostalCode: string;
    Province: string;
    Country?: string;
    City?: string;
    SubDistrict?: string;
  }
  export interface Branch {
    Id: string;
    Active: boolean;
    CreatedTimestamp: string;
    UpdatedTimestamp: string;
    ParentId?: string;
    Name: string;
    DisplayOrder?: number;
    CompanyId: string;
    Code: string;
    Configuration: Config.Branch;
  }
  export interface Room {
    Id: string;
    Active?: boolean;
    CreatedTimestamp: string;
    UpdatedTimestamp: string;
    Name: string;
    Description: string;
    DisplayOrder: number;
  }
  export interface Equipment {
    Id: string;
    Name: string;
    Active?: boolean;
    DisplayOrder: number;
    UpdatedTimestamp: string;
    CreatedTimestamp: string;
  }
  export interface Service {
    Id: string;
    Active?: boolean;
    ParentService?: Partial<Service>;
    ShowInSummary?: boolean;
    CreatedTimestamp: string;
    UpdatedTimestamp: string;
    Name: string;
    DisplayOrder?: number;
    BranchId?: string;
    ParentId?: string;
    Sku?: string;
    Duration?: number;
    Price?: Config.PriceLowerCase;
    MemberIdsResource?: string[];
    EquipmentIds?: string[];
    RoomIds?: string[];
    PackageCount?: number;
    Injectable?: boolean;
    Rooms?: Room[];
    Equipments?: Equipment[];
    MembersResource?: any[];
    Reminder?: Config.Reminder;
    MemberTypeIds?: string[]; // ??
    MemberTypes?: any[]; // ??
  }
  export interface MemberType {
    Id: string;
    ParentId?: string;
    CreatedTimestamp: string;
    UpdatedTimestamp: string;
    Name: string;
    DisplayOrder: number;
    ValueData: {
      Assignable: boolean;
    };
  }
  export interface Member {
    Id: string;
    ParentId?: string;
    Name: string;
    Active?: boolean;
    Username?: string;
    Title?: string;
    FirstName?: string;
    LastName?: string;
    Email?: string;
    DisplayOrder?: number;
    CreatedTimestamp: string;
    UpdatedTimestamp: string;
    Mobile?: string;
    PictureUrl?: string;
    Roles?: string[];
    Assignable?: boolean;
    Configuration?: Config.Member;
    ValueData?: {
      ParentId: string;
      Assignable: boolean;
      DaysOff: Record<string, boolean>;
      DaysOn: Record<string, boolean> | null;
      WorkingHours?: Record<string, Config.Hour<string>[]>;
    };
  }
  export interface Product {
    Id: string;
    CreatedTimestamp: string;
    UpdatedTimestamp: string;
    ParentId: string;
    Name: string;
    DisplayOrder: number;
    Active: boolean;
    ProductType: string;
    Sku: string;
    Price: Config.Price;
    Data: {
      Credit: number;
      ValidityDays: number;
    };
  }
  export interface Customer {
    Id: string;
    CreatedTimestamp: string;
    UpdatedTimestamp: string;
    Active: boolean;
    Code: string;
    Name: string;
    Mobile: string;
    Email: string;
    Birthdate: string;
    Gender: string;
    Address: Address;
    AvailableCredit: number;
    PictureUrl?: string;
    ProductNoMembership?: number | null;
    ProductMembership?: Product | null;
    Tags: string[];
    Notes: string;
    MembershipExpiry?: string;
    ReferredBy: {
      Data: string | null;
      Source: string;
    };
  }
  export interface BookingService {
    Id: string;
    CreatedTimestamp: string;
    UpdatedTimestamp: string;
    Index: number;
    ServiceNo: number;
    Injectable: boolean;
    Duration: number;
    Status?: string;
    MemberNoResource: number;
    Service: Service;
    MemberResource: Member;
    RoomNo?: number;
    Room?: Room;
    EquipmentNo?: number;
    Equipment?: Equipment;
  }
  export interface Booking {
    Id: string;
    CreatedTimestamp: string;
    UpdatedTimestamp: string;
    BookedTimestamp: string;
    TotalDuration: number;
    Code: string;
    Status: string;
    Active: boolean;
    Customer: Customer;
    MemberBookedBy: Member | null;
    BookingServices: BookingService[];
  }
}
