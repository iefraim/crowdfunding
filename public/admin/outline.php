<!--add css/jquery here-->
<button onclick="logout()">logout</button>
<script>
    const logout=()=>{
        $.get("./logout.php");
        location.href="login.php";
    }
</script>