import './style/main.css'
import { Router, Link } from 'wouter'
import PageRouter from './components/router.js'

const links = [
  {
    title: 'internal',
    id: 1,
    urls: [
      {
        name: 'home',
        url: '/',
        id: 1
      },
      {
        name: 'about me',
        url: '/about',
        id: 2
      }
    ]
  },
  {
    title: 'external',
    id: 2,
    urls: [
      {
        name: 'commissions',
        url: 'https://cptlog.carrd.co',
        id: 1
      },
      {
        name: 'ko-fi',
        url: 'https://ko-fi.com/cptlog',
        id: 2
      },
      {
        name: 'toyhou.se',
        url: 'https://toyhou.se/cacodemon',
        id: 3
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/CPTLOG',
        id: 4
      },
      {
        name: 'steam',
        url: 'https://steamcommunity.com/id/cptlog/',
        id: 5
      }
    ]
  }
]

const Category = ({title}) => {
  return (
    <div className='category'>
      {title}
    </div>
  )
}

const Navigation = ({links}) => {
  if (links.title !== 'internal') {
    return (
      <div className='navigation'>
        <Category title={links.title} />
        <ul>
          {links.urls.map(link =>
            <a key={link.name} href={link.url}>{link.name}</a>
          )}
        </ul>
      </div>
    )
  }

  return (
    <div className='navigation'>
      <Category title={links.title} />
      <ul>
        {links.urls.map(link =>
          <Link key={link.name} href={link.url}>{link.name}</Link>
        )}
      </ul>
    </div>
  )
}

const Header = ({title}) => {
  return (
    <div className='container header'>
      {title}
    </div>
  )
}

const Left = () => {
  return (
    <div className='left'>
      <Navigation links={links[0]} />
      <Navigation links={links[1]} />
    </div>
  )
}

const Center = () => {
  return (
    <div className='container center'>
      <PageRouter />
    </div>
  )
}

const App = () => {
  const title = 'cptlog'

  return (
    <Router>
      <div className='app'>
        <Header title={title} />
        <Left />
        <Center />
      </div>
    </Router>
  )
}

export default App