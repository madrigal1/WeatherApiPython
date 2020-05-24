window.onload = () => {
    document.getElementById('submit').addEventListener("click", get_weather);
}


function get_weather() {
    const { PythonShell } = require('python-shell');
    const path = require("path");


    let city = document.getElementById("city").value;
    document.getElementById("city").value = " ";

    const options = {
        scriptPath: path.join(__dirname, '/../engine/'),
        args: [city]
    }

    let pyshell = new PythonShell('weather_engine.py', options);

    pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        console.log(message);
        document.getElementById('output').innerHTML = message;
    });

    // end the input stream and allow the process to exit
    pyshell.end(function (err, code, signal) {
        if (err) throw err;
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
        console.log('finished');
    });
    /*  const weather = new python('weather_engine.py', options);
    
     weather.on('message', (message) => {
         document.getElementById('output').innerHTML = message;
     });*/
} 