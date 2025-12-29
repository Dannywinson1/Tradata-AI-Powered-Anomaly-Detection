class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-gray-900 text-white py-8 px-4 md:px-8 lg:px-16">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Tradata. All rights reserved.</p>
          <div class="flex gap-4 mt-4 md:mt-0">
            <a href="#" class="hover:text-blue-300">Privacy Policy</a>
            <a href="#" class="hover:text-blue-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);