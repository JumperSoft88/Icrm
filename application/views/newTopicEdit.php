<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ทำดีทำด้วย</title> 
    <link rel="shortcut icon" type="image/x-icon" href="<?php echo base_url(); ?>assets/images/logo/logo.jpg" />
    <link rel="stylesheet" href="<?php echo base_url(); ?>node_modules/bootstrap/dist/css/bootstrap.min.css">

    <script src="<?php echo base_url(); ?>node_modules/jquery/dist/jquery.min.js"></script>
    <script src="<?php echo base_url(); ?>node_modules/bootstrap/dist/js/bootstrap.min.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
 
    <style>
        fieldset {
            background-color: rgba(220, 220, 220);
            border-radius: 4px;
        }

        legend {
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 4px;
            color: var(--header-color, red);;
            font-size: 17px;
            font-weight: bold;
            padding: 3px 5px 3px 7px;
            width: auto;
        } 
    </style>
</head>
<body> 
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #fffded;">
        <div class="container">
            <a class="navbar-brand" href="#"><img class="rounded-circle" src="<?php echo base_url(); ?>assets/images/logo/logo.jpg" alt="" srcset="" height="50px" width="100px"> </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto ">
                    <li class="nav-item ">
                        <a class="nav-link" href="<?php echo base_url(); ?>login">หน้าหลัก <span class="sr-only">(current)</span></a>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="#">เครือข่ายรับเรื่อง</a>
                    </li> -->
                    <li class="nav-item">
                        <a class="nav-link" href="<?php echo base_url(); ?>register">ลงทะเบียนผู้ใช้งาน</a>
                    </li>
                   
                    <li class="nav-item dropdown active">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        เรื่องร้องเรียน
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="<?php echo base_url(); ?>news">แจ้งเรื่องใหม่</a>
                        <!-- <a class="dropdown-item" href="#">แก้ไขเรื่องร้องเรียน</a>
                        <a class="dropdown-item" href="#">บันทึกเหตุการณ์ประจำวัน</a>
                          -->
                    </li> 
                </ul>

                <ul class="navbar-nav ml-auto">
                    <!-- <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-success" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        สวัสดี  <?php if(isset($_SESSION['username'])){ echo $_SESSION['username']; } ?>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown"> 
                            <a class="dropdown-item text-danger" href="<?php echo base_url(); ?>">ออกจากระบบ</a>
                        </div>
                    </li>
                    <?php if(!isset($_SESSION['username'])){ echo $_SESSION['username']; ?>
                        <li class="nav-item">
                            <a class="nav-link " href="http://localhost/courese/basic-login/login.php" tabindex="-1" aria-disabled="true">เข้าสู่ระบบ</a>
                        </li>
                    <?php } ?> 
                </ul> 
            </div>
        </div>
    </nav> 

    <div class="jumbotron">
        <div class="container text-center">
            <h2 class="display-4 text-primary">ยินดีต้อนรับเข้าระบบรับเรื่อง</h2>
            <p class="lead text-success">รับเรื่อง ร้องเรียน ร้องทุกข์ แจ้งเหตุการณ์ สถานการณ์ต่าง ๆ </p>
			<h2 class="display-4 text-primary">รายการ ทำดี ทำด้วย</h2>
			 <p class="lead text-success"> ทำดี ทำด้วย ช่วยกันทำ</p>
			 
             <div class="row">
                <div class="col"> </div>
                <div class="col text-right"><img  src="<?php echo base_url(); ?>assets/images/social/viber.png" alt="" srcset="" height="30px" width="30px"></div>
                <div class="col text-left text-danger" > <p class="lead"> 062-829-1000, 062-829-2000</p></div>
             
            </div>
        </div>
    </div>
 
    <div class="mt-5 ml-5 mr-4">

        <form action="<?php echo base_url(); ?>complaint/update/<?php echo $news_complaint->news_complaint_id; ?>" method="post">   
            <fieldset class="col-12 mt-2 col-md-12 px-3">
                <legend>(แก้ไข) กรุณากรอกรายละเอียดเกี่ยวกับเหตุการณ์อย่างละเอียด :</legend>
                <div class="row ">
                    <div class="form-group col-sm-9 col-lg-6">
                        <label class="pt-2" for="news_firstname">ชื่อ(ผู้แจ้ง)</label>
                        <input type="text" name="news_firstname" value="<?php echo $news_complaint->news_firstname; ?>" id="news_firstname" class="form-control">
                    </div>
                    <div class="form-group col-sm-9 col-lg-6">
                        <label class="pt-2" for="news_lastname">นามสกุล(ผู้แจ้ง)</label>
                        <input type="text" name="news_lastname" id="news_lastname" value="<?php echo $news_complaint->news_lastname; ?>" class="form-control">
                    </div>
                </div>
				<div class="row ">
                    <div class="form-group col-sm-9 col-lg-6">
                        <label class="pt-2" for="news_tel">เบอร์โทร(ผู้แจ้ง)</label>
                        <input type="text" name="tel" id="tel" value="<?php echo $news_complaint->news_tel; ?>" class="form-control">
                    </div> 
                </div>
                <div class="row ">
                    <div class="form-group col-sm-9 col-lg-6">
                        <label class="pt-2" for="locale_title">หัวข้อเกิดเหตุ</label>
                        <input type="text" name="locale_title" id="locale_title" value="<?php echo $news_complaint->locale_title; ?>" class="form-control">
                    </div> 
                    <div class="form-group col-sm-9 col-lg-6">
                        <label class="pt-2" for="channel">ช่องทาง</label>
                        <input type="text" name="channel" id="channel" value="<?php echo $news_complaint->channel; ?>" class="form-control">
                    </div>  
                </div>
                <div class="row ">
                    <div class="form-group col-sm-9 col-lg-6">
                        <label class="pt-2" for="locale_detail">รายละเอียดเหตุการณ์</label>
                        <textarea type="text" name="locale_detail" id="locale_detail"  class="form-control" rows="4" cols="50"><?php echo $news_complaint->locale_detail; ?></textarea>
                    </div> 
                </div>

                <!-- <div class="row ">
                    <div class="form-group col-sm-9 col-lg-6">
                        <label class="pt-2" for="police_station">สถานีตำรวจพื้นที่</label>
                        <input type="text" name="police_station" id="police_station" class="form-control">
                    </div>
                    <div class="form-group col-sm-9 col-lg-6"></div>
                </div> -->
                <div class="row ">
                    <div class="form-group col-sm-9 col-lg-6">
                        <label for="">ปัญหาหลัก</label>
                        <select name="category_id" id="category_id" class="form-control" >
                            <!-- <option value="">เลือกปัญหาหลัก</option> -->
                            <?php foreach ($_SESSION['category'] as $item) { ?>
                                <option value="<?=$item->category_id?>"><?php echo $item->category_name;?> </option>
                            <?php } ?>

                        </select>
                    </div> 
                    <!-- <div class="form-group col-sm-9 col-lg-6">
                        <label class="pt-2" for="sub_problem">ปัญหาย่อย</label>
                        <input type="text" name="sub_problem" id="sub_problem" value="" class="form-control">
                    </div>   -->
                </div>

                <div class="row ">
                    <div class="form-group col-sm-9 col-lg-6">
                        <label for="">สถานะปัญหา</label>
                        <select name="sub_category_id" id="sub_category_id" class="form-control" >
                          
                            <?php foreach ($_SESSION['subCategory'] as $item) { ?>
                                <option value="<?=$item->sub_category_id?>"><?php echo $item->sub_category_name;?> </option>
                            <?php } ?>
 
                        </select>
                    </div>
                </div>
                    
                <div class="row ">
                    <div class="form-group col-sm-9 col-lg-6">
                        <label class="pt-2" for="news_dated">วันที่เกิดเหตุ</label>
                        <input type="text" name="news_dated" id="news_dated" value="<?php echo $news_complaint->news_dated; ?>" class="form-control">
                    </div> 
                </div>
                <div class="row ">
                    <div class="form-group col-sm-9 col-lg-6">
                        <label class="pt-2" for="news_locale">สถานที่เกิดเหตุ</label>
                        <input type="text" name="news_locale" id="news_locale" value="<?php echo $news_complaint->news_locale; ?>" class="form-control">
                    </div> 
                </div>
                <div class="row ">
					<div class="form-group col-sm-9 col-lg-6">
                        <label class="pt-2" for="government">หน่วยงานรับผิดชอบ</label>
                        <input type="text" name="government" id="government" value="<?php echo $news_complaint->government; ?>" class="form-control">
                    </div> 
                    <div class="form-group col-sm-9 col-lg-6">
                        <label for="province">จังหวัด</label>
                        <select name="province_id" id="province" class="form-control" >
    
                            <?php foreach ($_SESSION['provinces'] as $item) { ?>
                                <option  value="<?=$item->id?>"><?php echo $item->name_th;?> </option>
                            <?php } ?>
                        </select>
                    </div>
                    <!-- <div class="form-group col-sm-9 col-lg-4">
                        <label for="">อำเภอ</label>
                        <select name="amphure_id" id="amphure" class="form-control" >
                            <option value="">เลือกอำเภอ</option>
                    
                        </select>
                    </div>
                    <div class="form-group col-sm-9 col-lg-4">
                        <label for="">ตำบล</label>
                        <select name="district_id" id="district" class="form-control" >
                            <option value="">เลือกตำบล</option>
                    
                        </select>
                    </div> -->
                </div>
                
                
            </fieldset>

            <div class="container text-center mt-3">
                <button class="btn btn-lg btn-primary" name="type" value="signup"><i class="fa fa-user"></i> บันทึก</button>
                <a href="<?php echo base_url(); ?>login" class="btn btn-danger btn-lg " role="button" aria-pressed="true">ยกเลิก</a>
            </div>

            <div class="card-body mt-5">
            
            </div>

        </form>
    </div>
        

    <!-- <div class="jumbotron">
        <div class="container text-center">
            <h1 class="display-4">Welcome to Porde</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        </div>
    </div> -->
    <script> 

    var category = '<?php echo $news_complaint->category_id ?>';
    var sub_category = '<?php echo $news_complaint->sub_category_id ?>'; 
    var province = '<?php echo $news_complaint->locale_province_id ?>';
 
    $("#category_id").val(category);
    $("#sub_category_id").val(sub_category);
    $("#province").val(province);

        $(function(){
            
            var provinceObject = $('#province');
            var amphureObject = $('#amphure');
            var districtObject = $('#district');
        
            // on change province
            provinceObject.on('change', function(){
                var provinceId = $(this).val(); 
         
                amphureObject.html('<option value="">เลือกอำเภอ</option>');
                districtObject.html('<option value="">เลือกตำบล</option>'); 
                $.ajax({ 
                    url: "<?php echo base_url(); ?>news/getAmphure",
                    method: "POST",
                    data:{provinceId : provinceId},
                    error: function() {
                        alert('Something is wrong');
                    },
                    success:function(data){
                        amphureObject.html(data);
 
                    }
                })
            });
        
            // on change amphure
            amphureObject.on('change', function(){
                var amphureId = $(this).val();
        
                districtObject.html('<option value="">เลือกตำบล</option>');
                
                $.ajax({
                    url: "<?php echo base_url(); ?>news/getDistrict",
                    method: "POST",
                    data:{amphureId : amphureId},
                    error: function() {
                        alert('Something is wrong');
                    },
                    success:function(data){
                        districtObject.html(data);

                      
                    }
                })
            });
        });
    </script>

  
</body>
</html>