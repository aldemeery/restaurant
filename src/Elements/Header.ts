import CompositeElement from './CompositeElement';

class Header extends CompositeElement<HTMLElement> {
  protected renderElement(): void {
    this.rendered = document.createElement('header');
  }
}

export default Header;
