import { html, css, LitElement } from 'lit';

export class GophersApiWatcherGopher extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 250px;
        height: 400px;
        color: var(--gophers-api-watcher-text-color, #000);
        border: 1px solid #404040;
        margin: 10px;
        padding-top: 0;
        padding-left: 5px;
        padding-right: 5px;
        border-radius: 5px;
        background-color: #ffe415;
      }
      .gopher {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: center;
      }
      .gopher .header {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
      }

      .header .title {
        width: calc(100% - 10px);
      }

      .title img {
        width: 100%;
      }

      .gopher .name {
        font-family: sans-serif;
        font-size: 16pt;
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
      }

      .gopher .image {
        width: calc(100% - 20px);
        height: calc(100% - 60px);
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        align-items: center;
        background-color: white;
        margin-left: 10px;
        margin-right: 10px;
        border: solid 1px #404040;
        border-radius: 4px;
      }

      .gopher .image img {
        max-width:100%;
        max-height:calc(100% - 20px);
      }

      .watcher img {
        width: 50px;
      }

      .gopher .footer {
        height: 50px;
        width: 100%;
        display:flex;
        flex-flow: row;
        justify-content: begin;
        align-items: center;
      }

      .name .tag {
        margin: 3px;
        padding-left: 5px;
        padding-right: 5px;
        padding-top: 5px;
        padding-bottom: 5px;
        border: solid 1px #404040;
        border-radius: 4px;
        background-color: white;
        width: calc(100% - 30px);
        display:flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
      }
    `;
  }

  static get properties() {
    return {
      name: {
        type: String,
      },
      url: {
        type: String,
      }
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="gopher">
        <div class="header">
          <div class="title"> <img src="/img/title.png" /> </div>
        </div>
        <div class="image">
          <img src=${this.url} alt=${this.name} />
        </div>
        <div class="name"> 
          <div class="tag"> ${this.name} </div>
        </div>
        <div class="footer">
          <div class="watcher"> <img src="/img/watcher2.png" /> </div>
        </div>
      </div>
    `;
  }


}
