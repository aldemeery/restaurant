import Div from '../Elements/Div';
import Span from '../Elements/Span';
import PlainText from '../Elements/PlainText';
import P from '../Elements/P';
import A from '../Elements/A';

class Contact extends Div {
  constructor() {
    super({ class: 'contact' });
    this.build();
  }

  private build(): void {
    this.add(
      new Div({ class: 'home-text' })
        .add(
          new Span({ class: 'title' }).add(
            new PlainText('Contact Us Via Email:')
          )
        )
        .add(
          new P({ class: 'more' }).add(
            new A('mailto:go@example.com', { class: 'email' }).add(
              new PlainText('go@example.com')
            )
          )
        )
    );
  }
}

export default Contact;
