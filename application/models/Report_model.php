<?php 

class Report_model extends CI_Model
{
    public function __construct(){
        parent::__construct();


        $this->load->database(); // load database
 
    } 
  

    public function getComplaint()
    {
        $this->db->select('*');
        $this->db->from('tbl_news_complaint'); 
        $query = $this->db->get();
        $result = $query->result();
 
        return $result;
    }

    public function getComplaintByCatagory($catagoryId)
    {
        $this->db->where('news_complaint_id',$id);
        $query = $this->db->get('tbl_news_complaint');
        if($query->num_rows()>0){
            return $query->row();
        }else{
            return false;
        }
    }

    public function getMonth()
    {
        $this->db->select('*');
        $this->db->from('tbl_month'); 
        $query = $this->db->get();
        $result = $query->result();
 
        return $result;
    }

    public function getCompaingByCondition()
    {
        $query = $this->db->query("SELECT COUNT(category_id) as counts, category_name FROM tbl_news_complaint GROUP BY category_id");
        $result = $query->result();
        return $result;
    }

    public function getCompaingByToday()
    {   
       $this->db->select('*');
       $this->db->from('tbl_news_complaint'); 
       //$this->db->Where('createMMYYYY',$today); 
       $query = $this->db->get();
       $result = $query->result();

       return $result; 
    }

    public function getCompaingByGroup()
    {   
        $query = $this->db->query("SELECT COUNT(category_id) as countId, category_id FROM tbl_news_complaint GROUP BY category_id");
        $result = $query->result();
        return $result; 
    }
  
}
