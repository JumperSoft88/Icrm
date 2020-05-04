<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Register extends CI_Controller {

    public function __construct()
    { 
        parent::__construct();  
        $this->load->helper('url');  

        $this->load->model('log_model'); 
        $this->load->model('register_model');

    }
 
	public function index()
	{ 
   
            $newusername = $this->input->post('newusername');
            $password = $this->input->post('password');
            $firstname = $this->input->post('firstname');
            $lastname = $this->input->post('lastname'); 
            
            if($newusername  != null){
    
                $dataInsert= array(
                    'username' => $newusername,
                    'password' => $password,
                    'firstname' => $firstname,
                    'lastname' => $lastname, 
                    'createdDate' => date('Y-m-d H:i:s'),
                    'modifiedDate' => date('Y-m-d H:i:s') 
                );
    
                $this->register_model->insert($dataInsert); 

                $dataLog = array(
                    'username' => $_SESSION['username'],
                    'uuid' => $_SESSION['uuid'],
                    'createdDate' => date('Y-m-d H:i:s'),
                    'detail' => 'บันทึกผู้ใช้งาน'
                );
        
                $this->log_model->insert($dataLog); 
    
                $data = array(
                    'message'  => 'บันทึกข้อมูลเรียบร้อย' 
                ); 
        
                $this->load->view('register',$data);
            }else{
                $this->load->view('register');
            }
        
      
        

         
    }
 
    
   

	
}
