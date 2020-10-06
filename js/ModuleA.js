import B from "./ModuleB.js";
export default class A {
    constructor(b = new B()) {
        this.b = b;
    }
}
