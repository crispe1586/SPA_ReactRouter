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
import WidgetProfile from './components/widget-profile';


export default(
	<Router history={browserHistory}>
		<Route path="/" component={MainLayout}>
			<IndexRoute component={Home} />

			<Route path="users">
				<Route component={SearchLayout}>
					<IndexRoute component={UserList} />
				</Route>
				<Route path=":userId" component={UserProfile} />
			</Route>

			<Route path="widgets">
				<Route component={SearchLayout}>
					<IndexRoute component={WidgetList} />
				</Route>
				<Route path=":widgetId" component={WidgetProfile} />
				
			</Route>
			
		</Route>
	</Router>
);