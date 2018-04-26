class Cart extends React.Component {
constructor(props){
  super(props);
  console.log(this.props);
}
  render() {
  console.log('render');
    return (
      <CartView {...this.props} />
    );
  }
 shouldComponentUpdate(nextProps, nextState){
    console.log('nextProps.isOpen', nextProps.isOpen)
  return ((nextProps.isOpen && nextProps.items.length !== this.props.items) || nextProps.isOpen !== this.props.isOpen);
 }
}
