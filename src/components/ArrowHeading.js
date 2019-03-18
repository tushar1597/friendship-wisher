import React, { Component,Fragment } from 'react';
import '../styles/styles.css'
import $ from 'jquery'

class ArrowHeading extends Component {
componentDidMount(){
  $('#straight'+this.props.id).width(this.props.width);
  $('#arrow'+this.props.id).css({marginTop:this.props.marginTop});
  $('#straight'+this.props.id).css({marginTop:this.props.marginTop});
  let width = this.props.width.substr(0,this.props.width.indexOf('px'));
  let arrowPosition=((Number(width)+9).toString()+'px');
  document.getElementById("arrow"+this.props.id).style.left = arrowPosition;

}
  render() {
    return (
      <Fragment>

          <div id={'straight'+this.props.id}className="straight"><p className="arrow-content">{this.props.headingContent}</p></div><div id={'arrow'+this.props.id} className="arrow"></div>
      </Fragment>
    );
  }
}

export default ArrowHeading
