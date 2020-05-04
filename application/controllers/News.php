<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class News extends CI_Controller {

    public function __construct()
    { 
        parent::__construct();  
        $this->load->helper('url'); 
        $this->load->model('category_model');
        $this->load->model('address_model');
        $this->load->model('log_model');

    }
 
	public function index()
	{ 
        $category =  $this->category_model->getCategory();

        $processStatus =  $this->category_model->getProcessStatus();

        $provinces = $this->address_model->getProvince();

        $data = array(
            'category'  => $category,
            'processStatus'  => $processStatus,
            'provinces' => $provinces
         );
         
        
        if(!isset($_SESSION['newsdetail'])){  

            $dataLog = array(
                'username' => $_SESSION['username'],
                'uuid' => $_SESSION['uuid'],
                'createdDate' => date('Y-m-d H:i:s'),
                'detail' => 'แจ้งเรื่องใหม่'
            );
    
            $this->log_model->insert($dataLog); 

            $news = array(
                'newsdetail' => 'news'
            ); 
            $this->session->set_userdata($news);
			 
		} 
		 
        $this->load->view('newTopic',$data);
       // echo 'Test';
    }
    
    public function getAmphure()
    {
        if($this->input->post('provinceId')){
        echo $this->address_model->getAmphures($this->input->post('provinceId'));
        }
    }

     public function getDistrict()
     {
        if($this->input->post('amphureId')){
            echo $this->address_model->getDistrict($this->input->post('amphureId'));
        }
     }

	
}
