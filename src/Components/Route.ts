import A from '../Elements/A';
import { Dictionary } from '../types';

class Route extends A {
  public render(): HTMLAnchorElement {
    this.rendered = super.render();
    this.registerEventListeners();
    return this.rendered;
  }

  private registerEventListeners(): void {
    this.rendered.addEventListener('click', (e) => {
      e.preventDefault();
      history.pushState(null, null, this.rendered.href);
      this.rendered.dispatchEvent(new CustomEvent('routed', { bubbles: true }));
    });
  }
}

export default Route;
