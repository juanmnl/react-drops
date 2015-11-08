## ![React-Drops](./logo75.png) React-Drops

##### CONCEPT [ *NOT WORKING YET!* ]

### Easily drop react component 'templates' from the command-line

`npm i -g react-drops`  



---
`drops User //generates basic template for a User component`  

basic template:  
  - component: `./app/components/User.js`  
  - style: `./app/styles/User.scss`  

JSX
```javascript
require(./styles/User.scss);
var React = require('react');

var User = React.createClass({
	getInitialState: function() {
		return {};
	},
	render: function() {
		return (
			<div className="user">
				<h1>User Component</h1>
			</div>
		)
	}
})

module.exports = User;
```

CSS
```css
.user {
	color: red;
}
```

---

**TODO**

1. ES6 flag or config?  
2. Add Commands

FUTURE COMMANDS or FLAGS?

- drops [component Name] --props name:string age:number availability:boolean
		Creates component with parameters (props w/ validation)

- inject [Component] [destination file]
		Calls component in another file (dest file)
