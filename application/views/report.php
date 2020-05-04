<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ทำดีทำด้วย</title> 
    <link rel="shortcut icon" type="image/x-icon" href="<?php echo base_url(); ?>assets/images/logo/logo.jpg" />
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

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
 
        .card-counter{
            box-shadow: 2px 2px 10px #DADADA;
            margin: 5px;
            padding: 20px 10px;
            background-color: #fff;
            height: 100px;
            border-radius: 5px;
            transition: .3s linear all;
        }

        .card-counter:hover{
            box-shadow: 4px 4px 20px #DADADA;
            transition: .3s linear all;
        }

        .card-counter.primary{
            background-color: #007bff;
            color: #FFF;
        }

        .card-counter.danger{
            background-color: #ef5350;
            color: #FFF;
        }  

        .card-counter.success{
            background-color: #66bb6a;
            color: #FFF;
        }  

        .card-counter.info{
            background-color: #26c6da;
            color: #FFF;
        }  

        .card-counter.accident{
            background-color: #f29f3a;
            color: #FFF;
        }  

        .card-counter.accident2{
            background-color: #afd4e3;
            color: #FFF;
        }  


        .card-counter i{
            font-size: 5em;
            opacity: 0.2;
        }

        .card-counter .count-numbers{
            position: absolute;
            right: 35px;
            top: 20px;
            font-size: 32px;
            display: block;
        }

        .card-counter .count-name{
            position: absolute;
            right: 35px;
            top: 65px;
            font-style: italic;
            text-transform: capitalize;
            opacity: 0.5;
            display: block;
            font-size: 18px;
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
                        <a class="nav-link active" href="<?php echo base_url(); ?>report">รายงาน</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="<?php echo base_url(); ?>register">ลงทะเบียนผู้ใช้งาน</a>
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
        <div class="container text-center ">
            <h2 class="display-4 text-primary">รายงาน</h2>
            <p class="lead text-success">เรื่องร้องเรียนร้องทุกข์ แจ้งเหตุการณ์ สถานการณ์ต่าง ๆ </p>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col">
                <!-- <label for="">เดือน</label> -->
                <select name="start_month" id="start_month" class="form-control" onchange="mySearch()">
                    <option value="">เลือกเดือน</option>
                    <?php foreach ($month as $key => $value) {
                         echo '<option value="'.$value->month_id.'">'.$value->month_name.'</option>';
                    } ?>
                </select>
            
            </div>
            <div class="col">
                <!-- <label for="">ปี</label> -->
                <select name="start_year" id="start_year" class="form-control" onchange="mySearch()">
                    <option value="">เลือกปี</option>
                    <?php for ($i=0; $i < 10; $i++) {  
                       echo '<option value="'.((date("Y")+543)-$i).'">'.((date("Y")+543)-$i).'</option>';
                    } ?>
                </select>
            </div>
            <div class="col text-center">ถึง</div>
            <div class="col">
                <!-- <label for="">เดือน</label> -->
                <select name="to_month" id="to_month" class="form-control" onchange="mySearch()">
                    <option value="">เลือกเดือน</option>
                    <?php foreach ($month as $key => $value) {
                         echo '<option value="'.$value->month_id.'">'.$value->month_name.'</option>';
                    } ?>
                </select>
            
            </div>
            <div class="col">
                <!-- <label for="">ปี</label> -->
                <select name="to_year" id="to_year" class="form-control" onchange="mySearch()">
                    <option value="">เลือกปี</option>
                    <?php for ($i=0; $i < 10; $i++) {  
                       echo '<option value="'.((date("Y")+543)-$i).'">'.((date("Y")+543)-$i).'</option>';
                    } ?>
                </select>
            </div>
        </div>
    </div>
    <!-- <a href="http://m.me/331753290675589">link text</a> -->
    <div class="container mt-5">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs">
            <li class="nav-item tableCharts">
                <a class="nav-link active" aria-controls="tableCharts" role="tab" data-toggle="tab" href="#tableCharts">Table Charts</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" aria-controls="pieCharts" role="tab"  data-toggle="tab" href="#pieCharts">Pie Charts</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" aria-controls="barCharts" role="tab" data-toggle="tab" href="#barCharts">Bar Charts</a>
            </li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content">
            <div id="tableCharts" class="container tab-pane active"><br>
                <!-- <h3 class="text-primary">Table </h3> -->
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="card-counter success">
                                <i class="fa fa-flag"></i>
                                <span class="count-numbers" id="totalCount">0</span>
                                <span class="count-name">รวมทั้งหมด</span>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card-counter primary">
                                <i class="fa fa-car"></i>
                                <span class="count-numbers" id="totalCate1">0</span>
                                <span class="count-name">บริการจราจร</span>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="card-counter accident">
                                <i class="fa fa-exclamation-triangle"></i>
                                <span class="count-numbers" id="totalCate2">0</span>
                                <span class="count-name">อุบัติเหตุ</span>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="card-counter accident2">
                                <i class="fa fa-sun-o"></i>
                                <span class="count-numbers" id="totalCate3">0</span>
                                <span class="count-name">อุบัติภัย</span>
                            </div>
                        </div> 
                    </div>

                    <div class="row">
                        <div class="col-md-3">
                            <div class="card-counter info">
                                <i class="fa fa-users"></i>
                                <span class="count-numbers" id="totalCate4">0</span>
                                <span class="count-name">อาชญากรรม</span>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card-counter primary">
                                <i class="fa fa-heartbeat"></i>
                                <span class="count-numbers" id="totalCate5">0</span>
                                <span class="count-name">เจ็บป่วย</span>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="card-counter danger">
                                <i class="fa fa-car"></i>
                                <span class="count-numbers" id="totalCate6">0</span>
                                <span class="count-name">รถเสีย</span>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="card-counter success">
                                <i class="fa fa-blind"></i>
                                <span class="count-numbers" id="totalCate7">0</span>
                                <span class="count-name">คนหาย</span>
                            </div>
                        </div> 
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="card-counter info">
                                <i class="fa fa-gift"></i>
                                <span class="count-numbers" id="totalCate8">0</span>
                                <span class="count-name">ของหาย</span>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card-counter primary">
                                <i class="fa fa-phone"></i>
                                <span class="count-numbers" id="totalCate9">0</span>
                                <span class="count-name">ร้องเรียน</span>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="card-counter danger">
                                <i class="fa fa-ticket"></i>
                                <span class="count-numbers" id="totalCate10">0</span>
                                <span class="count-name">สาธารณูปโภค</span>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="card-counter success">
                                <i class="fa fa-tachometer"></i>
                                <span class="count-numbers" id="totalCate11">0</span>
                                <span class="count-name">อื่น ๆ</span>
                            </div>
                        </div>
                    </div>
                </div> 
                <br><br>
                <!-- <table class="table table-striped table-bordered mydatatable" style="font-family:arial;font-size: 14px;" id="mydatatable" >
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
                        </tr>
                    </thead>
                    <tbody> 
                    </tbody>
                </table> -->
            </div>
            <div id="pieCharts" class="container tab-pane fade"><br> 
                 <div class="row mt-5">
                    <div class="col"></div>
                    <div class="col"><div id="chartContainer" style="height: 300px; width: 100%;"></div></div>
                    <div class="col"></div>
                 </div>
                
            </div>
            <div id="barCharts" class="container tab-pane fade"><br> 
                <div class="row mt-5">
                    <div class="col"></div>
                    <div class="col"> <div id="barChartContainer" style="height: 300px; width: 100%;"></div></div>
                    <div class="col"></div>
                 </div>
            </div>
        </div>

    </div>

  
    <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js"></script>
    <script>

        function mySearch() {
            var start = document.getElementById("start_month").value;
            alert(start);
        }

        $(document).ready(function(){ 
            $.ajax({
                url: "<?php echo base_url(); ?>report/allCompaign",
                method: "GET",
                data:{ },
                error: function() {
                    alert('Something is wrong');
                },
                success:function(res){
                    //alert(res['allcompaign']);
                    //console.log(Object.keys(res['countGroup']).length);
                    console.log(res['allcompaign']);

                    for(var i = 0 ; i < Object.keys(res['countGroup']).length; i++){
                        var id = res['countGroup'][i]['category_id'];
                        var count = res['countGroup'][0]['countId'];
                         
                        if(id == 1){ 
                            document.getElementById("totalCate1").innerHTML = count;
                        }else if(id == 2){
                             document.getElementById("totalCate2").innerHTML = res['countGroup'][i]['countId'];
                        }else if(id == 3){
                            document.getElementById("totalCate3").innerHTML = res['countGroup'][i]['countId'];
                        }else if(id == 4){
                            document.getElementById("totalCate4").innerHTML = res['countGroup'][i]['countId'];
                        }else if(id == 5){
                            document.getElementById("totalCate5").innerHTML = res['countGroup'][i]['countId'];
                        }else if(id == 6){
                            document.getElementById("totalCate6").innerHTML = res['countGroup'][i]['countId'];
                        }else if(id == 7){
                            document.getElementById("totalCate7").innerHTML = res['countGroup'][i]['countId'];
                        }else if(id == 8){
                            document.getElementById("totalCate8").innerHTML = res['countGroup'][i]['countId'];
                        }else if(id == 9){
                            document.getElementById("totalCate9").innerHTML = res['countGroup'][i]['countId'];
                        }else if(id == 10){
                            document.getElementById("totalCate10").innerHTML = res['countGroup'][i]['countId'];
                        }else if(id == 11){
                            document.getElementById("totalCate11").innerHTML = res['countGroup'][i]['countId'];
                        }                          
                    }

                     //totalCate9 
                     document.getElementById("totalCount").innerHTML = res['countToday']; 

                }
            }); 

                
        });

        //$('.mydatatable').DataTable({  });

        // $('#mydatatable').DataTable({ 
        //     "ajax": {
        //         url : "<?php echo base_url(); ?>report/allComp",
        //         type : 'GET' 
        //     }, 
        // });
                
  
        $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
          
            var words = e.target.toString();
            var strSplit =  words.split('#');
           // alert(strSplit[1]);

            if(strSplit[1] == 'tableCharts'){
                //makeTableCharts();
            }

            if (strSplit[1] == 'pieCharts') { 
                makePieCharts();
            }

            if(strSplit[1] == 'barCharts'){
                makeBarCharts();
               
            }
             
        })

        // function makeTableCharts() {
            
        // }

        function makePieCharts(){
          //  alert('XX');
            var options = {
                title: {
                    text: "Pie Char"
                },
                subtitles: [{
                    text: "As of November, 2017"
                }],
                animationEnabled: true,
                data: [{
                    type: "pie",
                    startAngle: 40,
                    toolTipContent: "<b>{label}</b>: {y}%",
                    showInLegend: "true",
                    legendText: "{label}",
                    indexLabelFontSize: 16,
                    indexLabel: "{label} - {y} เคส",
                    dataPoints: []
                }]
            };
    
            var count = '<?php $i = 0; echo count($compaing); ?>';
            var list = JSON.parse('<?php echo json_encode($compaing); ?>');
            //alert(list[0]['counts']);
            for(var i = 0; i < count; i++) {  
                options.data[0].dataPoints.push({y: list[i]['counts'],label: list[i]['category_name']}); 
            }


             $("#chartContainer").CanvasJSChart(options); 
                
        }

        function makeBarCharts() {
            // var chart = new CanvasJS.Chart("barChartContainer", {
            //         animationEnabled: true,
            //         theme: "light2", // "light1", "light2", "dark1", "dark2"
            //         title:{
            //             text: "รายงาน"
            //         },
            //         axisY: {
            //             interval: 20
            //         },
            //         data: [{        
            //             type: "column",  
            //             showInLegend: true, 
            //             legendMarkerColor: "grey",
            //             legendText: "หัวข้อช่วยเหลือ",
            //             dataPoints: []
            //         }]
            //     });

            // var count = '<?php $i = 0; echo count($compaing); ?>';
            // var list = JSON.parse('<?php echo json_encode($compaing); ?>');
            // //alert(list[0]['counts']);
            // for(var i = 0; i < count; i++) {  
            //     chart.options.data[0].dataPoints.push({y: 300878,label: list[i]['category_name']}); 
            // }
            // chart.render();
            var chart = new CanvasJS.Chart("barChartContainer",
                {
                    animationEnabled: true,
                    theme: "light2",
                    title: {
                        text: "รายงาน"
                    },
                    axisY:{
                    interval: 20
                    },
                    data: [
                    {
                        type: "column",
                        dataPoints: [ ]
                    }
                    ]
                });

            var count = '<?php $i = 0; echo count($compaing); ?>';
            var list = JSON.parse('<?php echo json_encode($compaing); ?>'); 
            for(var i = 0; i < count; i++) {   
                var cnt = list[i]['counts'];
                chart.options.data[0].dataPoints.push({y: parseInt(cnt) ,label: list[i]['category_name']}); 
            }

            chart.render();
        }
    </script>
    <script>
        // window.onload = function () { 
        //     var options = {
        //         title: {
        //             text: "Pie Char"
        //         },
        //         subtitles: [{
        //             text: "As of November, 2017"
        //         }],
        //         animationEnabled: true,
        //         data: [{
        //             type: "pie",
        //             startAngle: 40,
        //             toolTipContent: "<b>{label}</b>: {y}%",
        //             showInLegend: "true",
        //             legendText: "{label}",
        //             indexLabelFontSize: 16,
        //             indexLabel: "{label} - {y} เคส",
        //             dataPoints: []
        //         }]
        //     };
    
        //     var count = '<?php $i = 0; echo count($compaing); ?>';
        //     var list = JSON.parse('<?php echo json_encode($compaing); ?>');
        //     //alert(list[0]['counts']);
        //     for(var i = 0; i < count; i++) {  
        //         options.data[0].dataPoints.push({y: list[i]['counts'],label: list[i]['category_name']}); 
        //     }


        //     $("#chartContainer").CanvasJSChart(options);

        // }
 
 
    </script>
    <!-- <script>
        window.onload = function () {

            var options = {
                animationEnabled: true,
                title: {
                    text: "GDP Growth Rate - 2016"
                },
                axisY: {
                    title: "Growth Rate (in %)",
                    suffix: "%",
                    includeZero: false
                },
                axisX: {
                    title: "Countries"
                },
                data: [{
                    type: "column",
                    yValueFormatString: "#,##0.0#"%"",
                    dataPoints: [
                        { label: "Iraq", y: 10.09 },	
                        { label: "Turks & Caicos Islands", y: 9.40 },	
                        { label: "Nauru", y: 8.50 },
                        { label: "Ethiopia", y: 7.96 },	
                        { label: "Uzbekistan", y: 7.80 },
                        { label: "Nepal", y: 7.56 },
                        { label: "Iceland", y: 7.20 },
                        { label: "India", y: 7.1 }
                        
                    ]
                }]
            };
            $("#chartContainer2").CanvasJSChart(options);

        }
    </script> -->
    <!-- <script>
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                    beginAtZero: true
                    }
                }]
            }
        }
    });
    </script> --> 
    
    <!-- <div id="chartContainer2" style="height: 300px; width: 100%;"></div> -->
    <script src="https://canvasjs.com/assets/script/jquery-1.11.1.min.js"></script>
    <script src="https://canvasjs.com/assets/script/jquery.canvasjs.min.js"></script>
            
  
</body>
</html>