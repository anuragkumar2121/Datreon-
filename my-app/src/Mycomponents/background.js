import React, { Component } from 'react';
import background from "./photo.jpg";

class App extends Component {
render() {
	const myStyle={
		backgroundImage: `url(${background})`,
		height:'109.5vh',
		marginTop:'-70px',
		fontSize:'50px',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
        
	};
	return (
	<div style={myStyle}>
	</div>
	);
}
}

export default App;
