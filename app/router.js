import React from 'react';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';

//Get layouts
import MainLayout from './components/main-layout';
import SearchLayout from './components/search-layout';

//Get components
import Home from './components/home';
import UserList from './components/user-list';
import UserProfile from './components/user-profile';
import WidgetList from './components/widget-list';

export default(
	<Router history={browserHistory}>
		<Route component={MainLayout}>

			<Route path="/" component={Home} />

			<Route path="users">
				<Route component={SearchLayout}>
					<IndexRoute component={UserList} />
				</Route>
				<Route path=":userId" components={UserProfile}>
			</Route>

			<Route path="widgets">
				<Route component={SearchLayout}>
					<IndexRoute component={WidgetList} />
				</Route>
			</Route>
			
		</Route>
	</Router>
);