class FooterComponent extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.render();
  }

  render() {
      this.innerHTML = `
          <footer class="footer mt-auto py-3 bg-light">
              <div class="container">
                  <span class="text-muted">Your Footer Content &copy; ${new Date().getFullYear()}</span>
              </div>
          </footer>
      `;
  }
}

customElements.define("footer-component", FooterComponent);
