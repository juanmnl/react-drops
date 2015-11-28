![React-Drops](./logo150.png)
## React-Drops

##### CONCEPT [ *NOT WORKING YET!* ]

### Easily drop react component 'templates' from the command-line

Install React Drops  

`npm i -g react-drops`  


require?  
- react
- sass?

---
*File structure?*
```
- root <-- Project Folder
  - app/src  <-- Check if app || src and subDir components
    - components  
      - User.js <-- Write [name] Component JS  
    - styles  
      - User.scss <-- Write [name] Component SCSS  

  - build/dist  
  - etc...
```
---
#### Commands

**1. drops**

`drops User` //generates basic template for a User component  

basic template:  
  - component: `./app/components/User.js`  
  - style: `./app/styles/User.scss`  

  Class component es6
  ```js
  import React from 'react';

class App extends React.Component {
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

JSX Function component es6
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

CSS
```css
.user {
	color: red;
}
```

---

**TODO**

1. Add Commands

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
- `project [AppName]` *<small>!not in root folder</small>*
```
Prompt Name [name]
mkdir [name]  
cd [name]  
mkdir app build app/components app/styles  
touch app/index.js app/components/App.js   app/styles/app.scss .gitignore webpack.config.js README.md  
npm init -Y    
npm i --save react react-dom
```
