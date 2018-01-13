<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package portfolio
 */

get_header(); ?>
	<?php include 'menu.php';?>
	<?php include 'frontpage.php';?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

		<?php
		if ( have_posts() ) :

			if ( is_home() && ! is_front_page() ) : ?>
				<header>
					<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
				</header>
				<div id="portfolio" class="section-title-container">
					<div class="section-title-before"></div>
					<h2 class="section-title">Portfolio</h2>
				</div>
				<div class="container">
					<div class="row">
						<div class="portfolio">
						<div class="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

					
						<?php
									endif;

									/* Start the Loop */
									while ( have_posts() ) : the_post();
									$query = new WP_Query( array( 'category_name' => 'portfolio' ) );

										/*
										* Include the Post-Format-specific template for the content.
										* If you want to override this in a child theme, then include a file
										* called content-___.php (where ___ is the Post Format name) and that will be used instead.
										*/
										get_template_part( 'template-parts/content', get_post_format() );

									endwhile;

									the_posts_navigation();

								else :

									get_template_part( 'template-parts/content', 'none' );

								endif; 
								?>
							</div>
						</div>
					</div>
				</div>
				<?php include 'process.php';?>
				<?php include 'about.php';?>
				<?php include 'contact.php';?>
			

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();