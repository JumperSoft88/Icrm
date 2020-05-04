<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Complaint extends CI_Controller {

    public function __construct()
    { 
        parent::__construct();  
        $this->load->helper('url'); 
        $this->load->model('complaint_model'); 
        $this->load->model('address_model'); 
        $this->load->model('category_model'); 
        $this->load->model('log_model'); 
        $this->load->model('newsComplaint_model');

    }
 
	public function index()
	{  
        $news_province = "";
        $news_province_name = "";
        $category = "";
        $category_name = "";
        $sub_category = "";
        $sub_category_name = "";
        $locale_province = "";
        $locale_province_name = "";
        $locale_amphur = "";
        $locale_amphur_name = "";
        $locale_district = "";
        $locale_district_name = "";

        $title_news = $this->input->post('title_news');
        $news_firstname = $this->input->post('news_firstname');
        $news_lastname = $this->input->post('news_lastname');
        $news_tel = $this->input->post('news_tel');
        $news_address = $this->input->post('news_address');
        
        $news_province_id = $this->input->post('news_province_id'); 

        if($news_province_id != null){
            $news_province = $this->address_model->getProvinceById($news_province_id); 
            $news_province_name =  $news_province[0]->name_th;
        }  

        $police_station = $this->input->post('police_station');

        $category_id = $this->input->post('category_id'); 
        if($category_id != null){
            $category = $this->category_model->getCategoryById($category_id);
            $category_name = $category[0]->category_name;
        } 

        $sub_category_id = $this->input->post('sub_category_id');
        
        if($sub_category_id != null){
            $sub_category = $this->category_model->getSubCategoryById($sub_category_id);
            $sub_category_name = $sub_category[0]->sub_category_name;
        } 
 
        $news_dated = $this->input->post('news_dated');
        $sub_problem = $this->input->post('sub_problem');
        
        $news_locale = $this->input->post('news_locale');
        $channel = $this->input->post('channel');

        $locale_province_id = $this->input->post('province_id'); 
        if($locale_province_id != null){
            $locale_province = $this->address_model->getProvinceById($locale_province_id);
            $locale_province_name =  $locale_province[0]->name_th;
        } 

        $locale_amphur_id = $this->input->post('amphure_id'); 
        if($locale_amphur_id != null){
            $locale_amphur = $this->address_model->getAmphuresById($locale_amphur_id);
            $locale_amphur_name = $locale_amphur[0]->name_th;
        } 
        
        $locale_district_id = $this->input->post('district_id'); 
        if($locale_district_id != null){
            $locale_district = $this->address_model->getDistrictById($locale_district_id);
            $locale_district_name = $locale_district[0]->name_th;
        } 

        $locale_title = $this->input->post('locale_title');
        $locale_detail = $this->input->post('locale_detail');
		$government = $this->input->post('government');

        $dataInsert= array(
            'title_news' => $title_news,
            'news_firstname' => $news_firstname,
            'news_lastname' => $news_lastname,
            'news_tel' => $news_tel,
            'news_address' => $news_address,
            'news_province_id' => $news_province_id,
            'news_province_name' => $news_province_name,
            'police_station' => $police_station,
            'category_id' => $category_id,
            'category_name' => $category_name,
            'sub_problem' => $sub_problem,
            'sub_category_id' => $sub_category_id,
            'sub_category_name' => $sub_category_name,
            'news_dated' => $news_dated,
            'news_locale' => $news_locale,
            'locale_province_id' => $locale_province_id,
            'locale_province_name' => $locale_province_name,
            'locale_amphur_id' => $locale_amphur_id,
            'locale_amphur_name' => $locale_amphur_name,
            'locale_district_id' => $locale_district_id,
            'locale_district_name' => $locale_district_name,
            'locale_title' => $locale_title,
            'locale_detail' => $locale_detail, 
            'recorder' => $_SESSION['username'], 
            'channel' => $channel,
			'government' => $government,
            'createdDate' =>  $this->DateThai(),
            'modifiedDate' =>  $this->DateThai(),
            'createMMYYYY' => date("n").'/'.date("Y")+543
        );

        $this->complaint_model->insert($dataInsert);

        $dataLog = array(
            'username' => $_SESSION['username'],
            'uuid' => $_SESSION['uuid'],
            'createdDate' => date('Y-m-d H:i:s'),
            'detail' => 'บันทึกรับเรื่อง'
        );

        $this->log_model->insert($dataLog); 

        $this->session->unset_userdata('newsdetail'); 
        $this->session->unset_userdata('newsComplaint'); 
        
        $newsComplaint = $this->newsComplaint_model->getNewsComplaint();

        $newSession = array( 
            'newsComplaint' => $newsComplaint

        );
    
        $this->session->set_userdata($newSession);

        
        //$this->load->view('index');
        redirect('login','refresh');
         
    }
 
    
   public function edit($news_complaint_id)
   { 
        $data['news_complaint'] = $this->newsComplaint_model->getNewsComplaintByUd($news_complaint_id);
        $this->load->view('newTopicEdit',$data);
   }

   public function update($id)
   {
        $category = "";
        $category_name = "";
        $sub_category = "";
        $sub_category_name = "";
        $locale_province = "";
        $locale_province_name = "";

        $news_firstname = $this->input->post('news_firstname');
        $news_lastname = $this->input->post('news_lastname');
        $locale_title = $this->input->post('locale_title');
        $locale_detail = $this->input->post('locale_detail');
        $channel = $this->input->post('channel');
        $tel = $this->input->post('tel');

        $category_id = $this->input->post('category_id');
        if($category_id != null){
            $category = $this->category_model->getCategoryById($category_id);
            $category_name = $category[0]->category_name;
        }
        
        $sub_problem = $this->input->post('sub_problem');
        $news_dated = $this->input->post('news_dated');

        $sub_category_id = $this->input->post('sub_category_id');
        if($sub_category_id != null){
            $sub_category = $this->category_model->getSubCategoryById($sub_category_id);
            $sub_category_name = $sub_category[0]->sub_category_name;
        } 
        
        $news_locale = $this->input->post('news_locale');
		$government = $this->input->post('government');

        $locale_province_id = $this->input->post('province_id'); 
        if($locale_province_id != null){
            $locale_province = $this->address_model->getProvinceById($locale_province_id);
            $locale_province_name =  $locale_province[0]->name_th;
        } 
		
        $strDate = $this->DateThai();
       // echo "ThaiCreate.Com Time now : ".DateThai($strDate);

        $dataUpdate= array(
            'news_firstname' => $news_firstname,
            'news_lastname' => $news_lastname,
            'news_tel' => $tel,
            'locale_title' => $locale_title,
            'locale_detail' => $locale_detail,
            'channel' => $channel,
            'category_id' => $category_id,
            'category_name' => $category_name,
            'sub_problem' => $sub_problem,
            'news_dated' => $news_dated,
            'sub_category_id' => $sub_category_id,
            'sub_category_name' => $sub_category_name,
            'locale_province_id' => $locale_province_id,
            'locale_province_name' => $locale_province_name,
            'government' =>$government,			
            'modifiedDate' =>  $this->DateThai() 

        );

        $this->newsComplaint_model->update($id,$dataUpdate);

        $this->session->unset_userdata('newsComplaint'); 
        
        $newsComplaint = $this->newsComplaint_model->getNewsComplaint();

        $newSession = array( 
            'newsComplaint' => $newsComplaint

        );
    
        $this->session->set_userdata($newSession);

        
        $this->load->view('index');


   }

   public function DateThai()
	{
        
        $strYear = date("Y")+543; 
        $strMonth= date("n"); 
		$strDay= date("j");
		$strHour= date("H");
		$strMinute= date("i");
		$strSeconds= date("s");
        $strMonthCut = Array("","ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค.");
        $strMonthThai=$strMonthCut[$strMonth];
        
       // echo "$strDay $strMonthThai $strYear, $strHour:$strMinute";
		return "$strDay $strMonthThai $strYear, $strHour:$strMinute";
	}



	
}
