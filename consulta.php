<?php



header('Content-type:application/json; charset:utf-8');

include_once "conexion.php";

$objeto = new Conexion();

$conexion= $objeto->Conectar();

//if (isset($_POST["telefono"],$_POST["email"]) and $_POST["telefono"] !="" and $_POST["email"] !=""){

$titular = $_POST["edad_1"];

$conyuge = $_POST["edad_2"];

$hijo1 = $_POST["hijo_1"];

$hijo2 = $_POST["hijo_2"];

$grupogaleno = $_POST["edadIdGaleno"];

$grupopremedic = $_POST["edadIdPremedic"];

$hijomenos1premedic = $_POST["hijoIdmenor1preme"];

$hijomenos25premedic = $_POST["hijoIdmenor25preme"];

$titularOmint = $_POST["edad_1_Omint"];

$conyugeOmint = $_POST["edad_2_Omint"];

$hijo1Omint = $_POST["hijo_1_Omint"];

$hijo2Omint = $_POST["hijo_2_Omint"];









// //}


// SanCor
$consultatitular = "SELECT sancor700A, sancor1000Bcc, sancor1500Bcc, sancor800V, sancor1000B, sancor1500B, sancor3000B, sancor3500, sancor4000, sancor4500, sancor5000, sancor6000 FROM precios_sancor WHERE Edad =  '$titular'";

$consultaconyuge = "SELECT sancor700A, sancor1000Bcc, sancor1500Bcc, sancor800V, sancor1000B, sancor1500B, sancor3000B, sancor3500, sancor4000, sancor4500, sancor5000, sancor6000  FROM precios_sancor WHERE Edad =  '$conyuge'";

$consultahijo1 = "SELECT sancor700A, sancor1000Bcc, sancor1500Bcc, sancor800V, sancor1000B, sancor1500B, sancor3000B, sancor3500, sancor4000, sancor4500, sancor5000, sancor6000  FROM precios_sancor WHERE Edad =  '$hijo1'";

$consultahijo2 = "SELECT sancor700A, sancor1000Bcc, sancor1500Bcc, sancor800V, sancor1000B, sancor1500B, sancor3000B, sancor3500, sancor4000, sancor4500, sancor5000, sancor6000  FROM precios_sancor WHERE Edad =  '$hijo2'";

// Galeno
$consultagaleno = "SELECT galenoPlan_220, galenoPlan_330, galenoPlan_440, galenoPlan_550 FROM precios_galeno WHERE edad = '$grupogaleno'";

// Premedic
$consultapremedictit = "SELECT premedPlan_C100, premedPlan_200, premedPlan_300, premedPlan_400, premedPlan_500 FROM precios_premedic WHERE edad = '$grupopremedic'";

$consultapremedichijo1 = "SELECT premedPlan_C100, premedPlan_200, premedPlan_300, premedPlan_400, premedPlan_500 FROM precios_premedic WHERE edad = '$hijomenos1premedic'";

$consultapremedichijo25 = "SELECT premedPlan_C100, premedPlan_200, premedPlan_300, premedPlan_400, premedPlan_500 FROM precios_premedic WHERE edad = '$hijomenos25premedic'";


// Omint
$consultaominttitular = "SELECT omint_Plan_1500_22, omint_Plan_1500_22S, omint_Plan_2500_24, omint_Plan_2500_24S, omint_Plan_4021_22, omint_Plan_4021_22S, omint_Plan_4500_23, omint_Plan_4500_23S, omint_Plan_4500_24, omint_Plan_4500_24S, omint_Plan_6500_21, omint_Plan_6500_21S, omint_Plan_6500_22, omint_Plan_6500_22S, omint_Plan_8500_21, omint_Plan_8500_21S, omint_Plan_8500_22, omint_Plan_8500_22S, omint_Plan_Midoc_10, omint_Plan_Midoc_10S FROM precios_omint WHERE  Edad = '$titularOmint'";

$consultaomintconyuge = "SELECT omint_Plan_1500_22, omint_Plan_1500_22S, omint_Plan_2500_24, omint_Plan_2500_24S, omint_Plan_4021_22, omint_Plan_4021_22S, omint_Plan_4500_23, omint_Plan_4500_23S, omint_Plan_4500_24, omint_Plan_4500_24S, omint_Plan_6500_21, omint_Plan_6500_21S, omint_Plan_6500_22, omint_Plan_6500_22S, omint_Plan_8500_21, omint_Plan_8500_21S, omint_Plan_8500_22, omint_Plan_8500_22S, omint_Plan_Midoc_10, omint_Plan_Midoc_10S FROM precios_omint WHERE Edad = '$conyugeOmint'";

$consultaominthijo1 = "SELECT omint_Plan_1500_22, omint_Plan_1500_22S, omint_Plan_2500_24, omint_Plan_2500_24S, omint_Plan_4021_22, omint_Plan_4021_22S, omint_Plan_4500_23, omint_Plan_4500_23S, omint_Plan_4500_24, omint_Plan_4500_24S, omint_Plan_6500_21, omint_Plan_6500_21S, omint_Plan_6500_22, omint_Plan_6500_22S, omint_Plan_8500_21, omint_Plan_8500_21S, omint_Plan_8500_22, omint_Plan_8500_22S, omint_Plan_Midoc_10, omint_Plan_Midoc_10S FROM precios_omint WHERE Edad = '$hijo1Omint'";

$consultaominthijo2 = "SELECT omint_Plan_1500_22, omint_Plan_1500_22S, omint_Plan_2500_24, omint_Plan_2500_24S, omint_Plan_4021_22, omint_Plan_4021_22S, omint_Plan_4500_23, omint_Plan_4500_23S, omint_Plan_4500_24, omint_Plan_4500_24S, omint_Plan_6500_21, omint_Plan_6500_21S, omint_Plan_6500_22, omint_Plan_6500_22S, omint_Plan_8500_21, omint_Plan_8500_21S, omint_Plan_8500_22, omint_Plan_8500_22S, omint_Plan_Midoc_10, omint_Plan_Midoc_10 FROM precios_omint WHERE Edad = '$hijo2Omint'";





$resultadotitular = $conexion->prepare($consultatitular);

$resultadotitular -> execute();

$datatitular = $resultadotitular->fetchALL(PDO::FETCH_ASSOC);



$resultadoconyuge = $conexion->prepare($consultaconyuge);

$resultadoconyuge -> execute();

$dataconyuge = $resultadoconyuge->fetchALL(PDO::FETCH_ASSOC);





$resultadohijo1 = $conexion->prepare($consultahijo1);

$resultadohijo1 -> execute();

$datahijo1 = $resultadohijo1->fetchALL(PDO::FETCH_ASSOC);



$resultadohijo2 = $conexion->prepare($consultahijo2);

$resultadohijo2 -> execute();

$datahijo2 = $resultadohijo2->fetchALL(PDO::FETCH_ASSOC);


$resultadogaleno = $conexion->prepare($consultagaleno);

$resultadogaleno -> execute();

$datagaleno = $resultadogaleno->fetchALL(PDO::FETCH_ASSOC);

$resultadopremedictit = $conexion->prepare($consultapremedictit);

$resultadopremedictit -> execute();

$datapretit = $resultadopremedictit->fetchALL(PDO::FETCH_ASSOC);



$resultadopremedichijo1 = $conexion->prepare($consultapremedichijo1);

$resultadopremedichijo1 -> execute();

$dataprehijo1 = $resultadopremedichijo1->fetchALL(PDO::FETCH_ASSOC);


$resultadopremedichijo25 = $conexion->prepare($consultapremedichijo25);

$resultadopremedichijo25 -> execute();

$dataprehijo25 = $resultadopremedichijo25->fetchALL(PDO::FETCH_ASSOC);

// OMINT

$resultadoominttitular = $conexion->prepare($consultaominttitular);

$resultadoominttitular -> execute();

$dataominttitular = $resultadoominttitular->fetchALL(PDO::FETCH_ASSOC);


$resultadoomintconyuge = $conexion->prepare($consultaomintconyuge);

$resultadoomintconyuge -> execute();

$dataimintconyuge = $resultadoomintconyuge->fetchALL(PDO::FETCH_ASSOC);


$resultadoominthijo1 = $conexion->prepare($consultaominthijo1);

$resultadoominthijo1 -> execute();

$dataominthijo1 = $resultadoominthijo1->fetchALL(PDO::FETCH_ASSOC);


$resultadoominthijo2 = $conexion->prepare($consultaominthijo2);

$resultadoominthijo2 -> execute();

$dataominthijo2 = $resultadoominthijo2->fetchALL(PDO::FETCH_ASSOC);


   
// print json_encode([$datahijo1,$datahijo2,$datatitular,$dataconyuge]);

print json_encode([$datahijo1,$datahijo2,$datatitular,$dataconyuge,$datagaleno,$datapretit,$dataprehijo1,$dataprehijo25,$dataominttitular,$dataimintconyuge,$dataominthijo1,$dataominthijo2]);



// print json_encode([$datahijo1,$datahijo2,$datatitular,$dataconyuge,$datagaleno,$datapretit,$dataprehijo1,$dataprehijo25]);













?>