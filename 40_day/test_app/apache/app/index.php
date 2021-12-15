<?php

function debug($str) {
    echo '<pre>';
    var_dump($str);
    echo '</pre>';
    exit;
}
debug(phpinfo() );
