<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

    function __construct() {
        parent::__construct(); 
       
        $this->load->model('login_model');
        $this->load->model('category_model');
        $this->load->model('category_model');
        $this->load->model('address_model');
        $this->load->model('log_model');
        $this->load->model('newsComplaint_model');

    }

	public function index()
	{

        $category =  $this->category_model->getCategory(); 
        $subCategory =  $this->category_model->getSubCategory(); 
        $processStatus =  $this->category_model->getProcessStatus(); 
        $provinces = $this->address_model->getProvince();
        $newsComplaint = $this->newsComplaint_model->getNewsComplaint();

        if(!isset($_SESSION['username'])){  
            $status = '';
            $uuid = uniqid();
            $username = $this->input->post('username');
            $password = $this->input->post('password'); 

            $isUser = $this->login_model->validate_login($username,$password);
    
            if($isUser){

                $newSession = array(
                    'username' => $username,
                    'uuid' => $uuid,
                    'category' => $category,
                    'subCategory' => $subCategory,
                    'processStatus' => $processStatus,
                    'provinces' => $provinces,
                    'newsComplaint' => $newsComplaint

                );
            
                $this->session->set_userdata($newSession);

                $status = 'login pass';
        
                //$this->load->view('index',$data);
                $this->load->view('index');
            }else{
                $status = 'login not pass';
                $data = array(
                    'message'  => 'ไม่มีชื่อในระบบ' 
                ); 
                $this->load->view('login',$data);
               // $this->load->view('login');
            }

            $dataLog = array(
                'username' => $username,
                'uuid' => $uuid,
                'createdDate' => date('Y-m-d H:i:s'),
                'detail' => $status
            );
            $this->log_model->insert($dataLog);
        }else{

            $this->session->unset_userdata('newsdetail');

            $dataLog = array(
				'username' => $_SESSION['username'],
				'uuid' => $_SESSION['uuid'],
				'createdDate' => date('Y-m-d H:i:s'),
				'detail' => 'page index'
			);
            $this->log_model->insert($dataLog);
            
            //$this->load->view('index',$data);
            $this->load->view('index');
        }
        
       // echo 'Test';
	}
}
