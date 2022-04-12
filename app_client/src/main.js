import React, { Suspense } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { BrowserRouter } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import { LetterPage } from "./components/LetterPage";
import { Loader } from "semantic-ui-react";

const App = React.lazy(() => import("./App"));
const Login = React.lazy(() => import("./components/LoginForm"));

const ControlPanel = React.lazy(() =>
	import("./components/ControlPanel/Layout")
);

function PrivateRoute({ children, ...rest }) {
	const auth = useSelector((state) => state.firebase.auth);
	return (
		<Route
			{...rest}
			render={({ location }) =>
				isLoaded(auth) && !isEmpty(auth) ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

const Main = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loader />}>
				<Switch>
					<Route
						exact
						path="/main"
						name="Wedding Praatfika & Ratna"
						render={(props) => <App {...props} />}
					/>
					<Route
						exact="/"
						name="Wedding Praatfika & Ratna"
						render={() => <LetterPage />}
					/>
				</Switch>
			</Suspense>
		</BrowserRouter>
	);
};

export default Main;
