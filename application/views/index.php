<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ทำดีทำด้วย</title> 
    <link rel="shortcut icon" type="image/x-icon" href="<?php echo base_url(); ?>assets/images/logo/logo.jpg" />
    <link rel="stylesheet" href="<?php echo base_url(); ?>node_modules/bootstrap/dist/css/bootstrap.min.css">
 
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.20/datatables.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<body>
 
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #fffded;">
        <div class="container">
            <a class="navbar-brand" href="<?php echo base_url(); ?>"><img class="rounded-circle" src="<?php echo base_url(); ?>assets/images/logo/logo.jpg" alt="" srcset="" height="50px" width="100px"> </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
			


            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto ">
                    <li class="nav-item active">
                        <a class="nav-link" href="<?php echo base_url(); ?>login">หน้าหลัก <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="<?php echo base_url(); ?>report">รายงาน</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="<?php echo base_url(); ?>register">ลงทะเบียนผู้ใช้งาน</a>
                    </li>
                   
                    <li class="nav-item dropdown">
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
                        สวัสดี <?php if(isset($_SESSION['username'])){ echo $_SESSION['username']; } ?>
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
            <h2 class="display-4 text-primary">"ทำดี ทำด้วย"</h2>
            <p class="lead text-success">"ทำดีทำด้วย " องค์กรสื่อกลาง ประสานเชื่อมโยงทุกภาคส่วนของสังคม ผู้คน ชุมชน บนโลกออนไลน์  มาร่วมกันทำความดี ช่วยเหลือเกื้อกูลกัน สร้างสรรค์สังคม ส่งเสริมคนทำดี เพื่อให้สังคมไทยน่าอยู่มากยิ่งขึ้น และยังเป็นสื่อกลางในการรับแจ้งเรื่องราวปัญหาต่าง ๆ จากประชาชน ทั้งเหตุด่วน
			เหตุร้าย อุบัติเหตุ อาชญากรรม จราจร สาธารณูปโภค ความเดือดร้อน ไม่ได้รับความเป็นธรรม ขอความช่วยเหลือ เพื่อประสานงานให้ระหว่างประชาชนกับหน่วยงานภาครัฐ เอกชน หาทางแก้ไขปัญหา หาทางออกร่วมกัน อีกทั้งยังนำเสนอเรื่องราว ข่าวสารบ้านเมือง สถานการณ์ความเคลื่อนไหวต่างๆ ที่เกิดขึ้นในสังคมไทย</p>
		 
            <div class="row">
                <div class="col text-right"><img  src="<?php echo base_url(); ?>assets/images/social/facebook.png" alt="" srcset="" height="30px" width="30px"></div>
                <div class="col text-left text-primary"> <p class="lead"> ทำดีทำด้วย  , thamdee thamduay</p> </div>
                <div class="col"> </div>
            </div>
            <div class="row">
                <div class="col text-right"><img  src="<?php echo base_url(); ?>assets/images/social/youtube.png" alt="" srcset="" height="30px" width="30px"></div>
                <div class="col text-left text-danger"> <p class="lead"> thamdee.thamduay</p></div>
                <div class="col"> </div>
            </div>
            <div class="row">
                <div class="col text-right"><img  src="<?php echo base_url(); ?>assets/images/social/line.png" alt="" srcset="" height="30px" width="30px"></div>
                <div class="col text-left text-success"> <p class="lead"> thamdeethamduay, ทำดีทำด้วยofficial</p></div>
                <div class="col"> </div>
            </div>
            <div class="row">
                <div class="col text-right"><img  src="<?php echo base_url(); ?>assets/images/social/twitter.png" alt="" srcset="" height="30px" width="30px"></div>
                <div class="col text-left text-info"> <p class="lead"> thamdee.thamduay</p></div>
                <div class="col"> </div>
            </div>
            <div class="row">
                <div class="col text-right"><img  src="<?php echo base_url(); ?>assets/images/social/viber.png" alt="" srcset="" height="30px" width="30px"></div>
                <div class="col text-left text-danger"> <p class="lead"> 062-829-1000, 062-829-2000</p></div>
                <div class="col"> </div>
            </div>
        </div>
    </div>

    <!-- <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" data-interval="10000">
            <img src="<!?php echo base_url(); ?>assets/images/logo/logo.jpg" height="400px" width="1280px" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item" data-interval="2000">
            <img src="<!?php echo base_url(); ?>assets/images/slide/sli.png" height="400px" width="1280px"  class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1563980714252-74345152712e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&h=400&q=80" class="d-block w-100" alt="...">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>          -->
  
    <div class="mt-5 ml-3 mr-3">
        <table class="table table-striped table-bordered mydatatable " style="width: 100%;font-family:arial;font-size: 14px;" id="mydatatable">
            <thead class="text-center">
                <tr>
                    <th>รับเรื่อง</th>
                    <th>เรื่อง</th>
                    <th>หมวดปัญหา</th>
                    <th>สถานะปัญหา</th>
                    <th>ขื่อ - นามสกุล (ผู้แจ้ง)</th>
					<th>เบอร์โทร (ผู้แจ้ง)</th>
                    <th>ช่องทาง</th>
                    <th>เปลี่ยนแปลงข้อมูล</th>
                    <th>ผู้รับเรื่อง</th>
                    <th>จังหวัด</th>
                    <th>สถานะ</th>
                </tr>
            </thead>
            <body>

                <?php foreach ($_SESSION['newsComplaint'] as $item) { ?> 
                    <tr>
                        <td><?php echo $item->createdDate;?></td>
                        <td><?php echo '<label class="text-success">'.$item->locale_title.'</label> : '.$item->locale_detail; ?></td>
                        <td><?php echo $item->category_name;?></td>
                        <td><?php echo $item->sub_category_name; if($item->sub_category_id == 3){ echo '  <i class="fa fa-lightbulb-o text-success" aria-hidden="true"></i>'; } ?> </td>
                        <td><?php echo $item->news_firstname.' '.$item->news_lastname; ?></td>
						<td><?php echo $item->news_tel;?></td>
                        <td><?php echo $item->channel;?></td>
                        <td><?php echo $item->modifiedDate;?></td>
                        <td><?php echo $item->recorder;?></td>
                        <td><?php echo $item->locale_province_name;?></td>
                        <td> 
                            <a type="button" class="btn btn-info btn-sm "  href="<?php echo base_url(); ?>complaint/edit/<?php echo $item->news_complaint_id;?>">แก้ไข</a>  
                        </td>
                    </tr>

                <?php } ?> 
                            
                
                 
            </body> 
        </table>
    </div>
 
    <script src="<?php echo base_url(); ?>node_modules/jquery/dist/jquery.min.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="<?php echo base_url(); ?>node_modules/bootstrap/dist/js/bootstrap.min.js"></script> 

  
    <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js"></script>
    <script>
        $('.mydatatable').DataTable({
            "order" : [[0,"desc"]]
        });
    </script>

    <script>
        function functionEdit($id) {
                alert($id);

                var id = $id;

                $.ajax({
                url: '<?php echo base_url(); ?>complaint/edit',
                type: 'POST',
                data: {id : id },
                error: function() {
                    alert('Something is wrong');
                },
                success: function(data) {
            
                        alert("Record added successfully");   
                }
                }); 
        }
    </script>
  
</body>
</html>