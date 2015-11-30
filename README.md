![React-Drops](./logo150.png)
## React-Drops

##### CONCEPT [ *NOT WORKING YET!* ]

### Easily drop react component 'templates' from the command-line

Install React Drops  

`npm i -g react-drops`  


#### Commands

**1. drops**

`drops User` //generates basic template for a User component  

#### Basic template:  
  - component: `./app/components/User.js`  
  - styles: `./app/styles/User.css`  


##### CreateClass component (es6)
```js
import React from 'react';

const User = React.createClass( {
  render() {
    return (
      <div className="app">
        <h1>Main Component</h1>
      </div>
    );
  }
});
export default User;
```  

##### Class component es6
```js
import React from 'react';

class User extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Main Component</h1>
      </div>
    )
  }
}
export default User;
```  

##### Function component es6
```js
import(./styles/User.scss);
import React from 'react';

const User = (props) => {
	return (
		<div className="user">
			<h1>{props.user}</h1>
		</div>
	)
}
export default User;
```  

##### CSS
```css
.user {
	color: red;
}
```

---

**TODO**

1. Add Component name as Argument w/flags  
2. Add Commands + arguments  

FUTURE COMMANDS or FLAGS?

- `drops [component Name] --props name:string age:number availability:boolean`
```
Creates component with parameters (props w/ validation)
```
- `inject [Component] [destination file]`
```
Calls component in another file (dest file)
```  
- `clean [Component]`   
```
Prompt?
Removes Component Files (js & scss)
```
