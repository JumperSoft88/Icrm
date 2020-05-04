<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ทำดีทำด้วย</title> 
    <link rel="stylesheet" href="<?php echo base_url(); ?>node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="shortcut icon" type="image/x-icon" href="<?php echo base_url(); ?>assets/images/logo/logo.jpg" />
    <style>
      .img-container {
        text-align: center;
      }

      .card-header {
            padding: .75rem 1.25rem;
            margin-bottom: 0;
            background-color: rgba(244, 247, 118, 1);
            border-bottom: 1px solid rgba(0,0,0,.8);
        }
    </style>
</head>

<body>   
    <script src="<?php echo base_url(); ?>node_modules/jquery/dist/jquery.min.js"></script>
    <script src="<?php echo base_url(); ?>node_modules/bootstrap/dist/js/bootstrap.min.js"></script>


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

    <div class="container">
        <form action="<?php echo base_url(); ?>login" method="post">
            <div class="row img-container mt-5">
                <div class="col-sm-4"></div>
                <div class="col-sm-4 text-center"><img class="rounded-circle" src="<?php echo base_url(); ?>assets/images/logo/logo.jpg" alt="" srcset="" height="150px" width="300px"> </div>
                <div class="col-sm-4"></div>
            </div>
            <div class="row "> 
                <div class="col-md-8 mx-auto mt-5">
                    <div class="card">
                        <div class="card-header text-center">
                            Login to your account!
                        </div> 
                        <div class="card-body"> 
                            <div class="form-group row">
                                <label for="username" class="col-sm-3 col-form-label">Username</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" name="username" id="username">
                                </div>
                            
                            </div>
                            <div class="form-group row">
                                <label for="password" class="col-sm-3 col-form-label">Password</label>
                                <div class="col-sm-9">
                                    <input type="password" class="form-control" name="password" id="password">
                                </div> 
                            </div>  
                        </div>
                        <div class="card-footer text-center">
                            <input type="submit" class="btn btn-success" value="Login">
                        </div>
                    </div>
                </div> 
            </div>
        </form>
    </div> 
</body>
</html>