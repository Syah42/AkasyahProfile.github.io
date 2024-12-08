<html>
<head>
    <title>Education History</title>
    <style>
        /* General Styling */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333;
            margin: 0;
            padding: 20px;
            transition: background-color 0.3s, color 0.3s;
        }

        header {
            background-color: rgba(46, 64, 83);
            color: white;
            padding: 20px 0;
            text-align: center;
        }

        nav {
            margin: 10px 0;
            text-align: center;
        }

        nav a {
            margin: 0 15px;
            text-decoration: none;
            color: white;
            font-weight: bold;
        }

        nav a:hover {
            color: #ff7f50;
            transform: scale(1.1);
        }

        h1, h2, h3 {
            color: #007BFF;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            background: #fff;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            margin-top: 40px;
            transition: background-color 0.3s, color 0.3s;
        }

        section {
            margin-bottom: 40px;
        }

        ol {
            padding-left: 20px;
        }

        /* Dark mode styles */
        body.dark-mode {
            background-color: #2c2c2c;
            color: #eaeaea;
        }

        .container.dark-mode {
            background-color: #333;
            color: #eaeaea;
        }

        /* Styling for the toggle button */
        .toggle-button {
            display: block;
            margin: 20px auto;
            padding: 10px 20px;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .toggle-button:hover {
            background-color: #0056b3;
        }

        footer {
            text-align: center;
            margin-top: 40px;
            color: #777;
        }

        .school-image {
            display: block;
            margin: 20px auto;
            border: 1px solid #ddd;
        }

        /* Styling for clock */
        .clock {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            margin: 10px 0;
            text-align: center;
        }
    </style>
</head>
<body>
    <!-- Header with Navigation -->
    <header>
        <nav>
            <a href="index.html">Home</a>
            <a href="aboutme.html">About Me</a>
            <a href="education.html">Education</a>
            <a href="gallery.html">Gallery</a>
            <a href="experience.html">Experience</a>
        </nav>
    </header>

    <!-- Clock Display -->
    <div class="clock" id="clock"></div>

    <div class="container">
        <h1>Education History</h1>

        <!-- Dark Mode Toggle Button -->
        <button class="toggle-button" id="darkModeToggle">Toggle Dark Mode</button>

        <!-- Elementary School -->
        <section id="elementary-school">
            <h2>SEKOLAH KEBANGSAAN MAWAI (2011 - 2016)</h2>
            <ol>
                <li>UPSR: 1A 5B</li>
                <li>Position: School Prefect</li>
                <li>Achievements:
                    <ul>
                        <li>Ketua Pengawas Sekolah (2016)</li>
                    </ul>
                </li>
            </ol>

            <img src="SOURCE/Mawai.jpg" alt="SK Mawai" width="500" height="250" usemap="#schoolmap1" class="school-image">

            <map name="schoolmap1">
                <area shape="rect" coords="350,50,450,100" href="SK_Mawai.html" alt="SK Mawai" title="SK Mawai">
            </map>
        </section>

        <!-- Secondary School -->
        <section id="secondary-school">
            <h2>SEKOLAH MENENGAH KEBANGSAAN TUN HABAB (2017 - 2021)</h2>
            <ol>
                <li>PT3: 4A 2B 1C 1D</li>
                <li>SPM: 5A 3B 1C</li>
                <li>Position: Vice President of Duta Penggerak Digital (DPD)</li>
                <li>Position: Vice President of Pasukan Kadet Bersatu Malaysia (PKBM)</li>
                <li>Achievements:
                    <ul>
                        <li>Sports Athlete - Track & Field (2018)</li>
                        <li>Runner up for Shooting Competition for PKBM (2019)</li>
                        <li>Winner of Multimedia Competition (2019)</li>
                    </ul>
                </li>
            </ol>

            <img src="SOURCE/Tun Habab.jpg" alt="SMK Tun Habab" width="500" height="250" usemap="#schoolmap2" class="school-image">

            <map name="schoolmap2">
                <area shape="rect" coords="220,90,200,220" href="SMK_Tun_Habab.html" alt="SMK Tun Habab" title="SMK Tun Habab">
            </map>
        </section>

        <footer>
            <p>&copy; 2024 Education History Page</p>
        </footer>
    </div>

    <script>
        // Clock functionality
        function updateClock() {
            var now = new Date();
            var hours = now.getHours();
            var minutes = now.getMinutes();
            var seconds = now.getSeconds();
            var timeString = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
            document.getElementById('clock').textContent = timeString;
        }

        setInterval(updateClock, 1000); // Update clock every second
        updateClock(); // Initial call to display clock immediately

        // Dark mode toggle functionality
        const darkModeToggle = document.getElementById('darkModeToggle');
        darkModeToggle.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
            document.querySelector('.container').classList.toggle('dark-mode');
        });
    </script>
</body>
</html>