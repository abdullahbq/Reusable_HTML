// Create a custom element for the About page
class AboutPage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="intro-section bg-primary bg-opacity-10">
        <div class="container py-5"> 
                <h2>About Us</h2>
                <p>
                    Welcome to our about page! We are a fantastic team dedicated to delivering high-quality products
                    and services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo metus quis
                    feugiat posuere.
                </p>
                <p>
                    Our mission is to provide solutions that meet your needs and exceed your expectations. Feel free
                    to contact us if you have any questions or inquiries.
                </p>
            </div>
            </section>
        `;
    }
}

// Define the custom element
customElements.define("about-page", AboutPage);
