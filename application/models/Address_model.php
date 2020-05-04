<?php
/**
 * Created by PhpStorm.
 * User: mgi
 * Date: 24/2/2018 AD
 * Time: 22:57
 */

class Address_model extends CI_Model
{
    public function __construct(){
        parent::__construct();


        $this->load->database(); // load database

    }

    public function getProvince()
    {
        $this->db->select('*');
        $this->db->from('tbl_provinces'); 
        $query = $this->db->get();
        $result = $query->result();


        return $result;
    }

    public function getProvinceById($provinceId)
    {
        $this->db->select('*'); 
        $this->db->from('tbl_provinces'); 
        $this->db->where('id',$provinceId);
        $query = $this->db->get();
        $result = $query->result();
 
        return $result;
    }

    public function getAmphuresById($amphureId)
    {
        $this->db->select('*');
        $this->db->from('tbl_amphures'); 
        $this->db->where('id',$amphureId);
        $query = $this->db->get();
        $result = $query->result();


        return $result;
    }

    public function getAmphures($provinceId)
    {
        $this->db->where('province_id',$provinceId);
        $this->db->order_by('name_th','ASC');
        $query = $this->db->get('tbl_amphures');
        
        $output = '<option value="" >เลือกอำเภอ</option>';
        
        foreach($query->result() as $row){
            $output .= '<option value="' .$row->id.'">'.$row->name_th.'</option>';
        } 
        return $output;
    }

    public function getDistrictById($districtId)
    {
        $this->db->select('*'); 
        $this->db->from('tbl_districts'); 
        $this->db->where('id',$districtId);
        $query = $this->db->get();
        $result = $query->result();


        return $result;
    }

    public function getDistrict($amphureId)
    {
        $this->db->where('amphure_id',$amphureId);
        $this->db->order_by('name_th','ASC');
        $query = $this->db->get('tbl_districts');
        
        $output = '<option value="" >เลือกตำบล</option>';
        
        foreach($query->result() as $row){
            $output .= '<option value="' .$row->id.'">'.$row->name_th.'</option>';
        }
 
        return $output;
    }
}
