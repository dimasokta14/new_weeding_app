import React, { Suspense } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import { LetterPage } from "./components/LetterPage";
import { Loader } from "semantic-ui-react";

const App = React.lazy(() => import("./App"));

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
