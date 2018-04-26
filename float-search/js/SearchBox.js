class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
    this.scroll = () => {
        this.setState({
            fixed: this.isFixed()
        });
    }
    this.setPosition = this.scroll.bind(this)
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} />
  }

  isFixed() {
    let box = document.querySelector('.search-box').getBoundingClientRect();
    let header = document.querySelector('.header').getBoundingClientRect();
    console.log('header.bottom', header.bottom > 0)
    return (box.top <2 && header.bottom < 0);
  }

  componentDidMount(){
    document.addEventListener('scroll', this.setPosition);
  }
  componentWillUnmount(){
    document.removeEventListener('scroll', this.setPosition);
  }

}
