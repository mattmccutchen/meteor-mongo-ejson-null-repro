class MyClass {
	constructor(x) {
		this.x = x;
	}
	typeName() {
		return "MyClass";
	}
	toJSONValue() {
		return {x: this.x};
	}
	static fromJSONValue(json) {
		return new MyClass(json.x);
	}
}
EJSON.addType("MyClass", MyClass.fromJSONValue);

Foo = new Mongo.Collection("foo");
Foo.remove({});
Foo.insert({_id: "1", c: new MyClass(null)});
console.log(Foo.findOne("1"));
