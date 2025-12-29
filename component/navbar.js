class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="bg-white shadow-md py-4 px-4 md:px-8 lg:px-16">
        <div class="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" class="text-2xl font-bold text-blue-600">Tradata</a>
          <div class="flex gap-6">
            <a href="#how-it-works" class="text-gray-600 hover:text-blue-600">How It Works</a>
            <a href="#demo" class="text-gray-600 hover:text-blue-600">Demo</a>
            <a href="#contact" class="text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);