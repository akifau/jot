(function() {
    // Wait for the Jotform Widget SDK to load
    JFCustomWidget.subscribe("ready", function() {
        // Example: Send a value to Jotform when the widget loads
        JFCustomWidget.sendData({
            value: "Hello, Jotform!"
        });

        // Listen for data changes from Jotform
        JFCustomWidget.subscribe("submit", function() {
            let inputValue = document.getElementById("customInput").value;
            JFCustomWidget.sendData({
                value: inputValue
            });
        });
    });
})();
