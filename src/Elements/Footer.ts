import CompositeElement from './CompositeElement';

class Footer extends CompositeElement<HTMLElement> {
  protected renderElement(): void {
    this.rendered = document.createElement('footer');
  }
}

export default Footer;
