import './bootstrap';

import App from "./components/App.svelte";
import MyTestComponent from "./components/MyTestComponent.svelte";

customElements.define('my-app', App);
customElements.define('my-test-component', MyTestComponent);

// const app = new App({
//   target: document.body
// });

// window.app = app;

// export default app;
