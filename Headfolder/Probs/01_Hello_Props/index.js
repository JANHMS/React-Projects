class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
        to="Ringo"
        from="Paul"
        num={3}
        data={[1,2,3,4,5]}
        ifFunny
        bangs={4}/>
        <Hello
        to="Cher"
        from="Sonny"
        bangs={10}
        img='https://hellopledge.files.wordpress.com/2012/07/hello_medium-file3.jpg'
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
