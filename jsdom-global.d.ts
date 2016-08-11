
declare module "jsdom-global" {
	export default function(html?, options?)
}

declare module NodeJS {
	interface Global {
		NodeList: NodeList // required for chai-dom
		HTMLElement: HTMLElement // required for chai-dom
	}
}
