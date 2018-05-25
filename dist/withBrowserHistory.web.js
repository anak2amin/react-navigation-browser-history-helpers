Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='es6/withBrowserHistory.web.js';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.default=withBroserHistory;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reducer=require('./reducer');var _reducer2=_interopRequireDefault(_reducer);var _history=require('history');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function withBroserHistory(Navigator){var _class,_temp;var Wrapper=(_temp=_class=function(_Component){_inherits(Wrapper,_Component);function Wrapper(props){_classCallCheck(this,Wrapper);var _this=_possibleConstructorReturn(this,(Wrapper.__proto__||Object.getPrototypeOf(Wrapper)).call(this,props));_this.state={nav:null};_this.setNavFromPath=function(path){var action=Navigator.router.getActionForPathAndParams(path);_this.setState({nav:Navigator.router.getStateForAction(action)});};_this.dispatch=function(action){var oldState=_this.state.nav;var _this$props=_this.props,basePath=_this$props.basePath,uriPrefix=_this$props.uriPrefix;var newState=_this.reducer(_this.history,oldState,action,basePath);_this.triggerAllSubscribers(_this.subscribers,{type:'action',action:action,state:oldState,lastState:newState});_this.setState({nav:newState});return newState;};_this.addListener=function(eventName,handler){if(eventName!=='action'){return{remove:function remove(){}};}_this.subscribers.push(handler);return{remove:function remove(){var index=_this.subscribers.indexOf(handler);if(index>-1){_this.subscribers.splice(index,1);}}};};_this.subscribers=[];_this.history=null;_this.reducer=(0,_reducer2.default)(Navigator);return _this;}_createClass(Wrapper,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;var uriPrefix=this.props.uriPrefix;var initialPath=window.location.href.replace(uriPrefix,'');this.history=(0,_history.createBrowserHistory)();this.setNavFromPath(initialPath);this.history.listen(function(location,action){if(action==="POP"){var pathname=location.pathname,search=location.search;var path=(pathname+search).slice(1);var navigationAction=Navigator.router.getActionForPathAndParams(path);_this2.dispatch(_extends({},navigationAction,{dontPushHistory:true}));}});}},{key:'render',value:function render(){var navigation={dispatch:this.dispatch,state:this.state.nav,addListener:this.addListener};if(!this.state.nav)return null;return _react2.default.createElement(Navigator,{navigation:navigation,__source:{fileName:_jsxFileName,lineNumber:73}});}},{key:'triggerAllSubscribers',value:function triggerAllSubscribers(subscribers,payload){subscribers.forEach(function(subscriber){return subscriber(payload);});}}]);return Wrapper;}(_react.Component),_class.defaultProps={basePath:''},_temp);return Wrapper;}