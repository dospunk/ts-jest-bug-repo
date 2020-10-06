import A from "../src/ModuleA";

test("test ModuleA", ()=>{
	expect(()=> new A()).not.toThrowError();
});