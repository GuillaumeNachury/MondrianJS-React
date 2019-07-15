# MondrianJS-React
A React wrapper you can use in your app in order to load remote component.

### Usage
`yarn add mondrianjs-react`

Before using `<mondrianReact.RemoteComponent />` you need to initialize `MondrianJS`

```
import {mondrianReact} from 'mondrianjs-react';

function MyApp(){

    //Init Mondrian
    mondrianReact.init(
    {
      endpoints : [
            {name:'local', url:'http://127.0.0.1:2601'},
            {name:'partnerA', url:'http://partnerA.xy.z'}, 
          ],
      depsMap : {
          "react":React,
          "@sdk":InternalSDK
          }
    }
    );

    return(
        <div>
            Your stuff
            <mondrianReact.RemoteComponent identifier='remoteCmp.mdr' endpoint='partnerA' {...some_props}>
            <mondrianReact.RemoteComponent identifier='bundle.js' endpoint='local' {...other_props} selector='widget'>
        </div>
    )
}
```

Please read [`MondrianJS API`](https://github.com/GuillaumeNachury/MondrianJS#api) doc for the list of params.



