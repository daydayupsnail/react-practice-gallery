require('normalize.css/normalize.css');
require('styles/App.styl');

import React from 'react';

//获取图片数据，将图片名信息转成url路径
let imageDatas = require('../data/imgdata.json');

imageDatas = (function getImgUrl(imgDatasArr) {
  for(var i = 0,j = imgDatasArr.length; i<j; i++){
    var oneimgData = imgDatasArr[i];
    
    oneimgData.imgURL = require('../images/'+oneimgData.fileName);
    
    imgDatasArr[i] = oneimgData; //这是引用，可以不要，谨慎起见
  }
  return imgDatasArr;
})(imageDatas);


class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-src">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
