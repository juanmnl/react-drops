## ![React-Drops](./logo150.png) React-Drops

####*NOT WORKING YET!*

### Easily drop react component 'templates' from the command-line

Idea:

`npm i -g react-drops`  

`drops User component`  

component: `./app/components/User.js`  
style: `./app/styles/User.scss`  

```js
require(./styles/User.scss);
var React = require('react');

var User = React.createClass({
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
