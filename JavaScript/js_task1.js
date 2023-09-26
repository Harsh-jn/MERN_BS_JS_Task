<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>MERN Bootstrap Index</title>
</head>
<body>
    <div class="header bg-dark text-white shadow">
        <h1 class="text-center pt-4">Ethnus MERN Stack Industrial Certification</h1>
        <nav class="navbar pb-4">
            <div class="row text-center ms-auto me-auto">
                <div class="col-12 col-lg-6 col-md-6">
                    <div class="container-fluid mb-3">
                        <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle fs-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">Bootstrap Tasks</button>
                            <ul class="dropdown-menu position-absolute">
                                <li><a href="../Bootstrap/bs_task1.html" class="dropdown-item" target="_blank">Task 1</a></li>
                                <li><a href="../Bootstrap/bs_task2.html" class="dropdown-item" target="_blank">Task 2</a></li>
                                <li><a href="../Bootstrap/bs_task3.html" class="dropdown-item" target="_blank">Task 3</a></li>
                                <li><a href="../Bootstrap/bs_task4.html" class="dropdown-item" target="_blank">Task 4</a></li>
                                <li><a href="../Bootstrap/bs_task5.html" class="dropdown-item" target="_blank">Task 5</a></li>
                                <li><a href="../Bootstrap/bs_task6.html" class="dropdown-item" target="_blank">Task 6</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-md-6">
                    <div class="container-fluid">
                        <div class="dropdown">
                            <button class="btn btn-warning dropdown-toggle fs-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">JavaScript Tasks</button>
                            <ul class="dropdown-menu position-absolute">
                                <li><a href="js_task1.html" class="dropdown-item">Task 1</a></li>
                                <li><a href="js_task2.html" class="dropdown-item">Task 2</a></li>
                                <li><a href="js_task3.html" class="dropdown-item">Task 3</a></li>
                                <li><a href="js_task4.html" class="dropdown-item">Task 4</a></li>
                                <li><a href="js_task5.html" class="dropdown-item">Task 5</a></li>
                                <li><a href="js_task6.html" class="dropdown-item">Task 6</a></li>
                                <li><a href="js_task7.html" class="dropdown-item">Task 7</a></li>
                                <li><a href="js_task8.html" class="dropdown-item">Task 8</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <div class="container text-center mt-3">
        <form action="" id="form-inp" class="form">
            <div class="row align-items-center">
                <div class="col-12 text-center">
                    <label for="inp" class="ms-auto me-auto mb-1">Enter number to reverse</label>
                    <input type="number" id="inp" name="inp" class="input-group w-25 ms-auto me-auto">
                    <button onclick="reverse()" type="button" class="btn btn-primary mt-2 mb-2">Submit!</button>
                    <p class="">Reversed Number: </p><p id="result"></p>
                </div>
            </div>
        </form>
    </div>
    <script src="script1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>
