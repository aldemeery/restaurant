import CompositeElement from './CompositeElement';

class Main extends CompositeElement<HTMLElement> {
  protected renderElement(): void {
    this.rendered = document.createElement('main');
  }
}

export default Main;
