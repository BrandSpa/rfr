import React from 'react';
/**
 * 		<?php if(is_array( explode(',', $at['backgrounds']) )): ?>
 *  <?php  foreach(explode(',', $at['backgrounds']) as $key => $imageId):  ?>
 <?php echo wp_get_attachment_image_src($imageId, 'full')[0] ?>
				<?php endforeach; ?>
  <?php endif; ?>
		content_html: <?php echo apply_filters('the_content', $content); ?>
		"contents" => [
			1 => [
				"title" => $at['title_1'],
				"content" => $at['content_1']
			]
		]
 */

const HeaderSlider = React.createClass({
	render() {
		const { backgrounds } = this.props;
		return (
			<div class="home_header" data-interval="<?php echo $at['interval'] ?>" data-autoplay="true" >

				{backgrounds.map((bg, i) => {
					<div
						class="home_header__background <?php if($key == 0) echo 'home_header__background--active' ?>"
						data-index="<?php echo $key ?>"
						style={{ background: 'url()', backgroundSize: 'cover', backgroundPosition: 'center' }}
					></div>
				})}

				<div class="col-md-7">
					<div class="home_header__contents" >
						<ul>
							<li data-index="0" class="active">
								<h1 class="home_header__title">
									{contents[1].title}
								</h1>
								<p class="home_header__content">
									{contents[1].content}
								</p>
							</li>

							<li>
								<h1 class="home_header__title">
									{contents[2].title}
								</h1>
								<p class="home_header__content">
									{contents[2].content}
								</p>
							</li>

							<li>
								<h1 class="home_header__title">
									{contents[3].title}
								</h1>
								<p class="home_header__content">
									{contents[3].content}
								</p>
							</li>
						</ul>
					</div>

					<div class="home_header__paginate">
						<a href="#" class="active" data-index="0"></a>
						<a href="#" data-index="1"></a>
						<a href="#" data-index="2"></a>
					</div>

				</div>

				<div class="col-md-2"></div>

				<div class="col-md-2">
					<div class="home_header__content_right">
					// content html
					</div>
				</div>
			</div>
		)
	}
});