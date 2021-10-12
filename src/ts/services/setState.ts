import { get, ref, set } from 'firebase/database'

import { database } from './firebase'
import { SetState } from './models'

export const setStateDbRef = ref(database, 'setState/')

export const writeState = (setState: SetState): void => {
	set(setStateDbRef, setState)
}

export const getState = (): Promise<SetState> => {
	return get(setStateDbRef)
		.then(snapshot => {
			if (snapshot.exists()) return Promise.resolve(snapshot.val() as SetState)
			else return Promise.reject()
		})
		.catch(() => Promise.reject())
}
