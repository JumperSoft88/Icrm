<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Report extends CI_Controller {

    public function __construct()
    { 
        parent::__construct();  
        $this->load->helper('url');  

        $this->load->model('log_model'); 
        $this->load->model('report_model');

    }
 
	public function index()
	{ 
         //$this->report_model->getComplaint(); 

        $month = $this->report_model->getMonth(); 
        $compaing = $this->report_model->getCompaingByCondition();
 
        $data = array(
            'month' => $month ,
            'compaing' => $compaing
        );


         $this->load->view('report',$data);
    }

    public function allCompaign()
    {
        $allcompaign = $this->report_model->getComplaint();

        $today = date("n").'/'.(date("Y")+543); 
        $countToday = $this->report_model->getCompaingByToday();
        $countGroup = $this->report_model->getCompaingByGroup();
  
        $dataJson = array(
            'allcompaign' => $allcompaign, 
            'countToday' => count($countToday),
            'countGroup' => $countGroup 
        );

        header('Content-Type: application/json');
        echo json_encode($dataJson);
    }

 public function allComp()
 {
    $allcompaign = $this->report_model->getComplaint();
    
    $data = [];

        foreach($allcompaign as $rows) { 
            $data[] = array(  
                $rows->createdDate,
                '<label class="text-success">'.$rows->locale_title.'</label> : '.$rows->locale_detail,
                $rows->category_name,
                $rows->sub_category_name,
                $rows->news_firstname.' '.$rows->news_lastname,
                $rows->news_tel,
                $rows->channel,
                $rows->modifiedDate,
                $rows->recorder,
                $rows->locale_province_name 
            );
        }

        $dataJson = array( 
            'data' => $data
        );

        header('Content-Type: application/json');
        echo json_encode($dataJson);
 
 }
    
   

	
}
