import _ from 'lodash';
import './style.css';
import Icon from './favicon.ico';
import Data from "./data.xml";
function component() {
    var element = document.createElement('div');

    //Lodash, currently included via a script, is required for this line to work.
    element.innerHTML = _.join(['Hello', 'webpack'],' ');
    element.classList.add('hello');

    //将图片添加到我们现有的div.
    var myIcon = new Image();
    myIcon.src = Icon;
    //element.appendChild(myIcon);

    //
    console.log(Data);
    return element;
}
document.body.appendChild(component());
