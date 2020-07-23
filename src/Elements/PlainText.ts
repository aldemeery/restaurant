import Renderable from '../Interfaces/Renderable';

class PlainText implements Renderable<Text> {
  protected rendered: Text;

  protected content: string;

  constructor(content: string) {
    this.content = content;
  }

  public render(): Text {
    if (!this.rendered) {
      this.rendered = document.createTextNode(this.content);
    }
    return this.rendered;
  }
}

export default PlainText;
