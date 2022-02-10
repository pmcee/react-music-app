import {useRoutes} from "react-router-dom";
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';
import NoMatch from '../application/NoMatch'

export default function Router() {  
  let routes = [
    {
      path: '/',
      element: <Home />,
      children: [
        {
          index: true,
          element: <Recommend />,
        },
        {
          path: '/rank',
          element: <Rank />,
        },
        {
          path: '/recommend',
          element: <Recommend />,
        },
        {
          path: '/singers',
          element: <Singers />,
        },
        {
          path: '*',
          element: <NoMatch />
        }
      ]
    }
  ];
  
  let element = useRoutes(routes);

  return element;
}