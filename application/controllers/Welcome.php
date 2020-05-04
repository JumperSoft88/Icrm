<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	 
    public function __construct()
    { 
        parent::__construct();  
        $this->load->helper('url');  
        $this->load->model('log_model');

    }

	public function index()
	{
 
		if(isset($_SESSION['username'])){  
			$dataLog = array(
				'username' => $_SESSION['username'],
				'uuid' => $_SESSION['uuid'],
				'createdDate' => date('Y-m-d H:i:s'),
				'detail' => 'logout'
			);
			$this->log_model->insert($dataLog);

			$this->session->sess_destroy(); 
		}

		$this->load->view('login');
		
	}
}
