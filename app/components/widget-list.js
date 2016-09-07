import React from 'react';
import {Link} from 'react-router';

const WidgetList = React.createClass({
	render: function(){
		return(
			<div className="WidgetList">
				<ul className="widget-list">
					<li><Link to="widgets/1">Widget 1</Link></li>
					<li><Link to="widgets/2">Widget 2</Link></li>
					<li><Link to="widgets/3">Widget 3</Link></li>
					<li><Link to="widgets/4">Widget 4</Link></li>
				</ul>
			</div>
		);
	}
});

export default WidgetList;