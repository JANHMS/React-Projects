class App extends React.Component {
  render() {
    return (
      <div>
        <Friend
        name="Jan"
        hobbies={['Saxo','Coding']}
        />
        <Friend
          name="Pia"
          hobbies={['Drawing', 'Painting']}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
