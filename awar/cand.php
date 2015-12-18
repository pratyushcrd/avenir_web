<?php 

$area = $_GET['area'];

if($area=="5"){
$cand_nm = array("Ram Kripal Yadav","Misha Bharti","Ranjan Prasad Yadav","Rameshwar Prasad");
$cand_party = array("BJP","RJD","JDU","CPI(ML)");
$cand_age = array("53","39","69","67" );
$cand_edu = array("Graduate","Graduate","Doctorate","8th pass" );
$cand_assets = array("Rs. 1 crore+","Rs. 4 crore+","Rs. 5 crore+","Rs. 23lacs+" );
$cand_cases = array("1","1","0","6" );
$cand_charges = array("2","1","0","6" );
$cand_pic = array("patliputra_1","patliputra_2","patliputra_3","patliputra_4");
}

if($area=="3"){
$cand_nm = array("Kaushalendra","Pranav Prakash","Satyanand Sharma","Aashish ranjan Sinha");
$cand_party = array("JD(U)","AAP","LJP","INC" );
$cand_age = array("49","49","36","64" );
$cand_edu = array("H.S","Graduate Professional","Literate","Graduate" );
$cand_assets = array("Rs. 1 crore+","Rs. 5 crore+","Rs. 2 crore+","Rs. 2lacs+" );
$cand_cases = array("0","1","1","0" );
$cand_charges = array("0","1","0","0" );
$cand_pic = array("nalanda_1","nalanda_2","nalanda_3","nalanda_4");
}

if($area=="0"){
$cand_nm = array("Babul Supriyo","Dola Sen","Bansal Gopal Choudhury","Indrani Mishra" );
$cand_party = array("BJP","AITC","CPI(M)","INC" );
$cand_age = array("44","47","54","31" );
$cand_edu = array("Graduate Professional","Graduate Professional","H.S","Post Graduate"  );
$cand_assets = array("Rs. 7 crores+","Rs. 7 lacs+","Rs. 51 lacs+","Rs. 33 lacs+" );
$cand_cases = array("6","0","1","0" );
$cand_charges = array("6","0","4","0" );
$cand_pic = array("asansol_1","asansol_2","asansol_3","asansol_4");
}

if($area=="1"){
$cand_nm = array("Dr. Harsh Vardhan ","Ashutosh","Kapil Sibal","Altaf Husain");
$cand_party = array("BJP","AAP","INC","Bhartiya Janta Dal");
$cand_age = array("59","48","65","44" );
$cand_edu = array("Potst Graduate","Potst Graduate","Graduate Professional","H.S" );
$cand_assets = array("Rs. 2 crore+","Rs. 8 crore+","Rs. 110 crores+","Rs. 41lacs+" );
$cand_cases = array("2","3","0","0" );
$cand_charges = array("0","0","0","0" );
$cand_pic = array("chandanichowk_1","chandanichowk_2","chandanichowk_3","chandanichowk_4");
}

if($area=="4"){
$cand_nm = array("Smt. Meenakshi Dekhi","Aashish Khetan","Ajay Maken","Biswajit Ranjit Chatterjee" );
$cand_party = array("BJP","AAP","INC","AITC" );
$cand_age = array("46","38","50","77" );
$cand_edu = array("Graduate Professional","P.G","P.G","H.S" );
$cand_assets = array("Rs. 34  crores+","Rs. 1 crore+","Rs. 6 crores+","Rs. 3.5 crores+" );
$cand_cases = array("0","0","1","0" );
$cand_charges = array("0","0","0","0" );
$cand_pic = array("newdelhi_1","newdelhi_2","newdelhi_3","newdelhi_4");
}

if($area=="2"){
$cand_nm = array("Prasun Banerjee","Sridip Bhattacharya","George Baker","Manoj Kumar Pandey" );
$cand_party = array("AITMC","CPI(M)","BJP","INC" );
$cand_age = array("55","60","68","52" );
$cand_edu = array("Graduate Professional","Graduate","Post Graduate","Graduate" );
$cand_assets = array("Rs. 1 crore+","Rs. 35 lacs+","Rs. 25 lacs+","Rs. 44lacs+"  );
$cand_cases = array("0","0","0","0" );
$cand_charges = array("0","0","0","0" );
$cand_pic = array("howrah_1","howrah_2","howrah_3","howrah_4");
}
echo "[";
for($i=0;$i<4;++$i){

	if($i)
	echo ",";
	echo "{\"name\":\"".$cand_nm[$i]."\n ".$cand_party[$i]."\",\"age\":\"".$cand_age[$i]."\",\"edu\":\"".$cand_edu[$i]."\",\"asset\":\"".$cand_assets[$i]."\",\"cases\":\"".$cand_cases[$i]."\",\"pic\":\"".$cand_pic[$i]."\",\"charges\":\"".$cand_charges[$i]."\"}";
	
	}
echo "]";
?>