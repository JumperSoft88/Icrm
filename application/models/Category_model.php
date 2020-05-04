<?php

class Category_model extends CI_Model
{
    public function __construct(){
      parent::__construct();


        $this->load->database();
   } 

   public function getCategory()
   {
        $this->db->select('*');
        $this->db->from('tbl_category');  
        $query = $this->db->get();
        $result = $query->result();
    
        return $result;
   }

   public function getCategoryById($category_id)
   {
        $this->db->select('*');
        $this->db->from('tbl_category');  
        $this->db->where('category_id',$category_id);
        $query = $this->db->get();
        $result = $query->result();
    
        return $result;
   }

   public function getSubCategory()
   {
        $this->db->select('*');
        $this->db->from('tbl_sub_category');  
        $query = $this->db->get();
        $result = $query->result();
    
        return $result;
   }

   public function getSubCategoryById($subCategory_id)
   {
        $this->db->select('*');
        $this->db->from('tbl_sub_category');  
        $this->db->where('sub_category_id',$subCategory_id);
        $query = $this->db->get();
        $result = $query->result();
    
        return $result;
   }

   public function getProcessStatus()
   {
        $this->db->select('*');
        $this->db->from('tbl_process_status');  
        $query = $this->db->get();
        $result = $query->result();
    
        return $result;
   }

   public function getProcessStatusById($process_id)
   {
        $this->db->select('*');
        $this->db->from('tbl_process_status');  
        $this->db->where('process_id',$process_id);
        $query = $this->db->get();
        $result = $query->result();
    
        return $result;
   }









   

   public function insertUsername($data)
   {
        $this->db->insert('tbl_member',$data);
   }

  

   function update_status_logon($username,$data){
       $this->db->where('name',$username);
       $this->db->update('fit_questions', $data);

   }


   function update_member_login($id,$data){
       $this->db->where('member_id',$id);
       $this->db->update('fit_member', $data);
   }

   function insert_history_login($history_data){
       $this->db->insert('fit_history_system',$history_data);
   }

    function insert_history_trainer($history_traner_data){
        $this->db->insert('fit_history_trainer',$history_traner_data);
    }

    function validate_email($member_username){
        $sql = "SELECT member_username,	email from fit_member Where member_username = '{$member_username}' LIMIT 1";
        $result = $this->db->query($sql);
        $row = $result->row();

        if($result -> num_rows() == 1){
            $data = array(
                'activeted' => true
            );


            $this->db->where('member_username',$member_username);
            $this->db->update('fit_member', $data);


            $this->db->select('*');
            $this->db->from('fit_member');
            $this->db->where($arrayName = array('member_username' => $member_username));
            $query1 = $this->db->get();
            $result1 = $query1->result();


            if($result1[0]->member_type == 'trainer'){
                $topic = 'รับสอนฟิตเนสโดยคุณ '.$member_username;
                $detail = 'รับสอนฟิตเนส ตามสถานที่ออกกำลังกาย ตามบ้านและคอนโด';

                $data = $arrayName = array(
                    'topic' => $topic,
                    'detail' =>  $detail,
                    'name' => $member_username,
                    'email'  => $result1[0]->email,
                    'created' => date('Y-m-d H:i:s')

                );
                $this->db->insert('fit_questions',$data);
            }



            return true;
        }else{

            return false;
        }

    }

    function validate_username($username,$email){

        $sql = "SELECT username,email from tbl_member Where username = '{$username}' and email = '{$email}' LIMIT 1";
        $result = $this->db->query($sql);
        $row = $result->row();

        if($result -> num_rows() == 1){ 
            return false;
        }else{
            return true;
        }
    }
 
    function update_tbl_member_trainner_join($memberId,$data){ 
        $this->db->where('member_id',$memberId);
        $this->db->update('tbl_member', $data); 
    }

    function get_member($username){
        $this->db->select('*');
        $this->db->from('tbl_member'); 
        $this->db->where('username',$username);
        $query = $this->db->get();
        $result = $query->result();
       
       return $result;
    }

    function update_status_system($username,$data){ 
        $this->db->where('username',$username);
        $this->db->update('tbl_member', $data); 
    }
 

}




