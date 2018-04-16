class ProgressBar extends React.Component {
  constructor(props){
    super(props);
    this.completed = this.props.completed;
  }
  render() {
    return (
      <canvas id="progressCanvas" className="progress" />
    );
  }
  componentDidMount(){
    const canvas = document.querySelector('#progressCanvas');
    const canvasMethers = canvas.getBoundingClientRect();
    this.x = canvasMethers.width/2;
    this.y = canvasMethers.height/2;
    this.r1 = 45;
    this.r2 = 52;
    this.ringColorExt = '#4ca89a';
    this.ringColorInt = '#96d6f4';
    this.ringWidth = 7;
    this.ctx = canvas.getContext('2d');
    canvas.width = canvasMethers.width;
    canvas.height = canvasMethers.height;
    this.ctx.font = '30px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.lineWidth = this.ringWidth;
    this.draw();
  }

  draw(){
      let part = this.completed/this.props.total;
      this.ctx.beginPath();
      this.ctx.clearRect(0,0, this.x*2, this.y*2);

      this.ctx.arc(this.x,this.y,this.r2,0,2*Math.PI);
      this.ctx.strokeStyle = this.ringColorExt;
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.arc(this.x,this.y,this.r1,0,2*Math.PI*part);
      this.ctx.strokeStyle = this.ringColorInt;
      this.ctx.stroke();
      this.ctx.fillText(Math.ceil(part * 100)+ '%',this.x,this.y+10);
  }

  componentWillUpdate(){
    this.draw();
  }

  shouldComponentUpdate(nextProps, nextState){
    this.completed = nextProps.completed;
      return nextProps.completed !== this.props.completed;
  }
}
