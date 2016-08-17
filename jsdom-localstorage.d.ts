
declare module 'node-localstorage' {
	export class LocalStorage extends Storage {
		constructor(filePath: string)
	}
}

declare module NodeJS {
	interface Global {
		localStorage: Storage
	}
}
