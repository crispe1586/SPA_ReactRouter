import React from 'react';
import WidgetProfile from '../views/widget-profile';
import * as widgetApi from '../../api/widget-api';

const WidgetProfileContainer = React.createClass({
	getInitialState: function(){
		return {
			name: null,
      		imageUrl: null,
      		twitter: null,
      		worksOn: null,
      		repos: []
		}
	},
	componentDidMount: function(){
		let widgetId = this.props.params.widgetId;
		widgetApi.getProfile(widgetId).then(profile => {
			this.setState({
				name: profile.name,
				imageUrl: profile.imageUrl,
				twitter:profile.twitter,
				worksOn:profile.worksOn,
				repos:profile.repos
			});
		});
	},
	render: function(){
		return(
			<WidgetProfile name={this.state.name} imageUrl={this.state.imageUrl} twitter={this.state.twitter} worksOn={this.state.worksOn} repos={this.state.repos} />
		);
	}
});

export default WidgetProfileContainer;