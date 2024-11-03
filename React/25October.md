### Class - 25 October

#### <u>Sending Data from Child Component from Parent Component</u>
##### Using Call Back Function

###### Parent Component
```javascript
import React, {useState} from 'react';

import Child from './Child';

const App = () => 
{
    const [data, setData] = useState('');

    // Function to set data from child component

    // This Concept is called as Callback Function
    return (
        <div>
            <Child setData={setData} />
            <h1>{data}</h1>
        </div>
    );
}

export default App;
```

###### Child Component
```javascript
import React from 'react';

const Child = (props) =>
{
    // As we passed setData as props, we can use it as props.setData

    // This will set data in parent component
    return (
        <div>
            <button onClick={() => props.setData('Hello World')}>Click Me</button>
        </div>
    );
}

export default Child;
```