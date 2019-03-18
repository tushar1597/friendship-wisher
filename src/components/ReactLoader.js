import React from 'react';
import { ScaleLoader } from 'react-spinners';

class ReactLoader extends React.Component {

  render() {
    return (
      <div className='ReactLoader-container'>
      <div className='sweet-loading'>
        <ScaleLoader
          color={'#975BA1'}
          loading={true}
        />
      </div>
    </div>
    )
  }
}
export default ReactLoader;
