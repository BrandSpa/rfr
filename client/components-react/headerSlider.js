import React from 'react';

const HeaderSlider = React.createClass({
	getInitialState() {
		return {
			slide: 1
		}
	},

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({slide: this.state.slide + 1});
		}, 5000);
	},

	changeSlide(slideNum, e) {
		e.preventDefault();
		clearInterval(this.interval);
		this.setState({slide: slideNum});
	},

	render() {
		const { backgrounds, contents, content_html } = this.props;
		let left = `-${(this.state.slide - 1) * 100}%`;

		return (
			<div className="home_header">

				{backgrounds.map((bg, i) => 
					<div
						key={i}
						className={i == (this.state.slide - 1) ? "home_header__background home_header__background--active" : "home_header__background"}
						style={{ background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
					></div>
				)}

				<div className="col-md-7">
					<div className="home_header__contents" >
						<ul style={{left}}>
							{[1,2,3].map((num, i) =>
								<li key={i} className={i == 0 ? 'active' : ''}>
									<h1 className="home_header__title">
										{contents[num].title}
									</h1>
									<p className="home_header__content">
										{contents[num].content}
									</p>
								</li>
							)}
						</ul>
					</div>

					<div className="home_header__paginate">
						<a href="#" 
							onClick={this.changeSlide.bind(null, 1)} 
							className={this.state.slide == 1 ? 'active' : ''}> </a>
						<a href="#" 
							onClick={this.changeSlide.bind(null, 2)} 
							className={this.state.slide == 2 ? 'active' : ''}> </a>
						<a href="#" 
							onClick={this.changeSlide.bind(null, 3)} 
							className={this.state.slide == 3 ? 'active' : ''}> </a>
					</div>

				</div>

				<div className="col-md-2"></div>

				<div className="col-md-2">
					<div className="home_header__content_right">
						<div dangerouslySetInnerHTML={{__html: content_html}} />
					</div>
				</div>
			</div>
		)
	}
});

export default HeaderSlider;