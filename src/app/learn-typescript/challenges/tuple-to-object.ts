/*
	11 - Tuple to Object
	### Question

	Given an array, transform it into an object type and the key/value must be in the provided array.

	For example:

	```ts
	const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

	type result = TupleToObject<typeof tuple> 
	// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
*/

/* _____________ Your Code Here _____________ */

export type TupleToObject<T extends readonly any[]> = any

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '../utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const

type cases = [
	Expect<Equal<TupleToObject<typeof tuple>, { 
		tesla: 'tesla'; 
		'model 3': 'model 3'; 
		'model X': 'model X'; 
		'model Y': 'model Y'
	}>>,
	Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
	Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>,
]

// @ts-expect-error
// @des this line should throw an error
type error = TupleToObject<[[1, 2], {}]>
