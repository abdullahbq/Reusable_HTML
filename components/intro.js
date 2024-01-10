class Intro extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section class="intro-section bg-primary bg-opacity-10">
                <div class="container py-5">                    
                    <h1>Welcome!</h1>
                    <p>This is a reusable HTML Element (edit intro.js file in components folder)</p>                     
                </div>
            </section>
        `;
    }
}

customElements.define("intro-component", Intro);