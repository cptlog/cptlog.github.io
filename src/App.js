import './style/main.css'

const links = [
  {
    name: 'home',
    url: '/a',
    key: 1
  },
  {
    name: 'bleugh',
    url: '/b',
    key: 2
  }
]

const Link = ({link}) => {
  return (
    <a href={link.url}><li>{link.name}</li></a>
  )
}

const Navigation = ({links}) => {
  return (
    <ul className='navigation'>
      {links.map(link =>
        <Link key={link.key} link={link} />
      )}
    </ul>
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
      <Navigation links={links} />
    </div>
  )
}

const Center = () => {
  return (
    <div className='container center'>
      under construction <a href="/">link</a>
    </div>
  )
}

const App = () => {
  const title = 'cptlog'

  return (
    <div className='app'>
      <Header title={title} />
      <Left />
      <Center />
    </div>
  )
}

export default App