// Copyright 2022 Ringgaard Research ApS
// Licensed under the Apache License, Version 2

// Homepage components for ringgaard.com.

import {Component, stylesheet} from "/common/lib/component.js";

const cfg = {
  sitename: "Ringgaard Research",
  description: "Research and development of computer systems for knowledge " +
               "and language technologies.",

  address: "Ellebrinken 8",
  postal: "8520 Lystrup",
  country: "Denmark",
  phone: "+45 23295087",
  email: "contact@ringgaard.com",
  twitter: "mringgaard",

  company: "Ringgaard Research ApS",
  cvrno: "41641908",
  vatno: "DK41641908",
  bank: "Nykredit Bank",
  account: "5470-2674428",
  swift: "NYKBDKKK",
  iban: "DK4754700002674428",

  navbar: [
    {name: "Home", url: "/"},
    {name: "KnolCase", url: "/knolcase"},
    {name: "KnolBase", url: "/knolbase"},
    {name: "About", url: "/about"},
    {name: "Contact", url: "/contact"},
  ],

  quicklinks: [
    {name: "About", url: "/about"},
    {name: "Contact", url: "/contact"},
    {name: "KnolCase", url: "/knolcase"},
    {name: "KnolBase", url: "/knolbase"},
  ],

  menu: [
    {name: "About", url: "/about"},
    {name: "Privacy policy", url: "/privacy"},
    {name: "Contact", url: "/contact"},
  ],

  copyright: "Copyright 2021 Ringgaard Research ApS. All rights reserved.",
};

const contact = [
  {
    icon: "&#xf0e0;",
    text: cfg.email,
    url: `mailto:${cfg.email}`,
  },
  {
    icon: "&#xf095;",
    text: cfg.phone,
    url: `tel:${cfg.phone}`,
  },
  {
    icon: "&#xf099;",
    text: cfg.twitter,
    url: `https://twitter.com/${cfg.twitter}`,
  },
];

const social = [
  {icon: "&#xf09b;", url: "https://github.com/ringgaard/sling"},
  {icon: "&#xf099;", url: `https://twitter.com/${cfg.twitter}`},
  {icon: "&#xf0e0;", url: `mailto:${cfg.email}`},
];

function social_links() {
  let h = new Array();
  for (let site of social) {
    h.push(`<home-icon-link icon="${site.icon}" href="${site.url}">
            </home-icon-link>`);
  }
  return h.join("");
}

stylesheet(`
@font-face {
  font-family: "FontAwesome";
  font-style: normal;
  font-weight: 400;
  src: url('/home/app/fontawesome-webfont.woff2') format('woff2');
}

html {
  height: 100%;
}

body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  margin: 0px;
  line-height: 1.7;
}

button {
  background: #00A0D6;
  color: #fff;
  border: 1px solid #00A0D6;
  text-transform: uppercase;
  font: inherit;
  font-weight: bold;
  padding: 7px 20px;
  cursor: pointer;
}

button:hover {
  background: #fff;
  color: #00A0D6;
}

pre {
  background: #ecf0f1;
  padding: 8px;
}

`);

const logo = "\
M257.94,57.87c-16,22.9-37.86,45.41-62.54,60a60.83,60.83,0,0,0,7.66-29.64,61.\
23,61.23,0,0,0-61.25-61.06h0c-49.88,0-96.7,40.07-126,80.91-2.86-3.22-5.58-6.\
53-8.19-9.86S2.44,91.58,0,88.27C32.81,43.72,86,0,141.73,0,184.65,0,226.22,25\
.65,257.94,57.87Zm18,20.32c-2.62-3.33-5.33-6.64-8.19-9.86-29.33,40.84-76.16,\
80.91-126,80.91h0a61,61,0,0,1-53.59-90.7c-24.68,14.63-46.59,37.15-62.55,60,3\
1.73,32.22,73.3,57.89,116.21,57.88,55.79,0,108.93-43.73,141.73-88.28C281,84.\
88,278.52,81.53,275.91,78.19Zm-134.48-37a46.87,46.87,0,1,0,46.88,46.87A46.87\
,46.87,0,0,0,141.43,41.18Z";

export class HomeLogo extends Component {
  render() {
    return `
      <a href="/" tabindex="-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.46 176.46">
          <g><path d="${logo}"/></g>
        </svg>
      </a>`;
  }

  static stylesheet() {
    return `
      $ svg {
        width: 100%;
      }
      $ path {
        fill: #00A0D6; }
      }
    `;
  }
}

Component.register(HomeLogo);

export class HomeIcon extends Component {
  render() {
    return `${this.attrs.icon}`;
  }

  static stylesheet() {
    return `
      $ {
        font-family: "FontAwesome";
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `;
  }
}

Component.register(HomeIcon);

export class HomeIconLink extends Component {
  render() {
    return `<a href="${this.attrs.href}">
              <home-icon icon="${this.attrs.icon}"></div>
            </a>`;
  }

  static stylesheet() {
    return `
      $ a {
        border-radius: 50%;
        height: 32px;
        width: 32px;
        background: #e0dfdf;
        user-select: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
      }
      $ home-icon {
        color: white;
      }
      $ home-icon:hover {
        color: #656161;
      }
    `;
  }
}

Component.register(HomeIconLink);

export class HomeRibbon extends Component {
  static stylesheet() {
    return `
      $ {
        display: block;
        background: #00a0d6 url(/home/image/ribbon.png) no-repeat right;
        background-blend-mode: multiply;
        padding: 24px 7rem 24px 7rem;
        font: bold 40px Helvetica;
        color: white;
        text-transform: uppercase;
      }

      @media screen and (max-width: 767px) {
        $ {
          font: bold 24px Helvetica;
          background: #00a0d6;
          padding: 24px 1rem 24px 1rem;
        }
      }
    `;
  }
}

Component.register(HomeRibbon);

export class HomeSection extends Component {
  static stylesheet() {
    return `
      $ {
        display: block;
        margin-left: 7rem;
        margin-right: 7rem;
        color: #666666;
      }
      $ h2 {
        text-transform: uppercase;
        text-align: center;
        font-size: 1.4rem;
        color: #656161;
      }
      $ h4 {
        text-transform: uppercase;
        font-size: 1.2rem;
        color: #656161;
      }
      $ a {
        color: #00a0d6;
        text-decoration: none;
      }
      hr {
        margin: 2rem 0 2rem 0;
      }
      .picture-box {
        background-color: white;
        box-shadow: rgb(0 0 0 / 16%) 0px 4px 8px 0px,
                    rgb(0 0 0 / 23%) 0px 4px 8px 0px;
        padding: 10px;
      }

      @media screen and (max-width: 767px) {
        $ {
          margin-left: 1rem;
          margin-right: 1rem;
        }
      }
    }
    `;
  }
}

Component.register(HomeSection);

export class HomeFeatures extends Component {
  static stylesheet() {
    return `
      $ {
       display: flex;
      }

      @media screen and (max-width: 767px) {
        $  {
          flex-wrap: wrap;
        }
      }
    `;
  }
}

Component.register(HomeFeatures);

export class HomeFeature extends Component {
  static stylesheet() {
    return `
      $ {
        padding-right: 1rem;
        flex-grow: 1;
        flex-basis: 0;
        min-width: 300px;
      }
      $ home-icon {
        font-size: 4.5rem;
      }
      $ h4 {
        text-align: center;
      }
    `;
  }
}

Component.register(HomeFeature);

export class HomeBanner extends Component {
  render() {
    return `
      <home-logo></home-logo>
      <div class="title">${cfg.sitename}</div>
      <div class="social">${social_links()}</div>
    `;
  }

  static stylesheet() {
    return `
      $ {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 7rem;
        margin-right: 7rem;
        border-bottom: 1px solid #eaeaea;
      }

      $ home-logo {
        margin: 5px 10px 0px 0px;
        outline: none;
      }

      $ home-logo svg {
        width: 50px;
      }

      $ .title {
        font-family: "Helvetica", "sans";
        font-weight: bold;
        font-size: 1rem;
        letter-spacing: -1px;
        line-height: 1;
        color: #656161;
        margin: 16px 0px 16px 0px;
      }

      $ .social {
        display: flex;
        margin-left: auto;
      }

      $ home-icon-link {
        padding: 8px 0px 8px 8px;
      }

      @media screen and (max-width: 767px) {
        $ {
          margin-left: 1rem;
          margin-right: 1rem;
        }
      }
    `;
  }
}

Component.register(HomeBanner);

export class HomeNavbar extends Component {
  render() {
    let h = new Array();
    for (let item of cfg.navbar) {
      h.push(`<a href="${item.url}">${item.name}</a>`);
    }
    return h.join("");
  }

  static stylesheet() {
    return `
      $ {
        display: block;
        font-family: "Helvetica", "sans";
        font-weight: bold;
        font-size: 1.1rem;
        text-transform: uppercase;
        margin-left: 7rem;
        margin-right: 7rem;
        padding-top: 20px;
        padding-bottom: 20px;
      }
      $ a {
        display: inline-block;
        padding: 0.3rem 1.6rem 0.3rem 0rem;
        color: #656161;
        text-decoration: none;
      }
      $ a:hover {
        color: #00a0d6;
      }

      @media screen and (max-width: 767px) {
        $ {
          margin-left: 1rem;
          margin-right: 1rem;
        }
      }
    `;
  }
}

Component.register(HomeNavbar);

export class HomeAddressInfo extends Component {
  render() {
    return `
      <div>${cfg.address}</div>
      <div>${cfg.postal}</div>
      <div>${cfg.country}</div>
    `;
  }
}

Component.register(HomeAddressInfo);

export class HomeContactInfo extends Component {
  render() {
    let h = new Array();
    for (let c of contact) {
      h.push(`
        <div>
          <a href="${c.url}">
            <home-icon icon="${c.icon}"></home-icon>${c.text}
          </a>
        </div>
      `);
    }
    return h.join("");
  }

  static stylesheet() {
    return `
      $ {
        white-space: nowrap;
      }
      $ home-icon {
        display: inline;
        padding-right: 4px;
        font-size: 1rem;
      }
      $ a {
        color: inherit;
        text-decoration: none;
      }
    `;
  }
}

Component.register(HomeContactInfo);

export class HomeCompanyInfo extends Component {
  render() {
    let h = new Array();
    h.push(`
      <div>${cfg.company}</div>
      <div>CVR: ${cfg.cvrno}</div>
      <div>Bank: ${cfg.bank}</div>
      <div>Bank account: ${cfg.account}</div>
    `);
    if (this.attrs.detailed) {
      h.push(`
        <div>EU VAT#: ${cfg.vatno}</div>
        <div>SWIFT: ${cfg.swift}</div>
        <div>IBAN: ${cfg.iban}</div>
      `);
    }
    return h.join("");
  }
}

Component.register(HomeCompanyInfo);

export class HomeBottom extends Component {
  render() {
    return `
        <div class="row">
          <div class="column">
            <div class="site">${cfg.sitename}</div>
            <div class="description">${cfg.description}</div>
            <div class="social">${social_links()}</div>
          </div>
          <div class="column">
            <div class="title">CONTACT</div>
            <home-address-info></home-address-info>
            <home-contact-info></home-contact-info>
          </div>
          <div class="column">
            <div class="title">QUICK LINKS</div>
            <div class="quicklinks">${this.quicklinks()}</div>
          </div>
          <div class="column">
            <div class="title">COMPANY</div>
            <home-company-info></home-company-info>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="copyright">${cfg.copyright}</div>
          <div class="menu">${this.menu()}</div>
        </div>
    `;
  }

  menu() {
    let h = new Array();
    for (let item of cfg.menu) {
      h.push(`<a href="${item.url}">${item.name}</a>`);
    }
    return h.join("/");
  }

  quicklinks() {
    let h = new Array();
    h.push("<ul>");
    for (let item of cfg.quicklinks) {
      h.push(`<li><a href="${item.url}">${item.name}</a></li>`);
    }
    h.push("</ul>");
    return h.join("");
  }

  static stylesheet() {
    return `
      $ {
        display: block;
        font-size: 0.9rem;
        background: #2e4656; /*#303030;*/
        color: #ebebeb; /*#9a9898;*/
        width: 100%;
        margin-top: 1rem;
      }

      $ .row {
        display: flex;
        padding: 2rem 7rem 2rem 7rem;
        justify-content: space-evenly;
      }

      $ .column {
        display: flex;
        flex-direction: column;
        padding-right: 2rem;
      }

      $ hr {
        margin: 0rem 7rem;
        border-color: rgba(154, 152, 152, 0.5);
      }

      $ .site {
        font-family: "Helvetica", "sans";
        font-weight: bold;
        font-size: 2.5rem;
        line-height: 1;
        color: white;
        padding-bottom: 10px;
      }

      $ .social {
        display: flex;
        margin-left: auto;
        margin-top: 10px;
      }

      $ home-icon-link {
        padding: 8px 0px 8px 8px;
      }

      $ home-icon-link a {
        background: white;
      }

      $ home-icon-link a:hover {
        background: #e0dfdf;
      }

      $ home-icon-link home-icon {
        color: black;
      }

      $ .title {
        font-family: "Helvetica";
        font-size: 20px;
        font-weight: bold;
        color: white;
        padding: 10px 10px 10px 0px;
      }

      $ .quicklinks ul {
        list-style-type: "›";
        margin: 0px;
        padding: 0px;
      }

      $ .quicklinks a {
        color: inherit;
        text-decoration: none;
        user-select: none;
        margin-left: 10px;
        margin-right: 10px;
      }

      $ .copyright {
        display: inline;
        font-weight: bold;
        text-transform: uppercase;
      }

      $ .menu {
        display: flex;
        text-transform: uppercase;
        font-weight: bold;
        margin-left: auto;

        cursor: pointer;
      }

      $ .menu a {
        color: inherit;
        text-decoration: none;
        user-select: none;
        margin-left: 10px;
        margin-right: 10px;
      }

      @media screen and (max-width: 767px) {
        $ .row {
          padding: 1rem 1rem 1rem 1rem;
          justify-content: initial;
          flex-wrap: wrap;
        }
        $ hr {
          margin: 0rem 1rem;
        }
    `;
  }
}

Component.register(HomeBottom);

export class HomeHeader extends Component {
  render() {
    return `
      <home-banner></home-banner>
      <home-navbar></home-navbar>
    `;
  }
}

Component.register(HomeHeader);

export class HomeFooter extends Component {
  render() {
    return `
      <home-bottom></home-bottom>
    `;
  }
}

Component.register(HomeFooter);

export class HomeFeedback extends Component {
  onconnected() {
    this.bind("#submit", "click", e => this.onsubmit(e));
  }

  status(msg) {
    this.find("#status").innerHTML = msg;
  }

  async onsubmit(e) {
    let name = this.find("#name").value.trim();
    let email = this.find("#email").value.trim();
    let message = this.find("#message").value.trim();
    if (!name) {
      this.status("Name is missing");
    } else if (!email) {
      this.status("E-mail address is missing");
    } else if (!message) {
      this.status("Message is missing");
    } else {
      let n = Component.escape(name);
      let e = Component.escape(email);
      let r = await fetch(`/home/feedback?sender=${e}&name=${n}`, {
        method: "POST",
        body: message,
      });
      if (r.ok) {
        this.status("Message has been sent");
      } else {
        this.status("Error sending message");
      }
    }
  }


  static stylesheet() {
    return `
      $ {
        display: flex;
        flex-direction: column;
        font-size: 1rem;
        color: #656161;
        gap: 10px;
        flex: 1;
        min-width: 300px;
      }
      $ label {
        font-weight: bold;
      }
      $ input {
        border: 0 none;
        background: rgba(154, 152, 152, 0.2);
        box-shadow: none;
        width: 50%;
        line-height: 2rem;
        padding: 0.425rem 0.425rem;
        font: inherit;
        outline: 0;
      }
      $ textarea {
        border: 0 none;
        background: rgba(154, 152, 152, 0.2);
        box-shadow: none;
        width: 80%;
        min-width: 80%;
        min-height: 25rem;
        resize: vertical;
        line-height: 2rem;
        padding: 0.425rem 0.425rem;
        font: inherit;
        outline: 0;
      }
    `;
  }
}

Component.register(HomeFeedback);

export class HomeCotm extends Component {
  render() {
    let p = this.attrs;
    return `
      <div class="picture">
        <a href="/c/${p.case}" target="_blank">
          <img src="https://ringgaard.com/media/${p.image}">
        </a>
      </div>
      <div class="descr">
        <div class="time">${p.time}</div>
        <div class="title">
          Case #${p.case}:
          <a href="/c/${p.case}" target="_blank">${p.title}</a>
        </div>
        <div class="subtitle">${p.description}</div>
      </div>
    `;
  }

  static stylesheet() {
    return `
      $ {
        display: flex;
        margin: 16px;
      }
      $ a {
        text-decoration: none;
      }
      $ img {
        max-width: 150px;
        max-height: 150px;
      }
      $ .picture {
        width: 150px;
        margin: 5px;
      }
      $ .descr {
        margin: 5px;
      }
      $ .time {
        font-size: 18px;
        font-weight: bold;
      }
      $ .title {
        font-size: 16px;
      }
      $ .subtitle {
        font-size: 16px;
        font-style: italic;
      }
    `;
  }}

Component.register(HomeCotm);

// Defer displaying page until all components have been loaded.
document.body.style.display = "";

