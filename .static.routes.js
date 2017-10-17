
    import { Component } from 'react'
    import { Switch, Route } from 'react-router-dom'

    import src_containers_Home from 'src/containers/Home'
import src_containers_Talks from 'src/containers/Talks'
import src_containers_Writings from 'src/containers/Writings'
import src_containers_Research from 'src/containers/Research'

    export default class Routes extends Component {
      render () {
        return (
          <Switch>
              <Route exact path={'/'} component={src_containers_Home} />,
<Route exact path={'/talks'} component={src_containers_Talks} />,
<Route exact path={'/writings'} component={src_containers_Writings} />,
<Route exact path={'/research'} component={src_containers_Research} />
          </Switch>
        )
      }
    }
  