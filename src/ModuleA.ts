import B from "./ModuleB.js";

export default class A {
	constructor(
		public b = new B()
	){}
}