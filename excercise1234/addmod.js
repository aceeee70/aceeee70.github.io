exports.add = function(req, res, val) {
    var sum = val.first + val.second;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<!DOCTYPE html> 
		<html>
		<head>
		<meta charset=\"utf-8\"/>
		<title>Calculator Web Site</title>
		</head>
		<body> 
		<p>The Sum is : ${String(sum)}</p>
		</body>
		</html>
	
	`);
    return res.end();
}