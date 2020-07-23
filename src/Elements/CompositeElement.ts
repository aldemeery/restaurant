import Renderable from '../Interfaces/Renderable';
import LeafElement from './LeafElement';
import Div from './Div';

abstract class CompositeElement<T extends HTMLElement> extends LeafElement<T> {
  protected children: Renderable<Node>[] = [];

  public add(child: Renderable<Node>): CompositeElement<T> {
    this.children.push(child);
    return this;
  }

  public reset(): void {
    this.children = [];
    if (this.rendered) {
      this.rendered.innerHTML = '';
    }
  }

  public render(): T {
    this.rendered = super.render();

    this.children.forEach((child) => {
      this.rendered.appendChild(child.render());
    });

    return this.rendered;
  }
}

export default CompositeElement;
