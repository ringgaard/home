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

  company: "Ringgaard Research ApS",
  cvrno: "41641908",
  vatno: "DK41641908",
  bank: "Nykredit Bank",
  account: "5470-2674428",
  swift: "NYKBDKKK",
  iban: "DK4754700002674428",

  social: [
    {icon: "&#xf09b;", url: "https://github.com/ringgaard/sling"},
    {icon: "&#xf099;", url: "https://twitter.com/mringgaard"},
    {icon: "&#xf0e0;", url: "mailto:contact@ringgaard.com"},
  ],

  navbar: [
    {name: "Home", url: "/"},
    {name: "About", url: "/about"},
    {name: "Contact", url: "/contact"},
  ],

  quicklinks: [
    {name: "About", url: "/about"},
    {name: "Contact", url: "/contact"},
  ],

  menu: [
    {name: "About", url: "/about"},
    {name: "Privacy policy", url: "/privacy"},
    {name: "Contact", url: "/contact"},
  ],

  copyright: "Copyright 2021 Ringgaard Research ApS. All rights reserved.",
}

function social_links() {
  let h = new Array();
  for (let site of cfg.social) {
    h.push(`<home-icon icon="${site.icon}" href="${site.url}"></home-icon>`);
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

body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  margin: 0px;
  line-height: 1.7;
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
    return `<a href="${this.props.href}"><div>${this.props.icon}</div></a>`;
  }

  static stylesheet() {
    return `
      $ {
        font-family: "FontAwesome";
      }
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
      $ div {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
      $ div:hover {
        color: #656161;
      }
    `;
  }
}

Component.register(HomeIcon);

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
        color: #9a9898;
      }
      a {
        color: #00a0d6;
        text-decoration: none;
      }
    `;
  }
}

Component.register(HomeSection);

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
        width: 60px;
      }

      $ .title {
        font-family: "Helvetica", "sans";
        font-weight: bold;
        font-size: 2.5rem;
        letter-spacing: -1px;
        color: #656161;
        margin: 16px 0px 16px 0px;
      }

      $ .social {
        display: flex;
        margin-left: auto;
      }

      $ home-icon {
        padding-left: 8px;
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
      }
      $ a:hover {
        color: #00a0d6;
      }
    `;
  }
}

Component.register(HomeNavbar);

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
            <div>${cfg.address}</div>
            <div>${cfg.postal}</div>
            <div>${cfg.country}</div>
            <div>${cfg.phone}</div>
            <div>${cfg.email}</div>
          </div>
          <div class="column">
            <div class="title">QUICK LINKS</div>
            <div class="quicklinks">${this.quicklinks()}</div>
          </div>
          <div class="column">
            <div class="title">COMPANY</div>
            <div>${cfg.company}</div>
            <div>CVR: ${cfg.cvrno}</div>
            <div>Bank: ${cfg.bank}</div>
            <div>Bank account: ${cfg.account}</div>
            <div>EU VAT#: ${cfg.vatno}</div>
            <div>SWIFT: ${cfg.swift}</div>
            <div>IBAN: ${cfg.iban}</div>
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
    for (let item of cfg.menu) {
      h.push(`<li><a href="${item.url}">${item.name}</a></li>`);
    }
    h.push("</ul>");
    return h.join("");
  }

  static stylesheet() {
    return `
      $ {
        display: block;
        color: #9a9898;
        font-size: 0.9rem;
        background: #303030;
        width: 100%;
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
        color: white;
        padding-bottom: 10px;
      }

      $ .social {
        display: flex;
        margin-left: auto;
        margin-top: 10px;
      }

      $ home-icon {
        padding-left: 8px;
      }

      $ home-icon a {
        background: white;
      }

      $ home-icon div {
        color: black;
      }

      $ home-icon a:hover {
        background: #e0dfdf;
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

// Defer displaying page until all components have been loaded.
document.body.style.display = "";

