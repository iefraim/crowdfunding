           <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
           <script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>
           <header>

           <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">

      <div class="navbar-nav">
      <a class="navbar-brand" href="./">
      <img src="https://zeraabraham.com/wp-content/uploads/2021/08/ZeraAbraham-150px.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
      Zera Avraham
    </a>
            <a class="nav-link" href="./">Dashboard</a>
            <a class="nav-link logout">Logout</a>

        
  
    </div>
  </div>
</nav>


</header>
<script>
$('.logout').click(function(e) {
e.preventDefault
        $.get("./logout.php",()=>{
            
        location.href="login.php";
        });
    });
</script>