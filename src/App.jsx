import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import For from "@components/common/For"
import { routeConfig } from "./route.config"
import "antd/dist/antd.css";
import Navbar from '@components/common/Navbar';
import { withContext } from '@components/hoc';
function App({user}) {
  return (
    <BrowserRouter>
      <Navbar user={user} />
      <For 
        Parent={props => <Switch {...props} />}
        items={Object.keys(routeConfig)}
        renderItem={(routeKey, index) => {
          const Component = routeConfig[routeKey].component;
          return (
            <Route 
              path={routeConfig[routeKey].route}
              exact={routeConfig[routeKey].exact}
              key={index}
              render={props => {
                const updatedProps = {
                  ...props,
                  ...routeConfig[routeKey].props
                }
                return (
                  <Component {...updatedProps} />
                )
              }}
            />
          )
        }}
      />
    </BrowserRouter>
  )
}

export default withContext(App)
