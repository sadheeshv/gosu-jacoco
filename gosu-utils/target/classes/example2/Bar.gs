package example2

/**
 * Created by svenkatachalam on 3/28/17.
 */
class Bar {

  function makeSoup(arg : String) : String {

    if(arg.contains("chicken")){
      return "Your '${arg}' soup is ready"
    }
    else
      return "Hello, Your wegan soup  is ready "
  }


}