import React from 'react';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';

//Get layouts
import MainLayout from './components/layouts/main-layout';
import SearchLayout from './components/layouts/search-layout';

//Get views
import Home from './components/views/home';

//Get containers
import UserList from './components/containers/user-list-container';
import UserProfile from './components/containers/user-profile-container';
import WidgetList from './components/containers/widget-list-container';
import WidgetProfile from './components/containers/widget-profile-container';


export default(
	<Router history={browserHistory}>
		<Route path="/" component={MainLayout}>
			<IndexRoute component={Home} />

			<Route path="users">
				<Route component={SearchLayout}>
					<IndexRoute component={UserListContainer} />
				</Route>
				<Route path=":userId" component={UserProfileContainer} />
			</Route>

			<Route path="widgets">
				<Route component={SearchLayout}>
					<IndexRoute component={WidgetListContainer} />
				</Route>
				<Route path=":widgetId" component={WidgetProfileContainer} />
				
			</Route>
			
		</Route>
	</Router>
);