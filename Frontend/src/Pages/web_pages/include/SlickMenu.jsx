const SlickMenu=()=>{
    return(
        <>
         <div className="slicknav_menu">
                <a
                    href="#"
                    aria-haspopup="true"
                    tabIndex={0}
                    className="slicknav_btn slicknav_collapsed"
                    style={{}}
                >
                    <span className="slicknav_menutxt">MENU</span>
                    <span className="slicknav_icon">
                        <span className="slicknav_icon-bar" />
                        <span className="slicknav_icon-bar" />
                        <span className="slicknav_icon-bar" />
                    </span>
                </a>
                <ul
                    className="slicknav_nav slicknav_hidden"
                    style={{ touchAction: "pan-y", display: "none" }}
                    aria-hidden="true"
                    role="menu"
                >
                    <li className="current slicknav_collapsed slicknav_parent">
                        <a
                            href="#"
                            role="menuitem"
                            aria-haspopup="true"
                            tabIndex={-1}
                            className="slicknav_item slicknav_row"
                            style={{}}
                        />
                        <a href="#" className="sf-with-ul" tabIndex={-1}>
                            Home
                        </a>
                        <span className="slicknav_arrow">→</span>
                        <ul
                            style={{ display: "none" }}
                            role="menu"
                            className="slicknav_hidden"
                            aria-hidden="true"
                        >
                            <li>
                                <a href="index.html" role="menuitem" tabIndex={-1}>
                                    Home 1
                                </a>
                            </li>
                            <li>
                                <a href="index2.html" role="menuitem" tabIndex={-1}>
                                    Home 2
                                </a>
                            </li>
                            <li>
                                <a href="index3.html" role="menuitem" tabIndex={-1}>
                                    Home 3
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="slicknav_collapsed slicknav_parent">
                        <a
                            href="#"
                            role="menuitem"
                            aria-haspopup="true"
                            tabIndex={-1}
                            className="slicknav_item slicknav_row"
                            style={{}}
                        />
                        <a href="#" className="sf-with-ul" tabIndex={-1}>
                            Pages
                        </a>
                        <span className="slicknav_arrow">→</span>
                        <ul
                            style={{ display: "none" }}
                            role="menu"
                            className="slicknav_hidden"
                            aria-hidden="true"
                        >
                            <li className="slicknav_collapsed slicknav_parent">
                                <a
                                    href="#"
                                    role="menuitem"
                                    aria-haspopup="true"
                                    tabIndex={-1}
                                    className="slicknav_item slicknav_row"
                                    style={{}}
                                />
                                <a href="#" className="sf-with-ul" tabIndex={-1}>
                                    Services
                                </a>
                                <span className="slicknav_arrow">→</span>
                                <ul
                                    style={{ display: "none" }}
                                    role="menu"
                                    aria-hidden="true"
                                    className="slicknav_hidden"
                                >
                                    <li>
                                        <a href="services1.html" role="menuitem" tabIndex={-1}>
                                            Services 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="services2.html" role="menuitem" tabIndex={-1}>
                                            Services 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="services3.html" role="menuitem" tabIndex={-1}>
                                            Services 3
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="slicknav_collapsed slicknav_parent">
                                <a
                                    href="#"
                                    role="menuitem"
                                    aria-haspopup="true"
                                    tabIndex={-1}
                                    className="slicknav_item slicknav_row"
                                    style={{}}
                                />
                                <a href="#" className="sf-with-ul" tabIndex={-1}>
                                    About Us
                                </a>
                                <span className="slicknav_arrow">→</span>
                                <ul
                                    style={{ display: "none" }}
                                    role="menu"
                                    aria-hidden="true"
                                    className="slicknav_hidden"
                                >
                                    <li>
                                        <a href="about1.html" role="menuitem" tabIndex={-1}>
                                            About Us 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="about2.html" role="menuitem" tabIndex={-1}>
                                            About Us 2
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="page-left-sidebar.html" role="menuitem" tabIndex={-1}>
                                    Page Left Sidebar
                                </a>
                            </li>
                            <li>
                                <a href="page-right-sidebar.html" role="menuitem" tabIndex={-1}>
                                    Page Right Sidebar
                                </a>
                            </li>
                            <li>
                                <a href="faq.html" role="menuitem" tabIndex={-1}>
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="404.html" role="menuitem" tabIndex={-1}>
                                    404
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="slicknav_collapsed slicknav_parent">
                        <a
                            href="#"
                            role="menuitem"
                            aria-haspopup="true"
                            tabIndex={-1}
                            className="slicknav_item slicknav_row"
                            style={{}}
                        />
                        <a href="#" className="sf-with-ul" tabIndex={-1}>
                            Shortcodes
                        </a>
                        <span className="slicknav_arrow">→</span>
                        <ul
                            style={{ display: "none" }}
                            role="menu"
                            className="slicknav_hidden"
                            aria-hidden="true"
                        >
                            <li className="slicknav_collapsed slicknav_parent">
                                <a
                                    href="#"
                                    role="menuitem"
                                    aria-haspopup="true"
                                    tabIndex={-1}
                                    className="slicknav_item slicknav_row"
                                    style={{}}
                                />
                                <a href="#" className="sf-with-ul" tabIndex={-1}>
                                    HTML
                                </a>
                                <span className="slicknav_arrow">→</span>
                                <ul
                                    style={{ display: "none" }}
                                    role="menu"
                                    aria-hidden="true"
                                    className="slicknav_hidden"
                                >
                                    <li>
                                        <a href="shortcodes-columns.html" role="menuitem" tabIndex={-1}>
                                            Columns
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="shortcodes-typography.html"
                                            role="menuitem"
                                            tabIndex={-1}
                                        >
                                            Typography
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shortcodes-alerts.html" role="menuitem" tabIndex={-1}>
                                            Alerts
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="shortcodes-blockquotes.html"
                                            role="menuitem"
                                            tabIndex={-1}
                                        >
                                            Blockquotes
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shortcodes-buttons.html" role="menuitem" tabIndex={-1}>
                                            Buttons
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="shortcodes-icon-boxes.html"
                                            role="menuitem"
                                            tabIndex={-1}
                                        >
                                            Icon Boxes
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="slicknav_collapsed slicknav_parent">
                                <a
                                    href="#"
                                    role="menuitem"
                                    aria-haspopup="true"
                                    tabIndex={-1}
                                    className="slicknav_item slicknav_row"
                                    style={{}}
                                />
                                <a href="#" className="sf-with-ul" tabIndex={-1}>
                                    Interactive
                                </a>
                                <span className="slicknav_arrow">→</span>
                                <ul
                                    style={{ display: "none" }}
                                    role="menu"
                                    aria-hidden="true"
                                    className="slicknav_hidden"
                                >
                                    <li>
                                        <a
                                            href="shortcodes-accordions.html"
                                            role="menuitem"
                                            tabIndex={-1}
                                        >
                                            Accordions
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="shortcodes-call-to-actions.html"
                                            role="menuitem"
                                            tabIndex={-1}
                                        >
                                            Call to Actions
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="shortcodes-pricing-tables.html"
                                            role="menuitem"
                                            tabIndex={-1}
                                        >
                                            Pricing Tables
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="slicknav_collapsed slicknav_parent">
                                <a
                                    href="#"
                                    role="menuitem"
                                    aria-haspopup="true"
                                    tabIndex={-1}
                                    className="slicknav_item slicknav_row"
                                    style={{}}
                                />
                                <a href="#" className="sf-with-ul" tabIndex={-1}>
                                    Javascript
                                </a>
                                <span className="slicknav_arrow">→</span>
                                <ul
                                    style={{ display: "none" }}
                                    role="menu"
                                    aria-hidden="true"
                                    className="slicknav_hidden"
                                >
                                    <li>
                                        <a href="shortcodes-counters.html" role="menuitem" tabIndex={-1}>
                                            Counters
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="shortcodes-progressbars.html"
                                            role="menuitem"
                                            tabIndex={-1}
                                        >
                                            Progress Bars
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shortcodes-tabs.html" role="menuitem" tabIndex={-1}>
                                            Tabs
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="slicknav_collapsed slicknav_parent">
                        <a
                            href="#"
                            role="menuitem"
                            aria-haspopup="true"
                            tabIndex={-1}
                            className="slicknav_item slicknav_row"
                            style={{}}
                        />
                        <a href="#" className="sf-with-ul" tabIndex={-1}>
                            Shop
                        </a>
                        <span className="slicknav_arrow">→</span>
                        <ul
                            style={{ display: "none" }}
                            role="menu"
                            className="slicknav_hidden"
                            aria-hidden="true"
                        >
                            <li>
                                <a href="shop-category.html" role="menuitem" tabIndex={-1}>
                                    Shop Category Right Sidebar
                                </a>
                            </li>
                            <li>
                                <a
                                    href="shop-category-left-sidebar.html"
                                    role="menuitem"
                                    tabIndex={-1}
                                >
                                    Shop Category Left Sidebar
                                </a>
                            </li>
                            <li>
                                <a href="shop-category-full-width.html" role="menuitem" tabIndex={-1}>
                                    Shop Category Full Width
                                </a>
                            </li>
                            <li>
                                <a href="shop-single.html" role="menuitem" tabIndex={-1}>
                                    Shop Single
                                </a>
                            </li>
                            <li>
                                <a href="shop-cart.html" role="menuitem" tabIndex={-1}>
                                    Shop Cart
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="slicknav_collapsed slicknav_parent">
                        <a
                            href="#"
                            role="menuitem"
                            aria-haspopup="true"
                            tabIndex={-1}
                            className="slicknav_item slicknav_row"
                            style={{}}
                        />
                        <a href="#" className="sf-with-ul" tabIndex={-1}>
                            Projects
                        </a>
                        <span className="slicknav_arrow">→</span>
                        <ul
                            style={{ display: "none" }}
                            role="menu"
                            className="slicknav_hidden"
                            aria-hidden="true"
                        >
                            <li>
                                <a
                                    href="projects-isotope-full-width.html"
                                    role="menuitem"
                                    tabIndex={-1}
                                >
                                    Isotope Full Width
                                </a>
                            </li>
                            <li>
                                <a href="projects-isotope-boxed.html" role="menuitem" tabIndex={-1}>
                                    Isotope Boxed
                                </a>
                            </li>
                            <li>
                                <a
                                    href="projects-image-gallery-full-width.html"
                                    role="menuitem"
                                    tabIndex={-1}
                                >
                                    Image Gallery Full Width
                                </a>
                            </li>
                            <li>
                                <a
                                    href="projects-image-gallery-boxed.html"
                                    role="menuitem"
                                    tabIndex={-1}
                                >
                                    Image Gallery Boxed
                                </a>
                            </li>
                            <li>
                                <a href="projects-single-1.html" role="menuitem" tabIndex={-1}>
                                    Project Single Slider
                                </a>
                            </li>
                            <li>
                                <a href="projects-single-2.html" role="menuitem" tabIndex={-1}>
                                    Project Single Carousel
                                </a>
                            </li>
                            <li>
                                <a href="projects-single-3.html" role="menuitem" tabIndex={-1}>
                                    Project Single Gallery
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="slicknav_collapsed slicknav_parent">
                        <a
                            href="#"
                            role="menuitem"
                            aria-haspopup="true"
                            tabIndex={-1}
                            className="slicknav_item slicknav_row"
                            style={{}}
                        />
                        <a href="#" className="sf-with-ul" tabIndex={-1}>
                            Blog
                        </a>
                        <span className="slicknav_arrow">→</span>
                        <ul
                            style={{ display: "none" }}
                            role="menu"
                            className="slicknav_hidden"
                            aria-hidden="true"
                        >
                            <li>
                                <a href="blog-category.html" role="menuitem" tabIndex={-1}>
                                    Category
                                </a>
                            </li>
                            <li>
                                <a href="blog-single.html" role="menuitem" tabIndex={-1}>
                                    Single
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="contact.html" role="menuitem" tabIndex={-1}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SlickMenu