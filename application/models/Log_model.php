<?php 

class Log_model extends CI_Model
{
    public function __construct(){
        parent::__construct();


        $this->load->database(); // load database
 
    } 

    public function insert($data)
    {
        $this->db->insert('tbl_log', $data);
    }

    
}
