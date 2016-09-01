var React = require('react');
var reqwest = require('reqwest');
var reactMixinManager = require('react-mixin-manager');
var semanticUI = require('react-semantic-ui');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Hello world!</h1>
				<Home />
			</div>
		);
	}
});

var Home = React.createClass({
	handleSearch: function(e) {
		e.preventDefault();
		json = reqwest({
	        url: 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=2a24e8547c204bc5975d110569a6a2c5',
	        crossOrigin: true,
	        success: function (resp) {
	            console.log(resp)
	        },
	        complete: function() {

	        }
	    });
	},
	render: function() {
		return (
			<div>
				<div className="location-search-box">
	                <form onSubmit={this.handleSearch}>
	                    <input type="text" placeholder="Where are you looking for a hairstylists?" />
	                    <input type="submit" value="Search" />
	                </form>
	            </div>
				<div className="result-row">
					<div className="biz-main-image">
						<img src="http://s3-media2.fl.yelpcdn.com/bphoto/VhZVrD2K8oksYB4iIGLmog/90s.jpg" alt="Photo of the business" />
					</div>
				</div>
			</div>
		);
	}

});

module.exports = App;
