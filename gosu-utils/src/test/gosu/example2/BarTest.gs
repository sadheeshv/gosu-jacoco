package example2

uses example2.Bar
uses org.junit.Assert
uses org.junit.Test

/**
 * Created by svenkatachalam on 3/28/17.
 */
class BarTest {

  @Test
  function makeABar() {
    print("newing a Bar")
    var bar = new Bar()
    Assert.assertNotNull(bar)

   print(bar.makeSoup("chicken"))
   print(bar.makeSoup("10Bean"))


  }

}