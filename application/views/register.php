<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ทำดีทำด้วย</title> 
    <link rel="shortcut icon" type="image/x-icon" href="<?php echo base_url(); ?>assets/images/logo/logo.jpg" />
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">

    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script> 
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
                    <li class="nav-item">
                        <a class="nav-link" href="<?php echo base_url(); ?>report">รายงาน</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="<?php echo base_url(); ?>register">ลงทะเบียนสมาชิก</a>
                    </li>
                   
                    <li class="nav-item dropdown ">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        เรื่องร้องเรียน
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="<?php echo base_url(); ?>news">แจ้งเรื่องใหม่</a>
                        <!-- <a class="dropdown-item" href="#">แก้ไขเรื่องร้องเรียน</a>
                        <a class="dropdown-item" href="#">บันทึกเหตุการณ์ประจำวัน</a> -->
                         
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
               <!-- <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> -->
            </div>
        </div>
    </nav> 

    <div class="jumbotron">
        <div class="container text-center">
            <h2 class="display-4 text-primary">ยินดีต้อนรับเข้าระบบ บันทึกผู้ใช้</h2>
            <p class="lead text-success">รับเรื่องร้องเรียนร้องทุกข์ แจ้งเหตุการณ์ สถานการณ์ต่าง ๆ </p>
        </div>
    </div>


    <?php if(isset($message)){   ?>
        <script>
            $(document).ready(function(){
                $("#myModal").modal('show');
            });
        </script>

        <!--?php
            include ("template/topmenu.php");
        ?-->
        <div class="modal" id="myModal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <p><?php echo $message ?></p>
                    </div>
                </div>
            </div>
        </div>
    <?php } ?>

    <form action="<?php echo base_url(); ?>register" method="post">   

        <div class="row">
                <div class="col-4"></div>
                <div class="col-4">
                <div class="card ">
                    <div class="card-header text-white bg-primary">
                    บันทึกผู้ใช้งาน
                    </div>
                    <div class="card-body">
                        <div class="row ">
                            <div class="form-group col-sm-9 col-lg-10">
                                <label class="pt-2" for="firstname">ชื่อ</label>
                                <input type="text" name="firstname" id="firstname" class="form-control">
                            </div> 
                        </div>
                        <div class="row ">
                            <div class="form-group col-sm-9 col-lg-10">
                                <label class="pt-2" for="lastname">นามสกุล</label>
                                <input type="text" name="lastname" id="lastname" class="form-control">
                            </div>  
                        </div>
                        <div class="row ">
                            <div class="form-group col-sm-9 col-lg-10">
                                <label class="pt-2" for="newusername">ชื่อผู้ใช้</label>
                                <input type="text" name="newusername" id="newusername" class="form-control">
                            </div> 
                        </div>
                        <div class="row ">
                            <div class="form-group col-sm-9 col-lg-10">
                                <label class="pt-2" for="price">รหัสผ่าน</label>
                                <input type="password" name="password" id="password" class="form-control" ></input>
                            </div> 
                        </div>
                    </div>
                    <div class="card-footer text-center text-muted">
                        <button class="btn btn-lg btn-primary" name="type" value="signup"><i class="fa fa-user"></i> บันทึก</button>
                        <a href="<?php echo base_url(); ?>login" class="btn btn-danger btn-lg " role="button" aria-pressed="true">ยกเลิก</a>
                    </div>
                </div>


                </div>
                <div class="col-4"></div>
        
        </div>

    </form>
        

    <!-- <div class="jumbotron">
        <div class="container text-center">
            <h1 class="display-4">Welcome to Porde</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        </div>
    </div> -->
    <script> 
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