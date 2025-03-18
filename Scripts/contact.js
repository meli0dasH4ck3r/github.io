document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const title = "Contact Us"; 

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

        /*
        // EmailJS
        emailjs.init("Lh-j6vRh0MjNVFu0v");

        emailjs.send("service_7f42g5n", "template_b6n03tn", {
            title: title,         
            from_name: name,      
            from_email: email,    
            message: message,    
            reply_to: email      
        }).then(
            function (response) {
                alert("Message sent successfully!");
                form.reset();
            },
            function (error) {
                alert("Failed to send message. Try again later.");
            }
        );
        */
    }); 

    // Improved DevTools Detection
    const detectDevTools = () => {
        let threshold = 160; 
        setInterval(() => {
            if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
                console.warn("DevTools Opened!\nDisplaying submitted form data...");
            }
        }, 1000);
    };

    detectDevTools();
}); 
