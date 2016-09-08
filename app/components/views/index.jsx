import React from 'react';

const Index = React.createClass({
	render: function(){
		return (
			<html lang="en">
				<head>
				    <meta charSet="UTF-8" />
				    <title>SPA React Router</title>
				    <link rel="stylesheet" href="/css/styles.css" />
				</head>
				<body>
					<div id="root"></div>
					<script src="/js/bundle.js"></script>
				</body>
			</html>
		);
	}
});

export default Index;