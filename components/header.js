class HeaderComponent extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.render();
  }

  render() {
      this.innerHTML = `
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                  <a class="navbar-brand" href="#">Reusable_HTML by abdullahbq</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                          <li class="nav-item">
                              <a class="nav-link" href="/">Home</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="/about.html">About</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      `;
  }
}

customElements.define("header-component", HeaderComponent);
