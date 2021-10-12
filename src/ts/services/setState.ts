import { child } from 'firebase/database'

import { get, ref, set } from '@firebase/database'

import { database } from './firebase'
import { SetState } from './models'

const dbDir = 'setState/'
export const setStateDbRef = ref(database, dbDir)

export const writeState = (setState: SetState): void => {
	set(setStateDbRef, setState)
}

export const getState = (): Promise<SetState> => {
	return get(child(ref(database), dbDir))
		.then(snapshot => {
			if (snapshot.exists()) return Promise.resolve(snapshot.val() as SetState)
			else return Promise.reject()
		})
		.catch(() => Promise.reject())
}
