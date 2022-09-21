<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- style -->
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">

    <link rel="stylesheet" href="css/style.css">

    <title>Employee details with ajax</title>
</head>

<body>

    <div class="main_container">
        <div class="container">
            <!-- Title of content -->
            <h1 class="title">details of employee</h1>

            <div class="search_box">
                <form  name="search_data">
                <input type="search" placeholder="Enter Employee name" name="search" id="emp" class="emp_search">
                <input type="button" value="search" class="btn btn_search" id="btn_s">
                </form>
            </div>

            <section class="content section " id="content">
                <div class="container">
                    <div class="row">
                        <div class="section-title padd-15">
                            <h2>Employee</h2>
                        </div>
                    </div>
                    <div class="row" id="data_section">

                        <!-- section item start -->

                        <!-- service item end -->

                    </div>

                    <!-- pagination -->

                    <div class="box_btn">
                      
                        <button id="i0" class="i0 btn add active">1 </button>
                        <button id="i1" class="i1 btn add">2 </button>
                        <button id="i2" class="i2 btn add">3</button>
                        <button id="i3" class="i3 btn add">4</button>
                        <button id="i4" class="i4 btn add">5</button>
                        <button id="i5" class="i5 btn add">6</button>
                        <button id="i6" class="i6 btn add">7</button>

                   
                    </div>

                </div>
            </section>

        </div>
    </div>
    
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    <script src="js/main.js"></script>


</body>

</html>