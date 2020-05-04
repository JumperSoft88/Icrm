<?php 

class NewsComplaint_model extends CI_Model
{
    public function __construct(){
        parent::__construct();


        $this->load->database(); // load database
 
    } 

    public function getNewsComplaint()
    {
        $this->db->select('*');
        $this->db->from('tbl_news_complaint'); 
        $this->db->order_by('news_complaint_id', 'DESC');
        $query = $this->db->get();
        $result = $query->result();

       // print_r($result);
 
        return $result;
    }

    public function getNewsComplaintByUd($id)
    {
        $this->db->where('news_complaint_id',$id);
        $query = $this->db->get('tbl_news_complaint');
        if($query->num_rows()>0){
            return $query->row();
        }else{
            return false;
        }
    }

    public function update($id,$data)
    {
        $this->db->where('news_complaint_id', $id);
        $this->db->update('tbl_news_complaint', $data);
    }
    
}
