import React from 'react';

const UserProfile = React.createClass({
	render: function(){
		return(
			<div className="UserProfile">
				<header className="UserProfile-header">
					<h1>User profile for userId: {this.props.params.userId}</h1>
				</header>
				<main>
					User profile content
				</main>
				<footer className="UserProfile-footer">User Footer</footer>
			</div>
		);
	}
});

export default UserProfile;