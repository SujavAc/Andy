<?php
include './config.php';
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 




$result = $conn->query("SELECT * FROM `coursedetail` WHERE Title='".$_POST['Title']."'"); 
?>

<?php if($result->num_rows > 0){ ?> 
     
    <?php while($row = $result->fetch_assoc()){ 
        
        ?>
        <?php
         $names[] = array(
            'ID'=> $row['ID'],
            'Title'=>$row['Title'],
            'Description'=>$row['Description'],
            'Feestructure'=>$row['Feestructure'],
            
            'CourseDuration'=>$row['CourseDuration'],
            'PRPathway'=>$row['PRPathway'],
            'Level'=>$row['Level'],
            'Carrerpathway'=>$row['Carrerpathway'],
        
        );
        
        ?>
       
     <?php } ?>
     <?php echo json_encode($names) ; 
     ?>
     
    
<?php }else{ ?> 
    <p class="status error">Data not found...</p> 
<?php } ?>

