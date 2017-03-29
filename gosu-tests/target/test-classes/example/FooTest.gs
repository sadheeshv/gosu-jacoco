package example

uses example.Foo
uses org.junit.Assert
uses org.junit.Test

/**
 * Created by svenkatachalam on 3/8/17.
 */
class FooTest {
  @Test
    function makeAFoo() {
    print("newing a Foo")
    var foo = new Foo()
    Assert.assertNotNull(foo)

    print(foo.doSomething("eureka"))
      Assert.assertEquals(42, foo.MeaningOfLife)
  }

  @Test
  function makeAnotherFoo() {
    print("newing a Another Foo")
    var foo = new Foo()
    Assert.assertNotNull(foo)

    print(foo.doSomethingElse("eureka"))
      Assert.assertEquals(42, foo.MeaningOfLife)
  }

}