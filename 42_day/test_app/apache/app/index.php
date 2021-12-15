<?php
//ИСКЛЮЧЕНИЯ
class testArr {
    public function testcheck($value){
        try {
            if (!is_array($value)){
                throw new Exception('Не массив');
            }
            foreach ($value as $item){
                echo $item . "</br>";
            }
            try {
                if (!is_numeric($value)){
                    throw new Exception("Не число");
                }
                echo $value;
            }
            catch (Exception $e){
                echo 'Выброшено исключение: ',  $e->getMessage(), "\n";
            }
        }
        catch (Exception $e){
            echo 'Выброшено исключение: ',  $e->getMessage(), "\n";
        }
    }
}

$arr = new testArr();
$arr->testcheck(array(1,2,3));


echo "</br>";
//ГЕНЕРАТОРЫ

function generation($from, $too){
    for ($i = $from; $i < $too; $i++){
        echo "$i - ";
        yield($i);
    }

}
foreach (generation(1,10) as $items){
    echo 'удвоим' . ($items * 2) . '</br>';
    //удвоим
}


