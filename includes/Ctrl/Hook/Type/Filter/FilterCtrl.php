<?php
namespace OzoPanel\Ctrl\Hook\Type\Filter;

use OzoPanel\Ctrl\Hook\Type\Filter\Type\AdminColumn;
use OzoPanel\Ctrl\Hook\Type\Filter\Type\NavMenu;

/**
 * WP Filter hook
 *
 * @since 1.0.0
 */
class FilterCtrl
{
    public function __construct()
    {
        new NavMenu();
        new AdminColumn();
        add_filter("body_class", [$this, "body_class"]);
        add_filter("admin_body_class", [$this, "admin_body_class"]);
    }

    function body_class($classes)
    {
        if (
            is_page_template([
                "test-template.php"
            ])
        ) {
            $classes[] = "ozopanel";
            $classes[] = get_option("template") . "-theme";
        }
        return $classes;
    }

    function admin_body_class($classes)
    {
        if (
            (isset($_GET["page"]) && $_GET["page"] == "ozopanel") ||
            (isset($_GET["page"]) && $_GET["page"] == "ozopanel-welcome")
        ) {
            $classes .= " ozopanel " . get_option("template") . "-theme";
        }

        return $classes;
    }

}
