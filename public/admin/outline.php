<!--add css/jquery here-->
           <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<button onclick="logout()">logout</button>
<script>
    function logout(){
        $.get("./logout.php");
        location.href="login.php";
    }
</script>