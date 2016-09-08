import React from 'react';
import {Link} from 'react-router';

const UserList = React.createClass({
	render: function(){
		return(
			<div className="data-list">
				{this.props.users.map(function(user){
					return(
						<div key={user.id} className="data-list-item">
							<div className="details">
								<Link to={'/users/'+user.id}>{user.name}</Link>
							</div>
							<div className="controls">
								<button onClick={this.props.deleteUser.bind(null,user.id)} className="delete">Delete</button>
							</div>
						</div>
					);
				})};


			</div>
		);
	}
});

export default UserList;