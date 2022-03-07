// TODO
var App = () => (
  <div>
    <h2>GroceryList</h2>
    <GroceryList items = {['cucumber', 'kale']} />
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
    <GroceryListItem item={item} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onMouseEnter() {
    this.setState({
      done: true
    })
  }

  onMouseLeave() {
    this.setState({
      done: false
    })
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };


    return (
      <li style={style} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>{this.props.item}</li>
    );
  };

}


ReactDOM.render(<App />, document.getElementById("app"));

