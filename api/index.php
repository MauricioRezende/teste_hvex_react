<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate'); 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

require_once './class/Activity.php';

class Api
{
	public static function open($request)
	{
		$url = explode('/', $request['url']);
		$class = ucfirst($url[0]);
		try {
			if (class_exists($class)) {
				$method = $_SERVER["REQUEST_METHOD"];
				if($method === "GET" && strpos($request['url'],"/") > 0){
					$url = explode('/', $request['url']);
					$activity = new Activity();
					$return = $activity->listById($url[1]);
				}else if($method === "GET"){
					$activity = new Activity();
					$return = $activity->listAll();
				}else if($method === "POST"){
					$activity = new Activity();
					$return = $activity->create($_POST["key_activity"]);
				}else if($method === "DELETE" && strpos($request['url'],"/") > 0){
					$url = explode('/', $request['url']);
					$activity = new Activity();
					$return = $activity->delete($url[1]);
				}else{
					return json_encode(array('status' => 'error', 'data' => 'Method not configured!'));	
				}
				return json_encode(array('status' => 'sucess', 'data' => $return));
			} else {
				return json_encode(array('status' => 'error', 'data' => 'Class does not exist!'));
			}	
		} catch (Exception $e) {
			return json_encode(array('status' => 'error', 'data' => $e->getMessage()));
		}
	}
}

if (isset($_REQUEST)) {
	echo Api::open($_REQUEST);
}