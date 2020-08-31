import CompositeElement from './CompositeElement';

class Nav extends CompositeElement<HTMLElement> {
  protected renderElement(): void {
    this.rendered = document.createElement('nav');
  }
}

export default Nav;
