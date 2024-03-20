<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package makro
 */
// Theme settings options
$opt = get_option( 'makro_opt' );
if ( isset( $opt['is_header_sticky'] ) ) {
    $is_header_sticky = $opt['is_header_sticky'] == '1' ? ' sticky_header' : '';
} else {
    $is_header_sticky = ' sticky_header';
}

/**
 * Header Nav-bar Layout
 */
$header_column = !empty($opt['is_menu_btn'] ) ? '8' : '10';
$is_bottom_border = function_exists( 'get_field' ) ? get_field( 'is_bottom_border' ) : '';
$page_header_layout = function_exists( 'get_field' ) ? get_field( 'header_layout' ) : '';
if ( !empty($page_header_layout) && $page_header_layout != 'default' ) {
    $nav_layout = $page_header_layout;
} elseif ( !empty($_GET['menu']) ) {
    $nav_layout = $_GET['menu'];
} else {
    $nav_layout = !empty($opt['nav_layout']) ? $opt['nav_layout'] : '';
}

$nav_layout_start = '<div class="container">';
$nav_layout_header = '';
$nav_layout_end = '</div>';

switch ( $nav_layout ) {
    case 'boxed':
        $nav_layout_start  = '<div class="container">';
        $nav_layout_header = 'text-white d-flex align-items-center clearfix';
        $nav_layout_end    = '</div>';
        break;
    case 'full_width':
        $nav_layout_start  = '<div class="container w-1520">';
        $nav_layout_header = 'd-flex align-items-center clearfix';
        $nav_layout_end    = '</div>';
        break;
    default:
        $nav_layout_start  = '<div class="container">';
        $nav_layout_header = 'text-white d-flex align-items-center clearfix';
        $nav_layout_end    = '</div>';
        break;
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
		
		<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KV26WPG');</script>
<!-- End Google Tag Manager -->
		
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <?php wp_head(); ?>

        <!-- <link rel="stylesheet" href="<?php bloginfo('template_url') ?>/assets/css/style-custom.css"> -->

		
		<meta name="msvalidate.01" content="D3122402F2E40244CF82E8BCE9B6C005" />
	
		
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BigOhTech",
  "alternateName": "App Development & IT Staff Augmentation Company",
  "url": "https://bigohtech.com/",
  "logo": "https://bigohtech.com/wp-content/uploads/2023/04/bigoh-logo-1.webp",
  "sameAs": [
    "https://www.facebook.com/profile.php?id=100083562122922&mibextid=ZbWKwL",
    "https://twitter.com/Bigoh_Notation/",
    "https://www.linkedin.com/company/big-oh-tech",
    "https://www.youtube.com/channel/UCC8JJZ9hv-I_hKCfCuOcQbw"
  ]
}
</script>
		
    </head>
<body <?php body_class() ?>>
	
<?php
if ( function_exists('wp_body_open') ) {
    wp_body_open();
}
?>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KV26WPG"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<div class="body_wrap">
    <!-- backtotop - start -->
    <?php if ( !empty( $opt['is_back_to_top_icon'] ) ) :  ?>
        <div id="thetop"></div>
        <div id="backtotop">
            <a href="#" id="scroll">
                <!--<i class="fal fa-arrow-up"></i>
		<i class="fal fa-arrow-up"></i>-->
                <span> &uarr;</span>
            </a>
        </div>
    <?php endif; ?>
    <!-- backtotop - end -->

    <div class="header-top topmost-header-component">
        <div class="container">
            <div class="row align-items-center justify-content-end">
                <div class="col-lg-8 d-flex align-items-center justify-content-end">
                    <span class="header-top__enterpreneurs"><a href="https://bigohtech.com/free-it-consultation/">40 Hrs. Free IT Consulting</a></span>
                    <ul>
                       <!-- <li>
                            <span class="img"><img src="<?php bloginfo('template_url') ?>/assets/images/united-states.png" alt=""></span>
                            <span class="number"><a href="tel:+919310332298">+91-931 0332 298</a></span>
                        </li>
                        <li>
                            <span class="img"><img src="<?php bloginfo('template_url') ?>/assets/images/united-kingdom.png" alt=""></span>
                            <span class="number"><a href="tel:+9482563471">+9482 563471</a></span>
                        </li> -->
                        <li>
                            <span class="img"><img alt="whatsapp" src="<?php bloginfo('template_url') ?>/assets/images/whatsapp.webp" width="26" height="26"/></span>
                            <span class="number"><a href="https://wa.me/+919310332298" target="_blank">+91-931 0332 298</a></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    

    <!-- header_section - start
    ================================================== -->
    <header id="header_section" class="header_section <?php echo esc_attr( $nav_layout_header.$is_header_sticky) ?>  <?php echo esc_attr( $is_bottom_border == '1' ? 'border_bottom ' : '' ) ?>">
        <?php echo wp_kses_post($nav_layout_start); ?>
        <div class="row align-items-center">
            <!------------------ Logo ------------------------->
            <div class="col-lg-2 col-md-12">
                <?php get_template_part('template-parts/header_elements/logo'); ?>
            </div>
            <!------------------ Menu ------------------------->
            <div class="col-lg-<?php echo esc_attr($header_column) ?> col-md-12">
                <?php get_template_part('template-parts/header_elements/navbar'); ?>
            </div>
            <!------------------ Action Button ----------------->
            <?php get_template_part('template-parts/header_elements/buttons'); ?>
        </div>
        <?php echo wp_kses_post($nav_layout_end); ?>
    </header>
    <!-- header_section - end -->
	<!-- Script for tech-stack -->
	 <script> 
        document.addEventListener('DOMContentLoaded', function () {
            let tabListenerInterval;
            tabListenerInterval =setInterval(()=>{
                const techStackTabElement = document.querySelector('.slick-track');
                if(techStackTabElement){ 
                    techStackTabElement.addEventListener('click', function () { 
                        decorateTechStack();
                    });
                    clearInterval(tabListenerInterval);
                }
            },700);
			 decorateTechStack();
        });

        function decorateTechStack(){ 
            const techStackSlider = document.querySelector('.tech-stack-slider');
            if (techStackSlider) {
                let techStackInterval = null;
                techStackInterval = setInterval(() => {
                    const slickTrack = techStackSlider.querySelector('.slick-list .slick-track');
                    if (slickTrack) {
						const listWrapper = techStackSlider.getElementsByClassName('slick-list')[0];
                         listWrapper.style.height='auto'; 
                        const itemElementsInsideSlickTrack = slickTrack.querySelectorAll('.pr_list');
                        itemElementsInsideSlickTrack.forEach((itemElement) => { 
                            if (itemElement && itemElement.getAttribute('aria-hidden') === 'true') {
                                itemElement.style.display = 'none'; 
                            } else {   
                                itemElement.style.display = 'flex'; 
                            } 
							 itemElement.style.left = 'unset';
							 itemElement.style['z-index'] = 'unset'; 
                    		 itemElement.style.position = 'unset';
                        });
                        clearInterval(techStackInterval);
                    }
                }, 700);
            }
        }
    </script>
<?php

// Is Banner

$is_banner = true; // Default to display the banner

// Check if the current page URL matches any of the excluded patterns
$exclude_urls = array(
    '/hire-reactjs-developers/',
    '/hire-mean-stack-developers/',
    '/hire-mern-stack-developers/',
    '/hire-web-developers/',
    '/hire-front-end-developers/',
    '/hire-backend-developers/',
    '/hire-mobile-app-developers/',
    '/hire-android-app-developers/',
    '/hire-ios-app-developers/',
    '/hire-flutter-app-developers/',
    '/hire-devops-engineer/',
    '/hire-shopify-developer/',
    '/hire-ui-ux-designer/',
    '/hire-spring-boot-developer/',
    '/hire-html5-developers/',
    '/hire-python-developers/',
    '/hire-ai-ml-developer/',
    '/hire-angular-developers/',
    '/hire-dot-net-developers/',
    '/hire-nodejs-developers/',
    '/hire-software-developers/',
    '/hire-full-stack-developers/',
    '/fintech-app-development/',
    '/restaurant-app-development/',
    '/healthcare-app-development/',
    '/ecommerce-app-development/',
    '/on-demand-app-development/',
    '/saas-app-development/',
    '/media-entertainment-app-development/',
    '/ott-app-development/',
    '/social-media-app-development/',
    '/travel-app-development/',
    '/fitness-app-development/',
    '/fantasy-sports-app-development/',
    '/logistics-software-development/',
    '/real-estate-app-development/',
    '/grocery-app-development/',
    '/services/generative-ai-development/',
    '/electric-vehicle-software-development/',
    '/top-mobile-app-development-company-in-usa/',
    '/top-mobile-app-development-company-in-canada/',
    '/services/');

foreach ($exclude_urls as $exclude_url) {
    if (strpos($_SERVER['REQUEST_URI'], $exclude_url) === 0 || preg_match("~^" . preg_quote($exclude_url, "~") . "(?:/|$)~", $_SERVER['REQUEST_URI'])) {
        $is_banner = false; // Exclude the banner if the URL is in the exclusion list
        break;
    }
}
	if (is_front_page()) {
    $is_banner = false;
}
if ( is_404() || is_page_template('elementor_canvas') ) {
    $is_banner = false;
}

if ( !isset($_GET['elementor_library']) ) {
    if ( $is_banner ) {
        if ( !is_singular( 'post') ) {
            get_template_part('template-parts/header_elements/banner');
        } elseif ( is_singular( 'post') ) {
            get_template_part('template-parts/header_elements/banner-post');
        }
    }
}
