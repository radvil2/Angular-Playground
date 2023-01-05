/**
 * A bit explanation about infer.
 * Result only return either the infertion type or never
 * Standard format would be >> T extennds (some infertion) ? infertion-type-result : never
 */

import { Observable } from 'rxjs';

type Role = 'root' | 'admin' | 'user';

/*
 * @v4.6
 * @desc old way to use infer type
 * */
type AbstractReturnType1<T> = T extends (...args: any[]) => infer R
  ? R extends string
    ? R
    : never
  : never;

type AbstractNestedReturnType1<T> = T extends (...options: []) => infer U
  ? U extends Promise<infer V>
    ? V extends Array<infer W>
      ? W extends string
        ? W
        : never
      : never
    : never
  : never;

export type Function1A = AbstractReturnType1<() => string>; // expected >> string

export type Function1B = AbstractReturnType1<() => Observable<string>>; // expected >> never

export type Function1C = AbstractReturnType1<() => Role>; // expected >> Role

export type NestedFunction1A = AbstractNestedReturnType1<
  () => Promise<Array<Role>>
>;

export type NestedFunction1B = AbstractNestedReturnType1<
  () => Observable<Array<Role>>
>;

export type NestedFunction1C = AbstractNestedReturnType1<
  () => Promise<Record<string, Role>>
>;

/*
 * @v4.7
 * @desc cleanner way to use infertion type
 * */
type AbstractReturnType2<T> = T extends ((
  ...args: any[]
) => infer R extends string)
  ? R
  : never;

export type Function2A = AbstractReturnType2<() => string>; // expected >> string

export type Function2B = AbstractReturnType2<() => Observable<string>>; // expected >> never

export type Function2C = AbstractReturnType2<() => Role>; // expected >> Role

/*
 * @v4.8
 * @desc cleanner way to use infertion type
 * In this version typescript introducing infertion plus primitive type inside string literal
 * */
// sample #1
type ValidDomain<T> = T extends `${infer U extends string}.${
  infer V extends string /* << This should be a primitive type */
}`
  ? `${U}.${V}`
  : never;

type WebsiteOptionsOf<T> = T extends string
  ? `https://${T}.web.app` | `https://${T}.com` | `https://${T}.org`
  : never;

export type MyWebsiteOptions = ValidDomain<WebsiteOptionsOf<'radvil'>> | '';

export const myselectedWebsite: MyWebsiteOptions = 'https://radvil.web.app';

// sample #2
type ImageWidthInPx<T = 100> = T extends `${infer U extends number}px` ? U : T;
type CustomWidthOptions = ImageWidthInPx<'200px' | '400px' | '800px'>; // expected: 200 | 400 | 800

const defaultWidth: ImageWidthInPx = 100;
console.log(defaultWidth);

const customWidth: CustomWidthOptions = 400;
console.log(customWidth);

type ValidPhoneNumber<Prefix> = Prefix extends `${infer U extends number}`
  ? `+${U}-${number}-${number}`
  : never;

type IndonesiaPhoneNumber = ValidPhoneNumber<'62821' | '62823'>;

const myPhoneNumber: IndonesiaPhoneNumber = '+62821-9948-6969';
console.log(myPhoneNumber);
