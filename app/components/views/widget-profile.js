import React from 'react';

const WidgetProfile = React.createClass({
	render: function(){
		return (
			<div className="widget-profile">
				<img src={this.props.imageUrl} />
				<div className="details">
					<h1>{this.props.name}</h1>
					<a href={'http://twitter.com/'+this.props.twitter}>@{this.props.twitter}</a>
					<p>Works on <strong>{this.props.worksOn}</strong></p>
					<h3>Github Repos:</h3>
					<ul class="repos">
						{this.props.repos.map(function(repo){
							return (
								<li key={repo.id}>
									<a href={repo.html_url}>{repo.name}</a>
								</li>
							);
						})}
					</ul>
				</div>

			</div>
		);
	}
});

export default WidgetProfile;
