import React from 'react';

const WidgetProfile = React.createClass({
	render: function(){
		return (
			<div className="WidgetProfile">
				<header className="WidgetProfile-header">
					<h1>Widget profile for widgetId: {this.props.params.widgetId}</h1>
				</header>
				<main>
					Widget profile content
				</main>
				<footer className="WidgetProfile-footer">Widget Footer</footer>
			</div>
		);
	}
});

export default WidgetProfile;