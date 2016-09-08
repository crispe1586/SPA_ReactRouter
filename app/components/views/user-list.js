import React from 'react';
import {Link} from 'react-router';

const UserList = React.createClass({
	render: function(){
		return(
			<div className="UserList">
				<ul className="user-list">
					<li><Link to="users/1">Miguel</Link></li>
					<li><Link to="users/2">Cristina</Link></li>
					<li><Link to="users/3">Juana</Link></li>
					<li><Link to="users/4">Fernanda</Link></li>
					<li><Link to="users/5">Antonia</Link></li>
				</ul>
			</div>
		);
	}
});

export default UserList;