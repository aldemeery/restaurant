import FooterElement from '../Elements/Footer';
import A from '../Elements/A';
import I from '../Elements/I';

class Footer extends FooterElement {
  constructor() {
    super({ class: 'col-12 footer' });
    this.build();
  }

  private build(): void {
    this.add(
      new A('#', { class: 'footer-link' }).add(
        new I({ class: 'fab fa-twitter' })
      )
    )
      .add(
        new A('#', { class: 'footer-link' }).add(
          new I({ class: 'fab fa-facebook' })
        )
      )
      .add(
        new A('#', { class: 'footer-link' }).add(
          new I({ class: 'fab fa-linkedin' })
        )
      );
  }
}

export default Footer;
