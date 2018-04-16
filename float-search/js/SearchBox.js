class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} />
  }

  isFixed() {
    let box = document.querySelector('.search-box').getBoundingClientRect();
    console.log('box', box.top <2);
    return (box.top <2);
  }

  setPosition() {
    this.setState({
        fixed: this.isFixed()
    });
  }
  componentDidMount(){
    document.addEventListener('scroll', this.setPosition.bind(this));
  }
  componentWillUnmount(){
    document.removeEventListener('scroll', this.setPosition.bind(this));
  }

}
