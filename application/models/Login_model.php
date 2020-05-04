<?php 

class Login_model extends CI_Model
{
    public function __construct(){
        parent::__construct();


        $this->load->database(); // load database

    }

    function validate_login($username,$password){ 

        $sql = "SELECT username from tbl_member Where username = '{$username}' and password = '{$password}' LIMIT 1";
        $result = $this->db->query($sql);
        $row = $result->row();
 
        if($result -> num_rows() == 1){ 
            return true;
        }else{
            return false;
        }
 
        return $result;
    }
 
}
